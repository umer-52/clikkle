# Message

Message

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Message ID. |
| $createdAt | string | Message creation time in ISO 8601 format. |
| $updatedAt | string | Message update date in ISO 8601 format. |
| providerType | string | Message provider type. |
| topics | array | Topic IDs set as recipients. |
| users | array | User IDs set as recipients. |
| targets | array | Target IDs set as recipients. |
| scheduledAt | string | The scheduled time for message. |
| deliveredAt | string | The time when the message was delivered. |
| deliveryErrors | array | Delivery errors if any. |
| deliveredTotal | integer | Number of recipients the message was delivered to. |
| data | object | Data of the message. |
| status | string | Status of delivery. |

## Example

### REST

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "providerType": "email",
  "topics": [
    "5e5ea5c16897e"
  ],
  "users": [
    "5e5ea5c16897e"
  ],
  "targets": [
    "5e5ea5c16897e"
  ],
  "scheduledAt": "2020-10-15T06:38:00.000+00:00",
  "deliveredAt": "2020-10-15T06:38:00.000+00:00",
  "deliveryErrors": [
    "Failed to send message to target 5e5ea5c16897e: Credentials not valid."
  ],
  "deliveredTotal": 1,
  "data": {
    "subject": "Welcome to Appwrite",
    "content": "Hi there, welcome to Appwrite family."
  },
  "status": "processing"
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "providerType": "email",
  "topics": [
    "5e5ea5c16897e"
  ],
  "users": [
    "5e5ea5c16897e"
  ],
  "targets": [
    "5e5ea5c16897e"
  ],
  "scheduledAt": "2020-10-15T06:38:00.000+00:00",
  "deliveredAt": "2020-10-15T06:38:00.000+00:00",
  "deliveryErrors": [
    "Failed to send message to target 5e5ea5c16897e: Credentials not valid."
  ],
  "deliveredTotal": 1,
  "data": {
    "subject": "Welcome to Appwrite",
    "content": "Hi there, welcome to Appwrite family."
  },
  "status": "processing"
}
```

