# Transaction

Transaction

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Transaction ID. |
| $createdAt | string | Transaction creation time in ISO 8601 format. |
| $updatedAt | string | Transaction update date in ISO 8601 format. |
| status | string | Current status of the transaction. One of: pending, committing, committed, rolled_back, failed. |
| operations | integer | Number of operations in the transaction. |
| expiresAt | string | Expiration time in ISO 8601 format. |

## Example

### REST

```json
{
  "$id": "259125845563242502",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "status": "pending",
  "operations": 5,
  "expiresAt": "2020-10-15T06:38:00.000+00:00"
}
```

### GraphQL

```json
{
  "_id": "259125845563242502",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "status": "pending",
  "operations": 5,
  "expiresAt": "2020-10-15T06:38:00.000+00:00"
}
```

