# Target

Target

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Target ID. |
| $createdAt | string | Target creation time in ISO 8601 format. |
| $updatedAt | string | Target update date in ISO 8601 format. |
| name | string | Target Name. |
| userId | string | User ID. |
| providerId | string | Provider ID. |
| providerType | string | The target provider type. Can be one of the following: `email`, `sms` or `push`. |
| identifier | string | The target identifier. |
| expired | boolean | Is the target expired. |

## Example

### REST

```json
{
  "$id": "259125845563242502",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "Apple iPhone 12",
  "userId": "259125845563242502",
  "providerId": "259125845563242502",
  "providerType": "email",
  "identifier": "token",
  "expired": false
}
```

### GraphQL

```json
{
  "_id": "259125845563242502",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "Apple iPhone 12",
  "userId": "259125845563242502",
  "providerId": "259125845563242502",
  "providerType": "email",
  "identifier": "token",
  "expired": false
}
```

