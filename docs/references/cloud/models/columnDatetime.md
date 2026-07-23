# ColumnDatetime

ColumnDatetime

## Properties

| Name | Type | Description |
|------|------|-------------|
| key | string | Column Key. |
| type | string | Column type. |
| status | string | Column status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed` |
| error | string | Error message. Displays error generated on failure of creating or deleting an column. |
| required | boolean | Is column required? |
| array | boolean | Is column an array? |
| $createdAt | string | Column creation date in ISO 8601 format. |
| $updatedAt | string | Column update date in ISO 8601 format. |
| format | string | ISO 8601 format. |
| default | string | Default value for column when not provided. Only null is optional |

## Example

### REST

```json
{
  "key": "birthDay",
  "type": "datetime",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "format": "datetime",
  "default": "2020-10-15T06:38:00.000+00:00"
}
```

### GraphQL

```json
{
  "key": "birthDay",
  "type": "datetime",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "format": "datetime",
  "default": "2020-10-15T06:38:00.000+00:00"
}
```

