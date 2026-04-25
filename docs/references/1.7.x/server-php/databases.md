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

### databases

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
  - [Database](/docs/references/1.7.x/models/database)

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->create(
    databaseId: '<DATABASE_ID>',
    name: '<NAME>',
    enabled: false // optional
);
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
  - [Database](/docs/references/1.7.x/models/database)

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->get(
    databaseId: '<DATABASE_ID>'
);
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
  - [Databases List](/docs/references/1.7.x/models/databaseList)

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->list(
    queries: [], // optional
    search: '<SEARCH>' // optional
);
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
  - [Database](/docs/references/1.7.x/models/database)

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->update(
    databaseId: '<DATABASE_ID>',
    name: '<NAME>',
    enabled: false // optional
);
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

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->delete(
    databaseId: '<DATABASE_ID>'
);
```

---

### collections

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
  - [Collection](/docs/references/1.7.x/models/collection)

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->createCollection(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    name: '<NAME>',
    permissions: ["read("any")"], // optional
    documentSecurity: false, // optional
    enabled: false // optional
);
```

---

#### Create index

Creates an index on the attributes listed. Your index should include all the attributes you will query in a single request.
Attributes can be `key`, `fulltext`, and `unique`.

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
| lengths | array | No | Length of index. Maximum of 100 |

**Responses:**

- **202**: application/json
  - [Index](/docs/references/1.7.x/models/index)

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;
use Appwrite\Enums\IndexType;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->createIndex(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    key: '',
    type: IndexType::KEY(),
    attributes: [],
    orders: [], // optional
    lengths: [] // optional
);
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
  - [Collection](/docs/references/1.7.x/models/collection)

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->getCollection(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>'
);
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
  - [Collections List](/docs/references/1.7.x/models/collectionList)

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->listCollections(
    databaseId: '<DATABASE_ID>',
    queries: [], // optional
    search: '<SEARCH>' // optional
);
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
  - [Collection](/docs/references/1.7.x/models/collection)

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->updateCollection(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    name: '<NAME>',
    permissions: ["read("any")"], // optional
    documentSecurity: false, // optional
    enabled: false // optional
);
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

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->deleteCollection(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>'
);
```

---

### attributes

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
  - [AttributeBoolean](/docs/references/1.7.x/models/attributeBoolean)

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->createBooleanAttribute(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    key: '',
    required: false,
    default: false, // optional
    array: false // optional
);
```

---

#### Create datetime attribute

Create a date time attribute according to the ISO 8601 standard.

**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/attributes/datetime`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| default | string | No | Default value for the attribute in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Cannot be set when attribute is required. |
| array | boolean | No | Is attribute an array? |

**Responses:**

- **202**: application/json
  - [AttributeDatetime](/docs/references/1.7.x/models/attributeDatetime)

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->createDatetimeAttribute(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    key: '',
    required: false,
    default: '', // optional
    array: false // optional
);
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
  - [AttributeEmail](/docs/references/1.7.x/models/attributeEmail)

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->createEmailAttribute(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    key: '',
    required: false,
    default: 'email@example.com', // optional
    array: false // optional
);
```

---

#### Create enum attribute

Create an enumeration attribute. The `elements` param acts as a white-list of accepted values for this attribute. 


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
  - [AttributeEnum](/docs/references/1.7.x/models/attributeEnum)

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->createEnumAttribute(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    key: '',
    elements: [],
    required: false,
    default: '<DEFAULT>', // optional
    array: false // optional
);
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
  - [AttributeFloat](/docs/references/1.7.x/models/attributeFloat)

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->createFloatAttribute(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    key: '',
    required: false,
    min: null, // optional
    max: null, // optional
    default: null, // optional
    array: false // optional
);
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
  - [AttributeInteger](/docs/references/1.7.x/models/attributeInteger)

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->createIntegerAttribute(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    key: '',
    required: false,
    min: null, // optional
    max: null, // optional
    default: null, // optional
    array: false // optional
);
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
  - [AttributeIP](/docs/references/1.7.x/models/attributeIp)

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->createIpAttribute(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    key: '',
    required: false,
    default: '', // optional
    array: false // optional
);
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
  - [AttributeRelationship](/docs/references/1.7.x/models/attributeRelationship)

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;
use Appwrite\Enums\RelationshipType;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->createRelationshipAttribute(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    relatedCollectionId: '<RELATED_COLLECTION_ID>',
    type: RelationshipType::ONETOONE(),
    twoWay: false, // optional
    key: '', // optional
    twoWayKey: '', // optional
    onDelete: RelationMutate::CASCADE() // optional
);
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
  - [AttributeString](/docs/references/1.7.x/models/attributeString)

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->createStringAttribute(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    key: '',
    size: 1,
    required: false,
    default: '<DEFAULT>', // optional
    array: false, // optional
    encrypt: false // optional
);
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
  - [AttributeURL](/docs/references/1.7.x/models/attributeUrl)

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->createUrlAttribute(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    key: '',
    required: false,
    default: 'https://example.com', // optional
    array: false // optional
);
```

---

#### Get attribute

Get attribute by ID.

**Endpoint:** `GET /databases/{databaseId}/collections/{collectionId}/attributes/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| key | string | Yes | Attribute Key. |

**Responses:**

- **200**: application/json
  - [AttributeBoolean](/docs/references/1.7.x/models/attributeBoolean)
  - [AttributeInteger](/docs/references/1.7.x/models/attributeInteger)
  - [AttributeFloat](/docs/references/1.7.x/models/attributeFloat)
  - [AttributeEmail](/docs/references/1.7.x/models/attributeEmail)
  - [AttributeEnum](/docs/references/1.7.x/models/attributeEnum)
  - [AttributeURL](/docs/references/1.7.x/models/attributeUrl)
  - [AttributeIP](/docs/references/1.7.x/models/attributeIp)
  - [AttributeDatetime](/docs/references/1.7.x/models/attributeDatetime)
  - [AttributeRelationship](/docs/references/1.7.x/models/attributeRelationship)
  - [AttributeString](/docs/references/1.7.x/models/attributeString)

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->getAttribute(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    key: ''
);
```

---

#### List attributes

List attributes in the collection.

**Endpoint:** `GET /databases/{databaseId}/collections/{collectionId}/attributes`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, type, size, required, array, status, error |

**Responses:**

- **200**: application/json
  - [Attributes List](/docs/references/1.7.x/models/attributeList)

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->listAttributes(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    queries: [] // optional
);
```

---

#### Update boolean attribute

Update a boolean attribute. Changing the `default` value will not update already existing documents.

**Endpoint:** `PATCH /databases/{databaseId}/collections/{collectionId}/attributes/boolean/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| default | boolean | Yes | Default value for attribute when not provided. Cannot be set when attribute is required. |
| newKey | string | No | New attribute key. |

**Responses:**

- **200**: application/json
  - [AttributeBoolean](/docs/references/1.7.x/models/attributeBoolean)

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->updateBooleanAttribute(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    key: '',
    required: false,
    default: false,
    newKey: '' // optional
);
```

---

#### Update dateTime attribute

Update a date time attribute. Changing the `default` value will not update already existing documents.

**Endpoint:** `PATCH /databases/{databaseId}/collections/{collectionId}/attributes/datetime/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| key | string | Yes | Attribute Key. |
| required | boolean | Yes | Is attribute required? |
| default | string | Yes | Default value for attribute when not provided. Cannot be set when attribute is required. |
| newKey | string | No | New attribute key. |

**Responses:**

- **200**: application/json
  - [AttributeDatetime](/docs/references/1.7.x/models/attributeDatetime)

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->updateDatetimeAttribute(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    key: '',
    required: false,
    default: '',
    newKey: '' // optional
);
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
| newKey | string | No | New attribute key. |

**Responses:**

- **200**: application/json
  - [AttributeEmail](/docs/references/1.7.x/models/attributeEmail)

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->updateEmailAttribute(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    key: '',
    required: false,
    default: 'email@example.com',
    newKey: '' // optional
);
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
| newKey | string | No | New attribute key. |

**Responses:**

- **200**: application/json
  - [AttributeEnum](/docs/references/1.7.x/models/attributeEnum)

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->updateEnumAttribute(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    key: '',
    elements: [],
    required: false,
    default: '<DEFAULT>',
    newKey: '' // optional
);
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
| default | number | Yes | Default value for attribute when not provided. Cannot be set when attribute is required. |
| min | number | No | Minimum value to enforce on new documents |
| max | number | No | Maximum value to enforce on new documents |
| newKey | string | No | New attribute key. |

**Responses:**

- **200**: application/json
  - [AttributeFloat](/docs/references/1.7.x/models/attributeFloat)

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->updateFloatAttribute(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    key: '',
    required: false,
    default: null,
    min: null, // optional
    max: null, // optional
    newKey: '' // optional
);
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
| default | integer | Yes | Default value for attribute when not provided. Cannot be set when attribute is required. |
| min | integer | No | Minimum value to enforce on new documents |
| max | integer | No | Maximum value to enforce on new documents |
| newKey | string | No | New attribute key. |

**Responses:**

- **200**: application/json
  - [AttributeInteger](/docs/references/1.7.x/models/attributeInteger)

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->updateIntegerAttribute(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    key: '',
    required: false,
    default: null,
    min: null, // optional
    max: null, // optional
    newKey: '' // optional
);
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
| newKey | string | No | New attribute key. |

**Responses:**

- **200**: application/json
  - [AttributeIP](/docs/references/1.7.x/models/attributeIp)

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->updateIpAttribute(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    key: '',
    required: false,
    default: '',
    newKey: '' // optional
);
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
| newKey | string | No | New attribute key. |

**Responses:**

- **200**: application/json
  - [AttributeRelationship](/docs/references/1.7.x/models/attributeRelationship)

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->updateRelationshipAttribute(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    key: '',
    onDelete: RelationMutate::CASCADE(), // optional
    newKey: '' // optional
);
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
| size | integer | No | Maximum size of the string attribute. |
| newKey | string | No | New attribute key. |

**Responses:**

- **200**: application/json
  - [AttributeString](/docs/references/1.7.x/models/attributeString)

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->updateStringAttribute(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    key: '',
    required: false,
    default: '<DEFAULT>',
    size: 1, // optional
    newKey: '' // optional
);
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
| newKey | string | No | New attribute key. |

**Responses:**

- **200**: application/json
  - [AttributeURL](/docs/references/1.7.x/models/attributeUrl)

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->updateUrlAttribute(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    key: '',
    required: false,
    default: 'https://example.com',
    newKey: '' // optional
);
```

---

#### Delete attribute

Deletes an attribute.

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

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->deleteAttribute(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    key: ''
);
```

---

### indexes

#### Get index

Get index by ID.

**Endpoint:** `GET /databases/{databaseId}/collections/{collectionId}/indexes/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| key | string | Yes | Index Key. |

**Responses:**

- **200**: application/json
  - [Index](/docs/references/1.7.x/models/index)

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->getIndex(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    key: ''
);
```

---

#### List indexes

List indexes in the collection.

**Endpoint:** `GET /databases/{databaseId}/collections/{collectionId}/indexes`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, type, status, attributes, error |

**Responses:**

- **200**: application/json
  - [Indexes List](/docs/references/1.7.x/models/indexList)

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->listIndexes(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    queries: [] // optional
);
```

---

#### Delete index

Delete an index.

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

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->deleteIndex(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    key: ''
);
```

---

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

**Responses:**

- **201**: application/json
  - [Document](/docs/references/1.7.x/models/document)

**Rate limits:** 120 requests per 60 seconds

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setSession(''); // The user session to authenticate with

$databases = new Databases($client);

$result = $databases->createDocument(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    documentId: '<DOCUMENT_ID>',
    data: [],
    permissions: ["read("any")"] // optional
);
```

---

#### Create documents

Create new Documents. Before using this route, you should create a new collection resource using either a server integration API or directly from your database console.

**Endpoint:** `POST /databases/{databaseId}/collections/{collectionId}/documents`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). Make sure to define attributes before creating documents. |
| documents | array | No | Array of documents data as JSON objects. |

**Responses:**

- **201**: application/json
  - [Documents List](/docs/references/1.7.x/models/documentList)

**Rate limits:** 120 requests per 60 seconds

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->createDocuments(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    documents: []
);
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

**Responses:**

- **200**: application/json
  - [Document](/docs/references/1.7.x/models/document)

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setSession(''); // The user session to authenticate with

$databases = new Databases($client);

$result = $databases->getDocument(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    documentId: '<DOCUMENT_ID>',
    queries: [] // optional
);
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
  - [Documents List](/docs/references/1.7.x/models/documentList)

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setSession(''); // The user session to authenticate with

$databases = new Databases($client);

$result = $databases->listDocuments(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    queries: [] // optional
);
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
  - [Document](/docs/references/1.7.x/models/document)

**Rate limits:** 120 requests per 60 seconds

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setSession(''); // The user session to authenticate with

$databases = new Databases($client);

$result = $databases->updateDocument(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    documentId: '<DOCUMENT_ID>',
    data: [], // optional
    permissions: ["read("any")"] // optional
);
```

---

#### Update documents

Update all documents that match your queries, if no queries are submitted then all documents are updated. You can pass only specific fields to be updated.

**Endpoint:** `PATCH /databases/{databaseId}/collections/{collectionId}/documents`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. |
| data | object | No | Document data as JSON object. Include only attribute and value pairs to be updated. |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. |

**Responses:**

- **200**: application/json
  - [Documents List](/docs/references/1.7.x/models/documentList)

**Rate limits:** 120 requests per 60 seconds

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->updateDocuments(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    data: [], // optional
    queries: [] // optional
);
```

---

#### Upsert document

Create or update a Document. Before using this route, you should create a new collection resource using either a server integration API or directly from your database console.

**Endpoint:** `PUT /databases/{databaseId}/collections/{collectionId}/documents/{documentId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. |
| documentId | string | Yes | Document ID. |
| data | object | Yes | Document data as JSON object. Include all required attributes of the document to be created or updated. |
| permissions | array | No | An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions). |

**Responses:**

- **200**: application/json
  - [Document](/docs/references/1.7.x/models/document)

**Rate limits:** 120 requests per 60 seconds

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setSession(''); // The user session to authenticate with

$databases = new Databases($client);

$result = $databases->upsertDocument(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    documentId: '<DOCUMENT_ID>',
    data: [],
    permissions: ["read("any")"] // optional
);
```

---

#### Upsert documents

Create or update Documents. Before using this route, you should create a new collection resource using either a server integration API or directly from your database console.


**Endpoint:** `PUT /databases/{databaseId}/collections/{collectionId}/documents`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. |
| documents | array | Yes | Array of document data as JSON objects. May contain partial documents. |

**Responses:**

- **200**: application/json
  - [Documents List](/docs/references/1.7.x/models/documentList)

**Rate limits:** 120 requests per 60 seconds

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->upsertDocuments(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    documents: []
);
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

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setSession(''); // The user session to authenticate with

$databases = new Databases($client);

$result = $databases->deleteDocument(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    documentId: '<DOCUMENT_ID>'
);
```

---

#### Delete documents

Bulk delete documents using queries, if no queries are passed then all documents are deleted.

**Endpoint:** `DELETE /databases/{databaseId}/collections/{collectionId}/documents`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| collectionId | string | Yes | Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. |

**Responses:**

- **200**: application/json
  - [Documents List](/docs/references/1.7.x/models/documentList)

**Rate limits:** 60 requests per 60 seconds

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->deleteDocuments(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    queries: [] // optional
);
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

**Responses:**

- **200**: application/json
  - [Document](/docs/references/1.7.x/models/document)

**Rate limits:** 120 requests per 60 seconds

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->incrementDocumentAttribute(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    documentId: '<DOCUMENT_ID>',
    attribute: '',
    value: null, // optional
    max: null // optional
);
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
| value | number | No | Value to decrement the attribute by. The value must be a number. |
| min | number | No | Minimum value for the attribute. If the current value is lesser than this value, an exception will be thrown. |

**Responses:**

- **200**: application/json
  - [Document](/docs/references/1.7.x/models/document)

**Rate limits:** 120 requests per 60 seconds

**Example:**

```server-php
<?php

use Appwrite\Client;
use Appwrite\Services\Databases;

$client = (new Client())
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    ->setProject('<YOUR_PROJECT_ID>') // Your project ID
    ->setKey('<YOUR_API_KEY>'); // Your secret API key

$databases = new Databases($client);

$result = $databases->decrementDocumentAttribute(
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    documentId: '<DOCUMENT_ID>',
    attribute: '',
    value: null, // optional
    min: null // optional
);
```

---

