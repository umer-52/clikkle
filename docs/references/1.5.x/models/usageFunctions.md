# UsageFunctions

UsageFunctions

## Properties

| Name | Type | Description |
|------|------|-------------|
| range | string | Time range of the usage stats. |
| functionsTotal | integer | Total aggregated number of functions. |
| deploymentsTotal | integer | Total aggregated number of functions deployments. |
| deploymentsStorageTotal | integer | Total aggregated sum of functions deployment storage. |
| buildsTotal | integer | Total aggregated number of functions build. |
| buildsStorageTotal | integer | total aggregated sum of functions build storage. |
| buildsTimeTotal | integer | Total aggregated sum of functions build compute time. |
| buildsMbSecondsTotal | integer | Total aggregated sum of functions build mbSeconds. |
| executionsTotal | integer | Total  aggregated number of functions execution. |
| executionsTimeTotal | integer | Total aggregated sum of functions  execution compute time. |
| executionsMbSecondsTotal | integer | Total aggregated sum of functions execution mbSeconds. |
| functions | array<metric> | Aggregated number of functions per period. Can be one of: [Metric model](/docs/references/1.5.x/models/metric) |
| deployments | array<metric> | Aggregated number of functions deployment per period. Can be one of: [Metric model](/docs/references/1.5.x/models/metric) |
| deploymentsStorage | array<metric> | Aggregated number of  functions deployment storage per period. Can be one of: [Metric model](/docs/references/1.5.x/models/metric) |
| builds | array<metric> | Aggregated number of functions build per period. Can be one of: [Metric model](/docs/references/1.5.x/models/metric) |
| buildsStorage | array<metric> | Aggregated sum of functions build storage per period. Can be one of: [Metric model](/docs/references/1.5.x/models/metric) |
| buildsTime | array<metric> | Aggregated sum of  functions build compute time per period. Can be one of: [Metric model](/docs/references/1.5.x/models/metric) |
| buildsMbSeconds | array<metric> | Aggregated sum of functions build mbSeconds per period. Can be one of: [Metric model](/docs/references/1.5.x/models/metric) |
| executions | array<metric> | Aggregated number of  functions execution per period. Can be one of: [Metric model](/docs/references/1.5.x/models/metric) |
| executionsTime | array<metric> | Aggregated number of functions execution compute time per period. Can be one of: [Metric model](/docs/references/1.5.x/models/metric) |
| executionsMbSeconds | array<metric> | Aggregated number of functions mbSeconds per period. Can be one of: [Metric model](/docs/references/1.5.x/models/metric) |

## Example

### REST

```json
{}
```

### GraphQL

```json
{}
```

