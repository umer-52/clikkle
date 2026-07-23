# AttributeInteger

AttributeInteger

## Properties

| Name | Type | Description |
|------|------|-------------|
| key | string | Attribute Key. |
| type | string | Attribute type. |
| status | string | Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed` |
| required | boolean | Is attribute required? |
| array | boolean | Is attribute an array? |
| min | integer | Minimum value to enforce for new documents. |
| max | integer | Maximum value to enforce for new documents. |
| default | integer | Default value for attribute when not provided. Cannot be set when attribute is required. |

## Example

### REST

```json
{}
```

### GraphQL

```json
{}
```

