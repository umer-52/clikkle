# Region

Region

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Region ID |
| name | string | Region name |
| available | boolean | Does the organization have access to this region. |
| disabled | boolean | Does the backend support this region. |
| default | boolean | Is this the region default. |
| flag | string | Region flag code. |

## Example

### REST

```json
{
  "$id": "eu-fr",
  "name": "EU (Frankfurt)",
  "available": false,
  "disabled": false,
  "default": true,
  "flag": "fr"
}
```

### GraphQL

```json
{
  "_id": "eu-fr",
  "name": "EU (Frankfurt)",
  "available": false,
  "disabled": false,
  "default": true,
  "flag": "fr"
}
```

