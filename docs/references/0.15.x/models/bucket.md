# Bucket

Bucket

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Bucket ID. |
| $createdAt | integer | Bucket creation date in Unix timestamp. |
| $updatedAt | integer | Bucket update date in Unix timestamp. |
| $read | array | File read permissions. |
| $write | array | File write permissions. |
| permission | string | Bucket permission model. Possible values: `bucket` or `file` |
| name | string | Bucket name. |
| enabled | boolean | Bucket enabled. |
| maximumFileSize | integer | Maximum file size supported. |
| allowedFileExtensions | array | Allowed file extensions. |
| encryption | boolean | Bucket is encrypted. |
| antivirus | boolean | Virus scanning is enabled. |

## Example

### REST

```json
{}
```

### GraphQL

```json
{}
```

