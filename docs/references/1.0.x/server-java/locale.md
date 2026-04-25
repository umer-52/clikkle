# locale

The Locale service allows you to customize your app based on your users' location. Using this service, you can get your users' location, IP address, list of countries and continents names, phone codes, currencies, and more. Country codes returned follow the ISO 3166-1 standard.

The user service supports multiple locales. This feature allows you to fetch countries and continents information in your app language. To switch locales, all you need to do is pass the 'X-Clikkle-Locale' header or set the 'setLocale' method using any of our available SDKs. View here the list of available locales.


## Base URL

```
https://<REGION>.cloud.appwrite.io/v1
```

## Endpoints

#### Get User Locale

Get the current user location based on IP. Returns an object with user country code, country name, continent name, continent code, ip address and suggested currency. You can use the locale header to get the data in a supported language.

(IP Geolocation by DB-IP)

**Endpoint:** `GET /locale`

**Responses:**

- **200**: application/json
  - [Locale](/docs/references/1.0.x/models/locale)

**Example:**

```server-java
import io.appwrite.Client
import io.appwrite.services.Locale

public void main() {
    Client client = Client(context)
        .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
        .setProject("5df5acd0d48c2") // Your project ID
        .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

    Locale locale = new Locale(client);
    locale.get(new Continuation<Response>() {
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

#### List Continents

List of all continents. You can use the locale header to get the data in a supported language.

**Endpoint:** `GET /locale/continents`

**Responses:**

- **200**: application/json
  - [Continents List](/docs/references/1.0.x/models/continentList)

**Example:**

```server-java
import io.appwrite.Client
import io.appwrite.services.Locale

public void main() {
    Client client = Client(context)
        .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
        .setProject("5df5acd0d48c2") // Your project ID
        .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

    Locale locale = new Locale(client);
    locale.listContinents(new Continuation<Response>() {
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

#### List Countries

List of all countries. You can use the locale header to get the data in a supported language.

**Endpoint:** `GET /locale/countries`

**Responses:**

- **200**: application/json
  - [Countries List](/docs/references/1.0.x/models/countryList)

**Example:**

```server-java
import io.appwrite.Client
import io.appwrite.services.Locale

public void main() {
    Client client = Client(context)
        .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
        .setProject("5df5acd0d48c2") // Your project ID
        .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

    Locale locale = new Locale(client);
    locale.listCountries(new Continuation<Response>() {
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

#### List Countries Phone Codes

List of all countries phone codes. You can use the locale header to get the data in a supported language.

**Endpoint:** `GET /locale/countries/phones`

**Responses:**

- **200**: application/json
  - [Phones List](/docs/references/1.0.x/models/phoneList)

**Example:**

```server-java
import io.appwrite.Client
import io.appwrite.services.Locale

public void main() {
    Client client = Client(context)
        .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
        .setProject("5df5acd0d48c2") // Your project ID
        .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

    Locale locale = new Locale(client);
    locale.listCountriesPhones(new Continuation<Response>() {
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

#### List Currencies

List of all currencies, including currency symbol, name, plural, and decimal digits for all major and minor currencies. You can use the locale header to get the data in a supported language.

**Endpoint:** `GET /locale/currencies`

**Responses:**

- **200**: application/json
  - [Currencies List](/docs/references/1.0.x/models/currencyList)

**Example:**

```server-java
import io.appwrite.Client
import io.appwrite.services.Locale

public void main() {
    Client client = Client(context)
        .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
        .setProject("5df5acd0d48c2") // Your project ID
        .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

    Locale locale = new Locale(client);
    locale.listCurrencies(new Continuation<Response>() {
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

#### List EU Countries

List of all countries that are currently members of the EU. You can use the locale header to get the data in a supported language.

**Endpoint:** `GET /locale/countries/eu`

**Responses:**

- **200**: application/json
  - [Countries List](/docs/references/1.0.x/models/countryList)

**Example:**

```server-java
import io.appwrite.Client
import io.appwrite.services.Locale

public void main() {
    Client client = Client(context)
        .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
        .setProject("5df5acd0d48c2") // Your project ID
        .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

    Locale locale = new Locale(client);
    locale.listCountriesEU(new Continuation<Response>() {
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

#### List Languages

List of all languages classified by ISO 639-1 including 2-letter code, name in English, and name in the respective language.

**Endpoint:** `GET /locale/languages`

**Responses:**

- **200**: application/json
  - [Languages List](/docs/references/1.0.x/models/languageList)

**Example:**

```server-java
import io.appwrite.Client
import io.appwrite.services.Locale

public void main() {
    Client client = Client(context)
        .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
        .setProject("5df5acd0d48c2") // Your project ID
        .setKey("919c2d18fb5d4...a2ae413da83346ad2"); // Your secret API key

    Locale locale = new Locale(client);
    locale.listLanguages(new Continuation<Response>() {
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

