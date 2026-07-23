# User

User

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | User ID. |
| $createdAt | integer | User creation date in Unix timestamp. |
| $updatedAt | integer | User update date in Unix timestamp. |
| name | string | User name. |
| registration | integer | User registration date in Unix timestamp. |
| status | boolean | User status. Pass `true` for enabled and `false` for disabled. |
| passwordUpdate | integer | Unix timestamp of the most recent password update |
| email | string | User email address. |
| phone | string | User phone number in E.164 format. |
| emailVerification | boolean | Email verification status. |
| phoneVerification | boolean | Phone verification status. |
| prefs | preferences | User preferences as a key-value object Can be one of: [Preferences model](/docs/references/0.15.x/models/preferences) |

## Example

### REST

```json
{}
```

### GraphQL

```json
{}
```

