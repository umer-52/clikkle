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
  - [Provider](/docs/references/1.5.x/models/provider)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.createApnsProvider(
    '<PROVIDER_ID>', // providerId
    '<NAME>', // name
    '<AUTH_KEY>', // authKey (optional)
    '<AUTH_KEY_ID>', // authKeyId (optional)
    '<TEAM_ID>', // teamId (optional)
    '<BUNDLE_ID>', // bundleId (optional)
    false, // sandbox (optional)
    false // enabled (optional)
);

```

---

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
  - [Message](/docs/references/1.5.x/models/message)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.createEmail(
    '<MESSAGE_ID>', // messageId
    '<SUBJECT>', // subject
    '<CONTENT>', // content
    [], // topics (optional)
    [], // users (optional)
    [], // targets (optional)
    [], // cc (optional)
    [], // bcc (optional)
    [], // attachments (optional)
    false, // draft (optional)
    false, // html (optional)
    '' // scheduledAt (optional)
);

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
  - [Provider](/docs/references/1.5.x/models/provider)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.createFcmProvider(
    '<PROVIDER_ID>', // providerId
    '<NAME>', // name
    {}, // serviceAccountJSON (optional)
    false // enabled (optional)
);

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
  - [Provider](/docs/references/1.5.x/models/provider)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.createMailgunProvider(
    '<PROVIDER_ID>', // providerId
    '<NAME>', // name
    '<API_KEY>', // apiKey (optional)
    '<DOMAIN>', // domain (optional)
    false, // isEuRegion (optional)
    '<FROM_NAME>', // fromName (optional)
    'email@example.com', // fromEmail (optional)
    '<REPLY_TO_NAME>', // replyToName (optional)
    'email@example.com', // replyToEmail (optional)
    false // enabled (optional)
);

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
  - [Provider](/docs/references/1.5.x/models/provider)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.createMsg91Provider(
    '<PROVIDER_ID>', // providerId
    '<NAME>', // name
    '<TEMPLATE_ID>', // templateId (optional)
    '<SENDER_ID>', // senderId (optional)
    '<AUTH_KEY>', // authKey (optional)
    false // enabled (optional)
);

```

---

#### Create push notification

Create a new push notification.

**Endpoint:** `POST /messaging/messages/push`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| messageId | string | Yes | Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| title | string | Yes | Title for push notification. |
| body | string | Yes | Body for push notification. |
| topics | array | No | List of Topic IDs. |
| users | array | No | List of User IDs. |
| targets | array | No | List of Targets IDs. |
| data | object | No | Additional Data for push notification. |
| action | string | No | Action for push notification. |
| image | string | No | Image for push notification. Must be a compound bucket ID to file ID of a jpeg, png, or bmp image in Appwrite Storage. It should be formatted as <BUCKET_ID>:<FILE_ID>. |
| icon | string | No | Icon for push notification. Available only for Android and Web Platform. |
| sound | string | No | Sound for push notification. Available only for Android and IOS Platform. |
| color | string | No | Color for push notification. Available only for Android Platform. |
| tag | string | No | Tag for push notification. Available only for Android Platform. |
| badge | string | No | Badge for push notification. Available only for IOS Platform. |
| draft | boolean | No | Is message a draft |
| scheduledAt | string | No | Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future. |

**Responses:**

- **201**: application/json
  - [Message](/docs/references/1.5.x/models/message)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.createPush(
    '<MESSAGE_ID>', // messageId
    '<TITLE>', // title (optional)
    '<BODY>', // body (optional)
    [], // topics (optional)
    [], // users (optional)
    [], // targets (optional)
    {}, // data (optional)
    '<ACTION>', // action (optional)
    '[ID1:ID2]', // image (optional)
    '<ICON>', // icon (optional)
    '<SOUND>', // sound (optional)
    '<COLOR>', // color (optional)
    '<TAG>', // tag (optional)
    null, // badge (optional)
    false, // draft (optional)
    '', // scheduledAt (optional)
    false, // contentAvailable (optional)
    false, // critical (optional)
    sdk.MessagePriority.Normal // priority (optional)
);

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
  - [Provider](/docs/references/1.5.x/models/provider)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.createSendgridProvider(
    '<PROVIDER_ID>', // providerId
    '<NAME>', // name
    '<API_KEY>', // apiKey (optional)
    '<FROM_NAME>', // fromName (optional)
    'email@example.com', // fromEmail (optional)
    '<REPLY_TO_NAME>', // replyToName (optional)
    'email@example.com', // replyToEmail (optional)
    false // enabled (optional)
);

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
  - [Message](/docs/references/1.5.x/models/message)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.createSms(
    '<MESSAGE_ID>', // messageId
    '<CONTENT>', // content
    [], // topics (optional)
    [], // users (optional)
    [], // targets (optional)
    false, // draft (optional)
    '' // scheduledAt (optional)
);

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
  - [Provider](/docs/references/1.5.x/models/provider)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.createSmtpProvider(
    '<PROVIDER_ID>', // providerId
    '<NAME>', // name
    '<HOST>', // host
    1, // port (optional)
    '<USERNAME>', // username (optional)
    '<PASSWORD>', // password (optional)
    sdk.SmtpEncryption.None, // encryption (optional)
    false, // autoTLS (optional)
    '<MAILER>', // mailer (optional)
    '<FROM_NAME>', // fromName (optional)
    'email@example.com', // fromEmail (optional)
    '<REPLY_TO_NAME>', // replyToName (optional)
    'email@example.com', // replyToEmail (optional)
    false // enabled (optional)
);

```

---

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
  - [Subscriber](/docs/references/1.5.x/models/subscriber)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setJWT('<YOUR_JWT>'); // Your secret JSON Web Token

const messaging = new sdk.Messaging(client);

const result = await messaging.createSubscriber(
    '<TOPIC_ID>', // topicId
    '<SUBSCRIBER_ID>', // subscriberId
    '<TARGET_ID>' // targetId
);

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
  - [Provider](/docs/references/1.5.x/models/provider)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.createTelesignProvider(
    '<PROVIDER_ID>', // providerId
    '<NAME>', // name
    '+12065550100', // from (optional)
    '<CUSTOMER_ID>', // customerId (optional)
    '<API_KEY>', // apiKey (optional)
    false // enabled (optional)
);

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
  - [Provider](/docs/references/1.5.x/models/provider)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.createTextmagicProvider(
    '<PROVIDER_ID>', // providerId
    '<NAME>', // name
    '+12065550100', // from (optional)
    '<USERNAME>', // username (optional)
    '<API_KEY>', // apiKey (optional)
    false // enabled (optional)
);

```

---

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
  - [Topic](/docs/references/1.5.x/models/topic)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.createTopic(
    '<TOPIC_ID>', // topicId
    '<NAME>', // name
    ["any"] // subscribe (optional)
);

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
  - [Provider](/docs/references/1.5.x/models/provider)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.createTwilioProvider(
    '<PROVIDER_ID>', // providerId
    '<NAME>', // name
    '+12065550100', // from (optional)
    '<ACCOUNT_SID>', // accountSid (optional)
    '<AUTH_TOKEN>', // authToken (optional)
    false // enabled (optional)
);

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
  - [Provider](/docs/references/1.5.x/models/provider)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.createVonageProvider(
    '<PROVIDER_ID>', // providerId
    '<NAME>', // name
    '+12065550100', // from (optional)
    '<API_KEY>', // apiKey (optional)
    '<API_SECRET>', // apiSecret (optional)
    false // enabled (optional)
);

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
  - [Message](/docs/references/1.5.x/models/message)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.getMessage(
    '<MESSAGE_ID>' // messageId
);

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
  - [Provider](/docs/references/1.5.x/models/provider)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.getProvider(
    '<PROVIDER_ID>' // providerId
);

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
  - [Subscriber](/docs/references/1.5.x/models/subscriber)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.getSubscriber(
    '<TOPIC_ID>', // topicId
    '<SUBSCRIBER_ID>' // subscriberId
);

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
  - [Topic](/docs/references/1.5.x/models/topic)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.getTopic(
    '<TOPIC_ID>' // topicId
);

```

---

#### List message logs

Get the message activity logs listed by its unique ID.

**Endpoint:** `GET /messaging/messages/{messageId}/logs`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| messageId | string | Yes | Message ID. |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset |

**Responses:**

- **200**: application/json
  - [Logs List](/docs/references/1.5.x/models/logList)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.listMessageLogs(
    '<MESSAGE_ID>', // messageId
    [] // queries (optional)
);

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

**Responses:**

- **200**: application/json
  - [Target list](/docs/references/1.5.x/models/targetList)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.listTargets(
    '<MESSAGE_ID>', // messageId
    [] // queries (optional)
);

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

**Responses:**

- **200**: application/json
  - [Message list](/docs/references/1.5.x/models/messageList)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.listMessages(
    [], // queries (optional)
    '<SEARCH>' // search (optional)
);

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

**Responses:**

- **200**: application/json
  - [Logs List](/docs/references/1.5.x/models/logList)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.listProviderLogs(
    '<PROVIDER_ID>', // providerId
    [] // queries (optional)
);

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

**Responses:**

- **200**: application/json
  - [Provider list](/docs/references/1.5.x/models/providerList)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.listProviders(
    [], // queries (optional)
    '<SEARCH>' // search (optional)
);

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

**Responses:**

- **200**: application/json
  - [Logs List](/docs/references/1.5.x/models/logList)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.listSubscriberLogs(
    '<SUBSCRIBER_ID>', // subscriberId
    [] // queries (optional)
);

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

**Responses:**

- **200**: application/json
  - [Subscriber list](/docs/references/1.5.x/models/subscriberList)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.listSubscribers(
    '<TOPIC_ID>', // topicId
    [], // queries (optional)
    '<SEARCH>' // search (optional)
);

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

**Responses:**

- **200**: application/json
  - [Logs List](/docs/references/1.5.x/models/logList)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.listTopicLogs(
    '<TOPIC_ID>', // topicId
    [] // queries (optional)
);

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

**Responses:**

- **200**: application/json
  - [Topic list](/docs/references/1.5.x/models/topicList)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.listTopics(
    [], // queries (optional)
    '<SEARCH>' // search (optional)
);

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
  - [Provider](/docs/references/1.5.x/models/provider)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.updateApnsProvider(
    '<PROVIDER_ID>', // providerId
    '<NAME>', // name (optional)
    false, // enabled (optional)
    '<AUTH_KEY>', // authKey (optional)
    '<AUTH_KEY_ID>', // authKeyId (optional)
    '<TEAM_ID>', // teamId (optional)
    '<BUNDLE_ID>', // bundleId (optional)
    false // sandbox (optional)
);

```

---

#### Update email

Update an email message by its unique ID.


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
  - [Message](/docs/references/1.5.x/models/message)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.updateEmail(
    '<MESSAGE_ID>', // messageId
    [], // topics (optional)
    [], // users (optional)
    [], // targets (optional)
    '<SUBJECT>', // subject (optional)
    '<CONTENT>', // content (optional)
    false, // draft (optional)
    false, // html (optional)
    [], // cc (optional)
    [], // bcc (optional)
    '', // scheduledAt (optional)
    [] // attachments (optional)
);

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
  - [Provider](/docs/references/1.5.x/models/provider)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.updateFcmProvider(
    '<PROVIDER_ID>', // providerId
    '<NAME>', // name (optional)
    false, // enabled (optional)
    {} // serviceAccountJSON (optional)
);

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
  - [Provider](/docs/references/1.5.x/models/provider)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.updateMailgunProvider(
    '<PROVIDER_ID>', // providerId
    '<NAME>', // name (optional)
    '<API_KEY>', // apiKey (optional)
    '<DOMAIN>', // domain (optional)
    false, // isEuRegion (optional)
    false, // enabled (optional)
    '<FROM_NAME>', // fromName (optional)
    'email@example.com', // fromEmail (optional)
    '<REPLY_TO_NAME>', // replyToName (optional)
    '<REPLY_TO_EMAIL>' // replyToEmail (optional)
);

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
  - [Provider](/docs/references/1.5.x/models/provider)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.updateMsg91Provider(
    '<PROVIDER_ID>', // providerId
    '<NAME>', // name (optional)
    false, // enabled (optional)
    '<TEMPLATE_ID>', // templateId (optional)
    '<SENDER_ID>', // senderId (optional)
    '<AUTH_KEY>' // authKey (optional)
);

```

---

#### Update push notification

Update a push notification by its unique ID.


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

**Responses:**

- **200**: application/json
  - [Message](/docs/references/1.5.x/models/message)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.updatePush(
    '<MESSAGE_ID>', // messageId
    [], // topics (optional)
    [], // users (optional)
    [], // targets (optional)
    '<TITLE>', // title (optional)
    '<BODY>', // body (optional)
    {}, // data (optional)
    '<ACTION>', // action (optional)
    '[ID1:ID2]', // image (optional)
    '<ICON>', // icon (optional)
    '<SOUND>', // sound (optional)
    '<COLOR>', // color (optional)
    '<TAG>', // tag (optional)
    null, // badge (optional)
    false, // draft (optional)
    '', // scheduledAt (optional)
    false, // contentAvailable (optional)
    false, // critical (optional)
    sdk.MessagePriority.Normal // priority (optional)
);

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
  - [Provider](/docs/references/1.5.x/models/provider)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.updateSendgridProvider(
    '<PROVIDER_ID>', // providerId
    '<NAME>', // name (optional)
    false, // enabled (optional)
    '<API_KEY>', // apiKey (optional)
    '<FROM_NAME>', // fromName (optional)
    'email@example.com', // fromEmail (optional)
    '<REPLY_TO_NAME>', // replyToName (optional)
    '<REPLY_TO_EMAIL>' // replyToEmail (optional)
);

```

---

#### Update SMS

Update an email message by its unique ID.


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
  - [Message](/docs/references/1.5.x/models/message)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.updateSms(
    '<MESSAGE_ID>', // messageId
    [], // topics (optional)
    [], // users (optional)
    [], // targets (optional)
    '<CONTENT>', // content (optional)
    false, // draft (optional)
    '' // scheduledAt (optional)
);

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
  - [Provider](/docs/references/1.5.x/models/provider)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.updateSmtpProvider(
    '<PROVIDER_ID>', // providerId
    '<NAME>', // name (optional)
    '<HOST>', // host (optional)
    1, // port (optional)
    '<USERNAME>', // username (optional)
    '<PASSWORD>', // password (optional)
    sdk.SmtpEncryption.None, // encryption (optional)
    false, // autoTLS (optional)
    '<MAILER>', // mailer (optional)
    '<FROM_NAME>', // fromName (optional)
    'email@example.com', // fromEmail (optional)
    '<REPLY_TO_NAME>', // replyToName (optional)
    '<REPLY_TO_EMAIL>', // replyToEmail (optional)
    false // enabled (optional)
);

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
  - [Provider](/docs/references/1.5.x/models/provider)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.updateTelesignProvider(
    '<PROVIDER_ID>', // providerId
    '<NAME>', // name (optional)
    false, // enabled (optional)
    '<CUSTOMER_ID>', // customerId (optional)
    '<API_KEY>', // apiKey (optional)
    '<FROM>' // from (optional)
);

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
  - [Provider](/docs/references/1.5.x/models/provider)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.updateTextmagicProvider(
    '<PROVIDER_ID>', // providerId
    '<NAME>', // name (optional)
    false, // enabled (optional)
    '<USERNAME>', // username (optional)
    '<API_KEY>', // apiKey (optional)
    '<FROM>' // from (optional)
);

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
  - [Topic](/docs/references/1.5.x/models/topic)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.updateTopic(
    '<TOPIC_ID>', // topicId
    '<NAME>', // name (optional)
    ["any"] // subscribe (optional)
);

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
  - [Provider](/docs/references/1.5.x/models/provider)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.updateTwilioProvider(
    '<PROVIDER_ID>', // providerId
    '<NAME>', // name (optional)
    false, // enabled (optional)
    '<ACCOUNT_SID>', // accountSid (optional)
    '<AUTH_TOKEN>', // authToken (optional)
    '<FROM>' // from (optional)
);

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
  - [Provider](/docs/references/1.5.x/models/provider)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.updateVonageProvider(
    '<PROVIDER_ID>', // providerId
    '<NAME>', // name (optional)
    false, // enabled (optional)
    '<API_KEY>', // apiKey (optional)
    '<API_SECRET>', // apiSecret (optional)
    '<FROM>' // from (optional)
);

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

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.delete(
    '<MESSAGE_ID>' // messageId
);

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

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.deleteProvider(
    '<PROVIDER_ID>' // providerId
);

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

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setJWT('<YOUR_JWT>'); // Your secret JSON Web Token

const messaging = new sdk.Messaging(client);

const result = await messaging.deleteSubscriber(
    '<TOPIC_ID>', // topicId
    '<SUBSCRIBER_ID>' // subscriberId
);

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

```server-nodejs
const sdk = require('node-appwrite');

const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const messaging = new sdk.Messaging(client);

const result = await messaging.deleteTopic(
    '<TOPIC_ID>' // topicId
);

```

---

