# backup

backup

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Backup policy ID. |
| name | string | Backup policy name. |
| $createdAt | string | Policy creation date in ISO 8601 format. |
| $updatedAt | string | Policy update date in ISO 8601 format. |
| services | array | The services that are backed up by this policy. |
| resources | array | The resources that are backed up by this policy. |
| resourceId | string | The resource ID to backup. Set only if this policy should backup a single resource. |
| resourceType | string | The resource type to backup. Set only if this policy should backup a single resource. |
| retention | integer | How many days to keep the backup before it will be automatically deleted. |
| schedule | string | Policy backup schedule in CRON format. |
| enabled | boolean | Is this policy enabled. |

## Example

### REST

```json
{
  "$id": "5e5ea5c16897e",
  "name": "Hourly backups",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "services": "['databases', 'storage']",
  "resources": "['databases', 'collections', 'attributes', 'indexes']",
  "resourceId": "DB1",
  "resourceType": "database",
  "retention": 7,
  "schedule": "0 * * * *",
  "enabled": true
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "name": "Hourly backups",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "services": "['databases', 'storage']",
  "resources": "['databases', 'collections', 'attributes', 'indexes']",
  "resourceId": "DB1",
  "resourceType": "database",
  "retention": 7,
  "schedule": "0 * * * *",
  "enabled": true
}
```

