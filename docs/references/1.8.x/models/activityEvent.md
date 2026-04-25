# ActivityEvent

ActivityEvent

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Event ID. |
| userType | string | User type. |
| userId | string | User ID. |
| userEmail | string | User Email. |
| userName | string | User Name. |
| resourceParent | string | Resource parent. |
| resourceType | string | Resource type. |
| resourceId | string | Resource ID. |
| resource | string | Resource. |
| event | string | Event name. |
| userAgent | string | User agent. |
| ip | string | IP address. |
| mode | string | API mode when event triggered. |
| country | string | Location. |
| time | string | Log creation date in ISO 8601 format. |
| projectId | string | Project ID. |
| teamId | string | Team ID. |
| hostname | string | Hostname. |
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
  "$id": "5e5ea5c16897e",
  "userType": "user",
  "userId": "610fc2f985ee0",
  "userEmail": "john@appwrite.io",
  "userName": "John Doe",
  "resourceParent": "database/ID",
  "resourceType": "collection",
  "resourceId": "610fc2f985ee0",
  "resource": "collections/610fc2f985ee0",
  "event": "account.sessions.create",
  "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
  "ip": "127.0.0.1",
  "mode": "admin",
  "country": "US",
  "time": "2020-10-15T06:38:00.000+00:00",
  "projectId": "610fc2f985ee0",
  "teamId": "610fc2f985ee0",
  "hostname": "appwrite.io",
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
  "_id": "5e5ea5c16897e",
  "userType": "user",
  "userId": "610fc2f985ee0",
  "userEmail": "john@appwrite.io",
  "userName": "John Doe",
  "resourceParent": "database/ID",
  "resourceType": "collection",
  "resourceId": "610fc2f985ee0",
  "resource": "collections/610fc2f985ee0",
  "event": "account.sessions.create",
  "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
  "ip": "127.0.0.1",
  "mode": "admin",
  "country": "US",
  "time": "2020-10-15T06:38:00.000+00:00",
  "projectId": "610fc2f985ee0",
  "teamId": "610fc2f985ee0",
  "hostname": "appwrite.io",
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

