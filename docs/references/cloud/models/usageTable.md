# UsageTable

UsageTable

## Properties

| Name | Type | Description |
|------|------|-------------|
| range | string | Time range of the usage stats. |
| rowsTotal | integer | Total aggregated number of of rows. |
| rows | array<metric> | Aggregated  number of rows per period. Can be one of: [Metric model](/docs/references/cloud/models/metric) |

## Example

### REST

```json
{
  "range": "30d",
  "rowsTotal": 0,
  "rows": []
}
```

### GraphQL

```json
{
  "range": "30d",
  "rowsTotal": 0,
  "rows": []
}
```

