# Block

Block

## Properties

| Name | Type | Description |
|------|------|-------------|
| $createdAt | string | Block creation date in ISO 8601 format. |
| resourceType | string | Resource type that is blocked |
| resourceId | string | Resource identifier that is blocked |
| reason | string | Reason for the block |
| expiredAt | string | Block expiration date in ISO 8601 format. |

## Example

### REST

```json
{
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "resourceType": "project",
  "resourceId": "5e5ea5c16897e",
  "reason": "Payment overdue",
  "expiredAt": "2020-10-15T06:38:00.000+00:00"
}
```

### GraphQL

```json
{
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "resourceType": "project",
  "resourceId": "5e5ea5c16897e",
  "reason": "Payment overdue",
  "expiredAt": "2020-10-15T06:38:00.000+00:00"
}
```

