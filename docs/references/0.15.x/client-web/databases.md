# databases

The Databases service allows you to create structured collection of documents, query and filter lists of documents, and manage an advanced set of read and write access permissions.

All data returned by the Databases service are represented as structured JSON documents.

The Databases service can contain multiple databases, each database can contain multiple collections. A collection is a group of similarly structured documents. The accepted structure of documents is defined by collection attributes. The collection attributes help you ensure all your user-submitted data is validated and stored according to the collection structure.

Using Clikkle permissions architecture, you can assign read or write access to each collection or document in your project for either a specific user, team, user role, or even grant it with public access (`any`). You can learn more about how Clikkle handles permissions and access control.


## Base URL

```
https://<REGION>.cloud.appwrite.io/v1
```

## Endpoints

#### Create Document

Create a new Document. Before using this route, you should create a new collection resource using either a server integration API or directly from your database console.

**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/documents`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). Make sure to define attributes before creating documents. |
| documentId | string | Yes | Document ID. Choose your own unique ID or pass the string "unique()" to auto generate it. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| data | object | Yes | Document data as JSON object. |
| read | array | No | An array of strings with read permissions. By default only the current user is granted with read permissions. [learn more about permissions](https://appwrite.io/docs/advanced/platform/permissions) and get a full list of available permissions. |
| write | array | No | An array of strings with write permissions. By default only the current user is granted with write permissions. [learn more about permissions](https://appwrite.io/docs/advanced/platform/permissions) and get a full list of available permissions. |

**Responses:**

- **201**: application/json
  - [Document](/docs/references/0.15.x/models/document)

**Example:**

```client-web
import { Client, Databases } from "appwrite";

const client = new Client();

const databases = new Databases(client, '[DATABASE_ID]');

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
;

const promise = databases.createDocument('[COLLECTION_ID]', '[DOCUMENT_ID]', {});

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
```

---

#### Get Document

Get a document by its unique ID. This endpoint response returns a JSON object with the document data.

**Endpoint:** `GET /databases/{databaseId}/collections/{collectionId}/documents/{documentId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |
| documentId | string | Yes | Document ID. |

**Responses:**

- **200**: application/json
  - [Document](/docs/references/0.15.x/models/document)

**Example:**

```client-web
import { Client, Databases } from "appwrite";

const client = new Client();

const databases = new Databases(client, '[DATABASE_ID]');

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
;

const promise = databases.getDocument('[COLLECTION_ID]', '[DOCUMENT_ID]');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
```

---

#### List Documents

Get a list of all the user's documents in a given collection. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of documents belonging to the provided collectionId. Learn more about different API modes.

**Endpoint:** `GET /databases/{databaseId}/collections/{collectionId}/documents`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/database#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. |
| limit | integer | No | Maximum number of documents to return in response. By default will return maximum 25 results. Maximum of 100 results allowed per request. |
| offset | integer | No | Offset value. The default value is 0. Use this value to manage pagination. [learn more about pagination](https://appwrite.io/docs/pagination) |
| cursor | string | No | ID of the document used as the starting point for the query, excluding the document itself. Should be used for efficient pagination when working with large sets of data. [learn more about pagination](https://appwrite.io/docs/pagination) |
| cursorDirection | string | No | Direction of the cursor, can be either 'before' or 'after'. |
| orderAttributes | array | No | Array of attributes used to sort results. Maximum of 100 order attributes are allowed, each 4096 characters long. |
| orderTypes | array | No | Array of order directions for sorting attribtues. Possible values are DESC for descending order, or ASC for ascending order. Maximum of 100 order types are allowed. |

**Responses:**

- **200**: application/json
  - [Documents List](/docs/references/0.15.x/models/documentList)

**Example:**

```client-web
import { Client, Databases } from "appwrite";

const client = new Client();

const databases = new Databases(client, '[DATABASE_ID]');

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
;

const promise = databases.listDocuments('[COLLECTION_ID]');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
```

---

#### Update Document

Update a document by its unique ID. Using the patch method you can pass only specific fields that will get updated.

**Endpoint:** `PATCH /databases/{databaseId}/collections/{collectionId}/documents/{documentId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. |
| documentId | string | Yes | Document ID. |
| data | object | No | Document data as JSON object. Include only attribute and value pairs to be updated. |
| read | array | No | An array of strings with read permissions. By default inherits the existing read permissions. [learn more about permissions](https://appwrite.io/docs/advanced/platform/permissions) and get a full list of available permissions. |
| write | array | No | An array of strings with write permissions. By default inherits the existing write permissions. [learn more about permissions](https://appwrite.io/docs/advanced/platform/permissions) and get a full list of available permissions. |

**Responses:**

- **200**: application/json
  - [Document](/docs/references/0.15.x/models/document)

**Example:**

```client-web
import { Client, Databases } from "appwrite";

const client = new Client();

const databases = new Databases(client, '[DATABASE_ID]');

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
;

const promise = databases.updateDocument('[COLLECTION_ID]', '[DOCUMENT_ID]');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
```

---

#### Delete Document

Delete a document by its unique ID.

**Endpoint:** `DELETE /databases/{databaseId}/collections/{collectionId}/documents/{documentId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |
| documentId | string | Yes | Document ID. |

**Responses:**

- **204**: no content

**Example:**

```client-web
import { Client, Databases } from "appwrite";

const client = new Client();

const databases = new Databases(client, '[DATABASE_ID]');

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
;

const promise = databases.deleteDocument('[COLLECTION_ID]', '[DOCUMENT_ID]');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
```

---

