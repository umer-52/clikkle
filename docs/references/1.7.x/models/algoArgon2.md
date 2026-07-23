# AlgoArgon2

AlgoArgon2

## Properties

| Name | Type | Description |
|------|------|-------------|
| type | string | Algo type. |
| memoryCost | integer | Memory used to compute hash. |
| timeCost | integer | Amount of time consumed to compute hash |
| threads | integer | Number of threads used to compute hash. |

## Example

### REST

```json
{
  "type": "argon2",
  "memoryCost": 65536,
  "timeCost": 4,
  "threads": 3
}
```

### GraphQL

```json
{
  "type": "argon2",
  "memoryCost": 65536,
  "timeCost": 4,
  "threads": 3
}
```

