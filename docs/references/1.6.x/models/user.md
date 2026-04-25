# User

User

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | User ID. |
| $createdAt | string | User creation date in ISO 8601 format. |
| $updatedAt | string | User update date in ISO 8601 format. |
| name | string | User name. |
| password | string | Hashed user password. |
| hash | string | Password hashing algorithm. |
| hashOptions | object | Password hashing algorithm configuration. Can be one of: [AlgoArgon2 model](/docs/references/1.6.x/models/algoArgon2), [AlgoScrypt model](/docs/references/1.6.x/models/algoScrypt), [AlgoScryptModified model](/docs/references/1.6.x/models/algoScryptModified), [AlgoBcrypt model](/docs/references/1.6.x/models/algoBcrypt), [AlgoPHPass model](/docs/references/1.6.x/models/algoPhpass), [AlgoSHA model](/docs/references/1.6.x/models/algoSha), [AlgoMD5 model](/docs/references/1.6.x/models/algoMd5) |
| registration | string | User registration date in ISO 8601 format. |
| status | boolean | User status. Pass `true` for enabled and `false` for disabled. |
| labels | array | Labels for the user. |
| passwordUpdate | string | Password update time in ISO 8601 format. |
| email | string | User email address. |
| phone | string | User phone number in E.164 format. |
| emailVerification | boolean | Email verification status. |
| phoneVerification | boolean | Phone verification status. |
| mfa | boolean | Multi factor authentication status. |
| prefs | preferences | User preferences as a key-value object Can be one of: [Preferences model](/docs/references/1.6.x/models/preferences) |
| targets | array<target> | A user-owned message receiver. A single user may have multiple e.g. emails, phones, and a browser. Each target is registered with a single provider. Can be one of: [Target model](/docs/references/1.6.x/models/target) |
| accessedAt | string | Most recent access date in ISO 8601 format. This attribute is only updated again after 24 hours. |

## Example

### REST

```json
{}
```

### GraphQL

```json
{}
```

