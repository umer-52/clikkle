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
  - [Locale](/docs/references/1.3.x/models/locale)

**Example:**

```client-graphql
query {
    localeGet {
        ip
        countryCode
        country
        continentCode
        continent
        eu
        currency
    }
}

```

---

#### List Continents

List of all continents. You can use the locale header to get the data in a supported language.

**Endpoint:** `GET /locale/continents`

**Responses:**

- **200**: application/json
  - [Continents List](/docs/references/1.3.x/models/continentList)

**Example:**

```client-graphql
query {
    localeListContinents {
        total
        continents {
            name
            code
        }
    }
}

```

---

#### List Countries

List of all countries. You can use the locale header to get the data in a supported language.

**Endpoint:** `GET /locale/countries`

**Responses:**

- **200**: application/json
  - [Countries List](/docs/references/1.3.x/models/countryList)

**Example:**

```client-graphql
query {
    localeListCountries {
        total
        countries {
            name
            code
        }
    }
}

```

---

#### List Countries Phone Codes

List of all countries phone codes. You can use the locale header to get the data in a supported language.

**Endpoint:** `GET /locale/countries/phones`

**Responses:**

- **200**: application/json
  - [Phones List](/docs/references/1.3.x/models/phoneList)

**Example:**

```client-graphql
query {
    localeListCountriesPhones {
        total
        phones {
            code
            countryCode
            countryName
        }
    }
}

```

---

#### List Currencies

List of all currencies, including currency symbol, name, plural, and decimal digits for all major and minor currencies. You can use the locale header to get the data in a supported language.

**Endpoint:** `GET /locale/currencies`

**Responses:**

- **200**: application/json
  - [Currencies List](/docs/references/1.3.x/models/currencyList)

**Example:**

```client-graphql
query {
    localeListCurrencies {
        total
        currencies {
            symbol
            name
            symbolNative
            decimalDigits
            rounding
            code
            namePlural
        }
    }
}

```

---

#### List EU Countries

List of all countries that are currently members of the EU. You can use the locale header to get the data in a supported language.

**Endpoint:** `GET /locale/countries/eu`

**Responses:**

- **200**: application/json
  - [Countries List](/docs/references/1.3.x/models/countryList)

**Example:**

```client-graphql
query {
    localeListCountriesEU {
        total
        countries {
            name
            code
        }
    }
}

```

---

#### List Languages

List of all languages classified by ISO 639-1 including 2-letter code, name in English, and name in the respective language.

**Endpoint:** `GET /locale/languages`

**Responses:**

- **200**: application/json
  - [Languages List](/docs/references/1.3.x/models/languageList)

**Example:**

```client-graphql
query {
    localeListLanguages {
        total
        languages {
            name
            code
            nativeName
        }
    }
}

```

---

