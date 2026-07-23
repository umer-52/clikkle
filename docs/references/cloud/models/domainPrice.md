# DomainPrice

DomainPrice

## Properties

| Name | Type | Description |
|------|------|-------------|
| domain | string | Domain name. |
| tld | string | Top-level domain for the requested domain. |
| available | boolean | Whether the domain is currently available for registration. |
| price | number | Domain registration price. |
| periodYears | integer | Price period in years. |

## Example

### REST

```json
{
  "domain": "example.com",
  "tld": "com",
  "available": true,
  "price": 25.99,
  "periodYears": 1
}
```

### GraphQL

```json
{
  "domain": "example.com",
  "tld": "com",
  "available": true,
  "price": 25.99,
  "periodYears": 1
}
```

