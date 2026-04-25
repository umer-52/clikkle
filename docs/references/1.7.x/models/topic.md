# Topic

Topic

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Topic ID. |
| $createdAt | string | Topic creation time in ISO 8601 format. |
| $updatedAt | string | Topic update date in ISO 8601 format. |
| name | string | The name of the topic. |
| emailTotal | integer | Total count of email subscribers subscribed to the topic. |
| smsTotal | integer | Total count of SMS subscribers subscribed to the topic. |
| pushTotal | integer | Total count of push subscribers subscribed to the topic. |
| subscribe | array | Subscribe permissions. |

## Example

### REST

```json
{
  "$id": "259125845563242502",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "events",
  "emailTotal": 100,
  "smsTotal": 100,
  "pushTotal": 100,
  "subscribe": "users"
}
```

### GraphQL

```json
{
  "_id": "259125845563242502",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "events",
  "emailTotal": 100,
  "smsTotal": 100,
  "pushTotal": 100,
  "subscribe": "users"
}
```

