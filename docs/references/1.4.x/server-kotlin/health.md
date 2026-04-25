# health

The Health service is designed to allow you to both validate and monitor that your Clikkle instance and all of its internal components are up and responsive.


## Base URL

```
https://<REGION>.cloud.appwrite.io/v1
```

## Endpoints

#### Get antivirus

Check the Appwrite Antivirus server is up and connection is successful.

**Endpoint:** `GET /health/anti-virus`

**Responses:**

- **200**: application/json
  - [Health Antivirus](/docs/references/1.4.x/models/healthAntivirus)

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.services.Health

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2") // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

val health = Health(client)

val response = health.getAntivirus()

```

---

#### Get builds queue

Get the number of builds that are waiting to be processed in the Appwrite internal queue server.

**Endpoint:** `GET /health/queue/builds`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| threshold | integer | No | Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000. |

**Responses:**

- **200**: application/json
  - [Health Queue](/docs/references/1.4.x/models/healthQueue)

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.services.Health

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2") // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

val health = Health(client)

val response = health.getQueueBuilds()

```

---

#### Get cache

Check the Appwrite in-memory cache servers are up and connection is successful.

**Endpoint:** `GET /health/cache`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/1.4.x/models/healthStatus)

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.services.Health

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2") // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

val health = Health(client)

val response = health.getCache()

```

---

#### Get certificates queue

Get the number of certificates that are waiting to be issued against Letsencrypt in the Appwrite internal queue server.

**Endpoint:** `GET /health/queue/certificates`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| threshold | integer | No | Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000. |

**Responses:**

- **200**: application/json
  - [Health Queue](/docs/references/1.4.x/models/healthQueue)

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.services.Health

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2") // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

val health = Health(client)

val response = health.getQueueCertificates()

```

---

#### Get databases queue

Get the number of database changes that are waiting to be processed in the Appwrite internal queue server.

**Endpoint:** `GET /health/queue/databases`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| name | string | No | Queue name for which to check the queue size |
| threshold | integer | No | Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000. |

**Responses:**

- **200**: application/json
  - [Health Queue](/docs/references/1.4.x/models/healthQueue)

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.services.Health

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2") // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

val health = Health(client)

val response = health.getQueueDatabases(
)

```

---

#### Get DB

Check the Appwrite database servers are up and connection is successful.

**Endpoint:** `GET /health/db`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/1.4.x/models/healthStatus)

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.services.Health

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2") // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

val health = Health(client)

val response = health.getDB()

```

---

#### Get deletes queue

Get the number of background destructive changes that are waiting to be processed in the Appwrite internal queue server.

**Endpoint:** `GET /health/queue/deletes`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| threshold | integer | No | Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000. |

**Responses:**

- **200**: application/json
  - [Health Queue](/docs/references/1.4.x/models/healthQueue)

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.services.Health

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2") // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

val health = Health(client)

val response = health.getQueueDeletes()

```

---

#### Get functions queue

**Endpoint:** `GET /health/queue/functions`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| threshold | integer | No | Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000. |

**Responses:**

- **200**: application/json
  - [Health Queue](/docs/references/1.4.x/models/healthQueue)

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.services.Health

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2") // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

val health = Health(client)

val response = health.getQueueFunctions()

```

---

#### Get HTTP

Check the Appwrite HTTP server is up and responsive.

**Endpoint:** `GET /health`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/1.4.x/models/healthStatus)

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.services.Health

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2") // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

val health = Health(client)

val response = health.get()

```

---

#### Get local storage

Check the Appwrite local storage device is up and connection is successful.

**Endpoint:** `GET /health/storage/local`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/1.4.x/models/healthStatus)

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.services.Health

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2") // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

val health = Health(client)

val response = health.getStorageLocal()

```

---

#### Get logs queue

Get the number of logs that are waiting to be processed in the Appwrite internal queue server.

**Endpoint:** `GET /health/queue/logs`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| threshold | integer | No | Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000. |

**Responses:**

- **200**: application/json
  - [Health Queue](/docs/references/1.4.x/models/healthQueue)

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.services.Health

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2") // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

val health = Health(client)

val response = health.getQueueLogs()

```

---

#### Get mails queue

Get the number of mails that are waiting to be processed in the Appwrite internal queue server.

**Endpoint:** `GET /health/queue/mails`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| threshold | integer | No | Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000. |

**Responses:**

- **200**: application/json
  - [Health Queue](/docs/references/1.4.x/models/healthQueue)

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.services.Health

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2") // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

val health = Health(client)

val response = health.getQueueMails()

```

---

#### Get messaging queue

Get the number of messages that are waiting to be processed in the Appwrite internal queue server.

**Endpoint:** `GET /health/queue/messaging`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| threshold | integer | No | Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000. |

**Responses:**

- **200**: application/json
  - [Health Queue](/docs/references/1.4.x/models/healthQueue)

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.services.Health

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2") // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

val health = Health(client)

val response = health.getQueueMessaging()

```

---

#### Get migrations queue

Get the number of migrations that are waiting to be processed in the Appwrite internal queue server.

**Endpoint:** `GET /health/queue/migrations`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| threshold | integer | No | Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000. |

**Responses:**

- **200**: application/json
  - [Health Queue](/docs/references/1.4.x/models/healthQueue)

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.services.Health

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2") // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

val health = Health(client)

val response = health.getQueueMigrations()

```

---

#### Get pubsub

Check the Appwrite pub-sub servers are up and connection is successful.

**Endpoint:** `GET /health/pubsub`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/1.4.x/models/healthStatus)

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.services.Health

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2") // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

val health = Health(client)

val response = health.getPubSub()

```

---

#### Get queue

Check the Appwrite queue messaging servers are up and connection is successful.

**Endpoint:** `GET /health/queue`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/1.4.x/models/healthStatus)

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.services.Health

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2") // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

val health = Health(client)

val response = health.getQueue()

```

---

#### Get time

Check the Appwrite server time is synced with Google remote NTP server. We use this technology to smoothly handle leap seconds with no disruptive events. The Network Time Protocol (NTP) is used by hundreds of millions of computers and devices to synchronize their clocks over the Internet. If your computer sets its own clock, it likely uses NTP.

**Endpoint:** `GET /health/time`

**Responses:**

- **200**: application/json
  - [Health Time](/docs/references/1.4.x/models/healthTime)

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.services.Health

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2") // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

val health = Health(client)

val response = health.getTime()

```

---

#### Get webhooks queue

Get the number of webhooks that are waiting to be processed in the Appwrite internal queue server.

**Endpoint:** `GET /health/queue/webhooks`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| threshold | integer | No | Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000. |

**Responses:**

- **200**: application/json
  - [Health Queue](/docs/references/1.4.x/models/healthQueue)

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.services.Health

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2") // Your project ID
    .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

val health = Health(client)

val response = health.getQueueWebhooks()

```

---

