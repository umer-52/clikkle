# Coupon

Coupon

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | coupon ID |
| code | string | coupon ID |
| credits | number | Provided credit amount |
| expiration | string | Coupon expiration time in ISO 8601 format. |
| validity | integer | Credit validity in days. |
| campaign | string | Campaign the coupon is associated with`. |
| status | string | Status of the coupon. Can be one of `disabled`, `active` or `expired`. |
| onlyNewOrgs | boolean | If the coupon is only valid for new organizations or not. |

## Example

### REST

```json
{
  "$id": "NEWBONUS",
  "code": "NEWBONUS",
  "credits": 50,
  "expiration": "2020-10-15T06:38:00.000+00:00",
  "validity": 180,
  "campaign": "AppwriteHeroes",
  "status": "disabled",
  "onlyNewOrgs": true
}
```

### GraphQL

```json
{
  "_id": "NEWBONUS",
  "code": "NEWBONUS",
  "credits": 50,
  "expiration": "2020-10-15T06:38:00.000+00:00",
  "validity": 180,
  "campaign": "AppwriteHeroes",
  "status": "disabled",
  "onlyNewOrgs": true
}
```

