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

### tablesdb

#### Create database

Create a new Database.


**Endpoint:** `POST /tablesdb`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| name | string | Yes | Database name. Max length: 128 chars. |
| enabled | boolean | No | Is the database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database. No data is lost when this is toggled. |

**Responses:**

- **201**: application/json
  - [Database](/docs/references/cloud/models/database)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.create(
    "<DATABASE_ID>", // databaseId
    "<NAME>", // name
    false, // enabled (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Get database

Get a database by its unique ID. This endpoint response returns a JSON object with the database metadata.

**Endpoint:** `GET /tablesdb/{databaseId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |

**Responses:**

- **200**: application/json
  - [Database](/docs/references/cloud/models/database)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.get(
    "<DATABASE_ID>", // databaseId
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### List databases

Get a list of all databases from the current Appwrite project. You can use the search parameter to filter your results.

**Endpoint:** `GET /tablesdb`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following columns: name |
| search | string | No | Search term to filter your list results. Max length: 256 chars. |
| total | boolean | No | When set to false, the total count returned will be 0 and will not be calculated. |

**Responses:**

- **200**: application/json
  - [Databases List](/docs/references/cloud/models/databaseList)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.list(
    List.of(), // queries (optional)
    "<SEARCH>", // search (optional)
    false, // total (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Update database

Update a database by its unique ID.

**Endpoint:** `PUT /tablesdb/{databaseId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| name | string | No | Database name. Max length: 128 chars. |
| enabled | boolean | No | Is database enabled? When set to 'disabled', users cannot access the database but Server SDKs with an API key can still read and write to the database. No data is lost when this is toggled. |

**Responses:**

- **200**: application/json
  - [Database](/docs/references/cloud/models/database)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.update(
    "<DATABASE_ID>", // databaseId
    "<NAME>", // name (optional)
    false, // enabled (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Delete database

Delete a database by its unique ID. Only API keys with with databases.write scope can delete a database.

**Endpoint:** `DELETE /tablesdb/{databaseId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |

**Responses:**

- **204**: no content

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.delete(
    "<DATABASE_ID>", // databaseId
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

### tables

#### Create table

Create a new Table. Before using this route, you should create a new database resource using either a server integration API or directly from your database console.

**Endpoint:** `POST /tablesdb/{databaseId}/tables`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| name | string | Yes | Table name. Max length: 128 chars. |
| permissions | array | No | An array of permissions strings. By default, no user is granted with any permissions. [Learn more about permissions](https://appwrite.io/docs/permissions). |
| rowSecurity | boolean | No | Enables configuring permissions for individual rows. A user needs one of row or table level permissions to access a row. [Learn more about permissions](https://appwrite.io/docs/permissions). |
| enabled | boolean | No | Is table enabled? When set to 'disabled', users cannot access the table but Server SDKs with and API key can still read and write to the table. No data is lost when this is toggled. |
| columns | array | No | Array of column definitions to create. Each column should contain: key (string), type (string: string, integer, float, boolean, datetime, relationship), size (integer, required for string type), required (boolean, optional), default (mixed, optional), array (boolean, optional), and type-specific options. |
| indexes | array | No | Array of index definitions to create. Each index should contain: key (string), type (string: key, fulltext, unique, spatial), attributes (array of column keys), orders (array of ASC/DESC, optional), and lengths (array of integers, optional). |

**Responses:**

- **201**: application/json
  - [Table](/docs/references/cloud/models/table)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.Permission;
import io.appwrite.Role;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.createTable(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "<NAME>", // name
    List.of(Permission.read(Role.any())), // permissions (optional)
    false, // rowSecurity (optional)
    false, // enabled (optional)
    List.of(), // columns (optional)
    List.of(), // indexes (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Get table

Get a table by its unique ID. This endpoint response returns a JSON object with the table metadata.

**Endpoint:** `GET /tablesdb/{databaseId}/tables/{tableId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. |

**Responses:**

- **200**: application/json
  - [Table](/docs/references/cloud/models/table)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.getTable(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### List tables

Get a list of all tables that belong to the provided databaseId. You can use the search parameter to filter your results.

**Endpoint:** `GET /tablesdb/{databaseId}/tables`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following columns: name, enabled, rowSecurity |
| search | string | No | Search term to filter your list results. Max length: 256 chars. |
| total | boolean | No | When set to false, the total count returned will be 0 and will not be calculated. |

**Responses:**

- **200**: application/json
  - [Tables List](/docs/references/cloud/models/tableList)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.listTables(
    "<DATABASE_ID>", // databaseId
    List.of(), // queries (optional)
    "<SEARCH>", // search (optional)
    false, // total (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Update table

Update a table by its unique ID.

**Endpoint:** `PUT /tablesdb/{databaseId}/tables/{tableId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. |
| name | string | No | Table name. Max length: 128 chars. |
| permissions | array | No | An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions). |
| rowSecurity | boolean | No | Enables configuring permissions for individual rows. A user needs one of row or table-level permissions to access a row. [Learn more about permissions](https://appwrite.io/docs/permissions). |
| enabled | boolean | No | Is table enabled? When set to 'disabled', users cannot access the table but Server SDKs with and API key can still read and write to the table. No data is lost when this is toggled. |

**Responses:**

- **200**: application/json
  - [Table](/docs/references/cloud/models/table)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.Permission;
import io.appwrite.Role;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.updateTable(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "<NAME>", // name (optional)
    List.of(Permission.read(Role.any())), // permissions (optional)
    false, // rowSecurity (optional)
    false, // enabled (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Delete table

Delete a table by its unique ID. Only users with write permissions have access to delete this resource.

**Endpoint:** `DELETE /tablesdb/{databaseId}/tables/{tableId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. |

**Responses:**

- **204**: no content

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.deleteTable(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

### columns

#### Create boolean column

Create a boolean column.


**Endpoint:** `POST /tablesdb/{databaseId}/tables/{tableId}/columns/boolean`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable). |
| key | string | Yes | Column Key. |
| required | boolean | Yes | Is column required? |
| default | boolean | No | Default value for column when not provided. Cannot be set when column is required. |
| array | boolean | No | Is column an array? |

**Responses:**

- **202**: application/json
  - [ColumnBoolean](/docs/references/cloud/models/columnBoolean)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.createBooleanColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    false, // required
    false, // default (optional)
    false, // array (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Create datetime column

Create a date time column according to the ISO 8601 standard.

**Endpoint:** `POST /tablesdb/{databaseId}/tables/{tableId}/columns/datetime`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. |
| key | string | Yes | Column Key. |
| required | boolean | Yes | Is column required? |
| default | string | No | Default value for the column in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Cannot be set when column is required. |
| array | boolean | No | Is column an array? |

**Responses:**

- **202**: application/json
  - [ColumnDatetime](/docs/references/cloud/models/columnDatetime)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.createDatetimeColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    false, // required
    "", // default (optional)
    false, // array (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Create email column

Create an email column.


**Endpoint:** `POST /tablesdb/{databaseId}/tables/{tableId}/columns/email`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. |
| key | string | Yes | Column Key. |
| required | boolean | Yes | Is column required? |
| default | string | No | Default value for column when not provided. Cannot be set when column is required. |
| array | boolean | No | Is column an array? |

**Responses:**

- **202**: application/json
  - [ColumnEmail](/docs/references/cloud/models/columnEmail)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.createEmailColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    false, // required
    "email@example.com", // default (optional)
    false, // array (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Create enum column

Create an enumeration column. The `elements` param acts as a white-list of accepted values for this column.

**Endpoint:** `POST /tablesdb/{databaseId}/tables/{tableId}/columns/enum`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. |
| key | string | Yes | Column Key. |
| elements | array | Yes | Array of enum values. |
| required | boolean | Yes | Is column required? |
| default | string | No | Default value for column when not provided. Cannot be set when column is required. |
| array | boolean | No | Is column an array? |

**Responses:**

- **202**: application/json
  - [ColumnEnum](/docs/references/cloud/models/columnEnum)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.createEnumColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    List.of(), // elements
    false, // required
    "<DEFAULT>", // default (optional)
    false, // array (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Create float column

Create a float column. Optionally, minimum and maximum values can be provided.


**Endpoint:** `POST /tablesdb/{databaseId}/tables/{tableId}/columns/float`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. |
| key | string | Yes | Column Key. |
| required | boolean | Yes | Is column required? |
| min | number | No | Minimum value |
| max | number | No | Maximum value |
| default | number | No | Default value. Cannot be set when required. |
| array | boolean | No | Is column an array? |

**Responses:**

- **202**: application/json
  - [ColumnFloat](/docs/references/cloud/models/columnFloat)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.createFloatColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    false, // required
    0, // min (optional)
    0, // max (optional)
    0, // default (optional)
    false, // array (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Create integer column

Create an integer column. Optionally, minimum and maximum values can be provided.


**Endpoint:** `POST /tablesdb/{databaseId}/tables/{tableId}/columns/integer`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. |
| key | string | Yes | Column Key. |
| required | boolean | Yes | Is column required? |
| min | integer | No | Minimum value |
| max | integer | No | Maximum value |
| default | integer | No | Default value. Cannot be set when column is required. |
| array | boolean | No | Is column an array? |

**Responses:**

- **202**: application/json
  - [ColumnInteger](/docs/references/cloud/models/columnInteger)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.createIntegerColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    false, // required
    0, // min (optional)
    0, // max (optional)
    0, // default (optional)
    false, // array (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Create IP address column

Create IP address column.


**Endpoint:** `POST /tablesdb/{databaseId}/tables/{tableId}/columns/ip`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. |
| key | string | Yes | Column Key. |
| required | boolean | Yes | Is column required? |
| default | string | No | Default value. Cannot be set when column is required. |
| array | boolean | No | Is column an array? |

**Responses:**

- **202**: application/json
  - [ColumnIP](/docs/references/cloud/models/columnIp)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.createIpColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    false, // required
    "", // default (optional)
    false, // array (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Create line column

Create a geometric line column.

**Endpoint:** `POST /tablesdb/{databaseId}/tables/{tableId}/columns/line`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable). |
| key | string | Yes | Column Key. |
| required | boolean | Yes | Is column required? |
| default | array | No | Default value for column when not provided, two-dimensional array of coordinate pairs, [[longitude, latitude], [longitude, latitude], …], listing the vertices of the line in order. Cannot be set when column is required. |

**Responses:**

- **202**: application/json
  - [ColumnLine](/docs/references/cloud/models/columnLine)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.createLineColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    false, // required
    List.of(List.of(1, 2), List.of(3, 4), List.of(5, 6)), // default (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Create longtext column

Create a longtext column.


**Endpoint:** `POST /tablesdb/{databaseId}/tables/{tableId}/columns/longtext`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable). |
| key | string | Yes | Column Key. |
| required | boolean | Yes | Is column required? |
| default | string | No | Default value for column when not provided. Cannot be set when column is required. |
| array | boolean | No | Is column an array? |
| encrypt | boolean | No | Toggle encryption for the column. Encryption enhances security by not storing any plain text values in the database. However, encrypted columns cannot be queried. |

**Responses:**

- **202**: application/json
  - [ColumnLongtext](/docs/references/cloud/models/columnLongtext)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.createLongtextColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    false, // required
    "<DEFAULT>", // default (optional)
    false, // array (optional)
    false, // encrypt (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Create mediumtext column

Create a mediumtext column.


**Endpoint:** `POST /tablesdb/{databaseId}/tables/{tableId}/columns/mediumtext`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable). |
| key | string | Yes | Column Key. |
| required | boolean | Yes | Is column required? |
| default | string | No | Default value for column when not provided. Cannot be set when column is required. |
| array | boolean | No | Is column an array? |
| encrypt | boolean | No | Toggle encryption for the column. Encryption enhances security by not storing any plain text values in the database. However, encrypted columns cannot be queried. |

**Responses:**

- **202**: application/json
  - [ColumnMediumtext](/docs/references/cloud/models/columnMediumtext)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.createMediumtextColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    false, // required
    "<DEFAULT>", // default (optional)
    false, // array (optional)
    false, // encrypt (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Create point column

Create a geometric point column.

**Endpoint:** `POST /tablesdb/{databaseId}/tables/{tableId}/columns/point`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable). |
| key | string | Yes | Column Key. |
| required | boolean | Yes | Is column required? |
| default | array | No | Default value for column when not provided, array of two numbers [longitude, latitude], representing a single coordinate. Cannot be set when column is required. |

**Responses:**

- **202**: application/json
  - [ColumnPoint](/docs/references/cloud/models/columnPoint)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.createPointColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    false, // required
    List.of(1, 2), // default (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Create polygon column

Create a geometric polygon column.

**Endpoint:** `POST /tablesdb/{databaseId}/tables/{tableId}/columns/polygon`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable). |
| key | string | Yes | Column Key. |
| required | boolean | Yes | Is column required? |
| default | array | No | Default value for column when not provided, three-dimensional array where the outer array holds one or more linear rings, [[[longitude, latitude], …], …], the first ring is the exterior boundary, any additional rings are interior holes, and each ring must start and end with the same coordinate pair. Cannot be set when column is required. |

**Responses:**

- **202**: application/json
  - [ColumnPolygon](/docs/references/cloud/models/columnPolygon)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.createPolygonColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    false, // required
    List.of(List.of(List.of(1, 2), List.of(3, 4), List.of(5, 6), List.of(1, 2))), // default (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Create relationship column

Create relationship column. Learn more about relationship columns.


**Endpoint:** `POST /tablesdb/{databaseId}/tables/{tableId}/columns/relationship`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. |
| relatedTableId | string | Yes | Related Table ID. |
| type | string | Yes | Relation type |
| twoWay | boolean | No | Is Two Way? |
| key | string | No | Column Key. |
| twoWayKey | string | No | Two Way Column Key. |
| onDelete | string | No | Constraints option |

**Responses:**

- **202**: application/json
  - [ColumnRelationship](/docs/references/cloud/models/columnRelationship)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;
import io.appwrite.enums.RelationshipType;
import io.appwrite.enums.RelationMutate;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.createRelationshipColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "<RELATED_TABLE_ID>", // relatedTableId
    RelationshipType.ONETOONE, // type
    false, // twoWay (optional)
    "", // key (optional)
    "", // twoWayKey (optional)
    RelationMutate.CASCADE, // onDelete (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Create string column

Create a string column.


**Endpoint:** `POST /tablesdb/{databaseId}/tables/{tableId}/columns/string`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable). |
| key | string | Yes | Column Key. |
| size | integer | Yes | Column size for text columns, in number of characters. |
| required | boolean | Yes | Is column required? |
| default | string | No | Default value for column when not provided. Cannot be set when column is required. |
| array | boolean | No | Is column an array? |
| encrypt | boolean | No | Toggle encryption for the column. Encryption enhances security by not storing any plain text values in the database. However, encrypted columns cannot be queried. |

**Responses:**

- **202**: application/json
  - [ColumnString](/docs/references/cloud/models/columnString)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.createStringColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    1, // size
    false, // required
    "<DEFAULT>", // default (optional)
    false, // array (optional)
    false, // encrypt (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Create text column

Create a text column.


**Endpoint:** `POST /tablesdb/{databaseId}/tables/{tableId}/columns/text`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable). |
| key | string | Yes | Column Key. |
| required | boolean | Yes | Is column required? |
| default | string | No | Default value for column when not provided. Cannot be set when column is required. |
| array | boolean | No | Is column an array? |
| encrypt | boolean | No | Toggle encryption for the column. Encryption enhances security by not storing any plain text values in the database. However, encrypted columns cannot be queried. |

**Responses:**

- **202**: application/json
  - [ColumnText](/docs/references/cloud/models/columnText)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.createTextColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    false, // required
    "<DEFAULT>", // default (optional)
    false, // array (optional)
    false, // encrypt (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Create URL column

Create a URL column.


**Endpoint:** `POST /tablesdb/{databaseId}/tables/{tableId}/columns/url`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. |
| key | string | Yes | Column Key. |
| required | boolean | Yes | Is column required? |
| default | string | No | Default value for column when not provided. Cannot be set when column is required. |
| array | boolean | No | Is column an array? |

**Responses:**

- **202**: application/json
  - [ColumnURL](/docs/references/cloud/models/columnUrl)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.createUrlColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    false, // required
    "https://example.com", // default (optional)
    false, // array (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Create varchar column

Create a varchar column.


**Endpoint:** `POST /tablesdb/{databaseId}/tables/{tableId}/columns/varchar`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable). |
| key | string | Yes | Column Key. |
| size | integer | Yes | Column size for varchar columns, in number of characters. Maximum size is 16381. |
| required | boolean | Yes | Is column required? |
| default | string | No | Default value for column when not provided. Cannot be set when column is required. |
| array | boolean | No | Is column an array? |
| encrypt | boolean | No | Toggle encryption for the column. Encryption enhances security by not storing any plain text values in the database. However, encrypted columns cannot be queried. |

**Responses:**

- **202**: application/json
  - [ColumnVarchar](/docs/references/cloud/models/columnVarchar)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.createVarcharColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    1, // size
    false, // required
    "<DEFAULT>", // default (optional)
    false, // array (optional)
    false, // encrypt (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Get column

Get column by ID.

**Endpoint:** `GET /tablesdb/{databaseId}/tables/{tableId}/columns/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. |
| key | string | Yes | Column Key. |

**Responses:**

- **200**: application/json
  - [ColumnBoolean](/docs/references/cloud/models/columnBoolean)
  - [ColumnInteger](/docs/references/cloud/models/columnInteger)
  - [ColumnFloat](/docs/references/cloud/models/columnFloat)
  - [ColumnEmail](/docs/references/cloud/models/columnEmail)
  - [ColumnEnum](/docs/references/cloud/models/columnEnum)
  - [ColumnURL](/docs/references/cloud/models/columnUrl)
  - [ColumnIP](/docs/references/cloud/models/columnIp)
  - [ColumnDatetime](/docs/references/cloud/models/columnDatetime)
  - [ColumnRelationship](/docs/references/cloud/models/columnRelationship)
  - [ColumnString](/docs/references/cloud/models/columnString)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.getColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### List columns

List columns in the table.

**Endpoint:** `GET /tablesdb/{databaseId}/tables/{tableId}/columns`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following columns: key, type, size, required, array, status, error |
| total | boolean | No | When set to false, the total count returned will be 0 and will not be calculated. |

**Responses:**

- **200**: application/json
  - [Columns List](/docs/references/cloud/models/columnList)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.listColumns(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    List.of(), // queries (optional)
    false, // total (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Update boolean column

Update a boolean column. Changing the `default` value will not update already existing rows.

**Endpoint:** `PATCH /tablesdb/{databaseId}/tables/{tableId}/columns/boolean/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable). |
| key | string | Yes | Column Key. |
| required | boolean | Yes | Is column required? |
| default | boolean | Yes | Default value for column when not provided. Cannot be set when column is required. |
| newKey | string | No | New Column Key. |

**Responses:**

- **200**: application/json
  - [ColumnBoolean](/docs/references/cloud/models/columnBoolean)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.updateBooleanColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    false, // required
    false, // default
    "", // newKey (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Update dateTime column

Update a date time column. Changing the `default` value will not update already existing rows.

**Endpoint:** `PATCH /tablesdb/{databaseId}/tables/{tableId}/columns/datetime/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. |
| key | string | Yes | Column Key. |
| required | boolean | Yes | Is column required? |
| default | string | Yes | Default value for column when not provided. Cannot be set when column is required. |
| newKey | string | No | New Column Key. |

**Responses:**

- **200**: application/json
  - [ColumnDatetime](/docs/references/cloud/models/columnDatetime)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.updateDatetimeColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    false, // required
    "", // default
    "", // newKey (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Update email column

Update an email column. Changing the `default` value will not update already existing rows.


**Endpoint:** `PATCH /tablesdb/{databaseId}/tables/{tableId}/columns/email/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. |
| key | string | Yes | Column Key. |
| required | boolean | Yes | Is column required? |
| default | string | Yes | Default value for column when not provided. Cannot be set when column is required. |
| newKey | string | No | New Column Key. |

**Responses:**

- **200**: application/json
  - [ColumnEmail](/docs/references/cloud/models/columnEmail)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.updateEmailColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    false, // required
    "email@example.com", // default
    "", // newKey (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Update enum column

Update an enum column. Changing the `default` value will not update already existing rows.


**Endpoint:** `PATCH /tablesdb/{databaseId}/tables/{tableId}/columns/enum/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. |
| key | string | Yes | Column Key. |
| elements | array | Yes | Updated list of enum values. |
| required | boolean | Yes | Is column required? |
| default | string | Yes | Default value for column when not provided. Cannot be set when column is required. |
| newKey | string | No | New Column Key. |

**Responses:**

- **200**: application/json
  - [ColumnEnum](/docs/references/cloud/models/columnEnum)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.updateEnumColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    List.of(), // elements
    false, // required
    "<DEFAULT>", // default
    "", // newKey (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Update float column

Update a float column. Changing the `default` value will not update already existing rows.


**Endpoint:** `PATCH /tablesdb/{databaseId}/tables/{tableId}/columns/float/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. |
| key | string | Yes | Column Key. |
| required | boolean | Yes | Is column required? |
| default | number | Yes | Default value. Cannot be set when required. |
| min | number | No | Minimum value |
| max | number | No | Maximum value |
| newKey | string | No | New Column Key. |

**Responses:**

- **200**: application/json
  - [ColumnFloat](/docs/references/cloud/models/columnFloat)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.updateFloatColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    false, // required
    0, // default
    0, // min (optional)
    0, // max (optional)
    "", // newKey (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Update integer column

Update an integer column. Changing the `default` value will not update already existing rows.


**Endpoint:** `PATCH /tablesdb/{databaseId}/tables/{tableId}/columns/integer/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. |
| key | string | Yes | Column Key. |
| required | boolean | Yes | Is column required? |
| default | integer | Yes | Default value. Cannot be set when column is required. |
| min | integer | No | Minimum value |
| max | integer | No | Maximum value |
| newKey | string | No | New Column Key. |

**Responses:**

- **200**: application/json
  - [ColumnInteger](/docs/references/cloud/models/columnInteger)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.updateIntegerColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    false, // required
    0, // default
    0, // min (optional)
    0, // max (optional)
    "", // newKey (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Update IP address column

Update an ip column. Changing the `default` value will not update already existing rows.


**Endpoint:** `PATCH /tablesdb/{databaseId}/tables/{tableId}/columns/ip/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. |
| key | string | Yes | Column Key. |
| required | boolean | Yes | Is column required? |
| default | string | Yes | Default value. Cannot be set when column is required. |
| newKey | string | No | New Column Key. |

**Responses:**

- **200**: application/json
  - [ColumnIP](/docs/references/cloud/models/columnIp)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.updateIpColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    false, // required
    "", // default
    "", // newKey (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Update line column

Update a line column. Changing the `default` value will not update already existing rows.

**Endpoint:** `PATCH /tablesdb/{databaseId}/tables/{tableId}/columns/line/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable). |
| key | string | Yes | Column Key. |
| required | boolean | Yes | Is column required? |
| default | array | No | Default value for column when not provided, two-dimensional array of coordinate pairs, [[longitude, latitude], [longitude, latitude], …], listing the vertices of the line in order. Cannot be set when column is required. |
| newKey | string | No | New Column Key. |

**Responses:**

- **200**: application/json
  - [ColumnLine](/docs/references/cloud/models/columnLine)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.updateLineColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    false, // required
    List.of(List.of(1, 2), List.of(3, 4), List.of(5, 6)), // default (optional)
    "", // newKey (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Update longtext column

Update a longtext column. Changing the `default` value will not update already existing rows.


**Endpoint:** `PATCH /tablesdb/{databaseId}/tables/{tableId}/columns/longtext/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable). |
| key | string | Yes | Column Key. |
| required | boolean | Yes | Is column required? |
| default | string | Yes | Default value for column when not provided. Cannot be set when column is required. |
| newKey | string | No | New Column Key. |

**Responses:**

- **200**: application/json
  - [ColumnLongtext](/docs/references/cloud/models/columnLongtext)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.updateLongtextColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    false, // required
    "<DEFAULT>", // default
    "", // newKey (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Update mediumtext column

Update a mediumtext column. Changing the `default` value will not update already existing rows.


**Endpoint:** `PATCH /tablesdb/{databaseId}/tables/{tableId}/columns/mediumtext/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable). |
| key | string | Yes | Column Key. |
| required | boolean | Yes | Is column required? |
| default | string | Yes | Default value for column when not provided. Cannot be set when column is required. |
| newKey | string | No | New Column Key. |

**Responses:**

- **200**: application/json
  - [ColumnMediumtext](/docs/references/cloud/models/columnMediumtext)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.updateMediumtextColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    false, // required
    "<DEFAULT>", // default
    "", // newKey (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Update point column

Update a point column. Changing the `default` value will not update already existing rows.

**Endpoint:** `PATCH /tablesdb/{databaseId}/tables/{tableId}/columns/point/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable). |
| key | string | Yes | Column Key. |
| required | boolean | Yes | Is column required? |
| default | array | No | Default value for column when not provided, array of two numbers [longitude, latitude], representing a single coordinate. Cannot be set when column is required. |
| newKey | string | No | New Column Key. |

**Responses:**

- **200**: application/json
  - [ColumnPoint](/docs/references/cloud/models/columnPoint)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.updatePointColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    false, // required
    List.of(1, 2), // default (optional)
    "", // newKey (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Update polygon column

Update a polygon column. Changing the `default` value will not update already existing rows.

**Endpoint:** `PATCH /tablesdb/{databaseId}/tables/{tableId}/columns/polygon/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable). |
| key | string | Yes | Column Key. |
| required | boolean | Yes | Is column required? |
| default | array | No | Default value for column when not provided, three-dimensional array where the outer array holds one or more linear rings, [[[longitude, latitude], …], …], the first ring is the exterior boundary, any additional rings are interior holes, and each ring must start and end with the same coordinate pair. Cannot be set when column is required. |
| newKey | string | No | New Column Key. |

**Responses:**

- **200**: application/json
  - [ColumnPolygon](/docs/references/cloud/models/columnPolygon)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.updatePolygonColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    false, // required
    List.of(List.of(List.of(1, 2), List.of(3, 4), List.of(5, 6), List.of(1, 2))), // default (optional)
    "", // newKey (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Update relationship column

Update relationship column. Learn more about relationship columns.


**Endpoint:** `PATCH /tablesdb/{databaseId}/tables/{tableId}/columns/{key}/relationship`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. |
| key | string | Yes | Column Key. |
| onDelete | string | No | Constraints option |
| newKey | string | No | New Column Key. |

**Responses:**

- **200**: application/json
  - [ColumnRelationship](/docs/references/cloud/models/columnRelationship)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;
import io.appwrite.enums.RelationMutate;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.updateRelationshipColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    RelationMutate.CASCADE, // onDelete (optional)
    "", // newKey (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Update string column

Update a string column. Changing the `default` value will not update already existing rows.


**Endpoint:** `PATCH /tablesdb/{databaseId}/tables/{tableId}/columns/string/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable). |
| key | string | Yes | Column Key. |
| required | boolean | Yes | Is column required? |
| default | string | Yes | Default value for column when not provided. Cannot be set when column is required. |
| size | integer | No | Maximum size of the string column. |
| newKey | string | No | New Column Key. |

**Responses:**

- **200**: application/json
  - [ColumnString](/docs/references/cloud/models/columnString)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.updateStringColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    false, // required
    "<DEFAULT>", // default
    1, // size (optional)
    "", // newKey (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Update text column

Update a text column. Changing the `default` value will not update already existing rows.


**Endpoint:** `PATCH /tablesdb/{databaseId}/tables/{tableId}/columns/text/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable). |
| key | string | Yes | Column Key. |
| required | boolean | Yes | Is column required? |
| default | string | Yes | Default value for column when not provided. Cannot be set when column is required. |
| newKey | string | No | New Column Key. |

**Responses:**

- **200**: application/json
  - [ColumnText](/docs/references/cloud/models/columnText)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.updateTextColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    false, // required
    "<DEFAULT>", // default
    "", // newKey (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Update URL column

Update an url column. Changing the `default` value will not update already existing rows.


**Endpoint:** `PATCH /tablesdb/{databaseId}/tables/{tableId}/columns/url/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. |
| key | string | Yes | Column Key. |
| required | boolean | Yes | Is column required? |
| default | string | Yes | Default value for column when not provided. Cannot be set when column is required. |
| newKey | string | No | New Column Key. |

**Responses:**

- **200**: application/json
  - [ColumnURL](/docs/references/cloud/models/columnUrl)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.updateUrlColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    false, // required
    "https://example.com", // default
    "", // newKey (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Update varchar column

Update a varchar column. Changing the `default` value will not update already existing rows.


**Endpoint:** `PATCH /tablesdb/{databaseId}/tables/{tableId}/columns/varchar/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable). |
| key | string | Yes | Column Key. |
| required | boolean | Yes | Is column required? |
| default | string | Yes | Default value for column when not provided. Cannot be set when column is required. |
| size | integer | No | Maximum size of the varchar column. |
| newKey | string | No | New Column Key. |

**Responses:**

- **200**: application/json
  - [ColumnVarchar](/docs/references/cloud/models/columnVarchar)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.updateVarcharColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    false, // required
    "<DEFAULT>", // default
    1, // size (optional)
    "", // newKey (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Delete column

Deletes a column.

**Endpoint:** `DELETE /tablesdb/{databaseId}/tables/{tableId}/columns/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. |
| key | string | Yes | Column Key. |

**Responses:**

- **204**: no content

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.deleteColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

### indexes

#### Create index

Creates an index on the columns listed. Your index should include all the columns you will query in a single request.
Type can be `key`, `fulltext`, or `unique`.

**Endpoint:** `POST /tablesdb/{databaseId}/tables/{tableId}/indexes`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable). |
| key | string | Yes | Index Key. |
| type | string | Yes | Index type. |
| columns | array | Yes | Array of columns to index. Maximum of 100 columns are allowed, each 32 characters long. |
| orders | array | No | Array of index orders. Maximum of 100 orders are allowed. |
| lengths | array | No | Length of index. Maximum of 100 |

**Responses:**

- **202**: application/json
  - [Index](/docs/references/cloud/models/columnIndex)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;
import io.appwrite.enums.IndexType;
import io.appwrite.enums.OrderBy;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.createIndex(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    IndexType.KEY, // type
    List.of(), // columns
    List.of(OrderBy.ASC), // orders (optional)
    List.of(), // lengths (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Get index

Get index by ID.

**Endpoint:** `GET /tablesdb/{databaseId}/tables/{tableId}/indexes/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable). |
| key | string | Yes | Index Key. |

**Responses:**

- **200**: application/json
  - [Index](/docs/references/cloud/models/columnIndex)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.getIndex(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### List indexes

List indexes on the table.

**Endpoint:** `GET /tablesdb/{databaseId}/tables/{tableId}/indexes`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable). |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following columns: key, type, status, attributes, error |
| total | boolean | No | When set to false, the total count returned will be 0 and will not be calculated. |

**Responses:**

- **200**: application/json
  - [Column Indexes List](/docs/references/cloud/models/columnIndexList)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.listIndexes(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    List.of(), // queries (optional)
    false, // total (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Delete index

Delete an index.

**Endpoint:** `DELETE /tablesdb/{databaseId}/tables/{tableId}/indexes/{key}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. You can create a new table using the TablesDB service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable). |
| key | string | Yes | Index Key. |

**Responses:**

- **204**: no content

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.deleteIndex(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "", // key
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

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
  - [Row](/docs/references/cloud/models/row)

**Rate limits:** 120 requests per 60 seconds

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.Permission;
import io.appwrite.Role;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setSession(""); // The user session to authenticate with

TablesDB tablesDB = new TablesDB(client);

tablesDB.createRow(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "<ROW_ID>", // rowId
    Map.of(
        "username", "walter.obrien",
        "email", "walter.obrien@example.com",
        "fullName", "Walter O'Brien",
        "age", 30,
        "isAdmin", false
    ), // data
    List.of(Permission.read(Role.any())), // permissions (optional)
    "<TRANSACTION_ID>", // transactionId (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Create rows

Create new Rows. Before using this route, you should create a new table resource using either a server integration API or directly from your database console.

**Endpoint:** `POST /tablesdb/{databaseId}/tables/{tableId}/rows`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable). Make sure to define columns before creating rows. |
| rows | array | No | Array of rows data as JSON objects. |
| transactionId | string | No | Transaction ID for staging the operation. |

**Responses:**

- **201**: application/json
  - [Rows List](/docs/references/cloud/models/rowList)

**Rate limits:** 120 requests per 60 seconds

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.createRows(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    List.of(), // rows
    "<TRANSACTION_ID>", // transactionId (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

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
  - [Row](/docs/references/cloud/models/row)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setSession(""); // The user session to authenticate with

TablesDB tablesDB = new TablesDB(client);

tablesDB.getRow(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "<ROW_ID>", // rowId
    List.of(), // queries (optional)
    "<TRANSACTION_ID>", // transactionId (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

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
  - [Rows List](/docs/references/cloud/models/rowList)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setSession(""); // The user session to authenticate with

TablesDB tablesDB = new TablesDB(client);

tablesDB.listRows(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    List.of(), // queries (optional)
    "<TRANSACTION_ID>", // transactionId (optional)
    false, // total (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

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
  - [Row](/docs/references/cloud/models/row)

**Rate limits:** 120 requests per 60 seconds

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.Permission;
import io.appwrite.Role;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setSession(""); // The user session to authenticate with

TablesDB tablesDB = new TablesDB(client);

tablesDB.updateRow(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "<ROW_ID>", // rowId
    Map.of(
        "username", "walter.obrien",
        "email", "walter.obrien@example.com",
        "fullName", "Walter O'Brien",
        "age", 33,
        "isAdmin", false
    ), // data (optional)
    List.of(Permission.read(Role.any())), // permissions (optional)
    "<TRANSACTION_ID>", // transactionId (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Update rows

Update all rows that match your queries, if no queries are submitted then all rows are updated. You can pass only specific fields to be updated.

**Endpoint:** `PATCH /tablesdb/{databaseId}/tables/{tableId}/rows`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. |
| data | object | No | Row data as JSON object. Include only column and value pairs to be updated. |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. |
| transactionId | string | No | Transaction ID for staging the operation. |

**Responses:**

- **200**: application/json
  - [Rows List](/docs/references/cloud/models/rowList)

**Rate limits:** 120 requests per 60 seconds

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.updateRows(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    Map.of(
        "username", "walter.obrien",
        "email", "walter.obrien@example.com",
        "fullName", "Walter O'Brien",
        "age", 33,
        "isAdmin", false
    ), // data (optional)
    List.of(), // queries (optional)
    "<TRANSACTION_ID>", // transactionId (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

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
  - [Row](/docs/references/cloud/models/row)

**Rate limits:** 120 requests per 60 seconds

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.Permission;
import io.appwrite.Role;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setSession(""); // The user session to authenticate with

TablesDB tablesDB = new TablesDB(client);

tablesDB.upsertRow(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "<ROW_ID>", // rowId
    Map.of(
        "username", "walter.obrien",
        "email", "walter.obrien@example.com",
        "fullName", "Walter O'Brien",
        "age", 33,
        "isAdmin", false
    ), // data (optional)
    List.of(Permission.read(Role.any())), // permissions (optional)
    "<TRANSACTION_ID>", // transactionId (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Upsert rows

Create or update Rows. Before using this route, you should create a new table resource using either a server integration API or directly from your database console.


**Endpoint:** `PUT /tablesdb/{databaseId}/tables/{tableId}/rows`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. |
| rows | array | Yes | Array of row data as JSON objects. May contain partial rows. |
| transactionId | string | No | Transaction ID for staging the operation. |

**Responses:**

- **201**: application/json
  - [Rows List](/docs/references/cloud/models/rowList)

**Rate limits:** 120 requests per 60 seconds

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.upsertRows(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    List.of(), // rows
    "<TRANSACTION_ID>", // transactionId (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

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

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setSession(""); // The user session to authenticate with

TablesDB tablesDB = new TablesDB(client);

tablesDB.deleteRow(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "<ROW_ID>", // rowId
    "<TRANSACTION_ID>", // transactionId (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

#### Delete rows

Bulk delete rows using queries, if no queries are passed then all rows are deleted.

**Endpoint:** `DELETE /tablesdb/{databaseId}/tables/{tableId}/rows`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| databaseId | string | Yes | Database ID. |
| tableId | string | Yes | Table ID. You can create a new table using the Database service [server integration](https://appwrite.io/docs/references/cloud/server-dart/tablesDB#createTable). |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. |
| transactionId | string | No | Transaction ID for staging the operation. |

**Responses:**

- **200**: application/json
  - [Rows List](/docs/references/cloud/models/rowList)

**Rate limits:** 60 requests per 60 seconds

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.deleteRows(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    List.of(), // queries (optional)
    "<TRANSACTION_ID>", // transactionId (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

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
  - [Row](/docs/references/cloud/models/row)

**Rate limits:** 120 requests per 60 seconds

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setSession(""); // The user session to authenticate with

TablesDB tablesDB = new TablesDB(client);

tablesDB.incrementRowColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "<ROW_ID>", // rowId
    "", // column
    0, // value (optional)
    0, // max (optional)
    "<TRANSACTION_ID>", // transactionId (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

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
  - [Row](/docs/references/cloud/models/row)

**Rate limits:** 120 requests per 60 seconds

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setSession(""); // The user session to authenticate with

TablesDB tablesDB = new TablesDB(client);

tablesDB.decrementRowColumn(
    "<DATABASE_ID>", // databaseId
    "<TABLE_ID>", // tableId
    "<ROW_ID>", // rowId
    "", // column
    0, // value (optional)
    0, // min (optional)
    "<TRANSACTION_ID>", // transactionId (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

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
  - [Transaction](/docs/references/cloud/models/transaction)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.createOperations(
    "<TRANSACTION_ID>", // transactionId
    List.of(Map.of(
        "action", "create",
        "databaseId", "<DATABASE_ID>",
        "tableId", "<TABLE_ID>",
        "rowId", "<ROW_ID>",
        "data", Map.of(
            "name", "Walter O'Brien"
        )
    )), // operations (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

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
  - [Transaction](/docs/references/cloud/models/transaction)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.createTransaction(
    60, // ttl (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

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
  - [Transaction](/docs/references/cloud/models/transaction)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.getTransaction(
    "<TRANSACTION_ID>", // transactionId
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

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
  - [Transaction List](/docs/references/cloud/models/transactionList)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.listTransactions(
    List.of(), // queries (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

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
  - [Transaction](/docs/references/cloud/models/transaction)

**Example:**

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.updateTransaction(
    "<TRANSACTION_ID>", // transactionId
    false, // commit (optional)
    false, // rollback (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

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

```server-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.TablesDB;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>"); // Your secret API key

TablesDB tablesDB = new TablesDB(client);

tablesDB.deleteTransaction(
    "<TRANSACTION_ID>", // transactionId
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);

```

---

