# ProviderRepositoryRuntime

ProviderRepositoryRuntime

## Properties

| Name | Type | Description |
|------|------|-------------|
| id | string | VCS (Version Control System) repository ID. |
| name | string | VCS (Version Control System) repository name. |
| organization | string | VCS (Version Control System) organization name |
| provider | string | VCS (Version Control System) provider name. |
| private | boolean | Is VCS (Version Control System) repository private? |
| defaultBranch | string | VCS (Version Control System) repository's default branch name. |
| pushedAt | string | Last commit date in ISO 8601 format. |
| variables | array | Environment variables found in .env files |
| runtime | string | Auto-detected runtime. Empty if type is not "runtime". |

## Example

### REST

```json
{
  "id": "5e5ea5c16897e",
  "name": "appwrite",
  "organization": "appwrite",
  "provider": "github",
  "private": true,
  "defaultBranch": "main",
  "pushedAt": "datetime",
  "variables": [
    "PORT",
    "NODE_ENV"
  ],
  "runtime": "node-22"
}
```

### GraphQL

```json
{
  "id": "5e5ea5c16897e",
  "name": "appwrite",
  "organization": "appwrite",
  "provider": "github",
  "private": true,
  "defaultBranch": "main",
  "pushedAt": "datetime",
  "variables": [
    "PORT",
    "NODE_ENV"
  ],
  "runtime": "node-22"
}
```

