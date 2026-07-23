# Execution

Execution

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Execution ID. |
| $createdAt | string | Execution creation date in ISO 8601 format. |
| $updatedAt | string | Execution update date in ISO 8601 format. |
| $permissions | array | Execution roles. |
| functionId | string | Function ID. |
| deploymentId | string | Function's deployment ID used to create the execution. |
| trigger | string | The trigger that caused the function to execute. Possible values can be: `http`, `schedule`, or `event`. |
| status | string | The status of the function execution. Possible values can be: `waiting`, `processing`, `completed`, `failed`, or `scheduled`. |
| requestMethod | string | HTTP request method type. |
| requestPath | string | HTTP request path and query. |
| requestHeaders | array<headers> | HTTP request headers as a key-value object. This will return only whitelisted headers. All headers are returned if execution is created as synchronous. Can be one of: [Headers model](/docs/references/cloud/models/headers) |
| responseStatusCode | integer | HTTP response status code. |
| responseBody | string | HTTP response body. This will return empty unless execution is created as synchronous. |
| responseHeaders | array<headers> | HTTP response headers as a key-value object. This will return only whitelisted headers. All headers are returned if execution is created as synchronous. Can be one of: [Headers model](/docs/references/cloud/models/headers) |
| logs | string | Function logs. Includes the last 4,000 characters. This will return an empty string unless the response is returned using an API key or as part of a webhook payload. |
| errors | string | Function errors. Includes the last 4,000 characters. This will return an empty string unless the response is returned using an API key or as part of a webhook payload. |
| duration | number | Resource(function/site) execution duration in seconds. |
| scheduledAt | string | The scheduled time for execution. If left empty, execution will be queued immediately. |

## Example

### REST

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "$permissions": [
    "any"
  ],
  "functionId": "5e5ea6g16897e",
  "deploymentId": "5e5ea5c16897e",
  "trigger": "http",
  "status": "processing",
  "requestMethod": "GET",
  "requestPath": "/articles?id=5",
  "requestHeaders": [
    {
      "Content-Type": "application/json"
    }
  ],
  "responseStatusCode": 200,
  "responseBody": "",
  "responseHeaders": [
    {
      "Content-Type": "application/json"
    }
  ],
  "logs": "",
  "errors": "",
  "duration": 0.4,
  "scheduledAt": "2020-10-15T06:38:00.000+00:00"
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "_permissions": [
    "any"
  ],
  "functionId": "5e5ea6g16897e",
  "deploymentId": "5e5ea5c16897e",
  "trigger": "http",
  "status": "processing",
  "requestMethod": "GET",
  "requestPath": "/articles?id=5",
  "requestHeaders": [
    {
      "Content-Type": "application/json"
    }
  ],
  "responseStatusCode": 200,
  "responseBody": "",
  "responseHeaders": [
    {
      "Content-Type": "application/json"
    }
  ],
  "logs": "",
  "errors": "",
  "duration": 0.4,
  "scheduledAt": "2020-10-15T06:38:00.000+00:00"
}
```

