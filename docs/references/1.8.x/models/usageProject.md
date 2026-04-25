# UsageProject

UsageProject

## Properties

| Name | Type | Description |
|------|------|-------------|
| executionsTotal | integer | Total aggregated number of function executions. |
| documentsTotal | integer | Total aggregated  number of documents. |
| rowsTotal | integer | Total aggregated  number of rows. |
| databasesTotal | integer | Total aggregated number of databases. |
| databasesStorageTotal | integer | Total aggregated sum of databases storage size (in bytes). |
| usersTotal | integer | Total aggregated number of users. |
| filesStorageTotal | integer | Total aggregated sum of files storage size (in bytes). |
| functionsStorageTotal | integer | Total aggregated sum of functions storage size (in bytes). |
| buildsStorageTotal | integer | Total aggregated sum of builds storage size (in bytes). |
| deploymentsStorageTotal | integer | Total aggregated sum of deployments storage size (in bytes). |
| bucketsTotal | integer | Total aggregated number of buckets. |
| executionsMbSecondsTotal | integer | Total aggregated number of function executions mbSeconds. |
| buildsMbSecondsTotal | integer | Total aggregated number of function builds mbSeconds. |
| databasesReadsTotal | integer | Aggregated stats for total databases reads. |
| databasesWritesTotal | integer | Aggregated stats for total databases writes. |
| requests | array<metric> | Aggregated  number of requests per period. Can be one of: [Metric model](/docs/references/1.8.x/models/metric) |
| network | array<metric> | Aggregated number of consumed bandwidth per period. Can be one of: [Metric model](/docs/references/1.8.x/models/metric) |
| users | array<metric> | Aggregated number of users per period. Can be one of: [Metric model](/docs/references/1.8.x/models/metric) |
| executions | array<metric> | Aggregated number of executions per period. Can be one of: [Metric model](/docs/references/1.8.x/models/metric) |
| executionsBreakdown | array<metricBreakdown> | Aggregated breakdown in totals of executions by functions. Can be one of: [Metric Breakdown model](/docs/references/1.8.x/models/metricBreakdown) |
| bucketsBreakdown | array<metricBreakdown> | Aggregated breakdown in totals of usage by buckets. Can be one of: [Metric Breakdown model](/docs/references/1.8.x/models/metricBreakdown) |
| databasesStorageBreakdown | array<metricBreakdown> | An array of the aggregated breakdown of storage usage by databases. Can be one of: [Metric Breakdown model](/docs/references/1.8.x/models/metricBreakdown) |
| executionsMbSecondsBreakdown | array<metricBreakdown> | Aggregated breakdown in totals of execution mbSeconds by functions. Can be one of: [Metric Breakdown model](/docs/references/1.8.x/models/metricBreakdown) |
| buildsMbSecondsBreakdown | array<metricBreakdown> | Aggregated breakdown in totals of build mbSeconds by functions. Can be one of: [Metric Breakdown model](/docs/references/1.8.x/models/metricBreakdown) |
| functionsStorageBreakdown | array<metricBreakdown> | Aggregated breakdown in totals of functions storage size (in bytes). Can be one of: [Metric Breakdown model](/docs/references/1.8.x/models/metricBreakdown) |
| authPhoneTotal | integer | Aggregated stats for total auth phone. |
| authPhoneEstimate | integer | Aggregated stats for total auth phone estimation. |
| authPhoneCountryBreakdown | array<metricBreakdown> | Aggregated breakdown in totals of phone auth by country. Can be one of: [Metric Breakdown model](/docs/references/1.8.x/models/metricBreakdown) |
| databasesReads | array<metric> | Aggregated stats for database reads. Can be one of: [Metric model](/docs/references/1.8.x/models/metric) |
| databasesWrites | array<metric> | Aggregated stats for database writes. Can be one of: [Metric model](/docs/references/1.8.x/models/metric) |
| imageTransformations | array<metric> | An array of aggregated number of image transformations. Can be one of: [Metric model](/docs/references/1.8.x/models/metric) |
| imageTransformationsTotal | integer | Total aggregated number of image transformations. |
| networkTotal | integer | Aggregated stats for total network bandwidth. |
| backupsStorageTotal | integer | Aggregated stats for total backups storage. |
| screenshotsGenerated | array<metric> | An array of aggregated number of screenshots generated. Can be one of: [Metric model](/docs/references/1.8.x/models/metric) |
| screenshotsGeneratedTotal | integer | Total aggregated number of screenshots generated. |
| imagineCredits | array<metric> | An array of aggregated number of Imagine credits in the given period. Can be one of: [Metric model](/docs/references/1.8.x/models/metric) |
| imagineCreditsTotal | integer | Total aggregated number of Imagine credits. |

## Example

### REST

```json
{
  "executionsTotal": 0,
  "documentsTotal": 0,
  "rowsTotal": 0,
  "databasesTotal": 0,
  "databasesStorageTotal": 0,
  "usersTotal": 0,
  "filesStorageTotal": 0,
  "functionsStorageTotal": 0,
  "buildsStorageTotal": 0,
  "deploymentsStorageTotal": 0,
  "bucketsTotal": 0,
  "executionsMbSecondsTotal": 0,
  "buildsMbSecondsTotal": 0,
  "databasesReadsTotal": 0,
  "databasesWritesTotal": 0,
  "requests": [],
  "network": [],
  "users": [],
  "executions": [],
  "executionsBreakdown": [],
  "bucketsBreakdown": [],
  "databasesStorageBreakdown": [],
  "executionsMbSecondsBreakdown": [],
  "buildsMbSecondsBreakdown": [],
  "functionsStorageBreakdown": [],
  "authPhoneTotal": 0,
  "authPhoneEstimate": 0,
  "authPhoneCountryBreakdown": [],
  "databasesReads": [],
  "databasesWrites": [],
  "imageTransformations": [],
  "imageTransformationsTotal": 0,
  "networkTotal": 0,
  "backupsStorageTotal": 0,
  "screenshotsGenerated": [],
  "screenshotsGeneratedTotal": 0,
  "imagineCredits": [],
  "imagineCreditsTotal": 0
}
```

### GraphQL

```json
{
  "executionsTotal": 0,
  "documentsTotal": 0,
  "rowsTotal": 0,
  "databasesTotal": 0,
  "databasesStorageTotal": 0,
  "usersTotal": 0,
  "filesStorageTotal": 0,
  "functionsStorageTotal": 0,
  "buildsStorageTotal": 0,
  "deploymentsStorageTotal": 0,
  "bucketsTotal": 0,
  "executionsMbSecondsTotal": 0,
  "buildsMbSecondsTotal": 0,
  "databasesReadsTotal": 0,
  "databasesWritesTotal": 0,
  "requests": [],
  "network": [],
  "users": [],
  "executions": [],
  "executionsBreakdown": [],
  "bucketsBreakdown": [],
  "databasesStorageBreakdown": [],
  "executionsMbSecondsBreakdown": [],
  "buildsMbSecondsBreakdown": [],
  "functionsStorageBreakdown": [],
  "authPhoneTotal": 0,
  "authPhoneEstimate": 0,
  "authPhoneCountryBreakdown": [],
  "databasesReads": [],
  "databasesWrites": [],
  "imageTransformations": [],
  "imageTransformationsTotal": 0,
  "networkTotal": 0,
  "backupsStorageTotal": 0,
  "screenshotsGenerated": [],
  "screenshotsGeneratedTotal": 0,
  "imagineCredits": [],
  "imagineCreditsTotal": 0
}
```

