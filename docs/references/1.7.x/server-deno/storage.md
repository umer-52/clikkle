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

### buckets

#### Create bucket

Create a new storage bucket.

**Endpoint:** `POST /storage/buckets`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| bucketId | string | Yes | Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| name | string | Yes | Bucket name |
| permissions | array | No | An array of permission strings. By default, no user is granted with any permissions. [Learn more about permissions](https://appwrite.io/docs/permissions). |
| fileSecurity | boolean | No | Enables configuring permissions for individual file. A user needs one of file or bucket level permissions to access a file. [Learn more about permissions](https://appwrite.io/docs/permissions). |
| enabled | boolean | No | Is bucket enabled? When set to 'disabled', users cannot access the files in this bucket but Server SDKs with and API key can still access the bucket. No files are lost when this is toggled. |
| maximumFileSize | integer | No | Maximum file size allowed in bytes. Maximum allowed value is 30MB. |
| allowedFileExtensions | array | No | Allowed file extensions. Maximum of 100 extensions are allowed, each 64 characters long. |
| compression | string | No | Compression algorithm choosen for compression. Can be one of none,  [gzip](https://en.wikipedia.org/wiki/Gzip), or [zstd](https://en.wikipedia.org/wiki/Zstd), For file size above 20MB compression is skipped even if it's enabled |
| encryption | boolean | No | Is encryption enabled? For file size above 20MB encryption is skipped even if it's enabled |
| antivirus | boolean | No | Is virus scanning enabled? For file size above 20MB AntiVirus scanning is skipped even if it's enabled |

**Responses:**

- **201**: application/json
  - [Bucket](/docs/references/1.7.x/models/bucket)

**Example:**

```server-deno
import { Client, Storage,  } from "https://deno.land/x/appwrite/mod.ts";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const storage = new Storage(client);

const response = await storage.createBucket(
    '<BUCKET_ID>', // bucketId
    '<NAME>', // name
    ["read("any")"], // permissions (optional)
    false, // fileSecurity (optional)
    false, // enabled (optional)
    1, // maximumFileSize (optional)
    [], // allowedFileExtensions (optional)
    .None, // compression (optional)
    false, // encryption (optional)
    false // antivirus (optional)
);

```

---

#### Get bucket

Get a storage bucket by its unique ID. This endpoint response returns a JSON object with the storage bucket metadata.

**Endpoint:** `GET /storage/buckets/{bucketId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| bucketId | string | Yes | Bucket unique ID. |

**Responses:**

- **200**: application/json
  - [Bucket](/docs/references/1.7.x/models/bucket)

**Example:**

```server-deno
import { Client, Storage } from "https://deno.land/x/appwrite/mod.ts";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const storage = new Storage(client);

const response = await storage.getBucket(
    '<BUCKET_ID>' // bucketId
);

```

---

#### List buckets

Get a list of all the storage buckets. You can use the query params to filter your results.

**Endpoint:** `GET /storage/buckets`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: enabled, name, fileSecurity, maximumFileSize, encryption, antivirus |
| search | string | No | Search term to filter your list results. Max length: 256 chars. |

**Responses:**

- **200**: application/json
  - [Buckets List](/docs/references/1.7.x/models/bucketList)

**Example:**

```server-deno
import { Client, Storage } from "https://deno.land/x/appwrite/mod.ts";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const storage = new Storage(client);

const response = await storage.listBuckets(
    [], // queries (optional)
    '<SEARCH>' // search (optional)
);

```

---

#### Update bucket

Update a storage bucket by its unique ID.

**Endpoint:** `PUT /storage/buckets/{bucketId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| bucketId | string | Yes | Bucket unique ID. |
| name | string | Yes | Bucket name |
| permissions | array | No | An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions). |
| fileSecurity | boolean | No | Enables configuring permissions for individual file. A user needs one of file or bucket level permissions to access a file. [Learn more about permissions](https://appwrite.io/docs/permissions). |
| enabled | boolean | No | Is bucket enabled? When set to 'disabled', users cannot access the files in this bucket but Server SDKs with and API key can still access the bucket. No files are lost when this is toggled. |
| maximumFileSize | integer | No | Maximum file size allowed in bytes. Maximum allowed value is 30MB. |
| allowedFileExtensions | array | No | Allowed file extensions. Maximum of 100 extensions are allowed, each 64 characters long. |
| compression | string | No | Compression algorithm choosen for compression. Can be one of none, [gzip](https://en.wikipedia.org/wiki/Gzip), or [zstd](https://en.wikipedia.org/wiki/Zstd), For file size above 20MB compression is skipped even if it's enabled |
| encryption | boolean | No | Is encryption enabled? For file size above 20MB encryption is skipped even if it's enabled |
| antivirus | boolean | No | Is virus scanning enabled? For file size above 20MB AntiVirus scanning is skipped even if it's enabled |

**Responses:**

- **200**: application/json
  - [Bucket](/docs/references/1.7.x/models/bucket)

**Example:**

```server-deno
import { Client, Storage,  } from "https://deno.land/x/appwrite/mod.ts";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const storage = new Storage(client);

const response = await storage.updateBucket(
    '<BUCKET_ID>', // bucketId
    '<NAME>', // name
    ["read("any")"], // permissions (optional)
    false, // fileSecurity (optional)
    false, // enabled (optional)
    1, // maximumFileSize (optional)
    [], // allowedFileExtensions (optional)
    .None, // compression (optional)
    false, // encryption (optional)
    false // antivirus (optional)
);

```

---

#### Delete bucket

Delete a storage bucket by its unique ID.

**Endpoint:** `DELETE /storage/buckets/{bucketId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| bucketId | string | Yes | Bucket unique ID. |

**Responses:**

- **204**: no content

**Example:**

```server-deno
import { Client, Storage } from "https://deno.land/x/appwrite/mod.ts";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setKey('<YOUR_API_KEY>'); // Your secret API key

const storage = new Storage(client);

const response = await storage.deleteBucket(
    '<BUCKET_ID>' // bucketId
);

```

---

### files

#### Create file

Create a new file. Before using this route, you should create a new bucket resource using either a server integration API or directly from your Appwrite console.

Larger files should be uploaded using multiple requests with the content-range header to send a partial request with a maximum supported chunk of `5MB`. The `content-range` header values should always be in bytes.

When the first request is sent, the server will return the **File** object, and the subsequent part request must include the file's **id** in `x-appwrite-id` header to allow the server to know that the partial upload is for the existing file and not for a new one.

If you're creating a new file using one of the Appwrite SDKs, all the chunking logic will be managed by the SDK internally.


**Endpoint:** `POST /storage/buckets/{bucketId}/files`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| bucketId | string | Yes | Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket). |
| fileId | string | Yes | File ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| file | string | Yes | Binary file. Appwrite SDKs provide helpers to handle file input. [Learn about file input](https://appwrite.io/docs/products/storage/upload-download#input-file). |
| permissions | array | No | An array of permission strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/permissions). |

**Responses:**

- **201**: application/json
  - [File](/docs/references/1.7.x/models/file)

**Rate limits:** 60 requests per 60 seconds

**Example:**

```server-deno
import { Client, Storage } from "https://deno.land/x/appwrite/mod.ts";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession(''); // The user session to authenticate with

const storage = new Storage(client);

const response = await storage.createFile(
    '<BUCKET_ID>', // bucketId
    '<FILE_ID>', // fileId
    InputFile.fromPath('/path/to/file.png', 'file.png'), // file
    ["read("any")"] // permissions (optional)
);

```

---

#### Get file

Get a file by its unique ID. This endpoint response returns a JSON object with the file metadata.

**Endpoint:** `GET /storage/buckets/{bucketId}/files/{fileId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| bucketId | string | Yes | Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket). |
| fileId | string | Yes | File ID. |

**Responses:**

- **200**: application/json
  - [File](/docs/references/1.7.x/models/file)

**Example:**

```server-deno
import { Client, Storage } from "https://deno.land/x/appwrite/mod.ts";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession(''); // The user session to authenticate with

const storage = new Storage(client);

const response = await storage.getFile(
    '<BUCKET_ID>', // bucketId
    '<FILE_ID>' // fileId
);

```

---

#### Get file for download

Get a file content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.

**Endpoint:** `GET /storage/buckets/{bucketId}/files/{fileId}/download`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| bucketId | string | Yes | Storage bucket ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket). |
| fileId | string | Yes | File ID. |
| token | string | No | File token for accessing this file. |

**Responses:**

- **200**: no content

**Example:**

```server-deno
import { Client, Storage } from "https://deno.land/x/appwrite/mod.ts";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession(''); // The user session to authenticate with

const storage = new Storage(client);

const result = storage.getFileDownload(
    '<BUCKET_ID>', // bucketId
    '<FILE_ID>', // fileId
    '<TOKEN>' // token (optional)
);

```

---

#### Get file for view

Get a file content by its unique ID. This endpoint is similar to the download method but returns with no  'Content-Disposition: attachment' header.

**Endpoint:** `GET /storage/buckets/{bucketId}/files/{fileId}/view`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| bucketId | string | Yes | Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket). |
| fileId | string | Yes | File ID. |
| token | string | No | File token for accessing this file. |

**Responses:**

- **200**: no content

**Example:**

```server-deno
import { Client, Storage } from "https://deno.land/x/appwrite/mod.ts";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession(''); // The user session to authenticate with

const storage = new Storage(client);

const result = storage.getFileView(
    '<BUCKET_ID>', // bucketId
    '<FILE_ID>', // fileId
    '<TOKEN>' // token (optional)
);

```

---

#### Get file preview

Get a file preview image. Currently, this method supports preview for image files (jpg, png, and gif), other supported formats, like pdf, docs, slides, and spreadsheets, will return the file icon image. You can also pass query string arguments for cutting and resizing your preview image. Preview is supported only for image files smaller than 10MB.

**Endpoint:** `GET /storage/buckets/{bucketId}/files/{fileId}/preview`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| bucketId | string | Yes | Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket). |
| fileId | string | Yes | File ID |
| width | integer | No | Resize preview image width, Pass an integer between 0 to 4000. |
| height | integer | No | Resize preview image height, Pass an integer between 0 to 4000. |
| gravity | string | No | Image crop gravity. Can be one of center,top-left,top,top-right,left,right,bottom-left,bottom,bottom-right |
| quality | integer | No | Preview image quality. Pass an integer between 0 to 100. Defaults to keep existing image quality. |
| borderWidth | integer | No | Preview image border in pixels. Pass an integer between 0 to 100. Defaults to 0. |
| borderColor | string | No | Preview image border color. Use a valid HEX color, no # is needed for prefix. |
| borderRadius | integer | No | Preview image border radius in pixels. Pass an integer between 0 to 4000. |
| opacity | number | No | Preview image opacity. Only works with images having an alpha channel (like png). Pass a number between 0 to 1. |
| rotation | integer | No | Preview image rotation in degrees. Pass an integer between -360 and 360. |
| background | string | No | Preview image background color. Only works with transparent images (png). Use a valid HEX color, no # is needed for prefix. |
| output | string | No | Output format type (jpeg, jpg, png, gif and webp). |
| token | string | No | File token for accessing this file. |

**Responses:**

- **200**: no content

**Example:**

```server-deno
import { Client, Storage, ImageGravity, ImageFormat } from "https://deno.land/x/appwrite/mod.ts";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession(''); // The user session to authenticate with

const storage = new Storage(client);

const result = storage.getFilePreview(
    '<BUCKET_ID>', // bucketId
    '<FILE_ID>', // fileId
    0, // width (optional)
    0, // height (optional)
    ImageGravity.Center, // gravity (optional)
    -1, // quality (optional)
    0, // borderWidth (optional)
    '', // borderColor (optional)
    0, // borderRadius (optional)
    0, // opacity (optional)
    -360, // rotation (optional)
    '', // background (optional)
    ImageFormat.Jpg, // output (optional)
    '<TOKEN>' // token (optional)
);

```

---

#### List files

Get a list of all the user files. You can use the query params to filter your results.

**Endpoint:** `GET /storage/buckets/{bucketId}/files`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| bucketId | string | Yes | Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket). |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, signature, mimeType, sizeOriginal, chunksTotal, chunksUploaded |
| search | string | No | Search term to filter your list results. Max length: 256 chars. |

**Responses:**

- **200**: application/json
  - [Files List](/docs/references/1.7.x/models/fileList)

**Example:**

```server-deno
import { Client, Storage } from "https://deno.land/x/appwrite/mod.ts";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession(''); // The user session to authenticate with

const storage = new Storage(client);

const response = await storage.listFiles(
    '<BUCKET_ID>', // bucketId
    [], // queries (optional)
    '<SEARCH>' // search (optional)
);

```

---

#### Update file

Update a file by its unique ID. Only users with write permissions have access to update this resource.

**Endpoint:** `PUT /storage/buckets/{bucketId}/files/{fileId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| bucketId | string | Yes | Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket). |
| fileId | string | Yes | File unique ID. |
| name | string | No | Name of the file |
| permissions | array | No | An array of permission string. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions). |

**Responses:**

- **200**: application/json
  - [File](/docs/references/1.7.x/models/file)

**Rate limits:** 60 requests per 60 seconds

**Example:**

```server-deno
import { Client, Storage } from "https://deno.land/x/appwrite/mod.ts";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession(''); // The user session to authenticate with

const storage = new Storage(client);

const response = await storage.updateFile(
    '<BUCKET_ID>', // bucketId
    '<FILE_ID>', // fileId
    '<NAME>', // name (optional)
    ["read("any")"] // permissions (optional)
);

```

---

#### Delete file

Delete a file by its unique ID. Only users with write permissions have access to delete this resource.

**Endpoint:** `DELETE /storage/buckets/{bucketId}/files/{fileId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| bucketId | string | Yes | Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket). |
| fileId | string | Yes | File ID. |

**Responses:**

- **204**: no content

**Rate limits:** 60 requests per 60 seconds

**Example:**

```server-deno
import { Client, Storage } from "https://deno.land/x/appwrite/mod.ts";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>') // Your project ID
    .setSession(''); // The user session to authenticate with

const storage = new Storage(client);

const response = await storage.deleteFile(
    '<BUCKET_ID>', // bucketId
    '<FILE_ID>' // fileId
);

```

---

