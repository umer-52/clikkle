# Archive

Archive

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Archive ID. |
| $createdAt | string | Archive creation time in ISO 8601 format. |
| $updatedAt | string | Archive update date in ISO 8601 format. |
| policyId | string | Archive policy ID. |
| size | integer | Archive size in bytes. |
| status | string | The status of the archive creation. Possible values: pending, processing, uploading, completed, failed. |
| startedAt | string | The backup start time. |
| migrationId | string | Migration ID. |
| services | array | The services that are backed up by this archive. |
| resources | array | The resources that are backed up by this archive. |
| resourceId | string | The resource ID to backup. Set only if this archive should backup a single resource. |
| resourceType | string | The resource type to backup. Set only if this archive should backup a single resource. |

## Example

### REST

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "policyId": "did8jx6ws45jana098ab7",
  "size": 100000,
  "status": "completed",
  "startedAt": "2020-10-15T06:38:00.000+00:00",
  "migrationId": "did8jx6ws45jana098ab7",
  "services": "['databases', 'storage']",
  "resources": "['databases', 'collections', 'attributes', 'indexes']",
  "resourceId": "DB1",
  "resourceType": "database"
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "policyId": "did8jx6ws45jana098ab7",
  "size": 100000,
  "status": "completed",
  "startedAt": "2020-10-15T06:38:00.000+00:00",
  "migrationId": "did8jx6ws45jana098ab7",
  "services": "['databases', 'storage']",
  "resources": "['databases', 'collections', 'attributes', 'indexes']",
  "resourceId": "DB1",
  "resourceType": "database"
}
```

