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
| fileId | string | Yes | File ID. Choose your own unique ID or pass the string `ID.unique()` to auto generate it. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| file | string | Yes | Binary file. |
| permissions | array | No | An array of permission strings. By default the current user is granted with all permissions. [Learn more about permissions](https://appwrite.io/docs/advanced/platform/permissions). |

**Responses:**

- **201**: application/json
  - [File](/docs/references/1.1.x/models/file)

**Rate limits:** 60 requests per 60 seconds

**Example:**

```client-android-kotlin
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import io.appwrite.Client
import io.appwrite.models.InputFile
import io.appwrite.services.Storage

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val client = Client(applicationContext)
            .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
            .setProject("5df5acd0d48c2") // Your project ID

        val storage = Storage(client)

        GlobalScope.launch {
            val response = storage.createFile(
                bucketId = "[BUCKET_ID]",
                fileId = "[FILE_ID]",
                file = InputFile.fromPath("file.png"),
            )
            val json = response.body?.string()        
        }
    }
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
  - [File](/docs/references/1.1.x/models/file)

**Example:**

```client-android-kotlin
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import io.appwrite.Client
import io.appwrite.services.Storage

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val client = Client(applicationContext)
            .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
            .setProject("5df5acd0d48c2") // Your project ID

        val storage = Storage(client)

        GlobalScope.launch {
            val response = storage.getFile(
                bucketId = "[BUCKET_ID]",
                fileId = "[FILE_ID]"
            )
            val json = response.body?.string()        
        }
    }
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

```client-android-kotlin
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import io.appwrite.Client
import io.appwrite.services.Storage

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val client = Client(applicationContext)
            .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
            .setProject("5df5acd0d48c2") // Your project ID

        val storage = Storage(client)

        GlobalScope.launch {
            val result = storage.getFileDownload(
                bucketId = "[BUCKET_ID]",
                fileId = "[FILE_ID]"
            )
            println(result); // Resource URL        
        }
    }
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

```client-android-kotlin
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import io.appwrite.Client
import io.appwrite.services.Storage

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val client = Client(applicationContext)
            .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
            .setProject("5df5acd0d48c2") // Your project ID

        val storage = Storage(client)

        GlobalScope.launch {
            val result = storage.getFileView(
                bucketId = "[BUCKET_ID]",
                fileId = "[FILE_ID]"
            )
            println(result); // Resource URL        
        }
    }
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

```client-android-kotlin
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import io.appwrite.Client
import io.appwrite.services.Storage

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val client = Client(applicationContext)
            .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
            .setProject("5df5acd0d48c2") // Your project ID

        val storage = Storage(client)

        GlobalScope.launch {
            val result = storage.getFilePreview(
                bucketId = "[BUCKET_ID]",
                fileId = "[FILE_ID]",
            )
            println(result); // Resource URL        
        }
    }
}
```

---

#### List Files

Get a list of all the user files. You can use the query params to filter your results.

**Endpoint:** `GET /storage/buckets/{bucketId}/files`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| bucketId | string | Yes | Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/storage#createBucket). |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/products/databases/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, signature, mimeType, sizeOriginal, chunksTotal, chunksUploaded |
| search | string | No | Search term to filter your list results. Max length: 256 chars. |

**Responses:**

- **200**: application/json
  - [Files List](/docs/references/1.1.x/models/fileList)

**Example:**

```client-android-kotlin
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import io.appwrite.Client
import io.appwrite.services.Storage

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val client = Client(applicationContext)
            .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
            .setProject("5df5acd0d48c2") // Your project ID

        val storage = Storage(client)

        GlobalScope.launch {
            val response = storage.listFiles(
                bucketId = "[BUCKET_ID]",
            )
            val json = response.body?.string()        
        }
    }
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
| permissions | array | No | An array of permission string. By default the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/advanced/platform/permissions). |

**Responses:**

- **200**: application/json
  - [File](/docs/references/1.1.x/models/file)

**Rate limits:** 60 requests per 60 seconds

**Example:**

```client-android-kotlin
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import io.appwrite.Client
import io.appwrite.services.Storage

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val client = Client(applicationContext)
            .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
            .setProject("5df5acd0d48c2") // Your project ID

        val storage = Storage(client)

        GlobalScope.launch {
            val response = storage.updateFile(
                bucketId = "[BUCKET_ID]",
                fileId = "[FILE_ID]",
            )
            val json = response.body?.string()        
        }
    }
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

**Rate limits:** 60 requests per 60 seconds

**Example:**

```client-android-kotlin
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import io.appwrite.Client
import io.appwrite.services.Storage

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val client = Client(applicationContext)
            .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
            .setProject("5df5acd0d48c2") // Your project ID

        val storage = Storage(client)

        GlobalScope.launch {
            val response = storage.deleteFile(
                bucketId = "[BUCKET_ID]",
                fileId = "[FILE_ID]"
            )
            val json = response.body?.string()        
        }
    }
}
```

---

