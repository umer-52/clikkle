# AttributeURL

AttributeURL

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
| format | string | String format. |
| default | string | Default value for attribute when not provided. Cannot be set when attribute is required. |

## Example

### REST

```json
{}
```

### GraphQL

```json
{}
```

