# Health Status

Health Status

## Properties

| Name | Type | Description |
|------|------|-------------|
| name | string | Name of the service. |
| ping | integer | Duration in milliseconds how long the health check took. |
| status | string | Service status. Possible values are: `pass`, `fail` |

## Example

### REST

```json
{
  "name": "database",
  "ping": 128,
  "status": "pass"
}
```

### GraphQL

```json
{
  "name": "database",
  "ping": 128,
  "status": "pass"
}
```

