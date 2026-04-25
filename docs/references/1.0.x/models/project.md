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
| authLimit | integer | Max users allowed. 0 is unlimited. |
| platforms | array<platform> | List of Platforms. Can be one of: [Platform model](/docs/references/1.0.x/models/platform) |
| webhooks | array<webhook> | List of Webhooks. Can be one of: [Webhook model](/docs/references/1.0.x/models/webhook) |
| keys | array<key> | List of API Keys. Can be one of: [Key model](/docs/references/1.0.x/models/key) |
| domains | array<domain> | List of Domains. Can be one of: [Domain model](/docs/references/1.0.x/models/domain) |
| providerAmazonAppid | string | Amazon OAuth app ID. |
| providerAmazonSecret | string | Amazon OAuth secret ID. |
| providerAppleAppid | string | Apple OAuth app ID. |
| providerAppleSecret | string | Apple OAuth secret ID. |
| providerAuth0Appid | string | Auth0 OAuth app ID. |
| providerAuth0Secret | string | Auth0 OAuth secret ID. |
| providerAuthentikAppid | string | Authentik OAuth app ID. |
| providerAuthentikSecret | string | Authentik OAuth secret ID. |
| providerAutodeskAppid | string | Autodesk OAuth app ID. |
| providerAutodeskSecret | string | Autodesk OAuth secret ID. |
| providerBitbucketAppid | string | BitBucket OAuth app ID. |
| providerBitbucketSecret | string | BitBucket OAuth secret ID. |
| providerBitlyAppid | string | Bitly OAuth app ID. |
| providerBitlySecret | string | Bitly OAuth secret ID. |
| providerBoxAppid | string | Box OAuth app ID. |
| providerBoxSecret | string | Box OAuth secret ID. |
| providerDailymotionAppid | string | Dailymotion OAuth app ID. |
| providerDailymotionSecret | string | Dailymotion OAuth secret ID. |
| providerDiscordAppid | string | Discord OAuth app ID. |
| providerDiscordSecret | string | Discord OAuth secret ID. |
| providerDisqusAppid | string | Disqus OAuth app ID. |
| providerDisqusSecret | string | Disqus OAuth secret ID. |
| providerDropboxAppid | string | Dropbox OAuth app ID. |
| providerDropboxSecret | string | Dropbox OAuth secret ID. |
| providerEtsyAppid | string | Etsy OAuth app ID. |
| providerEtsySecret | string | Etsy OAuth secret ID. |
| providerFacebookAppid | string | Facebook OAuth app ID. |
| providerFacebookSecret | string | Facebook OAuth secret ID. |
| providerGithubAppid | string | GitHub OAuth app ID. |
| providerGithubSecret | string | GitHub OAuth secret ID. |
| providerGitlabAppid | string | GitLab OAuth app ID. |
| providerGitlabSecret | string | GitLab OAuth secret ID. |
| providerGoogleAppid | string | Google OAuth app ID. |
| providerGoogleSecret | string | Google OAuth secret ID. |
| providerLinkedinAppid | string | LinkedIn OAuth app ID. |
| providerLinkedinSecret | string | LinkedIn OAuth secret ID. |
| providerMicrosoftAppid | string | Microsoft OAuth app ID. |
| providerMicrosoftSecret | string | Microsoft OAuth secret ID. |
| providerNotionAppid | string | Notion OAuth app ID. |
| providerNotionSecret | string | Notion OAuth secret ID. |
| providerOktaAppid | string | Okta OAuth app ID. |
| providerOktaSecret | string | Okta OAuth secret ID. |
| providerPaypalAppid | string | PayPal OAuth app ID. |
| providerPaypalSecret | string | PayPal OAuth secret ID. |
| providerPaypalSandboxAppid | string | PayPal OAuth app ID. |
| providerPaypalSandboxSecret | string | PayPal OAuth secret ID. |
| providerPodioAppid | string | Podio OAuth app ID. |
| providerPodioSecret | string | Podio OAuth secret ID. |
| providerSalesforceAppid | string | Salesforce OAuth app ID. |
| providerSalesforceSecret | string | Salesforce OAuth secret ID. |
| providerSlackAppid | string | Slack OAuth app ID. |
| providerSlackSecret | string | Slack OAuth secret ID. |
| providerSpotifyAppid | string | Spotify OAuth app ID. |
| providerSpotifySecret | string | Spotify OAuth secret ID. |
| providerStripeAppid | string | Stripe OAuth app ID. |
| providerStripeSecret | string | Stripe OAuth secret ID. |
| providerTradeshiftAppid | string | Tradeshift OAuth app ID. |
| providerTradeshiftSecret | string | Tradeshift OAuth secret ID. |
| providerTradeshiftBoxAppid | string | Tradeshift OAuth app ID. |
| providerTradeshiftBoxSecret | string | Tradeshift OAuth secret ID. |
| providerTwitchAppid | string | Twitch OAuth app ID. |
| providerTwitchSecret | string | Twitch OAuth secret ID. |
| providerWordpressAppid | string | WordPress OAuth app ID. |
| providerWordpressSecret | string | WordPress OAuth secret ID. |
| providerYahooAppid | string | Yahoo OAuth app ID. |
| providerYahooSecret | string | Yahoo OAuth secret ID. |
| providerYammerAppid | string | Yammer OAuth app ID. |
| providerYammerSecret | string | Yammer OAuth secret ID. |
| providerYandexAppid | string | Yandex OAuth app ID. |
| providerYandexSecret | string | Yandex OAuth secret ID. |
| providerZoomAppid | string | Zoom OAuth app ID. |
| providerZoomSecret | string | Zoom OAuth secret ID. |
| providerMockAppid | string | Mock OAuth app ID. |
| providerMockSecret | string | Mock OAuth secret ID. |
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

## Example

### REST

```json
{}
```

### GraphQL

```json
{}
```

