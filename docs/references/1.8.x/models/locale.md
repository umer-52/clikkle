# Locale

Locale

## Properties

| Name | Type | Description |
|------|------|-------------|
| ip | string | User IP address. |
| countryCode | string | Country code in [ISO 3166-1](http://en.wikipedia.org/wiki/ISO_3166-1) two-character format |
| country | string | Country name. This field support localization. |
| continentCode | string | Continent code. A two character continent code "AF" for Africa, "AN" for Antarctica, "AS" for Asia, "EU" for Europe, "NA" for North America, "OC" for Oceania, and "SA" for South America. |
| continent | string | Continent name. This field support localization. |
| eu | boolean | True if country is part of the European Union. |
| currency | string | Currency code in [ISO 4217-1](http://en.wikipedia.org/wiki/ISO_4217) three-character format |

## Example

### REST

```json
{
  "ip": "127.0.0.1",
  "countryCode": "US",
  "country": "United States",
  "continentCode": "NA",
  "continent": "North America",
  "eu": false,
  "currency": "USD"
}
```

### GraphQL

```json
{
  "ip": "127.0.0.1",
  "countryCode": "US",
  "country": "United States",
  "continentCode": "NA",
  "continent": "North America",
  "eu": false,
  "currency": "USD"
}
```

