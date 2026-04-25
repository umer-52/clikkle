# Function

Function

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Function ID. |
| $createdAt | integer | Function creation date in Unix timestamp. |
| $updatedAt | integer | Function update date in Unix timestamp. |
| execute | array | Execution permissions. |
| name | string | Function name. |
| status | string | Function status. Possible values: `disabled`, `enabled` |
| runtime | string | Function execution runtime. |
| deployment | string | Function's active deployment ID. |
| vars | object | Function environment variables. |
| events | array | Function trigger events. |
| schedule | string | Function execution schedult in CRON format. |
| scheduleNext | integer | Function next scheduled execution date in Unix timestamp. |
| schedulePrevious | integer | Function next scheduled execution date in Unix timestamp. |
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

