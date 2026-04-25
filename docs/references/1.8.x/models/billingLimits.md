# BillingLimits

BillingLimits

## Properties

| Name | Type | Description |
|------|------|-------------|
| bandwidth | integer | Bandwidth limit |
| storage | integer | Storage limit |
| users | integer | Users limit |
| executions | integer | Executions limit |
| GBHours | integer | GBHours limit |
| imageTransformations | integer | Image transformations limit |
| authPhone | integer | Auth phone limit |
| budgetLimit | integer | Budget limit percentage |

## Example

### REST

```json
{
  "bandwidth": 5,
  "storage": 150,
  "users": 200000,
  "executions": 750000,
  "GBHours": 100,
  "imageTransformations": 100,
  "authPhone": 10,
  "budgetLimit": 100
}
```

### GraphQL

```json
{
  "bandwidth": 5,
  "storage": 150,
  "users": 200000,
  "executions": 750000,
  "GBHours": 100,
  "imageTransformations": 100,
  "authPhone": 10,
  "budgetLimit": 100
}
```

