# Index

Index

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Index ID. |
| $createdAt | string | Index creation date in ISO 8601 format. |
| $updatedAt | string | Index update date in ISO 8601 format. |
| key | string | Index key. |
| type | string | Index type. |
| status | string | Index status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed` |
| error | string | Error message. Displays error generated on failure of creating or deleting an index. |
| attributes | array | Index attributes. |
| lengths | array | Index attributes length. |
| orders | array | Index orders. |

## Example

### REST

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "key": "index1",
  "type": "primary",
  "status": "available",
  "error": "string",
  "attributes": [],
  "lengths": [],
  "orders": []
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "key": "index1",
  "type": "primary",
  "status": "available",
  "error": "string",
  "attributes": [],
  "lengths": [],
  "orders": []
}
```

