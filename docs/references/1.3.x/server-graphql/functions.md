# functions

The Functions service allows you to create custom behaviour that can be triggered by any supported Clikkle system events or by a predefined schedule.

Clikkle Cloud Functions lets you automatically run backend code in response to events triggered by Clikkle or by setting it to be executed in a predefined schedule. Your code is stored in a secure way on your Clikkle instance and is executed in an isolated environment.

You can learn more by following our Cloud Functions tutorial.


## Base URL

```
https://<REGION>.cloud.appwrite.io/v1
```

## Endpoints

#### Create Build

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
        functionId: "[FUNCTION_ID]",
        deploymentId: "[DEPLOYMENT_ID]",
        buildId: "[BUILD_ID]"
    ) {
        status
    }
}

```

---

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

- **202**: application/json
  - [Deployment](/docs/references/1.3.x/models/deployment)

**Example:**

```server-graphql
POST /v1/functions/{functionId}/deployments HTTP/1.1
Host: HOSTNAME
Content-Type: multipart/form-data; boundary="cec8e8123c05ba25"
X-Appwrite-Response-Format: 1.0.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2
Content-Length: *Length of your entity body in bytes*

--cec8e8123c05ba25
Content-Disposition: form-data; name="operations"

{ "query": "mutation { functionsCreateDeployment(functionId: $functionId, entrypoint: $entrypoint, code: $code, activate: $activate) { id }" }, "variables": { "functionId": "[FUNCTION_ID]", "entrypoint": "[ENTRYPOINT]", "code": null, "activate": false } }

--cec8e8123c05ba25
Content-Disposition: form-data; name="map"

{ "0": ["variables.code"],  }

--cec8e8123c05ba25
Content-Disposition: form-data; name="0"; filename="code.ext"

File contents

--cec8e8123c05ba25--

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
| async | boolean | No | Execute code in the background. Default value is false. |

**Responses:**

- **201**: application/json
  - [Execution](/docs/references/1.3.x/models/execution)

**Rate limits:** 60 requests per 60 seconds

**Example:**

```server-graphql
mutation {
    functionsCreateExecution(
        functionId: "[FUNCTION_ID]"
    ) {
        _id
        _createdAt
        _updatedAt
        _permissions
        functionId
        trigger
        status
        statusCode
        response
        stdout
        stderr
        duration
    }
}

```

---

#### Create Function

Create a new function. You can pass a list of permissions to allow different project users or team with access to execute the function using the client API.

**Endpoint:** `POST /functions`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| name | string | Yes | Function name. Max length: 128 chars. |
| runtime | string | Yes | Execution runtime. |
| execute | array | No | An array of strings with execution roles. By default no user is granted with any execute permissions. [learn more about permissions](https://appwrite.io/docs/advanced/platform/permissions). Maximum of 100 roles are allowed, each 64 characters long. |
| events | array | No | Events list. Maximum of 100 events are allowed. |
| schedule | string | No | Schedule CRON syntax. |
| timeout | integer | No | Function maximum execution time in seconds. |
| enabled | boolean | No | Is function enabled? |

**Responses:**

- **201**: application/json
  - [Function](/docs/references/1.3.x/models/function)

**Example:**

```server-graphql
mutation {
    functionsCreate(
        functionId: "[FUNCTION_ID]",
        name: "[NAME]",
        runtime: "node-14.5"
    ) {
        _id
        _createdAt
        _updatedAt
        execute
        name
        enabled
        runtime
        deployment
        vars {
            _id
            _createdAt
            _updatedAt
            key
            value
            functionId
        }
        events
        schedule
        scheduleNext
        schedulePrevious
        timeout
    }
}

```

---

#### Create Variable

Create a new function variable. These variables can be accessed within function in the `env` object under the request variable.

**Endpoint:** `POST /functions/{functionId}/variables`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function unique ID. |
| key | string | Yes | Variable key. Max length: 255 chars. |
| value | string | Yes | Variable value. Max length: 8192 chars. |

**Responses:**

- **201**: application/json
  - [Variable](/docs/references/1.3.x/models/variable)

**Example:**

```server-graphql
mutation {
    functionsCreateVariable(
        functionId: "[FUNCTION_ID]",
        key: "[KEY]",
        value: "[VALUE]"
    ) {
        _id
        _createdAt
        _updatedAt
        key
        value
        functionId
    }
}

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
  - [Deployment](/docs/references/1.3.x/models/deployment)

**Example:**

```server-graphql
query {
    functionsGetDeployment(
        functionId: "[FUNCTION_ID]",
        deploymentId: "[DEPLOYMENT_ID]"
    ) {
        _id
        _createdAt
        _updatedAt
        resourceId
        resourceType
        entrypoint
        size
        buildId
        activate
        status
        buildStdout
        buildStderr
        buildTime
    }
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
  - [Execution](/docs/references/1.3.x/models/execution)

**Example:**

```server-graphql
query {
    functionsGetExecution(
        functionId: "[FUNCTION_ID]",
        executionId: "[EXECUTION_ID]"
    ) {
        _id
        _createdAt
        _updatedAt
        _permissions
        functionId
        trigger
        status
        statusCode
        response
        stdout
        stderr
        duration
    }
}

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
  - [Function](/docs/references/1.3.x/models/function)

**Example:**

```server-graphql
query {
    functionsGet(
        functionId: "[FUNCTION_ID]"
    ) {
        _id
        _createdAt
        _updatedAt
        execute
        name
        enabled
        runtime
        deployment
        vars {
            _id
            _createdAt
            _updatedAt
            key
            value
            functionId
        }
        events
        schedule
        scheduleNext
        schedulePrevious
        timeout
    }
}

```

---

#### Get Variable

Get a variable by its unique ID.

**Endpoint:** `GET /functions/{functionId}/variables/{variableId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function unique ID. |
| variableId | string | Yes | Variable unique ID. |

**Responses:**

- **200**: application/json
  - [Variable](/docs/references/1.3.x/models/variable)

**Example:**

```server-graphql
query {
    functionsGetVariable(
        functionId: "[FUNCTION_ID]",
        variableId: "[VARIABLE_ID]"
    ) {
        _id
        _createdAt
        _updatedAt
        key
        value
        functionId
    }
}

```

---

#### List Deployments

Get a list of all the project's code deployments. You can use the query params to filter your results.

**Endpoint:** `GET /functions/{functionId}/deployments`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/products/databases/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: entrypoint, size, buildId, activate |
| search | string | No | Search term to filter your list results. Max length: 256 chars. |

**Responses:**

- **200**: application/json
  - [Deployments List](/docs/references/1.3.x/models/deploymentList)

**Example:**

```server-graphql
query {
    functionsListDeployments(
        functionId: "[FUNCTION_ID]"
    ) {
        total
        deployments {
            _id
            _createdAt
            _updatedAt
            resourceId
            resourceType
            entrypoint
            size
            buildId
            activate
            status
            buildStdout
            buildStderr
            buildTime
        }
    }
}

```

---

#### List Executions

Get a list of all the current user function execution logs. You can use the query params to filter your results.

**Endpoint:** `GET /functions/{functionId}/executions`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function ID. |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/products/databases/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: trigger, status, statusCode, duration |
| search | string | No | Search term to filter your list results. Max length: 256 chars. |

**Responses:**

- **200**: application/json
  - [Executions List](/docs/references/1.3.x/models/executionList)

**Example:**

```server-graphql
query {
    functionsListExecutions(
        functionId: "[FUNCTION_ID]"
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
            statusCode
            response
            stdout
            stderr
            duration
        }
    }
}

```

---

#### List Functions

Get a list of all the project's functions. You can use the query params to filter your results.

**Endpoint:** `GET /functions`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/products/databases/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, runtime, deployment, schedule, scheduleNext, schedulePrevious, timeout |
| search | string | No | Search term to filter your list results. Max length: 256 chars. |

**Responses:**

- **200**: application/json
  - [Functions List](/docs/references/1.3.x/models/functionList)

**Example:**

```server-graphql
query {
    functionsList {
        total
        functions {
            _id
            _createdAt
            _updatedAt
            execute
            name
            enabled
            runtime
            deployment
            vars {
                _id
                _createdAt
                _updatedAt
                key
                value
                functionId
            }
            events
            schedule
            scheduleNext
            schedulePrevious
            timeout
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
  - [Runtimes List](/docs/references/1.3.x/models/runtimeList)

**Example:**

```server-graphql
query {
    functionsListRuntimes {
        total
        runtimes {
            _id
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

#### List Variables

Get a list of all variables of a specific function.

**Endpoint:** `GET /functions/{functionId}/variables`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| functionId | string | Yes | Function unique ID. |

**Responses:**

- **200**: application/json
  - [Variables List](/docs/references/1.3.x/models/variableList)

**Example:**

```server-graphql
query {
    functionsListVariables(
        functionId: "[FUNCTION_ID]"
    ) {
        total
        variables {
            _id
            _createdAt
            _updatedAt
            key
            value
            functionId
        }
    }
}

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
| execute | array | No | An array of strings with execution roles. By default no user is granted with any execute permissions. [learn more about permissions](https://appwrite.io/docs/advanced/platform/permissions). Maximum of 100 roles are allowed, each 64 characters long. |
| events | array | No | Events list. Maximum of 100 events are allowed. |
| schedule | string | No | Schedule CRON syntax. |
| timeout | integer | No | Maximum execution time in seconds. |
| enabled | boolean | No | Is function enabled? |

**Responses:**

- **200**: application/json
  - [Function](/docs/references/1.3.x/models/function)

**Example:**

```server-graphql
mutation {
    functionsUpdate(
        functionId: "[FUNCTION_ID]",
        name: "[NAME]"
    ) {
        _id
        _createdAt
        _updatedAt
        execute
        name
        enabled
        runtime
        deployment
        vars {
            _id
            _createdAt
            _updatedAt
            key
            value
            functionId
        }
        events
        schedule
        scheduleNext
        schedulePrevious
        timeout
    }
}

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
  - [Function](/docs/references/1.3.x/models/function)

**Example:**

```server-graphql
mutation {
    functionsUpdateDeployment(
        functionId: "[FUNCTION_ID]",
        deploymentId: "[DEPLOYMENT_ID]"
    ) {
        _id
        _createdAt
        _updatedAt
        execute
        name
        enabled
        runtime
        deployment
        vars {
            _id
            _createdAt
            _updatedAt
            key
            value
            functionId
        }
        events
        schedule
        scheduleNext
        schedulePrevious
        timeout
    }
}

```

---

#### Update Variable

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
  - [Variable](/docs/references/1.3.x/models/variable)

**Example:**

```server-graphql
mutation {
    functionsUpdateVariable(
        functionId: "[FUNCTION_ID]",
        variableId: "[VARIABLE_ID]",
        key: "[KEY]"
    ) {
        _id
        _createdAt
        _updatedAt
        key
        value
        functionId
    }
}

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

```server-graphql
mutation {
    functionsDeleteDeployment(
        functionId: "[FUNCTION_ID]",
        deploymentId: "[DEPLOYMENT_ID]"
    ) {
        status
    }
}

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

```server-graphql
mutation {
    functionsDelete(
        functionId: "[FUNCTION_ID]"
    ) {
        status
    }
}

```

---

#### Delete Variable

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
        functionId: "[FUNCTION_ID]",
        variableId: "[VARIABLE_ID]"
    ) {
        status
    }
}

```

---

