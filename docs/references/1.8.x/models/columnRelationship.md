# ColumnRelationship

ColumnRelationship

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
| relatedTable | string | The ID of the related table. |
| relationType | string | The type of the relationship. |
| twoWay | boolean | Is the relationship two-way? |
| twoWayKey | string | The key of the two-way relationship. |
| onDelete | string | How deleting the parent document will propagate to child documents. |
| side | string | Whether this is the parent or child side of the relationship |

## Example

### REST

```json
{
  "key": "fullName",
  "type": "string",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "relatedTable": "table",
  "relationType": "oneToOne|oneToMany|manyToOne|manyToMany",
  "twoWay": false,
  "twoWayKey": "string",
  "onDelete": "restrict|cascade|setNull",
  "side": "parent|child"
}
```

### GraphQL

```json
{
  "key": "fullName",
  "type": "string",
  "status": "available",
  "error": "string",
  "required": true,
  "array": false,
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "relatedTable": "table",
  "relationType": "oneToOne|oneToMany|manyToOne|manyToMany",
  "twoWay": false,
  "twoWayKey": "string",
  "onDelete": "restrict|cascade|setNull",
  "side": "parent|child"
}
```

