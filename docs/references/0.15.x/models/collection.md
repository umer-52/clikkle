# Collection

Collection

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Collection ID. |
| $createdAt | integer | Collection creation date in Unix timestamp. |
| $updatedAt | integer | Collection update date in Unix timestamp. |
| $read | array | Collection read permissions. |
| $write | array | Collection write permissions. |
| databaseId | string | Database ID. |
| name | string | Collection name. |
| enabled | boolean | Collection enabled. |
| permission | string | Collection permission model. Possible values: `document` or `collection` |
| attributes | array | Collection attributes. Can be one of: [AttributeBoolean model](/docs/references/0.15.x/models/attributeBoolean), [AttributeInteger model](/docs/references/0.15.x/models/attributeInteger), [AttributeFloat model](/docs/references/0.15.x/models/attributeFloat), [AttributeEmail model](/docs/references/0.15.x/models/attributeEmail), [AttributeEnum model](/docs/references/0.15.x/models/attributeEnum), [AttributeURL model](/docs/references/0.15.x/models/attributeUrl), [AttributeIP model](/docs/references/0.15.x/models/attributeIp), [AttributeString model](/docs/references/0.15.x/models/attributeString) |
| indexes | array<index> | Collection indexes. Can be one of: [Index model](/docs/references/0.15.x/models/index) |

## Example

### REST

```json
{}
```

### GraphQL

```json
{}
```

