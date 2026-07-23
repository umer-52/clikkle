# Template Runtime

Template Runtime

## Properties

| Name | Type | Description |
|------|------|-------------|
| name | string | Runtime Name. |
| commands | string | The build command used to build the deployment. |
| entrypoint | string | The entrypoint file used to execute the deployment. |
| providerRootDirectory | string | Path to function in VCS (Version Control System) repository |

## Example

### REST

```json
{
  "name": "node-19.0",
  "commands": "npm install",
  "entrypoint": "index.js",
  "providerRootDirectory": "node/starter"
}
```

### GraphQL

```json
{
  "name": "node-19.0",
  "commands": "npm install",
  "entrypoint": "index.js",
  "providerRootDirectory": "node/starter"
}
```

