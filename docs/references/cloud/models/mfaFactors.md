# MFAFactors

MFAFactors

## Properties

| Name | Type | Description |
|------|------|-------------|
| totp | boolean | Can TOTP be used for MFA challenge for this account. |
| phone | boolean | Can phone (SMS) be used for MFA challenge for this account. |
| email | boolean | Can email be used for MFA challenge for this account. |
| recoveryCode | boolean | Can recovery code be used for MFA challenge for this account. |

## Example

### REST

```json
{
  "totp": true,
  "phone": true,
  "email": true,
  "recoveryCode": true
}
```

### GraphQL

```json
{
  "totp": true,
  "phone": true,
  "email": true,
  "recoveryCode": true
}
```

