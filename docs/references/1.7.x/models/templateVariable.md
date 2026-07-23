# Template Variable

Template Variable

## Properties

| Name | Type | Description |
|------|------|-------------|
| name | string | Variable Name. |
| description | string | Variable Description. |
| value | string | Variable Value. |
| secret | boolean | Variable secret flag. Secret variables can only be updated or deleted, but never read. |
| placeholder | string | Variable Placeholder. |
| required | boolean | Is the variable required? |
| type | string | Variable Type. |

## Example

### REST

```json
{
  "name": "APPWRITE_DATABASE_ID",
  "description": "The ID of the Appwrite database that contains the collection to sync.",
  "value": "512",
  "secret": false,
  "placeholder": "64a55...7b912",
  "required": false,
  "type": "password"
}
```

### GraphQL

```json
{
  "name": "APPWRITE_DATABASE_ID",
  "description": "The ID of the Appwrite database that contains the collection to sync.",
  "value": "512",
  "secret": false,
  "placeholder": "64a55...7b912",
  "required": false,
  "type": "password"
}
```

