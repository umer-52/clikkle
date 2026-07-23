# BillingPlanAddonDetails

BillingPlanAddonDetails

## Properties

| Name | Type | Description |
|------|------|-------------|
| supported | boolean | Is the addon supported in the plan? |
| planIncluded | integer | Addon plan included value |
| limit | integer | Addon limit |
| type | string | Addon type |
| currency | string | Price currency |
| price | number | Price |
| value | integer | Resource value |
| invoiceDesc | string | Description on invoice |

## Example

### REST

```json
{
  "supported": true,
  "planIncluded": 1,
  "limit": 5,
  "type": "numeric",
  "currency": "USD",
  "price": 5,
  "value": 25,
  "invoiceDesc": ""
}
```

### GraphQL

```json
{
  "supported": true,
  "planIncluded": 1,
  "limit": 5,
  "type": "numeric",
  "currency": "USD",
  "price": 5,
  "value": 25,
  "invoiceDesc": ""
}
```

