# Site

Site

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Site ID. |
| $createdAt | string | Site creation date in ISO 8601 format. |
| $updatedAt | string | Site update date in ISO 8601 format. |
| name | string | Site name. |
| enabled | boolean | Site enabled. |
| live | boolean | Is the site deployed with the latest configuration? This is set to false if you've changed an environment variables, entrypoint, commands, or other settings that needs redeploy to be applied. When the value is false, redeploy the site to update it with the latest configuration. |
| logging | boolean | When disabled, request logs will exclude logs and errors, and site responses will be slightly faster. |
| framework | string | Site framework. |
| deploymentId | string | Site's active deployment ID. |
| deploymentCreatedAt | string | Active deployment creation date in ISO 8601 format. |
| deploymentScreenshotLight | string | Screenshot of active deployment with light theme preference file ID. |
| deploymentScreenshotDark | string | Screenshot of active deployment with dark theme preference file ID. |
| latestDeploymentId | string | Site's latest deployment ID. |
| latestDeploymentCreatedAt | string | Latest deployment creation date in ISO 8601 format. |
| latestDeploymentStatus | string | Status of latest deployment. Possible values are "waiting", "processing", "building", "ready", and "failed". |
| vars | array<variable> | Site variables. Can be one of: [Variable model](/docs/references/1.8.x/models/variable) |
| timeout | integer | Site request timeout in seconds. |
| installCommand | string | The install command used to install the site dependencies. |
| buildCommand | string | The build command used to build the site. |
| outputDirectory | string | The directory where the site build output is located. |
| installationId | string | Site VCS (Version Control System) installation id. |
| providerRepositoryId | string | VCS (Version Control System) Repository ID |
| providerBranch | string | VCS (Version Control System) branch name |
| providerRootDirectory | string | Path to site in VCS (Version Control System) repository |
| providerSilentMode | boolean | Is VCS (Version Control System) connection is in silent mode? When in silence mode, no comments will be posted on the repository pull or merge requests |
| specification | string | Machine specification for builds and executions. |
| buildRuntime | string | Site build runtime. |
| adapter | string | Site framework adapter. |
| fallbackFile | string | Name of fallback file to use instead of 404 page. If null, Appwrite 404 page will be displayed. |

## Example

### REST

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "My Site",
  "enabled": false,
  "live": false,
  "logging": false,
  "framework": "react",
  "deploymentId": "5e5ea5c16897e",
  "deploymentCreatedAt": "2020-10-15T06:38:00.000+00:00",
  "deploymentScreenshotLight": "5e5ea5c16897e",
  "deploymentScreenshotDark": "5e5ea5c16897e",
  "latestDeploymentId": "5e5ea5c16897e",
  "latestDeploymentCreatedAt": "2020-10-15T06:38:00.000+00:00",
  "latestDeploymentStatus": "ready",
  "vars": [],
  "timeout": 300,
  "installCommand": "npm install",
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "installationId": "6m40at4ejk5h2u9s1hboo",
  "providerRepositoryId": "appwrite",
  "providerBranch": "main",
  "providerRootDirectory": "sites/helloWorld",
  "providerSilentMode": false,
  "specification": "s-1vcpu-512mb",
  "buildRuntime": "node-22",
  "adapter": "static",
  "fallbackFile": "index.html"
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "My Site",
  "enabled": false,
  "live": false,
  "logging": false,
  "framework": "react",
  "deploymentId": "5e5ea5c16897e",
  "deploymentCreatedAt": "2020-10-15T06:38:00.000+00:00",
  "deploymentScreenshotLight": "5e5ea5c16897e",
  "deploymentScreenshotDark": "5e5ea5c16897e",
  "latestDeploymentId": "5e5ea5c16897e",
  "latestDeploymentCreatedAt": "2020-10-15T06:38:00.000+00:00",
  "latestDeploymentStatus": "ready",
  "vars": [],
  "timeout": 300,
  "installCommand": "npm install",
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "installationId": "6m40at4ejk5h2u9s1hboo",
  "providerRepositoryId": "appwrite",
  "providerBranch": "main",
  "providerRootDirectory": "sites/helloWorld",
  "providerSilentMode": false,
  "specification": "s-1vcpu-512mb",
  "buildRuntime": "node-22",
  "adapter": "static",
  "fallbackFile": "index.html"
}
```

