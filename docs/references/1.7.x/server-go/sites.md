# sites

The Sites service allows you to host, deploy and manage web applications directly within the Clikkle platform. You can use this service to create and manage sites, handle deployments, configure domains, and set up environment variables.

Sites supports both static and server-side rendered (SSR) websites. Static sites are pre-built and served as-is, while SSR sites generate content dynamically for each request. The service automatically handles SSL certificates, provides unique domains for each site, and allows custom domain configuration.

Each deployed site benefits from a global CDN with strategic edge locations as well as advanced security features offered by Clikkle Network. Site deployments can be configured with custom environment variables, build settings, and timeouts. You can deploy sites manually or set up automatic deployments from Git repositories for continuous integration and delivery.

You can find more information on how to build and deploy a web app in the Sites product pages.


## Base URL

```
https://<REGION>.cloud.appwrite.io/v1
```

## Endpoints

### sites

#### Create site

Create a new site.

**Endpoint:** `POST /sites`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| siteId | string | Yes | Site ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| name | string | Yes | Site name. Max length: 128 chars. |
| framework | string | Yes | Sites framework. |
| buildRuntime | string | Yes | Runtime to use during build step. |
| enabled | boolean | No | Is site enabled? When set to 'disabled', users cannot access the site but Server SDKs with and API key can still access the site. No data is lost when this is toggled. |
| logging | boolean | No | When disabled, request logs will exclude logs and errors, and site responses will be slightly faster. |
| timeout | integer | No | Maximum request time in seconds. |
| installCommand | string | No | Install Command. |
| buildCommand | string | No | Build Command. |
| outputDirectory | string | No | Output Directory for site. |
| adapter | string | No | Framework adapter defining rendering strategy. Allowed values are: static, ssr |
| installationId | string | No | Appwrite Installation ID for VCS (Version Control System) deployment. |
| fallbackFile | string | No | Fallback file for single page application sites. |
| providerRepositoryId | string | No | Repository ID of the repo linked to the site. |
| providerBranch | string | No | Production branch for the repo linked to the site. |
| providerSilentMode | boolean | No | Is the VCS (Version Control System) connection in silent mode for the repo linked to the site? In silent mode, comments will not be made on commits and pull requests. |
| providerRootDirectory | string | No | Path to site code in the linked repo. |
| specification | string | No | Framework specification for the site and builds. |

**Responses:**

- **201**: application/json
  - [Site](/docs/references/1.7.x/models/site)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/sites"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := sites.New(client)
    response, error := service.Create(
        "<SITE_ID>",
        "<NAME>",
        "analog",
        "node-14.5",
        sites.WithCreateEnabled(false),
        sites.WithCreateLogging(false),
        sites.WithCreateTimeout(1),
        sites.WithCreateInstallCommand("<INSTALL_COMMAND>"),
        sites.WithCreateBuildCommand("<BUILD_COMMAND>"),
        sites.WithCreateOutputDirectory("<OUTPUT_DIRECTORY>"),
        sites.WithCreateAdapter("static"),
        sites.WithCreateInstallationId("<INSTALLATION_ID>"),
        sites.WithCreateFallbackFile("<FALLBACK_FILE>"),
        sites.WithCreateProviderRepositoryId("<PROVIDER_REPOSITORY_ID>"),
        sites.WithCreateProviderBranch("<PROVIDER_BRANCH>"),
        sites.WithCreateProviderSilentMode(false),
        sites.WithCreateProviderRootDirectory("<PROVIDER_ROOT_DIRECTORY>"),
        sites.WithCreateSpecification(""),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

#### Get site

Get a site by its unique ID.

**Endpoint:** `GET /sites/{siteId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| siteId | string | Yes | Site ID. |

**Responses:**

- **200**: application/json
  - [Site](/docs/references/1.7.x/models/site)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/sites"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := sites.New(client)
    response, error := service.Get(
        "<SITE_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

#### List sites

Get a list of all the project's sites. You can use the query params to filter your results.

**Endpoint:** `GET /sites`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| queries | string | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, framework, deploymentId, buildCommand, installCommand, outputDirectory, installationId |
| search | string | No | Search term to filter your list results. Max length: 256 chars. |

**Responses:**

- **200**: application/json
  - [Sites List](/docs/references/1.7.x/models/siteList)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/sites"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := sites.New(client)
    response, error := service.List(
        sites.WithListQueries([]interface{}{}),
        sites.WithListSearch("<SEARCH>"),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

#### Update site

Update site by its unique ID.

**Endpoint:** `PUT /sites/{siteId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| siteId | string | Yes | Site ID. |
| name | string | Yes | Site name. Max length: 128 chars. |
| framework | string | Yes | Sites framework. |
| enabled | boolean | No | Is site enabled? When set to 'disabled', users cannot access the site but Server SDKs with and API key can still access the site. No data is lost when this is toggled. |
| logging | boolean | No | When disabled, request logs will exclude logs and errors, and site responses will be slightly faster. |
| timeout | integer | No | Maximum request time in seconds. |
| installCommand | string | No | Install Command. |
| buildCommand | string | No | Build Command. |
| outputDirectory | string | No | Output Directory for site. |
| buildRuntime | string | No | Runtime to use during build step. |
| adapter | string | No | Framework adapter defining rendering strategy. Allowed values are: static, ssr |
| fallbackFile | string | No | Fallback file for single page application sites. |
| installationId | string | No | Appwrite Installation ID for VCS (Version Control System) deployment. |
| providerRepositoryId | string | No | Repository ID of the repo linked to the site. |
| providerBranch | string | No | Production branch for the repo linked to the site. |
| providerSilentMode | boolean | No | Is the VCS (Version Control System) connection in silent mode for the repo linked to the site? In silent mode, comments will not be made on commits and pull requests. |
| providerRootDirectory | string | No | Path to site code in the linked repo. |
| specification | string | No | Framework specification for the site and builds. |

**Responses:**

- **200**: application/json
  - [Site](/docs/references/1.7.x/models/site)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/sites"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := sites.New(client)
    response, error := service.Update(
        "<SITE_ID>",
        "<NAME>",
        "analog",
        sites.WithUpdateEnabled(false),
        sites.WithUpdateLogging(false),
        sites.WithUpdateTimeout(1),
        sites.WithUpdateInstallCommand("<INSTALL_COMMAND>"),
        sites.WithUpdateBuildCommand("<BUILD_COMMAND>"),
        sites.WithUpdateOutputDirectory("<OUTPUT_DIRECTORY>"),
        sites.WithUpdateBuildRuntime("node-14.5"),
        sites.WithUpdateAdapter("static"),
        sites.WithUpdateFallbackFile("<FALLBACK_FILE>"),
        sites.WithUpdateInstallationId("<INSTALLATION_ID>"),
        sites.WithUpdateProviderRepositoryId("<PROVIDER_REPOSITORY_ID>"),
        sites.WithUpdateProviderBranch("<PROVIDER_BRANCH>"),
        sites.WithUpdateProviderSilentMode(false),
        sites.WithUpdateProviderRootDirectory("<PROVIDER_ROOT_DIRECTORY>"),
        sites.WithUpdateSpecification(""),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

#### Update site's deployment

Update the site active deployment. Use this endpoint to switch the code deployment that should be used when visitor opens your site.

**Endpoint:** `PATCH /sites/{siteId}/deployment`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| siteId | string | Yes | Site ID. |
| deploymentId | string | Yes | Deployment ID. |

**Responses:**

- **200**: application/json
  - [Site](/docs/references/1.7.x/models/site)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/sites"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := sites.New(client)
    response, error := service.UpdateSiteDeployment(
        "<SITE_ID>",
        "<DEPLOYMENT_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

#### Delete site

Delete a site by its unique ID.

**Endpoint:** `DELETE /sites/{siteId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| siteId | string | Yes | Site ID. |

**Responses:**

- **204**: no content

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/sites"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := sites.New(client)
    response, error := service.Delete(
        "<SITE_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

### frameworks

#### List frameworks

Get a list of all frameworks that are currently available on the server instance.

**Endpoint:** `GET /sites/frameworks`

**Responses:**

- **200**: application/json
  - [Frameworks List](/docs/references/1.7.x/models/frameworkList)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/sites"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := sites.New(client)
    response, error := service.ListFrameworks(
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

#### List specifications

List allowed site specifications for this instance.

**Endpoint:** `GET /sites/specifications`

**Responses:**

- **200**: application/json
  - [Specifications List](/docs/references/1.7.x/models/specificationList)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/sites"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := sites.New(client)
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

Create a new site code deployment. Use this endpoint to upload a new version of your site code. To activate your newly uploaded code, you'll need to update the function's deployment to use your new deployment ID.

**Endpoint:** `POST /sites/{siteId}/deployments`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| siteId | string | Yes | Site ID. |
| code | string | Yes | Gzip file with your code package. When used with the Appwrite CLI, pass the path to your code directory, and the CLI will automatically package your code. Use a path that is within the current directory. |
| activate | boolean | Yes | Automatically activate the deployment when it is finished building. |
| installCommand | string | No | Install Commands. |
| buildCommand | string | No | Build Commands. |
| outputDirectory | string | No | Output Directory. |

**Responses:**

- **202**: application/json
  - [Deployment](/docs/references/1.7.x/models/deployment)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/sites"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := sites.New(client)
    response, error := service.CreateDeployment(
        "<SITE_ID>",
        file.NewInputFile("/path/to/file.png", "file.png"),
        false,
        sites.WithCreateDeploymentInstallCommand("<INSTALL_COMMAND>"),
        sites.WithCreateDeploymentBuildCommand("<BUILD_COMMAND>"),
        sites.WithCreateDeploymentOutputDirectory("<OUTPUT_DIRECTORY>"),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

#### Create duplicate deployment

Create a new build for an existing site deployment. This endpoint allows you to rebuild a deployment with the updated site configuration, including its commands and output directory if they have been modified. The build process will be queued and executed asynchronously. The original deployment's code will be preserved and used for the new build.

**Endpoint:** `POST /sites/{siteId}/deployments/duplicate`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| siteId | string | Yes | Site ID. |
| deploymentId | string | Yes | Deployment ID. |

**Responses:**

- **202**: application/json
  - [Deployment](/docs/references/1.7.x/models/deployment)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/sites"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := sites.New(client)
    response, error := service.CreateDuplicateDeployment(
        "<SITE_ID>",
        "<DEPLOYMENT_ID>",
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

**Endpoint:** `POST /sites/{siteId}/deployments/template`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| siteId | string | Yes | Site ID. |
| repository | string | Yes | Repository name of the template. |
| owner | string | Yes | The name of the owner of the template. |
| rootDirectory | string | Yes | Path to site code in the template repo. |
| version | string | Yes | Version (tag) for the repo linked to the site template. |
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
    "github.com/appwrite/sdk-for-go/sites"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := sites.New(client)
    response, error := service.CreateTemplateDeployment(
        "<SITE_ID>",
        "<REPOSITORY>",
        "<OWNER>",
        "<ROOT_DIRECTORY>",
        "<VERSION>",
        sites.WithCreateTemplateDeploymentActivate(false),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

#### Create VCS deployment

Create a deployment when a site is connected to VCS.

This endpoint lets you create deployment from a branch, commit, or a tag.

**Endpoint:** `POST /sites/{siteId}/deployments/vcs`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| siteId | string | Yes | Site ID. |
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
    "github.com/appwrite/sdk-for-go/sites"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := sites.New(client)
    response, error := service.CreateVcsDeployment(
        "<SITE_ID>",
        "branch",
        "<REFERENCE>",
        sites.WithCreateVcsDeploymentActivate(false),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

#### Get deployment

Get a site deployment by its unique ID.

**Endpoint:** `GET /sites/{siteId}/deployments/{deploymentId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| siteId | string | Yes | Site ID. |
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
    "github.com/appwrite/sdk-for-go/sites"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := sites.New(client)
    response, error := service.GetDeployment(
        "<SITE_ID>",
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

Get a site deployment content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.

**Endpoint:** `GET /sites/{siteId}/deployments/{deploymentId}/download`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| siteId | string | Yes | Site ID. |
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
    "github.com/appwrite/sdk-for-go/sites"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := sites.New(client)
    response, error := service.GetDeploymentDownload(
        "<SITE_ID>",
        "<DEPLOYMENT_ID>",
        sites.WithGetDeploymentDownloadType("source"),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

#### List deployments

Get a list of all the site's code deployments. You can use the query params to filter your results.

**Endpoint:** `GET /sites/{siteId}/deployments`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| siteId | string | Yes | Site ID. |
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
    "github.com/appwrite/sdk-for-go/sites"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := sites.New(client)
    response, error := service.ListDeployments(
        "<SITE_ID>",
        sites.WithListDeploymentsQueries([]interface{}{}),
        sites.WithListDeploymentsSearch("<SEARCH>"),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

#### Update deployment status

Cancel an ongoing site deployment build. If the build is already in progress, it will be stopped and marked as canceled. If the build hasn't started yet, it will be marked as canceled without executing. You cannot cancel builds that have already completed (status 'ready') or failed. The response includes the final build status and details.

**Endpoint:** `PATCH /sites/{siteId}/deployments/{deploymentId}/status`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| siteId | string | Yes | Site ID. |
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
    "github.com/appwrite/sdk-for-go/sites"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := sites.New(client)
    response, error := service.UpdateDeploymentStatus(
        "<SITE_ID>",
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

Delete a site deployment by its unique ID.

**Endpoint:** `DELETE /sites/{siteId}/deployments/{deploymentId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| siteId | string | Yes | Site ID. |
| deploymentId | string | Yes | Deployment ID. |

**Responses:**

- **204**: no content

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/sites"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := sites.New(client)
    response, error := service.DeleteDeployment(
        "<SITE_ID>",
        "<DEPLOYMENT_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

### logs

#### Get log

Get a site request log by its unique ID.

**Endpoint:** `GET /sites/{siteId}/logs/{logId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| siteId | string | Yes | Site ID. |
| logId | string | Yes | Log ID. |

**Responses:**

- **200**: application/json
  - [Execution](/docs/references/1.7.x/models/execution)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/sites"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := sites.New(client)
    response, error := service.GetLog(
        "<SITE_ID>",
        "<LOG_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

#### List logs

Get a list of all site logs. You can use the query params to filter your results.

**Endpoint:** `GET /sites/{siteId}/logs`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| siteId | string | Yes | Site ID. |
| queries | string | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: trigger, status, responseStatusCode, duration, requestMethod, requestPath, deploymentId |

**Responses:**

- **200**: application/json
  - [Executions List](/docs/references/1.7.x/models/executionList)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/sites"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := sites.New(client)
    response, error := service.ListLogs(
        "<SITE_ID>",
        sites.WithListLogsQueries([]interface{}{}),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

#### Delete log

Delete a site log by its unique ID.

**Endpoint:** `DELETE /sites/{siteId}/logs/{logId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| siteId | string | Yes | Site ID. |
| logId | string | Yes | Log ID. |

**Responses:**

- **204**: no content

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/sites"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := sites.New(client)
    response, error := service.DeleteLog(
        "<SITE_ID>",
        "<LOG_ID>",
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

Create a new site variable. These variables can be accessed during build and runtime (server-side rendering) as environment variables.

**Endpoint:** `POST /sites/{siteId}/variables`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| siteId | string | Yes | Site unique ID. |
| key | string | Yes | Variable key. Max length: 255 chars. |
| value | string | Yes | Variable value. Max length: 8192 chars. |
| secret | boolean | No | Secret variables can be updated or deleted, but only sites can read them during build and runtime. |

**Responses:**

- **201**: application/json
  - [Variable](/docs/references/1.7.x/models/variable)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/sites"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := sites.New(client)
    response, error := service.CreateVariable(
        "<SITE_ID>",
        "<KEY>",
        "<VALUE>",
        sites.WithCreateVariableSecret(false),
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

**Endpoint:** `GET /sites/{siteId}/variables/{variableId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| siteId | string | Yes | Site unique ID. |
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
    "github.com/appwrite/sdk-for-go/sites"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := sites.New(client)
    response, error := service.GetVariable(
        "<SITE_ID>",
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

Get a list of all variables of a specific site.

**Endpoint:** `GET /sites/{siteId}/variables`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| siteId | string | Yes | Site unique ID. |

**Responses:**

- **200**: application/json
  - [Variables List](/docs/references/1.7.x/models/variableList)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/sites"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := sites.New(client)
    response, error := service.ListVariables(
        "<SITE_ID>",
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

**Endpoint:** `PUT /sites/{siteId}/variables/{variableId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| siteId | string | Yes | Site unique ID. |
| variableId | string | Yes | Variable unique ID. |
| key | string | Yes | Variable key. Max length: 255 chars. |
| value | string | No | Variable value. Max length: 8192 chars. |
| secret | boolean | No | Secret variables can be updated or deleted, but only sites can read them during build and runtime. |

**Responses:**

- **200**: application/json
  - [Variable](/docs/references/1.7.x/models/variable)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/sites"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := sites.New(client)
    response, error := service.UpdateVariable(
        "<SITE_ID>",
        "<VARIABLE_ID>",
        "<KEY>",
        sites.WithUpdateVariableValue("<VALUE>"),
        sites.WithUpdateVariableSecret(false),
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

**Endpoint:** `DELETE /sites/{siteId}/variables/{variableId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| siteId | string | Yes | Site unique ID. |
| variableId | string | Yes | Variable unique ID. |

**Responses:**

- **204**: no content

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/sites"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := sites.New(client)
    response, error := service.DeleteVariable(
        "<SITE_ID>",
        "<VARIABLE_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

