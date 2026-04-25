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
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "userId": "5e5ea5c16897e",
  "userName": "John Doe",
  "userEmail": "john@appwrite.io",
  "teamId": "5e5ea5c16897e",
  "teamName": "VIP",
  "invited": "2020-10-15T06:38:00.000+00:00",
  "joined": "2020-10-15T06:38:00.000+00:00",
  "confirm": false,
  "mfa": false,
  "roles": [
    "owner"
  ]
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "userId": "5e5ea5c16897e",
  "userName": "John Doe",
  "userEmail": "john@appwrite.io",
  "teamId": "5e5ea5c16897e",
  "teamName": "VIP",
  "invited": "2020-10-15T06:38:00.000+00:00",
  "joined": "2020-10-15T06:38:00.000+00:00",
  "confirm": false,
  "mfa": false,
  "roles": [
    "owner"
  ]
}
```

