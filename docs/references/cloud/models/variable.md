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
| secret | boolean | Variable secret flag. Secret variables can only be updated or deleted, but never read. |
| resourceType | string | Service to which the variable belongs. Possible values are "project", "function" |
| resourceId | string | ID of resource to which the variable belongs. If resourceType is "project", it is empty. If resourceType is "function", it is ID of the function. |

## Example

### REST

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "key": "API_KEY",
  "value": "myPa$$word1",
  "secret": false,
  "resourceType": "function",
  "resourceId": "myAwesomeFunction"
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "key": "API_KEY",
  "value": "myPa$$word1",
  "secret": false,
  "resourceType": "function",
  "resourceId": "myAwesomeFunction"
}
```

