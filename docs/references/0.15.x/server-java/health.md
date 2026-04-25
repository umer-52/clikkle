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
  - [Health Antivirus](/docs/references/0.15.x/models/healthAntivirus)

**Example:**

```server-java
import io.appwrite.Client
import io.appwrite.services.Health

public void main() {
    Client client = Client(context)
        .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
        .setProject("5df5acd0d48c2") // Your project ID
        .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

    Health health = new Health(client);
    health.getAntivirus(new Continuation<Response>() {
        @NotNull
        @Override
        public CoroutineContext getContext() {
            return EmptyCoroutineContext.INSTANCE;
        }

        @Override
        public void resumeWith(@NotNull Object o) {
            String json = "";
            try {
                if (o instanceof Result.Failure) {
                    Result.Failure failure = (Result.Failure) o;
                    throw failure.exception;
                } else {
                    Response response = (Response) o;
                }
            } catch (Throwable th) {
                Log.e("ERROR", th.toString());
            }
        }
    });
}
```

---

#### Get Cache

Check the Appwrite in-memory cache server is up and connection is successful.

**Endpoint:** `GET /health/cache`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/0.15.x/models/healthStatus)

**Example:**

```server-java
import io.appwrite.Client
import io.appwrite.services.Health

public void main() {
    Client client = Client(context)
        .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
        .setProject("5df5acd0d48c2") // Your project ID
        .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

    Health health = new Health(client);
    health.getCache(new Continuation<Response>() {
        @NotNull
        @Override
        public CoroutineContext getContext() {
            return EmptyCoroutineContext.INSTANCE;
        }

        @Override
        public void resumeWith(@NotNull Object o) {
            String json = "";
            try {
                if (o instanceof Result.Failure) {
                    Result.Failure failure = (Result.Failure) o;
                    throw failure.exception;
                } else {
                    Response response = (Response) o;
                }
            } catch (Throwable th) {
                Log.e("ERROR", th.toString());
            }
        }
    });
}
```

---

#### Get Certificates Queue

Get the number of certificates that are waiting to be issued against Letsencrypt in the Appwrite internal queue server.

**Endpoint:** `GET /health/queue/certificates`

**Responses:**

- **200**: application/json
  - [Health Queue](/docs/references/0.15.x/models/healthQueue)

**Example:**

```server-java
import io.appwrite.Client
import io.appwrite.services.Health

public void main() {
    Client client = Client(context)
        .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
        .setProject("5df5acd0d48c2") // Your project ID
        .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

    Health health = new Health(client);
    health.getQueueCertificates(new Continuation<Response>() {
        @NotNull
        @Override
        public CoroutineContext getContext() {
            return EmptyCoroutineContext.INSTANCE;
        }

        @Override
        public void resumeWith(@NotNull Object o) {
            String json = "";
            try {
                if (o instanceof Result.Failure) {
                    Result.Failure failure = (Result.Failure) o;
                    throw failure.exception;
                } else {
                    Response response = (Response) o;
                }
            } catch (Throwable th) {
                Log.e("ERROR", th.toString());
            }
        }
    });
}
```

---

#### Get DB

Check the Appwrite database server is up and connection is successful.

**Endpoint:** `GET /health/db`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/0.15.x/models/healthStatus)

**Example:**

```server-java
import io.appwrite.Client
import io.appwrite.services.Health

public void main() {
    Client client = Client(context)
        .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
        .setProject("5df5acd0d48c2") // Your project ID
        .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

    Health health = new Health(client);
    health.getDB(new Continuation<Response>() {
        @NotNull
        @Override
        public CoroutineContext getContext() {
            return EmptyCoroutineContext.INSTANCE;
        }

        @Override
        public void resumeWith(@NotNull Object o) {
            String json = "";
            try {
                if (o instanceof Result.Failure) {
                    Result.Failure failure = (Result.Failure) o;
                    throw failure.exception;
                } else {
                    Response response = (Response) o;
                }
            } catch (Throwable th) {
                Log.e("ERROR", th.toString());
            }
        }
    });
}
```

---

#### Get Functions Queue

**Endpoint:** `GET /health/queue/functions`

**Responses:**

- **200**: application/json
  - [Health Queue](/docs/references/0.15.x/models/healthQueue)

**Example:**

```server-java
import io.appwrite.Client
import io.appwrite.services.Health

public void main() {
    Client client = Client(context)
        .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
        .setProject("5df5acd0d48c2") // Your project ID
        .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

    Health health = new Health(client);
    health.getQueueFunctions(new Continuation<Response>() {
        @NotNull
        @Override
        public CoroutineContext getContext() {
            return EmptyCoroutineContext.INSTANCE;
        }

        @Override
        public void resumeWith(@NotNull Object o) {
            String json = "";
            try {
                if (o instanceof Result.Failure) {
                    Result.Failure failure = (Result.Failure) o;
                    throw failure.exception;
                } else {
                    Response response = (Response) o;
                }
            } catch (Throwable th) {
                Log.e("ERROR", th.toString());
            }
        }
    });
}
```

---

#### Get HTTP

Check the Appwrite HTTP server is up and responsive.

**Endpoint:** `GET /health`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/0.15.x/models/healthStatus)

**Example:**

```server-java
import io.appwrite.Client
import io.appwrite.services.Health

public void main() {
    Client client = Client(context)
        .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
        .setProject("5df5acd0d48c2") // Your project ID
        .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

    Health health = new Health(client);
    health.get(new Continuation<Response>() {
        @NotNull
        @Override
        public CoroutineContext getContext() {
            return EmptyCoroutineContext.INSTANCE;
        }

        @Override
        public void resumeWith(@NotNull Object o) {
            String json = "";
            try {
                if (o instanceof Result.Failure) {
                    Result.Failure failure = (Result.Failure) o;
                    throw failure.exception;
                } else {
                    Response response = (Response) o;
                }
            } catch (Throwable th) {
                Log.e("ERROR", th.toString());
            }
        }
    });
}
```

---

#### Get Local Storage

Check the Appwrite local storage device is up and connection is successful.

**Endpoint:** `GET /health/storage/local`

**Responses:**

- **200**: application/json
  - [Health Status](/docs/references/0.15.x/models/healthStatus)

**Example:**

```server-java
import io.appwrite.Client
import io.appwrite.services.Health

public void main() {
    Client client = Client(context)
        .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
        .setProject("5df5acd0d48c2") // Your project ID
        .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

    Health health = new Health(client);
    health.getStorageLocal(new Continuation<Response>() {
        @NotNull
        @Override
        public CoroutineContext getContext() {
            return EmptyCoroutineContext.INSTANCE;
        }

        @Override
        public void resumeWith(@NotNull Object o) {
            String json = "";
            try {
                if (o instanceof Result.Failure) {
                    Result.Failure failure = (Result.Failure) o;
                    throw failure.exception;
                } else {
                    Response response = (Response) o;
                }
            } catch (Throwable th) {
                Log.e("ERROR", th.toString());
            }
        }
    });
}
```

---

#### Get Logs Queue

Get the number of logs that are waiting to be processed in the Appwrite internal queue server.

**Endpoint:** `GET /health/queue/logs`

**Responses:**

- **200**: application/json
  - [Health Queue](/docs/references/0.15.x/models/healthQueue)

**Example:**

```server-java
import io.appwrite.Client
import io.appwrite.services.Health

public void main() {
    Client client = Client(context)
        .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
        .setProject("5df5acd0d48c2") // Your project ID
        .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

    Health health = new Health(client);
    health.getQueueLogs(new Continuation<Response>() {
        @NotNull
        @Override
        public CoroutineContext getContext() {
            return EmptyCoroutineContext.INSTANCE;
        }

        @Override
        public void resumeWith(@NotNull Object o) {
            String json = "";
            try {
                if (o instanceof Result.Failure) {
                    Result.Failure failure = (Result.Failure) o;
                    throw failure.exception;
                } else {
                    Response response = (Response) o;
                }
            } catch (Throwable th) {
                Log.e("ERROR", th.toString());
            }
        }
    });
}
```

---

#### Get Time

Check the Appwrite server time is synced with Google remote NTP server. We use this technology to smoothly handle leap seconds with no disruptive events. The Network Time Protocol (NTP) is used by hundreds of millions of computers and devices to synchronize their clocks over the Internet. If your computer sets its own clock, it likely uses NTP.

**Endpoint:** `GET /health/time`

**Responses:**

- **200**: application/json
  - [Health Time](/docs/references/0.15.x/models/healthTime)

**Example:**

```server-java
import io.appwrite.Client
import io.appwrite.services.Health

public void main() {
    Client client = Client(context)
        .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
        .setProject("5df5acd0d48c2") // Your project ID
        .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

    Health health = new Health(client);
    health.getTime(new Continuation<Response>() {
        @NotNull
        @Override
        public CoroutineContext getContext() {
            return EmptyCoroutineContext.INSTANCE;
        }

        @Override
        public void resumeWith(@NotNull Object o) {
            String json = "";
            try {
                if (o instanceof Result.Failure) {
                    Result.Failure failure = (Result.Failure) o;
                    throw failure.exception;
                } else {
                    Response response = (Response) o;
                }
            } catch (Throwable th) {
                Log.e("ERROR", th.toString());
            }
        }
    });
}
```

---

#### Get Webhooks Queue

Get the number of webhooks that are waiting to be processed in the Appwrite internal queue server.

**Endpoint:** `GET /health/queue/webhooks`

**Responses:**

- **200**: application/json
  - [Health Queue](/docs/references/0.15.x/models/healthQueue)

**Example:**

```server-java
import io.appwrite.Client
import io.appwrite.services.Health

public void main() {
    Client client = Client(context)
        .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
        .setProject("5df5acd0d48c2") // Your project ID
        .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

    Health health = new Health(client);
    health.getQueueWebhooks(new Continuation<Response>() {
        @NotNull
        @Override
        public CoroutineContext getContext() {
            return EmptyCoroutineContext.INSTANCE;
        }

        @Override
        public void resumeWith(@NotNull Object o) {
            String json = "";
            try {
                if (o instanceof Result.Failure) {
                    Result.Failure failure = (Result.Failure) o;
                    throw failure.exception;
                } else {
                    Response response = (Response) o;
                }
            } catch (Throwable th) {
                Log.e("ERROR", th.toString());
            }
        }
    });
}
```

---

