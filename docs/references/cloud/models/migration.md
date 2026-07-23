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
| resourceId | string | Id of the resource to migrate. |
| statusCounters | object | A group of counters that represent the total progress of the migration. |
| resourceData | object | An array of objects containing the report data of the resources that were migrated. |
| errors | array | All errors that occurred during the migration process. |
| options | object | Migration options used during the migration process. |

## Example

### REST

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "status": "pending",
  "stage": "init",
  "source": "Appwrite",
  "destination": "Appwrite",
  "resources": [
    "user"
  ],
  "resourceId": "databaseId:collectionId",
  "statusCounters": "{\"Database\": {\"PENDING\": 0, \"SUCCESS\": 1, \"ERROR\": 0, \"SKIP\": 0, \"PROCESSING\": 0, \"WARNING\": 0}}",
  "resourceData": "[{\"resource\":\"Database\",\"id\":\"public\",\"status\":\"SUCCESS\",\"message\":\"\"}]",
  "errors": [],
  "options": "{\"bucketId\": \"exports\", \"notify\": false}"
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "status": "pending",
  "stage": "init",
  "source": "Appwrite",
  "destination": "Appwrite",
  "resources": [
    "user"
  ],
  "resourceId": "databaseId:collectionId",
  "statusCounters": "{\"Database\": {\"PENDING\": 0, \"SUCCESS\": 1, \"ERROR\": 0, \"SKIP\": 0, \"PROCESSING\": 0, \"WARNING\": 0}}",
  "resourceData": "[{\"resource\":\"Database\",\"id\":\"public\",\"status\":\"SUCCESS\",\"message\":\"\"}]",
  "errors": [],
  "options": "{\"bucketId\": \"exports\", \"notify\": false}"
}
```

