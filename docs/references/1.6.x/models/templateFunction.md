# Template Function

Template Function

## Properties

| Name | Type | Description |
|------|------|-------------|
| icon | string | Function Template Icon. |
| id | string | Function Template ID. |
| name | string | Function Template Name. |
| tagline | string | Function Template Tagline. |
| permissions | array | Execution permissions. |
| events | array | Function trigger events. |
| cron | string | Function execution schedult in CRON format. |
| timeout | integer | Function execution timeout in seconds. |
| useCases | array | Function use cases. |
| runtimes | array<templateRuntime> | List of runtimes that can be used with this template. Can be one of: [Template Runtime model](/docs/references/1.6.x/models/templateRuntime) |
| instructions | string | Function Template Instructions. |
| vcsProvider | string | VCS (Version Control System) Provider. |
| providerRepositoryId | string | VCS (Version Control System) Repository ID |
| providerOwner | string | VCS (Version Control System) Owner. |
| providerVersion | string | VCS (Version Control System) branch version (tag). |
| variables | array<templateVariable> | Function variables. Can be one of: [Template Variable model](/docs/references/1.6.x/models/templateVariable) |
| scopes | array | Function scopes. |

## Example

### REST

```json
{}
```

### GraphQL

```json
{}
```

