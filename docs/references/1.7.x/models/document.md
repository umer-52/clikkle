# Document

Document

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Document ID. |
| $sequence | integer | Document automatically incrementing ID. |
| $collectionId | string | Collection ID. |
| $databaseId | string | Database ID. |
| $createdAt | string | Document creation date in ISO 8601 format. |
| $updatedAt | string | Document update date in ISO 8601 format. |
| $permissions | array | Document permissions. [Learn more about permissions](https://appwrite.io/docs/permissions). |

## Example

### REST

```json
{
  "$id": "5e5ea5c16897e",
  "$sequence": 1,
  "$collectionId": "5e5ea5c15117e",
  "$databaseId": "5e5ea5c15117e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "$permissions": [
    "read(\"any\")"
  ],
  "username": "john.doe",
  "email": "john.doe@example.com",
  "fullName": "John Doe",
  "age": 30,
  "isAdmin": false
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "_sequence": 1,
  "_collectionId": "5e5ea5c15117e",
  "_databaseId": "5e5ea5c15117e",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "_permissions": [
    "read(\"any\")"
  ],
  "username": "john.doe",
  "email": "john.doe@example.com",
  "fullName": "John Doe",
  "age": 30,
  "isAdmin": false
}
```

