# Credit

Credit

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Credit ID. |
| $createdAt | string | Credit creation time in ISO 8601 format. |
| $updatedAt | string | Credit update date in ISO 8601 format. |
| $permissions | array | Credit permissions. [Learn more about permissions](/docs/permissions). |
| couponId | string | coupon ID |
| userId | string | ID of the User. |
| teamId | string | ID of the Team. |
| credits | number | Provided credit amount |
| total | number | Provided credit amount |
| expiration | string | Credit expiration time in ISO 8601 format. |
| status | string | Status of the credit. Can be one of `disabled`, `active` or `expired`. |

## Example

### REST

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "$permissions": [
    "read(\"any\")"
  ],
  "couponId": "NEWBONUS",
  "userId": "5e5ea5c16897e",
  "teamId": "5e5ea5c16897e",
  "credits": 50,
  "total": 50,
  "expiration": "2020-10-15T06:38:00.000+00:00",
  "status": "disabled"
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "_permissions": [
    "read(\"any\")"
  ],
  "couponId": "NEWBONUS",
  "userId": "5e5ea5c16897e",
  "teamId": "5e5ea5c16897e",
  "credits": 50,
  "total": 50,
  "expiration": "2020-10-15T06:38:00.000+00:00",
  "status": "disabled"
}
```

