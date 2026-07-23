# Migration

Migration

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Migration ID. |
| $createdAt | string | Migration creation date in ISO 8601 format. |
| $updatedAt | string | Variable creation date in ISO 8601 format. |
| status | string | Migration status ( pending, processing, failed, completed ) |
| stage | string | Migration stage ( init, processing, source-check, destination-check, migrating, finished ) |
| source | string | A string containing the type of source of the migration. |
| destination | string | A string containing the type of destination of the migration. |
| resources | array | Resources to migrate. |
| statusCounters | object | A group of counters that represent the total progress of the migration. |
| resourceData | object | An array of objects containing the report data of the resources that were migrated. |
| errors | array | All errors that occurred during the migration process. |

## Example

### REST

```json
{}
```

### GraphQL

```json
{}
```

