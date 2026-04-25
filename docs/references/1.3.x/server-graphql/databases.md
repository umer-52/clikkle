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
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/databases#createCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| default | boolean | No | Default value for attribute when not provided. Cannot be set when attribute is required. |
| array | boolean | No | Is attribute an array? |

**Responses:**

- **202**: application/json
  - [AttributeBoolean](/docs/references/1.3.x/models/attributeBoolean)

**Example:**

```server-graphql
mutation {
    databasesCreateBooleanAttribute(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]",
        key: "",
        required: false
    ) {
        key
        type
        status
        required
    }
}

```

---

#### Create Collection

Create a new Collection. Before using this route, you should create a new database resource using either a server integration API or directly from your database console.

**Endpoint:** `POST /databases/{databaseId}/collections`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| name | string | Yes | Collection name. Max length: 128 chars. |
| permissions | array | No | An array of permissions strings. By default, no user is granted with any permissions. [Learn more about permissions](https://appwrite.io/docs/advanced/platform/permissions). |
| documentSecurity | boolean | No | Enables configuring permissions for individual documents. A user needs one of document or collection level permissions to access a document. [Learn more about permissions](https://appwrite.io/docs/advanced/platform/permissions). |

**Responses:**

- **201**: application/json
  - [Collection](/docs/references/1.3.x/models/collection)

**Example:**

```server-graphql
mutation {
    databasesCreateCollection(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]",
        name: "[NAME]"
    ) {
        _id
        _createdAt
        _updatedAt
        _permissions
        databaseId
        name
        enabled
        documentSecurity
        attributes
        indexes {
            key
            type
            status
            attributes
        }
    }
}

```

---

#### Create Database

Create a new Database.


**Endpoint:** `POST /databases`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| name | string | Yes | Collection name. Max length: 128 chars. |

**Responses:**

- **201**: application/json
  - [Database](/docs/references/1.3.x/models/database)

**Example:**

```server-graphql
mutation {
    databasesCreate(
        databaseId: "[DATABASE_ID]",
        name: "[NAME]"
    ) {
        _id
        name
        _createdAt
        _updatedAt
    }
}

```

---

#### Create DateTime Attribute

**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/attributes/datetime`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/databases#createCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| default | string | No | Default value for the attribute in ISO 8601 format. Cannot be set when attribute is required. |
| array | boolean | No | Is attribute an array? |

**Responses:**

- **202**: application/json
  - [AttributeDatetime](/docs/references/1.3.x/models/attributeDatetime)

**Example:**

```server-graphql
mutation {
    databasesCreateDatetimeAttribute(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]",
        key: "",
        required: false
    ) {
        key
        type
        status
        required
        format
    }
}

```

---

#### Create Document

Create a new Document. Before using this route, you should create a new collection resource using either a server integration API or directly from your database console.

**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/documents`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/databases#createCollection). Make sure to define attributes before creating documents. |
| documentId | string | Yes | Document ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| data | object | Yes | Document data as JSON object. |
| permissions | array | No | An array of permissions strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/advanced/platform/permissions). |

**Responses:**

- **201**: application/json
  - [Document](/docs/references/1.3.x/models/document)

**Rate limits:** 120 requests per 60 seconds

**Example:**

```server-graphql
mutation {
    databasesCreateDocument(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]",
        documentId: "[DOCUMENT_ID]",
        data: "{}"
    ) {
        _id
        _collectionId
        _databaseId
        _createdAt
        _updatedAt
        _permissions
        data
    }
}

```

---

#### Create Email Attribute

Create an email attribute.


**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/attributes/email`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/databases#createCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| default | string | No | Default value for attribute when not provided. Cannot be set when attribute is required. |
| array | boolean | No | Is attribute an array? |

**Responses:**

- **202**: application/json
  - [AttributeEmail](/docs/references/1.3.x/models/attributeEmail)

**Example:**

```server-graphql
mutation {
    databasesCreateEmailAttribute(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]",
        key: "",
        required: false
    ) {
        key
        type
        status
        required
        format
    }
}

```

---

#### Create Enum Attribute

**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/attributes/enum`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/databases#createCollection). |
| key | string | Yes | Attribute Key. |
| elements | array | Yes | Array of elements in enumerated type. Uses length of longest element to determine size. Maximum of 100 elements are allowed, each 4096 characters long. |
| required | boolean | Yes | Is attribute required? |
| default | string | No | Default value for attribute when not provided. Cannot be set when attribute is required. |
| array | boolean | No | Is attribute an array? |

**Responses:**

- **202**: application/json
  - [AttributeEnum](/docs/references/1.3.x/models/attributeEnum)

**Example:**

```server-graphql
mutation {
    databasesCreateEnumAttribute(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]",
        key: "",
        elements: [],
        required: false
    ) {
        key
        type
        status
        required
        elements
        format
    }
}

```

---

#### Create Float Attribute

Create a float attribute. Optionally, minimum and maximum values can be provided.


**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/attributes/float`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/databases#createCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| min | number | No | Minimum value to enforce on new documents |
| max | number | No | Maximum value to enforce on new documents |
| default | number | No | Default value for attribute when not provided. Cannot be set when attribute is required. |
| array | boolean | No | Is attribute an array? |

**Responses:**

- **202**: application/json
  - [AttributeFloat](/docs/references/1.3.x/models/attributeFloat)

**Example:**

```server-graphql
mutation {
    databasesCreateFloatAttribute(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]",
        key: "",
        required: false
    ) {
        key
        type
        status
        required
    }
}

```

---

#### Create Index

**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/indexes`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/databases#createCollection). |
| key | string | Yes | Index Key. |
| type | string | Yes | Index type. |
| attributes | array | Yes | Array of attributes to index. Maximum of 100 attributes are allowed, each 32 characters long. |
| orders | array | No | Array of index orders. Maximum of 100 orders are allowed. |

**Responses:**

- **202**: application/json
  - [Index](/docs/references/1.3.x/models/index)

**Example:**

```server-graphql
mutation {
    databasesCreateIndex(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]",
        key: "",
        type: "key",
        attributes: []
    ) {
        key
        type
        status
        attributes
    }
}

```

---

#### Create Integer Attribute

Create an integer attribute. Optionally, minimum and maximum values can be provided.


**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/attributes/integer`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/databases#createCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| min | integer | No | Minimum value to enforce on new documents |
| max | integer | No | Maximum value to enforce on new documents |
| default | integer | No | Default value for attribute when not provided. Cannot be set when attribute is required. |
| array | boolean | No | Is attribute an array? |

**Responses:**

- **202**: application/json
  - [AttributeInteger](/docs/references/1.3.x/models/attributeInteger)

**Example:**

```server-graphql
mutation {
    databasesCreateIntegerAttribute(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]",
        key: "",
        required: false
    ) {
        key
        type
        status
        required
    }
}

```

---

#### Create IP Address Attribute

Create IP address attribute.


**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/attributes/ip`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/databases#createCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| default | string | No | Default value for attribute when not provided. Cannot be set when attribute is required. |
| array | boolean | No | Is attribute an array? |

**Responses:**

- **202**: application/json
  - [AttributeIP](/docs/references/1.3.x/models/attributeIp)

**Example:**

```server-graphql
mutation {
    databasesCreateIpAttribute(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]",
        key: "",
        required: false
    ) {
        key
        type
        status
        required
        format
    }
}

```

---

#### Create Relationship Attribute

Create relationship attribute. Learn more about relationship attributes.


**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/attributes/relationship`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/databases#createCollection). |
| relatedCollectionId | string | Yes | Related Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/databases#createCollection). |
| type | string | Yes | Relation type |
| twoWay | boolean | No | Is Two Way? |
| key | string | No | Attribute Key. |
| twoWayKey | string | No | Two Way Attribute Key. |
| onDelete | string | No | Constraints option |

**Responses:**

- **202**: application/json
  - [AttributeRelationship](/docs/references/1.3.x/models/attributeRelationship)

**Example:**

```server-graphql
mutation {
    databasesCreateRelationshipAttribute(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]",
        relatedCollectionId: "[RELATED_COLLECTION_ID]",
        type: "oneToOne"
    ) {
        key
        type
        status
        required
        relatedCollection
        relationType
        twoWay
        twoWayKey
        onDelete
        side
    }
}

```

---

#### Create String Attribute

Create a string attribute.


**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/attributes/string`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/databases#createCollection). |
| key | string | Yes | Attribute Key. |
| size | integer | Yes | Attribute size for text attributes, in number of characters. |
| required | boolean | Yes | Is attribute required? |
| default | string | No | Default value for attribute when not provided. Cannot be set when attribute is required. |
| array | boolean | No | Is attribute an array? |

**Responses:**

- **202**: application/json
  - [AttributeString](/docs/references/1.3.x/models/attributeString)

**Example:**

```server-graphql
mutation {
    databasesCreateStringAttribute(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]",
        key: "",
        size: 1,
        required: false
    ) {
        key
        type
        status
        required
        size
    }
}

```

---

#### Create URL Attribute

Create a URL attribute.


**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/attributes/url`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/databases#createCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| default | string | No | Default value for attribute when not provided. Cannot be set when attribute is required. |
| array | boolean | No | Is attribute an array? |

**Responses:**

- **202**: application/json
  - [AttributeURL](/docs/references/1.3.x/models/attributeUrl)

**Example:**

```server-graphql
mutation {
    databasesCreateUrlAttribute(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]",
        key: "",
        required: false
    ) {
        key
        type
        status
        required
        format
    }
}

```

---

#### Get Attribute

**Endpoint:** `GET /databases/{databaseId}/collections/{collectionId}/attributes/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/databases#createCollection). |
| key | string | Yes | Attribute Key. |

**Responses:**

- **200**: application/json
  - [AttributeBoolean](/docs/references/1.3.x/models/attributeBoolean)
  - [AttributeInteger](/docs/references/1.3.x/models/attributeInteger)
  - [AttributeFloat](/docs/references/1.3.x/models/attributeFloat)
  - [AttributeEmail](/docs/references/1.3.x/models/attributeEmail)
  - [AttributeEnum](/docs/references/1.3.x/models/attributeEnum)
  - [AttributeURL](/docs/references/1.3.x/models/attributeUrl)
  - [AttributeIP](/docs/references/1.3.x/models/attributeIp)
  - [AttributeDatetime](/docs/references/1.3.x/models/attributeDatetime)
  - [AttributeRelationship](/docs/references/1.3.x/models/attributeRelationship)
  - [AttributeString](/docs/references/1.3.x/models/attributeString)

**Example:**

```server-graphql
query {
    databasesGetAttribute(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]",
        key: ""
    ) {
        status
    }
}

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
  - [Collection](/docs/references/1.3.x/models/collection)

**Example:**

```server-graphql
query {
    databasesGetCollection(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]"
    ) {
        _id
        _createdAt
        _updatedAt
        _permissions
        databaseId
        name
        enabled
        documentSecurity
        attributes
        indexes {
            key
            type
            status
            attributes
        }
    }
}

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
  - [Database](/docs/references/1.3.x/models/database)

**Example:**

```server-graphql
query {
    databasesGet(
        databaseId: "[DATABASE_ID]"
    ) {
        _id
        name
        _createdAt
        _updatedAt
    }
}

```

---

#### Get Document

Get a document by its unique ID. This endpoint response returns a JSON object with the document data.

**Endpoint:** `GET /databases/{databaseId}/collections/{collectionId}/documents/{documentId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/databases#createCollection). |
| documentId | string | Yes | Document ID. |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/products/databases/queries). Only method allowed is select. |

**Responses:**

- **200**: application/json
  - [Document](/docs/references/1.3.x/models/document)

**Example:**

```server-graphql
query {
    databasesGetDocument(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]",
        documentId: "[DOCUMENT_ID]"
    ) {
        _id
        _collectionId
        _databaseId
        _createdAt
        _updatedAt
        _permissions
        data
    }
}

```

---

#### Get Index

**Endpoint:** `GET /databases/{databaseId}/collections/{collectionId}/indexes/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/databases#createCollection). |
| key | string | Yes | Index Key. |

**Responses:**

- **200**: application/json
  - [Index](/docs/references/1.3.x/models/index)

**Example:**

```server-graphql
query {
    databasesGetIndex(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]",
        key: ""
    ) {
        key
        type
        status
        attributes
    }
}

```

---

#### List Attributes

**Endpoint:** `GET /databases/{databaseId}/collections/{collectionId}/attributes`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/databases#createCollection). |

**Responses:**

- **200**: application/json
  - [Attributes List](/docs/references/1.3.x/models/attributeList)

**Example:**

```server-graphql
query {
    databasesListAttributes(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]"
    ) {
        total
        attributes
    }
}

```

---

#### List Collections

Get a list of all collections that belong to the provided databaseId. You can use the search parameter to filter your results.

**Endpoint:** `GET /databases/{databaseId}/collections`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/products/databases/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, documentSecurity |
| search | string | No | Search term to filter your list results. Max length: 256 chars. |

**Responses:**

- **200**: application/json
  - [Collections List](/docs/references/1.3.x/models/collectionList)

**Example:**

```server-graphql
query {
    databasesListCollections(
        databaseId: "[DATABASE_ID]"
    ) {
        total
        collections {
            _id
            _createdAt
            _updatedAt
            _permissions
            databaseId
            name
            enabled
            documentSecurity
            attributes
            indexes {
                key
                type
                status
                attributes
            }
        }
    }
}

```

---

#### List Databases

Get a list of all databases from the current Appwrite project. You can use the search parameter to filter your results.

**Endpoint:** `GET /databases`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/products/databases/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name |
| search | string | No | Search term to filter your list results. Max length: 256 chars. |

**Responses:**

- **200**: application/json
  - [Databases List](/docs/references/1.3.x/models/databaseList)

**Example:**

```server-graphql
query {
    databasesList {
        total
        databases {
            _id
            name
            _createdAt
            _updatedAt
        }
    }
}

```

---

#### List Documents

Get a list of all the user's documents in a given collection. You can use the query params to filter your results.

**Endpoint:** `GET /databases/{databaseId}/collections/{collectionId}/documents`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/databases#createCollection). |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/products/databases/queries). Maximum of 100 queries are allowed, each 4096 characters long. |

**Responses:**

- **200**: application/json
  - [Documents List](/docs/references/1.3.x/models/documentList)

**Example:**

```server-graphql
query {
    databasesListDocuments(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]"
    ) {
        total
        documents {
            _id
            _collectionId
            _databaseId
            _createdAt
            _updatedAt
            _permissions
            data
        }
    }
}

```

---

#### List Indexes

**Endpoint:** `GET /databases/{databaseId}/collections/{collectionId}/indexes`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/databases#createCollection). |

**Responses:**

- **200**: application/json
  - [Indexes List](/docs/references/1.3.x/models/indexList)

**Example:**

```server-graphql
query {
    databasesListIndexes(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]"
    ) {
        total
        indexes {
            key
            type
            status
            attributes
        }
    }
}

```

---

#### Update Boolean Attribute

**Endpoint:** `PATCH /databases/{databaseId}/collections/{collectionId}/attributes/boolean/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/databases#createCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| default | boolean | Yes | Default value for attribute when not provided. Cannot be set when attribute is required. |

**Responses:**

- **200**: no content

**Example:**

```server-graphql
mutation {
    databasesUpdateBooleanAttribute(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]",
        key: "",
        required: false,
        default: false
    ) {
        key
        type
        status
        required
    }
}

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
| permissions | array | No | An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/advanced/platform/permissions). |
| documentSecurity | boolean | No | Enables configuring permissions for individual documents. A user needs one of document or collection level permissions to access a document. [Learn more about permissions](https://appwrite.io/docs/advanced/platform/permissions). |
| enabled | boolean | No | Is collection enabled? |

**Responses:**

- **200**: application/json
  - [Collection](/docs/references/1.3.x/models/collection)

**Example:**

```server-graphql
mutation {
    databasesUpdateCollection(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]",
        name: "[NAME]"
    ) {
        _id
        _createdAt
        _updatedAt
        _permissions
        databaseId
        name
        enabled
        documentSecurity
        attributes
        indexes {
            key
            type
            status
            attributes
        }
    }
}

```

---

#### Update Database

Update a database by its unique ID.

**Endpoint:** `PUT /databases/{databaseId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| name | string | Yes | Database name. Max length: 128 chars. |

**Responses:**

- **200**: application/json
  - [Database](/docs/references/1.3.x/models/database)

**Example:**

```server-graphql
mutation {
    databasesUpdate(
        databaseId: "[DATABASE_ID]",
        name: "[NAME]"
    ) {
        _id
        name
        _createdAt
        _updatedAt
    }
}

```

---

#### Update DateTime Attribute

**Endpoint:** `PATCH /databases/{databaseId}/collections/{collectionId}/attributes/datetime/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/databases#createCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| default | string | Yes | Default value for attribute when not provided. Cannot be set when attribute is required. |

**Responses:**

- **200**: no content

**Example:**

```server-graphql
mutation {
    databasesUpdateDatetimeAttribute(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]",
        key: "",
        required: false,
        default: ""
    ) {
        key
        type
        status
        required
        format
    }
}

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
| permissions | array | No | An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/advanced/platform/permissions). |

**Responses:**

- **200**: application/json
  - [Document](/docs/references/1.3.x/models/document)

**Rate limits:** 120 requests per 60 seconds

**Example:**

```server-graphql
mutation {
    databasesUpdateDocument(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]",
        documentId: "[DOCUMENT_ID]"
    ) {
        _id
        _collectionId
        _databaseId
        _createdAt
        _updatedAt
        _permissions
        data
    }
}

```

---

#### Update Email Attribute

Update an email attribute. Changing the `default` value will not update already existing documents.


**Endpoint:** `PATCH /databases/{databaseId}/collections/{collectionId}/attributes/email/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/databases#createCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| default | string | Yes | Default value for attribute when not provided. Cannot be set when attribute is required. |

**Responses:**

- **200**: no content

**Example:**

```server-graphql
mutation {
    databasesUpdateEmailAttribute(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]",
        key: "",
        required: false,
        default: "email@example.com"
    ) {
        key
        type
        status
        required
        format
    }
}

```

---

#### Update Enum Attribute

Update an enum attribute. Changing the `default` value will not update already existing documents.


**Endpoint:** `PATCH /databases/{databaseId}/collections/{collectionId}/attributes/enum/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/databases#createCollection). |
| key | string | Yes | Attribute Key. |
| elements | array | Yes | Array of elements in enumerated type. Uses length of longest element to determine size. Maximum of 100 elements are allowed, each 4096 characters long. |
| required | boolean | Yes | Is attribute required? |
| default | string | Yes | Default value for attribute when not provided. Cannot be set when attribute is required. |

**Responses:**

- **200**: no content

**Example:**

```server-graphql
mutation {
    databasesUpdateEnumAttribute(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]",
        key: "",
        elements: [],
        required: false,
        default: "[DEFAULT]"
    ) {
        key
        type
        status
        required
        elements
        format
    }
}

```

---

#### Update Float Attribute

Update a float attribute. Changing the `default` value will not update already existing documents.


**Endpoint:** `PATCH /databases/{databaseId}/collections/{collectionId}/attributes/float/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/databases#createCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| min | number | Yes | Minimum value to enforce on new documents |
| max | number | Yes | Maximum value to enforce on new documents |
| default | number | Yes | Default value for attribute when not provided. Cannot be set when attribute is required. |

**Responses:**

- **200**: no content

**Example:**

```server-graphql
mutation {
    databasesUpdateFloatAttribute(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]",
        key: "",
        required: false,
        min: 0,
        max: 0,
        default: 0
    ) {
        key
        type
        status
        required
    }
}

```

---

#### Update Integer Attribute

Update an integer attribute. Changing the `default` value will not update already existing documents.


**Endpoint:** `PATCH /databases/{databaseId}/collections/{collectionId}/attributes/integer/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/databases#createCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| min | integer | Yes | Minimum value to enforce on new documents |
| max | integer | Yes | Maximum value to enforce on new documents |
| default | integer | Yes | Default value for attribute when not provided. Cannot be set when attribute is required. |

**Responses:**

- **200**: no content

**Example:**

```server-graphql
mutation {
    databasesUpdateIntegerAttribute(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]",
        key: "",
        required: false,
        min: 0,
        max: 0,
        default: 0
    ) {
        key
        type
        status
        required
    }
}

```

---

#### Update IP Address Attribute

Update an ip attribute. Changing the `default` value will not update already existing documents.


**Endpoint:** `PATCH /databases/{databaseId}/collections/{collectionId}/attributes/ip/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/databases#createCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| default | string | Yes | Default value for attribute when not provided. Cannot be set when attribute is required. |

**Responses:**

- **200**: no content

**Example:**

```server-graphql
mutation {
    databasesUpdateIpAttribute(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]",
        key: "",
        required: false,
        default: ""
    ) {
        key
        type
        status
        required
        format
    }
}

```

---

#### Update Relationship Attribute

Update relationship attribute. Learn more about relationship attributes.


**Endpoint:** `PATCH /databases/{databaseId}/collections/{collectionId}/attributes/{key}/relationship`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/databases#createCollection). |
| key | string | Yes | Attribute Key. |
| onDelete | string | No | Constraints option |

**Responses:**

- **200**: no content

**Example:**

```server-graphql
mutation {
    databasesUpdateRelationshipAttribute(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]",
        key: ""
    ) {
        key
        type
        status
        required
        relatedCollection
        relationType
        twoWay
        twoWayKey
        onDelete
        side
    }
}

```

---

#### Update String Attribute

Update a string attribute. Changing the `default` value will not update already existing documents.


**Endpoint:** `PATCH /databases/{databaseId}/collections/{collectionId}/attributes/string/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/databases#createCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| default | string | Yes | Default value for attribute when not provided. Cannot be set when attribute is required. |

**Responses:**

- **200**: no content

**Example:**

```server-graphql
mutation {
    databasesUpdateStringAttribute(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]",
        key: "",
        required: false,
        default: "[DEFAULT]"
    ) {
        key
        type
        status
        required
        size
    }
}

```

---

#### Update URL Attribute

Update an url attribute. Changing the `default` value will not update already existing documents.


**Endpoint:** `PATCH /databases/{databaseId}/collections/{collectionId}/attributes/url/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/databases#createCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| default | string | Yes | Default value for attribute when not provided. Cannot be set when attribute is required. |

**Responses:**

- **200**: no content

**Example:**

```server-graphql
mutation {
    databasesUpdateUrlAttribute(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]",
        key: "",
        required: false,
        default: "https://example.com"
    ) {
        key
        type
        status
        required
        format
    }
}

```

---

#### Delete Attribute

**Endpoint:** `DELETE /databases/{databaseId}/collections/{collectionId}/attributes/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/databases#createCollection). |
| key | string | Yes | Attribute Key. |

**Responses:**

- **204**: no content

**Example:**

```server-graphql
mutation {
    databasesDeleteAttribute(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]",
        key: ""
    ) {
        status
    }
}

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

```server-graphql
mutation {
    databasesDeleteCollection(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]"
    ) {
        status
    }
}

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

```server-graphql
mutation {
    databasesDelete(
        databaseId: "[DATABASE_ID]"
    ) {
        status
    }
}

```

---

#### Delete Document

Delete a document by its unique ID.

**Endpoint:** `DELETE /databases/{databaseId}/collections/{collectionId}/documents/{documentId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/databases#createCollection). |
| documentId | string | Yes | Document ID. |

**Responses:**

- **204**: no content

**Rate limits:** 60 requests per 60 seconds

**Example:**

```server-graphql
mutation {
    databasesDeleteDocument(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]",
        documentId: "[DOCUMENT_ID]"
    ) {
        status
    }
}

```

---

#### Delete Index

**Endpoint:** `DELETE /databases/{databaseId}/collections/{collectionId}/indexes/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-nodejs/databases#createCollection). |
| key | string | Yes | Index Key. |

**Responses:**

- **204**: no content

**Example:**

```server-graphql
mutation {
    databasesDeleteIndex(
        databaseId: "[DATABASE_ID]",
        collectionId: "[COLLECTION_ID]",
        key: ""
    ) {
        status
    }
}

```

---

