# Runtime

Runtime

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Runtime ID. |
| key | string | Parent runtime key. |
| name | string | Runtime Name. |
| version | string | Runtime version. |
| base | string | Base Docker image used to build the runtime. |
| image | string | Image name of Docker Hub. |
| logo | string | Name of the logo image. |
| supports | array | List of supported architectures. |

## Example

### REST

```json
{
  "$id": "python-3.8",
  "key": "python",
  "name": "Python",
  "version": "3.8",
  "base": "python:3.8-alpine",
  "image": "appwrite\\/runtime-for-python:3.8",
  "logo": "python.png",
  "supports": "amd64"
}
```

### GraphQL

```json
{
  "_id": "python-3.8",
  "key": "python",
  "name": "Python",
  "version": "3.8",
  "base": "python:3.8-alpine",
  "image": "appwrite\\/runtime-for-python:3.8",
  "logo": "python.png",
  "supports": "amd64"
}
```

