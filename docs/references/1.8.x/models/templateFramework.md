# Template Framework

Template Framework

## Properties

| Name | Type | Description |
|------|------|-------------|
| key | string | Parent framework key. |
| name | string | Framework Name. |
| installCommand | string | The install command used to install the dependencies. |
| buildCommand | string | The build command used to build the deployment. |
| outputDirectory | string | The output directory to store the build output. |
| providerRootDirectory | string | Path to site in VCS (Version Control System) repository |
| buildRuntime | string | Runtime used during build step of template. |
| adapter | string | Site framework runtime |
| fallbackFile | string | Fallback file for SPA. Only relevant for static serve runtime. |

## Example

### REST

```json
{
  "key": "sveltekit",
  "name": "SvelteKit",
  "installCommand": "npm install",
  "buildCommand": "npm run build",
  "outputDirectory": "./build",
  "providerRootDirectory": "./svelte-kit/starter",
  "buildRuntime": "node-22",
  "adapter": "ssr",
  "fallbackFile": "index.html"
}
```

### GraphQL

```json
{
  "key": "sveltekit",
  "name": "SvelteKit",
  "installCommand": "npm install",
  "buildCommand": "npm run build",
  "outputDirectory": "./build",
  "providerRootDirectory": "./svelte-kit/starter",
  "buildRuntime": "node-22",
  "adapter": "ssr",
  "fallbackFile": "index.html"
}
```

