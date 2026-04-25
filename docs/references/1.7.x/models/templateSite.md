# Template Site

Template Site

## Properties

| Name | Type | Description |
|------|------|-------------|
| key | string | Site Template ID. |
| name | string | Site Template Name. |
| tagline | string | Short description of template |
| demoUrl | string | URL hosting a template demo. |
| screenshotDark | string | File URL with preview screenshot in dark theme preference. |
| screenshotLight | string | File URL with preview screenshot in light theme preference. |
| useCases | array | Site use cases. |
| frameworks | array<templateFramework> | List of frameworks that can be used with this template. Can be one of: [Template Framework model](/docs/references/1.7.x/models/templateFramework) |
| vcsProvider | string | VCS (Version Control System) Provider. |
| providerRepositoryId | string | VCS (Version Control System) Repository ID |
| providerOwner | string | VCS (Version Control System) Owner. |
| providerVersion | string | VCS (Version Control System) branch version (tag). |
| variables | array<templateVariable> | Site variables. Can be one of: [Template Variable model](/docs/references/1.7.x/models/templateVariable) |

## Example

### REST

```json
{
  "key": "starter",
  "name": "Starter site",
  "tagline": "Minimal web app integrating with Appwrite.",
  "demoUrl": "https://nextjs-starter.appwrite.network/",
  "screenshotDark": "https://cloud.appwrite.io/images/sites/templates/template-for-blog-dark.png",
  "screenshotLight": "https://cloud.appwrite.io/images/sites/templates/template-for-blog-light.png",
  "useCases": "Starter",
  "frameworks": [],
  "vcsProvider": "github",
  "providerRepositoryId": "templates",
  "providerOwner": "appwrite",
  "providerVersion": "main",
  "variables": []
}
```

### GraphQL

```json
{
  "key": "starter",
  "name": "Starter site",
  "tagline": "Minimal web app integrating with Appwrite.",
  "demoUrl": "https://nextjs-starter.appwrite.network/",
  "screenshotDark": "https://cloud.appwrite.io/images/sites/templates/template-for-blog-dark.png",
  "screenshotLight": "https://cloud.appwrite.io/images/sites/templates/template-for-blog-light.png",
  "useCases": "Starter",
  "frameworks": [],
  "vcsProvider": "github",
  "providerRepositoryId": "templates",
  "providerOwner": "appwrite",
  "providerVersion": "main",
  "variables": []
}
```

