# AttributeRelationship

AttributeRelationship

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
| relatedCollection | string | The ID of the related collection. |
| relationType | string | The type of the relationship. |
| twoWay | boolean | Is the relationship two-way? |
| twoWayKey | string | The key of the two-way relationship. |
| onDelete | string | How deleting the parent document will propagate to child documents. |
| side | string | Whether this is the parent or child side of the relationship |

## Example

### REST

```json
{}
```

### GraphQL

```json
{}
```

