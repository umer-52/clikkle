# tokens

The Tokens service allows you to create, manage, and validate file tokens for your storage files. These tokens provide a way to grant temporary, controlled access to files without requiring user authentication or exposing sensitive permissions.

File tokens are particularly useful when you need to share access to private storage files with unauthenticated users or services for a limited time period. Each token is linked to a specific file and can be configured with an expiry date to ensure access is only granted for the necessary duration.

You can use tokens to generate secure URLs to view, preview, or download files. The Tokens service provides endpoints to create, list, retrieve, update, and delete tokens, giving you complete control over file access management.

For more detailed information about using file tokens in your application, refer to the File tokens documentation.


## Base URL

```
https://<REGION>.cloud.appwrite.io/v1
```

## Endpoints

### files

#### Create file token

Create a new token. A token is linked to a file. Token can be passed as a request URL search parameter.

**Endpoint:** `POST /tokens/buckets/{bucketId}/files/{fileId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| bucketId | string | Yes | Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket). |
| fileId | string | Yes | File unique ID. |
| expire | string | No | Token expiry date |

**Responses:**

- **201**: application/json
  - [ResourceToken](/docs/references/1.8.x/models/resourceToken)

**Rate limits:** 60 requests per 60 seconds

**Example:**

```server-rest
POST /v1/tokens/buckets/{bucketId}/files/{fileId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>

{
  "expire": ""
}
```

---

#### List tokens

List all the tokens created for a specific file or bucket. You can use the query params to filter your results.

**Endpoint:** `GET /tokens/buckets/{bucketId}/files/{fileId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| bucketId | string | Yes | Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket). |
| fileId | string | Yes | File unique ID. |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: expire |
| total | boolean | No | When set to false, the total count returned will be 0 and will not be calculated. |

**Responses:**

- **200**: application/json
  - [Resource Tokens List](/docs/references/1.8.x/models/resourceTokenList)

**Example:**

```server-rest
GET /v1/tokens/buckets/{bucketId}/files/{fileId} HTTP/1.1
Host: cloud.appwrite.io
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>
```

---

### tokens

#### Get token

Get a token by its unique ID.

**Endpoint:** `GET /tokens/{tokenId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| tokenId | string | Yes | Token ID. |

**Responses:**

- **200**: application/json
  - [ResourceToken](/docs/references/1.8.x/models/resourceToken)

**Example:**

```server-rest
GET /v1/tokens/{tokenId} HTTP/1.1
Host: cloud.appwrite.io
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>
```

---

#### Update token

Update a token by its unique ID. Use this endpoint to update a token's expiry date.

**Endpoint:** `PATCH /tokens/{tokenId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| tokenId | string | Yes | Token unique ID. |
| expire | string | No | File token expiry date |

**Responses:**

- **200**: application/json
  - [ResourceToken](/docs/references/1.8.x/models/resourceToken)

**Rate limits:** 60 requests per 60 seconds

**Example:**

```server-rest
PATCH /v1/tokens/{tokenId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>

{
  "expire": ""
}
```

---

#### Delete token

Delete a token by its unique ID.

**Endpoint:** `DELETE /tokens/{tokenId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| tokenId | string | Yes | Token ID. |

**Responses:**

- **204**: no content

**Rate limits:** 60 requests per 60 seconds

**Example:**

```server-rest
DELETE /v1/tokens/{tokenId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Key: <YOUR_API_KEY>

```

---

