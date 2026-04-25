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

```server-graphql
mutation {
    tablesDBCreate(
        databaseId: "<DATABASE_ID>",
        name: "<NAME>",
        enabled: false
    ) {
        _id
        name
        _createdAt
        _updatedAt
        enabled
        type
        policies {
            _id
            _createdAt
            _updatedAt
            key
            type
            status
            error
            attributes
            lengths
            orders
        }
        archives {
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
                _id
                _createdAt
                _updatedAt
                key
                type
                status
                error
                attributes
                lengths
                orders
            }
            bytesMax
            bytesUsed
        }
    }
}
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

```server-graphql
```graphql
```

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

```server-graphql
```graphql
```

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

```server-graphql
mutation {
    tablesDBUpdate(
        databaseId: "<DATABASE_ID>",
        name: "<NAME>",
        enabled: false
    ) {
        _id
        name
        _createdAt
        _updatedAt
        enabled
        type
        policies {
            _id
            _createdAt
            _updatedAt
            key
            type
            status
            error
            attributes
            lengths
            orders
        }
        archives {
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
                _id
                _createdAt
                _updatedAt
                key
                type
                status
                error
                attributes
                lengths
                orders
            }
            bytesMax
            bytesUsed
        }
    }
}
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

```server-graphql
mutation {
    tablesDBDelete(
        databaseId: "<DATABASE_ID>"
    ) {
        status
    }
}
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

```server-graphql
mutation {
    tablesDBCreateTable(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        name: "<NAME>",
        permissions: ["read("any")"],
        rowSecurity: false,
        enabled: false,
        columns: [],
        indexes: []
    ) {
        _id
        _createdAt
        _updatedAt
        _permissions
        databaseId
        name
        enabled
        rowSecurity
        columns
        indexes {
            _id
            _createdAt
            _updatedAt
            key
            type
            status
            error
            columns
            lengths
            orders
        }
        bytesMax
        bytesUsed
    }
}
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

```server-graphql
```graphql
```

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

```server-graphql
```graphql
```

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

```server-graphql
mutation {
    tablesDBUpdateTable(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        name: "<NAME>",
        permissions: ["read("any")"],
        rowSecurity: false,
        enabled: false
    ) {
        _id
        _createdAt
        _updatedAt
        _permissions
        databaseId
        name
        enabled
        rowSecurity
        columns
        indexes {
            _id
            _createdAt
            _updatedAt
            key
            type
            status
            error
            columns
            lengths
            orders
        }
        bytesMax
        bytesUsed
    }
}
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

```server-graphql
mutation {
    tablesDBDeleteTable(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>"
    ) {
        status
    }
}
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

```server-graphql
mutation {
    tablesDBCreateBooleanColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "",
        required: false,
        default: false,
        array: false
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        default
    }
}
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

```server-graphql
mutation {
    tablesDBCreateDatetimeColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "",
        required: false,
        default: "",
        array: false
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        format
        default
    }
}
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

```server-graphql
mutation {
    tablesDBCreateEmailColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "",
        required: false,
        default: "email@example.com",
        array: false
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        format
        default
    }
}
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

```server-graphql
mutation {
    tablesDBCreateEnumColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "",
        elements: [],
        required: false,
        default: "<DEFAULT>",
        array: false
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        elements
        format
        default
    }
}
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

```server-graphql
mutation {
    tablesDBCreateFloatColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "",
        required: false,
        min: 0,
        max: 0,
        default: 0,
        array: false
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        min
        max
        default
    }
}
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

```server-graphql
mutation {
    tablesDBCreateIntegerColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "",
        required: false,
        min: 0,
        max: 0,
        default: 0,
        array: false
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        min
        max
        default
    }
}
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

```server-graphql
mutation {
    tablesDBCreateIpColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "",
        required: false,
        default: "",
        array: false
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        format
        default
    }
}
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

```server-graphql
mutation {
    tablesDBCreateLineColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "",
        required: false,
        default: [[1, 2], [3, 4], [5, 6]]
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        default
    }
}
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

```server-graphql
mutation {
    tablesDBCreateLongtextColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "",
        required: false,
        default: "<DEFAULT>",
        array: false,
        encrypt: false
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        default
        encrypt
    }
}
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

```server-graphql
mutation {
    tablesDBCreateMediumtextColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "",
        required: false,
        default: "<DEFAULT>",
        array: false,
        encrypt: false
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        default
        encrypt
    }
}
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

```server-graphql
mutation {
    tablesDBCreatePointColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "",
        required: false,
        default: [1, 2]
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        default
    }
}
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

```server-graphql
mutation {
    tablesDBCreatePolygonColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "",
        required: false,
        default: [[[1, 2], [3, 4], [5, 6], [1, 2]]]
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        default
    }
}
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

```server-graphql
mutation {
    tablesDBCreateRelationshipColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        relatedTableId: "<RELATED_TABLE_ID>",
        type: "oneToOne",
        twoWay: false,
        key: "",
        twoWayKey: "",
        onDelete: "cascade"
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        relatedTable
        relationType
        twoWay
        twoWayKey
        onDelete
        side
    }
}
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

```server-graphql
mutation {
    tablesDBCreateStringColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "",
        size: 1,
        required: false,
        default: "<DEFAULT>",
        array: false,
        encrypt: false
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        size
        default
        encrypt
    }
}
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

```server-graphql
mutation {
    tablesDBCreateTextColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "",
        required: false,
        default: "<DEFAULT>",
        array: false,
        encrypt: false
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        default
        encrypt
    }
}
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

```server-graphql
mutation {
    tablesDBCreateUrlColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "",
        required: false,
        default: "https://example.com",
        array: false
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        format
        default
    }
}
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

```server-graphql
mutation {
    tablesDBCreateVarcharColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "",
        size: 1,
        required: false,
        default: "<DEFAULT>",
        array: false,
        encrypt: false
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        size
        default
        encrypt
    }
}
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

```server-graphql
```graphql
```

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

```server-graphql
```graphql
```

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

```server-graphql
mutation {
    tablesDBUpdateBooleanColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "",
        required: false,
        default: false,
        newKey: ""
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        default
    }
}
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

```server-graphql
mutation {
    tablesDBUpdateDatetimeColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "",
        required: false,
        default: "",
        newKey: ""
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        format
        default
    }
}
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

```server-graphql
mutation {
    tablesDBUpdateEmailColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "",
        required: false,
        default: "email@example.com",
        newKey: ""
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        format
        default
    }
}
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

```server-graphql
mutation {
    tablesDBUpdateEnumColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "",
        elements: [],
        required: false,
        default: "<DEFAULT>",
        newKey: ""
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        elements
        format
        default
    }
}
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

```server-graphql
mutation {
    tablesDBUpdateFloatColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "",
        required: false,
        default: 0,
        min: 0,
        max: 0,
        newKey: ""
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        min
        max
        default
    }
}
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

```server-graphql
mutation {
    tablesDBUpdateIntegerColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "",
        required: false,
        default: 0,
        min: 0,
        max: 0,
        newKey: ""
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        min
        max
        default
    }
}
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

```server-graphql
mutation {
    tablesDBUpdateIpColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "",
        required: false,
        default: "",
        newKey: ""
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        format
        default
    }
}
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

```server-graphql
mutation {
    tablesDBUpdateLineColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "",
        required: false,
        default: [[1, 2], [3, 4], [5, 6]],
        newKey: ""
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        default
    }
}
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

```server-graphql
mutation {
    tablesDBUpdateLongtextColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "",
        required: false,
        default: "<DEFAULT>",
        newKey: ""
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        default
        encrypt
    }
}
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

```server-graphql
mutation {
    tablesDBUpdateMediumtextColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "",
        required: false,
        default: "<DEFAULT>",
        newKey: ""
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        default
        encrypt
    }
}
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

```server-graphql
mutation {
    tablesDBUpdatePointColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "",
        required: false,
        default: [1, 2],
        newKey: ""
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        default
    }
}
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

```server-graphql
mutation {
    tablesDBUpdatePolygonColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "",
        required: false,
        default: [[[1, 2], [3, 4], [5, 6], [1, 2]]],
        newKey: ""
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        default
    }
}
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

```server-graphql
mutation {
    tablesDBUpdateRelationshipColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "",
        onDelete: "cascade",
        newKey: ""
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        relatedTable
        relationType
        twoWay
        twoWayKey
        onDelete
        side
    }
}
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

```server-graphql
mutation {
    tablesDBUpdateStringColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "",
        required: false,
        default: "<DEFAULT>",
        size: 1,
        newKey: ""
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        size
        default
        encrypt
    }
}
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

```server-graphql
mutation {
    tablesDBUpdateTextColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "",
        required: false,
        default: "<DEFAULT>",
        newKey: ""
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        default
        encrypt
    }
}
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

```server-graphql
mutation {
    tablesDBUpdateUrlColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "",
        required: false,
        default: "https://example.com",
        newKey: ""
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        format
        default
    }
}
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

```server-graphql
mutation {
    tablesDBUpdateVarcharColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "",
        required: false,
        default: "<DEFAULT>",
        size: 1,
        newKey: ""
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        size
        default
        encrypt
    }
}
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

```server-graphql
mutation {
    tablesDBDeleteColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: ""
    ) {
        status
    }
}
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

```server-graphql
mutation {
    tablesDBCreateIndex(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: "",
        type: "key",
        columns: [],
        orders: [],
        lengths: []
    ) {
        _id
        _createdAt
        _updatedAt
        key
        type
        status
        error
        columns
        lengths
        orders
    }
}
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

```server-graphql
```graphql
```

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

```server-graphql
```graphql
```

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

```server-graphql
mutation {
    tablesDBDeleteIndex(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        key: ""
    ) {
        status
    }
}
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

```server-graphql
mutation {
    tablesDBCreateRow(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        rowId: "<ROW_ID>",
        data: "{\"username\":\"walter.obrien\",\"email\":\"walter.obrien@example.com\",\"fullName\":\"Walter O'Brien\",\"age\":30,\"isAdmin\":false}",
        permissions: ["read("any")"],
        transactionId: "<TRANSACTION_ID>"
    ) {
        _id
        _sequence
        _tableId
        _databaseId
        _createdAt
        _updatedAt
        _permissions
        data
    }
}
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

```server-graphql
mutation {
    tablesDBCreateRows(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        rows: [],
        transactionId: "<TRANSACTION_ID>"
    ) {
        total
        rows {
            _id
            _sequence
            _tableId
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

```server-graphql
```graphql
```

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

```server-graphql
```graphql
```

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

```server-graphql
mutation {
    tablesDBUpdateRow(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        rowId: "<ROW_ID>",
        data: "{\"username\":\"walter.obrien\",\"email\":\"walter.obrien@example.com\",\"fullName\":\"Walter O'Brien\",\"age\":33,\"isAdmin\":false}",
        permissions: ["read("any")"],
        transactionId: "<TRANSACTION_ID>"
    ) {
        _id
        _sequence
        _tableId
        _databaseId
        _createdAt
        _updatedAt
        _permissions
        data
    }
}
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

```server-graphql
mutation {
    tablesDBUpdateRows(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        data: "{\"username\":\"walter.obrien\",\"email\":\"walter.obrien@example.com\",\"fullName\":\"Walter O'Brien\",\"age\":33,\"isAdmin\":false}",
        queries: [],
        transactionId: "<TRANSACTION_ID>"
    ) {
        total
        rows {
            _id
            _sequence
            _tableId
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

```server-graphql
mutation {
    tablesDBUpsertRow(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        rowId: "<ROW_ID>",
        data: "{\"username\":\"walter.obrien\",\"email\":\"walter.obrien@example.com\",\"fullName\":\"Walter O'Brien\",\"age\":33,\"isAdmin\":false}",
        permissions: ["read("any")"],
        transactionId: "<TRANSACTION_ID>"
    ) {
        _id
        _sequence
        _tableId
        _databaseId
        _createdAt
        _updatedAt
        _permissions
        data
    }
}
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

```server-graphql
mutation {
    tablesDBUpsertRows(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        rows: [],
        transactionId: "<TRANSACTION_ID>"
    ) {
        total
        rows {
            _id
            _sequence
            _tableId
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

```server-graphql
mutation {
    tablesDBDeleteRow(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        rowId: "<ROW_ID>",
        transactionId: "<TRANSACTION_ID>"
    ) {
        status
    }
}
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

```server-graphql
mutation {
    tablesDBDeleteRows(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        queries: [],
        transactionId: "<TRANSACTION_ID>"
    ) {
        total
        rows {
            _id
            _sequence
            _tableId
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

```server-graphql
mutation {
    tablesDBIncrementRowColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        rowId: "<ROW_ID>",
        column: "",
        value: 0,
        max: 0,
        transactionId: "<TRANSACTION_ID>"
    ) {
        _id
        _sequence
        _tableId
        _databaseId
        _createdAt
        _updatedAt
        _permissions
        data
    }
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

```server-graphql
mutation {
    tablesDBDecrementRowColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        rowId: "<ROW_ID>",
        column: "",
        value: 0,
        min: 0,
        transactionId: "<TRANSACTION_ID>"
    ) {
        _id
        _sequence
        _tableId
        _databaseId
        _createdAt
        _updatedAt
        _permissions
        data
    }
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

```server-graphql
mutation {
    tablesDBCreateOperations(
        transactionId: "<TRANSACTION_ID>",
        operations: [
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
    ) {
        _id
        _createdAt
        _updatedAt
        status
        operations
        expiresAt
    }
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

```server-graphql
mutation {
    tablesDBCreateTransaction(
        ttl: 60
    ) {
        _id
        _createdAt
        _updatedAt
        status
        operations
        expiresAt
    }
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

```server-graphql
```graphql
```

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

```server-graphql
```graphql
```

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

```server-graphql
mutation {
    tablesDBUpdateTransaction(
        transactionId: "<TRANSACTION_ID>",
        commit: false,
        rollback: false
    ) {
        _id
        _createdAt
        _updatedAt
        status
        operations
        expiresAt
    }
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

```server-graphql
mutation {
    tablesDBDeleteTransaction(
        transactionId: "<TRANSACTION_ID>"
    ) {
        status
    }
}
```

---

