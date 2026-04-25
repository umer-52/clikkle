# Table

Table

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Table ID. |
| $createdAt | string | Table creation date in ISO 8601 format. |
| $updatedAt | string | Table update date in ISO 8601 format. |
| $permissions | array | Table permissions. [Learn more about permissions](https://appwrite.io/docs/permissions). |
| databaseId | string | Database ID. |
| name | string | Table name. |
| enabled | boolean | Table enabled. Can be 'enabled' or 'disabled'. When disabled, the table is inaccessible to users, but remains accessible to Server SDKs using API keys. |
| rowSecurity | boolean | Whether row-level permissions are enabled. [Learn more about permissions](https://appwrite.io/docs/permissions). |
| columns | array | Table columns. Can be one of: [ColumnBoolean model](/docs/references/cloud/models/columnBoolean), [ColumnInteger model](/docs/references/cloud/models/columnInteger), [ColumnFloat model](/docs/references/cloud/models/columnFloat), [ColumnEmail model](/docs/references/cloud/models/columnEmail), [ColumnEnum model](/docs/references/cloud/models/columnEnum), [ColumnURL model](/docs/references/cloud/models/columnUrl), [ColumnIP model](/docs/references/cloud/models/columnIp), [ColumnDatetime model](/docs/references/cloud/models/columnDatetime), [ColumnRelationship model](/docs/references/cloud/models/columnRelationship), [ColumnPoint model](/docs/references/cloud/models/columnPoint), [ColumnLine model](/docs/references/cloud/models/columnLine), [ColumnPolygon model](/docs/references/cloud/models/columnPolygon), [ColumnVarchar model](/docs/references/cloud/models/columnVarchar), [ColumnText model](/docs/references/cloud/models/columnText), [ColumnMediumtext model](/docs/references/cloud/models/columnMediumtext), [ColumnLongtext model](/docs/references/cloud/models/columnLongtext), [ColumnString model](/docs/references/cloud/models/columnString) |
| indexes | array<columnIndex> | Table indexes. Can be one of: [Index model](/docs/references/cloud/models/columnIndex) |
| bytesMax | integer | Maximum row size in bytes. Returns 0 when no limit applies. |
| bytesUsed | integer | Currently used row size in bytes based on defined columns. |

## Example

### REST

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "$permissions": [
    "read(\"any\")"
  ],
  "databaseId": "5e5ea5c16897e",
  "name": "My Table",
  "enabled": false,
  "rowSecurity": true,
  "columns": {},
  "indexes": {},
  "bytesMax": 65535,
  "bytesUsed": 1500
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "_permissions": [
    "read(\"any\")"
  ],
  "databaseId": "5e5ea5c16897e",
  "name": "My Table",
  "enabled": false,
  "rowSecurity": true,
  "columns": {},
  "indexes": {},
  "bytesMax": 65535,
  "bytesUsed": 1500
}
```

