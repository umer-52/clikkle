# AlgoScrypt

AlgoScrypt

## Properties

| Name | Type | Description |
|------|------|-------------|
| type | string | Algo type. |
| costCpu | integer | CPU complexity of computed hash. |
| costMemory | integer | Memory complexity of computed hash. |
| costParallel | integer | Parallelization of computed hash. |
| length | integer | Length used to compute hash. |

## Example

### REST

```json
{
  "type": "scrypt",
  "costCpu": 8,
  "costMemory": 14,
  "costParallel": 1,
  "length": 64
}
```

### GraphQL

```json
{
  "type": "scrypt",
  "costCpu": 8,
  "costMemory": 14,
  "costParallel": 1,
  "length": 64
}
```

