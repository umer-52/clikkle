# UsageProject

UsageProject

## Properties

| Name | Type | Description |
|------|------|-------------|
| executionsTotal | integer | Total aggregated number of function executions. |
| documentsTotal | integer | Total aggregated  number of documents. |
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
| databasesReadsTotal | integer | Total number of databases reads. |
| databasesWritesTotal | integer | Total number of databases writes. |
| requests | array<metric> | Aggregated  number of requests per period. Can be one of: [Metric model](/docs/references/1.6.x/models/metric) |
| network | array<metric> | Aggregated number of consumed bandwidth per period. Can be one of: [Metric model](/docs/references/1.6.x/models/metric) |
| users | array<metric> | Aggregated number of users per period. Can be one of: [Metric model](/docs/references/1.6.x/models/metric) |
| executions | array<metric> | Aggregated number of executions per period. Can be one of: [Metric model](/docs/references/1.6.x/models/metric) |
| executionsBreakdown | array<metricBreakdown> | Aggregated breakdown in totals of executions by functions. Can be one of: [Metric Breakdown model](/docs/references/1.6.x/models/metricBreakdown) |
| bucketsBreakdown | array<metricBreakdown> | Aggregated breakdown in totals of usage by buckets. Can be one of: [Metric Breakdown model](/docs/references/1.6.x/models/metricBreakdown) |
| databasesStorageBreakdown | array<metricBreakdown> | An array of the aggregated breakdown of storage usage by databases. Can be one of: [Metric Breakdown model](/docs/references/1.6.x/models/metricBreakdown) |
| executionsMbSecondsBreakdown | array<metricBreakdown> | Aggregated breakdown in totals of execution mbSeconds by functions. Can be one of: [Metric Breakdown model](/docs/references/1.6.x/models/metricBreakdown) |
| buildsMbSecondsBreakdown | array<metricBreakdown> | Aggregated breakdown in totals of build mbSeconds by functions. Can be one of: [Metric Breakdown model](/docs/references/1.6.x/models/metricBreakdown) |
| functionsStorageBreakdown | array<metricBreakdown> | Aggregated breakdown in totals of functions storage size (in bytes). Can be one of: [Metric Breakdown model](/docs/references/1.6.x/models/metricBreakdown) |
| authPhoneTotal | integer | Total aggregated number of phone auth. |
| authPhoneEstimate | number | Estimated total aggregated cost of phone auth. |
| authPhoneCountryBreakdown | array<metricBreakdown> | Aggregated breakdown in totals of phone auth by country. Can be one of: [Metric Breakdown model](/docs/references/1.6.x/models/metricBreakdown) |
| databasesReads | array<metric> | An array of aggregated number of database reads. Can be one of: [Metric model](/docs/references/1.6.x/models/metric) |
| databasesWrites | array<metric> | An array of aggregated number of database writes. Can be one of: [Metric model](/docs/references/1.6.x/models/metric) |
| imageTransformations | array<metric> | An array of aggregated number of image transformations. Can be one of: [Metric model](/docs/references/1.6.x/models/metric) |
| imageTransformationsTotal | integer | Total aggregated number of image transformations. |

## Example

### REST

```json
{}
```

### GraphQL

```json
{}
```

