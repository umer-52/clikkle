# Log

Log

## Properties

| Name | Type | Description |
|------|------|-------------|
| event | string | Event name. |
| userId | string | User ID. |
| userEmail | string | User Email. |
| userName | string | User Name. |
| mode | string | API mode when event triggered. |
| ip | string | IP session in use when the session was created. |
| time | string | Log creation date in ISO 8601 format. |
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

## Example

### REST

```json
{
  "event": "account.sessions.create",
  "userId": "610fc2f985ee0",
  "userEmail": "john@appwrite.io",
  "userName": "John Doe",
  "mode": "admin",
  "ip": "127.0.0.1",
  "time": "2020-10-15T06:38:00.000+00:00",
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
  "countryName": "United States"
}
```

### GraphQL

```json
{
  "event": "account.sessions.create",
  "userId": "610fc2f985ee0",
  "userEmail": "john@appwrite.io",
  "userName": "John Doe",
  "mode": "admin",
  "ip": "127.0.0.1",
  "time": "2020-10-15T06:38:00.000+00:00",
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
  "countryName": "United States"
}
```

