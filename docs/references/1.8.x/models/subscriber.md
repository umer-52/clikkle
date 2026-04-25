# Subscriber

Subscriber

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Subscriber ID. |
| $createdAt | string | Subscriber creation time in ISO 8601 format. |
| $updatedAt | string | Subscriber update date in ISO 8601 format. |
| targetId | string | Target ID. |
| target | target | Target. Can be one of: [Target model](/docs/references/1.8.x/models/target) |
| userId | string | Topic ID. |
| userName | string | User Name. |
| topicId | string | Topic ID. |
| providerType | string | The target provider type. Can be one of the following: `email`, `sms` or `push`. |

## Example

### REST

```json
{
  "$id": "259125845563242502",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "targetId": "259125845563242502",
  "target": {
    "$id": "259125845563242502",
    "$createdAt": "2020-10-15T06:38:00.000+00:00",
    "$updatedAt": "2020-10-15T06:38:00.000+00:00",
    "providerType": "email",
    "providerId": "259125845563242502",
    "name": "ageon-app-email",
    "identifier": "random-mail@email.org",
    "userId": "5e5ea5c16897e"
  },
  "userId": "5e5ea5c16897e",
  "userName": "Aegon Targaryen",
  "topicId": "259125845563242502",
  "providerType": "email"
}
```

### GraphQL

```json
{
  "_id": "259125845563242502",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "targetId": "259125845563242502",
  "target": {
    "_id": "259125845563242502",
    "_createdAt": "2020-10-15T06:38:00.000+00:00",
    "_updatedAt": "2020-10-15T06:38:00.000+00:00",
    "providerType": "email",
    "providerId": "259125845563242502",
    "name": "ageon-app-email",
    "identifier": "random-mail@email.org",
    "userId": "5e5ea5c16897e"
  },
  "userId": "5e5ea5c16897e",
  "userName": "Aegon Targaryen",
  "topicId": "259125845563242502",
  "providerType": "email"
}
```

