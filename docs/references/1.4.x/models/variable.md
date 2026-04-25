# Variable

Variable

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Variable ID. |
| $createdAt | string | Variable creation date in ISO 8601 format. |
| $updatedAt | string | Variable creation date in ISO 8601 format. |
| key | string | Variable key. |
| value | string | Variable value. |
| resourceType | string | Service to which the variable belongs. Possible values are "project", "function" |
| resourceId | string | ID of resource to which the variable belongs. If resourceType is "project", it is empty. If resourceType is "function", it is ID of the function. |

## Example

### REST

```json
{}
```

### GraphQL

```json
{}
```

