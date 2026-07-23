# ColumnIP

ColumnIP

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
| format | string | String format. |
| default | string | Default value for column when not provided. Cannot be set when column is required. |

## Example

### REST

```json
{
  "key": "ipAddress",
  "type": "string",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "format": "ip",
  "default": "192.0.2.0"
}
```

### GraphQL

```json
{
  "key": "ipAddress",
  "type": "string",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "format": "ip",
  "default": "192.0.2.0"
}
```

