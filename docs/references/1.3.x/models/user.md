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
| hashOptions | object | Password hashing algorithm configuration. Can be one of: [AlgoArgon2 model](/docs/references/1.3.x/models/algoArgon2), [AlgoScrypt model](/docs/references/1.3.x/models/algoScrypt), [AlgoScryptModified model](/docs/references/1.3.x/models/algoScryptModified), [AlgoBcrypt model](/docs/references/1.3.x/models/algoBcrypt), [AlgoPHPass model](/docs/references/1.3.x/models/algoPhpass), [AlgoSHA model](/docs/references/1.3.x/models/algoSha), [AlgoMD5 model](/docs/references/1.3.x/models/algoMd5) |
| registration | string | User registration date in ISO 8601 format. |
| status | boolean | User status. Pass `true` for enabled and `false` for disabled. |
| passwordUpdate | string | Password update time in ISO 8601 format. |
| email | string | User email address. |
| phone | string | User phone number in E.164 format. |
| emailVerification | boolean | Email verification status. |
| phoneVerification | boolean | Phone verification status. |
| prefs | preferences | User preferences as a key-value object Can be one of: [Preferences model](/docs/references/1.3.x/models/preferences) |

## Example

### REST

```json
{}
```

### GraphQL

```json
{}
```

