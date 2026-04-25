# messaging

Clikkle Messaging helps you communicate with your users through push notifications, emails, and SMS text messages.
Sending personalized communication for marketing, updates, and realtime alerts can increase user engagement and retention.
You can also use Clikkle Messaging to implement security checks and custom authentication flows.

You can find guides and examples on using the Messaging API in the Clikkle Messaging product pages.


## Base URL

```
https://<REGION>.cloud.appwrite.io/v1
```

## Endpoints

### providers

#### Create APNS provider

Create a new Apple Push Notification service provider.

**Endpoint:** `POST /messaging/providers/apns`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| providerId | string | Yes | Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| name | string | Yes | Provider name. |
| authKey | string | No | APNS authentication key. |
| authKeyId | string | No | APNS authentication key ID. |
| teamId | string | No | APNS team ID. |
| bundleId | string | No | APNS bundle ID. |
| sandbox | boolean | No | Use APNS sandbox environment. |
| enabled | boolean | No | Set as enabled. |

**Responses:**

- **201**: application/json
  - [Provider](/docs/references/cloud/models/provider)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.create_apns_provider(
    provider_id: '<PROVIDER_ID>',
    name: '<NAME>',
    auth_key: '<AUTH_KEY>', # optional
    auth_key_id: '<AUTH_KEY_ID>', # optional
    team_id: '<TEAM_ID>', # optional
    bundle_id: '<BUNDLE_ID>', # optional
    sandbox: false, # optional
    enabled: false # optional
)
```

---

#### Create FCM provider

Create a new Firebase Cloud Messaging provider.

**Endpoint:** `POST /messaging/providers/fcm`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| providerId | string | Yes | Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| name | string | Yes | Provider name. |
| serviceAccountJSON | object | No | FCM service account JSON. |
| enabled | boolean | No | Set as enabled. |

**Responses:**

- **201**: application/json
  - [Provider](/docs/references/cloud/models/provider)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.create_fcm_provider(
    provider_id: '<PROVIDER_ID>',
    name: '<NAME>',
    service_account_json: {}, # optional
    enabled: false # optional
)
```

---

#### Create Mailgun provider

Create a new Mailgun provider.

**Endpoint:** `POST /messaging/providers/mailgun`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| providerId | string | Yes | Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| name | string | Yes | Provider name. |
| apiKey | string | No | Mailgun API Key. |
| domain | string | No | Mailgun Domain. |
| isEuRegion | boolean | No | Set as EU region. |
| fromName | string | No | Sender Name. |
| fromEmail | string | No | Sender email address. |
| replyToName | string | No | Name set in the reply to field for the mail. Default value is sender name. Reply to name must have reply to email as well. |
| replyToEmail | string | No | Email set in the reply to field for the mail. Default value is sender email. Reply to email must have reply to name as well. |
| enabled | boolean | No | Set as enabled. |

**Responses:**

- **201**: application/json
  - [Provider](/docs/references/cloud/models/provider)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.create_mailgun_provider(
    provider_id: '<PROVIDER_ID>',
    name: '<NAME>',
    api_key: '<API_KEY>', # optional
    domain: '<DOMAIN>', # optional
    is_eu_region: false, # optional
    from_name: '<FROM_NAME>', # optional
    from_email: 'email@example.com', # optional
    reply_to_name: '<REPLY_TO_NAME>', # optional
    reply_to_email: 'email@example.com', # optional
    enabled: false # optional
)
```

---

#### Create Msg91 provider

Create a new MSG91 provider.

**Endpoint:** `POST /messaging/providers/msg91`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| providerId | string | Yes | Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| name | string | Yes | Provider name. |
| templateId | string | No | Msg91 template ID |
| senderId | string | No | Msg91 sender ID. |
| authKey | string | No | Msg91 auth key. |
| enabled | boolean | No | Set as enabled. |

**Responses:**

- **201**: application/json
  - [Provider](/docs/references/cloud/models/provider)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.create_msg91_provider(
    provider_id: '<PROVIDER_ID>',
    name: '<NAME>',
    template_id: '<TEMPLATE_ID>', # optional
    sender_id: '<SENDER_ID>', # optional
    auth_key: '<AUTH_KEY>', # optional
    enabled: false # optional
)
```

---

#### Create Resend provider

Create a new Resend provider.

**Endpoint:** `POST /messaging/providers/resend`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| providerId | string | Yes | Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| name | string | Yes | Provider name. |
| apiKey | string | No | Resend API key. |
| fromName | string | No | Sender Name. |
| fromEmail | string | No | Sender email address. |
| replyToName | string | No | Name set in the reply to field for the mail. Default value is sender name. |
| replyToEmail | string | No | Email set in the reply to field for the mail. Default value is sender email. |
| enabled | boolean | No | Set as enabled. |

**Responses:**

- **201**: application/json
  - [Provider](/docs/references/cloud/models/provider)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.create_resend_provider(
    provider_id: '<PROVIDER_ID>',
    name: '<NAME>',
    api_key: '<API_KEY>', # optional
    from_name: '<FROM_NAME>', # optional
    from_email: 'email@example.com', # optional
    reply_to_name: '<REPLY_TO_NAME>', # optional
    reply_to_email: 'email@example.com', # optional
    enabled: false # optional
)
```

---

#### Create Sendgrid provider

Create a new Sendgrid provider.

**Endpoint:** `POST /messaging/providers/sendgrid`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| providerId | string | Yes | Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| name | string | Yes | Provider name. |
| apiKey | string | No | Sendgrid API key. |
| fromName | string | No | Sender Name. |
| fromEmail | string | No | Sender email address. |
| replyToName | string | No | Name set in the reply to field for the mail. Default value is sender name. |
| replyToEmail | string | No | Email set in the reply to field for the mail. Default value is sender email. |
| enabled | boolean | No | Set as enabled. |

**Responses:**

- **201**: application/json
  - [Provider](/docs/references/cloud/models/provider)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.create_sendgrid_provider(
    provider_id: '<PROVIDER_ID>',
    name: '<NAME>',
    api_key: '<API_KEY>', # optional
    from_name: '<FROM_NAME>', # optional
    from_email: 'email@example.com', # optional
    reply_to_name: '<REPLY_TO_NAME>', # optional
    reply_to_email: 'email@example.com', # optional
    enabled: false # optional
)
```

---

#### Create SMTP provider

Create a new SMTP provider.

**Endpoint:** `POST /messaging/providers/smtp`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| providerId | string | Yes | Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| name | string | Yes | Provider name. |
| host | string | Yes | SMTP hosts. Either a single hostname or multiple semicolon-delimited hostnames. You can also specify a different port for each host such as `smtp1.example.com:25;smtp2.example.com`. You can also specify encryption type, for example: `tls://smtp1.example.com:587;ssl://smtp2.example.com:465"`. Hosts will be tried in order. |
| port | integer | No | The default SMTP server port. |
| username | string | No | Authentication username. |
| password | string | No | Authentication password. |
| encryption | string | No | Encryption type. Can be omitted, 'ssl', or 'tls' |
| autoTLS | boolean | No | Enable SMTP AutoTLS feature. |
| mailer | string | No | The value to use for the X-Mailer header. |
| fromName | string | No | Sender Name. |
| fromEmail | string | No | Sender email address. |
| replyToName | string | No | Name set in the reply to field for the mail. Default value is sender name. |
| replyToEmail | string | No | Email set in the reply to field for the mail. Default value is sender email. |
| enabled | boolean | No | Set as enabled. |

**Responses:**

- **201**: application/json
  - [Provider](/docs/references/cloud/models/provider)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite
include Appwrite::Enums

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.create_smtp_provider(
    provider_id: '<PROVIDER_ID>',
    name: '<NAME>',
    host: '<HOST>',
    port: 1, # optional
    username: '<USERNAME>', # optional
    password: '<PASSWORD>', # optional
    encryption: SmtpEncryption::NONE, # optional
    auto_tls: false, # optional
    mailer: '<MAILER>', # optional
    from_name: '<FROM_NAME>', # optional
    from_email: 'email@example.com', # optional
    reply_to_name: '<REPLY_TO_NAME>', # optional
    reply_to_email: 'email@example.com', # optional
    enabled: false # optional
)
```

---

#### Create Telesign provider

Create a new Telesign provider.

**Endpoint:** `POST /messaging/providers/telesign`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| providerId | string | Yes | Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| name | string | Yes | Provider name. |
| from | string | No | Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212. |
| customerId | string | No | Telesign customer ID. |
| apiKey | string | No | Telesign API key. |
| enabled | boolean | No | Set as enabled. |

**Responses:**

- **201**: application/json
  - [Provider](/docs/references/cloud/models/provider)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.create_telesign_provider(
    provider_id: '<PROVIDER_ID>',
    name: '<NAME>',
    from: '+12065550100', # optional
    customer_id: '<CUSTOMER_ID>', # optional
    api_key: '<API_KEY>', # optional
    enabled: false # optional
)
```

---

#### Create Textmagic provider

Create a new Textmagic provider.

**Endpoint:** `POST /messaging/providers/textmagic`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| providerId | string | Yes | Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| name | string | Yes | Provider name. |
| from | string | No | Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212. |
| username | string | No | Textmagic username. |
| apiKey | string | No | Textmagic apiKey. |
| enabled | boolean | No | Set as enabled. |

**Responses:**

- **201**: application/json
  - [Provider](/docs/references/cloud/models/provider)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.create_textmagic_provider(
    provider_id: '<PROVIDER_ID>',
    name: '<NAME>',
    from: '+12065550100', # optional
    username: '<USERNAME>', # optional
    api_key: '<API_KEY>', # optional
    enabled: false # optional
)
```

---

#### Create Twilio provider

Create a new Twilio provider.

**Endpoint:** `POST /messaging/providers/twilio`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| providerId | string | Yes | Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| name | string | Yes | Provider name. |
| from | string | No | Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212. |
| accountSid | string | No | Twilio account secret ID. |
| authToken | string | No | Twilio authentication token. |
| enabled | boolean | No | Set as enabled. |

**Responses:**

- **201**: application/json
  - [Provider](/docs/references/cloud/models/provider)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.create_twilio_provider(
    provider_id: '<PROVIDER_ID>',
    name: '<NAME>',
    from: '+12065550100', # optional
    account_sid: '<ACCOUNT_SID>', # optional
    auth_token: '<AUTH_TOKEN>', # optional
    enabled: false # optional
)
```

---

#### Create Vonage provider

Create a new Vonage provider.

**Endpoint:** `POST /messaging/providers/vonage`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| providerId | string | Yes | Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| name | string | Yes | Provider name. |
| from | string | No | Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212. |
| apiKey | string | No | Vonage API key. |
| apiSecret | string | No | Vonage API secret. |
| enabled | boolean | No | Set as enabled. |

**Responses:**

- **201**: application/json
  - [Provider](/docs/references/cloud/models/provider)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.create_vonage_provider(
    provider_id: '<PROVIDER_ID>',
    name: '<NAME>',
    from: '+12065550100', # optional
    api_key: '<API_KEY>', # optional
    api_secret: '<API_SECRET>', # optional
    enabled: false # optional
)
```

---

#### Get provider

Get a provider by its unique ID.


**Endpoint:** `GET /messaging/providers/{providerId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| providerId | string | Yes | Provider ID. |

**Responses:**

- **200**: application/json
  - [Provider](/docs/references/cloud/models/provider)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.get_provider(
    provider_id: '<PROVIDER_ID>'
)
```

---

#### List provider logs

Get the provider activity logs listed by its unique ID.

**Endpoint:** `GET /messaging/providers/{providerId}/logs`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| providerId | string | Yes | Provider ID. |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset |
| total | boolean | No | When set to false, the total count returned will be 0 and will not be calculated. |

**Responses:**

- **200**: application/json
  - [Logs List](/docs/references/cloud/models/logList)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.list_provider_logs(
    provider_id: '<PROVIDER_ID>',
    queries: [], # optional
    total: false # optional
)
```

---

#### List providers

Get a list of all providers from the current Appwrite project.

**Endpoint:** `GET /messaging/providers`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, provider, type, enabled |
| search | string | No | Search term to filter your list results. Max length: 256 chars. |
| total | boolean | No | When set to false, the total count returned will be 0 and will not be calculated. |

**Responses:**

- **200**: application/json
  - [Provider list](/docs/references/cloud/models/providerList)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.list_providers(
    queries: [], # optional
    search: '<SEARCH>', # optional
    total: false # optional
)
```

---

#### Update APNS provider

Update a Apple Push Notification service provider by its unique ID.

**Endpoint:** `PATCH /messaging/providers/apns/{providerId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| providerId | string | Yes | Provider ID. |
| name | string | No | Provider name. |
| enabled | boolean | No | Set as enabled. |
| authKey | string | No | APNS authentication key. |
| authKeyId | string | No | APNS authentication key ID. |
| teamId | string | No | APNS team ID. |
| bundleId | string | No | APNS bundle ID. |
| sandbox | boolean | No | Use APNS sandbox environment. |

**Responses:**

- **200**: application/json
  - [Provider](/docs/references/cloud/models/provider)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.update_apns_provider(
    provider_id: '<PROVIDER_ID>',
    name: '<NAME>', # optional
    enabled: false, # optional
    auth_key: '<AUTH_KEY>', # optional
    auth_key_id: '<AUTH_KEY_ID>', # optional
    team_id: '<TEAM_ID>', # optional
    bundle_id: '<BUNDLE_ID>', # optional
    sandbox: false # optional
)
```

---

#### Update FCM provider

Update a Firebase Cloud Messaging provider by its unique ID.

**Endpoint:** `PATCH /messaging/providers/fcm/{providerId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| providerId | string | Yes | Provider ID. |
| name | string | No | Provider name. |
| enabled | boolean | No | Set as enabled. |
| serviceAccountJSON | object | No | FCM service account JSON. |

**Responses:**

- **200**: application/json
  - [Provider](/docs/references/cloud/models/provider)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.update_fcm_provider(
    provider_id: '<PROVIDER_ID>',
    name: '<NAME>', # optional
    enabled: false, # optional
    service_account_json: {} # optional
)
```

---

#### Update Mailgun provider

Update a Mailgun provider by its unique ID.

**Endpoint:** `PATCH /messaging/providers/mailgun/{providerId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| providerId | string | Yes | Provider ID. |
| name | string | No | Provider name. |
| apiKey | string | No | Mailgun API Key. |
| domain | string | No | Mailgun Domain. |
| isEuRegion | boolean | No | Set as EU region. |
| enabled | boolean | No | Set as enabled. |
| fromName | string | No | Sender Name. |
| fromEmail | string | No | Sender email address. |
| replyToName | string | No | Name set in the reply to field for the mail. Default value is sender name. |
| replyToEmail | string | No | Email set in the reply to field for the mail. Default value is sender email. |

**Responses:**

- **200**: application/json
  - [Provider](/docs/references/cloud/models/provider)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.update_mailgun_provider(
    provider_id: '<PROVIDER_ID>',
    name: '<NAME>', # optional
    api_key: '<API_KEY>', # optional
    domain: '<DOMAIN>', # optional
    is_eu_region: false, # optional
    enabled: false, # optional
    from_name: '<FROM_NAME>', # optional
    from_email: 'email@example.com', # optional
    reply_to_name: '<REPLY_TO_NAME>', # optional
    reply_to_email: '<REPLY_TO_EMAIL>' # optional
)
```

---

#### Update Msg91 provider

Update a MSG91 provider by its unique ID.

**Endpoint:** `PATCH /messaging/providers/msg91/{providerId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| providerId | string | Yes | Provider ID. |
| name | string | No | Provider name. |
| enabled | boolean | No | Set as enabled. |
| templateId | string | No | Msg91 template ID. |
| senderId | string | No | Msg91 sender ID. |
| authKey | string | No | Msg91 auth key. |

**Responses:**

- **200**: application/json
  - [Provider](/docs/references/cloud/models/provider)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.update_msg91_provider(
    provider_id: '<PROVIDER_ID>',
    name: '<NAME>', # optional
    enabled: false, # optional
    template_id: '<TEMPLATE_ID>', # optional
    sender_id: '<SENDER_ID>', # optional
    auth_key: '<AUTH_KEY>' # optional
)
```

---

#### Update Resend provider

Update a Resend provider by its unique ID.

**Endpoint:** `PATCH /messaging/providers/resend/{providerId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| providerId | string | Yes | Provider ID. |
| name | string | No | Provider name. |
| enabled | boolean | No | Set as enabled. |
| apiKey | string | No | Resend API key. |
| fromName | string | No | Sender Name. |
| fromEmail | string | No | Sender email address. |
| replyToName | string | No | Name set in the Reply To field for the mail. Default value is Sender Name. |
| replyToEmail | string | No | Email set in the Reply To field for the mail. Default value is Sender Email. |

**Responses:**

- **200**: application/json
  - [Provider](/docs/references/cloud/models/provider)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.update_resend_provider(
    provider_id: '<PROVIDER_ID>',
    name: '<NAME>', # optional
    enabled: false, # optional
    api_key: '<API_KEY>', # optional
    from_name: '<FROM_NAME>', # optional
    from_email: 'email@example.com', # optional
    reply_to_name: '<REPLY_TO_NAME>', # optional
    reply_to_email: '<REPLY_TO_EMAIL>' # optional
)
```

---

#### Update Sendgrid provider

Update a Sendgrid provider by its unique ID.

**Endpoint:** `PATCH /messaging/providers/sendgrid/{providerId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| providerId | string | Yes | Provider ID. |
| name | string | No | Provider name. |
| enabled | boolean | No | Set as enabled. |
| apiKey | string | No | Sendgrid API key. |
| fromName | string | No | Sender Name. |
| fromEmail | string | No | Sender email address. |
| replyToName | string | No | Name set in the Reply To field for the mail. Default value is Sender Name. |
| replyToEmail | string | No | Email set in the Reply To field for the mail. Default value is Sender Email. |

**Responses:**

- **200**: application/json
  - [Provider](/docs/references/cloud/models/provider)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.update_sendgrid_provider(
    provider_id: '<PROVIDER_ID>',
    name: '<NAME>', # optional
    enabled: false, # optional
    api_key: '<API_KEY>', # optional
    from_name: '<FROM_NAME>', # optional
    from_email: 'email@example.com', # optional
    reply_to_name: '<REPLY_TO_NAME>', # optional
    reply_to_email: '<REPLY_TO_EMAIL>' # optional
)
```

---

#### Update SMTP provider

Update a SMTP provider by its unique ID.

**Endpoint:** `PATCH /messaging/providers/smtp/{providerId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| providerId | string | Yes | Provider ID. |
| name | string | No | Provider name. |
| host | string | No | SMTP hosts. Either a single hostname or multiple semicolon-delimited hostnames. You can also specify a different port for each host such as `smtp1.example.com:25;smtp2.example.com`. You can also specify encryption type, for example: `tls://smtp1.example.com:587;ssl://smtp2.example.com:465"`. Hosts will be tried in order. |
| port | integer | No | SMTP port. |
| username | string | No | Authentication username. |
| password | string | No | Authentication password. |
| encryption | string | No | Encryption type. Can be 'ssl' or 'tls' |
| autoTLS | boolean | No | Enable SMTP AutoTLS feature. |
| mailer | string | No | The value to use for the X-Mailer header. |
| fromName | string | No | Sender Name. |
| fromEmail | string | No | Sender email address. |
| replyToName | string | No | Name set in the Reply To field for the mail. Default value is Sender Name. |
| replyToEmail | string | No | Email set in the Reply To field for the mail. Default value is Sender Email. |
| enabled | boolean | No | Set as enabled. |

**Responses:**

- **200**: application/json
  - [Provider](/docs/references/cloud/models/provider)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite
include Appwrite::Enums

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.update_smtp_provider(
    provider_id: '<PROVIDER_ID>',
    name: '<NAME>', # optional
    host: '<HOST>', # optional
    port: 1, # optional
    username: '<USERNAME>', # optional
    password: '<PASSWORD>', # optional
    encryption: SmtpEncryption::NONE, # optional
    auto_tls: false, # optional
    mailer: '<MAILER>', # optional
    from_name: '<FROM_NAME>', # optional
    from_email: 'email@example.com', # optional
    reply_to_name: '<REPLY_TO_NAME>', # optional
    reply_to_email: '<REPLY_TO_EMAIL>', # optional
    enabled: false # optional
)
```

---

#### Update Telesign provider

Update a Telesign provider by its unique ID.

**Endpoint:** `PATCH /messaging/providers/telesign/{providerId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| providerId | string | Yes | Provider ID. |
| name | string | No | Provider name. |
| enabled | boolean | No | Set as enabled. |
| customerId | string | No | Telesign customer ID. |
| apiKey | string | No | Telesign API key. |
| from | string | No | Sender number. |

**Responses:**

- **200**: application/json
  - [Provider](/docs/references/cloud/models/provider)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.update_telesign_provider(
    provider_id: '<PROVIDER_ID>',
    name: '<NAME>', # optional
    enabled: false, # optional
    customer_id: '<CUSTOMER_ID>', # optional
    api_key: '<API_KEY>', # optional
    from: '<FROM>' # optional
)
```

---

#### Update Textmagic provider

Update a Textmagic provider by its unique ID.

**Endpoint:** `PATCH /messaging/providers/textmagic/{providerId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| providerId | string | Yes | Provider ID. |
| name | string | No | Provider name. |
| enabled | boolean | No | Set as enabled. |
| username | string | No | Textmagic username. |
| apiKey | string | No | Textmagic apiKey. |
| from | string | No | Sender number. |

**Responses:**

- **200**: application/json
  - [Provider](/docs/references/cloud/models/provider)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.update_textmagic_provider(
    provider_id: '<PROVIDER_ID>',
    name: '<NAME>', # optional
    enabled: false, # optional
    username: '<USERNAME>', # optional
    api_key: '<API_KEY>', # optional
    from: '<FROM>' # optional
)
```

---

#### Update Twilio provider

Update a Twilio provider by its unique ID.

**Endpoint:** `PATCH /messaging/providers/twilio/{providerId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| providerId | string | Yes | Provider ID. |
| name | string | No | Provider name. |
| enabled | boolean | No | Set as enabled. |
| accountSid | string | No | Twilio account secret ID. |
| authToken | string | No | Twilio authentication token. |
| from | string | No | Sender number. |

**Responses:**

- **200**: application/json
  - [Provider](/docs/references/cloud/models/provider)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.update_twilio_provider(
    provider_id: '<PROVIDER_ID>',
    name: '<NAME>', # optional
    enabled: false, # optional
    account_sid: '<ACCOUNT_SID>', # optional
    auth_token: '<AUTH_TOKEN>', # optional
    from: '<FROM>' # optional
)
```

---

#### Update Vonage provider

Update a Vonage provider by its unique ID.

**Endpoint:** `PATCH /messaging/providers/vonage/{providerId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| providerId | string | Yes | Provider ID. |
| name | string | No | Provider name. |
| enabled | boolean | No | Set as enabled. |
| apiKey | string | No | Vonage API key. |
| apiSecret | string | No | Vonage API secret. |
| from | string | No | Sender number. |

**Responses:**

- **200**: application/json
  - [Provider](/docs/references/cloud/models/provider)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.update_vonage_provider(
    provider_id: '<PROVIDER_ID>',
    name: '<NAME>', # optional
    enabled: false, # optional
    api_key: '<API_KEY>', # optional
    api_secret: '<API_SECRET>', # optional
    from: '<FROM>' # optional
)
```

---

#### Delete provider

Delete a provider by its unique ID.

**Endpoint:** `DELETE /messaging/providers/{providerId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| providerId | string | Yes | Provider ID. |

**Responses:**

- **204**: no content

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.delete_provider(
    provider_id: '<PROVIDER_ID>'
)
```

---

### topics

#### Create topic

Create a new topic.

**Endpoint:** `POST /messaging/topics`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| topicId | string | Yes | Topic ID. Choose a custom Topic ID or a new Topic ID. |
| name | string | Yes | Topic Name. |
| subscribe | array | No | An array of role strings with subscribe permission. By default all users are granted with any subscribe permission. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long. |

**Responses:**

- **201**: application/json
  - [Topic](/docs/references/cloud/models/topic)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.create_topic(
    topic_id: '<TOPIC_ID>',
    name: '<NAME>',
    subscribe: ["any"] # optional
)
```

---

#### Get topic

Get a topic by its unique ID.


**Endpoint:** `GET /messaging/topics/{topicId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| topicId | string | Yes | Topic ID. |

**Responses:**

- **200**: application/json
  - [Topic](/docs/references/cloud/models/topic)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.get_topic(
    topic_id: '<TOPIC_ID>'
)
```

---

#### List topic logs

Get the topic activity logs listed by its unique ID.

**Endpoint:** `GET /messaging/topics/{topicId}/logs`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| topicId | string | Yes | Topic ID. |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset |
| total | boolean | No | When set to false, the total count returned will be 0 and will not be calculated. |

**Responses:**

- **200**: application/json
  - [Logs List](/docs/references/cloud/models/logList)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.list_topic_logs(
    topic_id: '<TOPIC_ID>',
    queries: [], # optional
    total: false # optional
)
```

---

#### List topics

Get a list of all topics from the current Appwrite project.

**Endpoint:** `GET /messaging/topics`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, description, emailTotal, smsTotal, pushTotal |
| search | string | No | Search term to filter your list results. Max length: 256 chars. |
| total | boolean | No | When set to false, the total count returned will be 0 and will not be calculated. |

**Responses:**

- **200**: application/json
  - [Topic list](/docs/references/cloud/models/topicList)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.list_topics(
    queries: [], # optional
    search: '<SEARCH>', # optional
    total: false # optional
)
```

---

#### Update topic

Update a topic by its unique ID.


**Endpoint:** `PATCH /messaging/topics/{topicId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| topicId | string | Yes | Topic ID. |
| name | string | No | Topic Name. |
| subscribe | array | No | An array of role strings with subscribe permission. By default all users are granted with any subscribe permission. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long. |

**Responses:**

- **200**: application/json
  - [Topic](/docs/references/cloud/models/topic)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.update_topic(
    topic_id: '<TOPIC_ID>',
    name: '<NAME>', # optional
    subscribe: ["any"] # optional
)
```

---

#### Delete topic

Delete a topic by its unique ID.

**Endpoint:** `DELETE /messaging/topics/{topicId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| topicId | string | Yes | Topic ID. |

**Responses:**

- **204**: no content

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.delete_topic(
    topic_id: '<TOPIC_ID>'
)
```

---

### subscribers

#### Create subscriber

Create a new subscriber.

**Endpoint:** `POST /messaging/topics/{topicId}/subscribers`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| topicId | string | Yes | Topic ID. The topic ID to subscribe to. |
| subscriberId | string | Yes | Subscriber ID. Choose a custom Subscriber ID or a new Subscriber ID. |
| targetId | string | Yes | Target ID. The target ID to link to the specified Topic ID. |

**Responses:**

- **201**: application/json
  - [Subscriber](/docs/references/cloud/models/subscriber)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_jwt('<YOUR_JWT>') # Your secret JSON Web Token

messaging = Messaging.new(client)

result = messaging.create_subscriber(
    topic_id: '<TOPIC_ID>',
    subscriber_id: '<SUBSCRIBER_ID>',
    target_id: '<TARGET_ID>'
)
```

---

#### Get subscriber

Get a subscriber by its unique ID.


**Endpoint:** `GET /messaging/topics/{topicId}/subscribers/{subscriberId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| topicId | string | Yes | Topic ID. The topic ID subscribed to. |
| subscriberId | string | Yes | Subscriber ID. |

**Responses:**

- **200**: application/json
  - [Subscriber](/docs/references/cloud/models/subscriber)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.get_subscriber(
    topic_id: '<TOPIC_ID>',
    subscriber_id: '<SUBSCRIBER_ID>'
)
```

---

#### List subscriber logs

Get the subscriber activity logs listed by its unique ID.

**Endpoint:** `GET /messaging/subscribers/{subscriberId}/logs`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| subscriberId | string | Yes | Subscriber ID. |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset |
| total | boolean | No | When set to false, the total count returned will be 0 and will not be calculated. |

**Responses:**

- **200**: application/json
  - [Logs List](/docs/references/cloud/models/logList)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.list_subscriber_logs(
    subscriber_id: '<SUBSCRIBER_ID>',
    queries: [], # optional
    total: false # optional
)
```

---

#### List subscribers

Get a list of all subscribers from the current Appwrite project.

**Endpoint:** `GET /messaging/topics/{topicId}/subscribers`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| topicId | string | Yes | Topic ID. The topic ID subscribed to. |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, provider, type, enabled |
| search | string | No | Search term to filter your list results. Max length: 256 chars. |
| total | boolean | No | When set to false, the total count returned will be 0 and will not be calculated. |

**Responses:**

- **200**: application/json
  - [Subscriber list](/docs/references/cloud/models/subscriberList)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.list_subscribers(
    topic_id: '<TOPIC_ID>',
    queries: [], # optional
    search: '<SEARCH>', # optional
    total: false # optional
)
```

---

#### Delete subscriber

Delete a subscriber by its unique ID.

**Endpoint:** `DELETE /messaging/topics/{topicId}/subscribers/{subscriberId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| topicId | string | Yes | Topic ID. The topic ID subscribed to. |
| subscriberId | string | Yes | Subscriber ID. |

**Responses:**

- **204**: no content

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_jwt('<YOUR_JWT>') # Your secret JSON Web Token

messaging = Messaging.new(client)

result = messaging.delete_subscriber(
    topic_id: '<TOPIC_ID>',
    subscriber_id: '<SUBSCRIBER_ID>'
)
```

---

### messages

#### Create email

Create a new email message.

**Endpoint:** `POST /messaging/messages/email`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| messageId | string | Yes | Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| subject | string | Yes | Email Subject. |
| content | string | Yes | Email Content. |
| topics | array | No | List of Topic IDs. |
| users | array | No | List of User IDs. |
| targets | array | No | List of Targets IDs. |
| cc | array | No | Array of target IDs to be added as CC. |
| bcc | array | No | Array of target IDs to be added as BCC. |
| attachments | array | No | Array of compound ID strings of bucket IDs and file IDs to be attached to the email. They should be formatted as <BUCKET_ID>:<FILE_ID>. |
| draft | boolean | No | Is message a draft |
| html | boolean | No | Is content of type HTML |
| scheduledAt | string | No | Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future. |

**Responses:**

- **201**: application/json
  - [Message](/docs/references/cloud/models/message)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.create_email(
    message_id: '<MESSAGE_ID>',
    subject: '<SUBJECT>',
    content: '<CONTENT>',
    topics: [], # optional
    users: [], # optional
    targets: [], # optional
    cc: [], # optional
    bcc: [], # optional
    attachments: [], # optional
    draft: false, # optional
    html: false, # optional
    scheduled_at: '' # optional
)
```

---

#### Create push notification

Create a new push notification.

**Endpoint:** `POST /messaging/messages/push`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| messageId | string | Yes | Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| title | string | No | Title for push notification. |
| body | string | No | Body for push notification. |
| topics | array | No | List of Topic IDs. |
| users | array | No | List of User IDs. |
| targets | array | No | List of Targets IDs. |
| data | object | No | Additional key-value pair data for push notification. |
| action | string | No | Action for push notification. |
| image | string | No | Image for push notification. Must be a compound bucket ID to file ID of a jpeg, png, or bmp image in Appwrite Storage. It should be formatted as <BUCKET_ID>:<FILE_ID>. |
| icon | string | No | Icon for push notification. Available only for Android and Web Platform. |
| sound | string | No | Sound for push notification. Available only for Android and iOS Platform. |
| color | string | No | Color for push notification. Available only for Android Platform. |
| tag | string | No | Tag for push notification. Available only for Android Platform. |
| badge | integer | No | Badge for push notification. Available only for iOS Platform. |
| draft | boolean | No | Is message a draft |
| scheduledAt | string | No | Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future. |
| contentAvailable | boolean | No | If set to true, the notification will be delivered in the background. Available only for iOS Platform. |
| critical | boolean | No | If set to true, the notification will be marked as critical. This requires the app to have the critical notification entitlement. Available only for iOS Platform. |
| priority | string | No | Set the notification priority. "normal" will consider device state and may not deliver notifications immediately. "high" will always attempt to immediately deliver the notification. |

**Responses:**

- **201**: application/json
  - [Message](/docs/references/cloud/models/message)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite
include Appwrite::Enums

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.create_push(
    message_id: '<MESSAGE_ID>',
    title: '<TITLE>', # optional
    body: '<BODY>', # optional
    topics: [], # optional
    users: [], # optional
    targets: [], # optional
    data: {}, # optional
    action: '<ACTION>', # optional
    image: '<ID1:ID2>', # optional
    icon: '<ICON>', # optional
    sound: '<SOUND>', # optional
    color: '<COLOR>', # optional
    tag: '<TAG>', # optional
    badge: null, # optional
    draft: false, # optional
    scheduled_at: '', # optional
    content_available: false, # optional
    critical: false, # optional
    priority: MessagePriority::NORMAL # optional
)
```

---

#### Create SMS

Create a new SMS message.

**Endpoint:** `POST /messaging/messages/sms`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| messageId | string | Yes | Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| content | string | Yes | SMS Content. |
| topics | array | No | List of Topic IDs. |
| users | array | No | List of User IDs. |
| targets | array | No | List of Targets IDs. |
| draft | boolean | No | Is message a draft |
| scheduledAt | string | No | Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future. |

**Responses:**

- **201**: application/json
  - [Message](/docs/references/cloud/models/message)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.create_sms(
    message_id: '<MESSAGE_ID>',
    content: '<CONTENT>',
    topics: [], # optional
    users: [], # optional
    targets: [], # optional
    draft: false, # optional
    scheduled_at: '' # optional
)
```

---

#### Get message

Get a message by its unique ID.


**Endpoint:** `GET /messaging/messages/{messageId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| messageId | string | Yes | Message ID. |

**Responses:**

- **200**: application/json
  - [Message](/docs/references/cloud/models/message)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.get_message(
    message_id: '<MESSAGE_ID>'
)
```

---

#### List message targets

Get a list of the targets associated with a message.

**Endpoint:** `GET /messaging/messages/{messageId}/targets`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| messageId | string | Yes | Message ID. |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, providerId, identifier, providerType |
| total | boolean | No | When set to false, the total count returned will be 0 and will not be calculated. |

**Responses:**

- **200**: application/json
  - [Target list](/docs/references/cloud/models/targetList)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.list_targets(
    message_id: '<MESSAGE_ID>',
    queries: [], # optional
    total: false # optional
)
```

---

#### List messages

Get a list of all messages from the current Appwrite project.

**Endpoint:** `GET /messaging/messages`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: scheduledAt, deliveredAt, deliveredTotal, status, description, providerType |
| search | string | No | Search term to filter your list results. Max length: 256 chars. |
| total | boolean | No | When set to false, the total count returned will be 0 and will not be calculated. |

**Responses:**

- **200**: application/json
  - [Message list](/docs/references/cloud/models/messageList)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.list_messages(
    queries: [], # optional
    search: '<SEARCH>', # optional
    total: false # optional
)
```

---

#### Update email

Update an email message by its unique ID. This endpoint only works on messages that are in draft status. Messages that are already processing, sent, or failed cannot be updated.


**Endpoint:** `PATCH /messaging/messages/email/{messageId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| messageId | string | Yes | Message ID. |
| topics | array | No | List of Topic IDs. |
| users | array | No | List of User IDs. |
| targets | array | No | List of Targets IDs. |
| subject | string | No | Email Subject. |
| content | string | No | Email Content. |
| draft | boolean | No | Is message a draft |
| html | boolean | No | Is content of type HTML |
| cc | array | No | Array of target IDs to be added as CC. |
| bcc | array | No | Array of target IDs to be added as BCC. |
| scheduledAt | string | No | Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future. |
| attachments | array | No | Array of compound ID strings of bucket IDs and file IDs to be attached to the email. They should be formatted as <BUCKET_ID>:<FILE_ID>. |

**Responses:**

- **200**: application/json
  - [Message](/docs/references/cloud/models/message)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.update_email(
    message_id: '<MESSAGE_ID>',
    topics: [], # optional
    users: [], # optional
    targets: [], # optional
    subject: '<SUBJECT>', # optional
    content: '<CONTENT>', # optional
    draft: false, # optional
    html: false, # optional
    cc: [], # optional
    bcc: [], # optional
    scheduled_at: '', # optional
    attachments: [] # optional
)
```

---

#### Update push notification

Update a push notification by its unique ID. This endpoint only works on messages that are in draft status. Messages that are already processing, sent, or failed cannot be updated.


**Endpoint:** `PATCH /messaging/messages/push/{messageId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| messageId | string | Yes | Message ID. |
| topics | array | No | List of Topic IDs. |
| users | array | No | List of User IDs. |
| targets | array | No | List of Targets IDs. |
| title | string | No | Title for push notification. |
| body | string | No | Body for push notification. |
| data | object | No | Additional Data for push notification. |
| action | string | No | Action for push notification. |
| image | string | No | Image for push notification. Must be a compound bucket ID to file ID of a jpeg, png, or bmp image in Appwrite Storage. It should be formatted as <BUCKET_ID>:<FILE_ID>. |
| icon | string | No | Icon for push notification. Available only for Android and Web platforms. |
| sound | string | No | Sound for push notification. Available only for Android and iOS platforms. |
| color | string | No | Color for push notification. Available only for Android platforms. |
| tag | string | No | Tag for push notification. Available only for Android platforms. |
| badge | integer | No | Badge for push notification. Available only for iOS platforms. |
| draft | boolean | No | Is message a draft |
| scheduledAt | string | No | Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future. |
| contentAvailable | boolean | No | If set to true, the notification will be delivered in the background. Available only for iOS Platform. |
| critical | boolean | No | If set to true, the notification will be marked as critical. This requires the app to have the critical notification entitlement. Available only for iOS Platform. |
| priority | string | No | Set the notification priority. "normal" will consider device battery state and may send notifications later. "high" will always attempt to immediately deliver the notification. |

**Responses:**

- **200**: application/json
  - [Message](/docs/references/cloud/models/message)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite
include Appwrite::Enums

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.update_push(
    message_id: '<MESSAGE_ID>',
    topics: [], # optional
    users: [], # optional
    targets: [], # optional
    title: '<TITLE>', # optional
    body: '<BODY>', # optional
    data: {}, # optional
    action: '<ACTION>', # optional
    image: '<ID1:ID2>', # optional
    icon: '<ICON>', # optional
    sound: '<SOUND>', # optional
    color: '<COLOR>', # optional
    tag: '<TAG>', # optional
    badge: null, # optional
    draft: false, # optional
    scheduled_at: '', # optional
    content_available: false, # optional
    critical: false, # optional
    priority: MessagePriority::NORMAL # optional
)
```

---

#### Update SMS

Update an SMS message by its unique ID. This endpoint only works on messages that are in draft status. Messages that are already processing, sent, or failed cannot be updated.


**Endpoint:** `PATCH /messaging/messages/sms/{messageId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| messageId | string | Yes | Message ID. |
| topics | array | No | List of Topic IDs. |
| users | array | No | List of User IDs. |
| targets | array | No | List of Targets IDs. |
| content | string | No | Email Content. |
| draft | boolean | No | Is message a draft |
| scheduledAt | string | No | Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future. |

**Responses:**

- **200**: application/json
  - [Message](/docs/references/cloud/models/message)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.update_sms(
    message_id: '<MESSAGE_ID>',
    topics: [], # optional
    users: [], # optional
    targets: [], # optional
    content: '<CONTENT>', # optional
    draft: false, # optional
    scheduled_at: '' # optional
)
```

---

#### Delete message

Delete a message. If the message is not a draft or scheduled, but has been sent, this will not recall the message.

**Endpoint:** `DELETE /messaging/messages/{messageId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| messageId | string | Yes | Message ID. |

**Responses:**

- **204**: no content

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.delete(
    message_id: '<MESSAGE_ID>'
)
```

---

### logs

#### List message logs

Get the message activity logs listed by its unique ID.

**Endpoint:** `GET /messaging/messages/{messageId}/logs`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| messageId | string | Yes | Message ID. |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset |
| total | boolean | No | When set to false, the total count returned will be 0 and will not be calculated. |

**Responses:**

- **200**: application/json
  - [Logs List](/docs/references/cloud/models/logList)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

messaging = Messaging.new(client)

result = messaging.list_message_logs(
    message_id: '<MESSAGE_ID>',
    queries: [], # optional
    total: false # optional
)
```

---

