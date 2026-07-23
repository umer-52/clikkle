# Platform

Platform

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Platform ID. |
| $createdAt | string | Platform creation date in ISO 8601 format. |
| $updatedAt | string | Platform update date in ISO 8601 format. |
| name | string | Platform name. |
| type | string | Platform type. Possible values are: web, flutter-web, flutter-ios, flutter-android, ios, android, and unity. |
| key | string | Platform Key. iOS bundle ID or Android package name.  Empty string for other platforms. |
| store | string | App store or Google Play store ID. |
| hostname | string | Web app hostname. Empty string for other platforms. |
| httpUser | string | HTTP basic authentication username. |
| httpPass | string | HTTP basic authentication password. |

## Example

### REST

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "My Web App",
  "type": "web",
  "key": "com.company.appname",
  "store": "",
  "hostname": true,
  "httpUser": "username",
  "httpPass": "password"
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "My Web App",
  "type": "web",
  "key": "com.company.appname",
  "store": "",
  "hostname": true,
  "httpUser": "username",
  "httpPass": "password"
}
```

