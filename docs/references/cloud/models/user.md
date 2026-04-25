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
| hashOptions | object | Password hashing algorithm configuration. Can be one of: [AlgoArgon2 model](/docs/references/cloud/models/algoArgon2), [AlgoScrypt model](/docs/references/cloud/models/algoScrypt), [AlgoScryptModified model](/docs/references/cloud/models/algoScryptModified), [AlgoBcrypt model](/docs/references/cloud/models/algoBcrypt), [AlgoPHPass model](/docs/references/cloud/models/algoPhpass), [AlgoSHA model](/docs/references/cloud/models/algoSha), [AlgoMD5 model](/docs/references/cloud/models/algoMd5) |
| registration | string | User registration date in ISO 8601 format. |
| status | boolean | User status. Pass `true` for enabled and `false` for disabled. |
| labels | array | Labels for the user. |
| passwordUpdate | string | Password update time in ISO 8601 format. |
| email | string | User email address. |
| phone | string | User phone number in E.164 format. |
| emailVerification | boolean | Email verification status. |
| phoneVerification | boolean | Phone verification status. |
| mfa | boolean | Multi factor authentication status. |
| prefs | preferences | User preferences as a key-value object Can be one of: [Preferences model](/docs/references/cloud/models/preferences) |
| targets | array<target> | A user-owned message receiver. A single user may have multiple e.g. emails, phones, and a browser. Each target is registered with a single provider. Can be one of: [Target model](/docs/references/cloud/models/target) |
| accessedAt | string | Most recent access date in ISO 8601 format. This attribute is only updated again after 24 hours. |

## Example

### REST

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "John Doe",
  "password": "$argon2id$v=19$m=2048,t=4,p=3$aUZjLnliVWRINmFNTWMudg$5S+x+7uA31xFnrHFT47yFwcJeaP0w92L/4LdgrVRXxE",
  "hash": "argon2",
  "hashOptions": {},
  "registration": "2020-10-15T06:38:00.000+00:00",
  "status": true,
  "labels": [
    "vip"
  ],
  "passwordUpdate": "2020-10-15T06:38:00.000+00:00",
  "email": "john@appwrite.io",
  "phone": "+4930901820",
  "emailVerification": true,
  "phoneVerification": true,
  "mfa": true,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  },
  "targets": [],
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "John Doe",
  "password": "$argon2id$v=19$m=2048,t=4,p=3$aUZjLnliVWRINmFNTWMudg$5S+x+7uA31xFnrHFT47yFwcJeaP0w92L/4LdgrVRXxE",
  "hash": "argon2",
  "hashOptions": {},
  "registration": "2020-10-15T06:38:00.000+00:00",
  "status": true,
  "labels": [
    "vip"
  ],
  "passwordUpdate": "2020-10-15T06:38:00.000+00:00",
  "email": "john@appwrite.io",
  "phone": "+4930901820",
  "emailVerification": true,
  "phoneVerification": true,
  "mfa": true,
  "prefs": {
    "theme": "pink",
    "timezone": "UTC"
  },
  "targets": [],
  "accessedAt": "2020-10-15T06:38:00.000+00:00"
}
```

