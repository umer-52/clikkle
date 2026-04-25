# Domain

Domain

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Domain ID. |
| $createdAt | string | Domain creation time in ISO 8601 format. |
| $updatedAt | string | Domain update date in ISO 8601 format. |
| domain | string | Domain name. |
| registrar | string | Domain registrar (e.g. "appwrite" or "third_party"). |
| nameservers | string | Nameservers setting. "Appwrite" or empty string. |
| expire | string | Domain expiry date in ISO 8601 format. |
| renewal | string | Domain renewal date in ISO 8601 format. |
| autoRenewal | boolean | If set to true, the domain will automatically renew. |
| renewalPrice | number | Renewal price (in USD). |
| teamId | string | Team ID. |
| dnsRecords | array<dnsRecord> | Dns records Can be one of: [DNSRecord model](/docs/references/1.8.x/models/dnsRecord) |

## Example

### REST

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "domain": "example.com",
  "registrar": "appwrite",
  "nameservers": "Appwrite",
  "expire": "2020-10-15T06:38:00.000+00:00",
  "renewal": "2020-10-15T06:38:00.000+00:00",
  "autoRenewal": true,
  "renewalPrice": 25.99,
  "teamId": "5e5ea5c16897e",
  "dnsRecords": []
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "domain": "example.com",
  "registrar": "appwrite",
  "nameservers": "Appwrite",
  "expire": "2020-10-15T06:38:00.000+00:00",
  "renewal": "2020-10-15T06:38:00.000+00:00",
  "autoRenewal": true,
  "renewalPrice": 25.99,
  "teamId": "5e5ea5c16897e",
  "dnsRecords": []
}
```

