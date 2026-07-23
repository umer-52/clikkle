# Downgrade Feedback

Downgrade Feedback

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Feedback ID. |
| $createdAt | string | Feedback creation date in ISO 8601 format. |
| $updatedAt | string | Feedback update date in ISO 8601 format. |
| title | string | Feedback reason |
| message | string | Feedback message |
| fromPlanId | string | Plan ID downgrading from |
| toPlanId | string | Plan ID downgrading to |
| teamId | string | Organization ID |
| userId | string | User ID who submitted feedback |
| version | string | Console version |

## Example

### REST

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "title": "I encountered a bug and outage that caused my app to lose its value",
  "message": "The platform experienced significant downtime which affected my users.",
  "fromPlanId": "pro",
  "toPlanId": "free",
  "teamId": "5e5ea5c16897e",
  "userId": "5e5ea5c16897e",
  "version": "1.8.0"
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "title": "I encountered a bug and outage that caused my app to lose its value",
  "message": "The platform experienced significant downtime which affected my users.",
  "fromPlanId": "pro",
  "toPlanId": "free",
  "teamId": "5e5ea5c16897e",
  "userId": "5e5ea5c16897e",
  "version": "1.8.0"
}
```

