# AuthProvider

AuthProvider

## Properties

| Name | Type | Description |
|------|------|-------------|
| key | string | Auth Provider. |
| name | string | Auth Provider name. |
| appId | string | OAuth 2.0 application ID. |
| secret | string | OAuth 2.0 application secret. Might be JSON string if provider requires extra configuration. |
| enabled | boolean | Auth Provider is active and can be used to create session. |

## Example

### REST

```json
{
  "key": "github",
  "name": "GitHub",
  "appId": "259125845563242502",
  "secret": "Bpw_g9c2TGXxfgLshDbSaL8tsCcqgczQ",
  "enabled": ""
}
```

### GraphQL

```json
{
  "key": "github",
  "name": "GitHub",
  "appId": "259125845563242502",
  "secret": "Bpw_g9c2TGXxfgLshDbSaL8tsCcqgczQ",
  "enabled": ""
}
```

