# ResourceToken

ResourceToken

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Token ID. |
| $createdAt | string | Token creation date in ISO 8601 format. |
| resourceId | string | Resource ID. |
| resourceType | string | Resource type. |
| expire | string | Token expiration date in ISO 8601 format. |
| secret | string | JWT encoded string. |
| accessedAt | string | Most recent access date in ISO 8601 format. This attribute is only updated again after 24 hours. |

## Example

### REST

```json
{
  "$id": "bb8ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "resourceId": "5e5ea5c168bb8:5e5ea5c168bb8",
  "resourceType": "files",
  "expire": "2020-10-15T06:38:00.000+00:00",
  "secret": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

### GraphQL

```json
{
  "_id": "bb8ea5c16897e",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "resourceId": "5e5ea5c168bb8:5e5ea5c168bb8",
  "resourceType": "files",
  "expire": "2020-10-15T06:38:00.000+00:00",
  "secret": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

