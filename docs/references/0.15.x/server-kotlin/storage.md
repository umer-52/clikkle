# storage

The Storage service allows you to manage your project files. Using the Storage service, you can upload, view, download, and query all your project files.

Files are managed using buckets. Storage buckets are similar to Tables we have in our Databases service. The difference is, buckets also provide more power to decide what kinds of files, what sizes you want to allow in that bucket, whether or not to encrypt the files, scan with antivirus and more.

Using Clikkle permissions architecture, you can assign read or write access to each bucket or file in your project for either a specific user, team, user role, or even grant it with public access (`any`). You can learn more about how Clikkle handles permissions and access control.

The preview endpoint allows you to generate preview images for your files. Using the preview endpoint, you can also manipulate the resulting image so that it will fit perfectly inside your app in terms of dimensions, file size, and style. The preview endpoint also allows you to change the resulting image file format for better compression or image quality for better delivery over the network.


## Base URL

```
https://<REGION>.cloud.appwrite.io/v1
```

## Endpoints

#### Create bucket

Create a new storage bucket.

**Endpoint:** `POST /storage/buckets`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| bucketId | string | Yes | Unique Id. Choose your own unique ID or pass the string `unique()` to auto generate it. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| name | string | Yes | Bucket name |
| permission | string | Yes | Permissions type model to use for reading files in this bucket. You can use bucket-level permission set once on the bucket using the `read` and `write` params, or you can set file-level permission where each file read and write params will decide who has access to read and write to each file individually. [learn more about permissions](https://appwrite.io/docs/advanced/platform/permissions) and get a full list of available permissions. |
| read | array | No | An array of strings with read permissions. By default no user is granted with any read permissions. [learn more about permissions](https://appwrite.io/docs/advanced/platform/permissions) and get a full list of available permissions. |
| write | array | No | An array of strings with write permissions. By default no user is granted with any write permissions. [learn more about permissions](https://appwrite.io/docs/advanced/platform/permissions) and get a full list of available permissions. |
| enabled | boolean | No | Is bucket enabled? |
| maximumFileSize | integer | No | Maximum file size allowed in bytes. Maximum allowed value is 30MB. For self-hosted setups you can change the max limit by changing the `_APP_STORAGE_LIMIT` environment variable. [Learn more about storage environment variables](https://appwrite.io/docs/advanced/self-hosting/environment-variables#storage) |
| allowedFileExtensions | array | No | Allowed file extensions. Maximum of 100 extensions are allowed, each 64 characters long. |
| encryption | boolean | No | Is encryption enabled? For file size above 20MB encryption is skipped even if it's enabled |
| antivirus | boolean | No | Is virus scanning enabled? For file size above 20MB AntiVirus scanning is skipped even if it's enabled |

**Responses:**

- **201**: application/json
  - [Bucket](/docs/references/0.15.x/models/bucket)

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.services.Storage

suspend fun main() {
    val client = Client(context)
      .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
      .setProject("5df5acd0d48c2") // Your project ID
      .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

    val storage = Storage(client)
    val response = storage.createBucket(
        bucketId = "[BUCKET_ID]",
        name = "[NAME]",
        permission = "file",
    )
    val json = response.body?.string()
}
```

---

#### Create File

Create a new file. Before using this route, you should create a new bucket resource using either a server integration API or directly from your Appwrite console.

Larger files should be uploaded using multiple requests with the content-range header to send a partial request with a maximum supported chunk of `5MB`. The `content-range` header values should always be in bytes.

When the first request is sent, the server will return the **File** object, and the subsequent part request must include the file's **id** in `x-appwrite-id` header to allow the server to know that the partial upload is for the existing file and not for a new one.

If you're creating a new file using one of the Appwrite SDKs, all the chunking logic will be managed by the SDK internally.


**Endpoint:** `POST /storage/buckets/{bucketId}/files`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| bucketId | string | Yes | Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/storage#createBucket). |
| fileId | string | Yes | File ID. Choose your own unique ID or pass the string "unique()" to auto generate it. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| file | string | Yes | Binary file. |
| read | array | No | An array of strings with read permissions. By default only the current user is granted with read permissions. [learn more about permissions](https://appwrite.io/docs/advanced/platform/permissions) and get a full list of available permissions. |
| write | array | No | An array of strings with write permissions. By default only the current user is granted with write permissions. [learn more about permissions](https://appwrite.io/docs/advanced/platform/permissions) and get a full list of available permissions. |

**Responses:**

- **201**: application/json
  - [File](/docs/references/0.15.x/models/file)

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.models.InputFile
import io.appwrite.services.Storage

suspend fun main() {
    val client = Client(context)
      .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
      .setProject("5df5acd0d48c2") // Your project ID
      .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

    val storage = Storage(client)
    val response = storage.createFile(
        bucketId = "[BUCKET_ID]",
        fileId = "[FILE_ID]",
        file = InputFile.fromPath("file.png"),
    )
    val json = response.body?.string()
}
```

---

#### Get Bucket

Get a storage bucket by its unique ID. This endpoint response returns a JSON object with the storage bucket metadata.

**Endpoint:** `GET /storage/buckets/{bucketId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| bucketId | string | Yes | Bucket unique ID. |

**Responses:**

- **200**: application/json
  - [Bucket](/docs/references/0.15.x/models/bucket)

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.services.Storage

suspend fun main() {
    val client = Client(context)
      .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
      .setProject("5df5acd0d48c2") // Your project ID
      .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

    val storage = Storage(client)
    val response = storage.getBucket(
        bucketId = "[BUCKET_ID]"
    )
    val json = response.body?.string()
}
```

---

#### Get File

Get a file by its unique ID. This endpoint response returns a JSON object with the file metadata.

**Endpoint:** `GET /storage/buckets/{bucketId}/files/{fileId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| bucketId | string | Yes | Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/storage#createBucket). |
| fileId | string | Yes | File ID. |

**Responses:**

- **200**: application/json
  - [File](/docs/references/0.15.x/models/file)

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.services.Storage

suspend fun main() {
    val client = Client(context)
      .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
      .setProject("5df5acd0d48c2") // Your project ID
      .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

    val storage = Storage(client)
    val response = storage.getFile(
        bucketId = "[BUCKET_ID]",
        fileId = "[FILE_ID]"
    )
    val json = response.body?.string()
}
```

---

#### Get File for Download

Get a file content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.

**Endpoint:** `GET /storage/buckets/{bucketId}/files/{fileId}/download`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| bucketId | string | Yes | Storage bucket ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/storage#createBucket). |
| fileId | string | Yes | File ID. |

**Responses:**

- **200**: no content

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.services.Storage

suspend fun main() {
    val client = Client(context)
      .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
      .setProject("5df5acd0d48c2") // Your project ID
      .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

    val storage = Storage(client)
    val result = storage.getFileDownload(
        bucketId = "[BUCKET_ID]",
        fileId = "[FILE_ID]"
    )
    println(result); // Resource URL
}
```

---

#### Get File for View

Get a file content by its unique ID. This endpoint is similar to the download method but returns with no  'Content-Disposition: attachment' header.

**Endpoint:** `GET /storage/buckets/{bucketId}/files/{fileId}/view`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| bucketId | string | Yes | Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/storage#createBucket). |
| fileId | string | Yes | File ID. |

**Responses:**

- **200**: no content

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.services.Storage

suspend fun main() {
    val client = Client(context)
      .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
      .setProject("5df5acd0d48c2") // Your project ID
      .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

    val storage = Storage(client)
    val result = storage.getFileView(
        bucketId = "[BUCKET_ID]",
        fileId = "[FILE_ID]"
    )
    println(result); // Resource URL
}
```

---

#### Get File Preview

Get a file preview image. Currently, this method supports preview for image files (jpg, png, and gif), other supported formats, like pdf, docs, slides, and spreadsheets, will return the file icon image. You can also pass query string arguments for cutting and resizing your preview image. Preview is supported only for image files smaller than 10MB.

**Endpoint:** `GET /storage/buckets/{bucketId}/files/{fileId}/preview`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| bucketId | string | Yes | Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/storage#createBucket). |
| fileId | string | Yes | File ID |
| width | integer | No | Resize preview image width, Pass an integer between 0 to 4000. |
| height | integer | No | Resize preview image height, Pass an integer between 0 to 4000. |
| gravity | string | No | Image crop gravity. Can be one of center,top-left,top,top-right,left,right,bottom-left,bottom,bottom-right |
| quality | integer | No | Preview image quality. Pass an integer between 0 to 100. Defaults to 100. |
| borderWidth | integer | No | Preview image border in pixels. Pass an integer between 0 to 100. Defaults to 0. |
| borderColor | string | No | Preview image border color. Use a valid HEX color, no # is needed for prefix. |
| borderRadius | integer | No | Preview image border radius in pixels. Pass an integer between 0 to 4000. |
| opacity | number | No | Preview image opacity. Only works with images having an alpha channel (like png). Pass a number between 0 to 1. |
| rotation | integer | No | Preview image rotation in degrees. Pass an integer between -360 and 360. |
| background | string | No | Preview image background color. Only works with transparent images (png). Use a valid HEX color, no # is needed for prefix. |
| output | string | No | Output format type (jpeg, jpg, png, gif and webp). |

**Responses:**

- **200**: no content

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.services.Storage

suspend fun main() {
    val client = Client(context)
      .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
      .setProject("5df5acd0d48c2") // Your project ID
      .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

    val storage = Storage(client)
    val result = storage.getFilePreview(
        bucketId = "[BUCKET_ID]",
        fileId = "[FILE_ID]",
    )
    println(result); // Resource URL
}
```

---

#### List buckets

Get a list of all the storage buckets. You can use the query params to filter your results.

**Endpoint:** `GET /storage/buckets`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| search | string | No | Search term to filter your list results. Max length: 256 chars. |
| limit | integer | No | Results limit value. By default will return maximum 25 results. Maximum of 100 results allowed per request. |
| offset | integer | No | Results offset. The default value is 0. Use this param to manage pagination. |
| cursor | string | No | ID of the bucket used as the starting point for the query, excluding the bucket itself. Should be used for efficient pagination when working with large sets of data. |
| cursorDirection | string | No | Direction of the cursor, can be either 'before' or 'after'. |
| orderType | string | No | Order result by ASC or DESC order. |

**Responses:**

- **200**: application/json
  - [Buckets List](/docs/references/0.15.x/models/bucketList)

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.services.Storage

suspend fun main() {
    val client = Client(context)
      .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
      .setProject("5df5acd0d48c2") // Your project ID
      .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

    val storage = Storage(client)
    val response = storage.listBuckets(
    )
    val json = response.body?.string()
}
```

---

#### List Files

Get a list of all the user files. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's files. Learn more about different API modes.

**Endpoint:** `GET /storage/buckets/{bucketId}/files`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| bucketId | string | Yes | Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/storage#createBucket). |
| search | string | No | Search term to filter your list results. Max length: 256 chars. |
| limit | integer | No | Maximum number of files to return in response. By default will return maximum 25 results. Maximum of 100 results allowed per request. |
| offset | integer | No | Offset value. The default value is 0. Use this param to manage pagination. [learn more about pagination](https://appwrite.io/docs/pagination) |
| cursor | string | No | ID of the file used as the starting point for the query, excluding the file itself. Should be used for efficient pagination when working with large sets of data. [learn more about pagination](https://appwrite.io/docs/pagination) |
| cursorDirection | string | No | Direction of the cursor, can be either 'before' or 'after'. |
| orderType | string | No | Order result by ASC or DESC order. |

**Responses:**

- **200**: application/json
  - [Files List](/docs/references/0.15.x/models/fileList)

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.services.Storage

suspend fun main() {
    val client = Client(context)
      .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
      .setProject("5df5acd0d48c2") // Your project ID
      .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

    val storage = Storage(client)
    val response = storage.listFiles(
        bucketId = "[BUCKET_ID]",
    )
    val json = response.body?.string()
}
```

---

#### Update Bucket

Update a storage bucket by its unique ID.

**Endpoint:** `PUT /storage/buckets/{bucketId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| bucketId | string | Yes | Bucket unique ID. |
| name | string | Yes | Bucket name |
| permission | string | Yes | Permissions type model to use for reading files in this bucket. You can use bucket-level permission set once on the bucket using the `read` and `write` params, or you can set file-level permission where each file read and write params will decide who has access to read and write to each file individually. [learn more about permissions](https://appwrite.io/docs/advanced/platform/permissions) and get a full list of available permissions. |
| read | array | No | An array of strings with read permissions. By default inherits the existing read permissions. [learn more about permissions](https://appwrite.io/docs/advanced/platform/permissions) and get a full list of available permissions. |
| write | array | No | An array of strings with write permissions. By default inherits the existing write permissions. [learn more about permissions](https://appwrite.io/docs/advanced/platform/permissions) and get a full list of available permissions. |
| enabled | boolean | No | Is bucket enabled? |
| maximumFileSize | integer | No | Maximum file size allowed in bytes. Maximum allowed value is 30MB. For self hosted version you can change the limit by changing _APP_STORAGE_LIMIT environment variable. [Learn more about storage environment variables](https://appwrite.io/docs/advanced/self-hosting/environment-variables#storage) |
| allowedFileExtensions | array | No | Allowed file extensions. Maximum of 100 extensions are allowed, each 64 characters long. |
| encryption | boolean | No | Is encryption enabled? For file size above 20MB encryption is skipped even if it's enabled |
| antivirus | boolean | No | Is virus scanning enabled? For file size above 20MB AntiVirus scanning is skipped even if it's enabled |

**Responses:**

- **200**: application/json
  - [Bucket](/docs/references/0.15.x/models/bucket)

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.services.Storage

suspend fun main() {
    val client = Client(context)
      .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
      .setProject("5df5acd0d48c2") // Your project ID
      .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

    val storage = Storage(client)
    val response = storage.updateBucket(
        bucketId = "[BUCKET_ID]",
        name = "[NAME]",
        permission = "file",
    )
    val json = response.body?.string()
}
```

---

#### Update File

Update a file by its unique ID. Only users with write permissions have access to update this resource.

**Endpoint:** `PUT /storage/buckets/{bucketId}/files/{fileId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| bucketId | string | Yes | Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/storage#createBucket). |
| fileId | string | Yes | File unique ID. |
| read | array | No | An array of strings with read permissions. By default no user is granted with any read permissions. [learn more about permissions](https://appwrite.io/docs/advanced/platform/permissions) and get a full list of available permissions. |
| write | array | No | An array of strings with write permissions. By default no user is granted with any write permissions. [learn more about permissions](https://appwrite.io/docs/advanced/platform/permissions) and get a full list of available permissions. |

**Responses:**

- **200**: application/json
  - [File](/docs/references/0.15.x/models/file)

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.services.Storage

suspend fun main() {
    val client = Client(context)
      .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
      .setProject("5df5acd0d48c2") // Your project ID
      .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

    val storage = Storage(client)
    val response = storage.updateFile(
        bucketId = "[BUCKET_ID]",
        fileId = "[FILE_ID]",
    )
    val json = response.body?.string()
}
```

---

#### Delete Bucket

Delete a storage bucket by its unique ID.

**Endpoint:** `DELETE /storage/buckets/{bucketId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| bucketId | string | Yes | Bucket unique ID. |

**Responses:**

- **204**: no content

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.services.Storage

suspend fun main() {
    val client = Client(context)
      .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
      .setProject("5df5acd0d48c2") // Your project ID
      .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

    val storage = Storage(client)
    val response = storage.deleteBucket(
        bucketId = "[BUCKET_ID]"
    )
    val json = response.body?.string()
}
```

---

#### Delete File

Delete a file by its unique ID. Only users with write permissions have access to delete this resource.

**Endpoint:** `DELETE /storage/buckets/{bucketId}/files/{fileId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| bucketId | string | Yes | Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/storage#createBucket). |
| fileId | string | Yes | File ID. |

**Responses:**

- **204**: no content

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.services.Storage

suspend fun main() {
    val client = Client(context)
      .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
      .setProject("5df5acd0d48c2") // Your project ID
      .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key

    val storage = Storage(client)
    val response = storage.deleteFile(
        bucketId = "[BUCKET_ID]",
        fileId = "[FILE_ID]"
    )
    val json = response.body?.string()
}
```

---

