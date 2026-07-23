# Collection

Collection

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Collection ID. |
| $createdAt | string | Collection creation date in ISO 8601 format. |
| $updatedAt | string | Collection update date in ISO 8601 format. |
| $permissions | array | Collection permissions. [Learn more about permissions](https://appwrite.io/docs/permissions). |
| databaseId | string | Database ID. |
| name | string | Collection name. |
| enabled | boolean | Collection enabled. Can be 'enabled' or 'disabled'. When disabled, the collection is inaccessible to users, but remains accessible to Server SDKs using API keys. |
| documentSecurity | boolean | Whether document-level permissions are enabled. [Learn more about permissions](https://appwrite.io/docs/permissions). |
| attributes | array | Collection attributes. Can be one of: [AttributeBoolean model](/docs/references/cloud/models/attributeBoolean), [AttributeInteger model](/docs/references/cloud/models/attributeInteger), [AttributeFloat model](/docs/references/cloud/models/attributeFloat), [AttributeEmail model](/docs/references/cloud/models/attributeEmail), [AttributeEnum model](/docs/references/cloud/models/attributeEnum), [AttributeURL model](/docs/references/cloud/models/attributeUrl), [AttributeIP model](/docs/references/cloud/models/attributeIp), [AttributeDatetime model](/docs/references/cloud/models/attributeDatetime), [AttributeRelationship model](/docs/references/cloud/models/attributeRelationship), [AttributePoint model](/docs/references/cloud/models/attributePoint), [AttributeLine model](/docs/references/cloud/models/attributeLine), [AttributePolygon model](/docs/references/cloud/models/attributePolygon), [AttributeVarchar model](/docs/references/cloud/models/attributeVarchar), [AttributeText model](/docs/references/cloud/models/attributeText), [AttributeMediumtext model](/docs/references/cloud/models/attributeMediumtext), [AttributeLongtext model](/docs/references/cloud/models/attributeLongtext), [AttributeString model](/docs/references/cloud/models/attributeString) |
| indexes | array<index> | Collection indexes. Can be one of: [Index model](/docs/references/cloud/models/index) |
| bytesMax | integer | Maximum document size in bytes. Returns 0 when no limit applies. |
| bytesUsed | integer | Currently used document size in bytes based on defined attributes. |

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
  "name": "My Collection",
  "enabled": false,
  "documentSecurity": true,
  "attributes": {},
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
  "name": "My Collection",
  "enabled": false,
  "documentSecurity": true,
  "attributes": {},
  "indexes": {},
  "bytesMax": 65535,
  "bytesUsed": 1500
}
```

