# health

The Health service is designed to allow you to both validate and monitor that your Clikkle instance and all of its internal components are up and responsive.


## Base URL

```
https://<REGION>.cloud.appwrite.io/v1
```

## Endpoints

### health

#### Get antivirus

Check the Appwrite Antivirus server is up and connection is successful.

**Endpoint:** `GET /health/anti-virus`

**Responses:**

- **200**: application/json
  - [Health Antivirus](/docs/references/1.6.x/models/healthAntivirus)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Health health = Health(client);

HealthAntivirus result = await health.getAntivirus();

```

---

#### Get cache

Check the Appwrite in-memory cache servers are up and connection is successful.

**Endpoint:** `GET /health/cache`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/1.6.x/models/healthStatus)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Health health = Health(client);

HealthStatus result = await health.getCache();

```

---

#### Get DB

Check the Appwrite database servers are up and connection is successful.

**Endpoint:** `GET /health/db`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/1.6.x/models/healthStatus)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Health health = Health(client);

HealthStatus result = await health.getDB();

```

---

#### Get HTTP

Check the Appwrite HTTP server is up and responsive.

**Endpoint:** `GET /health`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/1.6.x/models/healthStatus)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Health health = Health(client);

HealthStatus result = await health.get();

```

---

#### Get pubsub

Check the Appwrite pub-sub servers are up and connection is successful.

**Endpoint:** `GET /health/pubsub`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/1.6.x/models/healthStatus)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Health health = Health(client);

HealthStatus result = await health.getPubSub();

```

---

#### Get the SSL certificate for a domain

Get the SSL certificate for a domain

**Endpoint:** `GET /health/certificate`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| domain | string | No | string |

**Responses:**

- **200**: application/json
  - [Health Certificate](/docs/references/1.6.x/models/healthCertificate)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Health health = Health(client);

HealthCertificate result = await health.getCertificate(
    domain: '', // (optional)
);

```

---

#### Get time

Check the Appwrite server time is synced with Google remote NTP server. We use this technology to smoothly handle leap seconds with no disruptive events. The Network Time Protocol (NTP) is used by hundreds of millions of computers and devices to synchronize their clocks over the Internet. If your computer sets its own clock, it likely uses NTP.

**Endpoint:** `GET /health/time`

**Responses:**

- **200**: application/json
  - [Health Time](/docs/references/1.6.x/models/healthTime)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Health health = Health(client);

HealthTime result = await health.getTime();

```

---

### queue

#### Get builds queue

Get the number of builds that are waiting to be processed in the Appwrite internal queue server.

**Endpoint:** `GET /health/queue/builds`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| threshold | integer | No | Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000. |

**Responses:**

- **200**: application/json
  - [Health Queue](/docs/references/1.6.x/models/healthQueue)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Health health = Health(client);

HealthQueue result = await health.getQueueBuilds(
    threshold: 0, // (optional)
);

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
  - [Health Queue](/docs/references/1.6.x/models/healthQueue)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Health health = Health(client);

HealthQueue result = await health.getQueueCertificates(
    threshold: 0, // (optional)
);

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
  - [Health Queue](/docs/references/1.6.x/models/healthQueue)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Health health = Health(client);

HealthQueue result = await health.getQueueDatabases(
    name: '<NAME>', // (optional)
    threshold: 0, // (optional)
);

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
  - [Health Queue](/docs/references/1.6.x/models/healthQueue)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Health health = Health(client);

HealthQueue result = await health.getQueueDeletes(
    threshold: 0, // (optional)
);

```

---

#### Get functions queue

Get the number of function executions that are waiting to be processed in the Appwrite internal queue server.

**Endpoint:** `GET /health/queue/functions`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| threshold | integer | No | Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000. |

**Responses:**

- **200**: application/json
  - [Health Queue](/docs/references/1.6.x/models/healthQueue)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Health health = Health(client);

HealthQueue result = await health.getQueueFunctions(
    threshold: 0, // (optional)
);

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
  - [Health Queue](/docs/references/1.6.x/models/healthQueue)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Health health = Health(client);

HealthQueue result = await health.getQueueLogs(
    threshold: 0, // (optional)
);

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
  - [Health Queue](/docs/references/1.6.x/models/healthQueue)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Health health = Health(client);

HealthQueue result = await health.getQueueMails(
    threshold: 0, // (optional)
);

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
  - [Health Queue](/docs/references/1.6.x/models/healthQueue)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Health health = Health(client);

HealthQueue result = await health.getQueueMessaging(
    threshold: 0, // (optional)
);

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
  - [Health Queue](/docs/references/1.6.x/models/healthQueue)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Health health = Health(client);

HealthQueue result = await health.getQueueMigrations(
    threshold: 0, // (optional)
);

```

---

#### Get number of failed queue jobs

Returns the amount of failed jobs in a given queue.


**Endpoint:** `GET /health/queue/failed/{name}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| name | string | Yes | The name of the queue |
| threshold | integer | No | Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000. |

**Responses:**

- **200**: application/json
  - [Health Queue](/docs/references/1.6.x/models/healthQueue)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Health health = Health(client);

HealthQueue result = await health.getFailedJobs(
    name: .v1Database,
    threshold: 0, // (optional)
);

```

---

#### Get stats  resources queue

Get the number of metrics that are waiting to be processed in the Appwrite stats resources queue.

**Endpoint:** `GET /health/queue/stats-resources`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| threshold | integer | No | Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000. |

**Responses:**

- **200**: application/json
  - [Health Queue](/docs/references/1.6.x/models/healthQueue)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Health health = Health(client);

HealthQueue result = await health.getQueueStatsResources(
    threshold: 0, // (optional)
);

```

---

#### Get stats usage queue

Get the number of metrics that are waiting to be processed in the Appwrite internal queue server.

**Endpoint:** `GET /health/queue/stats-usage`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| threshold | integer | No | Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000. |

**Responses:**

- **200**: application/json
  - [Health Queue](/docs/references/1.6.x/models/healthQueue)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Health health = Health(client);

HealthQueue result = await health.getQueueUsage(
    threshold: 0, // (optional)
);

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
  - [Health Queue](/docs/references/1.6.x/models/healthQueue)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Health health = Health(client);

HealthQueue result = await health.getQueueWebhooks(
    threshold: 0, // (optional)
);

```

---

### storage

#### Get local storage

Check the Appwrite local storage device is up and connection is successful.

**Endpoint:** `GET /health/storage/local`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/1.6.x/models/healthStatus)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Health health = Health(client);

HealthStatus result = await health.getStorageLocal();

```

---

#### Get storage

Check the Appwrite storage device is up and connection is successful.

**Endpoint:** `GET /health/storage`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/1.6.x/models/healthStatus)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

Client client = Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

Health health = Health(client);

HealthStatus result = await health.getStorage();

```

---

