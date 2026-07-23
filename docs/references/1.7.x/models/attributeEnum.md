# AttributeEnum

AttributeEnum

## Properties

| Name | Type | Description |
|------|------|-------------|
| key | string | Attribute Key. |
| type | string | Attribute type. |
| status | string | Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed` |
| error | string | Error message. Displays error generated on failure of creating or deleting an attribute. |
| required | boolean | Is attribute required? |
| array | boolean | Is attribute an array? |
| $createdAt | string | Attribute creation date in ISO 8601 format. |
| $updatedAt | string | Attribute update date in ISO 8601 format. |
| elements | array | Array of elements in enumerated type. |
| format | string | String format. |
| default | string | Default value for attribute when not provided. Cannot be set when attribute is required. |

## Example

### REST

```json
{
  "key": "status",
  "type": "string",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "elements": "element",
  "format": "enum",
  "default": "element"
}
```

### GraphQL

```json
{
  "key": "status",
  "type": "string",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "elements": "element",
  "format": "enum",
  "default": "element"
}
```

