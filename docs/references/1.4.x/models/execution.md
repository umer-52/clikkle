# Execution

Execution

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Execution ID. |
| $createdAt | string | Execution creation date in ISO 8601 format. |
| $updatedAt | string | Execution upate date in ISO 8601 format. |
| $permissions | array | Execution roles. |
| functionId | string | Function ID. |
| trigger | string | The trigger that caused the function to execute. Possible values can be: `http`, `schedule`, or `event`. |
| status | string | The status of the function execution. Possible values can be: `waiting`, `processing`, `completed`, or `failed`. |
| requestMethod | string | HTTP request method type. |
| requestPath | string | HTTP request path and query. |
| requestHeaders | array<headers> | HTTP response headers as a key-value object. This will return only whitelisted headers. All headers are returned if execution is created as synchronous. Can be one of: [Headers model](/docs/references/1.4.x/models/headers) |
| responseStatusCode | integer | HTTP response status code. |
| responseBody | string | HTTP response body. This will return empty unless execution is created as synchronous. |
| responseHeaders | array<headers> | HTTP response headers as a key-value object. This will return only whitelisted headers. All headers are returned if execution is created as synchronous. Can be one of: [Headers model](/docs/references/1.4.x/models/headers) |
| logs | string | Function logs. Includes the last 4,000 characters. This will return an empty string unless the response is returned using an API key or as part of a webhook payload. |
| errors | string | Function errors. Includes the last 4,000 characters. This will return an empty string unless the response is returned using an API key or as part of a webhook payload. |
| duration | number | Function execution duration in seconds. |

## Example

### REST

```json
{}
```

### GraphQL

```json
{}
```

