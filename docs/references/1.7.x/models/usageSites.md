# UsageSites

UsageSites

## Properties

| Name | Type | Description |
|------|------|-------------|
| range | string | Time range of the usage stats. |
| deploymentsTotal | integer | Total aggregated number of functions deployments. |
| deploymentsStorageTotal | integer | Total aggregated sum of functions deployment storage. |
| buildsTotal | integer | Total aggregated number of functions build. |
| buildsStorageTotal | integer | total aggregated sum of functions build storage. |
| buildsTimeTotal | integer | Total aggregated sum of functions build compute time. |
| buildsMbSecondsTotal | integer | Total aggregated sum of functions build mbSeconds. |
| executionsTotal | integer | Total  aggregated number of functions execution. |
| executionsTimeTotal | integer | Total aggregated sum of functions  execution compute time. |
| executionsMbSecondsTotal | integer | Total aggregated sum of functions execution mbSeconds. |
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
| sitesTotal | integer | Total aggregated number of sites. |
| sites | array<metric> | Aggregated number of sites per period. Can be one of: [Metric model](/docs/references/1.7.x/models/metric) |
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
  "buildsStorageTotal": 0,
  "buildsTimeTotal": 0,
  "buildsMbSecondsTotal": 0,
  "executionsTotal": 0,
  "executionsTimeTotal": 0,
  "executionsMbSecondsTotal": 0,
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
  "buildsFailed": [],
  "sitesTotal": 0,
  "sites": [],
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
  "buildsStorageTotal": 0,
  "buildsTimeTotal": 0,
  "buildsMbSecondsTotal": 0,
  "executionsTotal": 0,
  "executionsTimeTotal": 0,
  "executionsMbSecondsTotal": 0,
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
  "buildsFailed": [],
  "sitesTotal": 0,
  "sites": [],
  "requestsTotal": 0,
  "requests": [],
  "inboundTotal": 0,
  "inbound": [],
  "outboundTotal": 0,
  "outbound": []
}
```

