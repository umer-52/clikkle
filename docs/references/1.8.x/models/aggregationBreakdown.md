# AggregationBreakdown

AggregationBreakdown

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Aggregation ID. |
| name | string | Project name |
| region | string | Project region |
| amount | integer | Aggregated amount |
| resources | array<usageResources> | Can be one of: [UsageResource model](/docs/references/1.8.x/models/usageResources) |

## Example

### REST

```json
{
  "$id": "5e5ea5c16897e",
  "name": "",
  "region": "fra",
  "amount": 2,
  "resources": ""
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "name": "",
  "region": "fra",
  "amount": 2,
  "resources": ""
}
```

