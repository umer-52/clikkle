# Team

Team

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Team ID. |
| $createdAt | string | Team creation date in ISO 8601 format. |
| $updatedAt | string | Team update date in ISO 8601 format. |
| name | string | Team name. |
| total | integer | Total number of team members. |
| prefs | preferences | Team preferences as a key-value object Can be one of: [Preferences model](/docs/references/1.7.x/models/preferences) |

## Example

### REST

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "VIP",
  "total": 7,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  }
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "VIP",
  "total": 7,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  }
}
```

