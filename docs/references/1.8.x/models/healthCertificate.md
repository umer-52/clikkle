# Health Certificate

Health Certificate

## Properties

| Name | Type | Description |
|------|------|-------------|
| name | string | Certificate name |
| subjectSN | string | Subject SN |
| issuerOrganisation | string | Issuer organisation |
| validFrom | string | Valid from |
| validTo | string | Valid to |
| signatureTypeSN | string | Signature type SN |

## Example

### REST

```json
{
  "name": "/CN=www.google.com",
  "subjectSN": "",
  "issuerOrganisation": "",
  "validFrom": "1704200998",
  "validTo": "1711458597",
  "signatureTypeSN": "RSA-SHA256"
}
```

### GraphQL

```json
{
  "name": "/CN=www.google.com",
  "subjectSN": "",
  "issuerOrganisation": "",
  "validFrom": "1704200998",
  "validTo": "1711458597",
  "signatureTypeSN": "RSA-SHA256"
}
```

