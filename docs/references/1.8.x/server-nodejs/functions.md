# functions

The Functions service allows you to create custom behaviour that can be triggered by any supported Clikkle system events or by a predefined schedule.

Clikkle Cloud Functions lets you automatically run backend code in response to events triggered by Clikkle or by setting it to be executed in a predefined schedule. Your code is stored in a secure way on your Clikkle instance and is executed in an isolated environment.

You can learn more by following our Cloud Functions tutorial.


## Base URL

```
https://<REGION>.cloud.appwrite.io/v1
```

## Endpoints

### functions

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
| logging | boolean | No | When disabled, executions will exclude logs and errors, and will be slightly faster. |
| entrypoint | string | No | Entrypoint File. This path is relative to the "providerRootDirectory". |
| commands | string | No | Build Commands. |
| scopes | array | No | List of scopes allowed for API key auto-generated for every execution. Maximum of 100 scopes are allowed. |
| installationId | string | No | Appwrite Installation ID for VCS (Version Control System) deployment. |
| providerRepositoryId | string | No | Repository ID of the repo linked to the function. |
| providerBranch | string | No | Production branch for the repo linked to the function. |
| providerSilentMode | boolean | No | Is the VCS (Version Control System) connection in silent mode for the repo linked to the function? In silent mode, comments will not be made on commits and pull requests. |
| providerRootDirectory | string | No | Path to function code in the linked repo. |
| specification | string | No | Runtime specification for the function and builds. |

**Responses:**

- **201**: application/json
  - [Function](/docs/references/1.8.x/models/function)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const functions = new sdk.Functions(client);

const result = await functions.create({
    functionId: '<FUNCTION_ID>',
    name: '<NAME>',
    runtime: sdk.Runtime.Node145,
    execute: ["any"], // optional
    events: [], // optional
    schedule: '', // optional
    timeout: 1, // optional
    enabled: false, // optional
    logging: false, // optional
    entrypoint: '<ENTRYPOINT>', // optional
    commands: '<COMMANDS>', // optional
    scopes: [sdk.Scopes.SessionsWrite], // optional
    installationId: '<INSTALLATION_ID>', // optional
    providerRepositoryId: '<PROVIDER_REPOSITORY_ID>', // optional
    providerBranch: '<PROVIDER_BRANCH>', // optional
    providerSilentMode: false, // optional
    providerRootDirectory: '<PROVIDER_ROOT_DIRECTORY>', // optional
    specification: '' // optional
});
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
  - [Function](/docs/references/1.8.x/models/function)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const functions = new sdk.Functions(client);

const result = await functions.get({
    functionId: '<FUNCTION_ID>'
});
```

---

#### List functions

Get a list of all the project's functions. You can use the query params to filter your results.

**Endpoint:** `GET /functions`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, runtime, deploymentId, schedule, scheduleNext, schedulePrevious, timeout, entrypoint, commands, installationId |
| search | string | No | Search term to filter your list results. Max length: 256 chars. |
| total | boolean | No | When set to false, the total count returned will be 0 and will not be calculated. |

**Responses:**

- **200**: application/json
  - [Functions List](/docs/references/1.8.x/models/functionList)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const functions = new sdk.Functions(client);

const result = await functions.list({
    queries: [], // optional
    search: '<SEARCH>', // optional
    total: false // optional
});
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
| logging | boolean | No | When disabled, executions will exclude logs and errors, and will be slightly faster. |
| entrypoint | string | No | Entrypoint File. This path is relative to the "providerRootDirectory". |
| commands | string | No | Build Commands. |
| scopes | array | No | List of scopes allowed for API Key auto-generated for every execution. Maximum of 100 scopes are allowed. |
| installationId | string | No | Appwrite Installation ID for VCS (Version Controle System) deployment. |
| providerRepositoryId | string | No | Repository ID of the repo linked to the function |
| providerBranch | string | No | Production branch for the repo linked to the function |
| providerSilentMode | boolean | No | Is the VCS (Version Control System) connection in silent mode for the repo linked to the function? In silent mode, comments will not be made on commits and pull requests. |
| providerRootDirectory | string | No | Path to function code in the linked repo. |
| specification | string | No | Runtime specification for the function and builds. |

**Responses:**

- **200**: application/json
  - [Function](/docs/references/1.8.x/models/function)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const functions = new sdk.Functions(client);

const result = await functions.update({
    functionId: '<FUNCTION_ID>',
    name: '<NAME>',
    runtime: sdk.Runtime.Node145, // optional
    execute: ["any"], // optional
    events: [], // optional
    schedule: '', // optional
    timeout: 1, // optional
    enabled: false, // optional
    logging: false, // optional
    entrypoint: '<ENTRYPOINT>', // optional
    commands: '<COMMANDS>', // optional
    scopes: [sdk.Scopes.SessionsWrite], // optional
    installationId: '<INSTALLATION_ID>', // optional
    providerRepositoryId: '<PROVIDER_REPOSITORY_ID>', // optional
    providerBranch: '<PROVIDER_BRANCH>', // optional
    providerSilentMode: false, // optional
    providerRootDirectory: '<PROVIDER_ROOT_DIRECTORY>', // optional
    specification: '' // optional
});
```

---

#### Update function's deployment

Update the function active deployment. Use this endpoint to switch the code deployment that should be used when visitor opens your function.

**Endpoint:** `PATCH /functions/{functionId}/deployment`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. |
| deploymentId | string | Yes | Deployment ID. |

**Responses:**

- **200**: application/json
  - [Function](/docs/references/1.8.x/models/function)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const functions = new sdk.Functions(client);

const result = await functions.updateFunctionDeployment({
    functionId: '<FUNCTION_ID>',
    deploymentId: '<DEPLOYMENT_ID>'
});
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

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const functions = new sdk.Functions(client);

const result = await functions.delete({
    functionId: '<FUNCTION_ID>'
});
```

---

### runtimes

#### List runtimes

Get a list of all runtimes that are currently active on your instance.

**Endpoint:** `GET /functions/runtimes`

**Responses:**

- **200**: application/json
  - [Runtimes List](/docs/references/1.8.x/models/runtimeList)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const functions = new sdk.Functions(client);

const result = await functions.listRuntimes();
```

---

#### List specifications

List allowed function specifications for this instance.

**Endpoint:** `GET /functions/specifications`

**Responses:**

- **200**: application/json
  - [Specifications List](/docs/references/1.8.x/models/specificationList)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const functions = new sdk.Functions(client);

const result = await functions.listSpecifications();
```

---

### deployments

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
  - [Deployment](/docs/references/1.8.x/models/deployment)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');
const fs = require('fs');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const functions = new sdk.Functions(client);

const result = await functions.createDeployment({
    functionId: '<FUNCTION_ID>',
    code: InputFile.fromPath('/path/to/file', 'filename'),
    activate: false,
    entrypoint: '<ENTRYPOINT>', // optional
    commands: '<COMMANDS>' // optional
});
```

---

#### Create duplicate deployment

Create a new build for an existing function deployment. This endpoint allows you to rebuild a deployment with the updated function configuration, including its entrypoint and build commands if they have been modified. The build process will be queued and executed asynchronously. The original deployment's code will be preserved and used for the new build.

**Endpoint:** `POST /functions/{functionId}/deployments/duplicate`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. |
| deploymentId | string | Yes | Deployment ID. |
| buildId | string | No | Build unique ID. |

**Responses:**

- **202**: application/json
  - [Deployment](/docs/references/1.8.x/models/deployment)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const functions = new sdk.Functions(client);

const result = await functions.createDuplicateDeployment({
    functionId: '<FUNCTION_ID>',
    deploymentId: '<DEPLOYMENT_ID>',
    buildId: '<BUILD_ID>' // optional
});
```

---

#### Create template deployment

Create a deployment based on a template.

Use this endpoint with combination of listTemplates to find the template details.

**Endpoint:** `POST /functions/{functionId}/deployments/template`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. |
| repository | string | Yes | Repository name of the template. |
| owner | string | Yes | The name of the owner of the template. |
| rootDirectory | string | Yes | Path to function code in the template repo. |
| type | string | Yes | Type for the reference provided. Can be commit, branch, or tag |
| reference | string | Yes | Reference value, can be a commit hash, branch name, or release tag |
| activate | boolean | No | Automatically activate the deployment when it is finished building. |

**Responses:**

- **202**: application/json
  - [Deployment](/docs/references/1.8.x/models/deployment)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const functions = new sdk.Functions(client);

const result = await functions.createTemplateDeployment({
    functionId: '<FUNCTION_ID>',
    repository: '<REPOSITORY>',
    owner: '<OWNER>',
    rootDirectory: '<ROOT_DIRECTORY>',
    type: sdk.TemplateReferenceType.Commit,
    reference: '<REFERENCE>',
    activate: false // optional
});
```

---

#### Create VCS deployment

Create a deployment when a function is connected to VCS.

This endpoint lets you create deployment from a branch, commit, or a tag.

**Endpoint:** `POST /functions/{functionId}/deployments/vcs`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. |
| type | string | Yes | Type of reference passed. Allowed values are: branch, commit |
| reference | string | Yes | VCS reference to create deployment from. Depending on type this can be: branch name, commit hash |
| activate | boolean | No | Automatically activate the deployment when it is finished building. |

**Responses:**

- **202**: application/json
  - [Deployment](/docs/references/1.8.x/models/deployment)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const functions = new sdk.Functions(client);

const result = await functions.createVcsDeployment({
    functionId: '<FUNCTION_ID>',
    type: sdk.VCSReferenceType.Branch,
    reference: '<REFERENCE>',
    activate: false // optional
});
```

---

#### Get deployment

Get a function deployment by its unique ID.

**Endpoint:** `GET /functions/{functionId}/deployments/{deploymentId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. |
| deploymentId | string | Yes | Deployment ID. |

**Responses:**

- **200**: application/json
  - [Deployment](/docs/references/1.8.x/models/deployment)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const functions = new sdk.Functions(client);

const result = await functions.getDeployment({
    functionId: '<FUNCTION_ID>',
    deploymentId: '<DEPLOYMENT_ID>'
});
```

---

#### Get deployment download

Get a function deployment content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.

**Endpoint:** `GET /functions/{functionId}/deployments/{deploymentId}/download`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. |
| deploymentId | string | Yes | Deployment ID. |
| type | string | No | Deployment file to download. Can be: "source", "output". |

**Responses:**

- **200**: no content

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const functions = new sdk.Functions(client);

const result = await functions.getDeploymentDownload({
    functionId: '<FUNCTION_ID>',
    deploymentId: '<DEPLOYMENT_ID>',
    type: sdk.DeploymentDownloadType.Source // optional
});
```

---

#### List deployments

Get a list of all the function's code deployments. You can use the query params to filter your results.

**Endpoint:** `GET /functions/{functionId}/deployments`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: buildSize, sourceSize, totalSize, buildDuration, status, activate, type |
| search | string | No | Search term to filter your list results. Max length: 256 chars. |
| total | boolean | No | When set to false, the total count returned will be 0 and will not be calculated. |

**Responses:**

- **200**: application/json
  - [Deployments List](/docs/references/1.8.x/models/deploymentList)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const functions = new sdk.Functions(client);

const result = await functions.listDeployments({
    functionId: '<FUNCTION_ID>',
    queries: [], // optional
    search: '<SEARCH>', // optional
    total: false // optional
});
```

---

#### Update deployment status

Cancel an ongoing function deployment build. If the build is already in progress, it will be stopped and marked as canceled. If the build hasn't started yet, it will be marked as canceled without executing. You cannot cancel builds that have already completed (status 'ready') or failed. The response includes the final build status and details.

**Endpoint:** `PATCH /functions/{functionId}/deployments/{deploymentId}/status`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. |
| deploymentId | string | Yes | Deployment ID. |

**Responses:**

- **200**: application/json
  - [Deployment](/docs/references/1.8.x/models/deployment)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const functions = new sdk.Functions(client);

const result = await functions.updateDeploymentStatus({
    functionId: '<FUNCTION_ID>',
    deploymentId: '<DEPLOYMENT_ID>'
});
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

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const functions = new sdk.Functions(client);

const result = await functions.deleteDeployment({
    functionId: '<FUNCTION_ID>',
    deploymentId: '<DEPLOYMENT_ID>'
});
```

---

### executions

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
| method | string | No | HTTP method of execution. Default value is POST. |
| headers | object | No | HTTP headers of execution. Defaults to empty. |
| scheduledAt | string | No | Scheduled execution time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future with precision in minutes. |

**Responses:**

- **201**: multipart/form-data

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession(''); // The user session to authenticate with

const functions = new sdk.Functions(client);

const result = await functions.createExecution({
    functionId: '<FUNCTION_ID>',
    body: '<BODY>', // optional
    async: false, // optional
    path: '<PATH>', // optional
    method: sdk.ExecutionMethod.GET, // optional
    headers: {}, // optional
    scheduledAt: '<SCHEDULED_AT>' // optional
});
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
  - [Execution](/docs/references/1.8.x/models/execution)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession(''); // The user session to authenticate with

const functions = new sdk.Functions(client);

const result = await functions.getExecution({
    functionId: '<FUNCTION_ID>',
    executionId: '<EXECUTION_ID>'
});
```

---

#### List executions

Get a list of all the current user function execution logs. You can use the query params to filter your results.

**Endpoint:** `GET /functions/{functionId}/executions`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: trigger, status, responseStatusCode, duration, requestMethod, requestPath, deploymentId |
| total | boolean | No | When set to false, the total count returned will be 0 and will not be calculated. |

**Responses:**

- **200**: application/json
  - [Executions List](/docs/references/1.8.x/models/executionList)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession(''); // The user session to authenticate with

const functions = new sdk.Functions(client);

const result = await functions.listExecutions({
    functionId: '<FUNCTION_ID>',
    queries: [], // optional
    total: false // optional
});
```

---

#### Delete execution

Delete a function execution by its unique ID.

**Endpoint:** `DELETE /functions/{functionId}/executions/{executionId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. |
| executionId | string | Yes | Execution ID. |

**Responses:**

- **204**: no content

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const functions = new sdk.Functions(client);

const result = await functions.deleteExecution({
    functionId: '<FUNCTION_ID>',
    executionId: '<EXECUTION_ID>'
});
```

---

### variables

#### Create variable

Create a new function environment variable. These variables can be accessed in the function at runtime as environment variables.

**Endpoint:** `POST /functions/{functionId}/variables`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function unique ID. |
| key | string | Yes | Variable key. Max length: 255 chars. |
| value | string | Yes | Variable value. Max length: 8192 chars. |
| secret | boolean | No | Secret variables can be updated or deleted, but only functions can read them during build and runtime. |

**Responses:**

- **201**: application/json
  - [Variable](/docs/references/1.8.x/models/variable)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const functions = new sdk.Functions(client);

const result = await functions.createVariable({
    functionId: '<FUNCTION_ID>',
    key: '<KEY>',
    value: '<VALUE>',
    secret: false // optional
});
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
  - [Variable](/docs/references/1.8.x/models/variable)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const functions = new sdk.Functions(client);

const result = await functions.getVariable({
    functionId: '<FUNCTION_ID>',
    variableId: '<VARIABLE_ID>'
});
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
  - [Variables List](/docs/references/1.8.x/models/variableList)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const functions = new sdk.Functions(client);

const result = await functions.listVariables({
    functionId: '<FUNCTION_ID>'
});
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
| secret | boolean | No | Secret variables can be updated or deleted, but only functions can read them during build and runtime. |

**Responses:**

- **200**: application/json
  - [Variable](/docs/references/1.8.x/models/variable)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const functions = new sdk.Functions(client);

const result = await functions.updateVariable({
    functionId: '<FUNCTION_ID>',
    variableId: '<VARIABLE_ID>',
    key: '<KEY>',
    value: '<VALUE>', // optional
    secret: false // optional
});
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

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const functions = new sdk.Functions(client);

const result = await functions.deleteVariable({
    functionId: '<FUNCTION_ID>',
    variableId: '<VARIABLE_ID>'
});
```

---

