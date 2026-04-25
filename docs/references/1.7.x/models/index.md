# Index

Index

## Properties

| Name | Type | Description |
|------|------|-------------|
| key | string | Index Key. |
| type | string | Index type. |
| status | string | Index status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed` |
| error | string | Error message. Displays error generated on failure of creating or deleting an index. |
| attributes | array | Index attributes. |
| lengths | array | Index attributes length. |
| orders | array | Index orders. |
| $createdAt | string | Index creation date in ISO 8601 format. |
| $updatedAt | string | Index update date in ISO 8601 format. |

## Example

### REST

```json
{
  "key": "index1",
  "type": "primary",
  "status": "available",
  "error": "string",
  "attributes": [],
  "lengths": [],
  "orders": [],
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00"
}
```

### GraphQL

```json
{
  "key": "index1",
  "type": "primary",
  "status": "available",
  "error": "string",
  "attributes": [],
  "lengths": [],
  "orders": [],
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00"
}
```

