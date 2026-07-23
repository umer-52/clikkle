# DetectionFramework

DetectionFramework

## Properties

| Name | Type | Description |
|------|------|-------------|
| variables | array<detectionVariable> | Environment variables found in .env files Can be one of: [DetectionVariable model](/docs/references/1.8.x/models/detectionVariable) |
| framework | string | Framework |
| installCommand | string | Site Install Command |
| buildCommand | string | Site Build Command |
| outputDirectory | string | Site Output Directory |

## Example

### REST

```json
{
  "variables": {},
  "framework": "nuxt",
  "installCommand": "npm install",
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

### GraphQL

```json
{
  "variables": {},
  "framework": "nuxt",
  "installCommand": "npm install",
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

