# Membership

Membership

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Membership ID. |
| $createdAt | string | Membership creation date in ISO 8601 format. |
| $updatedAt | string | Membership update date in ISO 8601 format. |
| userId | string | User ID. |
| userName | string | User name. Hide this attribute by toggling membership privacy in the Console. |
| userEmail | string | User email address. Hide this attribute by toggling membership privacy in the Console. |
| teamId | string | Team ID. |
| teamName | string | Team name. |
| invited | string | Date, the user has been invited to join the team in ISO 8601 format. |
| joined | string | Date, the user has accepted the invitation to join the team in ISO 8601 format. |
| confirm | boolean | User confirmation status, true if the user has joined the team or false otherwise. |
| mfa | boolean | Multi factor authentication status, true if the user has MFA enabled or false otherwise. Hide this attribute by toggling membership privacy in the Console. |
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

