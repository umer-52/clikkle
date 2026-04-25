# Bucket

Bucket

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Bucket ID. |
| $createdAt | string | Bucket creation time in ISO 8601 format. |
| $updatedAt | string | Bucket update date in ISO 8601 format. |
| $permissions | array | Bucket permissions. [Learn more about permissions](https://appwrite.io/docs/permissions). |
| fileSecurity | boolean | Whether file-level security is enabled. [Learn more about permissions](https://appwrite.io/docs/permissions). |
| name | string | Bucket name. |
| enabled | boolean | Bucket enabled. |
| maximumFileSize | integer | Maximum file size supported. |
| allowedFileExtensions | array | Allowed file extensions. |
| compression | string | Compression algorithm choosen for compression. Will be one of none, [gzip](https://en.wikipedia.org/wiki/Gzip), or [zstd](https://en.wikipedia.org/wiki/Zstd). |
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

