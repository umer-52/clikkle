# UsageUsers

UsageUsers

## Properties

| Name | Type | Description |
|------|------|-------------|
| range | string | Time range of the usage stats. |
| usersTotal | integer | Total aggregated number of statistics of users. |
| sessionsTotal | integer | Total aggregated number of active sessions. |
| users | array<metric> | Aggregated number of users per period. Can be one of: [Metric model](/docs/references/1.8.x/models/metric) |
| sessions | array<metric> | Aggregated number of active sessions  per period. Can be one of: [Metric model](/docs/references/1.8.x/models/metric) |

## Example

### REST

```json
{
  "range": "30d",
  "usersTotal": 0,
  "sessionsTotal": 0,
  "users": [],
  "sessions": []
}
```

### GraphQL

```json
{
  "range": "30d",
  "usersTotal": 0,
  "sessionsTotal": 0,
  "users": [],
  "sessions": []
}
```

