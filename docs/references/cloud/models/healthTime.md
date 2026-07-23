# Health Time

Health Time

## Properties

| Name | Type | Description |
|------|------|-------------|
| remoteTime | integer | Current unix timestamp on trustful remote server. |
| localTime | integer | Current unix timestamp of local server where Appwrite runs. |
| diff | integer | Difference of unix remote and local timestamps in milliseconds. |

## Example

### REST

```json
{
  "remoteTime": 1639490751,
  "localTime": 1639490844,
  "diff": 93
}
```

### GraphQL

```json
{
  "remoteTime": 1639490751,
  "localTime": 1639490844,
  "diff": 93
}
```

