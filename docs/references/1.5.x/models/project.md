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
| oAuthProviders | array<authProvider> | List of Auth Providers. Can be one of: [AuthProvider model](/docs/references/1.5.x/models/authProvider) |
| platforms | array<platform> | List of Platforms. Can be one of: [Platform model](/docs/references/1.5.x/models/platform) |
| webhooks | array<webhook> | List of Webhooks. Can be one of: [Webhook model](/docs/references/1.5.x/models/webhook) |
| keys | array<key> | List of API Keys. Can be one of: [Key model](/docs/references/1.5.x/models/key) |
| smtpEnabled | boolean | Status for custom SMTP |
| smtpSenderName | string | SMTP sender name |
| smtpSenderEmail | string | SMTP sender email |
| smtpReplyTo | string | SMTP reply to email |
| smtpHost | string | SMTP server host name |
| smtpPort | integer | SMTP server port |
| smtpUsername | string | SMTP server username |
| smtpPassword | string | SMTP server password |
| smtpSecure | string | SMTP server secure protocol |
| authEmailPassword | boolean | Email/Password auth method status |
| authUsersAuthMagicURL | boolean | Magic URL auth method status |
| authEmailOtp | boolean | Email (OTP) auth method status |
| authAnonymous | boolean | Anonymous auth method status |
| authInvites | boolean | Invites auth method status |
| authJWT | boolean | JWT auth method status |
| authPhone | boolean | Phone auth method status |
| serviceStatusForAccount | boolean | Account service status |
| serviceStatusForAvatars | boolean | Avatars service status |
| serviceStatusForDatabases | boolean | Databases service status |
| serviceStatusForLocale | boolean | Locale service status |
| serviceStatusForHealth | boolean | Health service status |
| serviceStatusForStorage | boolean | Storage service status |
| serviceStatusForTeams | boolean | Teams service status |
| serviceStatusForUsers | boolean | Users service status |
| serviceStatusForFunctions | boolean | Functions service status |
| serviceStatusForGraphql | boolean | GraphQL service status |
| serviceStatusForMessaging | boolean | Messaging service status |

## Example

### REST

```json
{}
```

### GraphQL

```json
{}
```

