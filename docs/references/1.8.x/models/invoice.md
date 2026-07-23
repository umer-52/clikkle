# Invoice

Invoice

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Invoice ID. |
| $createdAt | string | Invoice creation time in ISO 8601 format. |
| $updatedAt | string | Invoice update date in ISO 8601 format. |
| $permissions | array | Invoice permissions. [Learn more about permissions](/docs/permissions). |
| teamId | string | Project ID |
| aggregationId | string | Aggregation ID |
| plan | string | Billing plan selected. Can be one of `tier-0`, `tier-1` or `tier-2`. |
| usage | array<usageResources> | Usage breakdown per resource Can be one of: [UsageResource model](/docs/references/1.8.x/models/usageResources) |
| amount | number | Invoice Amount |
| tax | number | Tax percentage |
| taxAmount | number | Tax amount |
| vat | number | VAT percentage |
| vatAmount | number | VAT amount |
| grossAmount | number | Gross amount after vat, tax, and discounts applied. |
| creditsUsed | number | Credits used. |
| currency | string | Currency the invoice is in |
| clientSecret | string | Client secret for processing failed payments in front-end |
| status | string | Invoice status |
| lastError | string | Last payment error associated with the invoice |
| dueAt | string | Invoice due date. |
| from | string | Beginning date of the invoice |
| to | string | End date of the invoice |

## Example

### REST

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "$permissions": [
    "read(\"any\")"
  ],
  "teamId": "5e5ea5c16897e",
  "aggregationId": "5e5ea5c16897e",
  "plan": "tier-1",
  "usage": [],
  "amount": 50,
  "tax": 17,
  "taxAmount": 12.5,
  "vat": 17,
  "vatAmount": 12.5,
  "grossAmount": 12.5,
  "creditsUsed": 30,
  "currency": "USD",
  "clientSecret": "pi_daslfasdfkla_asdkfl",
  "status": "succeeded",
  "lastError": "Your card has insufficient balance.",
  "dueAt": "2020-10-15T06:38:00.000+00:00",
  "from": "2020-10-15T06:38:00.000+00:00",
  "to": "2020-10-15T06:38:00.000+00:00"
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "_permissions": [
    "read(\"any\")"
  ],
  "teamId": "5e5ea5c16897e",
  "aggregationId": "5e5ea5c16897e",
  "plan": "tier-1",
  "usage": [],
  "amount": 50,
  "tax": 17,
  "taxAmount": 12.5,
  "vat": 17,
  "vatAmount": 12.5,
  "grossAmount": 12.5,
  "creditsUsed": 30,
  "currency": "USD",
  "clientSecret": "pi_daslfasdfkla_asdkfl",
  "status": "succeeded",
  "lastError": "Your card has insufficient balance.",
  "dueAt": "2020-10-15T06:38:00.000+00:00",
  "from": "2020-10-15T06:38:00.000+00:00",
  "to": "2020-10-15T06:38:00.000+00:00"
}
```

