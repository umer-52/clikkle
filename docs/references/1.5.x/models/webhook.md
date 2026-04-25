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
{}
```

### GraphQL

```json
{}
```

