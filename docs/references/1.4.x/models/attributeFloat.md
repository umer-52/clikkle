# AttributeFloat

AttributeFloat

## Properties

| Name | Type | Description |
|------|------|-------------|
| key | string | Attribute Key. |
| type | string | Attribute type. |
| status | string | Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed` |
| error | string | Error message. Displays error generated on failure of creating or deleting an attribute. |
| required | boolean | Is attribute required? |
| array | boolean | Is attribute an array? |
| min | number | Minimum value to enforce for new documents. |
| max | number | Maximum value to enforce for new documents. |
| default | number | Default value for attribute when not provided. Cannot be set when attribute is required. |

## Example

### REST

```json
{}
```

### GraphQL

```json
{}
```

