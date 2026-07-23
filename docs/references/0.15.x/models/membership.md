# Membership

Membership

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Membership ID. |
| $createdAt | integer | Membership creation date in Unix timestamp. |
| $updatedAt | integer | Membership update date in Unix timestamp. |
| userId | string | User ID. |
| userName | string | User name. |
| userEmail | string | User email address. |
| teamId | string | Team ID. |
| teamName | string | Team name. |
| invited | integer | Date, the user has been invited to join the team in Unix timestamp. |
| joined | integer | Date, the user has accepted the invitation to join the team in Unix timestamp. |
| confirm | boolean | User confirmation status, true if the user has joined the team or false otherwise. |
| roles | array | User list of roles |

## Example

### REST

```json
{}
```

### GraphQL

```json
{}
```

