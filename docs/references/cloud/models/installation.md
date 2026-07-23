# Installation

Installation

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Function ID. |
| $createdAt | string | Function creation date in ISO 8601 format. |
| $updatedAt | string | Function update date in ISO 8601 format. |
| provider | string | VCS (Version Control System) provider name. |
| organization | string | VCS (Version Control System) organization name. |
| providerInstallationId | string | VCS (Version Control System) installation ID. |

## Example

### REST

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "provider": "github",
  "organization": "appwrite",
  "providerInstallationId": "5322"
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "provider": "github",
  "organization": "appwrite",
  "providerInstallationId": "5322"
}
```

