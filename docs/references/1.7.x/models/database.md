# Database

Database

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Database ID. |
| name | string | Database name. |
| $createdAt | string | Database creation date in ISO 8601 format. |
| $updatedAt | string | Database update date in ISO 8601 format. |
| enabled | boolean | If database is enabled. Can be 'enabled' or 'disabled'. When disabled, the database is inaccessible to users, but remains accessible to Server SDKs using API keys. |

## Example

### REST

```json
{
  "$id": "5e5ea5c16897e",
  "name": "My Database",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "enabled": false
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "name": "My Database",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "enabled": false
}
```

