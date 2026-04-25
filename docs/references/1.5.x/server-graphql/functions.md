# functions

The Functions service allows you to create custom behaviour that can be triggered by any supported Clikkle system events or by a predefined schedule.

Clikkle Cloud Functions lets you automatically run backend code in response to events triggered by Clikkle or by setting it to be executed in a predefined schedule. Your code is stored in a secure way on your Clikkle instance and is executed in an isolated environment.

You can learn more by following our Cloud Functions tutorial.


## Base URL

```
https://<REGION>.cloud.appwrite.io/v1
```

## Endpoints

#### Create build

Create a new build for an Appwrite Function deployment. This endpoint can be used to retry a failed build.

**Endpoint:** `POST /functions/{functionId}/deployments/{deploymentId}/builds/{buildId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. |
| deploymentId | string | Yes | Deployment ID. |
| buildId | string | Yes | Build unique ID. |

**Responses:**

- **204**: no content

**Example:**

```server-graphql
mutation {
    functionsCreateBuild(
        functionId: "<FUNCTION_ID>",
        deploymentId: "<DEPLOYMENT_ID>",
        buildId: "<BUILD_ID>"
    ) {
        status
    }
}

```

---

#### Create deployment

Create a new function code deployment. Use this endpoint to upload a new version of your code function. To execute your newly uploaded code, you'll need to update the function's deployment to use your new deployment UID.

This endpoint accepts a tar.gz file compressed with your code. Make sure to include any dependencies your code has within the compressed file. You can learn more about code packaging in the Appwrite Cloud Functions tutorial.

Use the "command" param to set the entrypoint used to execute your code.

**Endpoint:** `POST /functions/{functionId}/deployments`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. |
| code | string | Yes | Gzip file with your code package. When used with the Appwrite CLI, pass the path to your code directory, and the CLI will automatically package your code. Use a path that is within the current directory. |
| activate | boolean | Yes | Automatically activate the deployment when it is finished building. |
| entrypoint | string | No | Entrypoint File. |
| commands | string | No | Build Commands. |

**Responses:**

- **202**: application/json
  - [Deployment](/docs/references/1.5.x/models/deployment)

**Example:**

```server-graphql
POST /v1/functions/{functionId}/deployments HTTP/1.1
Host: &lt;REGION&gt;.cloud.appwrite.io
Content-Type: multipart/form-data; boundary="cec8e8123c05ba25"
X-Appwrite-Response-Format: 1.6.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>
Content-Length: *Length of your entity body in bytes*

--cec8e8123c05ba25
Content-Disposition: form-data; name="operations"

{ "query": "mutation { functionsCreateDeployment(functionId: $functionId, code: $code, activate: $activate, entrypoint: $entrypoint, commands: $commands) { id }" }, "variables": { "functionId": "<FUNCTION_ID>", "code": null, "activate": false, "entrypoint": "<ENTRYPOINT>", "commands": "<COMMANDS>" } }

--cec8e8123c05ba25
Content-Disposition: form-data; name="map"

{ "0": ["variables.code"],  }

--cec8e8123c05ba25
Content-Disposition: form-data; name="0"; filename="code.ext"

File contents

--cec8e8123c05ba25--

```

---

#### Create execution

Trigger a function execution. The returned object will return you the current execution status. You can ping the `Get Execution` endpoint to get updates on the current execution status. Once this endpoint is called, your function execution process will start asynchronously.

**Endpoint:** `POST /functions/{functionId}/executions`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. |
| body | string | No | HTTP body of execution. Default value is empty string. |
| async | boolean | No | Execute code in the background. Default value is false. |
| path | string | No | HTTP path of execution. Path can include query params. Default value is / |
| method | string | No | HTTP method of execution. Default value is GET. |
| headers | object | No | HTTP headers of execution. Defaults to empty. |

**Responses:**

- **201**: application/json
  - [Execution](/docs/references/1.5.x/models/execution)

**Example:**

```server-graphql
mutation {
    functionsCreateExecution(
        functionId: "<FUNCTION_ID>",
        body: "<BODY>",
        async: false,
        path: "<PATH>",
        method: "GET",
        headers: "{}",
        scheduledAt: ""
    ) {
        _id
        _createdAt
        _updatedAt
        _permissions
        functionId
        trigger
        status
        requestMethod
        requestPath
        requestHeaders {
            name
            value
        }
        responseStatusCode
        responseBody
        responseHeaders {
            name
            value
        }
        logs
        errors
        duration
        scheduledAt
    }
}

```

---

#### Create function

Create a new function. You can pass a list of permissions to allow different project users or team with access to execute the function using the client API.

**Endpoint:** `POST /functions`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| name | string | Yes | Function name. Max length: 128 chars. |
| runtime | string | Yes | Execution runtime. |
| execute | array | No | An array of role strings with execution permissions. By default no user is granted with any execute permissions. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long. |
| events | array | No | Events list. Maximum of 100 events are allowed. |
| schedule | string | No | Schedule CRON syntax. |
| timeout | integer | No | Function maximum execution time in seconds. |
| enabled | boolean | No | Is function enabled? When set to 'disabled', users cannot access the function but Server SDKs with and API key can still access the function. No data is lost when this is toggled. |
| logging | boolean | No | Whether executions will be logged. When set to false, executions will not be logged, but will reduce resource used by your Appwrite project. |
| entrypoint | string | No | Entrypoint File. This path is relative to the "providerRootDirectory". |
| commands | string | No | Build Commands. |
| installationId | string | No | Appwrite Installation ID for VCS (Version Control System) deployment. |
| providerRepositoryId | string | No | Repository ID of the repo linked to the function. |
| providerBranch | string | No | Production branch for the repo linked to the function. |
| providerSilentMode | boolean | No | Is the VCS (Version Control System) connection in silent mode for the repo linked to the function? In silent mode, comments will not be made on commits and pull requests. |
| providerRootDirectory | string | No | Path to function code in the linked repo. |
| templateRepository | string | No | Repository name of the template. |
| templateOwner | string | No | The name of the owner of the template. |
| templateRootDirectory | string | No | Path to function code in the template repo. |
| templateBranch | string | No | Production branch for the repo linked to the function template. |

**Responses:**

- **201**: application/json
  - [Function](/docs/references/1.5.x/models/function)

**Example:**

```server-graphql
mutation {
    functionsCreate(
        functionId: "<FUNCTION_ID>",
        name: "<NAME>",
        runtime: "node-14.5",
        execute: ["any"],
        events: [],
        schedule: "",
        timeout: 1,
        enabled: false,
        logging: false,
        entrypoint: "<ENTRYPOINT>",
        commands: "<COMMANDS>",
        scopes: [],
        installationId: "<INSTALLATION_ID>",
        providerRepositoryId: "<PROVIDER_REPOSITORY_ID>",
        providerBranch: "<PROVIDER_BRANCH>",
        providerSilentMode: false,
        providerRootDirectory: "<PROVIDER_ROOT_DIRECTORY>",
        templateRepository: "<TEMPLATE_REPOSITORY>",
        templateOwner: "<TEMPLATE_OWNER>",
        templateRootDirectory: "<TEMPLATE_ROOT_DIRECTORY>",
        templateVersion: "<TEMPLATE_VERSION>",
        specification: ""
    ) {
        _id
        _createdAt
        _updatedAt
        execute
        name
        enabled
        live
        logging
        runtime
        deployment
        scopes
        vars {
            _id
            _createdAt
            _updatedAt
            key
            value
            resourceType
            resourceId
        }
        events
        schedule
        timeout
        entrypoint
        commands
        version
        installationId
        providerRepositoryId
        providerBranch
        providerRootDirectory
        providerSilentMode
        specification
    }
}

```

---

#### Create variable

Create a new function environment variable. These variables can be accessed in the function at runtime as environment variables.

**Endpoint:** `POST /functions/{functionId}/variables`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function unique ID. |
| key | string | Yes | Variable key. Max length: 255 chars. |
| value | string | Yes | Variable value. Max length: 8192 chars. |

**Responses:**

- **201**: application/json
  - [Variable](/docs/references/1.5.x/models/variable)

**Example:**

```server-graphql
mutation {
    functionsCreateVariable(
        functionId: "<FUNCTION_ID>",
        key: "<KEY>",
        value: "<VALUE>"
    ) {
        _id
        _createdAt
        _updatedAt
        key
        value
        resourceType
        resourceId
    }
}

```

---

#### Get deployment

Get a code deployment by its unique ID.

**Endpoint:** `GET /functions/{functionId}/deployments/{deploymentId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. |
| deploymentId | string | Yes | Deployment ID. |

**Responses:**

- **200**: application/json
  - [Deployment](/docs/references/1.5.x/models/deployment)

**Example:**

```server-graphql
query {
    functionsGetDeployment(
        functionId: "<FUNCTION_ID>",
        deploymentId: "<DEPLOYMENT_ID>"
    ) {
        _id
        _createdAt
        _updatedAt
        type
        resourceId
        resourceType
        entrypoint
        size
        buildSize
        buildId
        activate
        status
        buildLogs
        buildTime
        providerRepositoryName
        providerRepositoryOwner
        providerRepositoryUrl
        providerBranch
        providerCommitHash
        providerCommitAuthorUrl
        providerCommitAuthor
        providerCommitMessage
        providerCommitUrl
        providerBranchUrl
    }
}

```

---

#### Get execution

Get a function execution log by its unique ID.

**Endpoint:** `GET /functions/{functionId}/executions/{executionId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. |
| executionId | string | Yes | Execution ID. |

**Responses:**

- **200**: application/json
  - [Execution](/docs/references/1.5.x/models/execution)

**Example:**

```server-graphql
query {
    functionsGetExecution(
        functionId: "<FUNCTION_ID>",
        executionId: "<EXECUTION_ID>"
    ) {
        _id
        _createdAt
        _updatedAt
        _permissions
        functionId
        trigger
        status
        requestMethod
        requestPath
        requestHeaders {
            name
            value
        }
        responseStatusCode
        responseBody
        responseHeaders {
            name
            value
        }
        logs
        errors
        duration
        scheduledAt
    }
}

```

---

#### Get function

Get a function by its unique ID.

**Endpoint:** `GET /functions/{functionId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. |

**Responses:**

- **200**: application/json
  - [Function](/docs/references/1.5.x/models/function)

**Example:**

```server-graphql
query {
    functionsGet(
        functionId: "<FUNCTION_ID>"
    ) {
        _id
        _createdAt
        _updatedAt
        execute
        name
        enabled
        live
        logging
        runtime
        deployment
        scopes
        vars {
            _id
            _createdAt
            _updatedAt
            key
            value
            resourceType
            resourceId
        }
        events
        schedule
        timeout
        entrypoint
        commands
        version
        installationId
        providerRepositoryId
        providerBranch
        providerRootDirectory
        providerSilentMode
        specification
    }
}

```

---

#### Get variable

Get a variable by its unique ID.

**Endpoint:** `GET /functions/{functionId}/variables/{variableId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function unique ID. |
| variableId | string | Yes | Variable unique ID. |

**Responses:**

- **200**: application/json
  - [Variable](/docs/references/1.5.x/models/variable)

**Example:**

```server-graphql
query {
    functionsGetVariable(
        functionId: "<FUNCTION_ID>",
        variableId: "<VARIABLE_ID>"
    ) {
        _id
        _createdAt
        _updatedAt
        key
        value
        resourceType
        resourceId
    }
}

```

---

#### List deployments

Get a list of all the project's code deployments. You can use the query params to filter your results.

**Endpoint:** `GET /functions/{functionId}/deployments`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: size, buildId, activate, entrypoint, commands |
| search | string | No | Search term to filter your list results. Max length: 256 chars. |

**Responses:**

- **200**: application/json
  - [Deployments List](/docs/references/1.5.x/models/deploymentList)

**Example:**

```server-graphql
query {
    functionsListDeployments(
        functionId: "<FUNCTION_ID>",
        queries: [],
        search: "<SEARCH>"
    ) {
        total
        deployments {
            _id
            _createdAt
            _updatedAt
            type
            resourceId
            resourceType
            entrypoint
            size
            buildSize
            buildId
            activate
            status
            buildLogs
            buildTime
            providerRepositoryName
            providerRepositoryOwner
            providerRepositoryUrl
            providerBranch
            providerCommitHash
            providerCommitAuthorUrl
            providerCommitAuthor
            providerCommitMessage
            providerCommitUrl
            providerBranchUrl
        }
    }
}

```

---

#### List executions

Get a list of all the current user function execution logs. You can use the query params to filter your results.

**Endpoint:** `GET /functions/{functionId}/executions`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: trigger, status, responseStatusCode, duration |
| search | string | No | Search term to filter your list results. Max length: 256 chars. |

**Responses:**

- **200**: application/json
  - [Executions List](/docs/references/1.5.x/models/executionList)

**Example:**

```server-graphql
query {
    functionsListExecutions(
        functionId: "<FUNCTION_ID>",
        queries: [],
        search: "<SEARCH>"
    ) {
        total
        executions {
            _id
            _createdAt
            _updatedAt
            _permissions
            functionId
            trigger
            status
            requestMethod
            requestPath
            requestHeaders {
                name
                value
            }
            responseStatusCode
            responseBody
            responseHeaders {
                name
                value
            }
            logs
            errors
            duration
            scheduledAt
        }
    }
}

```

---

#### List functions

Get a list of all the project's functions. You can use the query params to filter your results.

**Endpoint:** `GET /functions`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, runtime, deployment, schedule, scheduleNext, schedulePrevious, timeout, entrypoint, commands, installationId |
| search | string | No | Search term to filter your list results. Max length: 256 chars. |

**Responses:**

- **200**: application/json
  - [Functions List](/docs/references/1.5.x/models/functionList)

**Example:**

```server-graphql
query {
    functionsList(
        queries: [],
        search: "<SEARCH>"
    ) {
        total
        functions {
            _id
            _createdAt
            _updatedAt
            execute
            name
            enabled
            live
            logging
            runtime
            deployment
            scopes
            vars {
                _id
                _createdAt
                _updatedAt
                key
                value
                resourceType
                resourceId
            }
            events
            schedule
            timeout
            entrypoint
            commands
            version
            installationId
            providerRepositoryId
            providerBranch
            providerRootDirectory
            providerSilentMode
            specification
        }
    }
}

```

---

#### List runtimes

Get a list of all runtimes that are currently active on your instance.

**Endpoint:** `GET /functions/runtimes`

**Responses:**

- **200**: application/json
  - [Runtimes List](/docs/references/1.5.x/models/runtimeList)

**Example:**

```server-graphql
query {
    functionsListRuntimes {
        total
        runtimes {
            _id
            key
            name
            version
            base
            image
            logo
            supports
        }
    }
}

```

---

#### List variables

Get a list of all variables of a specific function.

**Endpoint:** `GET /functions/{functionId}/variables`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function unique ID. |

**Responses:**

- **200**: application/json
  - [Variables List](/docs/references/1.5.x/models/variableList)

**Example:**

```server-graphql
query {
    functionsListVariables(
        functionId: "<FUNCTION_ID>"
    ) {
        total
        variables {
            _id
            _createdAt
            _updatedAt
            key
            value
            resourceType
            resourceId
        }
    }
}

```

---

#### Update deployment

Update the function code deployment ID using the unique function ID. Use this endpoint to switch the code deployment that should be executed by the execution endpoint.

**Endpoint:** `PATCH /functions/{functionId}/deployments/{deploymentId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. |
| deploymentId | string | Yes | Deployment ID. |

**Responses:**

- **200**: application/json
  - [Function](/docs/references/1.5.x/models/function)

**Example:**

```server-graphql
mutation {
    functionsUpdateDeployment(
        functionId: "<FUNCTION_ID>",
        deploymentId: "<DEPLOYMENT_ID>"
    ) {
        _id
        _createdAt
        _updatedAt
        execute
        name
        enabled
        live
        logging
        runtime
        deployment
        scopes
        vars {
            _id
            _createdAt
            _updatedAt
            key
            value
            resourceType
            resourceId
        }
        events
        schedule
        timeout
        entrypoint
        commands
        version
        installationId
        providerRepositoryId
        providerBranch
        providerRootDirectory
        providerSilentMode
        specification
    }
}

```

---

#### Update function

Update function by its unique ID.

**Endpoint:** `PUT /functions/{functionId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. |
| name | string | Yes | Function name. Max length: 128 chars. |
| runtime | string | No | Execution runtime. |
| execute | array | No | An array of role strings with execution permissions. By default no user is granted with any execute permissions. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long. |
| events | array | No | Events list. Maximum of 100 events are allowed. |
| schedule | string | No | Schedule CRON syntax. |
| timeout | integer | No | Maximum execution time in seconds. |
| enabled | boolean | No | Is function enabled? When set to 'disabled', users cannot access the function but Server SDKs with and API key can still access the function. No data is lost when this is toggled. |
| logging | boolean | No | Whether executions will be logged. When set to false, executions will not be logged, but will reduce resource used by your Appwrite project. |
| entrypoint | string | No | Entrypoint File. This path is relative to the "providerRootDirectory". |
| commands | string | No | Build Commands. |
| installationId | string | No | Appwrite Installation ID for VCS (Version Controle System) deployment. |
| providerRepositoryId | string | No | Repository ID of the repo linked to the function |
| providerBranch | string | No | Production branch for the repo linked to the function |
| providerSilentMode | boolean | No | Is the VCS (Version Control System) connection in silent mode for the repo linked to the function? In silent mode, comments will not be made on commits and pull requests. |
| providerRootDirectory | string | No | Path to function code in the linked repo. |

**Responses:**

- **200**: application/json
  - [Function](/docs/references/1.5.x/models/function)

**Example:**

```server-graphql
mutation {
    functionsUpdate(
        functionId: "<FUNCTION_ID>",
        name: "<NAME>",
        runtime: "node-14.5",
        execute: ["any"],
        events: [],
        schedule: "",
        timeout: 1,
        enabled: false,
        logging: false,
        entrypoint: "<ENTRYPOINT>",
        commands: "<COMMANDS>",
        scopes: [],
        installationId: "<INSTALLATION_ID>",
        providerRepositoryId: "<PROVIDER_REPOSITORY_ID>",
        providerBranch: "<PROVIDER_BRANCH>",
        providerSilentMode: false,
        providerRootDirectory: "<PROVIDER_ROOT_DIRECTORY>",
        specification: ""
    ) {
        _id
        _createdAt
        _updatedAt
        execute
        name
        enabled
        live
        logging
        runtime
        deployment
        scopes
        vars {
            _id
            _createdAt
            _updatedAt
            key
            value
            resourceType
            resourceId
        }
        events
        schedule
        timeout
        entrypoint
        commands
        version
        installationId
        providerRepositoryId
        providerBranch
        providerRootDirectory
        providerSilentMode
        specification
    }
}

```

---

#### Update variable

Update variable by its unique ID.

**Endpoint:** `PUT /functions/{functionId}/variables/{variableId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function unique ID. |
| variableId | string | Yes | Variable unique ID. |
| key | string | Yes | Variable key. Max length: 255 chars. |
| value | string | No | Variable value. Max length: 8192 chars. |

**Responses:**

- **200**: application/json
  - [Variable](/docs/references/1.5.x/models/variable)

**Example:**

```server-graphql
mutation {
    functionsUpdateVariable(
        functionId: "<FUNCTION_ID>",
        variableId: "<VARIABLE_ID>",
        key: "<KEY>",
        value: "<VALUE>"
    ) {
        _id
        _createdAt
        _updatedAt
        key
        value
        resourceType
        resourceId
    }
}

```

---

#### Delete deployment

Delete a code deployment by its unique ID.

**Endpoint:** `DELETE /functions/{functionId}/deployments/{deploymentId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. |
| deploymentId | string | Yes | Deployment ID. |

**Responses:**

- **204**: no content

**Example:**

```server-graphql
mutation {
    functionsDeleteDeployment(
        functionId: "<FUNCTION_ID>",
        deploymentId: "<DEPLOYMENT_ID>"
    ) {
        status
    }
}

```

---

#### Delete function

Delete a function by its unique ID.

**Endpoint:** `DELETE /functions/{functionId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. |

**Responses:**

- **204**: no content

**Example:**

```server-graphql
mutation {
    functionsDelete(
        functionId: "<FUNCTION_ID>"
    ) {
        status
    }
}

```

---

#### Delete variable

Delete a variable by its unique ID.

**Endpoint:** `DELETE /functions/{functionId}/variables/{variableId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function unique ID. |
| variableId | string | Yes | Variable unique ID. |

**Responses:**

- **204**: no content

**Example:**

```server-graphql
mutation {
    functionsDeleteVariable(
        functionId: "<FUNCTION_ID>",
        variableId: "<VARIABLE_ID>"
    ) {
        status
    }
}

```

---

#### Download deployment

Get a Deployment's contents by its unique ID. This endpoint supports range requests for partial or streaming file download.

**Endpoint:** `GET /functions/{functionId}/deployments/{deploymentId}/download`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. |
| deploymentId | string | Yes | Deployment ID. |

**Responses:**

- **200**: no content

**Example:**

```server-graphql
query {
    functionsDownloadDeployment(
        functionId: "<FUNCTION_ID>",
        deploymentId: "<DEPLOYMENT_ID>"
    ) {
        status
    }
}

```

---

