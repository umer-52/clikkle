# Platform

Platform

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Platform ID. |
| $createdAt | string | Platform creation date in ISO 8601 format. |
| $updatedAt | string | Platform update date in ISO 8601 format. |
| name | string | Platform name. |
| type | string | Platform type. Possible values are: web, flutter-ios, flutter-android, ios, android, and unity. |
| key | string | Platform Key. iOS bundle ID or Android package name.  Empty string for other platforms. |
| store | string | App store or Google Play store ID. |
| hostname | string | Web app hostname. Empty string for other platforms. |
| httpUser | string | HTTP basic authentication username. |
| httpPass | string | HTTP basic authentication password. |

## Example

### REST

```json
{}
```

### GraphQL

```json
{}
```

