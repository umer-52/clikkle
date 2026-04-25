# DetectionRuntime

DetectionRuntime

## Properties

| Name | Type | Description |
|------|------|-------------|
| runtime | string | Runtime |
| entrypoint | string | Function Entrypoint |
| commands | string | Function install and build commands |

## Example

### REST

```json
{
  "runtime": "node",
  "entrypoint": "index.js",
  "commands": "npm install && npm run build"
}
```

### GraphQL

```json
{
  "runtime": "node",
  "entrypoint": "index.js",
  "commands": "npm install && npm run build"
}
```

