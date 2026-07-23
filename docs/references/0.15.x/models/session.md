# Session

Session

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Session ID. |
| $createdAt | integer | Session creation date in Unix timestamp. |
| userId | string | User ID. |
| expire | integer | Session expiration date in Unix timestamp. |
| provider | string | Session Provider. |
| providerUid | string | Session Provider User ID. |
| providerAccessToken | string | Session Provider Access Token. |
| providerAccessTokenExpiry | integer | Date, the Unix timestamp of when the access token expires. |
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

## Example

### REST

```json
{}
```

### GraphQL

```json
{}
```

