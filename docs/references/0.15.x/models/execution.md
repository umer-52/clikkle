# Execution

Execution

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Execution ID. |
| $createdAt | integer | Execution creation date in Unix timestamp. |
| $updatedAt | integer | Execution update date in Unix timestamp. |
| $read | array | Execution read permissions. |
| functionId | string | Function ID. |
| trigger | string | The trigger that caused the function to execute. Possible values can be: `http`, `schedule`, or `event`. |
| status | string | The status of the function execution. Possible values can be: `waiting`, `processing`, `completed`, or `failed`. |
| statusCode | integer | The script status code. |
| response | string | The script response output string. Logs the last 4,000 characters of the execution response output. |
| stderr | string | The script stderr output string. Logs the last 4,000 characters of the execution stderr output |
| time | number | The script execution time in seconds. |

## Example

### REST

```json
{}
```

### GraphQL

```json
{}
```

