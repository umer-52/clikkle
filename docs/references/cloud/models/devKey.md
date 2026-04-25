# DevKey

DevKey

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Key ID. |
| $createdAt | string | Key creation date in ISO 8601 format. |
| $updatedAt | string | Key update date in ISO 8601 format. |
| name | string | Key name. |
| expire | string | Key expiration date in ISO 8601 format. |
| secret | string | Secret key. |
| accessedAt | string | Most recent access date in ISO 8601 format. This attribute is only updated again after 24 hours. |
| sdks | array | List of SDK user agents that used this key. |

## Example

### REST

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "Dev API Key",
  "expire": "2020-10-15T06:38:00.000+00:00",
  "secret": "919c2d18fb5d4...a2ae413da83346ad2",
  "accessedAt": "2020-10-15T06:38:00.000+00:00",
  "sdks": "appwrite:flutter"
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "Dev API Key",
  "expire": "2020-10-15T06:38:00.000+00:00",
  "secret": "919c2d18fb5d4...a2ae413da83346ad2",
  "accessedAt": "2020-10-15T06:38:00.000+00:00",
  "sdks": "appwrite:flutter"
}
```

