# Function

Function

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Function ID. |
| $createdAt | string | Function creation date in ISO 8601 format. |
| $updatedAt | string | Function update date in ISO 8601 format. |
| execute | array | Execution permissions. |
| name | string | Function name. |
| enabled | boolean | Function enabled. |
| runtime | string | Function execution runtime. |
| deployment | string | Function's active deployment ID. |
| vars | array<variable> | Function variables. Can be one of: [Variable model](/docs/references/1.0.x/models/variable) |
| events | array | Function trigger events. |
| schedule | string | Function execution schedult in CRON format. |
| scheduleNext | string | Function's next scheduled execution time in ISO 8601 format. |
| schedulePrevious | string | Function's previous scheduled execution time in ISO 8601 format. |
| timeout | integer | Function execution timeout in seconds. |

## Example

### REST

```json
{}
```

### GraphQL

```json
{}
```

