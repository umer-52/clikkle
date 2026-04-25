# Project

Project

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Project ID. |
| $createdAt | string | Project creation date in ISO 8601 format. |
| $updatedAt | string | Project update date in ISO 8601 format. |
| name | string | Project name. |
| description | string | Project description. |
| teamId | string | Project team ID. |
| logo | string | Project logo file ID. |
| url | string | Project website URL. |
| legalName | string | Company legal name. |
| legalCountry | string | Country code in [ISO 3166-1](http://en.wikipedia.org/wiki/ISO_3166-1) two-character format. |
| legalState | string | State name. |
| legalCity | string | City name. |
| legalAddress | string | Company Address. |
| legalTaxId | string | Company Tax ID. |
| authDuration | integer | Session duration in seconds. |
| authLimit | integer | Max users allowed. 0 is unlimited. |
| authSessionsLimit | integer | Max sessions allowed per user. 100 maximum. |
| authPasswordHistory | integer | Max allowed passwords in the history list per user. Max passwords limit allowed in history is 20. Use 0 for disabling password history. |
| authPasswordDictionary | boolean | Whether or not to check user's password against most commonly used passwords. |
| authPersonalDataCheck | boolean | Whether or not to check the user password for similarity with their personal data. |
| authMockNumbers | array<mockNumber> | An array of mock numbers and their corresponding verification codes (OTPs). Can be one of: [Mock Number model](/docs/references/cloud/models/mockNumber) |
| authSessionAlerts | boolean | Whether or not to send session alert emails to users. |
| authMembershipsUserName | boolean | Whether or not to show user names in the teams membership response. |
| authMembershipsUserEmail | boolean | Whether or not to show user emails in the teams membership response. |
| authMembershipsMfa | boolean | Whether or not to show user MFA status in the teams membership response. |
| authInvalidateSessions | boolean | Whether or not all existing sessions should be invalidated on password change |
| oAuthProviders | array<authProvider> | List of Auth Providers. Can be one of: [AuthProvider model](/docs/references/cloud/models/authProvider) |
| platforms | array<platform> | List of Platforms. Can be one of: [Platform model](/docs/references/cloud/models/platform) |
| webhooks | array<webhook> | List of Webhooks. Can be one of: [Webhook model](/docs/references/cloud/models/webhook) |
| keys | array<key> | List of API Keys. Can be one of: [Key model](/docs/references/cloud/models/key) |
| devKeys | array<devKey> | List of dev keys. Can be one of: [DevKey model](/docs/references/cloud/models/devKey) |
| smtpEnabled | boolean | Status for custom SMTP |
| smtpSenderName | string | SMTP sender name |
| smtpSenderEmail | string | SMTP sender email |
| smtpReplyTo | string | SMTP reply to email |
| smtpHost | string | SMTP server host name |
| smtpPort | integer | SMTP server port |
| smtpUsername | string | SMTP server username |
| smtpPassword | string | SMTP server password |
| smtpSecure | string | SMTP server secure protocol |
| pingCount | integer | Number of times the ping was received for this project. |
| pingedAt | string | Last ping datetime in ISO 8601 format. |
| labels | array | Labels for the project. |
| status | string | Project status |
| authEmailPassword | boolean | Email/Password auth method status |
| authUsersAuthMagicURL | boolean | Magic URL auth method status |
| authEmailOtp | boolean | Email (OTP) auth method status |
| authAnonymous | boolean | Anonymous auth method status |
| authInvites | boolean | Invites auth method status |
| authJWT | boolean | JWT auth method status |
| authPhone | boolean | Phone auth method status |
| serviceStatusForAccount | boolean | Account service status |
| serviceStatusForAvatars | boolean | Avatars service status |
| serviceStatusForDatabases | boolean | Databases (legacy) service status |
| serviceStatusForTablesdb | boolean | TablesDB service status |
| serviceStatusForLocale | boolean | Locale service status |
| serviceStatusForHealth | boolean | Health service status |
| serviceStatusForStorage | boolean | Storage service status |
| serviceStatusForTeams | boolean | Teams service status |
| serviceStatusForUsers | boolean | Users service status |
| serviceStatusForSites | boolean | Sites service status |
| serviceStatusForFunctions | boolean | Functions service status |
| serviceStatusForGraphql | boolean | GraphQL service status |
| serviceStatusForMessaging | boolean | Messaging service status |
| region | string | Project region |
| billingLimits | billingLimits | Billing limits reached Can be one of: [BillingLimits model](/docs/references/cloud/models/billingLimits) |
| blocks | array<block> | Project blocks information Can be one of: [Block model](/docs/references/cloud/models/block) |

## Example

### REST

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "New Project",
  "description": "This is a new project.",
  "teamId": "1592981250",
  "logo": "5f5c451b403cb",
  "url": "5f5c451b403cb",
  "legalName": "Company LTD.",
  "legalCountry": "US",
  "legalState": "New York",
  "legalCity": "New York City.",
  "legalAddress": "620 Eighth Avenue, New York, NY 10018",
  "legalTaxId": "131102020",
  "authDuration": 60,
  "authLimit": 100,
  "authSessionsLimit": 10,
  "authPasswordHistory": 5,
  "authPasswordDictionary": true,
  "authPersonalDataCheck": true,
  "authMockNumbers": [
    {}
  ],
  "authSessionAlerts": true,
  "authMembershipsUserName": true,
  "authMembershipsUserEmail": true,
  "authMembershipsMfa": true,
  "authInvalidateSessions": true,
  "oAuthProviders": [
    {}
  ],
  "platforms": {},
  "webhooks": {},
  "keys": {},
  "devKeys": {},
  "smtpEnabled": false,
  "smtpSenderName": "John Appwrite",
  "smtpSenderEmail": "john@appwrite.io",
  "smtpReplyTo": "support@appwrite.io",
  "smtpHost": "mail.appwrite.io",
  "smtpPort": 25,
  "smtpUsername": "emailuser",
  "smtpPassword": "securepassword",
  "smtpSecure": "tls",
  "pingCount": 1,
  "pingedAt": "2020-10-15T06:38:00.000+00:00",
  "labels": [
    "vip"
  ],
  "status": "active",
  "authEmailPassword": true,
  "authUsersAuthMagicURL": true,
  "authEmailOtp": true,
  "authAnonymous": true,
  "authInvites": true,
  "authJWT": true,
  "authPhone": true,
  "serviceStatusForAccount": true,
  "serviceStatusForAvatars": true,
  "serviceStatusForDatabases": true,
  "serviceStatusForTablesdb": true,
  "serviceStatusForLocale": true,
  "serviceStatusForHealth": true,
  "serviceStatusForStorage": true,
  "serviceStatusForTeams": true,
  "serviceStatusForUsers": true,
  "serviceStatusForSites": true,
  "serviceStatusForFunctions": true,
  "serviceStatusForGraphql": true,
  "serviceStatusForMessaging": true,
  "region": "fra",
  "billingLimits": "",
  "blocks": ""
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "name": "New Project",
  "description": "This is a new project.",
  "teamId": "1592981250",
  "logo": "5f5c451b403cb",
  "url": "5f5c451b403cb",
  "legalName": "Company LTD.",
  "legalCountry": "US",
  "legalState": "New York",
  "legalCity": "New York City.",
  "legalAddress": "620 Eighth Avenue, New York, NY 10018",
  "legalTaxId": "131102020",
  "authDuration": 60,
  "authLimit": 100,
  "authSessionsLimit": 10,
  "authPasswordHistory": 5,
  "authPasswordDictionary": true,
  "authPersonalDataCheck": true,
  "authMockNumbers": [
    {}
  ],
  "authSessionAlerts": true,
  "authMembershipsUserName": true,
  "authMembershipsUserEmail": true,
  "authMembershipsMfa": true,
  "authInvalidateSessions": true,
  "oAuthProviders": [
    {}
  ],
  "platforms": {},
  "webhooks": {},
  "keys": {},
  "devKeys": {},
  "smtpEnabled": false,
  "smtpSenderName": "John Appwrite",
  "smtpSenderEmail": "john@appwrite.io",
  "smtpReplyTo": "support@appwrite.io",
  "smtpHost": "mail.appwrite.io",
  "smtpPort": 25,
  "smtpUsername": "emailuser",
  "smtpPassword": "securepassword",
  "smtpSecure": "tls",
  "pingCount": 1,
  "pingedAt": "2020-10-15T06:38:00.000+00:00",
  "labels": [
    "vip"
  ],
  "status": "active",
  "authEmailPassword": true,
  "authUsersAuthMagicURL": true,
  "authEmailOtp": true,
  "authAnonymous": true,
  "authInvites": true,
  "authJWT": true,
  "authPhone": true,
  "serviceStatusForAccount": true,
  "serviceStatusForAvatars": true,
  "serviceStatusForDatabases": true,
  "serviceStatusForTablesdb": true,
  "serviceStatusForLocale": true,
  "serviceStatusForHealth": true,
  "serviceStatusForStorage": true,
  "serviceStatusForTeams": true,
  "serviceStatusForUsers": true,
  "serviceStatusForSites": true,
  "serviceStatusForFunctions": true,
  "serviceStatusForGraphql": true,
  "serviceStatusForMessaging": true,
  "region": "fra",
  "billingLimits": "",
  "blocks": ""
}
```

