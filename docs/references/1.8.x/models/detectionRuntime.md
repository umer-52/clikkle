# DetectionRuntime

DetectionRuntime

## Properties

| Name | Type | Description |
|------|------|-------------|
| variables | array<detectionVariable> | Environment variables found in .env files Can be one of: [DetectionVariable model](/docs/references/1.8.x/models/detectionVariable) |
| runtime | string | Runtime |
| entrypoint | string | Function Entrypoint |
| commands | string | Function install and build commands |

## Example

### REST

```json
{
  "variables": {},
  "runtime": "node",
  "entrypoint": "index.js",
  "commands": "npm install && npm run build"
}
```

### GraphQL

```json
{
  "variables": {},
  "runtime": "node",
  "entrypoint": "index.js",
  "commands": "npm install && npm run build"
}
```

