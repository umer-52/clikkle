# Framework Adapter

Framework Adapter

## Properties

| Name | Type | Description |
|------|------|-------------|
| key | string | Adapter key. |
| installCommand | string | Default command to download dependencies. |
| buildCommand | string | Default command to build site into output directory. |
| outputDirectory | string | Default output directory of build. |
| fallbackFile | string | Name of fallback file to use instead of 404 page. If null, Appwrite 404 page will be displayed. |

## Example

### REST

```json
{
  "key": "static",
  "installCommand": "npm install",
  "buildCommand": "npm run build",
  "outputDirectory": "./dist",
  "fallbackFile": "index.html"
}
```

### GraphQL

```json
{
  "key": "static",
  "installCommand": "npm install",
  "buildCommand": "npm run build",
  "outputDirectory": "./dist",
  "fallbackFile": "index.html"
}
```

