# Account

Account

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | User ID. |
| $createdAt | string | User creation date in ISO 8601 format. |
| $updatedAt | string | User update date in ISO 8601 format. |
| name | string | User name. |
| registration | string | User registration date in ISO 8601 format. |
| status | boolean | User status. Pass `true` for enabled and `false` for disabled. |
| passwordUpdate | string | Password update time in ISO 8601 format. |
| email | string | User email address. |
| phone | string | User phone number in E.164 format. |
| emailVerification | boolean | Email verification status. |
| phoneVerification | boolean | Phone verification status. |
| prefs | preferences | User preferences as a key-value object Can be one of: [Preferences model](/docs/references/1.1.x/models/preferences) |

## Example

### REST

```json
{}
```

### GraphQL

```json
{}
```

