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

```server-graphql
mutation {
    messagingCreateApnsProvider(
        providerId: "<PROVIDER_ID>",
        name: "<NAME>",
        authKey: "<AUTH_KEY>",
        authKeyId: "<AUTH_KEY_ID>",
        teamId: "<TEAM_ID>",
        bundleId: "<BUNDLE_ID>",
        sandbox: false,
        enabled: false
    ) {
        _id
        _createdAt
        _updatedAt
        name
        provider
        enabled
        type
        credentials
        options
    }
}

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

```server-graphql
mutation {
    messagingCreateEmail(
        messageId: "<MESSAGE_ID>",
        subject: "<SUBJECT>",
        content: "<CONTENT>",
        topics: [],
        users: [],
        targets: [],
        cc: [],
        bcc: [],
        attachments: [],
        draft: false,
        html: false,
        scheduledAt: ""
    ) {
        _id
        _createdAt
        _updatedAt
        providerType
        topics
        users
        targets
        scheduledAt
        deliveredAt
        deliveryErrors
        deliveredTotal
        data
        status
    }
}

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

```server-graphql
mutation {
    messagingCreateFcmProvider(
        providerId: "<PROVIDER_ID>",
        name: "<NAME>",
        serviceAccountJSON: "{}",
        enabled: false
    ) {
        _id
        _createdAt
        _updatedAt
        name
        provider
        enabled
        type
        credentials
        options
    }
}

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

```server-graphql
mutation {
    messagingCreateMailgunProvider(
        providerId: "<PROVIDER_ID>",
        name: "<NAME>",
        apiKey: "<API_KEY>",
        domain: "<DOMAIN>",
        isEuRegion: false,
        fromName: "<FROM_NAME>",
        fromEmail: "email@example.com",
        replyToName: "<REPLY_TO_NAME>",
        replyToEmail: "email@example.com",
        enabled: false
    ) {
        _id
        _createdAt
        _updatedAt
        name
        provider
        enabled
        type
        credentials
        options
    }
}

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

```server-graphql
mutation {
    messagingCreateMsg91Provider(
        providerId: "<PROVIDER_ID>",
        name: "<NAME>",
        templateId: "<TEMPLATE_ID>",
        senderId: "<SENDER_ID>",
        authKey: "<AUTH_KEY>",
        enabled: false
    ) {
        _id
        _createdAt
        _updatedAt
        name
        provider
        enabled
        type
        credentials
        options
    }
}

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

```server-graphql
mutation {
    messagingCreatePush(
        messageId: "<MESSAGE_ID>",
        title: "<TITLE>",
        body: "<BODY>",
        topics: [],
        users: [],
        targets: [],
        data: "{}",
        action: "<ACTION>",
        image: "[ID1:ID2]",
        icon: "<ICON>",
        sound: "<SOUND>",
        color: "<COLOR>",
        tag: "<TAG>",
        badge: 0,
        draft: false,
        scheduledAt: "",
        contentAvailable: false,
        critical: false,
        priority: "normal"
    ) {
        _id
        _createdAt
        _updatedAt
        providerType
        topics
        users
        targets
        scheduledAt
        deliveredAt
        deliveryErrors
        deliveredTotal
        data
        status
    }
}

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

```server-graphql
mutation {
    messagingCreateSendgridProvider(
        providerId: "<PROVIDER_ID>",
        name: "<NAME>",
        apiKey: "<API_KEY>",
        fromName: "<FROM_NAME>",
        fromEmail: "email@example.com",
        replyToName: "<REPLY_TO_NAME>",
        replyToEmail: "email@example.com",
        enabled: false
    ) {
        _id
        _createdAt
        _updatedAt
        name
        provider
        enabled
        type
        credentials
        options
    }
}

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

```server-graphql
mutation {
    messagingCreateSms(
        messageId: "<MESSAGE_ID>",
        content: "<CONTENT>",
        topics: [],
        users: [],
        targets: [],
        draft: false,
        scheduledAt: ""
    ) {
        _id
        _createdAt
        _updatedAt
        providerType
        topics
        users
        targets
        scheduledAt
        deliveredAt
        deliveryErrors
        deliveredTotal
        data
        status
    }
}

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

```server-graphql
mutation {
    messagingCreateSmtpProvider(
        providerId: "<PROVIDER_ID>",
        name: "<NAME>",
        host: "<HOST>",
        port: 1,
        username: "<USERNAME>",
        password: "<PASSWORD>",
        encryption: "none",
        autoTLS: false,
        mailer: "<MAILER>",
        fromName: "<FROM_NAME>",
        fromEmail: "email@example.com",
        replyToName: "<REPLY_TO_NAME>",
        replyToEmail: "email@example.com",
        enabled: false
    ) {
        _id
        _createdAt
        _updatedAt
        name
        provider
        enabled
        type
        credentials
        options
    }
}

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

```server-graphql
mutation {
    messagingCreateSubscriber(
        topicId: "<TOPIC_ID>",
        subscriberId: "<SUBSCRIBER_ID>",
        targetId: "<TARGET_ID>"
    ) {
        _id
        _createdAt
        _updatedAt
        targetId
        target {
            _id
            _createdAt
            _updatedAt
            name
            userId
            providerId
            providerType
            identifier
            expired
        }
        userId
        userName
        topicId
        providerType
    }
}

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

```server-graphql
mutation {
    messagingCreateTelesignProvider(
        providerId: "<PROVIDER_ID>",
        name: "<NAME>",
        from: "+12065550100",
        customerId: "<CUSTOMER_ID>",
        apiKey: "<API_KEY>",
        enabled: false
    ) {
        _id
        _createdAt
        _updatedAt
        name
        provider
        enabled
        type
        credentials
        options
    }
}

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

```server-graphql
mutation {
    messagingCreateTextmagicProvider(
        providerId: "<PROVIDER_ID>",
        name: "<NAME>",
        from: "+12065550100",
        username: "<USERNAME>",
        apiKey: "<API_KEY>",
        enabled: false
    ) {
        _id
        _createdAt
        _updatedAt
        name
        provider
        enabled
        type
        credentials
        options
    }
}

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

```server-graphql
mutation {
    messagingCreateTopic(
        topicId: "<TOPIC_ID>",
        name: "<NAME>",
        subscribe: ["any"]
    ) {
        _id
        _createdAt
        _updatedAt
        name
        emailTotal
        smsTotal
        pushTotal
        subscribe
    }
}

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

```server-graphql
mutation {
    messagingCreateTwilioProvider(
        providerId: "<PROVIDER_ID>",
        name: "<NAME>",
        from: "+12065550100",
        accountSid: "<ACCOUNT_SID>",
        authToken: "<AUTH_TOKEN>",
        enabled: false
    ) {
        _id
        _createdAt
        _updatedAt
        name
        provider
        enabled
        type
        credentials
        options
    }
}

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

```server-graphql
mutation {
    messagingCreateVonageProvider(
        providerId: "<PROVIDER_ID>",
        name: "<NAME>",
        from: "+12065550100",
        apiKey: "<API_KEY>",
        apiSecret: "<API_SECRET>",
        enabled: false
    ) {
        _id
        _createdAt
        _updatedAt
        name
        provider
        enabled
        type
        credentials
        options
    }
}

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

```server-graphql
query {
    messagingGetMessage(
        messageId: "<MESSAGE_ID>"
    ) {
        _id
        _createdAt
        _updatedAt
        providerType
        topics
        users
        targets
        scheduledAt
        deliveredAt
        deliveryErrors
        deliveredTotal
        data
        status
    }
}

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

```server-graphql
query {
    messagingGetProvider(
        providerId: "<PROVIDER_ID>"
    ) {
        _id
        _createdAt
        _updatedAt
        name
        provider
        enabled
        type
        credentials
        options
    }
}

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

```server-graphql
query {
    messagingGetSubscriber(
        topicId: "<TOPIC_ID>",
        subscriberId: "<SUBSCRIBER_ID>"
    ) {
        _id
        _createdAt
        _updatedAt
        targetId
        target {
            _id
            _createdAt
            _updatedAt
            name
            userId
            providerId
            providerType
            identifier
            expired
        }
        userId
        userName
        topicId
        providerType
    }
}

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

```server-graphql
query {
    messagingGetTopic(
        topicId: "<TOPIC_ID>"
    ) {
        _id
        _createdAt
        _updatedAt
        name
        emailTotal
        smsTotal
        pushTotal
        subscribe
    }
}

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

```server-graphql
query {
    messagingListMessageLogs(
        messageId: "<MESSAGE_ID>",
        queries: []
    ) {
        total
        logs {
            event
            userId
            userEmail
            userName
            mode
            ip
            time
            osCode
            osName
            osVersion
            clientType
            clientCode
            clientName
            clientVersion
            clientEngine
            clientEngineVersion
            deviceName
            deviceBrand
            deviceModel
            countryCode
            countryName
        }
    }
}

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

```server-graphql
query {
    messagingListTargets(
        messageId: "<MESSAGE_ID>",
        queries: []
    ) {
        total
        targets {
            _id
            _createdAt
            _updatedAt
            name
            userId
            providerId
            providerType
            identifier
            expired
        }
    }
}

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

```server-graphql
query {
    messagingListMessages(
        queries: [],
        search: "<SEARCH>"
    ) {
        total
        messages {
            _id
            _createdAt
            _updatedAt
            providerType
            topics
            users
            targets
            scheduledAt
            deliveredAt
            deliveryErrors
            deliveredTotal
            data
            status
        }
    }
}

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

```server-graphql
query {
    messagingListProviderLogs(
        providerId: "<PROVIDER_ID>",
        queries: []
    ) {
        total
        logs {
            event
            userId
            userEmail
            userName
            mode
            ip
            time
            osCode
            osName
            osVersion
            clientType
            clientCode
            clientName
            clientVersion
            clientEngine
            clientEngineVersion
            deviceName
            deviceBrand
            deviceModel
            countryCode
            countryName
        }
    }
}

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

```server-graphql
query {
    messagingListProviders(
        queries: [],
        search: "<SEARCH>"
    ) {
        total
        providers {
            _id
            _createdAt
            _updatedAt
            name
            provider
            enabled
            type
            credentials
            options
        }
    }
}

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

```server-graphql
query {
    messagingListSubscriberLogs(
        subscriberId: "<SUBSCRIBER_ID>",
        queries: []
    ) {
        total
        logs {
            event
            userId
            userEmail
            userName
            mode
            ip
            time
            osCode
            osName
            osVersion
            clientType
            clientCode
            clientName
            clientVersion
            clientEngine
            clientEngineVersion
            deviceName
            deviceBrand
            deviceModel
            countryCode
            countryName
        }
    }
}

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

```server-graphql
query {
    messagingListSubscribers(
        topicId: "<TOPIC_ID>",
        queries: [],
        search: "<SEARCH>"
    ) {
        total
        subscribers {
            _id
            _createdAt
            _updatedAt
            targetId
            target {
                _id
                _createdAt
                _updatedAt
                name
                userId
                providerId
                providerType
                identifier
                expired
            }
            userId
            userName
            topicId
            providerType
        }
    }
}

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

```server-graphql
query {
    messagingListTopicLogs(
        topicId: "<TOPIC_ID>",
        queries: []
    ) {
        total
        logs {
            event
            userId
            userEmail
            userName
            mode
            ip
            time
            osCode
            osName
            osVersion
            clientType
            clientCode
            clientName
            clientVersion
            clientEngine
            clientEngineVersion
            deviceName
            deviceBrand
            deviceModel
            countryCode
            countryName
        }
    }
}

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

```server-graphql
query {
    messagingListTopics(
        queries: [],
        search: "<SEARCH>"
    ) {
        total
        topics {
            _id
            _createdAt
            _updatedAt
            name
            emailTotal
            smsTotal
            pushTotal
            subscribe
        }
    }
}

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

```server-graphql
mutation {
    messagingUpdateApnsProvider(
        providerId: "<PROVIDER_ID>",
        name: "<NAME>",
        enabled: false,
        authKey: "<AUTH_KEY>",
        authKeyId: "<AUTH_KEY_ID>",
        teamId: "<TEAM_ID>",
        bundleId: "<BUNDLE_ID>",
        sandbox: false
    ) {
        _id
        _createdAt
        _updatedAt
        name
        provider
        enabled
        type
        credentials
        options
    }
}

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

```server-graphql
mutation {
    messagingUpdateEmail(
        messageId: "<MESSAGE_ID>",
        topics: [],
        users: [],
        targets: [],
        subject: "<SUBJECT>",
        content: "<CONTENT>",
        draft: false,
        html: false,
        cc: [],
        bcc: [],
        scheduledAt: "",
        attachments: []
    ) {
        _id
        _createdAt
        _updatedAt
        providerType
        topics
        users
        targets
        scheduledAt
        deliveredAt
        deliveryErrors
        deliveredTotal
        data
        status
    }
}

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

```server-graphql
mutation {
    messagingUpdateFcmProvider(
        providerId: "<PROVIDER_ID>",
        name: "<NAME>",
        enabled: false,
        serviceAccountJSON: "{}"
    ) {
        _id
        _createdAt
        _updatedAt
        name
        provider
        enabled
        type
        credentials
        options
    }
}

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

```server-graphql
mutation {
    messagingUpdateMailgunProvider(
        providerId: "<PROVIDER_ID>",
        name: "<NAME>",
        apiKey: "<API_KEY>",
        domain: "<DOMAIN>",
        isEuRegion: false,
        enabled: false,
        fromName: "<FROM_NAME>",
        fromEmail: "email@example.com",
        replyToName: "<REPLY_TO_NAME>",
        replyToEmail: "<REPLY_TO_EMAIL>"
    ) {
        _id
        _createdAt
        _updatedAt
        name
        provider
        enabled
        type
        credentials
        options
    }
}

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

```server-graphql
mutation {
    messagingUpdateMsg91Provider(
        providerId: "<PROVIDER_ID>",
        name: "<NAME>",
        enabled: false,
        templateId: "<TEMPLATE_ID>",
        senderId: "<SENDER_ID>",
        authKey: "<AUTH_KEY>"
    ) {
        _id
        _createdAt
        _updatedAt
        name
        provider
        enabled
        type
        credentials
        options
    }
}

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

```server-graphql
mutation {
    messagingUpdatePush(
        messageId: "<MESSAGE_ID>",
        topics: [],
        users: [],
        targets: [],
        title: "<TITLE>",
        body: "<BODY>",
        data: "{}",
        action: "<ACTION>",
        image: "[ID1:ID2]",
        icon: "<ICON>",
        sound: "<SOUND>",
        color: "<COLOR>",
        tag: "<TAG>",
        badge: 0,
        draft: false,
        scheduledAt: "",
        contentAvailable: false,
        critical: false,
        priority: "normal"
    ) {
        _id
        _createdAt
        _updatedAt
        providerType
        topics
        users
        targets
        scheduledAt
        deliveredAt
        deliveryErrors
        deliveredTotal
        data
        status
    }
}

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

```server-graphql
mutation {
    messagingUpdateSendgridProvider(
        providerId: "<PROVIDER_ID>",
        name: "<NAME>",
        enabled: false,
        apiKey: "<API_KEY>",
        fromName: "<FROM_NAME>",
        fromEmail: "email@example.com",
        replyToName: "<REPLY_TO_NAME>",
        replyToEmail: "<REPLY_TO_EMAIL>"
    ) {
        _id
        _createdAt
        _updatedAt
        name
        provider
        enabled
        type
        credentials
        options
    }
}

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

```server-graphql
mutation {
    messagingUpdateSms(
        messageId: "<MESSAGE_ID>",
        topics: [],
        users: [],
        targets: [],
        content: "<CONTENT>",
        draft: false,
        scheduledAt: ""
    ) {
        _id
        _createdAt
        _updatedAt
        providerType
        topics
        users
        targets
        scheduledAt
        deliveredAt
        deliveryErrors
        deliveredTotal
        data
        status
    }
}

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

```server-graphql
mutation {
    messagingUpdateSmtpProvider(
        providerId: "<PROVIDER_ID>",
        name: "<NAME>",
        host: "<HOST>",
        port: 1,
        username: "<USERNAME>",
        password: "<PASSWORD>",
        encryption: "none",
        autoTLS: false,
        mailer: "<MAILER>",
        fromName: "<FROM_NAME>",
        fromEmail: "email@example.com",
        replyToName: "<REPLY_TO_NAME>",
        replyToEmail: "<REPLY_TO_EMAIL>",
        enabled: false
    ) {
        _id
        _createdAt
        _updatedAt
        name
        provider
        enabled
        type
        credentials
        options
    }
}

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

```server-graphql
mutation {
    messagingUpdateTelesignProvider(
        providerId: "<PROVIDER_ID>",
        name: "<NAME>",
        enabled: false,
        customerId: "<CUSTOMER_ID>",
        apiKey: "<API_KEY>",
        from: "<FROM>"
    ) {
        _id
        _createdAt
        _updatedAt
        name
        provider
        enabled
        type
        credentials
        options
    }
}

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

```server-graphql
mutation {
    messagingUpdateTextmagicProvider(
        providerId: "<PROVIDER_ID>",
        name: "<NAME>",
        enabled: false,
        username: "<USERNAME>",
        apiKey: "<API_KEY>",
        from: "<FROM>"
    ) {
        _id
        _createdAt
        _updatedAt
        name
        provider
        enabled
        type
        credentials
        options
    }
}

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

```server-graphql
mutation {
    messagingUpdateTopic(
        topicId: "<TOPIC_ID>",
        name: "<NAME>",
        subscribe: ["any"]
    ) {
        _id
        _createdAt
        _updatedAt
        name
        emailTotal
        smsTotal
        pushTotal
        subscribe
    }
}

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

```server-graphql
mutation {
    messagingUpdateTwilioProvider(
        providerId: "<PROVIDER_ID>",
        name: "<NAME>",
        enabled: false,
        accountSid: "<ACCOUNT_SID>",
        authToken: "<AUTH_TOKEN>",
        from: "<FROM>"
    ) {
        _id
        _createdAt
        _updatedAt
        name
        provider
        enabled
        type
        credentials
        options
    }
}

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

```server-graphql
mutation {
    messagingUpdateVonageProvider(
        providerId: "<PROVIDER_ID>",
        name: "<NAME>",
        enabled: false,
        apiKey: "<API_KEY>",
        apiSecret: "<API_SECRET>",
        from: "<FROM>"
    ) {
        _id
        _createdAt
        _updatedAt
        name
        provider
        enabled
        type
        credentials
        options
    }
}

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

```server-graphql
mutation {
    messagingDelete(
        messageId: "<MESSAGE_ID>"
    ) {
        status
    }
}

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

```server-graphql
mutation {
    messagingDeleteProvider(
        providerId: "<PROVIDER_ID>"
    ) {
        status
    }
}

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

```server-graphql
mutation {
    messagingDeleteSubscriber(
        topicId: "<TOPIC_ID>",
        subscriberId: "<SUBSCRIBER_ID>"
    ) {
        status
    }
}

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

```server-graphql
mutation {
    messagingDeleteTopic(
        topicId: "<TOPIC_ID>"
    ) {
        status
    }
}

```

---

