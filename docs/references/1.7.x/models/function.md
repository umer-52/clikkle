# Function

Function

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Function ID. |
| $createdAt | string | Function creation date in ISO 8601 format. |
| $updatedAt | string | Function update date in ISO 8601 format. |
| execute | array | Execution permissions. |
| name | string | Function name. |
| enabled | boolean | Function enabled. |
| live | boolean | Is the function deployed with the latest configuration? This is set to false if you've changed an environment variables, entrypoint, commands, or other settings that needs redeploy to be applied. When the value is false, redeploy the function to update it with the latest configuration. |
| logging | boolean | When disabled, executions will exclude logs and errors, and will be slightly faster. |
| runtime | string | Function execution and build runtime. |
| deploymentId | string | Function's active deployment ID. |
| deploymentCreatedAt | string | Active deployment creation date in ISO 8601 format. |
| latestDeploymentId | string | Function's latest deployment ID. |
| latestDeploymentCreatedAt | string | Latest deployment creation date in ISO 8601 format. |
| latestDeploymentStatus | string | Status of latest deployment. Possible values are "waiting", "processing", "building", "ready", and "failed". |
| scopes | array | Allowed permission scopes. |
| vars | array<variable> | Function variables. Can be one of: [Variable model](/docs/references/1.7.x/models/variable) |
| events | array | Function trigger events. |
| schedule | string | Function execution schedule in CRON format. |
| timeout | integer | Function execution timeout in seconds. |
| entrypoint | string | The entrypoint file used to execute the deployment. |
| commands | string | The build command used to build the deployment. |
| version | string | Version of Open Runtimes used for the function. |
| installationId | string | Function VCS (Version Control System) installation id. |
| providerRepositoryId | string | VCS (Version Control System) Repository ID |
| providerBranch | string | VCS (Version Control System) branch name |
| providerRootDirectory | string | Path to function in VCS (Version Control System) repository |
| providerSilentMode | boolean | Is VCS (Version Control System) connection is in silent mode? When in silence mode, no comments will be posted on the repository pull or merge requests |
| specification | string | Machine specification for builds and executions. |

## Example

### REST

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "execute": "users",
  "name": "My Function",
  "enabled": false,
  "live": false,
  "logging": false,
  "runtime": "python-3.8",
  "deploymentId": "5e5ea5c16897e",
  "deploymentCreatedAt": "2020-10-15T06:38:00.000+00:00",
  "latestDeploymentId": "5e5ea5c16897e",
  "latestDeploymentCreatedAt": "2020-10-15T06:38:00.000+00:00",
  "latestDeploymentStatus": "ready",
  "scopes": "users.read",
  "vars": [],
  "events": "account.create",
  "schedule": "5 4 * * *",
  "timeout": 300,
  "entrypoint": "index.js",
  "commands": "npm install",
  "version": "v2",
  "installationId": "6m40at4ejk5h2u9s1hboo",
  "providerRepositoryId": "appwrite",
  "providerBranch": "main",
  "providerRootDirectory": "functions/helloWorld",
  "providerSilentMode": false,
  "specification": "s-1vcpu-512mb"
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "execute": "users",
  "name": "My Function",
  "enabled": false,
  "live": false,
  "logging": false,
  "runtime": "python-3.8",
  "deploymentId": "5e5ea5c16897e",
  "deploymentCreatedAt": "2020-10-15T06:38:00.000+00:00",
  "latestDeploymentId": "5e5ea5c16897e",
  "latestDeploymentCreatedAt": "2020-10-15T06:38:00.000+00:00",
  "latestDeploymentStatus": "ready",
  "scopes": "users.read",
  "vars": [],
  "events": "account.create",
  "schedule": "5 4 * * *",
  "timeout": 300,
  "entrypoint": "index.js",
  "commands": "npm install",
  "version": "v2",
  "installationId": "6m40at4ejk5h2u9s1hboo",
  "providerRepositoryId": "appwrite",
  "providerBranch": "main",
  "providerRootDirectory": "functions/helloWorld",
  "providerSilentMode": false,
  "specification": "s-1vcpu-512mb"
}
```

