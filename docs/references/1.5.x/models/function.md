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
| logging | boolean | Whether executions will be logged. When set to false, executions will not be logged, but will reduce resource used by your Appwrite project. |
| runtime | string | Function execution runtime. |
| deployment | string | Function's active deployment ID. |
| vars | array<variable> | Function variables. Can be one of: [Variable model](/docs/references/1.5.x/models/variable) |
| events | array | Function trigger events. |
| schedule | string | Function execution schedult in CRON format. |
| timeout | integer | Function execution timeout in seconds. |
| entrypoint | string | The entrypoint file used to execute the deployment. |
| commands | string | The build command used to build the deployment. |
| version | string | Version of Open Runtimes used for the function. |
| installationId | string | Function VCS (Version Control System) installation id. |
| providerRepositoryId | string | VCS (Version Control System) Repository ID |
| providerBranch | string | VCS (Version Control System) branch name |
| providerRootDirectory | string | Path to function in VCS (Version Control System) repository |
| providerSilentMode | boolean | Is VCS (Version Control System) connection is in silent mode? When in silence mode, no comments will be posted on the repository pull or merge requests |

## Example

### REST

```json
{}
```

### GraphQL

```json
{}
```

