# UsageDatabases

UsageDatabases

## Properties

| Name | Type | Description |
|------|------|-------------|
| range | string | Time range of the usage stats. |
| databasesTotal | integer | Total aggregated number of databases. |
| collectionsTotal | integer | Total aggregated number  of collections. |
| tablesTotal | integer | Total aggregated number  of tables. |
| documentsTotal | integer | Total aggregated number of documents. |
| rowsTotal | integer | Total aggregated number of rows. |
| storageTotal | integer | Total aggregated number of total databases storage in bytes. |
| databasesReadsTotal | integer | Total number of databases reads. |
| databasesWritesTotal | integer | Total number of databases writes. |
| databases | array<metric> | Aggregated number of databases per period. Can be one of: [Metric model](/docs/references/cloud/models/metric) |
| collections | array<metric> | Aggregated number of collections per period. Can be one of: [Metric model](/docs/references/cloud/models/metric) |
| tables | array<metric> | Aggregated number of tables per period. Can be one of: [Metric model](/docs/references/cloud/models/metric) |
| documents | array<metric> | Aggregated number of documents per period. Can be one of: [Metric model](/docs/references/cloud/models/metric) |
| rows | array<metric> | Aggregated number of rows per period. Can be one of: [Metric model](/docs/references/cloud/models/metric) |
| storage | array<metric> | An array of the aggregated number of databases storage in bytes per period. Can be one of: [Metric model](/docs/references/cloud/models/metric) |
| databasesReads | array<metric> | An array of aggregated number of database reads. Can be one of: [Metric model](/docs/references/cloud/models/metric) |
| databasesWrites | array<metric> | An array of aggregated number of database writes. Can be one of: [Metric model](/docs/references/cloud/models/metric) |

## Example

### REST

```json
{
  "range": "30d",
  "databasesTotal": 0,
  "collectionsTotal": 0,
  "tablesTotal": 0,
  "documentsTotal": 0,
  "rowsTotal": 0,
  "storageTotal": 0,
  "databasesReadsTotal": 0,
  "databasesWritesTotal": 0,
  "databases": [],
  "collections": [],
  "tables": [],
  "documents": [],
  "rows": [],
  "storage": [],
  "databasesReads": [],
  "databasesWrites": []
}
```

### GraphQL

```json
{
  "range": "30d",
  "databasesTotal": 0,
  "collectionsTotal": 0,
  "tablesTotal": 0,
  "documentsTotal": 0,
  "rowsTotal": 0,
  "storageTotal": 0,
  "databasesReadsTotal": 0,
  "databasesWritesTotal": 0,
  "databases": [],
  "collections": [],
  "tables": [],
  "documents": [],
  "rows": [],
  "storage": [],
  "databasesReads": [],
  "databasesWrites": []
}
```

