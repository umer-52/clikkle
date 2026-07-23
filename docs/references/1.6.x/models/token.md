# Token

Token

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Token ID. |
| $createdAt | string | Token creation date in ISO 8601 format. |
| userId | string | User ID. |
| secret | string | Token secret key. This will return an empty string unless the response is returned using an API key or as part of a webhook payload. |
| expire | string | Token expiration date in ISO 8601 format. |
| phrase | string | Security phrase of a token. Empty if security phrase was not requested when creating a token. It includes randomly generated phrase which is also sent in the external resource such as email. |

## Example

### REST

```json
{}
```

### GraphQL

```json
{}
```

