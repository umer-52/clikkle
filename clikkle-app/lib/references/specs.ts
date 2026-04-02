import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { OpenAPIV3 } from "openapi-types";
import { Platform, type ServiceValue } from "./constants";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SPECS_ROOT = path.join(process.cwd(), "node_modules", "@appwrite.io", "specs");
const DESCRIPTIONS_DIR = path.join(__dirname, "descriptions");

export type SDKMethod = {
    'rate-limit': number;
    'rate-time': number;
    'rate-key': string | string[];
    id: string;
    title: string;
    description: string;
    demo: string;
    group?: string;
    parameters: Array<{
        name: string;
        description: string;
        required: boolean;
        type: string;
        example: string;
    }>;
    responses: Array<{
        code: number;
        contentType?: string;
        models?: SDKMethodModel[];
    }>;
    method: OpenAPIV3.HttpMethods;
    url: string;
};

type SDKMethodModel = {
    id: string;
    name: string;
};

type AppwriteDeprecated = {
    since: string;
    replaceWith: string;
};

type AppwriteOperationObject = OpenAPIV3.OperationObject & {
    'x-appwrite': {
        method: string;
        group?: string;
        weight: number;
        cookies: boolean;
        type: string;
        demo: string;
        edit: string;
        'rate-limit': number;
        'rate-time': number;
        'rate-key': string;
        scope: string;
        platforms: string[];
        packaging: boolean;
        public: boolean;
        methods?: AppwriteAdditionalMethod[];
    };
};

type AppwriteAdditionalMethod = {
    name: string;
    desc: string;
    auth: { Project: []; Key: [] };
    parameters: string[];
    required: string[];
    responses: { code: number; model: string }[];
    description: string;
    demo: string;
    public: boolean;
    deprecated?: AppwriteDeprecated;
};

export type AppwriteSchemaObject = OpenAPIV3.SchemaObject & {
    'x-example': string;
};

export interface Property {
    name: string;
    items?: {
        type?: string;
        oneOf?: OpenAPIV3.ReferenceObject[];
    } & OpenAPIV3.ReferenceObject;
}

export const ModelType = {
    REST: 'REST',
    GRAPHQL: 'GraphQL'
} as const;

type ModelTypeType = keyof typeof ModelType;
type ModelTypeValue = (typeof ModelType)[ModelTypeType];

function versionHasExamplesPack(version: string): boolean {
    switch (version) {
        case '0.15.x':
        case '1.0.x':
        case '1.1.x':
        case '1.2.x':
        case '1.3.x':
        case '1.4.x':
        case '1.5.x':
        case '1.6.x':
        case '1.7.x':
        case '1.8.x':
            return true;
        default:
            return false;
    }
}

function resolveExampleDemoPath(
    version: string,
    platform: string,
    demoFile: string | undefined,
    isAndroid: boolean,
    isAndroidServer: boolean,
    isAndroidJava: boolean
): string | null {
    if (!demoFile) return null;
    if (isAndroid) {
        const sub = isAndroidServer ? 'server-kotlin' : 'client-android';
        const lang = isAndroidJava ? 'java' : 'kotlin';
        return path.join(SPECS_ROOT, 'examples', version, sub, lang, demoFile);
    }
    return path.join(SPECS_ROOT, 'examples', version, platform, 'examples', demoFile);
}

function loadDemoFromDisk(absPath: string): string | null {
    try {
        return fs.readFileSync(absPath, 'utf8');
    } catch {
        return null;
    }
}

function stripMarkdownCodeFence(content: string): string {
    const trimmed = content.trim();
    const fenced = trimmed.match(/^```[^\n]*\n([\s\S]*?)\n```[ \t]*$/);
    if (fenced) {
        return fenced[1];
    }
    return content;
}

function filterRequestBodyProperties(
    requestBody: OpenAPIV3.ReferenceObject | OpenAPIV3.RequestBodyObject | undefined,
    allowedParameters: string[]
): OpenAPIV3.ReferenceObject | OpenAPIV3.RequestBodyObject | undefined {
    if (!requestBody || '$ref' in requestBody) {
        return requestBody;
    }

    const filteredRequestBody = structuredClone(requestBody);
    if (filteredRequestBody.content?.['application/json']?.schema) {
        const schema = filteredRequestBody.content['application/json']
            .schema as OpenAPIV3.SchemaObject;

        if (schema.properties) {
            const filteredProperties: {
                [key: string]: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject;
            } = {};

            for (const [propertyName, propertySchema] of Object.entries(schema.properties)) {
                if (allowedParameters.includes(propertyName)) {
                    filteredProperties[propertyName] = propertySchema;
                }
            }

            schema.properties = filteredProperties;
            schema.required = schema.required?.filter((prop) => allowedParameters.includes(prop));
        }
    }

    return filteredRequestBody;
}

/**
 * Checks if a method has additional methods in x-appwrite.methods
 */
function hasAdditionalMethods(
    method: OpenAPIV3.OperationObject | undefined,
    service: string
): method is AppwriteOperationObject {
    return !!(
        method?.tags?.includes(service) &&
        typeof (method as AppwriteOperationObject)['x-appwrite'] === 'object' &&
        Array.isArray((method as AppwriteOperationObject)['x-appwrite']?.methods)
    );
}

/**
 * Processes additional methods for a given HTTP method and yields the results
 */
function* processAdditionalMethods(
    method: OpenAPIV3.OperationObject,
    httpMethod: OpenAPIV3.HttpMethods,
    url: string
): Generator<{
    method: OpenAPIV3.HttpMethods;
    value: OpenAPIV3.OperationObject | AppwriteOperationObject;
    url: string;
}> {
    const appwriteMethod = method as AppwriteOperationObject;
    const additionalMethods = appwriteMethod['x-appwrite'].methods!;

    for (const additionalMethod of additionalMethods) {
        // Skip methods where public is false
        if (additionalMethod.public === false) {
            continue;
        }

        yield {
            method: httpMethod,
            value: {
                ...method,
                summary: additionalMethod.desc?.length > 0 ? additionalMethod.desc : method.summary,
                description: additionalMethod.description,
                requestBody: filterRequestBodyProperties(
                    method.requestBody,
                    additionalMethod.parameters
                ),
                'x-appwrite': {
                    ...appwriteMethod['x-appwrite'],
                    method: additionalMethod.name,
                    demo: additionalMethod.demo,
                    public: additionalMethod.public
                },
                responses: {
                    ...appwriteMethod.responses,
                    [additionalMethod.responses[0].code]:
                        additionalMethod.responses[0].code === 204
                            ? { description: 'No Content' }
                            : {
                                  content: {
                                      'application/json': {
                                          schema: {
                                              $ref: additionalMethod.responses[0].model
                                          }
                                      }
                                  }
                              }
                }
            },
            url
        };
    }
}

function* iterateAllMethods(
    api: OpenAPIV3.Document,
    service: string
): Generator<{
    method: OpenAPIV3.HttpMethods;
    value: OpenAPIV3.OperationObject | AppwriteOperationObject;
    url: string;
}> {
    for (const url in api.paths) {
        const methods = api.paths[url];

        // Handle non-additional methods
        if (methods?.get?.tags?.includes(service) && !hasAdditionalMethods(methods.get, service)) {
            const operation = methods.get as AppwriteOperationObject;
            if (operation['x-appwrite']?.public !== false) {
                yield { method: OpenAPIV3.HttpMethods.GET, value: methods.get, url };
            }
        }
        if (
            methods?.post?.tags?.includes(service) &&
            !hasAdditionalMethods(methods.post, service)
        ) {
            const operation = methods.post as AppwriteOperationObject;
            if (operation['x-appwrite']?.public !== false) {
                yield { method: OpenAPIV3.HttpMethods.POST, value: methods.post, url };
            }
        }
        if (methods?.put?.tags?.includes(service) && !hasAdditionalMethods(methods.put, service)) {
            const operation = methods.put as AppwriteOperationObject;
            if (operation['x-appwrite']?.public !== false) {
                yield { method: OpenAPIV3.HttpMethods.PUT, value: methods.put, url };
            }
        }
        if (
            methods?.patch?.tags?.includes(service) &&
            !hasAdditionalMethods(methods.patch, service)
        ) {
            const operation = methods.patch as AppwriteOperationObject;
            if (operation['x-appwrite']?.public !== false) {
                yield { method: OpenAPIV3.HttpMethods.PATCH, value: methods.patch, url };
            }
        }
        if (
            methods?.delete?.tags?.includes(service) &&
            !hasAdditionalMethods(methods.delete, service)
        ) {
            const operation = methods.delete as AppwriteOperationObject;
            if (operation['x-appwrite']?.public !== false) {
                yield { method: OpenAPIV3.HttpMethods.DELETE, value: methods.delete, url };
            }
        }

        // Process additional methods
        if (hasAdditionalMethods(methods?.get, service)) {
            yield* processAdditionalMethods(methods.get!, OpenAPIV3.HttpMethods.GET, url);
        }
        if (hasAdditionalMethods(methods?.post, service)) {
            yield* processAdditionalMethods(methods.post!, OpenAPIV3.HttpMethods.POST, url);
        }
        if (hasAdditionalMethods(methods?.put, service)) {
            yield* processAdditionalMethods(methods.put!, OpenAPIV3.HttpMethods.PUT, url);
        }
        if (hasAdditionalMethods(methods?.patch, service)) {
            yield* processAdditionalMethods(methods.patch!, OpenAPIV3.HttpMethods.PATCH, url);
        }
        if (hasAdditionalMethods(methods?.delete, service)) {
            yield* processAdditionalMethods(methods.delete!, OpenAPIV3.HttpMethods.DELETE, url);
        }
    }
}

function getParameters(operation: AppwriteOperationObject): SDKMethod['parameters'] {
    const parameters: ReturnType<typeof getParameters> = [];
    const requestBody = operation?.requestBody as OpenAPIV3.RequestBodyObject;
    const schemaJson = requestBody?.content['application/json']?.schema as OpenAPIV3.SchemaObject;
    const schemaMultipart = requestBody?.content['multipart/form-data']
        ?.schema as OpenAPIV3.SchemaObject;
    if (operation?.parameters) {
        for (const parameter of operation?.parameters as OpenAPIV3.ParameterObject[]) {
            const schema = parameter.schema as OpenAPIV3.SchemaObject;

            parameters.push({
                name: parameter.name,
                description: parameter.description ?? '',
                required: parameter.required ?? false,
                type: schema?.type ?? '',
                example: schema?.example
            });
        }
    }
    if (schemaJson?.properties) {
        for (const [key, value] of Object.entries(schemaJson.properties)) {
            const property = value as AppwriteSchemaObject;
            parameters.push({
                name: key,
                description: property.description ?? '',
                required: schemaJson?.required?.includes(key) ?? false,
                type: property.type ?? '',
                example: property['x-example'] ?? ''
            });
        }
    }
    if (schemaMultipart?.properties) {
        for (const [key, value] of Object.entries(schemaMultipart.properties)) {
            const property = value as AppwriteSchemaObject;
            parameters.push({
                name: key,
                description: property.description ?? '',
                required: schemaMultipart?.required?.includes(key) ?? false,
                type: property.type ?? '',
                example: property['x-example'] ?? ''
            });
        }
    }

    return parameters.sort((a, b) => {
        return a.required === b.required ? 0 : a.required ? -1 : 1;
    });
}

export function getSchema(id: string, api: OpenAPIV3.Document): OpenAPIV3.SchemaObject {
    const schema = api.components?.schemas?.[id] as OpenAPIV3.SchemaObject;
    if (schema) {
        return schema;
    }

    /**
     * It is better to show a `404` if no schema exists for a given `id`,
     * rather than a 500 internal server error which is, misleading in cases like this.
     *
     * It is quite possible that the user just wandered around here with a wrong docs link!
     */
    const e = new Error("Not found");
    e.name = "SchemaNotFound";
    throw e;
}

const apiDocCache = new Map<string, OpenAPIV3.Document>();

export async function getApi(version: string, platform: string): Promise<OpenAPIV3.Document> {
    const isClient = platform.startsWith("client-");
    const isServer = platform.startsWith("server-");
    const kind = isServer ? "server" : isClient ? "client" : "console";
    const cacheKey = `${version}:${kind}`;
    const hit = apiDocCache.get(cacheKey);
    if (hit) return hit;
    const filePath = path.join(SPECS_ROOT, "specs", version, `open-api3-${version}-${kind}.json`);
    const buf = await fs.promises.readFile(filePath, "utf8");
    const doc = JSON.parse(buf) as OpenAPIV3.Document;
    apiDocCache.set(cacheKey, doc);
    return doc;
}

export async function getDescription(service: string): Promise<string> {
    const filePath = path.join(DESCRIPTIONS_DIR, `${service}.md`);
    return fs.promises.readFile(filePath, "utf8");
}

export async function getService(
    version: string,
    platform: string,
    service: string
): Promise<{
    service: {
        name: ServiceValue;
        description: string;
    };
    methods: SDKMethod[];
}> {
    /**
     * Exceptions for Android SDK.
     */
    const isAndroidJava =
        platform === Platform.ClientAndroidJava || platform === Platform.ServerJava;
    const isAndroidKotlin =
        platform === Platform.ClientAndroidKotlin || platform === Platform.ServerKotlin;
    const isAndroid = isAndroidJava || isAndroidKotlin;
    const isAndroidServer = platform === Platform.ServerJava || platform === Platform.ServerKotlin;
    const api = await getApi(version, platform);

    const data: Awaited<ReturnType<typeof getService>> = {
        service: {
            name: service as ServiceValue,
            description: await getDescription(service)
        },
        methods: []
    };

    if (!versionHasExamplesPack(version)) {
        return data;
    }

    for (const { method, value, url } of iterateAllMethods(api, service)) {
        const operation = value as AppwriteOperationObject;
        const parameters = getParameters(operation);
        const responses: SDKMethod['responses'] = Object.entries(operation.responses ?? {}).map(
            (tuple) => {
                const [code, response] = tuple as [string, OpenAPIV3.ResponseObject];
                const models: SDKMethodModel[] = [];
                const schemas = response?.content?.['application/json']
                    ?.schema as OpenAPIV3.SchemaObject;
                if (code !== '204') {
                    if (schemas?.oneOf) {
                        schemas.oneOf.forEach((ref) => {
                            const schema = resolveReference(ref as OpenAPIV3.ReferenceObject, api);
                            models.push({
                                id: getIdFromReference(ref as OpenAPIV3.ReferenceObject),
                                name: schema.description ?? ''
                            });
                        });
                    } else {
                        if (schemas) {
                            const id = getIdFromReference(schemas as OpenAPIV3.ReferenceObject);
                            const schema = resolveReference(
                                schemas as OpenAPIV3.ReferenceObject,
                                api
                            );
                            models.push({
                                id,
                                name: schema?.description ?? ''
                            });
                        }
                    }
                }

                return {
                    code: Number(code),
                    contentType: response?.content ? Object.keys(response.content)[0] : undefined,
                    models
                };
            }
        );

        const demoPath = resolveExampleDemoPath(
            version,
            platform,
            operation["x-appwrite"]?.demo,
            isAndroid,
            isAndroidServer,
            isAndroidJava
        );
        if (!demoPath) {
            continue;
        }
        const rawDemo = loadDemoFromDisk(demoPath);
        if (rawDemo === null) {
            continue;
        }
        const demo = stripMarkdownCodeFence(rawDemo);

        data.methods.push({
            id: operation['x-appwrite'].method,
            group: operation['x-appwrite'].group,
            demo,
            title: operation.summary ?? '',
            description: operation.description ?? '',
            parameters: parameters ?? [],
            responses: responses ?? [],
            method,
            url,
            'rate-limit': operation['x-appwrite']['rate-limit'],
            'rate-time': operation['x-appwrite']['rate-time'],
            'rate-key': operation['x-appwrite']['rate-key']
        });
    }

    // Sort methods by weight from x-appwrite metadata
    data.methods.sort((a, b) => {
        const aPath = api.paths[a.url] as OpenAPIV3.PathItemObject;
        const bPath = api.paths[b.url] as OpenAPIV3.PathItemObject;
        const aMethod = a.method.toLowerCase() as Lowercase<OpenAPIV3.HttpMethods>;
        const bMethod = b.method.toLowerCase() as Lowercase<OpenAPIV3.HttpMethods>;
        const aWeight = (aPath?.[aMethod] as AppwriteOperationObject)?.['x-appwrite']?.weight ?? 0;
        const bWeight = (bPath?.[bMethod] as AppwriteOperationObject)?.['x-appwrite']?.weight ?? 0;
        return aWeight - bWeight;
    });

    return data;
}

export function getIdFromReference(reference: OpenAPIV3.ReferenceObject) {
    const id = reference?.$ref?.split('/')?.pop();
    if (!id) {
        throw new Error('Invalid reference');
    }
    return id;
}

export function resolveReference(
    reference: OpenAPIV3.ReferenceObject,
    api: OpenAPIV3.Document
): AppwriteSchemaObject {
    const id = reference.$ref.split('/').pop();
    if (!id) {
        throw new Error('Invalid reference');
    }
    const schema = api.components?.schemas?.[id] as AppwriteSchemaObject;
    if (schema) {
        return schema;
    }
    throw new Error("Schema doesn't exist");
}

export const getExample = (
    schema: OpenAPIV3.SchemaObject,
    api: OpenAPIV3.Document<object>,
    modelType: ModelTypeValue = ModelType.REST
): object => {
    if (schema.example) {
        if (modelType === ModelType.GRAPHQL) {
            const modifiedExample = JSON.parse(JSON.stringify(schema.example));
            return transformForGraphQL(modifiedExample);
        }
        return schema.example;
    }

    return {};
};

function transformForGraphQL(obj: object): object {
    if (Array.isArray(obj)) {
        return obj.map(transformForGraphQL);
    }

    if (obj !== null && typeof obj === 'object') {
        const transformed: Record<string, object> = {};
        for (const [key, value] of Object.entries(obj)) {
            const newKey = key.replace('$', '_');
            transformed[newKey] = transformForGraphQL(value);
        }
        return transformed;
    }

    return obj;
}
