# File

File

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | File ID. |
| bucketId | string | Bucket ID. |
| $createdAt | string | File creation date in ISO 8601 format. |
| $updatedAt | string | File update date in ISO 8601 format. |
| $permissions | array | File permissions. [Learn more about permissions](https://appwrite.io/docs/permissions). |
| name | string | File name. |
| signature | string | File MD5 signature. |
| mimeType | string | File mime type. |
| sizeOriginal | integer | File original size in bytes. |
| chunksTotal | integer | Total number of chunks available |
| chunksUploaded | integer | Total number of chunks uploaded |

## Example

### REST

```json
{
  "$id": "5e5ea5c16897e",
  "bucketId": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "$permissions": [
    "read(\"any\")"
  ],
  "name": "Pink.png",
  "signature": "5d529fd02b544198ae075bd57c1762bb",
  "mimeType": "image/png",
  "sizeOriginal": 17890,
  "chunksTotal": 17890,
  "chunksUploaded": 17890
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "bucketId": "5e5ea5c16897e",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "_permissions": [
    "read(\"any\")"
  ],
  "name": "Pink.png",
  "signature": "5d529fd02b544198ae075bd57c1762bb",
  "mimeType": "image/png",
  "sizeOriginal": 17890,
  "chunksTotal": 17890,
  "chunksUploaded": 17890
}
```

