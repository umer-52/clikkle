# Identity

Identity

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Identity ID. |
| $createdAt | string | Identity creation date in ISO 8601 format. |
| $updatedAt | string | Identity update date in ISO 8601 format. |
| userId | string | User ID. |
| provider | string | Identity Provider. |
| providerUid | string | ID of the User in the Identity Provider. |
| providerEmail | string | Email of the User in the Identity Provider. |
| providerAccessToken | string | Identity Provider Access Token. |
| providerAccessTokenExpiry | string | The date of when the access token expires in ISO 8601 format. |
| providerRefreshToken | string | Identity Provider Refresh Token. |

## Example

### REST

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "userId": "5e5bb8c16897e",
  "provider": "email",
  "providerUid": "5e5bb8c16897e",
  "providerEmail": "user@example.com",
  "providerAccessToken": "MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3",
  "providerAccessTokenExpiry": "2020-10-15T06:38:00.000+00:00",
  "providerRefreshToken": "MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3"
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "userId": "5e5bb8c16897e",
  "provider": "email",
  "providerUid": "5e5bb8c16897e",
  "providerEmail": "user@example.com",
  "providerAccessToken": "MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3",
  "providerAccessTokenExpiry": "2020-10-15T06:38:00.000+00:00",
  "providerRefreshToken": "MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3"
}
```

