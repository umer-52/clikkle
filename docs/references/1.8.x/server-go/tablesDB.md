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
  - [Database](/docs/references/1.8.x/models/database)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.Create(
    "<DATABASE_ID>",
    "<NAME>",
    tablesdb.WithCreateEnabled(false),
)
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
  - [Database](/docs/references/1.8.x/models/database)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.Get(
    "<DATABASE_ID>",
)
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
  - [Databases List](/docs/references/1.8.x/models/databaseList)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.List(
    tablesdb.WithListQueries([]interface{}{}),
    tablesdb.WithListSearch("<SEARCH>"),
    tablesdb.WithListTotal(false),
)
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
  - [Database](/docs/references/1.8.x/models/database)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.Update(
    "<DATABASE_ID>",
    tablesdb.WithUpdateName("<NAME>"),
    tablesdb.WithUpdateEnabled(false),
)
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

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.Delete(
    "<DATABASE_ID>",
)
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
  - [Table](/docs/references/1.8.x/models/table)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.CreateTable(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "<NAME>",
    tablesdb.WithCreateTablePermissions(interface{}{"read("any")"}),
    tablesdb.WithCreateTableRowSecurity(false),
    tablesdb.WithCreateTableEnabled(false),
    tablesdb.WithCreateTableColumns([]interface{}{}),
    tablesdb.WithCreateTableIndexes([]interface{}{}),
)
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
  - [Table](/docs/references/1.8.x/models/table)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.GetTable(
    "<DATABASE_ID>",
    "<TABLE_ID>",
)
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
  - [Tables List](/docs/references/1.8.x/models/tableList)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.ListTables(
    "<DATABASE_ID>",
    tablesdb.WithListTablesQueries([]interface{}{}),
    tablesdb.WithListTablesSearch("<SEARCH>"),
    tablesdb.WithListTablesTotal(false),
)
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
  - [Table](/docs/references/1.8.x/models/table)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.UpdateTable(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    tablesdb.WithUpdateTableName("<NAME>"),
    tablesdb.WithUpdateTablePermissions(interface{}{"read("any")"}),
    tablesdb.WithUpdateTableRowSecurity(false),
    tablesdb.WithUpdateTableEnabled(false),
)
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

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.DeleteTable(
    "<DATABASE_ID>",
    "<TABLE_ID>",
)
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
  - [ColumnBoolean](/docs/references/1.8.x/models/columnBoolean)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.CreateBooleanColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
    false,
    tablesdb.WithCreateBooleanColumnDefault(false),
    tablesdb.WithCreateBooleanColumnArray(false),
)
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
  - [ColumnDatetime](/docs/references/1.8.x/models/columnDatetime)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.CreateDatetimeColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
    false,
    tablesdb.WithCreateDatetimeColumnDefault(""),
    tablesdb.WithCreateDatetimeColumnArray(false),
)
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
  - [ColumnEmail](/docs/references/1.8.x/models/columnEmail)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.CreateEmailColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
    false,
    tablesdb.WithCreateEmailColumnDefault("email@example.com"),
    tablesdb.WithCreateEmailColumnArray(false),
)
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
  - [ColumnEnum](/docs/references/1.8.x/models/columnEnum)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.CreateEnumColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
    []interface{}{},
    false,
    tablesdb.WithCreateEnumColumnDefault("<DEFAULT>"),
    tablesdb.WithCreateEnumColumnArray(false),
)
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
  - [ColumnFloat](/docs/references/1.8.x/models/columnFloat)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.CreateFloatColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
    false,
    tablesdb.WithCreateFloatColumnMin(0),
    tablesdb.WithCreateFloatColumnMax(0),
    tablesdb.WithCreateFloatColumnDefault(0),
    tablesdb.WithCreateFloatColumnArray(false),
)
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
  - [ColumnInteger](/docs/references/1.8.x/models/columnInteger)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.CreateIntegerColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
    false,
    tablesdb.WithCreateIntegerColumnMin(0),
    tablesdb.WithCreateIntegerColumnMax(0),
    tablesdb.WithCreateIntegerColumnDefault(0),
    tablesdb.WithCreateIntegerColumnArray(false),
)
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
  - [ColumnIP](/docs/references/1.8.x/models/columnIp)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.CreateIpColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
    false,
    tablesdb.WithCreateIpColumnDefault(""),
    tablesdb.WithCreateIpColumnArray(false),
)
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
  - [ColumnLine](/docs/references/1.8.x/models/columnLine)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.CreateLineColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
    false,
    tablesdb.WithCreateLineColumnDefault(interface{}{[1, 2], [3, 4], [5, 6]}),
)
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
  - [ColumnLongtext](/docs/references/1.8.x/models/columnLongtext)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.CreateLongtextColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
    false,
    tablesdb.WithCreateLongtextColumnDefault("<DEFAULT>"),
    tablesdb.WithCreateLongtextColumnArray(false),
    tablesdb.WithCreateLongtextColumnEncrypt(false),
)
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
  - [ColumnMediumtext](/docs/references/1.8.x/models/columnMediumtext)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.CreateMediumtextColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
    false,
    tablesdb.WithCreateMediumtextColumnDefault("<DEFAULT>"),
    tablesdb.WithCreateMediumtextColumnArray(false),
    tablesdb.WithCreateMediumtextColumnEncrypt(false),
)
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
  - [ColumnPoint](/docs/references/1.8.x/models/columnPoint)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.CreatePointColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
    false,
    tablesdb.WithCreatePointColumnDefault(interface{}{1, 2}),
)
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
  - [ColumnPolygon](/docs/references/1.8.x/models/columnPolygon)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.CreatePolygonColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
    false,
    tablesdb.WithCreatePolygonColumnDefault(interface{}{[[1, 2], [3, 4], [5, 6], [1, 2]]}),
)
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
  - [ColumnRelationship](/docs/references/1.8.x/models/columnRelationship)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.CreateRelationshipColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "<RELATED_TABLE_ID>",
    "oneToOne",
    tablesdb.WithCreateRelationshipColumnTwoWay(false),
    tablesdb.WithCreateRelationshipColumnKey(""),
    tablesdb.WithCreateRelationshipColumnTwoWayKey(""),
    tablesdb.WithCreateRelationshipColumnOnDelete("cascade"),
)
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
  - [ColumnString](/docs/references/1.8.x/models/columnString)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.CreateStringColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
    1,
    false,
    tablesdb.WithCreateStringColumnDefault("<DEFAULT>"),
    tablesdb.WithCreateStringColumnArray(false),
    tablesdb.WithCreateStringColumnEncrypt(false),
)
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
  - [ColumnText](/docs/references/1.8.x/models/columnText)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.CreateTextColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
    false,
    tablesdb.WithCreateTextColumnDefault("<DEFAULT>"),
    tablesdb.WithCreateTextColumnArray(false),
    tablesdb.WithCreateTextColumnEncrypt(false),
)
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
  - [ColumnURL](/docs/references/1.8.x/models/columnUrl)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.CreateUrlColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
    false,
    tablesdb.WithCreateUrlColumnDefault("https://example.com"),
    tablesdb.WithCreateUrlColumnArray(false),
)
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
  - [ColumnVarchar](/docs/references/1.8.x/models/columnVarchar)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.CreateVarcharColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
    1,
    false,
    tablesdb.WithCreateVarcharColumnDefault("<DEFAULT>"),
    tablesdb.WithCreateVarcharColumnArray(false),
    tablesdb.WithCreateVarcharColumnEncrypt(false),
)
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
  - [ColumnBoolean](/docs/references/1.8.x/models/columnBoolean)
  - [ColumnInteger](/docs/references/1.8.x/models/columnInteger)
  - [ColumnFloat](/docs/references/1.8.x/models/columnFloat)
  - [ColumnEmail](/docs/references/1.8.x/models/columnEmail)
  - [ColumnEnum](/docs/references/1.8.x/models/columnEnum)
  - [ColumnURL](/docs/references/1.8.x/models/columnUrl)
  - [ColumnIP](/docs/references/1.8.x/models/columnIp)
  - [ColumnDatetime](/docs/references/1.8.x/models/columnDatetime)
  - [ColumnRelationship](/docs/references/1.8.x/models/columnRelationship)
  - [ColumnString](/docs/references/1.8.x/models/columnString)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.GetColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
)
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
  - [Columns List](/docs/references/1.8.x/models/columnList)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.ListColumns(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    tablesdb.WithListColumnsQueries([]interface{}{}),
    tablesdb.WithListColumnsTotal(false),
)
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
  - [ColumnBoolean](/docs/references/1.8.x/models/columnBoolean)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.UpdateBooleanColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
    false,
    false,
    tablesdb.WithUpdateBooleanColumnNewKey(""),
)
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
  - [ColumnDatetime](/docs/references/1.8.x/models/columnDatetime)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.UpdateDatetimeColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
    false,
    "",
    tablesdb.WithUpdateDatetimeColumnNewKey(""),
)
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
  - [ColumnEmail](/docs/references/1.8.x/models/columnEmail)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.UpdateEmailColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
    false,
    "email@example.com",
    tablesdb.WithUpdateEmailColumnNewKey(""),
)
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
  - [ColumnEnum](/docs/references/1.8.x/models/columnEnum)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.UpdateEnumColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
    []interface{}{},
    false,
    "<DEFAULT>",
    tablesdb.WithUpdateEnumColumnNewKey(""),
)
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
  - [ColumnFloat](/docs/references/1.8.x/models/columnFloat)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.UpdateFloatColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
    false,
    0,
    tablesdb.WithUpdateFloatColumnMin(0),
    tablesdb.WithUpdateFloatColumnMax(0),
    tablesdb.WithUpdateFloatColumnNewKey(""),
)
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
  - [ColumnInteger](/docs/references/1.8.x/models/columnInteger)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.UpdateIntegerColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
    false,
    0,
    tablesdb.WithUpdateIntegerColumnMin(0),
    tablesdb.WithUpdateIntegerColumnMax(0),
    tablesdb.WithUpdateIntegerColumnNewKey(""),
)
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
  - [ColumnIP](/docs/references/1.8.x/models/columnIp)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.UpdateIpColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
    false,
    "",
    tablesdb.WithUpdateIpColumnNewKey(""),
)
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
  - [ColumnLine](/docs/references/1.8.x/models/columnLine)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.UpdateLineColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
    false,
    tablesdb.WithUpdateLineColumnDefault(interface{}{[1, 2], [3, 4], [5, 6]}),
    tablesdb.WithUpdateLineColumnNewKey(""),
)
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
  - [ColumnLongtext](/docs/references/1.8.x/models/columnLongtext)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.UpdateLongtextColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
    false,
    "<DEFAULT>",
    tablesdb.WithUpdateLongtextColumnNewKey(""),
)
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
  - [ColumnMediumtext](/docs/references/1.8.x/models/columnMediumtext)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.UpdateMediumtextColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
    false,
    "<DEFAULT>",
    tablesdb.WithUpdateMediumtextColumnNewKey(""),
)
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
  - [ColumnPoint](/docs/references/1.8.x/models/columnPoint)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.UpdatePointColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
    false,
    tablesdb.WithUpdatePointColumnDefault(interface{}{1, 2}),
    tablesdb.WithUpdatePointColumnNewKey(""),
)
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
  - [ColumnPolygon](/docs/references/1.8.x/models/columnPolygon)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.UpdatePolygonColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
    false,
    tablesdb.WithUpdatePolygonColumnDefault(interface{}{[[1, 2], [3, 4], [5, 6], [1, 2]]}),
    tablesdb.WithUpdatePolygonColumnNewKey(""),
)
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
  - [ColumnRelationship](/docs/references/1.8.x/models/columnRelationship)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.UpdateRelationshipColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
    tablesdb.WithUpdateRelationshipColumnOnDelete("cascade"),
    tablesdb.WithUpdateRelationshipColumnNewKey(""),
)
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
  - [ColumnString](/docs/references/1.8.x/models/columnString)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.UpdateStringColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
    false,
    "<DEFAULT>",
    tablesdb.WithUpdateStringColumnSize(1),
    tablesdb.WithUpdateStringColumnNewKey(""),
)
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
  - [ColumnText](/docs/references/1.8.x/models/columnText)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.UpdateTextColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
    false,
    "<DEFAULT>",
    tablesdb.WithUpdateTextColumnNewKey(""),
)
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
  - [ColumnURL](/docs/references/1.8.x/models/columnUrl)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.UpdateUrlColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
    false,
    "https://example.com",
    tablesdb.WithUpdateUrlColumnNewKey(""),
)
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
  - [ColumnVarchar](/docs/references/1.8.x/models/columnVarchar)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.UpdateVarcharColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
    false,
    "<DEFAULT>",
    tablesdb.WithUpdateVarcharColumnSize(1),
    tablesdb.WithUpdateVarcharColumnNewKey(""),
)
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

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.DeleteColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
)
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
  - [Index](/docs/references/1.8.x/models/columnIndex)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.CreateIndex(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
    "key",
    []interface{}{},
    tablesdb.WithCreateIndexOrders([]interface{}{}),
    tablesdb.WithCreateIndexLengths([]interface{}{}),
)
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
  - [Index](/docs/references/1.8.x/models/columnIndex)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.GetIndex(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
)
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
  - [Column Indexes List](/docs/references/1.8.x/models/columnIndexList)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.ListIndexes(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    tablesdb.WithListIndexesQueries([]interface{}{}),
    tablesdb.WithListIndexesTotal(false),
)
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

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.DeleteIndex(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "",
)
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
  - [Row](/docs/references/1.8.x/models/row)

**Rate limits:** 120 requests per 60 seconds

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithSession("")
)

service := tablesdb.New(client)

response, error := service.CreateRow(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "<ROW_ID>",
    map[string]interface{}{
        "username": "walter.obrien",
        "email": "walter.obrien@example.com",
        "fullName": "Walter O'Brien",
        "age": 30,
        "isAdmin": false
    },
    tablesdb.WithCreateRowPermissions(interface{}{"read("any")"}),
    tablesdb.WithCreateRowTransactionId("<TRANSACTION_ID>"),
)
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
  - [Rows List](/docs/references/1.8.x/models/rowList)

**Rate limits:** 120 requests per 60 seconds

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.CreateRows(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    []interface{}{},
    tablesdb.WithCreateRowsTransactionId("<TRANSACTION_ID>"),
)
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

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithSession("")
)

service := tablesdb.New(client)

response, error := service.GetRow(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "<ROW_ID>",
    tablesdb.WithGetRowQueries([]interface{}{}),
    tablesdb.WithGetRowTransactionId("<TRANSACTION_ID>"),
)
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

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithSession("")
)

service := tablesdb.New(client)

response, error := service.ListRows(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    tablesdb.WithListRowsQueries([]interface{}{}),
    tablesdb.WithListRowsTransactionId("<TRANSACTION_ID>"),
    tablesdb.WithListRowsTotal(false),
)
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

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithSession("")
)

service := tablesdb.New(client)

response, error := service.UpdateRow(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "<ROW_ID>",
    tablesdb.WithUpdateRowData(map[string]interface{}{
        "username": "walter.obrien",
        "email": "walter.obrien@example.com",
        "fullName": "Walter O'Brien",
        "age": 33,
        "isAdmin": false
    }),
    tablesdb.WithUpdateRowPermissions(interface{}{"read("any")"}),
    tablesdb.WithUpdateRowTransactionId("<TRANSACTION_ID>"),
)
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
  - [Rows List](/docs/references/1.8.x/models/rowList)

**Rate limits:** 120 requests per 60 seconds

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.UpdateRows(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    tablesdb.WithUpdateRowsData(map[string]interface{}{
        "username": "walter.obrien",
        "email": "walter.obrien@example.com",
        "fullName": "Walter O'Brien",
        "age": 33,
        "isAdmin": false
    }),
    tablesdb.WithUpdateRowsQueries([]interface{}{}),
    tablesdb.WithUpdateRowsTransactionId("<TRANSACTION_ID>"),
)
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

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithSession("")
)

service := tablesdb.New(client)

response, error := service.UpsertRow(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "<ROW_ID>",
    tablesdb.WithUpsertRowData(map[string]interface{}{
        "username": "walter.obrien",
        "email": "walter.obrien@example.com",
        "fullName": "Walter O'Brien",
        "age": 33,
        "isAdmin": false
    }),
    tablesdb.WithUpsertRowPermissions(interface{}{"read("any")"}),
    tablesdb.WithUpsertRowTransactionId("<TRANSACTION_ID>"),
)
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
  - [Rows List](/docs/references/1.8.x/models/rowList)

**Rate limits:** 120 requests per 60 seconds

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.UpsertRows(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    []interface{}{},
    tablesdb.WithUpsertRowsTransactionId("<TRANSACTION_ID>"),
)
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

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithSession("")
)

service := tablesdb.New(client)

response, error := service.DeleteRow(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "<ROW_ID>",
    tablesdb.WithDeleteRowTransactionId("<TRANSACTION_ID>"),
)
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
  - [Rows List](/docs/references/1.8.x/models/rowList)

**Rate limits:** 60 requests per 60 seconds

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.DeleteRows(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    tablesdb.WithDeleteRowsQueries([]interface{}{}),
    tablesdb.WithDeleteRowsTransactionId("<TRANSACTION_ID>"),
)
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

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithSession("")
)

service := tablesdb.New(client)

response, error := service.IncrementRowColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "<ROW_ID>",
    "",
    tablesdb.WithIncrementRowColumnValue(0),
    tablesdb.WithIncrementRowColumnMax(0),
    tablesdb.WithIncrementRowColumnTransactionId("<TRANSACTION_ID>"),
)
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

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithSession("")
)

service := tablesdb.New(client)

response, error := service.DecrementRowColumn(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    "<ROW_ID>",
    "",
    tablesdb.WithDecrementRowColumnValue(0),
    tablesdb.WithDecrementRowColumnMin(0),
    tablesdb.WithDecrementRowColumnTransactionId("<TRANSACTION_ID>"),
)
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

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.CreateOperations(
    "<TRANSACTION_ID>",
    tablesdb.WithCreateOperationsOperations(interface{}{
	    {
	        "action": "create",
	        "databaseId": "<DATABASE_ID>",
	        "tableId": "<TABLE_ID>",
	        "rowId": "<ROW_ID>",
	        "data": {
	            "name": "Walter O'Brien"
	        }
	    }
	}),
)
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

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.CreateTransaction(
    tablesdb.WithCreateTransactionTtl(60),
)
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

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.GetTransaction(
    "<TRANSACTION_ID>",
)
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

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.ListTransactions(
    tablesdb.WithListTransactionsQueries([]interface{}{}),
)
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

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.UpdateTransaction(
    "<TRANSACTION_ID>",
    tablesdb.WithUpdateTransactionCommit(false),
    tablesdb.WithUpdateTransactionRollback(false),
)
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

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/tablesdb"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := tablesdb.New(client)

response, error := service.DeleteTransaction(
    "<TRANSACTION_ID>",
)
```

---

