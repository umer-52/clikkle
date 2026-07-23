# UsageOrganizationProject

UsageOrganizationProject

## Properties

| Name | Type | Description |
|------|------|-------------|
| projectId | string | projectId |
| bandwidth | array<metric> | Aggregated stats for number of requests. Can be one of: [Metric model](/docs/references/cloud/models/metric) |
| users | array<metric> | Aggregated stats for consumed bandwidth. Can be one of: [Metric model](/docs/references/cloud/models/metric) |
| executions | integer | Aggregated stats for function executions. |
| databasesReads | array<metric> | Aggregated stats for database reads. Can be one of: [Metric model](/docs/references/cloud/models/metric) |
| databasesWrites | array<metric> | Aggregated stats for database writes. Can be one of: [Metric model](/docs/references/cloud/models/metric) |
| executionsMBSeconds | integer | Aggregated stats for function executions in mb seconds. |
| buildsMBSeconds | integer | Aggregated stats for function builds in mb seconds. |
| storage | integer | Aggregated stats for number of documents. |
| authPhoneTotal | integer | Aggregated stats for phone authentication. |
| authPhoneEstimate | number | Aggregated stats for phone authentication estimated cost. |
| databasesReadsTotal | integer | Aggregated stats for total databases reads. |
| databasesWritesTotal | integer | Aggregated stats for total databases writes. |
| imageTransformations | array<metric> | Aggregated stats for file transformations. Can be one of: [Metric model](/docs/references/cloud/models/metric) |
| imageTransformationsTotal | integer | Aggregated stats for total file transformations. |
| screenshotsGenerated | array<metric> | Aggregated stats for file transformations. Can be one of: [Metric model](/docs/references/cloud/models/metric) |
| screenshotsGeneratedTotal | integer | Aggregated stats for total file transformations. |
| imagineCredits | integer | Aggregated stats for imagine credits. |

## Example

### REST

```json
{
  "projectId": "5e5ea5c16897e",
  "bandwidth": [],
  "users": [],
  "executions": [],
  "databasesReads": [],
  "databasesWrites": [],
  "executionsMBSeconds": 0,
  "buildsMBSeconds": 0,
  "storage": [],
  "authPhoneTotal": [],
  "authPhoneEstimate": [],
  "databasesReadsTotal": 0,
  "databasesWritesTotal": 0,
  "imageTransformations": [],
  "imageTransformationsTotal": 0,
  "screenshotsGenerated": [],
  "screenshotsGeneratedTotal": 0,
  "imagineCredits": 0
}
```

### GraphQL

```json
{
  "projectId": "5e5ea5c16897e",
  "bandwidth": [],
  "users": [],
  "executions": [],
  "databasesReads": [],
  "databasesWrites": [],
  "executionsMBSeconds": 0,
  "buildsMBSeconds": 0,
  "storage": [],
  "authPhoneTotal": [],
  "authPhoneEstimate": [],
  "databasesReadsTotal": 0,
  "databasesWritesTotal": 0,
  "imageTransformations": [],
  "imageTransformationsTotal": 0,
  "screenshotsGenerated": [],
  "screenshotsGeneratedTotal": 0,
  "imagineCredits": 0
}
```

