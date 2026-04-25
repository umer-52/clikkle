# Framework

Framework

## Properties

| Name | Type | Description |
|------|------|-------------|
| key | string | Framework key. |
| name | string | Framework Name. |
| buildRuntime | string | Default runtime version. |
| runtimes | array | List of supported runtime versions. |
| adapters | array<frameworkAdapter> | List of supported adapters. Can be one of: [Framework Adapter model](/docs/references/1.8.x/models/frameworkAdapter) |

## Example

### REST

```json
{
  "key": "sveltekit",
  "name": "SvelteKit",
  "buildRuntime": "node-22",
  "runtimes": [
    "static-1",
    "node-22"
  ],
  "adapters": [
    {
      "key": "static",
      "buildRuntime": "node-22",
      "buildCommand": "npm run build",
      "installCommand": "npm install",
      "outputDirectory": "./dist"
    }
  ]
}
```

### GraphQL

```json
{
  "key": "sveltekit",
  "name": "SvelteKit",
  "buildRuntime": "node-22",
  "runtimes": [
    "static-1",
    "node-22"
  ],
  "adapters": [
    {
      "key": "static",
      "buildRuntime": "node-22",
      "buildCommand": "npm run build",
      "installCommand": "npm install",
      "outputDirectory": "./dist"
    }
  ]
}
```

