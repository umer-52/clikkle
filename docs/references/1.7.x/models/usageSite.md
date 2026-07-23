# UsageSite

UsageSite

## Properties

| Name | Type | Description |
|------|------|-------------|
| range | string | The time range of the usage stats. |
| deploymentsTotal | integer | Total aggregated number of function deployments. |
| deploymentsStorageTotal | integer | Total aggregated sum of function deployments storage. |
| buildsTotal | integer | Total aggregated number of function builds. |
| buildsSuccessTotal | integer | Total aggregated number of successful function builds. |
| buildsFailedTotal | integer | Total aggregated number of failed function builds. |
| buildsStorageTotal | integer | total aggregated sum of function builds storage. |
| buildsTimeTotal | integer | Total aggregated sum of function builds compute time. |
| buildsTimeAverage | integer | Average builds compute time. |
| buildsMbSecondsTotal | integer | Total aggregated sum of function builds mbSeconds. |
| executionsTotal | integer | Total  aggregated number of function executions. |
| executionsTimeTotal | integer | Total aggregated sum of function  executions compute time. |
| executionsMbSecondsTotal | integer | Total aggregated sum of function executions mbSeconds. |
| deployments | array<metric> | Aggregated number of function deployments per period. Can be one of: [Metric model](/docs/references/1.7.x/models/metric) |
| deploymentsStorage | array<metric> | Aggregated number of  function deployments storage per period. Can be one of: [Metric model](/docs/references/1.7.x/models/metric) |
| builds | array<metric> | Aggregated number of function builds per period. Can be one of: [Metric model](/docs/references/1.7.x/models/metric) |
| buildsStorage | array<metric> | Aggregated sum of function builds storage per period. Can be one of: [Metric model](/docs/references/1.7.x/models/metric) |
| buildsTime | array<metric> | Aggregated sum of function builds compute time per period. Can be one of: [Metric model](/docs/references/1.7.x/models/metric) |
| buildsMbSeconds | array<metric> | Aggregated number of function builds mbSeconds per period. Can be one of: [Metric model](/docs/references/1.7.x/models/metric) |
| executions | array<metric> | Aggregated number of function executions per period. Can be one of: [Metric model](/docs/references/1.7.x/models/metric) |
| executionsTime | array<metric> | Aggregated number of function executions compute time per period. Can be one of: [Metric model](/docs/references/1.7.x/models/metric) |
| executionsMbSeconds | array<metric> | Aggregated number of function mbSeconds per period. Can be one of: [Metric model](/docs/references/1.7.x/models/metric) |
| buildsSuccess | array<metric> | Aggregated number of successful builds per period. Can be one of: [Metric model](/docs/references/1.7.x/models/metric) |
| buildsFailed | array<metric> | Aggregated number of failed builds per period. Can be one of: [Metric model](/docs/references/1.7.x/models/metric) |
| requestsTotal | integer | Total aggregated number of requests. |
| requests | array<metric> | Aggregated number of requests per period. Can be one of: [Metric model](/docs/references/1.7.x/models/metric) |
| inboundTotal | integer | Total aggregated inbound bandwidth. |
| inbound | array<metric> | Aggregated number of inbound bandwidth per period. Can be one of: [Metric model](/docs/references/1.7.x/models/metric) |
| outboundTotal | integer | Total aggregated outbound bandwidth. |
| outbound | array<metric> | Aggregated number of outbound bandwidth per period. Can be one of: [Metric model](/docs/references/1.7.x/models/metric) |

## Example

### REST

```json
{
  "range": "30d",
  "deploymentsTotal": 0,
  "deploymentsStorageTotal": 0,
  "buildsTotal": 0,
  "buildsSuccessTotal": 0,
  "buildsFailedTotal": 0,
  "buildsStorageTotal": 0,
  "buildsTimeTotal": 0,
  "buildsTimeAverage": 0,
  "buildsMbSecondsTotal": 0,
  "executionsTotal": 0,
  "executionsTimeTotal": 0,
  "executionsMbSecondsTotal": 0,
  "deployments": [],
  "deploymentsStorage": [],
  "builds": [],
  "buildsStorage": [],
  "buildsTime": [],
  "buildsMbSeconds": [],
  "executions": [],
  "executionsTime": [],
  "executionsMbSeconds": [],
  "buildsSuccess": [],
  "buildsFailed": [],
  "requestsTotal": 0,
  "requests": [],
  "inboundTotal": 0,
  "inbound": [],
  "outboundTotal": 0,
  "outbound": []
}
```

### GraphQL

```json
{
  "range": "30d",
  "deploymentsTotal": 0,
  "deploymentsStorageTotal": 0,
  "buildsTotal": 0,
  "buildsSuccessTotal": 0,
  "buildsFailedTotal": 0,
  "buildsStorageTotal": 0,
  "buildsTimeTotal": 0,
  "buildsTimeAverage": 0,
  "buildsMbSecondsTotal": 0,
  "executionsTotal": 0,
  "executionsTimeTotal": 0,
  "executionsMbSecondsTotal": 0,
  "deployments": [],
  "deploymentsStorage": [],
  "builds": [],
  "buildsStorage": [],
  "buildsTime": [],
  "buildsMbSeconds": [],
  "executions": [],
  "executionsTime": [],
  "executionsMbSeconds": [],
  "buildsSuccess": [],
  "buildsFailed": [],
  "requestsTotal": 0,
  "requests": [],
  "inboundTotal": 0,
  "inbound": [],
  "outboundTotal": 0,
  "outbound": []
}
```

