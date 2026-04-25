# UsageBuckets

UsageBuckets

## Properties

| Name | Type | Description |
|------|------|-------------|
| range | string | Time range of the usage stats. |
| filesTotal | integer | Total aggregated number of bucket files. |
| filesStorageTotal | integer | Total aggregated number of bucket files storage (in bytes). |
| files | array<metric> | Aggregated  number of bucket files per period. Can be one of: [Metric model](/docs/references/cloud/models/metric) |
| storage | array<metric> | Aggregated  number of bucket storage files (in bytes) per period. Can be one of: [Metric model](/docs/references/cloud/models/metric) |
| imageTransformations | array<metric> | Aggregated number of files transformations per period. Can be one of: [Metric model](/docs/references/cloud/models/metric) |
| imageTransformationsTotal | integer | Total aggregated number of files transformations. |

## Example

### REST

```json
{
  "range": "30d",
  "filesTotal": 0,
  "filesStorageTotal": 0,
  "files": [],
  "storage": [],
  "imageTransformations": [],
  "imageTransformationsTotal": 0
}
```

### GraphQL

```json
{
  "range": "30d",
  "filesTotal": 0,
  "filesStorageTotal": 0,
  "files": [],
  "storage": [],
  "imageTransformations": [],
  "imageTransformationsTotal": 0
}
```

