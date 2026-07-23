# Deployment

Deployment

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Deployment ID. |
| $createdAt | integer | Deployment creation date in Unix timestamp. |
| $updatedAt | integer | Deployment update date in Unix timestamp. |
| resourceId | string | Resource ID. |
| resourceType | string | Resource type. |
| entrypoint | string | The entrypoint file to use to execute the deployment code. |
| size | integer | The code size in bytes. |
| buildId | string | The current build ID. |
| activate | boolean | Whether the deployment should be automatically activated. |
| status | string | The deployment status. |
| buildStdout | string | The build stdout. |
| buildStderr | string | The build stderr. |

## Example

### REST

```json
{}
```

### GraphQL

```json
{}
```

