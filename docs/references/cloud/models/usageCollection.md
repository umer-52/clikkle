# UsageCollection

UsageCollection

## Properties

| Name | Type | Description |
|------|------|-------------|
| range | string | Time range of the usage stats. |
| documentsTotal | integer | Total aggregated number of of documents. |
| documents | array<metric> | Aggregated  number of documents per period. Can be one of: [Metric model](/docs/references/cloud/models/metric) |

## Example

### REST

```json
{
  "range": "30d",
  "documentsTotal": 0,
  "documents": []
}
```

### GraphQL

```json
{
  "range": "30d",
  "documentsTotal": 0,
  "documents": []
}
```

