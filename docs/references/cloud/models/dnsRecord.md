# DNSRecord

DNSRecord

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | DNS Record ID. |
| $createdAt | string | DNS Record creation time in ISO 8601 format. |
| $updatedAt | string | DNS Record update date in ISO 8601 format. |
| type | string | DNS record type (e.g. A, CNAME, MX). |
| name | string | Record name or subdomain. |
| value | string | Value of the record (IP address, domain, etc.). |
| ttl | integer | Time to live (in seconds). |
| priority | integer | Record priority (commonly used for MX). |
| lock | boolean | Whether this record is locked (read-only). |
| weight | integer | Record weight (used for SRV records). |
| port | integer | Target port (used for SRV records). |
| comment | string | Comment for the DNS record. |

## Example

### REST

```json
{
  "$id": "5f40a6e10c65e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "type": "A",
  "name": "mail",
  "value": "192.0.2.1",
  "ttl": 86400,
  "priority": 10,
  "lock": false,
  "weight": 10,
  "port": 443,
  "comment": "Mail server record"
}
```

### GraphQL

```json
{
  "_id": "5f40a6e10c65e",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "type": "A",
  "name": "mail",
  "value": "192.0.2.1",
  "ttl": 86400,
  "priority": 10,
  "lock": false,
  "weight": 10,
  "port": 443,
  "comment": "Mail server record"
}
```

