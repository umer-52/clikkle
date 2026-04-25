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
  - [Function](/docs/references/1.7.x/models/function)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/functions"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := functions.New(client)
    response, error := service.Create(
        "<FUNCTION_ID>",
        "<NAME>",
        "node-14.5",
        functions.WithCreateExecute(interface{}{"any"}),
        functions.WithCreateEvents([]interface{}{}),
        functions.WithCreateSchedule(""),
        functions.WithCreateTimeout(1),
        functions.WithCreateEnabled(false),
        functions.WithCreateLogging(false),
        functions.WithCreateEntrypoint("<ENTRYPOINT>"),
        functions.WithCreateCommands("<COMMANDS>"),
        functions.WithCreateScopes([]interface{}{}),
        functions.WithCreateInstallationId("<INSTALLATION_ID>"),
        functions.WithCreateProviderRepositoryId("<PROVIDER_REPOSITORY_ID>"),
        functions.WithCreateProviderBranch("<PROVIDER_BRANCH>"),
        functions.WithCreateProviderSilentMode(false),
        functions.WithCreateProviderRootDirectory("<PROVIDER_ROOT_DIRECTORY>"),
        functions.WithCreateSpecification(""),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Function](/docs/references/1.7.x/models/function)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/functions"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := functions.New(client)
    response, error := service.Get(
        "<FUNCTION_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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

**Responses:**

- **200**: application/json
  - [Functions List](/docs/references/1.7.x/models/functionList)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/functions"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := functions.New(client)
    response, error := service.List(
        functions.WithListQueries([]interface{}{}),
        functions.WithListSearch("<SEARCH>"),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Function](/docs/references/1.7.x/models/function)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/functions"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := functions.New(client)
    response, error := service.Update(
        "<FUNCTION_ID>",
        "<NAME>",
        functions.WithUpdateRuntime("node-14.5"),
        functions.WithUpdateExecute(interface{}{"any"}),
        functions.WithUpdateEvents([]interface{}{}),
        functions.WithUpdateSchedule(""),
        functions.WithUpdateTimeout(1),
        functions.WithUpdateEnabled(false),
        functions.WithUpdateLogging(false),
        functions.WithUpdateEntrypoint("<ENTRYPOINT>"),
        functions.WithUpdateCommands("<COMMANDS>"),
        functions.WithUpdateScopes([]interface{}{}),
        functions.WithUpdateInstallationId("<INSTALLATION_ID>"),
        functions.WithUpdateProviderRepositoryId("<PROVIDER_REPOSITORY_ID>"),
        functions.WithUpdateProviderBranch("<PROVIDER_BRANCH>"),
        functions.WithUpdateProviderSilentMode(false),
        functions.WithUpdateProviderRootDirectory("<PROVIDER_ROOT_DIRECTORY>"),
        functions.WithUpdateSpecification(""),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
  - [Function](/docs/references/1.7.x/models/function)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/functions"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := functions.New(client)
    response, error := service.UpdateFunctionDeployment(
        "<FUNCTION_ID>",
        "<DEPLOYMENT_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/functions"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := functions.New(client)
    response, error := service.Delete(
        "<FUNCTION_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

### runtimes

#### List runtimes

Get a list of all runtimes that are currently active on your instance.

**Endpoint:** `GET /functions/runtimes`

**Responses:**

- **200**: application/json
  - [Runtimes List](/docs/references/1.7.x/models/runtimeList)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/functions"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := functions.New(client)
    response, error := service.ListRuntimes(
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

#### List specifications

List allowed function specifications for this instance.

**Endpoint:** `GET /functions/specifications`

**Responses:**

- **200**: application/json
  - [Specifications List](/docs/references/1.7.x/models/specificationList)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/functions"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := functions.New(client)
    response, error := service.ListSpecifications(
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
  - [Deployment](/docs/references/1.7.x/models/deployment)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/functions"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := functions.New(client)
    response, error := service.CreateDeployment(
        "<FUNCTION_ID>",
        file.NewInputFile("/path/to/file.png", "file.png"),
        false,
        functions.WithCreateDeploymentEntrypoint("<ENTRYPOINT>"),
        functions.WithCreateDeploymentCommands("<COMMANDS>"),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
  - [Deployment](/docs/references/1.7.x/models/deployment)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/functions"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := functions.New(client)
    response, error := service.CreateDuplicateDeployment(
        "<FUNCTION_ID>",
        "<DEPLOYMENT_ID>",
        functions.WithCreateDuplicateDeploymentBuildId("<BUILD_ID>"),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
| version | string | Yes | Version (tag) for the repo linked to the function template. |
| activate | boolean | No | Automatically activate the deployment when it is finished building. |

**Responses:**

- **202**: application/json
  - [Deployment](/docs/references/1.7.x/models/deployment)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/functions"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := functions.New(client)
    response, error := service.CreateTemplateDeployment(
        "<FUNCTION_ID>",
        "<REPOSITORY>",
        "<OWNER>",
        "<ROOT_DIRECTORY>",
        "<VERSION>",
        functions.WithCreateTemplateDeploymentActivate(false),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
  - [Deployment](/docs/references/1.7.x/models/deployment)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/functions"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := functions.New(client)
    response, error := service.CreateVcsDeployment(
        "<FUNCTION_ID>",
        "branch",
        "<REFERENCE>",
        functions.WithCreateVcsDeploymentActivate(false),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
  - [Deployment](/docs/references/1.7.x/models/deployment)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/functions"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := functions.New(client)
    response, error := service.GetDeployment(
        "<FUNCTION_ID>",
        "<DEPLOYMENT_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/functions"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := functions.New(client)
    response, error := service.GetDeploymentDownload(
        "<FUNCTION_ID>",
        "<DEPLOYMENT_ID>",
        functions.WithGetDeploymentDownloadType("source"),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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

**Responses:**

- **200**: application/json
  - [Deployments List](/docs/references/1.7.x/models/deploymentList)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/functions"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := functions.New(client)
    response, error := service.ListDeployments(
        "<FUNCTION_ID>",
        functions.WithListDeploymentsQueries([]interface{}{}),
        functions.WithListDeploymentsSearch("<SEARCH>"),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
  - [Deployment](/docs/references/1.7.x/models/deployment)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/functions"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := functions.New(client)
    response, error := service.UpdateDeploymentStatus(
        "<FUNCTION_ID>",
        "<DEPLOYMENT_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/functions"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := functions.New(client)
    response, error := service.DeleteDeployment(
        "<FUNCTION_ID>",
        "<DEPLOYMENT_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
| method | string | No | HTTP method of execution. Default value is GET. |
| headers | string | No | HTTP headers of execution. Defaults to empty. |
| scheduledAt | string | No | Scheduled execution time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future with precision in minutes. |

**Responses:**

- **201**: multipart/form-data

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/functions"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithSession("") // The user session to authenticate with
    )

    service := functions.New(client)
    response, error := service.CreateExecution(
        "<FUNCTION_ID>",
        functions.WithCreateExecutionBody("<BODY>"),
        functions.WithCreateExecutionAsync(false),
        functions.WithCreateExecutionPath("<PATH>"),
        functions.WithCreateExecutionMethod("GET"),
        functions.WithCreateExecutionHeaders(map[string]interface{}{}),
        functions.WithCreateExecutionScheduledAt(""),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Execution](/docs/references/1.7.x/models/execution)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/functions"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithSession("") // The user session to authenticate with
    )

    service := functions.New(client)
    response, error := service.GetExecution(
        "<FUNCTION_ID>",
        "<EXECUTION_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: trigger, status, responseStatusCode, duration, requestMethod, requestPath, deploymentId |

**Responses:**

- **200**: application/json
  - [Executions List](/docs/references/1.7.x/models/executionList)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/functions"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithSession("") // The user session to authenticate with
    )

    service := functions.New(client)
    response, error := service.ListExecutions(
        "<FUNCTION_ID>",
        functions.WithListExecutionsQueries([]interface{}{}),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/functions"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := functions.New(client)
    response, error := service.DeleteExecution(
        "<FUNCTION_ID>",
        "<EXECUTION_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
  - [Variable](/docs/references/1.7.x/models/variable)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/functions"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := functions.New(client)
    response, error := service.CreateVariable(
        "<FUNCTION_ID>",
        "<KEY>",
        "<VALUE>",
        functions.WithCreateVariableSecret(false),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Variable](/docs/references/1.7.x/models/variable)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/functions"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := functions.New(client)
    response, error := service.GetVariable(
        "<FUNCTION_ID>",
        "<VARIABLE_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Variables List](/docs/references/1.7.x/models/variableList)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/functions"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := functions.New(client)
    response, error := service.ListVariables(
        "<FUNCTION_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
| secret | boolean | No | Secret variables can be updated or deleted, but only functions can read them during build and runtime. |

**Responses:**

- **200**: application/json
  - [Variable](/docs/references/1.7.x/models/variable)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/functions"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := functions.New(client)
    response, error := service.UpdateVariable(
        "<FUNCTION_ID>",
        "<VARIABLE_ID>",
        "<KEY>",
        functions.WithUpdateVariableValue("<VALUE>"),
        functions.WithUpdateVariableSecret(false),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/functions"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := functions.New(client)
    response, error := service.DeleteVariable(
        "<FUNCTION_ID>",
        "<VARIABLE_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

