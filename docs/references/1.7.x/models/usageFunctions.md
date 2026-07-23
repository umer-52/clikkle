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
| functions | array<metric> | Aggregated number of functions per period. Can be one of: [Metric model](/docs/references/1.7.x/models/metric) |
| deployments | array<metric> | Aggregated number of functions deployment per period. Can be one of: [Metric model](/docs/references/1.7.x/models/metric) |
| deploymentsStorage | array<metric> | Aggregated number of  functions deployment storage per period. Can be one of: [Metric model](/docs/references/1.7.x/models/metric) |
| buildsSuccessTotal | integer | Total aggregated number of successful function builds. |
| buildsFailedTotal | integer | Total aggregated number of failed function builds. |
| builds | array<metric> | Aggregated number of functions build per period. Can be one of: [Metric model](/docs/references/1.7.x/models/metric) |
| buildsStorage | array<metric> | Aggregated sum of functions build storage per period. Can be one of: [Metric model](/docs/references/1.7.x/models/metric) |
| buildsTime | array<metric> | Aggregated sum of  functions build compute time per period. Can be one of: [Metric model](/docs/references/1.7.x/models/metric) |
| buildsMbSeconds | array<metric> | Aggregated sum of functions build mbSeconds per period. Can be one of: [Metric model](/docs/references/1.7.x/models/metric) |
| executions | array<metric> | Aggregated number of  functions execution per period. Can be one of: [Metric model](/docs/references/1.7.x/models/metric) |
| executionsTime | array<metric> | Aggregated number of functions execution compute time per period. Can be one of: [Metric model](/docs/references/1.7.x/models/metric) |
| executionsMbSeconds | array<metric> | Aggregated number of functions mbSeconds per period. Can be one of: [Metric model](/docs/references/1.7.x/models/metric) |
| buildsSuccess | array<metric> | Aggregated number of successful function builds per period. Can be one of: [Metric model](/docs/references/1.7.x/models/metric) |
| buildsFailed | array<metric> | Aggregated number of failed function builds per period. Can be one of: [Metric model](/docs/references/1.7.x/models/metric) |

## Example

### REST

```json
{
  "range": "30d",
  "functionsTotal": 0,
  "deploymentsTotal": 0,
  "deploymentsStorageTotal": 0,
  "buildsTotal": 0,
  "buildsStorageTotal": 0,
  "buildsTimeTotal": 0,
  "buildsMbSecondsTotal": 0,
  "executionsTotal": 0,
  "executionsTimeTotal": 0,
  "executionsMbSecondsTotal": 0,
  "functions": 0,
  "deployments": [],
  "deploymentsStorage": [],
  "buildsSuccessTotal": 0,
  "buildsFailedTotal": 0,
  "builds": [],
  "buildsStorage": [],
  "buildsTime": [],
  "buildsMbSeconds": [],
  "executions": [],
  "executionsTime": [],
  "executionsMbSeconds": [],
  "buildsSuccess": [],
  "buildsFailed": []
}
```

### GraphQL

```json
{
  "range": "30d",
  "functionsTotal": 0,
  "deploymentsTotal": 0,
  "deploymentsStorageTotal": 0,
  "buildsTotal": 0,
  "buildsStorageTotal": 0,
  "buildsTimeTotal": 0,
  "buildsMbSecondsTotal": 0,
  "executionsTotal": 0,
  "executionsTimeTotal": 0,
  "executionsMbSecondsTotal": 0,
  "functions": 0,
  "deployments": [],
  "deploymentsStorage": [],
  "buildsSuccessTotal": 0,
  "buildsFailedTotal": 0,
  "builds": [],
  "buildsStorage": [],
  "buildsTime": [],
  "buildsMbSeconds": [],
  "executions": [],
  "executionsTime": [],
  "executionsMbSeconds": [],
  "buildsSuccess": [],
  "buildsFailed": []
}
```

