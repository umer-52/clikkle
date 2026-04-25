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
  - [Health Antivirus](/docs/references/1.5.x/models/healthAntivirus)

**Example:**

```server-graphql
query {
    healthGetAntivirus {
        version
        status
    }
}

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
  - [Health Queue](/docs/references/1.5.x/models/healthQueue)

**Example:**

```server-graphql
query {
    healthGetQueueBuilds(
        threshold: 0
    ) {
        size
    }
}

```

---

#### Get cache

Check the Appwrite in-memory cache servers are up and connection is successful.

**Endpoint:** `GET /health/cache`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/1.5.x/models/healthStatus)

**Example:**

```server-graphql
query {
    healthGetCache {
        name
        ping
        status
    }
}

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
  - [Health Queue](/docs/references/1.5.x/models/healthQueue)

**Example:**

```server-graphql
query {
    healthGetQueueCertificates(
        threshold: 0
    ) {
        size
    }
}

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
  - [Health Queue](/docs/references/1.5.x/models/healthQueue)

**Example:**

```server-graphql
query {
    healthGetQueueDatabases(
        name: "<NAME>",
        threshold: 0
    ) {
        size
    }
}

```

---

#### Get DB

Check the Appwrite database servers are up and connection is successful.

**Endpoint:** `GET /health/db`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/1.5.x/models/healthStatus)

**Example:**

```server-graphql
query {
    healthGetDB {
        name
        ping
        status
    }
}

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
  - [Health Queue](/docs/references/1.5.x/models/healthQueue)

**Example:**

```server-graphql
query {
    healthGetQueueDeletes(
        threshold: 0
    ) {
        size
    }
}

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
  - [Health Queue](/docs/references/1.5.x/models/healthQueue)

**Example:**

```server-graphql
query {
    healthGetQueueFunctions(
        threshold: 0
    ) {
        size
    }
}

```

---

#### Get HTTP

Check the Appwrite HTTP server is up and responsive.

**Endpoint:** `GET /health`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/1.5.x/models/healthStatus)

**Example:**

```server-graphql
query {
    healthGet {
        name
        ping
        status
    }
}

```

---

#### Get local storage

Check the Appwrite local storage device is up and connection is successful.

**Endpoint:** `GET /health/storage/local`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/1.5.x/models/healthStatus)

**Example:**

```server-graphql
query {
    healthGetStorageLocal {
        name
        ping
        status
    }
}

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
  - [Health Queue](/docs/references/1.5.x/models/healthQueue)

**Example:**

```server-graphql
query {
    healthGetQueueLogs(
        threshold: 0
    ) {
        size
    }
}

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
  - [Health Queue](/docs/references/1.5.x/models/healthQueue)

**Example:**

```server-graphql
query {
    healthGetQueueMails(
        threshold: 0
    ) {
        size
    }
}

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
  - [Health Queue](/docs/references/1.5.x/models/healthQueue)

**Example:**

```server-graphql
query {
    healthGetQueueMessaging(
        threshold: 0
    ) {
        size
    }
}

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
  - [Health Queue](/docs/references/1.5.x/models/healthQueue)

**Example:**

```server-graphql
query {
    healthGetQueueMigrations(
        threshold: 0
    ) {
        size
    }
}

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
  - [Health Queue](/docs/references/1.5.x/models/healthQueue)

**Example:**

```server-graphql
query {
    healthGetFailedJobs(
        name: "v1-database",
        threshold: 0
    ) {
        size
    }
}

```

---

#### Get pubsub

Check the Appwrite pub-sub servers are up and connection is successful.

**Endpoint:** `GET /health/pubsub`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/1.5.x/models/healthStatus)

**Example:**

```server-graphql
query {
    healthGetPubSub {
        name
        ping
        status
    }
}

```

---

#### Get queue

Check the Appwrite queue messaging servers are up and connection is successful.

**Endpoint:** `GET /health/queue`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/1.5.x/models/healthStatus)

**Example:**

```server-graphql
query {
    healthGetQueue {
        name
        ping
        status
    }
}

```

---

#### Get storage

Check the Appwrite storage device is up and connection is successful.

**Endpoint:** `GET /health/storage`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/1.5.x/models/healthStatus)

**Example:**

```server-graphql
query {
    healthGetStorage {
        name
        ping
        status
    }
}

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
  - [Health Certificate](/docs/references/1.5.x/models/healthCertificate)

**Example:**

```server-graphql
query {
    healthGetCertificate(
        domain: ""
    ) {
        name
        subjectSN
        issuerOrganisation
        validFrom
        validTo
        signatureTypeSN
    }
}

```

---

#### Get time

Check the Appwrite server time is synced with Google remote NTP server. We use this technology to smoothly handle leap seconds with no disruptive events. The Network Time Protocol (NTP) is used by hundreds of millions of computers and devices to synchronize their clocks over the Internet. If your computer sets its own clock, it likely uses NTP.

**Endpoint:** `GET /health/time`

**Responses:**

- **200**: application/json
  - [Health Time](/docs/references/1.5.x/models/healthTime)

**Example:**

```server-graphql
query {
    healthGetTime {
        remoteTime
        localTime
        diff
    }
}

```

---

#### Get usage dump queue

Get the number of projects containing metrics that are waiting to be processed in the Appwrite internal queue server.

**Endpoint:** `GET /health/queue/usage-dump`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| threshold | integer | No | Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000. |

**Responses:**

- **200**: application/json
  - [Health Queue](/docs/references/1.5.x/models/healthQueue)

**Example:**

```server-graphql
query {
    healthGetQueueUsageDump(
        threshold: 0
    ) {
        size
    }
}

```

---

#### Get usage queue

Get the number of metrics that are waiting to be processed in the Appwrite internal queue server.

**Endpoint:** `GET /health/queue/usage`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| threshold | integer | No | Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000. |

**Responses:**

- **200**: application/json
  - [Health Queue](/docs/references/1.5.x/models/healthQueue)

**Example:**

```server-graphql
query {
    healthGetQueueUsage(
        threshold: 0
    ) {
        size
    }
}

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
  - [Health Queue](/docs/references/1.5.x/models/healthQueue)

**Example:**

```server-graphql
query {
    healthGetQueueWebhooks(
        threshold: 0
    ) {
        size
    }
}

```

---

