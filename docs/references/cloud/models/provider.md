# Provider

Provider

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Provider ID. |
| $createdAt | string | Provider creation time in ISO 8601 format. |
| $updatedAt | string | Provider update date in ISO 8601 format. |
| name | string | The name for the provider instance. |
| provider | string | The name of the provider service. |
| enabled | boolean | Is provider enabled? |
| type | string | Type of provider. |
| credentials | object | Provider credentials. |
| options | object | Provider options. |

## Example

### REST

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "Mailgun",
  "provider": "mailgun",
  "enabled": true,
  "type": "sms",
  "credentials": {
    "key": "123456789"
  },
  "options": {
    "from": "sender-email@mydomain"
  }
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "Mailgun",
  "provider": "mailgun",
  "enabled": true,
  "type": "sms",
  "credentials": {
    "key": "123456789"
  },
  "options": {
    "from": "sender-email@mydomain"
  }
}
```

