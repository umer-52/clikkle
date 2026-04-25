# tablesDB

The TablesDB service allows you to create structured tables of rows, query and filter lists of rows, and manage an
advanced set of read and write access permissions.

All data returned by the TablesDB service are represented as structured JSON rows.

The TablesDB service can contain multiple databases, each database can contain multiple tables. A table is a group of
similarly structured rows. The accepted structure of rows is defined
by table columns. The table columns help you ensure all your user-submitted
data is validated and stored according to the table structure.

Using Clikkle permissions architecture, you can assign read or write access to each table or row in your project for
either a specific user, team, user role, or even grant it with public access (`any`). You can learn more
about how Clikkle handles permissions and access control.


## Base URL

```
https://<REGION>.cloud.appwrite.io/v1
```

## Endpoints

### rows

#### Create row

Create a new Row. Before using this route, you should create a new table resource using either a server integration API or directly from your database console.

**Endpoint:** `POST /tablesdb/{databaseId}/tables/{tableId}/rows`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable). Make sure to define columns before creating rows. |
| rowId | string | No | Row ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| data | object | No | Row data as JSON object. |
| permissions | array | No | An array of permissions strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/permissions). |
| transactionId | string | No | Transaction ID for staging the operation. |

**Responses:**

- **201**: application/json
  - [Row](/docs/references/1.8.x/models/row)

**Rate limits:** 120 requests per 60 seconds

**Example:**

```client-rest
POST /v1/tablesdb/{databaseId}/tables/{tableId}/rows HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Session: 
X-Appwrite-JWT: <YOUR_JWT>

{
  "rowId": "<ROW_ID>",
  "data": {
    "username": "walter.obrien",
    "email": "walter.obrien@example.com",
    "fullName": "Walter O'Brien",
    "age": 30,
    "isAdmin": false
  },
  "permissions": ["read(\"any\")"],
  "transactionId": "<TRANSACTION_ID>"
}
```

---

#### Get row

Get a row by its unique ID. This endpoint response returns a JSON object with the row data.

**Endpoint:** `GET /tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable). |
| rowId | string | Yes | Row ID. |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. |
| transactionId | string | No | Transaction ID to read uncommitted changes within the transaction. |

**Responses:**

- **200**: application/json
  - [Row](/docs/references/1.8.x/models/row)

**Example:**

```client-rest
GET /v1/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId} HTTP/1.1
Host: cloud.appwrite.io
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Session: 
X-Appwrite-JWT: <YOUR_JWT>
```

---

#### List rows

Get a list of all the user's rows in a given table. You can use the query params to filter your results.

**Endpoint:** `GET /tablesdb/{databaseId}/tables/{tableId}/rows`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/products/databases/tables#create-table). |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. |
| transactionId | string | No | Transaction ID to read uncommitted changes within the transaction. |
| total | boolean | No | When set to false, the total count returned will be 0 and will not be calculated. |

**Responses:**

- **200**: application/json
  - [Rows List](/docs/references/1.8.x/models/rowList)

**Example:**

```client-rest
GET /v1/tablesdb/{databaseId}/tables/{tableId}/rows HTTP/1.1
Host: cloud.appwrite.io
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Session: 
X-Appwrite-JWT: <YOUR_JWT>
```

---

#### Update row

Update a row by its unique ID. Using the patch method you can pass only specific fields that will get updated.

**Endpoint:** `PATCH /tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. |
| rowId | string | Yes | Row ID. |
| data | object | No | Row data as JSON object. Include only columns and value pairs to be updated. |
| permissions | array | No | An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions). |
| transactionId | string | No | Transaction ID for staging the operation. |

**Responses:**

- **200**: application/json
  - [Row](/docs/references/1.8.x/models/row)

**Rate limits:** 120 requests per 60 seconds

**Example:**

```client-rest
PATCH /v1/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Session: 
X-Appwrite-JWT: <YOUR_JWT>

{
  "data": {
    "username": "walter.obrien",
    "email": "walter.obrien@example.com",
    "fullName": "Walter O'Brien",
    "age": 33,
    "isAdmin": false
  },
  "permissions": ["read(\"any\")"],
  "transactionId": "<TRANSACTION_ID>"
}
```

---

#### Upsert a row

Create or update a Row. Before using this route, you should create a new table resource using either a server integration API or directly from your database console.

**Endpoint:** `PUT /tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. |
| rowId | string | Yes | Row ID. |
| data | object | No | Row data as JSON object. Include all required columns of the row to be created or updated. |
| permissions | array | No | An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions). |
| transactionId | string | No | Transaction ID for staging the operation. |

**Responses:**

- **201**: application/json
  - [Row](/docs/references/1.8.x/models/row)

**Rate limits:** 120 requests per 60 seconds

**Example:**

```client-rest
PUT /v1/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Session: 
X-Appwrite-JWT: <YOUR_JWT>

{
  "data": {
    "username": "walter.obrien",
    "email": "walter.obrien@example.com",
    "fullName": "Walter O'Brien",
    "age": 33,
    "isAdmin": false
  },
  "permissions": ["read(\"any\")"],
  "transactionId": "<TRANSACTION_ID>"
}
```

---

#### Delete row

Delete a row by its unique ID.

**Endpoint:** `DELETE /tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable). |
| rowId | string | Yes | Row ID. |
| transactionId | string | No | Transaction ID for staging the operation. |

**Responses:**

- **204**: no content

**Rate limits:** 60 requests per 60 seconds

**Example:**

```client-rest
DELETE /v1/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Session: 
X-Appwrite-JWT: <YOUR_JWT>

{
  "transactionId": "<TRANSACTION_ID>"
}
```

---

#### Increment row column

Increment a specific column of a row by a given value.

**Endpoint:** `PATCH /tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}/{column}/increment`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. |
| rowId | string | Yes | Row ID. |
| column | string | Yes | Column key. |
| value | number | No | Value to increment the column by. The value must be a number. |
| max | number | No | Maximum value for the column. If the current value is greater than this value, an error will be thrown. |
| transactionId | string | No | Transaction ID for staging the operation. |

**Responses:**

- **200**: application/json
  - [Row](/docs/references/1.8.x/models/row)

**Rate limits:** 120 requests per 60 seconds

**Example:**

```client-rest
PATCH /v1/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}/{column}/increment HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Session: 
X-Appwrite-JWT: <YOUR_JWT>

{
  "value": 0,
  "max": 0,
  "transactionId": "<TRANSACTION_ID>"
}
```

---

#### Decrement row column

Decrement a specific column of a row by a given value.

**Endpoint:** `PATCH /tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}/{column}/decrement`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. |
| rowId | string | Yes | Row ID. |
| column | string | Yes | Column key. |
| value | number | No | Value to increment the column by. The value must be a number. |
| min | number | No | Minimum value for the column. If the current value is lesser than this value, an exception will be thrown. |
| transactionId | string | No | Transaction ID for staging the operation. |

**Responses:**

- **200**: application/json
  - [Row](/docs/references/1.8.x/models/row)

**Rate limits:** 120 requests per 60 seconds

**Example:**

```client-rest
PATCH /v1/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}/{column}/decrement HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Session: 
X-Appwrite-JWT: <YOUR_JWT>

{
  "value": 0,
  "min": 0,
  "transactionId": "<TRANSACTION_ID>"
}
```

---

### transactions

#### Create operations

Create multiple operations in a single transaction.

**Endpoint:** `POST /tablesdb/transactions/{transactionId}/operations`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| transactionId | string | Yes | Transaction ID. |
| operations | array | No | Array of staged operations. |

**Responses:**

- **201**: application/json
  - [Transaction](/docs/references/1.8.x/models/transaction)

**Example:**

```client-rest
POST /v1/tablesdb/transactions/{transactionId}/operations HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Session: 
X-Appwrite-JWT: <YOUR_JWT>

{
  "operations": [
	    {
	        "action": "create",
	        "databaseId": "<DATABASE_ID>",
	        "tableId": "<TABLE_ID>",
	        "rowId": "<ROW_ID>",
	        "data": {
	            "name": "Walter O'Brien"
	        }
	    }
	]
}
```

---

#### Create transaction

Create a new transaction.

**Endpoint:** `POST /tablesdb/transactions`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| ttl | integer | No | Seconds before the transaction expires. |

**Responses:**

- **201**: application/json
  - [Transaction](/docs/references/1.8.x/models/transaction)

**Example:**

```client-rest
POST /v1/tablesdb/transactions HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Session: 
X-Appwrite-JWT: <YOUR_JWT>

{
  "ttl": 60
}
```

---

#### Get transaction

Get a transaction by its unique ID.

**Endpoint:** `GET /tablesdb/transactions/{transactionId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| transactionId | string | Yes | Transaction ID. |

**Responses:**

- **200**: application/json
  - [Transaction](/docs/references/1.8.x/models/transaction)

**Example:**

```client-rest
GET /v1/tablesdb/transactions/{transactionId} HTTP/1.1
Host: cloud.appwrite.io
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Session: 
X-Appwrite-JWT: <YOUR_JWT>
```

---

#### List transactions

List transactions across all databases.

**Endpoint:** `GET /tablesdb/transactions`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). |

**Responses:**

- **200**: application/json
  - [Transaction List](/docs/references/1.8.x/models/transactionList)

**Example:**

```client-rest
GET /v1/tablesdb/transactions HTTP/1.1
Host: cloud.appwrite.io
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Session: 
X-Appwrite-JWT: <YOUR_JWT>
```

---

#### Update transaction

Update a transaction, to either commit or roll back its operations.

**Endpoint:** `PATCH /tablesdb/transactions/{transactionId}`

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

```client-rest
PATCH /v1/tablesdb/transactions/{transactionId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Session: 
X-Appwrite-JWT: <YOUR_JWT>

{
  "commit": false,
  "rollback": false
}
```

---

#### Delete transaction

Delete a transaction by its unique ID.

**Endpoint:** `DELETE /tablesdb/transactions/{transactionId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| transactionId | string | Yes | Transaction ID. |

**Responses:**

- **204**: no content

**Example:**

```client-rest
DELETE /v1/tablesdb/transactions/{transactionId} HTTP/1.1
Host: cloud.appwrite.io
Content-Type: application/json
X-Appwrite-Response-Format: 1.8.0
X-Appwrite-Project: <YOUR_PROJECT_ID>
X-Appwrite-Session: 
X-Appwrite-JWT: <YOUR_JWT>

```

---

