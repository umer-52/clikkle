# Row

Row

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Row ID. |
| $sequence | integer | Row automatically incrementing ID. |
| $tableId | string | Table ID. |
| $databaseId | string | Database ID. |
| $createdAt | string | Row creation date in ISO 8601 format. |
| $updatedAt | string | Row update date in ISO 8601 format. |
| $permissions | array | Row permissions. [Learn more about permissions](https://appwrite.io/docs/permissions). |

## Example

### REST

```json
{
  "$id": "5e5ea5c16897e",
  "$sequence": 1,
  "$tableId": "5e5ea5c15117e",
  "$databaseId": "5e5ea5c15117e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "$permissions": [
    "read(\"any\")"
  ]
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "_sequence": 1,
  "_tableId": "5e5ea5c15117e",
  "_databaseId": "5e5ea5c15117e",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "_permissions": [
    "read(\"any\")"
  ]
}
```

