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
| columns | array | Table columns. Can be one of: [ColumnBoolean model](/docs/references/1.8.x/models/columnBoolean), [ColumnInteger model](/docs/references/1.8.x/models/columnInteger), [ColumnFloat model](/docs/references/1.8.x/models/columnFloat), [ColumnEmail model](/docs/references/1.8.x/models/columnEmail), [ColumnEnum model](/docs/references/1.8.x/models/columnEnum), [ColumnURL model](/docs/references/1.8.x/models/columnUrl), [ColumnIP model](/docs/references/1.8.x/models/columnIp), [ColumnDatetime model](/docs/references/1.8.x/models/columnDatetime), [ColumnRelationship model](/docs/references/1.8.x/models/columnRelationship), [ColumnPoint model](/docs/references/1.8.x/models/columnPoint), [ColumnLine model](/docs/references/1.8.x/models/columnLine), [ColumnPolygon model](/docs/references/1.8.x/models/columnPolygon), [ColumnVarchar model](/docs/references/1.8.x/models/columnVarchar), [ColumnText model](/docs/references/1.8.x/models/columnText), [ColumnMediumtext model](/docs/references/1.8.x/models/columnMediumtext), [ColumnLongtext model](/docs/references/1.8.x/models/columnLongtext), [ColumnString model](/docs/references/1.8.x/models/columnString) |
| indexes | array<columnIndex> | Table indexes. Can be one of: [Index model](/docs/references/1.8.x/models/columnIndex) |
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

