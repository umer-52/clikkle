# Webhook

Webhook

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Webhook ID. |
| $createdAt | string | Webhook creation date in ISO 8601 format. |
| $updatedAt | string | Webhook update date in ISO 8601 format. |
| name | string | Webhook name. |
| url | string | Webhook URL endpoint. |
| events | array | Webhook trigger events. |
| security | boolean | Indicated if SSL / TLS Certificate verification is enabled. |
| httpUser | string | HTTP basic authentication username. |
| httpPass | string | HTTP basic authentication password. |
| signatureKey | string | Signature key which can be used to validated incoming |
| enabled | boolean | Indicates if this webhook is enabled. |
| logs | string | Webhook error logs from the most recent failure. |
| attempts | integer | Number of consecutive failed webhook attempts. |

## Example

### REST

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "My Webhook",
  "url": "https://example.com/webhook",
  "events": [
    "databases.tables.update",
    "databases.collections.update"
  ],
  "security": true,
  "httpUser": "username",
  "httpPass": "password",
  "signatureKey": "ad3d581ca230e2b7059c545e5a",
  "enabled": true,
  "logs": "Failed to connect to remote server.",
  "attempts": 10
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "My Webhook",
  "url": "https://example.com/webhook",
  "events": [
    "databases.tables.update",
    "databases.collections.update"
  ],
  "security": true,
  "httpUser": "username",
  "httpPass": "password",
  "signatureKey": "ad3d581ca230e2b7059c545e5a",
  "enabled": true,
  "logs": "Failed to connect to remote server.",
  "attempts": 10
}
```

