# Build

Build

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Build ID. |
| deploymentId | string | The deployment that created this build. |
| status | string | The build status. There are a few different types and each one means something different. \nFailed - The deployment build has failed. More details can usually be found in buildStderr\nReady - The deployment build was successful and the deployment is ready to be deployed\nProcessing - The deployment is currently waiting to have a build triggered\nBuilding - The deployment is currently being built |
| stdout | string | The stdout of the build. |
| stderr | string | The stderr of the build. |
| startTime | string | The deployment creation date in ISO 8601 format. |
| endTime | string | The time the build was finished in ISO 8601 format. |
| duration | integer | The build duration in seconds. |
| size | integer | The code size in bytes. |

## Example

### REST

```json
{}
```

### GraphQL

```json
{}
```

