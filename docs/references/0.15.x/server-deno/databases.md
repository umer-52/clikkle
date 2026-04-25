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

#### Create Boolean Attribute

Create a boolean attribute.


**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/attributes/boolean`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| default | boolean | No | Default value for attribute when not provided. Cannot be set when attribute is required. |
| array | boolean | No | Is attribute an array? |

**Responses:**

- **201**: application/json
  - [AttributeBoolean](/docs/references/0.15.x/models/attributeBoolean)

**Example:**

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let databases = new sdk.Databases(client, '[DATABASE_ID]');

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = databases.createBooleanAttribute('[COLLECTION_ID]', '', false);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Create Collection

Create a new Collection. Before using this route, you should create a new database resource using either a server integration API or directly from your database console.

**Endpoint:** `POST /databases/{databaseId}/collections`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Unique Id. Choose your own unique ID or pass the string "unique()" to auto generate it. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| name | string | Yes | Collection name. Max length: 128 chars. |
| permission | string | Yes | Specifies the permissions model used in this collection, which accepts either 'collection' or 'document'. For 'collection' level permission, the permissions specified in read and write params are applied to all documents in the collection. For 'document' level permissions, read and write permissions are specified in each document. [learn more about permissions](https://appwrite.io/docs/advanced/platform/permissions) and get a full list of available permissions. |
| read | array | Yes | An array of strings with read permissions. By default no user is granted with any read permissions. [learn more about permissions](https://appwrite.io/docs/advanced/platform/permissions) and get a full list of available permissions. |
| write | array | Yes | An array of strings with write permissions. By default no user is granted with any write permissions. [learn more about permissions](https://appwrite.io/docs/advanced/platform/permissions) and get a full list of available permissions. |

**Responses:**

- **201**: application/json
  - [Collection](/docs/references/0.15.x/models/collection)

**Example:**

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let databases = new sdk.Databases(client, '[DATABASE_ID]');

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = databases.createCollection('[COLLECTION_ID]', '[NAME]', 'document', ["role:all"], ["role:all"]);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Create Database

Create a new Database.


**Endpoint:** `POST /databases`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Unique Id. Choose your own unique ID or pass the string "unique()" to auto generate it. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| name | string | Yes | Collection name. Max length: 128 chars. |

**Responses:**

- **201**: application/json
  - [Database](/docs/references/0.15.x/models/database)

**Example:**

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let databases = new sdk.Databases(client, '[DATABASE_ID]');

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = databases.create('[NAME]');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

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

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let databases = new sdk.Databases(client, '[DATABASE_ID]');

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = databases.createDocument('[COLLECTION_ID]', '[DOCUMENT_ID]', {});

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Create Email Attribute

Create an email attribute.


**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/attributes/email`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| default | string | No | Default value for attribute when not provided. Cannot be set when attribute is required. |
| array | boolean | No | Is attribute an array? |

**Responses:**

- **201**: application/json
  - [AttributeEmail](/docs/references/0.15.x/models/attributeEmail)

**Example:**

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let databases = new sdk.Databases(client, '[DATABASE_ID]');

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = databases.createEmailAttribute('[COLLECTION_ID]', '', false);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Create Enum Attribute

**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/attributes/enum`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |
| key | string | Yes | Attribute Key. |
| elements | array | Yes | Array of elements in enumerated type. Uses length of longest element to determine size. Maximum of 100 elements are allowed, each 4096 characters long. |
| required | boolean | Yes | Is attribute required? |
| default | string | No | Default value for attribute when not provided. Cannot be set when attribute is required. |
| array | boolean | No | Is attribute an array? |

**Responses:**

- **201**: application/json
  - [AttributeEnum](/docs/references/0.15.x/models/attributeEnum)

**Example:**

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let databases = new sdk.Databases(client, '[DATABASE_ID]');

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = databases.createEnumAttribute('[COLLECTION_ID]', '', [], false);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Create Float Attribute

Create a float attribute. Optionally, minimum and maximum values can be provided.


**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/attributes/float`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| min | number | No | Minimum value to enforce on new documents |
| max | number | No | Maximum value to enforce on new documents |
| default | number | No | Default value for attribute when not provided. Cannot be set when attribute is required. |
| array | boolean | No | Is attribute an array? |

**Responses:**

- **201**: application/json
  - [AttributeFloat](/docs/references/0.15.x/models/attributeFloat)

**Example:**

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let databases = new sdk.Databases(client, '[DATABASE_ID]');

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = databases.createFloatAttribute('[COLLECTION_ID]', '', false);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Create Index

**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/indexes`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |
| key | string | Yes | Index Key. |
| type | string | Yes | Index type. |
| attributes | array | Yes | Array of attributes to index. Maximum of 100 attributes are allowed, each 32 characters long. |
| orders | array | No | Array of index orders. Maximum of 100 orders are allowed. |

**Responses:**

- **201**: application/json
  - [Index](/docs/references/0.15.x/models/index)

**Example:**

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let databases = new sdk.Databases(client, '[DATABASE_ID]');

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = databases.createIndex('[COLLECTION_ID]', '', 'key', []);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Create Integer Attribute

Create an integer attribute. Optionally, minimum and maximum values can be provided.


**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/attributes/integer`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| min | integer | No | Minimum value to enforce on new documents |
| max | integer | No | Maximum value to enforce on new documents |
| default | integer | No | Default value for attribute when not provided. Cannot be set when attribute is required. |
| array | boolean | No | Is attribute an array? |

**Responses:**

- **201**: application/json
  - [AttributeInteger](/docs/references/0.15.x/models/attributeInteger)

**Example:**

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let databases = new sdk.Databases(client, '[DATABASE_ID]');

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = databases.createIntegerAttribute('[COLLECTION_ID]', '', false);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Create IP Address Attribute

Create IP address attribute.


**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/attributes/ip`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| default | string | No | Default value for attribute when not provided. Cannot be set when attribute is required. |
| array | boolean | No | Is attribute an array? |

**Responses:**

- **201**: application/json
  - [AttributeIP](/docs/references/0.15.x/models/attributeIp)

**Example:**

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let databases = new sdk.Databases(client, '[DATABASE_ID]');

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = databases.createIpAttribute('[COLLECTION_ID]', '', false);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Create String Attribute

Create a string attribute.


**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/attributes/string`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |
| key | string | Yes | Attribute Key. |
| size | integer | Yes | Attribute size for text attributes, in number of characters. |
| required | boolean | Yes | Is attribute required? |
| default | string | No | Default value for attribute when not provided. Cannot be set when attribute is required. |
| array | boolean | No | Is attribute an array? |

**Responses:**

- **201**: application/json
  - [AttributeString](/docs/references/0.15.x/models/attributeString)

**Example:**

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let databases = new sdk.Databases(client, '[DATABASE_ID]');

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = databases.createStringAttribute('[COLLECTION_ID]', '', 1, false);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Create URL Attribute

Create a URL attribute.


**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/attributes/url`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| default | string | No | Default value for attribute when not provided. Cannot be set when attribute is required. |
| array | boolean | No | Is attribute an array? |

**Responses:**

- **201**: application/json
  - [AttributeURL](/docs/references/0.15.x/models/attributeUrl)

**Example:**

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let databases = new sdk.Databases(client, '[DATABASE_ID]');

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = databases.createUrlAttribute('[COLLECTION_ID]', '', false);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Get Attribute

**Endpoint:** `GET /databases/{databaseId}/collections/{collectionId}/attributes/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |
| key | string | Yes | Attribute Key. |

**Responses:**

- **200**: application/json
  - [AttributeBoolean](/docs/references/0.15.x/models/attributeBoolean)
  - [AttributeInteger](/docs/references/0.15.x/models/attributeInteger)
  - [AttributeFloat](/docs/references/0.15.x/models/attributeFloat)
  - [AttributeEmail](/docs/references/0.15.x/models/attributeEmail)
  - [AttributeEnum](/docs/references/0.15.x/models/attributeEnum)
  - [AttributeURL](/docs/references/0.15.x/models/attributeUrl)
  - [AttributeIP](/docs/references/0.15.x/models/attributeIp)
  - [AttributeString](/docs/references/0.15.x/models/attributeString)

**Example:**

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let databases = new sdk.Databases(client, '[DATABASE_ID]');

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = databases.getAttribute('[COLLECTION_ID]', '');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Get Collection

Get a collection by its unique ID. This endpoint response returns a JSON object with the collection metadata.

**Endpoint:** `GET /databases/{databaseId}/collections/{collectionId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. |

**Responses:**

- **200**: application/json
  - [Collection](/docs/references/0.15.x/models/collection)

**Example:**

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let databases = new sdk.Databases(client, '[DATABASE_ID]');

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = databases.getCollection('[COLLECTION_ID]');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Get Database

Get a database by its unique ID. This endpoint response returns a JSON object with the database metadata.

**Endpoint:** `GET /databases/{databaseId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |

**Responses:**

- **200**: application/json
  - [Collection](/docs/references/0.15.x/models/collection)

**Example:**

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let databases = new sdk.Databases(client, '[DATABASE_ID]');

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = databases.get();

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
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

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let databases = new sdk.Databases(client, '[DATABASE_ID]');

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = databases.getDocument('[COLLECTION_ID]', '[DOCUMENT_ID]');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Get Index

**Endpoint:** `GET /databases/{databaseId}/collections/{collectionId}/indexes/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |
| key | string | Yes | Index Key. |

**Responses:**

- **200**: application/json
  - [Index](/docs/references/0.15.x/models/index)

**Example:**

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let databases = new sdk.Databases(client, '[DATABASE_ID]');

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = databases.getIndex('[COLLECTION_ID]', '');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### List Attributes

**Endpoint:** `GET /databases/{databaseId}/collections/{collectionId}/attributes`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |

**Responses:**

- **200**: application/json
  - [Attributes List](/docs/references/0.15.x/models/attributeList)

**Example:**

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let databases = new sdk.Databases(client, '[DATABASE_ID]');

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = databases.listAttributes('[COLLECTION_ID]');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### List Collections

Get a list of all collections that belong to the provided databaseId. You can use the search parameter to filter your results.

**Endpoint:** `GET /databases/{databaseId}/collections`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| search | string | No | Search term to filter your list results. Max length: 256 chars. |
| limit | integer | No | Maximum number of collection to return in response. By default will return maximum 25 results. Maximum of 100 results allowed per request. |
| offset | integer | No | Offset value. The default value is 0. Use this param to manage pagination. [learn more about pagination](https://appwrite.io/docs/pagination) |
| cursor | string | No | ID of the collection used as the starting point for the query, excluding the collection itself. Should be used for efficient pagination when working with large sets of data. |
| cursorDirection | string | No | Direction of the cursor, can be either 'before' or 'after'. |
| orderType | string | No | Order result by ASC or DESC order. |

**Responses:**

- **200**: application/json
  - [Collections List](/docs/references/0.15.x/models/collectionList)

**Example:**

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let databases = new sdk.Databases(client, '[DATABASE_ID]');

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = databases.listCollections();

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### List Databases

Get a list of all databases from the current Appwrite project. You can use the search parameter to filter your results.

**Endpoint:** `GET /databases`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| search | string | No | Search term to filter your list results. Max length: 256 chars. |
| limit | integer | No | Maximum number of collection to return in response. By default will return maximum 25 results. Maximum of 100 results allowed per request. |
| offset | integer | No | Offset value. The default value is 0. Use this param to manage pagination. [learn more about pagination](https://appwrite.io/docs/pagination) |
| cursor | string | No | ID of the collection used as the starting point for the query, excluding the collection itself. Should be used for efficient pagination when working with large sets of data. |
| cursorDirection | string | No | Direction of the cursor, can be either 'before' or 'after'. |
| orderType | string | No | Order result by ASC or DESC order. |

**Responses:**

- **200**: application/json
  - [Databases List](/docs/references/0.15.x/models/databaseList)

**Example:**

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let databases = new sdk.Databases(client, '[DATABASE_ID]');

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = databases.list();

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
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

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let databases = new sdk.Databases(client, '[DATABASE_ID]');

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = databases.listDocuments('[COLLECTION_ID]');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### List Indexes

**Endpoint:** `GET /databases/{databaseId}/collections/{collectionId}/indexes`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |

**Responses:**

- **200**: application/json
  - [Indexes List](/docs/references/0.15.x/models/indexList)

**Example:**

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let databases = new sdk.Databases(client, '[DATABASE_ID]');

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = databases.listIndexes('[COLLECTION_ID]');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Update Collection

Update a collection by its unique ID.

**Endpoint:** `PUT /databases/{databaseId}/collections/{collectionId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. |
| name | string | Yes | Collection name. Max length: 128 chars. |
| permission | string | Yes | Permissions type model to use for reading documents in this collection. You can use collection-level permission set once on the collection using the `read` and `write` params, or you can set document-level permission where each document read and write params will decide who has access to read and write to each document individually. [learn more about permissions](https://appwrite.io/docs/advanced/platform/permissions) and get a full list of available permissions. |
| read | array | No | An array of strings with read permissions. By default inherits the existing read permissions. [learn more about permissions](https://appwrite.io/docs/advanced/platform/permissions) and get a full list of available permissions. |
| write | array | No | An array of strings with write permissions. By default inherits the existing write permissions. [learn more about permissions](https://appwrite.io/docs/advanced/platform/permissions) and get a full list of available permissions. |
| enabled | boolean | No | Is collection enabled? |

**Responses:**

- **200**: application/json
  - [Collection](/docs/references/0.15.x/models/collection)

**Example:**

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let databases = new sdk.Databases(client, '[DATABASE_ID]');

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = databases.updateCollection('[COLLECTION_ID]', '[NAME]', 'document');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Update Database

Update a database by its unique ID.

**Endpoint:** `PUT /databases/{databaseId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| name | string | Yes | Collection name. Max length: 128 chars. |

**Responses:**

- **200**: application/json
  - [Collection](/docs/references/0.15.x/models/collection)

**Example:**

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let databases = new sdk.Databases(client, '[DATABASE_ID]');

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = databases.update('[NAME]');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
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

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let databases = new sdk.Databases(client, '[DATABASE_ID]');

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = databases.updateDocument('[COLLECTION_ID]', '[DOCUMENT_ID]');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Delete Attribute

**Endpoint:** `DELETE /databases/{databaseId}/collections/{collectionId}/attributes/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |
| key | string | Yes | Attribute Key. |

**Responses:**

- **204**: no content

**Example:**

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let databases = new sdk.Databases(client, '[DATABASE_ID]');

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = databases.deleteAttribute('[COLLECTION_ID]', '');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Delete Collection

Delete a collection by its unique ID. Only users with write permissions have access to delete this resource.

**Endpoint:** `DELETE /databases/{databaseId}/collections/{collectionId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. |

**Responses:**

- **204**: no content

**Example:**

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let databases = new sdk.Databases(client, '[DATABASE_ID]');

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = databases.deleteCollection('[COLLECTION_ID]');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Delete Database

Delete a database by its unique ID. Only API keys with with databases.write scope can delete a database.

**Endpoint:** `DELETE /databases/{databaseId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |

**Responses:**

- **204**: no content

**Example:**

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let databases = new sdk.Databases(client, '[DATABASE_ID]');

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = databases.delete();

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
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

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let databases = new sdk.Databases(client, '[DATABASE_ID]');

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = databases.deleteDocument('[COLLECTION_ID]', '[DOCUMENT_ID]');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Delete Index

**Endpoint:** `DELETE /databases/{databaseId}/collections/{collectionId}/indexes/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection). |
| key | string | Yes | Index Key. |

**Responses:**

- **204**: no content

**Example:**

```server-deno
import * as sdk from "https://deno.land/x/appwrite/mod.ts";

// Init SDK
let client = new sdk.Client();

let databases = new sdk.Databases(client, '[DATABASE_ID]');

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;


let promise = databases.deleteIndex('[COLLECTION_ID]', '');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

