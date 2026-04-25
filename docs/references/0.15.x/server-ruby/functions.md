# functions

The Functions service allows you to create custom behaviour that can be triggered by any supported Clikkle system events or by a predefined schedule.

Clikkle Cloud Functions lets you automatically run backend code in response to events triggered by Clikkle or by setting it to be executed in a predefined schedule. Your code is stored in a secure way on your Clikkle instance and is executed in an isolated environment.

You can learn more by following our Cloud Functions tutorial.


## Base URL

```
https://<REGION>.cloud.appwrite.io/v1
```

## Endpoints

#### Create Deployment

Create a new function code deployment. Use this endpoint to upload a new version of your code function. To execute your newly uploaded code, you'll need to update the function's deployment to use your new deployment UID.

This endpoint accepts a tar.gz file compressed with your code. Make sure to include any dependencies your code has within the compressed file. You can learn more about code packaging in the Appwrite Cloud Functions tutorial.

Use the "command" param to set the entry point used to execute your code.

**Endpoint:** `POST /functions/{functionId}/deployments`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. |
| entrypoint | string | Yes | Entrypoint File. |
| code | string | Yes | Gzip file with your code package. When used with the Appwrite CLI, pass the path to your code directory, and the CLI will automatically package your code. Use a path that is within the current directory. |
| activate | boolean | Yes | Automatically activate the deployment when it is finished building. |

**Responses:**

- **201**: application/json
  - [Deployment](/docs/references/0.15.x/models/deployment)

**Example:**

```server-ruby
require 'appwrite'

client = Appwrite::Client.new

client
    .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
    .set_project('5df5acd0d48c2') # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

functions = Appwrite::Functions.new(client)

response = functions.create_deployment(function_id: '[FUNCTION_ID]', entrypoint: '[ENTRYPOINT]', code: Appwrite::InputFile.from_path('dir/file.png'), activate: false)

puts response.inspect
```

---

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

```server-ruby
require 'appwrite'

client = Appwrite::Client.new

client
    .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
    .set_project('5df5acd0d48c2') # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

functions = Appwrite::Functions.new(client)

response = functions.create_execution(function_id: '[FUNCTION_ID]')

puts response.inspect
```

---

#### Create Function

Create a new function. You can pass a list of permissions to allow different project users or team with access to execute the function using the client API.

**Endpoint:** `POST /functions`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. Choose your own unique ID or pass the string "unique()" to auto generate it. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| name | string | Yes | Function name. Max length: 128 chars. |
| execute | array | Yes | An array of strings with execution permissions. By default no user is granted with any execute permissions. [learn more about permissions](https://appwrite.io/docs/advanced/platform/permissions) and get a full list of available permissions. Maximum of 100 scopes are allowed, each 64 characters long. |
| runtime | string | Yes | Execution runtime. |
| vars | object | No | Key-value JSON object that will be passed to the function as environment variables. |
| events | array | No | Events list. Maximum of 100 events are allowed. |
| schedule | string | No | Schedule CRON syntax. |
| timeout | integer | No | Function maximum execution time in seconds. |

**Responses:**

- **201**: application/json
  - [Function](/docs/references/0.15.x/models/function)

**Example:**

```server-ruby
require 'appwrite'

client = Appwrite::Client.new

client
    .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
    .set_project('5df5acd0d48c2') # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

functions = Appwrite::Functions.new(client)

response = functions.create(function_id: '[FUNCTION_ID]', name: '[NAME]', execute: ["role:all"], runtime: 'node-14.5')

puts response.inspect
```

---

#### Get Deployment

Get a code deployment by its unique ID.

**Endpoint:** `GET /functions/{functionId}/deployments/{deploymentId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. |
| deploymentId | string | Yes | Deployment ID. |

**Responses:**

- **200**: application/json
  - [Deployment](/docs/references/0.15.x/models/deployment)

**Example:**

```server-ruby
require 'appwrite'

client = Appwrite::Client.new

client
    .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
    .set_project('5df5acd0d48c2') # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

functions = Appwrite::Functions.new(client)

response = functions.get_deployment(function_id: '[FUNCTION_ID]', deployment_id: '[DEPLOYMENT_ID]')

puts response.inspect
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

```server-ruby
require 'appwrite'

client = Appwrite::Client.new

client
    .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
    .set_project('5df5acd0d48c2') # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

functions = Appwrite::Functions.new(client)

response = functions.get_execution(function_id: '[FUNCTION_ID]', execution_id: '[EXECUTION_ID]')

puts response.inspect
```

---

#### Get Function

Get a function by its unique ID.

**Endpoint:** `GET /functions/{functionId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. |

**Responses:**

- **200**: application/json
  - [Function](/docs/references/0.15.x/models/function)

**Example:**

```server-ruby
require 'appwrite'

client = Appwrite::Client.new

client
    .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
    .set_project('5df5acd0d48c2') # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

functions = Appwrite::Functions.new(client)

response = functions.get(function_id: '[FUNCTION_ID]')

puts response.inspect
```

---

#### List Deployments

Get a list of all the project's code deployments. You can use the query params to filter your results.

**Endpoint:** `GET /functions/{functionId}/deployments`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. |
| search | string | No | Search term to filter your list results. Max length: 256 chars. |
| limit | integer | No | Maximum number of deployments to return in response. By default will return maximum 25 results. Maximum of 100 results allowed per request. |
| offset | integer | No | Offset value. The default value is 0. Use this value to manage pagination. [learn more about pagination](https://appwrite.io/docs/pagination) |
| cursor | string | No | ID of the deployment used as the starting point for the query, excluding the deployment itself. Should be used for efficient pagination when working with large sets of data. [learn more about pagination](https://appwrite.io/docs/pagination) |
| cursorDirection | string | No | Direction of the cursor, can be either 'before' or 'after'. |
| orderType | string | No | Order result by ASC or DESC order. |

**Responses:**

- **200**: application/json
  - [Deployments List](/docs/references/0.15.x/models/deploymentList)

**Example:**

```server-ruby
require 'appwrite'

client = Appwrite::Client.new

client
    .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
    .set_project('5df5acd0d48c2') # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

functions = Appwrite::Functions.new(client)

response = functions.list_deployments(function_id: '[FUNCTION_ID]')

puts response.inspect
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

```server-ruby
require 'appwrite'

client = Appwrite::Client.new

client
    .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
    .set_project('5df5acd0d48c2') # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

functions = Appwrite::Functions.new(client)

response = functions.list_executions(function_id: '[FUNCTION_ID]')

puts response.inspect
```

---

#### List Functions

Get a list of all the project's functions. You can use the query params to filter your results.

**Endpoint:** `GET /functions`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| search | string | No | Search term to filter your list results. Max length: 256 chars. |
| limit | integer | No | Maximum number of functions to return in response. By default will return maximum 25 results. Maximum of 100 results allowed per request. |
| offset | integer | No | Offset value. The default value is 0. Use this value to manage pagination. [learn more about pagination](https://appwrite.io/docs/pagination) |
| cursor | string | No | ID of the function used as the starting point for the query, excluding the function itself. Should be used for efficient pagination when working with large sets of data. [learn more about pagination](https://appwrite.io/docs/pagination) |
| cursorDirection | string | No | Direction of the cursor, can be either 'before' or 'after'. |
| orderType | string | No | Order result by ASC or DESC order. |

**Responses:**

- **200**: application/json
  - [Functions List](/docs/references/0.15.x/models/functionList)

**Example:**

```server-ruby
require 'appwrite'

client = Appwrite::Client.new

client
    .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
    .set_project('5df5acd0d48c2') # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

functions = Appwrite::Functions.new(client)

response = functions.list()

puts response.inspect
```

---

#### List runtimes

Get a list of all runtimes that are currently active on your instance.

**Endpoint:** `GET /functions/runtimes`

**Responses:**

- **200**: application/json
  - [Runtimes List](/docs/references/0.15.x/models/runtimeList)

**Example:**

```server-ruby
require 'appwrite'

client = Appwrite::Client.new

client
    .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
    .set_project('5df5acd0d48c2') # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

functions = Appwrite::Functions.new(client)

response = functions.list_runtimes()

puts response.inspect
```

---

#### Update Function

Update function by its unique ID.

**Endpoint:** `PUT /functions/{functionId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. |
| name | string | Yes | Function name. Max length: 128 chars. |
| execute | array | Yes | An array of strings with execution permissions. By default no user is granted with any execute permissions. [learn more about permissions](https://appwrite.io/docs/advanced/platform/permissions) and get a full list of available permissions. Maximum of 100 scopes are allowed, each 64 characters long. |
| vars | object | No | Key-value JSON object that will be passed to the function as environment variables. |
| events | array | No | Events list. Maximum of 100 events are allowed. |
| schedule | string | No | Schedule CRON syntax. |
| timeout | integer | No | Maximum execution time in seconds. |

**Responses:**

- **200**: application/json
  - [Function](/docs/references/0.15.x/models/function)

**Example:**

```server-ruby
require 'appwrite'

client = Appwrite::Client.new

client
    .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
    .set_project('5df5acd0d48c2') # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

functions = Appwrite::Functions.new(client)

response = functions.update(function_id: '[FUNCTION_ID]', name: '[NAME]', execute: ["role:all"])

puts response.inspect
```

---

#### Update Function Deployment

Update the function code deployment ID using the unique function ID. Use this endpoint to switch the code deployment that should be executed by the execution endpoint.

**Endpoint:** `PATCH /functions/{functionId}/deployments/{deploymentId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. |
| deploymentId | string | Yes | Deployment ID. |

**Responses:**

- **200**: application/json
  - [Function](/docs/references/0.15.x/models/function)

**Example:**

```server-ruby
require 'appwrite'

client = Appwrite::Client.new

client
    .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
    .set_project('5df5acd0d48c2') # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

functions = Appwrite::Functions.new(client)

response = functions.update_deployment(function_id: '[FUNCTION_ID]', deployment_id: '[DEPLOYMENT_ID]')

puts response.inspect
```

---

#### Delete Deployment

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

```server-ruby
require 'appwrite'

client = Appwrite::Client.new

client
    .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
    .set_project('5df5acd0d48c2') # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

functions = Appwrite::Functions.new(client)

response = functions.delete_deployment(function_id: '[FUNCTION_ID]', deployment_id: '[DEPLOYMENT_ID]')

puts response.inspect
```

---

#### Delete Function

Delete a function by its unique ID.

**Endpoint:** `DELETE /functions/{functionId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. |

**Responses:**

- **204**: no content

**Example:**

```server-ruby
require 'appwrite'

client = Appwrite::Client.new

client
    .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
    .set_project('5df5acd0d48c2') # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

functions = Appwrite::Functions.new(client)

response = functions.delete(function_id: '[FUNCTION_ID]')

puts response.inspect
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

```server-ruby
require 'appwrite'

client = Appwrite::Client.new

client
    .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
    .set_project('5df5acd0d48c2') # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

functions = Appwrite::Functions.new(client)

response = functions.retry_build(function_id: '[FUNCTION_ID]', deployment_id: '[DEPLOYMENT_ID]', build_id: '[BUILD_ID]')

puts response.inspect
```

---

