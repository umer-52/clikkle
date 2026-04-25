# functions

The Functions service allows you to create custom behaviour that can be triggered by any supported Clikkle system events or by a predefined schedule.

Clikkle Cloud Functions lets you automatically run backend code in response to events triggered by Clikkle or by setting it to be executed in a predefined schedule. Your code is stored in a secure way on your Clikkle instance and is executed in an isolated environment.

You can learn more by following our Cloud Functions tutorial.


## Base URL

```
https://<REGION>.cloud.appwrite.io/v1
```

## Endpoints

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

```client-apple
import Appwrite
import AppwriteEnums

let client = Client()
    .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID

let functions = Functions(client)

let execution = try await functions.createExecution(
    functionId: "<FUNCTION_ID>",
    body: "<BODY>", // optional
    async: false, // optional
    path: "<PATH>", // optional
    method: .gET, // optional
    headers: [:], // optional
    scheduledAt: "" // optional
)


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

```client-apple
import Appwrite

let client = Client()
    .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID

let functions = Functions(client)

let execution = try await functions.getExecution(
    functionId: "<FUNCTION_ID>",
    executionId: "<EXECUTION_ID>"
)


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

```client-apple
import Appwrite

let client = Client()
    .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID

let functions = Functions(client)

let executionList = try await functions.listExecutions(
    functionId: "<FUNCTION_ID>",
    queries: [], // optional
    search: "<SEARCH>" // optional
)


```

---

