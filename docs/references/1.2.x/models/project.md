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
| legalCountry | string | Country code in [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) two-character format. |
| legalState | string | State name. |
| legalCity | string | City name. |
| legalAddress | string | Company Address. |
| legalTaxId | string | Company Tax ID. |
| authDuration | integer | Session duration in seconds. |
| authLimit | integer | Max users allowed. 0 is unlimited. |
| authSessionsLimit | integer | Max sessions allowed per user. 100 maximum. |
| providers | array<provider> | List of Providers. Can be one of: [Provider model](/docs/references/1.2.x/models/provider) |
| platforms | array<platform> | List of Platforms. Can be one of: [Platform model](/docs/references/1.2.x/models/platform) |
| webhooks | array<webhook> | List of Webhooks. Can be one of: [Webhook model](/docs/references/1.2.x/models/webhook) |
| keys | array<key> | List of API Keys. Can be one of: [Key model](/docs/references/1.2.x/models/key) |
| domains | array<domain> | List of Domains. Can be one of: [Domain model](/docs/references/1.2.x/models/domain) |
| authEmailPassword | boolean | Email/Password auth method status |
| authUsersAuthMagicURL | boolean | Magic URL auth method status |
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

## Example

### REST

```json
{}
```

### GraphQL

```json
{}
```

