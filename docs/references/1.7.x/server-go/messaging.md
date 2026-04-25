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
  - [Provider](/docs/references/1.7.x/models/provider)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.CreateApnsProvider(
        "<PROVIDER_ID>",
        "<NAME>",
        messaging.WithCreateApnsProviderAuthKey("<AUTH_KEY>"),
        messaging.WithCreateApnsProviderAuthKeyId("<AUTH_KEY_ID>"),
        messaging.WithCreateApnsProviderTeamId("<TEAM_ID>"),
        messaging.WithCreateApnsProviderBundleId("<BUNDLE_ID>"),
        messaging.WithCreateApnsProviderSandbox(false),
        messaging.WithCreateApnsProviderEnabled(false),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Provider](/docs/references/1.7.x/models/provider)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.CreateFcmProvider(
        "<PROVIDER_ID>",
        "<NAME>",
        messaging.WithCreateFcmProviderServiceAccountJSON(map[string]interface{}{}),
        messaging.WithCreateFcmProviderEnabled(false),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Provider](/docs/references/1.7.x/models/provider)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.CreateMailgunProvider(
        "<PROVIDER_ID>",
        "<NAME>",
        messaging.WithCreateMailgunProviderApiKey("<API_KEY>"),
        messaging.WithCreateMailgunProviderDomain("<DOMAIN>"),
        messaging.WithCreateMailgunProviderIsEuRegion(false),
        messaging.WithCreateMailgunProviderFromName("<FROM_NAME>"),
        messaging.WithCreateMailgunProviderFromEmail("email@example.com"),
        messaging.WithCreateMailgunProviderReplyToName("<REPLY_TO_NAME>"),
        messaging.WithCreateMailgunProviderReplyToEmail("email@example.com"),
        messaging.WithCreateMailgunProviderEnabled(false),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Provider](/docs/references/1.7.x/models/provider)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.CreateMsg91Provider(
        "<PROVIDER_ID>",
        "<NAME>",
        messaging.WithCreateMsg91ProviderTemplateId("<TEMPLATE_ID>"),
        messaging.WithCreateMsg91ProviderSenderId("<SENDER_ID>"),
        messaging.WithCreateMsg91ProviderAuthKey("<AUTH_KEY>"),
        messaging.WithCreateMsg91ProviderEnabled(false),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Provider](/docs/references/1.7.x/models/provider)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.CreateSendgridProvider(
        "<PROVIDER_ID>",
        "<NAME>",
        messaging.WithCreateSendgridProviderApiKey("<API_KEY>"),
        messaging.WithCreateSendgridProviderFromName("<FROM_NAME>"),
        messaging.WithCreateSendgridProviderFromEmail("email@example.com"),
        messaging.WithCreateSendgridProviderReplyToName("<REPLY_TO_NAME>"),
        messaging.WithCreateSendgridProviderReplyToEmail("email@example.com"),
        messaging.WithCreateSendgridProviderEnabled(false),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Provider](/docs/references/1.7.x/models/provider)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.CreateSmtpProvider(
        "<PROVIDER_ID>",
        "<NAME>",
        "<HOST>",
        messaging.WithCreateSmtpProviderPort(1),
        messaging.WithCreateSmtpProviderUsername("<USERNAME>"),
        messaging.WithCreateSmtpProviderPassword("<PASSWORD>"),
        messaging.WithCreateSmtpProviderEncryption("none"),
        messaging.WithCreateSmtpProviderAutoTLS(false),
        messaging.WithCreateSmtpProviderMailer("<MAILER>"),
        messaging.WithCreateSmtpProviderFromName("<FROM_NAME>"),
        messaging.WithCreateSmtpProviderFromEmail("email@example.com"),
        messaging.WithCreateSmtpProviderReplyToName("<REPLY_TO_NAME>"),
        messaging.WithCreateSmtpProviderReplyToEmail("email@example.com"),
        messaging.WithCreateSmtpProviderEnabled(false),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Provider](/docs/references/1.7.x/models/provider)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.CreateTelesignProvider(
        "<PROVIDER_ID>",
        "<NAME>",
        messaging.WithCreateTelesignProviderFrom("+12065550100"),
        messaging.WithCreateTelesignProviderCustomerId("<CUSTOMER_ID>"),
        messaging.WithCreateTelesignProviderApiKey("<API_KEY>"),
        messaging.WithCreateTelesignProviderEnabled(false),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Provider](/docs/references/1.7.x/models/provider)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.CreateTextmagicProvider(
        "<PROVIDER_ID>",
        "<NAME>",
        messaging.WithCreateTextmagicProviderFrom("+12065550100"),
        messaging.WithCreateTextmagicProviderUsername("<USERNAME>"),
        messaging.WithCreateTextmagicProviderApiKey("<API_KEY>"),
        messaging.WithCreateTextmagicProviderEnabled(false),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Provider](/docs/references/1.7.x/models/provider)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.CreateTwilioProvider(
        "<PROVIDER_ID>",
        "<NAME>",
        messaging.WithCreateTwilioProviderFrom("+12065550100"),
        messaging.WithCreateTwilioProviderAccountSid("<ACCOUNT_SID>"),
        messaging.WithCreateTwilioProviderAuthToken("<AUTH_TOKEN>"),
        messaging.WithCreateTwilioProviderEnabled(false),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Provider](/docs/references/1.7.x/models/provider)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.CreateVonageProvider(
        "<PROVIDER_ID>",
        "<NAME>",
        messaging.WithCreateVonageProviderFrom("+12065550100"),
        messaging.WithCreateVonageProviderApiKey("<API_KEY>"),
        messaging.WithCreateVonageProviderApiSecret("<API_SECRET>"),
        messaging.WithCreateVonageProviderEnabled(false),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Provider](/docs/references/1.7.x/models/provider)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.GetProvider(
        "<PROVIDER_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Logs List](/docs/references/1.7.x/models/logList)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.ListProviderLogs(
        "<PROVIDER_ID>",
        messaging.WithListProviderLogsQueries([]interface{}{}),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Provider list](/docs/references/1.7.x/models/providerList)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.ListProviders(
        messaging.WithListProvidersQueries([]interface{}{}),
        messaging.WithListProvidersSearch("<SEARCH>"),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Provider](/docs/references/1.7.x/models/provider)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.UpdateApnsProvider(
        "<PROVIDER_ID>",
        messaging.WithUpdateApnsProviderName("<NAME>"),
        messaging.WithUpdateApnsProviderEnabled(false),
        messaging.WithUpdateApnsProviderAuthKey("<AUTH_KEY>"),
        messaging.WithUpdateApnsProviderAuthKeyId("<AUTH_KEY_ID>"),
        messaging.WithUpdateApnsProviderTeamId("<TEAM_ID>"),
        messaging.WithUpdateApnsProviderBundleId("<BUNDLE_ID>"),
        messaging.WithUpdateApnsProviderSandbox(false),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Provider](/docs/references/1.7.x/models/provider)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.UpdateFcmProvider(
        "<PROVIDER_ID>",
        messaging.WithUpdateFcmProviderName("<NAME>"),
        messaging.WithUpdateFcmProviderEnabled(false),
        messaging.WithUpdateFcmProviderServiceAccountJSON(map[string]interface{}{}),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Provider](/docs/references/1.7.x/models/provider)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.UpdateMailgunProvider(
        "<PROVIDER_ID>",
        messaging.WithUpdateMailgunProviderName("<NAME>"),
        messaging.WithUpdateMailgunProviderApiKey("<API_KEY>"),
        messaging.WithUpdateMailgunProviderDomain("<DOMAIN>"),
        messaging.WithUpdateMailgunProviderIsEuRegion(false),
        messaging.WithUpdateMailgunProviderEnabled(false),
        messaging.WithUpdateMailgunProviderFromName("<FROM_NAME>"),
        messaging.WithUpdateMailgunProviderFromEmail("email@example.com"),
        messaging.WithUpdateMailgunProviderReplyToName("<REPLY_TO_NAME>"),
        messaging.WithUpdateMailgunProviderReplyToEmail("<REPLY_TO_EMAIL>"),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Provider](/docs/references/1.7.x/models/provider)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.UpdateMsg91Provider(
        "<PROVIDER_ID>",
        messaging.WithUpdateMsg91ProviderName("<NAME>"),
        messaging.WithUpdateMsg91ProviderEnabled(false),
        messaging.WithUpdateMsg91ProviderTemplateId("<TEMPLATE_ID>"),
        messaging.WithUpdateMsg91ProviderSenderId("<SENDER_ID>"),
        messaging.WithUpdateMsg91ProviderAuthKey("<AUTH_KEY>"),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Provider](/docs/references/1.7.x/models/provider)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.UpdateSendgridProvider(
        "<PROVIDER_ID>",
        messaging.WithUpdateSendgridProviderName("<NAME>"),
        messaging.WithUpdateSendgridProviderEnabled(false),
        messaging.WithUpdateSendgridProviderApiKey("<API_KEY>"),
        messaging.WithUpdateSendgridProviderFromName("<FROM_NAME>"),
        messaging.WithUpdateSendgridProviderFromEmail("email@example.com"),
        messaging.WithUpdateSendgridProviderReplyToName("<REPLY_TO_NAME>"),
        messaging.WithUpdateSendgridProviderReplyToEmail("<REPLY_TO_EMAIL>"),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Provider](/docs/references/1.7.x/models/provider)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.UpdateSmtpProvider(
        "<PROVIDER_ID>",
        messaging.WithUpdateSmtpProviderName("<NAME>"),
        messaging.WithUpdateSmtpProviderHost("<HOST>"),
        messaging.WithUpdateSmtpProviderPort(1),
        messaging.WithUpdateSmtpProviderUsername("<USERNAME>"),
        messaging.WithUpdateSmtpProviderPassword("<PASSWORD>"),
        messaging.WithUpdateSmtpProviderEncryption("none"),
        messaging.WithUpdateSmtpProviderAutoTLS(false),
        messaging.WithUpdateSmtpProviderMailer("<MAILER>"),
        messaging.WithUpdateSmtpProviderFromName("<FROM_NAME>"),
        messaging.WithUpdateSmtpProviderFromEmail("email@example.com"),
        messaging.WithUpdateSmtpProviderReplyToName("<REPLY_TO_NAME>"),
        messaging.WithUpdateSmtpProviderReplyToEmail("<REPLY_TO_EMAIL>"),
        messaging.WithUpdateSmtpProviderEnabled(false),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Provider](/docs/references/1.7.x/models/provider)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.UpdateTelesignProvider(
        "<PROVIDER_ID>",
        messaging.WithUpdateTelesignProviderName("<NAME>"),
        messaging.WithUpdateTelesignProviderEnabled(false),
        messaging.WithUpdateTelesignProviderCustomerId("<CUSTOMER_ID>"),
        messaging.WithUpdateTelesignProviderApiKey("<API_KEY>"),
        messaging.WithUpdateTelesignProviderFrom("<FROM>"),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Provider](/docs/references/1.7.x/models/provider)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.UpdateTextmagicProvider(
        "<PROVIDER_ID>",
        messaging.WithUpdateTextmagicProviderName("<NAME>"),
        messaging.WithUpdateTextmagicProviderEnabled(false),
        messaging.WithUpdateTextmagicProviderUsername("<USERNAME>"),
        messaging.WithUpdateTextmagicProviderApiKey("<API_KEY>"),
        messaging.WithUpdateTextmagicProviderFrom("<FROM>"),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Provider](/docs/references/1.7.x/models/provider)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.UpdateTwilioProvider(
        "<PROVIDER_ID>",
        messaging.WithUpdateTwilioProviderName("<NAME>"),
        messaging.WithUpdateTwilioProviderEnabled(false),
        messaging.WithUpdateTwilioProviderAccountSid("<ACCOUNT_SID>"),
        messaging.WithUpdateTwilioProviderAuthToken("<AUTH_TOKEN>"),
        messaging.WithUpdateTwilioProviderFrom("<FROM>"),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Provider](/docs/references/1.7.x/models/provider)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.UpdateVonageProvider(
        "<PROVIDER_ID>",
        messaging.WithUpdateVonageProviderName("<NAME>"),
        messaging.WithUpdateVonageProviderEnabled(false),
        messaging.WithUpdateVonageProviderApiKey("<API_KEY>"),
        messaging.WithUpdateVonageProviderApiSecret("<API_SECRET>"),
        messaging.WithUpdateVonageProviderFrom("<FROM>"),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.DeleteProvider(
        "<PROVIDER_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
  - [Topic](/docs/references/1.7.x/models/topic)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.CreateTopic(
        "<TOPIC_ID>",
        "<NAME>",
        messaging.WithCreateTopicSubscribe(interface{}{"any"}),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Topic](/docs/references/1.7.x/models/topic)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.GetTopic(
        "<TOPIC_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Logs List](/docs/references/1.7.x/models/logList)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.ListTopicLogs(
        "<TOPIC_ID>",
        messaging.WithListTopicLogsQueries([]interface{}{}),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Topic list](/docs/references/1.7.x/models/topicList)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.ListTopics(
        messaging.WithListTopicsQueries([]interface{}{}),
        messaging.WithListTopicsSearch("<SEARCH>"),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Topic](/docs/references/1.7.x/models/topic)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.UpdateTopic(
        "<TOPIC_ID>",
        messaging.WithUpdateTopicName("<NAME>"),
        messaging.WithUpdateTopicSubscribe(interface{}{"any"}),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.DeleteTopic(
        "<TOPIC_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
  - [Subscriber](/docs/references/1.7.x/models/subscriber)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithJWT("<YOUR_JWT>") // Your secret JSON Web Token
    )

    service := messaging.New(client)
    response, error := service.CreateSubscriber(
        "<TOPIC_ID>",
        "<SUBSCRIBER_ID>",
        "<TARGET_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Subscriber](/docs/references/1.7.x/models/subscriber)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.GetSubscriber(
        "<TOPIC_ID>",
        "<SUBSCRIBER_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Logs List](/docs/references/1.7.x/models/logList)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.ListSubscriberLogs(
        "<SUBSCRIBER_ID>",
        messaging.WithListSubscriberLogsQueries([]interface{}{}),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Subscriber list](/docs/references/1.7.x/models/subscriberList)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.ListSubscribers(
        "<TOPIC_ID>",
        messaging.WithListSubscribersQueries([]interface{}{}),
        messaging.WithListSubscribersSearch("<SEARCH>"),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithJWT("<YOUR_JWT>") // Your secret JSON Web Token
    )

    service := messaging.New(client)
    response, error := service.DeleteSubscriber(
        "<TOPIC_ID>",
        "<SUBSCRIBER_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
  - [Message](/docs/references/1.7.x/models/message)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.CreateEmail(
        "<MESSAGE_ID>",
        "<SUBJECT>",
        "<CONTENT>",
        messaging.WithCreateEmailTopics([]interface{}{}),
        messaging.WithCreateEmailUsers([]interface{}{}),
        messaging.WithCreateEmailTargets([]interface{}{}),
        messaging.WithCreateEmailCc([]interface{}{}),
        messaging.WithCreateEmailBcc([]interface{}{}),
        messaging.WithCreateEmailAttachments([]interface{}{}),
        messaging.WithCreateEmailDraft(false),
        messaging.WithCreateEmailHtml(false),
        messaging.WithCreateEmailScheduledAt(""),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Message](/docs/references/1.7.x/models/message)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.CreatePush(
        "<MESSAGE_ID>",
        messaging.WithCreatePushTitle("<TITLE>"),
        messaging.WithCreatePushBody("<BODY>"),
        messaging.WithCreatePushTopics([]interface{}{}),
        messaging.WithCreatePushUsers([]interface{}{}),
        messaging.WithCreatePushTargets([]interface{}{}),
        messaging.WithCreatePushData(map[string]interface{}{}),
        messaging.WithCreatePushAction("<ACTION>"),
        messaging.WithCreatePushImage("[ID1:ID2]"),
        messaging.WithCreatePushIcon("<ICON>"),
        messaging.WithCreatePushSound("<SOUND>"),
        messaging.WithCreatePushColor("<COLOR>"),
        messaging.WithCreatePushTag("<TAG>"),
        messaging.WithCreatePushBadge(0),
        messaging.WithCreatePushDraft(false),
        messaging.WithCreatePushScheduledAt(""),
        messaging.WithCreatePushContentAvailable(false),
        messaging.WithCreatePushCritical(false),
        messaging.WithCreatePushPriority("normal"),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Message](/docs/references/1.7.x/models/message)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.CreateSms(
        "<MESSAGE_ID>",
        "<CONTENT>",
        messaging.WithCreateSmsTopics([]interface{}{}),
        messaging.WithCreateSmsUsers([]interface{}{}),
        messaging.WithCreateSmsTargets([]interface{}{}),
        messaging.WithCreateSmsDraft(false),
        messaging.WithCreateSmsScheduledAt(""),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Message](/docs/references/1.7.x/models/message)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.GetMessage(
        "<MESSAGE_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Target list](/docs/references/1.7.x/models/targetList)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.ListTargets(
        "<MESSAGE_ID>",
        messaging.WithListTargetsQueries([]interface{}{}),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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
  - [Message list](/docs/references/1.7.x/models/messageList)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.ListMessages(
        messaging.WithListMessagesQueries([]interface{}{}),
        messaging.WithListMessagesSearch("<SEARCH>"),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
  - [Message](/docs/references/1.7.x/models/message)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.UpdateEmail(
        "<MESSAGE_ID>",
        messaging.WithUpdateEmailTopics([]interface{}{}),
        messaging.WithUpdateEmailUsers([]interface{}{}),
        messaging.WithUpdateEmailTargets([]interface{}{}),
        messaging.WithUpdateEmailSubject("<SUBJECT>"),
        messaging.WithUpdateEmailContent("<CONTENT>"),
        messaging.WithUpdateEmailDraft(false),
        messaging.WithUpdateEmailHtml(false),
        messaging.WithUpdateEmailCc([]interface{}{}),
        messaging.WithUpdateEmailBcc([]interface{}{}),
        messaging.WithUpdateEmailScheduledAt(""),
        messaging.WithUpdateEmailAttachments([]interface{}{}),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
  - [Message](/docs/references/1.7.x/models/message)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.UpdatePush(
        "<MESSAGE_ID>",
        messaging.WithUpdatePushTopics([]interface{}{}),
        messaging.WithUpdatePushUsers([]interface{}{}),
        messaging.WithUpdatePushTargets([]interface{}{}),
        messaging.WithUpdatePushTitle("<TITLE>"),
        messaging.WithUpdatePushBody("<BODY>"),
        messaging.WithUpdatePushData(map[string]interface{}{}),
        messaging.WithUpdatePushAction("<ACTION>"),
        messaging.WithUpdatePushImage("[ID1:ID2]"),
        messaging.WithUpdatePushIcon("<ICON>"),
        messaging.WithUpdatePushSound("<SOUND>"),
        messaging.WithUpdatePushColor("<COLOR>"),
        messaging.WithUpdatePushTag("<TAG>"),
        messaging.WithUpdatePushBadge(0),
        messaging.WithUpdatePushDraft(false),
        messaging.WithUpdatePushScheduledAt(""),
        messaging.WithUpdatePushContentAvailable(false),
        messaging.WithUpdatePushCritical(false),
        messaging.WithUpdatePushPriority("normal"),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
  - [Message](/docs/references/1.7.x/models/message)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.UpdateSms(
        "<MESSAGE_ID>",
        messaging.WithUpdateSmsTopics([]interface{}{}),
        messaging.WithUpdateSmsUsers([]interface{}{}),
        messaging.WithUpdateSmsTargets([]interface{}{}),
        messaging.WithUpdateSmsContent("<CONTENT>"),
        messaging.WithUpdateSmsDraft(false),
        messaging.WithUpdateSmsScheduledAt(""),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
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

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.Delete(
        "<MESSAGE_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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

**Responses:**

- **200**: application/json
  - [Logs List](/docs/references/1.7.x/models/logList)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/messaging"
)

func main() {
    client := client.New(
        client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
        client.WithProject("<YOUR_PROJECT_ID>") // Your project ID
        client.WithKey("<YOUR_API_KEY>") // Your secret API key
    )

    service := messaging.New(client)
    response, error := service.ListMessageLogs(
        "<MESSAGE_ID>",
        messaging.WithListMessageLogsQueries([]interface{}{}),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

