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

```server-dotnet
using Appwrite;
using Appwrite.Services;
using Appwrite.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("5df5acd0d48c2") // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var health = new Health(client);

HealthAntivirus result = await health.GetAntivirus();
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

```server-dotnet
using Appwrite;
using Appwrite.Services;
using Appwrite.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("5df5acd0d48c2") // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var health = new Health(client);

HealthQueue result = await health.GetQueueBuilds();
```

---

#### Get cache

Check the Appwrite in-memory cache servers are up and connection is successful.

**Endpoint:** `GET /health/cache`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/1.4.x/models/healthStatus)

**Example:**

```server-dotnet
using Appwrite;
using Appwrite.Services;
using Appwrite.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("5df5acd0d48c2") // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var health = new Health(client);

HealthStatus result = await health.GetCache();
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

```server-dotnet
using Appwrite;
using Appwrite.Services;
using Appwrite.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("5df5acd0d48c2") // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var health = new Health(client);

HealthQueue result = await health.GetQueueCertificates();
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

```server-dotnet
using Appwrite;
using Appwrite.Services;
using Appwrite.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("5df5acd0d48c2") // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var health = new Health(client);

HealthQueue result = await health.GetQueueDatabases();
```

---

#### Get DB

Check the Appwrite database servers are up and connection is successful.

**Endpoint:** `GET /health/db`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/1.4.x/models/healthStatus)

**Example:**

```server-dotnet
using Appwrite;
using Appwrite.Services;
using Appwrite.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("5df5acd0d48c2") // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var health = new Health(client);

HealthStatus result = await health.GetDB();
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

```server-dotnet
using Appwrite;
using Appwrite.Services;
using Appwrite.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("5df5acd0d48c2") // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var health = new Health(client);

HealthQueue result = await health.GetQueueDeletes();
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

```server-dotnet
using Appwrite;
using Appwrite.Services;
using Appwrite.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("5df5acd0d48c2") // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var health = new Health(client);

HealthQueue result = await health.GetQueueFunctions();
```

---

#### Get HTTP

Check the Appwrite HTTP server is up and responsive.

**Endpoint:** `GET /health`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/1.4.x/models/healthStatus)

**Example:**

```server-dotnet
using Appwrite;
using Appwrite.Services;
using Appwrite.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("5df5acd0d48c2") // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var health = new Health(client);

HealthStatus result = await health.Get();
```

---

#### Get local storage

Check the Appwrite local storage device is up and connection is successful.

**Endpoint:** `GET /health/storage/local`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/1.4.x/models/healthStatus)

**Example:**

```server-dotnet
using Appwrite;
using Appwrite.Services;
using Appwrite.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("5df5acd0d48c2") // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var health = new Health(client);

HealthStatus result = await health.GetStorageLocal();
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

```server-dotnet
using Appwrite;
using Appwrite.Services;
using Appwrite.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("5df5acd0d48c2") // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var health = new Health(client);

HealthQueue result = await health.GetQueueLogs();
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

```server-dotnet
using Appwrite;
using Appwrite.Services;
using Appwrite.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("5df5acd0d48c2") // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var health = new Health(client);

HealthQueue result = await health.GetQueueMails();
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

```server-dotnet
using Appwrite;
using Appwrite.Services;
using Appwrite.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("5df5acd0d48c2") // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var health = new Health(client);

HealthQueue result = await health.GetQueueMessaging();
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

```server-dotnet
using Appwrite;
using Appwrite.Services;
using Appwrite.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("5df5acd0d48c2") // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var health = new Health(client);

HealthQueue result = await health.GetQueueMigrations();
```

---

#### Get pubsub

Check the Appwrite pub-sub servers are up and connection is successful.

**Endpoint:** `GET /health/pubsub`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/1.4.x/models/healthStatus)

**Example:**

```server-dotnet
using Appwrite;
using Appwrite.Services;
using Appwrite.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("5df5acd0d48c2") // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var health = new Health(client);

HealthStatus result = await health.GetPubSub();
```

---

#### Get queue

Check the Appwrite queue messaging servers are up and connection is successful.

**Endpoint:** `GET /health/queue`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/1.4.x/models/healthStatus)

**Example:**

```server-dotnet
using Appwrite;
using Appwrite.Services;
using Appwrite.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("5df5acd0d48c2") // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var health = new Health(client);

HealthStatus result = await health.GetQueue();
```

---

#### Get time

Check the Appwrite server time is synced with Google remote NTP server. We use this technology to smoothly handle leap seconds with no disruptive events. The Network Time Protocol (NTP) is used by hundreds of millions of computers and devices to synchronize their clocks over the Internet. If your computer sets its own clock, it likely uses NTP.

**Endpoint:** `GET /health/time`

**Responses:**

- **200**: application/json
  - [Health Time](/docs/references/1.4.x/models/healthTime)

**Example:**

```server-dotnet
using Appwrite;
using Appwrite.Services;
using Appwrite.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("5df5acd0d48c2") // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var health = new Health(client);

HealthTime result = await health.GetTime();
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

```server-dotnet
using Appwrite;
using Appwrite.Services;
using Appwrite.Models;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .SetProject("5df5acd0d48c2") // Your project ID
    .SetKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

var health = new Health(client);

HealthQueue result = await health.GetQueueWebhooks();
```

---

