# functions

The Functions service allows you to create custom behaviour that can be triggered by any supported Clikkle system events or by a predefined schedule.

Clikkle Cloud Functions lets you automatically run backend code in response to events triggered by Clikkle or by setting it to be executed in a predefined schedule. Your code is stored in a secure way on your Clikkle instance and is executed in an isolated environment.

You can learn more by following our Cloud Functions tutorial.


## Base URL

```
https://<REGION>.cloud.appwrite.io/v1
```

## Endpoints

#### Create Execution

Trigger a function execution. The returned object will return you the current execution status. You can ping the `Get Execution` endpoint to get updates on the current execution status. Once this endpoint is called, your function execution process will start asynchronously.

**Endpoint:** `POST /functions/{functionId}/executions`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. |
| data | string | No | String of custom data to send to function. |
| async | boolean | No | Execute code asynchronously. Default value is true. |

**Responses:**

- **201**: application/json
  - [Execution](/docs/references/0.15.x/models/execution)

**Rate limits:** 60 requests per 60 seconds

**Example:**

```client-flutter
import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Functions functions = Functions(client);

  client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
  ;
  Future result = functions.createExecution(
    functionId: '[FUNCTION_ID]',
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}

```

---

#### Get Execution

Get a function execution log by its unique ID.

**Endpoint:** `GET /functions/{functionId}/executions/{executionId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. |
| executionId | string | Yes | Execution ID. |

**Responses:**

- **200**: application/json
  - [Execution](/docs/references/0.15.x/models/execution)

**Example:**

```client-flutter
import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Functions functions = Functions(client);

  client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
  ;
  Future result = functions.getExecution(
    functionId: '[FUNCTION_ID]',
    executionId: '[EXECUTION_ID]',
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}

```

---

#### List Executions

Get a list of all the current user function execution logs. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's executions. Learn more about different API modes.

**Endpoint:** `GET /functions/{functionId}/executions`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. |
| limit | integer | No | Maximum number of executions to return in response. By default will return maximum 25 results. Maximum of 100 results allowed per request. |
| offset | integer | No | Offset value. The default value is 0. Use this value to manage pagination. [learn more about pagination](https://appwrite.io/docs/pagination) |
| search | string | No | Search term to filter your list results. Max length: 256 chars. |
| cursor | string | No | ID of the execution used as the starting point for the query, excluding the execution itself. Should be used for efficient pagination when working with large sets of data. [learn more about pagination](https://appwrite.io/docs/pagination) |
| cursorDirection | string | No | Direction of the cursor, can be either 'before' or 'after'. |

**Responses:**

- **200**: application/json
  - [Executions List](/docs/references/0.15.x/models/executionList)

**Example:**

```client-flutter
import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Functions functions = Functions(client);

  client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
  ;
  Future result = functions.listExecutions(
    functionId: '[FUNCTION_ID]',
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}

```

---

#### Retry Build

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

```client-flutter
import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Functions functions = Functions(client);

  client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
  ;
  Future result = functions.retryBuild(
    functionId: '[FUNCTION_ID]',
    deploymentId: '[DEPLOYMENT_ID]',
    buildId: '[BUILD_ID]',
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}

```

---

