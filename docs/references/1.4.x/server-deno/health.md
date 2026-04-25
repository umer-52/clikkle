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

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let health = new sdk.Health(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = health.getAntivirus();

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
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

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let health = new sdk.Health(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = health.getQueueBuilds();

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Get cache

Check the Appwrite in-memory cache servers are up and connection is successful.

**Endpoint:** `GET /health/cache`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/1.4.x/models/healthStatus)

**Example:**

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let health = new sdk.Health(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = health.getCache();

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
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

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let health = new sdk.Health(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = health.getQueueCertificates();

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
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

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let health = new sdk.Health(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = health.getQueueDatabases();

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Get DB

Check the Appwrite database servers are up and connection is successful.

**Endpoint:** `GET /health/db`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/1.4.x/models/healthStatus)

**Example:**

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let health = new sdk.Health(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = health.getDB();

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
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

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let health = new sdk.Health(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = health.getQueueDeletes();

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
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

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let health = new sdk.Health(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = health.getQueueFunctions();

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Get HTTP

Check the Appwrite HTTP server is up and responsive.

**Endpoint:** `GET /health`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/1.4.x/models/healthStatus)

**Example:**

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let health = new sdk.Health(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = health.get();

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Get local storage

Check the Appwrite local storage device is up and connection is successful.

**Endpoint:** `GET /health/storage/local`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/1.4.x/models/healthStatus)

**Example:**

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let health = new sdk.Health(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = health.getStorageLocal();

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
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

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let health = new sdk.Health(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = health.getQueueLogs();

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
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

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let health = new sdk.Health(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = health.getQueueMails();

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
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

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let health = new sdk.Health(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = health.getQueueMessaging();

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
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

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let health = new sdk.Health(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = health.getQueueMigrations();

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Get pubsub

Check the Appwrite pub-sub servers are up and connection is successful.

**Endpoint:** `GET /health/pubsub`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/1.4.x/models/healthStatus)

**Example:**

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let health = new sdk.Health(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = health.getPubSub();

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Get queue

Check the Appwrite queue messaging servers are up and connection is successful.

**Endpoint:** `GET /health/queue`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/1.4.x/models/healthStatus)

**Example:**

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let health = new sdk.Health(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = health.getQueue();

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Get time

Check the Appwrite server time is synced with Google remote NTP server. We use this technology to smoothly handle leap seconds with no disruptive events. The Network Time Protocol (NTP) is used by hundreds of millions of computers and devices to synchronize their clocks over the Internet. If your computer sets its own clock, it likely uses NTP.

**Endpoint:** `GET /health/time`

**Responses:**

- **200**: application/json
  - [Health Time](/docs/references/1.4.x/models/healthTime)

**Example:**

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let health = new sdk.Health(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = health.getTime();

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
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

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let health = new sdk.Health(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = health.getQueueWebhooks();

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

