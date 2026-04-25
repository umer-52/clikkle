# Session

Session

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Session ID. |
| $createdAt | string | Session creation date in ISO 8601 format. |
| $updatedAt | string | Session update date in ISO 8601 format. |
| userId | string | User ID. |
| expire | string | Session expiration date in ISO 8601 format. |
| provider | string | Session Provider. |
| providerUid | string | Session Provider User ID. |
| providerAccessToken | string | Session Provider Access Token. |
| providerAccessTokenExpiry | string | The date of when the access token expires in ISO 8601 format. |
| providerRefreshToken | string | Session Provider Refresh Token. |
| ip | string | IP in use when the session was created. |
| osCode | string | Operating system code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/os.json). |
| osName | string | Operating system name. |
| osVersion | string | Operating system version. |
| clientType | string | Client type. |
| clientCode | string | Client code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/clients.json). |
| clientName | string | Client name. |
| clientVersion | string | Client version. |
| clientEngine | string | Client engine name. |
| clientEngineVersion | string | Client engine name. |
| deviceName | string | Device name. |
| deviceBrand | string | Device brand name. |
| deviceModel | string | Device model name. |
| countryCode | string | Country two-character ISO 3166-1 alpha code. |
| countryName | string | Country name. |
| current | boolean | Returns true if this the current user session. |
| factors | array | Returns a list of active session factors. |
| secret | string | Secret used to authenticate the user. Only included if the request was made with an API key |
| mfaUpdatedAt | string | Most recent date in ISO 8601 format when the session successfully passed MFA challenge. |

## Example

### REST

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "userId": "5e5bb8c16897e",
  "expire": "2020-10-15T06:38:00.000+00:00",
  "provider": "email",
  "providerUid": "user@example.com",
  "providerAccessToken": "MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3",
  "providerAccessTokenExpiry": "2020-10-15T06:38:00.000+00:00",
  "providerRefreshToken": "MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3",
  "ip": "127.0.0.1",
  "osCode": "Mac",
  "osName": "Mac",
  "osVersion": "Mac",
  "clientType": "browser",
  "clientCode": "CM",
  "clientName": "Chrome Mobile iOS",
  "clientVersion": "84.0",
  "clientEngine": "WebKit",
  "clientEngineVersion": "605.1.15",
  "deviceName": "smartphone",
  "deviceBrand": "Google",
  "deviceModel": "Nexus 5",
  "countryCode": "US",
  "countryName": "United States",
  "current": true,
  "factors": [
    "email"
  ],
  "secret": "5e5bb8c16897e",
  "mfaUpdatedAt": "2020-10-15T06:38:00.000+00:00"
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "userId": "5e5bb8c16897e",
  "expire": "2020-10-15T06:38:00.000+00:00",
  "provider": "email",
  "providerUid": "user@example.com",
  "providerAccessToken": "MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3",
  "providerAccessTokenExpiry": "2020-10-15T06:38:00.000+00:00",
  "providerRefreshToken": "MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3",
  "ip": "127.0.0.1",
  "osCode": "Mac",
  "osName": "Mac",
  "osVersion": "Mac",
  "clientType": "browser",
  "clientCode": "CM",
  "clientName": "Chrome Mobile iOS",
  "clientVersion": "84.0",
  "clientEngine": "WebKit",
  "clientEngineVersion": "605.1.15",
  "deviceName": "smartphone",
  "deviceBrand": "Google",
  "deviceModel": "Nexus 5",
  "countryCode": "US",
  "countryName": "United States",
  "current": true,
  "factors": [
    "email"
  ],
  "secret": "5e5bb8c16897e",
  "mfaUpdatedAt": "2020-10-15T06:38:00.000+00:00"
}
```

