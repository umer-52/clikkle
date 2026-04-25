# Restoration

Restoration

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Restoration ID. |
| $createdAt | string | Restoration creation time in ISO 8601 format. |
| $updatedAt | string | Restoration update date in ISO 8601 format. |
| archiveId | string | Backup archive ID. |
| policyId | string | Backup policy ID. |
| status | string | The status of the restoration. Possible values: pending, downloading, processing, completed, failed. |
| startedAt | string | The backup start time. |
| migrationId | string | Migration ID. |
| services | array | The services that are backed up by this policy. |
| resources | array | The resources that are backed up by this policy. |
| options | string | Optional data in key-value object. |

## Example

### REST

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "archiveId": "did8jx6ws45jana098ab7",
  "policyId": "did8jx6ws45jana098ab7",
  "status": "completed",
  "startedAt": "2020-10-15T06:38:00.000+00:00",
  "migrationId": "did8jx6ws45jana098ab7",
  "services": "['databases', 'storage']",
  "resources": "['databases', 'collections', 'attributes', 'indexes']",
  "options": "{databases.database[{oldId, newId, newName}]}"
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "archiveId": "did8jx6ws45jana098ab7",
  "policyId": "did8jx6ws45jana098ab7",
  "status": "completed",
  "startedAt": "2020-10-15T06:38:00.000+00:00",
  "migrationId": "did8jx6ws45jana098ab7",
  "services": "['databases', 'storage']",
  "resources": "['databases', 'collections', 'attributes', 'indexes']",
  "options": "{databases.database[{oldId, newId, newName}]}"
}
```

