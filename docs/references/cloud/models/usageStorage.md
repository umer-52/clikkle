# StorageUsage

StorageUsage

## Properties

| Name | Type | Description |
|------|------|-------------|
| range | string | Time range of the usage stats. |
| bucketsTotal | integer | Total aggregated number of buckets |
| filesTotal | integer | Total aggregated number of files. |
| filesStorageTotal | integer | Total aggregated number of files storage (in bytes). |
| buckets | array<metric> | Aggregated number of buckets per period. Can be one of: [Metric model](/docs/references/cloud/models/metric) |
| files | array<metric> | Aggregated number of files per period. Can be one of: [Metric model](/docs/references/cloud/models/metric) |
| storage | array<metric> | Aggregated number of files storage (in bytes) per period . Can be one of: [Metric model](/docs/references/cloud/models/metric) |

## Example

### REST

```json
{
  "range": "30d",
  "bucketsTotal": 0,
  "filesTotal": 0,
  "filesStorageTotal": 0,
  "buckets": [],
  "files": [],
  "storage": []
}
```

### GraphQL

```json
{
  "range": "30d",
  "bucketsTotal": 0,
  "filesTotal": 0,
  "filesStorageTotal": 0,
  "buckets": [],
  "files": [],
  "storage": []
}
```

