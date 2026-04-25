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
  - [Locale](/docs/references/1.2.x/models/locale)

**Example:**

```client-android-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Locale;

Client client = new Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2"); // Your project ID

Locale locale = new Locale(client);

locale.get(new CoroutineCallback<>((result, error) -> {
   if (error != null)
        error.printStackTrace();
        return;
    }

    Log.d("Appwrite", result.toString());
}));

```

---

#### List Continents

List of all continents. You can use the locale header to get the data in a supported language.

**Endpoint:** `GET /locale/continents`

**Responses:**

- **200**: application/json
  - [Continents List](/docs/references/1.2.x/models/continentList)

**Example:**

```client-android-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Locale;

Client client = new Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2"); // Your project ID

Locale locale = new Locale(client);

locale.listContinents(new CoroutineCallback<>((result, error) -> {
   if (error != null)
        error.printStackTrace();
        return;
    }

    Log.d("Appwrite", result.toString());
}));

```

---

#### List Countries

List of all countries. You can use the locale header to get the data in a supported language.

**Endpoint:** `GET /locale/countries`

**Responses:**

- **200**: application/json
  - [Countries List](/docs/references/1.2.x/models/countryList)

**Example:**

```client-android-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Locale;

Client client = new Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2"); // Your project ID

Locale locale = new Locale(client);

locale.listCountries(new CoroutineCallback<>((result, error) -> {
   if (error != null)
        error.printStackTrace();
        return;
    }

    Log.d("Appwrite", result.toString());
}));

```

---

#### List Countries Phone Codes

List of all countries phone codes. You can use the locale header to get the data in a supported language.

**Endpoint:** `GET /locale/countries/phones`

**Responses:**

- **200**: application/json
  - [Phones List](/docs/references/1.2.x/models/phoneList)

**Example:**

```client-android-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Locale;

Client client = new Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2"); // Your project ID

Locale locale = new Locale(client);

locale.listCountriesPhones(new CoroutineCallback<>((result, error) -> {
   if (error != null)
        error.printStackTrace();
        return;
    }

    Log.d("Appwrite", result.toString());
}));

```

---

#### List Currencies

List of all currencies, including currency symbol, name, plural, and decimal digits for all major and minor currencies. You can use the locale header to get the data in a supported language.

**Endpoint:** `GET /locale/currencies`

**Responses:**

- **200**: application/json
  - [Currencies List](/docs/references/1.2.x/models/currencyList)

**Example:**

```client-android-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Locale;

Client client = new Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2"); // Your project ID

Locale locale = new Locale(client);

locale.listCurrencies(new CoroutineCallback<>((result, error) -> {
   if (error != null)
        error.printStackTrace();
        return;
    }

    Log.d("Appwrite", result.toString());
}));

```

---

#### List EU Countries

List of all countries that are currently members of the EU. You can use the locale header to get the data in a supported language.

**Endpoint:** `GET /locale/countries/eu`

**Responses:**

- **200**: application/json
  - [Countries List](/docs/references/1.2.x/models/countryList)

**Example:**

```client-android-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Locale;

Client client = new Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2"); // Your project ID

Locale locale = new Locale(client);

locale.listCountriesEU(new CoroutineCallback<>((result, error) -> {
   if (error != null)
        error.printStackTrace();
        return;
    }

    Log.d("Appwrite", result.toString());
}));

```

---

#### List Languages

List of all languages classified by ISO 639-1 including 2-letter code, name in English, and name in the respective language.

**Endpoint:** `GET /locale/languages`

**Responses:**

- **200**: application/json
  - [Languages List](/docs/references/1.2.x/models/languageList)

**Example:**

```client-android-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Locale;

Client client = new Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2"); // Your project ID

Locale locale = new Locale(client);

locale.listLanguages(new CoroutineCallback<>((result, error) -> {
   if (error != null)
        error.printStackTrace();
        return;
    }

    Log.d("Appwrite", result.toString());
}));

```

---

