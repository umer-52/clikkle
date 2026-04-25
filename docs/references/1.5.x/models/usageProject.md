# UsageProject

UsageProject

## Properties

| Name | Type | Description |
|------|------|-------------|
| executionsTotal | integer | Total aggregated number of function executions. |
| documentsTotal | integer | Total aggregated  number of documents. |
| databasesTotal | integer | Total aggregated number of databases. |
| usersTotal | integer | Total aggregated number of users. |
| filesStorageTotal | integer | Total aggregated sum of files storage size (in bytes). |
| deploymentsStorageTotal | integer | Total aggregated sum of deployments storage size (in bytes). |
| bucketsTotal | integer | Total aggregated number of buckets. |
| executionsMbSecondsTotal | integer | Total aggregated number of function executions mbSeconds. |
| buildsMbSecondsTotal | integer | Total aggregated number of function builds mbSeconds. |
| requests | array<metric> | Aggregated  number of requests per period. Can be one of: [Metric model](/docs/references/1.5.x/models/metric) |
| network | array<metric> | Aggregated number of consumed bandwidth per period. Can be one of: [Metric model](/docs/references/1.5.x/models/metric) |
| users | array<metric> | Aggregated number of users per period. Can be one of: [Metric model](/docs/references/1.5.x/models/metric) |
| executions | array<metric> | Aggregated number of executions per period. Can be one of: [Metric model](/docs/references/1.5.x/models/metric) |
| executionsBreakdown | array<metricBreakdown> | Aggregated breakdown in totals of executions by functions. Can be one of: [Metric Breakdown model](/docs/references/1.5.x/models/metricBreakdown) |
| bucketsBreakdown | array<metricBreakdown> | Aggregated breakdown in totals of usage by buckets. Can be one of: [Metric Breakdown model](/docs/references/1.5.x/models/metricBreakdown) |
| executionsMbSecondsBreakdown | array<metricBreakdown> | Aggregated breakdown in totals of execution mbSeconds by functions. Can be one of: [Metric Breakdown model](/docs/references/1.5.x/models/metricBreakdown) |
| buildsMbSecondsBreakdown | array<metricBreakdown> | Aggregated breakdown in totals of build mbSeconds by functions. Can be one of: [Metric Breakdown model](/docs/references/1.5.x/models/metricBreakdown) |
| deploymentsStorageBreakdown | array<metricBreakdown> | Aggregated breakdown in totals of deployments storage size (in bytes). Can be one of: [Metric Breakdown model](/docs/references/1.5.x/models/metricBreakdown) |

## Example

### REST

```json
{}
```

### GraphQL

```json
{}
```

