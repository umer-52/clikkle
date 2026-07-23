# billingPlan

billingPlan

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Plan ID. |
| name | string | Plan name |
| desc | string | Plan description |
| order | integer | Plan order |
| price | number | Price |
| trial | integer | Trial days |
| bandwidth | integer | Bandwidth |
| storage | integer | Storage |
| imageTransformations | integer | Image Transformations |
| screenshotsGenerated | integer | Screenshots generated |
| members | integer | Members |
| webhooks | integer | Webhooks |
| projects | integer | Projects |
| platforms | integer | Platforms |
| users | integer | Users |
| teams | integer | Teams |
| databases | integer | Databases |
| databasesReads | integer | Database reads per month |
| databasesWrites | integer | Database writes per month |
| databasesBatchSize | integer | Database batch size limit |
| buckets | integer | Buckets |
| fileSize | integer | File size |
| functions | integer | Functions |
| sites | integer | Sites |
| executions | integer | Function executions |
| executionsRetentionCount | integer | Rolling max executions retained per function/site |
| GBHours | integer | GB hours for functions |
| realtime | integer | Realtime connections |
| messages | integer | Messages per month |
| topics | integer | Topics for messaging |
| authPhone | integer | SMS authentications per month |
| domains | integer | Custom domains |
| logs | integer | Log days |
| alertLimit | integer | Alert threshold percentage |
| usage | usageBillingPlan | Additional resources Can be one of: [usageBillingPlan model](/docs/references/1.8.x/models/usageBillingPlan) |
| addons | billingPlanAddon | Addons Can be one of: [BillingPlanAddon model](/docs/references/1.8.x/models/billingPlanAddon) |
| budgetCapEnabled | boolean | Budget cap enabled or disabled. |
| customSmtp | boolean | Custom SMTP |
| emailBranding | boolean | Appwrite branding in email |
| requiresPaymentMethod | boolean | Does plan require payment method |
| requiresBillingAddress | boolean | Does plan require billing address |
| isAvailable | boolean | Is the billing plan available |
| selfService | boolean | Can user change the plan themselves |
| premiumSupport | boolean | Does plan enable premium support |
| budgeting | boolean | Does plan support budget cap |
| supportsMockNumbers | boolean | Does plan support mock numbers |
| supportsOrganizationRoles | boolean | Does plan support organization roles |
| supportsCredits | boolean | Does plan support credit |
| backupsEnabled | boolean | Does plan support backup policies. |
| usagePerProject | boolean | Whether usage addons are calculated per project. |
| backupPolicies | integer | How many policies does plan support |
| deploymentSize | integer | Maximum function and site deployment size in MB |
| buildSize | integer | Maximum function and site deployment size in MB |
| databasesAllowEncrypt | boolean | Does the plan support encrypted string attributes or not. |
| limits | billingPlanLimits | Plan specific limits Can be one of: [BillingPlanLimits model](/docs/references/1.8.x/models/billingPlanLimits) |
| group | string | Group of this billing plan for variants |
| program | program | Details of the program this plan is a part of. Can be one of: [Program model](/docs/references/1.8.x/models/program) |

## Example

### REST

```json
{
  "$id": "tier-0",
  "name": "Hobby",
  "desc": "Hobby plan",
  "order": 0,
  "price": 25,
  "trial": 14,
  "bandwidth": 25,
  "storage": 25,
  "imageTransformations": 100,
  "screenshotsGenerated": 50,
  "members": 25,
  "webhooks": 25,
  "projects": 2,
  "platforms": 3,
  "users": 25,
  "teams": 25,
  "databases": 25,
  "databasesReads": 500000,
  "databasesWrites": 250000,
  "databasesBatchSize": 100,
  "buckets": 25,
  "fileSize": 25,
  "functions": 25,
  "sites": 1,
  "executions": 25,
  "executionsRetentionCount": 10000,
  "GBHours": 100,
  "realtime": 25,
  "messages": 1000,
  "topics": 1,
  "authPhone": 10,
  "domains": 5,
  "logs": 25,
  "alertLimit": 80,
  "usage": null,
  "addons": null,
  "budgetCapEnabled": true,
  "customSmtp": true,
  "emailBranding": true,
  "requiresPaymentMethod": true,
  "requiresBillingAddress": true,
  "isAvailable": true,
  "selfService": true,
  "premiumSupport": true,
  "budgeting": true,
  "supportsMockNumbers": true,
  "supportsOrganizationRoles": true,
  "supportsCredits": true,
  "backupsEnabled": true,
  "usagePerProject": true,
  "backupPolicies": true,
  "deploymentSize": 30,
  "buildSize": 2000,
  "databasesAllowEncrypt": false,
  "limits": null,
  "group": "pro",
  "program": null
}
```

### GraphQL

```json
{
  "_id": "tier-0",
  "name": "Hobby",
  "desc": "Hobby plan",
  "order": 0,
  "price": 25,
  "trial": 14,
  "bandwidth": 25,
  "storage": 25,
  "imageTransformations": 100,
  "screenshotsGenerated": 50,
  "members": 25,
  "webhooks": 25,
  "projects": 2,
  "platforms": 3,
  "users": 25,
  "teams": 25,
  "databases": 25,
  "databasesReads": 500000,
  "databasesWrites": 250000,
  "databasesBatchSize": 100,
  "buckets": 25,
  "fileSize": 25,
  "functions": 25,
  "sites": 1,
  "executions": 25,
  "executionsRetentionCount": 10000,
  "GBHours": 100,
  "realtime": 25,
  "messages": 1000,
  "topics": 1,
  "authPhone": 10,
  "domains": 5,
  "logs": 25,
  "alertLimit": 80,
  "usage": null,
  "addons": null,
  "budgetCapEnabled": true,
  "customSmtp": true,
  "emailBranding": true,
  "requiresPaymentMethod": true,
  "requiresBillingAddress": true,
  "isAvailable": true,
  "selfService": true,
  "premiumSupport": true,
  "budgeting": true,
  "supportsMockNumbers": true,
  "supportsOrganizationRoles": true,
  "supportsCredits": true,
  "backupsEnabled": true,
  "usagePerProject": true,
  "backupPolicies": true,
  "deploymentSize": 30,
  "buildSize": 2000,
  "databasesAllowEncrypt": false,
  "limits": null,
  "group": "pro",
  "program": null
}
```

