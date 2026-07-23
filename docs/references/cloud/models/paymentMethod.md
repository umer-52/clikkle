# paymentMethod

paymentMethod

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Payment Method ID. |
| $createdAt | string | Payment method creation time in ISO 8601 format. |
| $updatedAt | string | Payment method update date in ISO 8601 format. |
| $permissions | array | Payment method permissions. [Learn more about permissions](/docs/permissions). |
| providerMethodId | string | Payment method ID from the payment provider |
| clientSecret | string | Client secret hash for payment setup |
| providerUserId | string | User ID from the payment provider. |
| userId | string | ID of the Team. |
| expiryMonth | integer | Expiry month of the payment method. |
| expiryYear | integer | Expiry year of the payment method. |
| last4 | string | Last 4 digit of the payment method |
| brand | string | Payment method brand |
| name | string | Name of the owner |
| mandateId | string | Mandate ID of the payment method |
| country | string | Country of the payment method |
| state | string | State of the payment method |
| lastError | string | Last payment error associated with the payment method. |
| default | boolean | True when it's the default payment method. |
| expired | boolean | True when payment method has expired. |
| failed | boolean | True when payment method has failed to process multiple times. |

## Example

### REST

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "$permissions": [
    "read(\"any\")"
  ],
  "providerMethodId": "abdk3ed3sdkfj",
  "clientSecret": "seti_ddfe",
  "providerUserId": "abdk3ed3sdkfj",
  "userId": "5e5ea5c16897e",
  "expiryMonth": 2,
  "expiryYear": 2024,
  "last4": "4242",
  "brand": "visa",
  "name": "John Doe",
  "mandateId": "yxc",
  "country": "de",
  "state": "",
  "lastError": "Your card has insufficient funds.",
  "default": false,
  "expired": false,
  "failed": false
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "_permissions": [
    "read(\"any\")"
  ],
  "providerMethodId": "abdk3ed3sdkfj",
  "clientSecret": "seti_ddfe",
  "providerUserId": "abdk3ed3sdkfj",
  "userId": "5e5ea5c16897e",
  "expiryMonth": 2,
  "expiryYear": 2024,
  "last4": "4242",
  "brand": "visa",
  "name": "John Doe",
  "mandateId": "yxc",
  "country": "de",
  "state": "",
  "lastError": "Your card has insufficient funds.",
  "default": false,
  "expired": false,
  "failed": false
}
```

