# EmailTemplate

EmailTemplate

## Properties

| Name | Type | Description |
|------|------|-------------|
| type | string | Template type |
| locale | string | Template locale |
| message | string | Template message |
| senderName | string | Name of the sender |
| senderEmail | string | Email of the sender |
| replyTo | string | Reply to email address |
| subject | string | Email subject |

## Example

### REST

```json
{
  "type": "verification",
  "locale": "en_us",
  "message": "Click on the link to verify your account.",
  "senderName": "My User",
  "senderEmail": "mail@appwrite.io",
  "replyTo": "emails@appwrite.io",
  "subject": "Please verify your email address"
}
```

### GraphQL

```json
{
  "type": "verification",
  "locale": "en_us",
  "message": "Click on the link to verify your account.",
  "senderName": "My User",
  "senderEmail": "mail@appwrite.io",
  "replyTo": "emails@appwrite.io",
  "subject": "Please verify your email address"
}
```

