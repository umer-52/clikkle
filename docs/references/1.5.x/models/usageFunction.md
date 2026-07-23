# UsageFunction

UsageFunction

## Properties

| Name | Type | Description |
|------|------|-------------|
| range | string | The time range of the usage stats. |
| deploymentsTotal | integer | Total aggregated number of function deployments. |
| deploymentsStorageTotal | integer | Total aggregated sum of function deployments storage. |
| buildsTotal | integer | Total aggregated number of function builds. |
| buildsStorageTotal | integer | total aggregated sum of function builds storage. |
| buildsTimeTotal | integer | Total aggregated sum of function builds compute time. |
| buildsMbSecondsTotal | integer | Total aggregated sum of function builds mbSeconds. |
| executionsTotal | integer | Total  aggregated number of function executions. |
| executionsTimeTotal | integer | Total aggregated sum of function  executions compute time. |
| executionsMbSecondsTotal | integer | Total aggregated sum of function executions mbSeconds. |
| deployments | array<metric> | Aggregated number of function deployments per period. Can be one of: [Metric model](/docs/references/1.5.x/models/metric) |
| deploymentsStorage | array<metric> | Aggregated number of  function deployments storage per period. Can be one of: [Metric model](/docs/references/1.5.x/models/metric) |
| builds | array<metric> | Aggregated number of function builds per period. Can be one of: [Metric model](/docs/references/1.5.x/models/metric) |
| buildsStorage | array<metric> | Aggregated sum of function builds storage per period. Can be one of: [Metric model](/docs/references/1.5.x/models/metric) |
| buildsTime | array<metric> | Aggregated sum of function builds compute time per period. Can be one of: [Metric model](/docs/references/1.5.x/models/metric) |
| buildsMbSeconds | array<metric> | Aggregated number of function builds mbSeconds per period. Can be one of: [Metric model](/docs/references/1.5.x/models/metric) |
| executions | array<metric> | Aggregated number of function executions per period. Can be one of: [Metric model](/docs/references/1.5.x/models/metric) |
| executionsTime | array<metric> | Aggregated number of function executions compute time per period. Can be one of: [Metric model](/docs/references/1.5.x/models/metric) |
| executionsMbSeconds | array<metric> | Aggregated number of function mbSeconds per period. Can be one of: [Metric model](/docs/references/1.5.x/models/metric) |

## Example

### REST

```json
{}
```

### GraphQL

```json
{}
```

