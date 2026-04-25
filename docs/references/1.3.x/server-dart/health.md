# health

The Health service is designed to allow you to both validate and monitor that your Clikkle instance and all of its internal components are up and responsive.


## Base URL

```
https://<REGION>.cloud.appwrite.io/v1
```

## Endpoints

#### Get Antivirus

Check the Appwrite Antivirus server is up and connection is successful.

**Endpoint:** `GET /health/anti-virus`

**Responses:**

- **200**: application/json
  - [Health Antivirus](/docs/references/1.3.x/models/healthAntivirus)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Health health = Health(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
  ;

  Future result = health.getAntivirus();

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
```

---

#### Get Cache

Check the Appwrite in-memory cache server is up and connection is successful.

**Endpoint:** `GET /health/cache`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/1.3.x/models/healthStatus)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Health health = Health(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
  ;

  Future result = health.getCache();

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
```

---

#### Get Certificates Queue

Get the number of certificates that are waiting to be issued against Letsencrypt in the Appwrite internal queue server.

**Endpoint:** `GET /health/queue/certificates`

**Responses:**

- **200**: application/json
  - [Health Queue](/docs/references/1.3.x/models/healthQueue)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Health health = Health(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
  ;

  Future result = health.getQueueCertificates();

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
```

---

#### Get DB

Check the Appwrite database server is up and connection is successful.

**Endpoint:** `GET /health/db`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/1.3.x/models/healthStatus)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Health health = Health(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
  ;

  Future result = health.getDB();

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
```

---

#### Get Functions Queue

**Endpoint:** `GET /health/queue/functions`

**Responses:**

- **200**: application/json
  - [Health Queue](/docs/references/1.3.x/models/healthQueue)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Health health = Health(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
  ;

  Future result = health.getQueueFunctions();

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
```

---

#### Get HTTP

Check the Appwrite HTTP server is up and responsive.

**Endpoint:** `GET /health`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/1.3.x/models/healthStatus)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Health health = Health(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
  ;

  Future result = health.get();

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
```

---

#### Get Local Storage

Check the Appwrite local storage device is up and connection is successful.

**Endpoint:** `GET /health/storage/local`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/1.3.x/models/healthStatus)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Health health = Health(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
  ;

  Future result = health.getStorageLocal();

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
```

---

#### Get Logs Queue

Get the number of logs that are waiting to be processed in the Appwrite internal queue server.

**Endpoint:** `GET /health/queue/logs`

**Responses:**

- **200**: application/json
  - [Health Queue](/docs/references/1.3.x/models/healthQueue)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Health health = Health(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
  ;

  Future result = health.getQueueLogs();

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
```

---

#### Get Time

Check the Appwrite server time is synced with Google remote NTP server. We use this technology to smoothly handle leap seconds with no disruptive events. The Network Time Protocol (NTP) is used by hundreds of millions of computers and devices to synchronize their clocks over the Internet. If your computer sets its own clock, it likely uses NTP.

**Endpoint:** `GET /health/time`

**Responses:**

- **200**: application/json
  - [Health Time](/docs/references/1.3.x/models/healthTime)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Health health = Health(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
  ;

  Future result = health.getTime();

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
```

---

#### Get Webhooks Queue

Get the number of webhooks that are waiting to be processed in the Appwrite internal queue server.

**Endpoint:** `GET /health/queue/webhooks`

**Responses:**

- **200**: application/json
  - [Health Queue](/docs/references/1.3.x/models/healthQueue)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Health health = Health(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
  ;

  Future result = health.getQueueWebhooks();

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
```

---

