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
  - [Health Antivirus](/docs/references/cloud/models/healthAntivirus)

**Example:**

```server-rest
GET /v1/health/anti-virus HTTP/1.1
Host: cloud.appwrite.io
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>
```

---

#### Get cache

Check the Appwrite in-memory cache servers are up and connection is successful.

**Endpoint:** `GET /health/cache`

**Responses:**

- **200**: application/json
  - [Status List](/docs/references/cloud/models/healthStatusList)

**Example:**

```server-rest
GET /v1/health/cache HTTP/1.1
Host: cloud.appwrite.io
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>
```

---

#### Get DB

Check the Appwrite database servers are up and connection is successful.

**Endpoint:** `GET /health/db`

**Responses:**

- **200**: application/json
  - [Status List](/docs/references/cloud/models/healthStatusList)

**Example:**

```server-rest
GET /v1/health/db HTTP/1.1
Host: cloud.appwrite.io
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>
```

---

#### Get HTTP

Check the Appwrite HTTP server is up and responsive.

**Endpoint:** `GET /health`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/cloud/models/healthStatus)

**Example:**

```server-rest
GET /v1/health HTTP/1.1
Host: cloud.appwrite.io
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>
```

---

#### Get pubsub

Check the Appwrite pub-sub servers are up and connection is successful.

**Endpoint:** `GET /health/pubsub`

**Responses:**

- **200**: application/json
  - [Status List](/docs/references/cloud/models/healthStatusList)

**Example:**

```server-rest
GET /v1/health/pubsub HTTP/1.1
Host: cloud.appwrite.io
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>
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
  - [Health Certificate](/docs/references/cloud/models/healthCertificate)

**Example:**

```server-rest
GET /v1/health/certificate HTTP/1.1
Host: cloud.appwrite.io
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>
```

---

#### Get time

Check the Appwrite server time is synced with Google remote NTP server. We use this technology to smoothly handle leap seconds with no disruptive events. The Network Time Protocol (NTP) is used by hundreds of millions of computers and devices to synchronize their clocks over the Internet. If your computer sets its own clock, it likely uses NTP.

**Endpoint:** `GET /health/time`

**Responses:**

- **200**: application/json
  - [Health Time](/docs/references/cloud/models/healthTime)

**Example:**

```server-rest
GET /v1/health/time HTTP/1.1
Host: cloud.appwrite.io
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>
```

---

### storage

#### Get local storage

Check the Appwrite local storage device is up and connection is successful.

**Endpoint:** `GET /health/storage/local`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/cloud/models/healthStatus)

**Example:**

```server-rest
GET /v1/health/storage/local HTTP/1.1
Host: cloud.appwrite.io
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>
```

---

#### Get storage

Check the Appwrite storage device is up and connection is successful.

**Endpoint:** `GET /health/storage`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/cloud/models/healthStatus)

**Example:**

```server-rest
GET /v1/health/storage HTTP/1.1
Host: cloud.appwrite.io
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>
```

---

### queue

#### Get audits queue

Get the number of audit logs that are waiting to be processed in the Appwrite internal queue server.

**Endpoint:** `GET /health/queue/audits`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| threshold | integer | No | Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000. |

**Responses:**

- **200**: application/json
  - [Health Queue](/docs/references/cloud/models/healthQueue)

**Example:**

```server-rest
GET /v1/health/queue/audits HTTP/1.1
Host: cloud.appwrite.io
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>
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
  - [Health Queue](/docs/references/cloud/models/healthQueue)

**Example:**

```server-rest
GET /v1/health/queue/builds HTTP/1.1
Host: cloud.appwrite.io
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>
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
  - [Health Queue](/docs/references/cloud/models/healthQueue)

**Example:**

```server-rest
GET /v1/health/queue/certificates HTTP/1.1
Host: cloud.appwrite.io
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>
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
  - [Health Queue](/docs/references/cloud/models/healthQueue)

**Example:**

```server-rest
GET /v1/health/queue/databases HTTP/1.1
Host: cloud.appwrite.io
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>
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
  - [Health Queue](/docs/references/cloud/models/healthQueue)

**Example:**

```server-rest
GET /v1/health/queue/deletes HTTP/1.1
Host: cloud.appwrite.io
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>
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
  - [Health Queue](/docs/references/cloud/models/healthQueue)

**Example:**

```server-rest
GET /v1/health/queue/functions HTTP/1.1
Host: cloud.appwrite.io
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>
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
  - [Health Queue](/docs/references/cloud/models/healthQueue)

**Example:**

```server-rest
GET /v1/health/queue/logs HTTP/1.1
Host: cloud.appwrite.io
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>
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
  - [Health Queue](/docs/references/cloud/models/healthQueue)

**Example:**

```server-rest
GET /v1/health/queue/mails HTTP/1.1
Host: cloud.appwrite.io
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>
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
  - [Health Queue](/docs/references/cloud/models/healthQueue)

**Example:**

```server-rest
GET /v1/health/queue/messaging HTTP/1.1
Host: cloud.appwrite.io
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>
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
  - [Health Queue](/docs/references/cloud/models/healthQueue)

**Example:**

```server-rest
GET /v1/health/queue/migrations HTTP/1.1
Host: cloud.appwrite.io
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>
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
  - [Health Queue](/docs/references/cloud/models/healthQueue)

**Example:**

```server-rest
GET /v1/health/queue/failed/{name} HTTP/1.1
Host: cloud.appwrite.io
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>
```

---

#### Get stats resources queue

Get the number of metrics that are waiting to be processed in the Appwrite stats resources queue.

**Endpoint:** `GET /health/queue/stats-resources`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| threshold | integer | No | Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000. |

**Responses:**

- **200**: application/json
  - [Health Queue](/docs/references/cloud/models/healthQueue)

**Example:**

```server-rest
GET /v1/health/queue/stats-resources HTTP/1.1
Host: cloud.appwrite.io
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>
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
  - [Health Queue](/docs/references/cloud/models/healthQueue)

**Example:**

```server-rest
GET /v1/health/queue/stats-usage HTTP/1.1
Host: cloud.appwrite.io
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>
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
  - [Health Queue](/docs/references/cloud/models/healthQueue)

**Example:**

```server-rest
GET /v1/health/queue/webhooks HTTP/1.1
Host: cloud.appwrite.io
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>
```

---

