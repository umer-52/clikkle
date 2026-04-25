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

### documents

#### Create document

Create a new Document. Before using this route, you should create a new collection resource using either a server integration API or directly from your database console.

**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/documents`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). Make sure to define attributes before creating documents. |
| documentId | string | No | Document ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| data | object | No | Document data as JSON object. |
| permissions | array | No | An array of permissions strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/permissions). |
| transactionId | string | No | Transaction ID for staging the operation. |

**Responses:**

- **201**: application/json
  - [Document](/docs/references/1.8.x/models/document)

**Rate limits:** 120 requests per 60 seconds

**Example:**

```client-react-native
import { Client, Databases, Permission, Role } from "react-native-appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const databases = new Databases(client);

const result = await databases.createDocument({
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    documentId: '<DOCUMENT_ID>',
    data: {
        "username": "walter.obrien",
        "email": "walter.obrien@example.com",
        "fullName": "Walter O'Brien",
        "age": 30,
        "isAdmin": false
    },
    permissions: ["read("any")"], // optional
    transactionId: '<TRANSACTION_ID>' // optional
});

console.log(result);
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
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. |
| transactionId | string | No | Transaction ID to read uncommitted changes within the transaction. |

**Responses:**

- **200**: application/json
  - [Document](/docs/references/1.8.x/models/document)

**Example:**

```client-react-native
import { Client, Databases } from "react-native-appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const databases = new Databases(client);

const result = await databases.getDocument({
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    documentId: '<DOCUMENT_ID>',
    queries: [], // optional
    transactionId: '<TRANSACTION_ID>' // optional
});

console.log(result);
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
| transactionId | string | No | Transaction ID to read uncommitted changes within the transaction. |
| total | boolean | No | When set to false, the total count returned will be 0 and will not be calculated. |

**Responses:**

- **200**: application/json
  - [Documents List](/docs/references/1.8.x/models/documentList)

**Example:**

```client-react-native
import { Client, Databases } from "react-native-appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const databases = new Databases(client);

const result = await databases.listDocuments({
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    queries: [], // optional
    transactionId: '<TRANSACTION_ID>', // optional
    total: false // optional
});

console.log(result);
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
| transactionId | string | No | Transaction ID for staging the operation. |

**Responses:**

- **200**: application/json
  - [Document](/docs/references/1.8.x/models/document)

**Rate limits:** 120 requests per 60 seconds

**Example:**

```client-react-native
import { Client, Databases, Permission, Role } from "react-native-appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const databases = new Databases(client);

const result = await databases.updateDocument({
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    documentId: '<DOCUMENT_ID>',
    data: {
        "username": "walter.obrien",
        "email": "walter.obrien@example.com",
        "fullName": "Walter O'Brien",
        "age": 33,
        "isAdmin": false
    }, // optional
    permissions: ["read("any")"], // optional
    transactionId: '<TRANSACTION_ID>' // optional
});

console.log(result);
```

---

#### Upsert a document

Create or update a Document. Before using this route, you should create a new collection resource using either a server integration API or directly from your database console.

**Endpoint:** `PUT /databases/{databaseId}/collections/{collectionId}/documents/{documentId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. |
| documentId | string | Yes | Document ID. |
| data | object | No | Document data as JSON object. Include all required attributes of the document to be created or updated. |
| permissions | array | No | An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions). |
| transactionId | string | No | Transaction ID for staging the operation. |

**Responses:**

- **201**: application/json
  - [Document](/docs/references/1.8.x/models/document)

**Rate limits:** 120 requests per 60 seconds

**Example:**

```client-react-native
import { Client, Databases, Permission, Role } from "react-native-appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const databases = new Databases(client);

const result = await databases.upsertDocument({
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    documentId: '<DOCUMENT_ID>',
    data: {
        "username": "walter.obrien",
        "email": "walter.obrien@example.com",
        "fullName": "Walter O'Brien",
        "age": 30,
        "isAdmin": false
    }, // optional
    permissions: ["read("any")"], // optional
    transactionId: '<TRANSACTION_ID>' // optional
});

console.log(result);
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
| transactionId | string | No | Transaction ID for staging the operation. |

**Responses:**

- **204**: no content

**Rate limits:** 60 requests per 60 seconds

**Example:**

```client-react-native
import { Client, Databases } from "react-native-appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const databases = new Databases(client);

const result = await databases.deleteDocument({
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    documentId: '<DOCUMENT_ID>',
    transactionId: '<TRANSACTION_ID>' // optional
});

console.log(result);
```

---

#### Increment document attribute

Increment a specific attribute of a document by a given value.

**Endpoint:** `PATCH /databases/{databaseId}/collections/{collectionId}/documents/{documentId}/{attribute}/increment`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. |
| documentId | string | Yes | Document ID. |
| attribute | string | Yes | Attribute key. |
| value | number | No | Value to increment the attribute by. The value must be a number. |
| max | number | No | Maximum value for the attribute. If the current value is greater than this value, an error will be thrown. |
| transactionId | string | No | Transaction ID for staging the operation. |

**Responses:**

- **200**: application/json
  - [Document](/docs/references/1.8.x/models/document)

**Rate limits:** 120 requests per 60 seconds

**Example:**

```client-react-native
import { Client, Databases } from "react-native-appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const databases = new Databases(client);

const result = await databases.incrementDocumentAttribute({
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    documentId: '<DOCUMENT_ID>',
    attribute: '',
    value: 0, // optional
    max: 0, // optional
    transactionId: '<TRANSACTION_ID>' // optional
});

console.log(result);
```

---

#### Decrement document attribute

Decrement a specific attribute of a document by a given value.

**Endpoint:** `PATCH /databases/{databaseId}/collections/{collectionId}/documents/{documentId}/{attribute}/decrement`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. |
| documentId | string | Yes | Document ID. |
| attribute | string | Yes | Attribute key. |
| value | number | No | Value to increment the attribute by. The value must be a number. |
| min | number | No | Minimum value for the attribute. If the current value is lesser than this value, an exception will be thrown. |
| transactionId | string | No | Transaction ID for staging the operation. |

**Responses:**

- **200**: application/json
  - [Document](/docs/references/1.8.x/models/document)

**Rate limits:** 120 requests per 60 seconds

**Example:**

```client-react-native
import { Client, Databases } from "react-native-appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const databases = new Databases(client);

const result = await databases.decrementDocumentAttribute({
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    documentId: '<DOCUMENT_ID>',
    attribute: '',
    value: 0, // optional
    min: 0, // optional
    transactionId: '<TRANSACTION_ID>' // optional
});

console.log(result);
```

---

### transactions

#### Create operations

Create multiple operations in a single transaction.

**Endpoint:** `POST /databases/transactions/{transactionId}/operations`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| transactionId | string | Yes | Transaction ID. |
| operations | array | No | Array of staged operations. |

**Responses:**

- **201**: application/json
  - [Transaction](/docs/references/1.8.x/models/transaction)

**Example:**

```client-react-native
import { Client, Databases } from "react-native-appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const databases = new Databases(client);

const result = await databases.createOperations({
    transactionId: '<TRANSACTION_ID>',
    operations: [
	    {
	        "action": "create",
	        "databaseId": "<DATABASE_ID>",
	        "collectionId": "<COLLECTION_ID>",
	        "documentId": "<DOCUMENT_ID>",
	        "data": {
	            "name": "Walter O'Brien"
	        }
	    }
	] // optional
});

console.log(result);
```

---

#### Create transaction

Create a new transaction.

**Endpoint:** `POST /databases/transactions`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| ttl | integer | No | Seconds before the transaction expires. |

**Responses:**

- **201**: application/json
  - [Transaction](/docs/references/1.8.x/models/transaction)

**Example:**

```client-react-native
import { Client, Databases } from "react-native-appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const databases = new Databases(client);

const result = await databases.createTransaction({
    ttl: 60 // optional
});

console.log(result);
```

---

#### Get transaction

Get a transaction by its unique ID.

**Endpoint:** `GET /databases/transactions/{transactionId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| transactionId | string | Yes | Transaction ID. |

**Responses:**

- **200**: application/json
  - [Transaction](/docs/references/1.8.x/models/transaction)

**Example:**

```client-react-native
import { Client, Databases } from "react-native-appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const databases = new Databases(client);

const result = await databases.getTransaction({
    transactionId: '<TRANSACTION_ID>'
});

console.log(result);
```

---

#### List transactions

List transactions across all databases.

**Endpoint:** `GET /databases/transactions`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). |

**Responses:**

- **200**: application/json
  - [Transaction List](/docs/references/1.8.x/models/transactionList)

**Example:**

```client-react-native
import { Client, Databases } from "react-native-appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const databases = new Databases(client);

const result = await databases.listTransactions({
    queries: [] // optional
});

console.log(result);
```

---

#### Update transaction

Update a transaction, to either commit or roll back its operations.

**Endpoint:** `PATCH /databases/transactions/{transactionId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| transactionId | string | Yes | Transaction ID. |
| commit | boolean | No | Commit transaction? |
| rollback | boolean | No | Rollback transaction? |

**Responses:**

- **200**: application/json
  - [Transaction](/docs/references/1.8.x/models/transaction)

**Example:**

```client-react-native
import { Client, Databases } from "react-native-appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const databases = new Databases(client);

const result = await databases.updateTransaction({
    transactionId: '<TRANSACTION_ID>',
    commit: false, // optional
    rollback: false // optional
});

console.log(result);
```

---

#### Delete transaction

Delete a transaction by its unique ID.

**Endpoint:** `DELETE /databases/transactions/{transactionId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| transactionId | string | Yes | Transaction ID. |

**Responses:**

- **204**: no content

**Example:**

```client-react-native
import { Client, Databases } from "react-native-appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const databases = new Databases(client);

const result = await databases.deleteTransaction({
    transactionId: '<TRANSACTION_ID>'
});

console.log(result);
```

---

