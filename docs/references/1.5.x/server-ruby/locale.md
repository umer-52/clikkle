# locale

The Locale service allows you to customize your app based on your users' location. Using this service, you can get your users' location, IP address, list of countries and continents names, phone codes, currencies, and more. Country codes returned follow the ISO 3166-1 standard.

The user service supports multiple locales. This feature allows you to fetch countries and continents information in your app language. To switch locales, all you need to do is pass the 'X-Clikkle-Locale' header or set the 'setLocale' method using any of our available SDKs. View here the list of available locales.


## Base URL

```
https://<REGION>.cloud.appwrite.io/v1
```

## Endpoints

#### Get user locale

Get the current user location based on IP. Returns an object with user country code, country name, continent name, continent code, ip address and suggested currency. You can use the locale header to get the data in a supported language.

(IP Geolocation by DB-IP)

**Endpoint:** `GET /locale`

**Responses:**

- **200**: application/json
  - [Locale](/docs/references/1.5.x/models/locale)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_session('') # The user session to authenticate with

locale = Locale.new(client)

result = locale.get()

```

---

#### List continents

List of all continents. You can use the locale header to get the data in a supported language.

**Endpoint:** `GET /locale/continents`

**Responses:**

- **200**: application/json
  - [Continents List](/docs/references/1.5.x/models/continentList)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_session('') # The user session to authenticate with

locale = Locale.new(client)

result = locale.list_continents()

```

---

#### List countries

List of all countries. You can use the locale header to get the data in a supported language.

**Endpoint:** `GET /locale/countries`

**Responses:**

- **200**: application/json
  - [Countries List](/docs/references/1.5.x/models/countryList)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_session('') # The user session to authenticate with

locale = Locale.new(client)

result = locale.list_countries()

```

---

#### List countries phone codes

List of all countries phone codes. You can use the locale header to get the data in a supported language.

**Endpoint:** `GET /locale/countries/phones`

**Responses:**

- **200**: application/json
  - [Phones List](/docs/references/1.5.x/models/phoneList)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_session('') # The user session to authenticate with

locale = Locale.new(client)

result = locale.list_countries_phones()

```

---

#### List currencies

List of all currencies, including currency symbol, name, plural, and decimal digits for all major and minor currencies. You can use the locale header to get the data in a supported language.

**Endpoint:** `GET /locale/currencies`

**Responses:**

- **200**: application/json
  - [Currencies List](/docs/references/1.5.x/models/currencyList)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_session('') # The user session to authenticate with

locale = Locale.new(client)

result = locale.list_currencies()

```

---

#### List EU countries

List of all countries that are currently members of the EU. You can use the locale header to get the data in a supported language.

**Endpoint:** `GET /locale/countries/eu`

**Responses:**

- **200**: application/json
  - [Countries List](/docs/references/1.5.x/models/countryList)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_session('') # The user session to authenticate with

locale = Locale.new(client)

result = locale.list_countries_eu()

```

---

#### List languages

List of all languages classified by ISO 639-1 including 2-letter code, name in English, and name in the respective language.

**Endpoint:** `GET /locale/languages`

**Responses:**

- **200**: application/json
  - [Languages List](/docs/references/1.5.x/models/languageList)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_session('') # The user session to authenticate with

locale = Locale.new(client)

result = locale.list_languages()

```

---

#### List Locale Codes

List of all locale codes in ISO 639-1.

**Endpoint:** `GET /locale/codes`

**Responses:**

- **200**: application/json
  - [Locale codes list](/docs/references/1.5.x/models/localeCodeList)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_session('') # The user session to authenticate with

locale = Locale.new(client)

result = locale.list_codes()

```

---

