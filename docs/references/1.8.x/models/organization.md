# Organization

Organization

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Team ID. |
| $createdAt | string | Team creation date in ISO 8601 format. |
| $updatedAt | string | Team update date in ISO 8601 format. |
| name | string | Team name. |
| total | integer | Total number of team members. |
| prefs | preferences | Team preferences as a key-value object Can be one of: [Preferences model](/docs/references/1.8.x/models/preferences) |
| billingBudget | integer | Project budget limit |
| budgetAlerts | array | Project budget limit |
| billingPlan | string | Organization's billing plan ID. |
| billingPlanId | string | Organization's billing plan ID. |
| billingPlanDetails | billingPlan | Organization's billing plan. Can be one of: [billingPlan model](/docs/references/1.8.x/models/billingPlan) |
| billingEmail | string | Billing email set for the organization. |
| billingStartDate | string | Billing cycle start date. |
| billingCurrentInvoiceDate | string | Current invoice cycle start date. |
| billingNextInvoiceDate | string | Next invoice cycle start date. |
| billingTrialStartDate | string | Start date of trial. |
| billingTrialDays | integer | Number of trial days. |
| billingAggregationId | string | Current active aggregation id. |
| billingInvoiceId | string | Current active aggregation id. |
| paymentMethodId | string | Default payment method. |
| billingAddressId | string | Default payment method. |
| backupPaymentMethodId | string | Backup payment method. |
| status | string | Team status. |
| remarks | string | Remarks on team status. |
| agreementBAA | string | Organization agreements |
| programManagerName | string | Program manager's name. |
| programManagerCalendar | string | Program manager's calendar link. |
| programDiscordChannelName | string | Program's discord channel name. |
| programDiscordChannelUrl | string | Program's discord channel URL. |
| billingLimits | billingLimits | Billing limits reached Can be one of: [BillingLimits model](/docs/references/1.8.x/models/billingLimits) |
| billingPlanDowngrade | string | Billing plan selected for downgrade. |
| billingTaxId | string | Tax Id |
| markedForDeletion | boolean | Marked for deletion |
| platform | string | Product with which the organization is associated (appwrite or imagine) |
| projects | array | Selected projects |

## Example

### REST

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "VIP",
  "total": 7,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  },
  "billingBudget": 50,
  "budgetAlerts": [
    50,
    75
  ],
  "billingPlan": "tier-1",
  "billingPlanId": "tier-1",
  "billingPlanDetails": null,
  "billingEmail": "billing@org.example",
  "billingStartDate": "2020-10-15T06:38:00.000+00:00",
  "billingCurrentInvoiceDate": "2020-10-15T06:38:00.000+00:00",
  "billingNextInvoiceDate": "2020-10-15T06:38:00.000+00:00",
  "billingTrialStartDate": "2020-10-15T06:38:00.000+00:00",
  "billingTrialDays": 14,
  "billingAggregationId": "adbc3de4rddfsd",
  "billingInvoiceId": "adbc3de4rddfsd",
  "paymentMethodId": "adbc3de4rddfsd",
  "billingAddressId": "adbc3de4rddfsd",
  "backupPaymentMethodId": "adbc3de4rddfsd",
  "status": "active",
  "remarks": "Pending initial payment",
  "agreementBAA": "",
  "programManagerName": "",
  "programManagerCalendar": "",
  "programDiscordChannelName": "",
  "programDiscordChannelUrl": "",
  "billingLimits": "",
  "billingPlanDowngrade": "tier-1",
  "billingTaxId": "",
  "markedForDeletion": "",
  "platform": "imagine",
  "projects": ""
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "VIP",
  "total": 7,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  },
  "billingBudget": 50,
  "budgetAlerts": [
    50,
    75
  ],
  "billingPlan": "tier-1",
  "billingPlanId": "tier-1",
  "billingPlanDetails": null,
  "billingEmail": "billing@org.example",
  "billingStartDate": "2020-10-15T06:38:00.000+00:00",
  "billingCurrentInvoiceDate": "2020-10-15T06:38:00.000+00:00",
  "billingNextInvoiceDate": "2020-10-15T06:38:00.000+00:00",
  "billingTrialStartDate": "2020-10-15T06:38:00.000+00:00",
  "billingTrialDays": 14,
  "billingAggregationId": "adbc3de4rddfsd",
  "billingInvoiceId": "adbc3de4rddfsd",
  "paymentMethodId": "adbc3de4rddfsd",
  "billingAddressId": "adbc3de4rddfsd",
  "backupPaymentMethodId": "adbc3de4rddfsd",
  "status": "active",
  "remarks": "Pending initial payment",
  "agreementBAA": "",
  "programManagerName": "",
  "programManagerCalendar": "",
  "programDiscordChannelName": "",
  "programDiscordChannelUrl": "",
  "billingLimits": "",
  "billingPlanDowngrade": "tier-1",
  "billingTaxId": "",
  "markedForDeletion": "",
  "platform": "imagine",
  "projects": ""
}
```

