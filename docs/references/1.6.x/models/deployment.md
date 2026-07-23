# Deployment

Deployment

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Deployment ID. |
| $createdAt | string | Deployment creation date in ISO 8601 format. |
| $updatedAt | string | Deployment update date in ISO 8601 format. |
| type | string | Type of deployment. |
| resourceId | string | Resource ID. |
| resourceType | string | Resource type. |
| entrypoint | string | The entrypoint file to use to execute the deployment code. |
| size | integer | The code size in bytes. |
| buildSize | integer | The build output size in bytes. |
| buildId | string | The current build ID. |
| activate | boolean | Whether the deployment should be automatically activated. |
| status | string | The deployment status. Possible values are "processing", "building", "waiting", "ready", and "failed". |
| buildLogs | string | The build logs. |
| buildTime | integer | The current build time in seconds. |
| providerRepositoryName | string | The name of the vcs provider repository |
| providerRepositoryOwner | string | The name of the vcs provider repository owner |
| providerRepositoryUrl | string | The url of the vcs provider repository |
| providerBranch | string | The branch of the vcs repository |
| providerCommitHash | string | The commit hash of the vcs commit |
| providerCommitAuthorUrl | string | The url of vcs commit author |
| providerCommitAuthor | string | The name of vcs commit author |
| providerCommitMessage | string | The commit message |
| providerCommitUrl | string | The url of the vcs commit |
| providerBranchUrl | string | The branch of the vcs repository |

## Example

### REST

```json
{}
```

### GraphQL

```json
{}
```

