# AttributeDatetime

AttributeDatetime

## Properties

| Name | Type | Description |
|------|------|-------------|
| key | string | Attribute Key. |
| type | string | Attribute type. |
| status | string | Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed` |
| error | string | Error message. Displays error generated on failure of creating or deleting an attribute. |
| required | boolean | Is attribute required? |
| array | boolean | Is attribute an array? |
| format | string | ISO 8601 format. |
| default | string | Default value for attribute when not provided. Only null is optional |

## Example

### REST

```json
{}
```

### GraphQL

```json
{}
```

