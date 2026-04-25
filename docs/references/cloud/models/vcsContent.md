# VcsContents

VcsContents

## Properties

| Name | Type | Description |
|------|------|-------------|
| size | integer | Content size in bytes. Only files have size, and for directories, 0 is returned. |
| isDirectory | boolean | If a content is a directory. Directories can be used to check nested contents. |
| name | string | Name of directory or file. |

## Example

### REST

```json
{
  "size": 1523,
  "isDirectory": true,
  "name": "Main.java"
}
```

### GraphQL

```json
{
  "size": 1523,
  "isDirectory": true,
  "name": "Main.java"
}
```

