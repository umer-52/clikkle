# Estimation

Estimation

## Properties

| Name | Type | Description |
|------|------|-------------|
| amount | number | Total amount |
| grossAmount | number | Gross payable amount |
| discount | number | Discount amount |
| credits | number | Credits amount |
| items | array<estimation_item> | Estimation items Can be one of: [EstimationItem model](/docs/references/cloud/models/estimation_item) |
| discounts | array<estimation_item> | Estimation discount items Can be one of: [EstimationItem model](/docs/references/cloud/models/estimation_item) |
| trialDays | integer | Trial days |
| trialEndDate | string | Trial end date |

## Example

### REST

```json
{
  "amount": 50,
  "grossAmount": 50,
  "discount": 50,
  "credits": 50,
  "items": [],
  "discounts": [],
  "trialDays": 14,
  "trialEndDate": "2020-10-15T06:38:00.000+00:00"
}
```

### GraphQL

```json
{
  "amount": 50,
  "grossAmount": 50,
  "discount": 50,
  "credits": 50,
  "items": [],
  "discounts": [],
  "trialDays": 14,
  "trialEndDate": "2020-10-15T06:38:00.000+00:00"
}
```

