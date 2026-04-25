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

#### Create boolean attribute

Create a boolean attribute.


**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/attributes/boolean`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| default | boolean | No | Default value for attribute when not provided. Cannot be set when attribute is required. |
| array | boolean | No | Is attribute an array? |

**Responses:**

- **202**: application/json
  - [AttributeBoolean](/docs/references/1.4.x/models/attributeBoolean)

**Example:**

```server-rest
POST /v1/databases/{databaseId}/collections/{collectionId}/attributes/boolean HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "key": ,
  "required": false,
  "default": false,
  "array": false
}

```

---

#### Create collection

Create a new Collection. Before using this route, you should create a new database resource using either a server integration API or directly from your database console.

**Endpoint:** `POST /databases/{databaseId}/collections`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| name | string | Yes | Collection name. Max length: 128 chars. |
| permissions | array | No | An array of permissions strings. By default, no user is granted with any permissions. [Learn more about permissions](https://appwrite.io/docs/permissions). |
| documentSecurity | boolean | No | Enables configuring permissions for individual documents. A user needs one of document or collection level permissions to access a document. [Learn more about permissions](https://appwrite.io/docs/permissions). |
| enabled | boolean | No | Is collection enabled? When set to 'disabled', users cannot access the collection but Server SDKs with and API key can still read and write to the collection. No data is lost when this is toggled. |

**Responses:**

- **201**: application/json
  - [Collection](/docs/references/1.4.x/models/collection)

**Example:**

```server-rest
POST /v1/databases/{databaseId}/collections HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "collectionId": "[COLLECTION_ID]",
  "name": "[NAME]",
  "permissions": ["read(\"any\")"],
  "documentSecurity": false,
  "enabled": false
}

```

---

#### Create database

Create a new Database.


**Endpoint:** `POST /databases`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| name | string | Yes | Database name. Max length: 128 chars. |
| enabled | boolean | No | Is the database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database. No data is lost when this is toggled. |

**Responses:**

- **201**: application/json
  - [Database](/docs/references/1.4.x/models/database)

**Example:**

```server-rest
POST /v1/databases HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "databaseId": "[DATABASE_ID]",
  "name": "[NAME]",
  "enabled": false
}

```

---

#### Create datetime attribute

**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/attributes/datetime`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| default | string | No | Default value for the attribute in ISO 8601 format. Cannot be set when attribute is required. |
| array | boolean | No | Is attribute an array? |

**Responses:**

- **202**: application/json
  - [AttributeDatetime](/docs/references/1.4.x/models/attributeDatetime)

**Example:**

```server-rest
POST /v1/databases/{databaseId}/collections/{collectionId}/attributes/datetime HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "key": ,
  "required": false,
  "default": ,
  "array": false
}

```

---

#### Create document

Create a new Document. Before using this route, you should create a new collection resource using either a server integration API or directly from your database console.

**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/documents`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). Make sure to define attributes before creating documents. |
| documentId | string | Yes | Document ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| data | object | Yes | Document data as JSON object. |
| permissions | array | No | An array of permissions strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/permissions). |

**Responses:**

- **201**: application/json
  - [Document](/docs/references/1.4.x/models/document)

**Rate limits:** 120 requests per 60 seconds

**Example:**

```server-rest
POST /v1/databases/{databaseId}/collections/{collectionId}/documents HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2
X-Appwrite-JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...

{
  "documentId": "[DOCUMENT_ID]",
  "data": {},
  "permissions": ["read(\"any\")"]
}

```

---

#### Create email attribute

Create an email attribute.


**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/attributes/email`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| default | string | No | Default value for attribute when not provided. Cannot be set when attribute is required. |
| array | boolean | No | Is attribute an array? |

**Responses:**

- **202**: application/json
  - [AttributeEmail](/docs/references/1.4.x/models/attributeEmail)

**Example:**

```server-rest
POST /v1/databases/{databaseId}/collections/{collectionId}/attributes/email HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "key": ,
  "required": false,
  "default": "email@example.com",
  "array": false
}

```

---

#### Create enum attribute

**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/attributes/enum`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| key | string | Yes | Attribute Key. |
| elements | array | Yes | Array of elements in enumerated type. Uses length of longest element to determine size. Maximum of 100 elements are allowed, each 255 characters long. |
| required | boolean | Yes | Is attribute required? |
| default | string | No | Default value for attribute when not provided. Cannot be set when attribute is required. |
| array | boolean | No | Is attribute an array? |

**Responses:**

- **202**: application/json
  - [AttributeEnum](/docs/references/1.4.x/models/attributeEnum)

**Example:**

```server-rest
POST /v1/databases/{databaseId}/collections/{collectionId}/attributes/enum HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "key": ,
  "elements": [],
  "required": false,
  "default": "[DEFAULT]",
  "array": false
}

```

---

#### Create float attribute

Create a float attribute. Optionally, minimum and maximum values can be provided.


**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/attributes/float`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| min | number | No | Minimum value to enforce on new documents |
| max | number | No | Maximum value to enforce on new documents |
| default | number | No | Default value for attribute when not provided. Cannot be set when attribute is required. |
| array | boolean | No | Is attribute an array? |

**Responses:**

- **202**: application/json
  - [AttributeFloat](/docs/references/1.4.x/models/attributeFloat)

**Example:**

```server-rest
POST /v1/databases/{databaseId}/collections/{collectionId}/attributes/float HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "key": ,
  "required": false,
  "min": 0,
  "max": 0,
  "default": 0,
  "array": false
}

```

---

#### Create index

**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/indexes`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| key | string | Yes | Index Key. |
| type | string | Yes | Index type. |
| attributes | array | Yes | Array of attributes to index. Maximum of 100 attributes are allowed, each 32 characters long. |
| orders | array | No | Array of index orders. Maximum of 100 orders are allowed. |

**Responses:**

- **202**: application/json
  - [Index](/docs/references/1.4.x/models/index)

**Example:**

```server-rest
POST /v1/databases/{databaseId}/collections/{collectionId}/indexes HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "key": ,
  "type": "key",
  "attributes": [],
  "orders": []
}

```

---

#### Create integer attribute

Create an integer attribute. Optionally, minimum and maximum values can be provided.


**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/attributes/integer`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| min | integer | No | Minimum value to enforce on new documents |
| max | integer | No | Maximum value to enforce on new documents |
| default | integer | No | Default value for attribute when not provided. Cannot be set when attribute is required. |
| array | boolean | No | Is attribute an array? |

**Responses:**

- **202**: application/json
  - [AttributeInteger](/docs/references/1.4.x/models/attributeInteger)

**Example:**

```server-rest
POST /v1/databases/{databaseId}/collections/{collectionId}/attributes/integer HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "key": ,
  "required": false,
  "min": 0,
  "max": 0,
  "default": 0,
  "array": false
}

```

---

#### Create IP address attribute

Create IP address attribute.


**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/attributes/ip`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| default | string | No | Default value for attribute when not provided. Cannot be set when attribute is required. |
| array | boolean | No | Is attribute an array? |

**Responses:**

- **202**: application/json
  - [AttributeIP](/docs/references/1.4.x/models/attributeIp)

**Example:**

```server-rest
POST /v1/databases/{databaseId}/collections/{collectionId}/attributes/ip HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "key": ,
  "required": false,
  "default": ,
  "array": false
}

```

---

#### Create relationship attribute

Create relationship attribute. Learn more about relationship attributes.


**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/attributes/relationship`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| relatedCollectionId | string | Yes | Related Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| type | string | Yes | Relation type |
| twoWay | boolean | No | Is Two Way? |
| key | string | No | Attribute Key. |
| twoWayKey | string | No | Two Way Attribute Key. |
| onDelete | string | No | Constraints option |

**Responses:**

- **202**: application/json
  - [AttributeRelationship](/docs/references/1.4.x/models/attributeRelationship)

**Example:**

```server-rest
POST /v1/databases/{databaseId}/collections/{collectionId}/attributes/relationship HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "relatedCollectionId": "[RELATED_COLLECTION_ID]",
  "type": "oneToOne",
  "twoWay": false,
  "key": ,
  "twoWayKey": ,
  "onDelete": "cascade"
}

```

---

#### Create string attribute

Create a string attribute.


**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/attributes/string`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| key | string | Yes | Attribute Key. |
| size | integer | Yes | Attribute size for text attributes, in number of characters. |
| required | boolean | Yes | Is attribute required? |
| default | string | No | Default value for attribute when not provided. Cannot be set when attribute is required. |
| array | boolean | No | Is attribute an array? |
| encrypt | boolean | No | Toggle encryption for the attribute. Encryption enhances security by not storing any plain text values in the database. However, encrypted attributes cannot be queried. |

**Responses:**

- **202**: application/json
  - [AttributeString](/docs/references/1.4.x/models/attributeString)

**Example:**

```server-rest
POST /v1/databases/{databaseId}/collections/{collectionId}/attributes/string HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "key": ,
  "size": 1,
  "required": false,
  "default": "[DEFAULT]",
  "array": false,
  "encrypt": false
}

```

---

#### Create URL attribute

Create a URL attribute.


**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/attributes/url`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| default | string | No | Default value for attribute when not provided. Cannot be set when attribute is required. |
| array | boolean | No | Is attribute an array? |

**Responses:**

- **202**: application/json
  - [AttributeURL](/docs/references/1.4.x/models/attributeUrl)

**Example:**

```server-rest
POST /v1/databases/{databaseId}/collections/{collectionId}/attributes/url HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "key": ,
  "required": false,
  "default": "https://example.com",
  "array": false
}

```

---

#### Get attribute

**Endpoint:** `GET /databases/{databaseId}/collections/{collectionId}/attributes/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| key | string | Yes | Attribute Key. |

**Responses:**

- **200**: application/json
  - [AttributeBoolean](/docs/references/1.4.x/models/attributeBoolean)
  - [AttributeInteger](/docs/references/1.4.x/models/attributeInteger)
  - [AttributeFloat](/docs/references/1.4.x/models/attributeFloat)
  - [AttributeEmail](/docs/references/1.4.x/models/attributeEmail)
  - [AttributeEnum](/docs/references/1.4.x/models/attributeEnum)
  - [AttributeURL](/docs/references/1.4.x/models/attributeUrl)
  - [AttributeIP](/docs/references/1.4.x/models/attributeIp)
  - [AttributeDatetime](/docs/references/1.4.x/models/attributeDatetime)
  - [AttributeRelationship](/docs/references/1.4.x/models/attributeRelationship)
  - [AttributeString](/docs/references/1.4.x/models/attributeString)

**Example:**

```server-rest
GET /v1/databases/{databaseId}/collections/{collectionId}/attributes/{key} HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2


```

---

#### Get collection

Get a collection by its unique ID. This endpoint response returns a JSON object with the collection metadata.

**Endpoint:** `GET /databases/{databaseId}/collections/{collectionId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. |

**Responses:**

- **200**: application/json
  - [Collection](/docs/references/1.4.x/models/collection)

**Example:**

```server-rest
GET /v1/databases/{databaseId}/collections/{collectionId} HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2


```

---

#### Get database

Get a database by its unique ID. This endpoint response returns a JSON object with the database metadata.

**Endpoint:** `GET /databases/{databaseId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |

**Responses:**

- **200**: application/json
  - [Database](/docs/references/1.4.x/models/database)

**Example:**

```server-rest
GET /v1/databases/{databaseId} HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2


```

---

#### Get document

Get a document by its unique ID. This endpoint response returns a JSON object with the document data.

**Endpoint:** `GET /databases/{databaseId}/collections/{collectionId}/documents/{documentId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| documentId | string | Yes | Document ID. |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Only method allowed is select. |

**Responses:**

- **200**: application/json
  - [Document](/docs/references/1.4.x/models/document)

**Example:**

```server-rest
GET /v1/databases/{databaseId}/collections/{collectionId}/documents/{documentId} HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2
X-Appwrite-JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...


```

---

#### Get index

**Endpoint:** `GET /databases/{databaseId}/collections/{collectionId}/indexes/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| key | string | Yes | Index Key. |

**Responses:**

- **200**: application/json
  - [Index](/docs/references/1.4.x/models/index)

**Example:**

```server-rest
GET /v1/databases/{databaseId}/collections/{collectionId}/indexes/{key} HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2


```

---

#### List attributes

**Endpoint:** `GET /databases/{databaseId}/collections/{collectionId}/attributes`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, type, size, required, array, status, error |

**Responses:**

- **200**: application/json
  - [Attributes List](/docs/references/1.4.x/models/attributeList)

**Example:**

```server-rest
GET /v1/databases/{databaseId}/collections/{collectionId}/attributes HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2


```

---

#### List collections

Get a list of all collections that belong to the provided databaseId. You can use the search parameter to filter your results.

**Endpoint:** `GET /databases/{databaseId}/collections`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, documentSecurity |
| search | string | No | Search term to filter your list results. Max length: 256 chars. |

**Responses:**

- **200**: application/json
  - [Collections List](/docs/references/1.4.x/models/collectionList)

**Example:**

```server-rest
GET /v1/databases/{databaseId}/collections HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2


```

---

#### List databases

Get a list of all databases from the current Appwrite project. You can use the search parameter to filter your results.

**Endpoint:** `GET /databases`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name |
| search | string | No | Search term to filter your list results. Max length: 256 chars. |

**Responses:**

- **200**: application/json
  - [Databases List](/docs/references/1.4.x/models/databaseList)

**Example:**

```server-rest
GET /v1/databases HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2


```

---

#### List documents

Get a list of all the user's documents in a given collection. You can use the query params to filter your results.

**Endpoint:** `GET /databases/{databaseId}/collections/{collectionId}/documents`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. |

**Responses:**

- **200**: application/json
  - [Documents List](/docs/references/1.4.x/models/documentList)

**Example:**

```server-rest
GET /v1/databases/{databaseId}/collections/{collectionId}/documents HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2
X-Appwrite-JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...


```

---

#### List indexes

**Endpoint:** `GET /databases/{databaseId}/collections/{collectionId}/indexes`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, type, status, attributes, error |

**Responses:**

- **200**: application/json
  - [Indexes List](/docs/references/1.4.x/models/indexList)

**Example:**

```server-rest
GET /v1/databases/{databaseId}/collections/{collectionId}/indexes HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2


```

---

#### Update boolean attribute

**Endpoint:** `PATCH /databases/{databaseId}/collections/{collectionId}/attributes/boolean/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| default | boolean | Yes | Default value for attribute when not provided. Cannot be set when attribute is required. |

**Responses:**

- **200**: no content

**Example:**

```server-rest
PATCH /v1/databases/{databaseId}/collections/{collectionId}/attributes/boolean/{key} HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "required": false,
  "default": false
}

```

---

#### Update collection

Update a collection by its unique ID.

**Endpoint:** `PUT /databases/{databaseId}/collections/{collectionId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. |
| name | string | Yes | Collection name. Max length: 128 chars. |
| permissions | array | No | An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions). |
| documentSecurity | boolean | No | Enables configuring permissions for individual documents. A user needs one of document or collection level permissions to access a document. [Learn more about permissions](https://appwrite.io/docs/permissions). |
| enabled | boolean | No | Is collection enabled? When set to 'disabled', users cannot access the collection but Server SDKs with and API key can still read and write to the collection. No data is lost when this is toggled. |

**Responses:**

- **200**: application/json
  - [Collection](/docs/references/1.4.x/models/collection)

**Example:**

```server-rest
PUT /v1/databases/{databaseId}/collections/{collectionId} HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "name": "[NAME]",
  "permissions": ["read(\"any\")"],
  "documentSecurity": false,
  "enabled": false
}

```

---

#### Update database

Update a database by its unique ID.

**Endpoint:** `PUT /databases/{databaseId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| name | string | Yes | Database name. Max length: 128 chars. |
| enabled | boolean | No | Is database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database. No data is lost when this is toggled. |

**Responses:**

- **200**: application/json
  - [Database](/docs/references/1.4.x/models/database)

**Example:**

```server-rest
PUT /v1/databases/{databaseId} HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "name": "[NAME]",
  "enabled": false
}

```

---

#### Update dateTime attribute

**Endpoint:** `PATCH /databases/{databaseId}/collections/{collectionId}/attributes/datetime/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| default | string | Yes | Default value for attribute when not provided. Cannot be set when attribute is required. |

**Responses:**

- **200**: no content

**Example:**

```server-rest
PATCH /v1/databases/{databaseId}/collections/{collectionId}/attributes/datetime/{key} HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "required": false,
  "default": 
}

```

---

#### Update document

Update a document by its unique ID. Using the patch method you can pass only specific fields that will get updated.

**Endpoint:** `PATCH /databases/{databaseId}/collections/{collectionId}/documents/{documentId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. |
| documentId | string | Yes | Document ID. |
| data | object | No | Document data as JSON object. Include only attribute and value pairs to be updated. |
| permissions | array | No | An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions). |

**Responses:**

- **200**: application/json
  - [Document](/docs/references/1.4.x/models/document)

**Rate limits:** 120 requests per 60 seconds

**Example:**

```server-rest
PATCH /v1/databases/{databaseId}/collections/{collectionId}/documents/{documentId} HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2
X-Appwrite-JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...

{
  "data": {},
  "permissions": ["read(\"any\")"]
}

```

---

#### Update email attribute

Update an email attribute. Changing the `default` value will not update already existing documents.


**Endpoint:** `PATCH /databases/{databaseId}/collections/{collectionId}/attributes/email/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| default | string | Yes | Default value for attribute when not provided. Cannot be set when attribute is required. |

**Responses:**

- **200**: no content

**Example:**

```server-rest
PATCH /v1/databases/{databaseId}/collections/{collectionId}/attributes/email/{key} HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "required": false,
  "default": "email@example.com"
}

```

---

#### Update enum attribute

Update an enum attribute. Changing the `default` value will not update already existing documents.


**Endpoint:** `PATCH /databases/{databaseId}/collections/{collectionId}/attributes/enum/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| key | string | Yes | Attribute Key. |
| elements | array | Yes | Array of elements in enumerated type. Uses length of longest element to determine size. Maximum of 100 elements are allowed, each 255 characters long. |
| required | boolean | Yes | Is attribute required? |
| default | string | Yes | Default value for attribute when not provided. Cannot be set when attribute is required. |

**Responses:**

- **200**: no content

**Example:**

```server-rest
PATCH /v1/databases/{databaseId}/collections/{collectionId}/attributes/enum/{key} HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "elements": [],
  "required": false,
  "default": "[DEFAULT]"
}

```

---

#### Update float attribute

Update a float attribute. Changing the `default` value will not update already existing documents.


**Endpoint:** `PATCH /databases/{databaseId}/collections/{collectionId}/attributes/float/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| min | number | Yes | Minimum value to enforce on new documents |
| max | number | Yes | Maximum value to enforce on new documents |
| default | number | Yes | Default value for attribute when not provided. Cannot be set when attribute is required. |

**Responses:**

- **200**: no content

**Example:**

```server-rest
PATCH /v1/databases/{databaseId}/collections/{collectionId}/attributes/float/{key} HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "required": false,
  "min": 0,
  "max": 0,
  "default": 0
}

```

---

#### Update integer attribute

Update an integer attribute. Changing the `default` value will not update already existing documents.


**Endpoint:** `PATCH /databases/{databaseId}/collections/{collectionId}/attributes/integer/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| min | integer | Yes | Minimum value to enforce on new documents |
| max | integer | Yes | Maximum value to enforce on new documents |
| default | integer | Yes | Default value for attribute when not provided. Cannot be set when attribute is required. |

**Responses:**

- **200**: no content

**Example:**

```server-rest
PATCH /v1/databases/{databaseId}/collections/{collectionId}/attributes/integer/{key} HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "required": false,
  "min": 0,
  "max": 0,
  "default": 0
}

```

---

#### Update IP address attribute

Update an ip attribute. Changing the `default` value will not update already existing documents.


**Endpoint:** `PATCH /databases/{databaseId}/collections/{collectionId}/attributes/ip/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| default | string | Yes | Default value for attribute when not provided. Cannot be set when attribute is required. |

**Responses:**

- **200**: no content

**Example:**

```server-rest
PATCH /v1/databases/{databaseId}/collections/{collectionId}/attributes/ip/{key} HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "required": false,
  "default": 
}

```

---

#### Update relationship attribute

Update relationship attribute. Learn more about relationship attributes.


**Endpoint:** `PATCH /databases/{databaseId}/collections/{collectionId}/attributes/{key}/relationship`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| key | string | Yes | Attribute Key. |
| onDelete | string | No | Constraints option |

**Responses:**

- **200**: no content

**Example:**

```server-rest
PATCH /v1/databases/{databaseId}/collections/{collectionId}/attributes/{key}/relationship HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "onDelete": "cascade"
}

```

---

#### Update string attribute

Update a string attribute. Changing the `default` value will not update already existing documents.


**Endpoint:** `PATCH /databases/{databaseId}/collections/{collectionId}/attributes/string/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| default | string | Yes | Default value for attribute when not provided. Cannot be set when attribute is required. |

**Responses:**

- **200**: no content

**Example:**

```server-rest
PATCH /v1/databases/{databaseId}/collections/{collectionId}/attributes/string/{key} HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "required": false,
  "default": "[DEFAULT]"
}

```

---

#### Update URL attribute

Update an url attribute. Changing the `default` value will not update already existing documents.


**Endpoint:** `PATCH /databases/{databaseId}/collections/{collectionId}/attributes/url/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| default | string | Yes | Default value for attribute when not provided. Cannot be set when attribute is required. |

**Responses:**

- **200**: no content

**Example:**

```server-rest
PATCH /v1/databases/{databaseId}/collections/{collectionId}/attributes/url/{key} HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "required": false,
  "default": "https://example.com"
}

```

---

#### Delete attribute

**Endpoint:** `DELETE /databases/{databaseId}/collections/{collectionId}/attributes/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| key | string | Yes | Attribute Key. |

**Responses:**

- **204**: no content

**Example:**

```server-rest
DELETE /v1/databases/{databaseId}/collections/{collectionId}/attributes/{key} HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2


```

---

#### Delete collection

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

```server-rest
DELETE /v1/databases/{databaseId}/collections/{collectionId} HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2


```

---

#### Delete database

Delete a database by its unique ID. Only API keys with with databases.write scope can delete a database.

**Endpoint:** `DELETE /databases/{databaseId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |

**Responses:**

- **204**: no content

**Example:**

```server-rest
DELETE /v1/databases/{databaseId} HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2


```

---

#### Delete document

Delete a document by its unique ID.

**Endpoint:** `DELETE /databases/{databaseId}/collections/{collectionId}/documents/{documentId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| documentId | string | Yes | Document ID. |

**Responses:**

- **204**: no content

**Rate limits:** 60 requests per 60 seconds

**Example:**

```server-rest
DELETE /v1/databases/{databaseId}/collections/{collectionId}/documents/{documentId} HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2
X-Appwrite-JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...


```

---

#### Delete index

**Endpoint:** `DELETE /databases/{databaseId}/collections/{collectionId}/indexes/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| key | string | Yes | Index Key. |

**Responses:**

- **204**: no content

**Example:**

```server-rest
DELETE /v1/databases/{databaseId}/collections/{collectionId}/indexes/{key} HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.4.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2


```

---

