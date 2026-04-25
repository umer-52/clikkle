# UsageDatabase

UsageDatabase

## Properties

| Name | Type | Description |
|------|------|-------------|
| range | string | Time range of the usage stats. |
| collectionsTotal | integer | Total aggregated number of collections. |
| tablesTotal | integer | Total aggregated number of tables. |
| documentsTotal | integer | Total aggregated number of documents. |
| rowsTotal | integer | Total aggregated number of rows. |
| storageTotal | integer | Total aggregated number of total storage used in bytes. |
| databaseReadsTotal | integer | Total number of databases reads. |
| databaseWritesTotal | integer | Total number of databases writes. |
| collections | array<metric> | Aggregated  number of collections per period. Can be one of: [Metric model](/docs/references/1.8.x/models/metric) |
| tables | array<metric> | Aggregated  number of tables per period. Can be one of: [Metric model](/docs/references/1.8.x/models/metric) |
| documents | array<metric> | Aggregated  number of documents per period. Can be one of: [Metric model](/docs/references/1.8.x/models/metric) |
| rows | array<metric> | Aggregated  number of rows per period. Can be one of: [Metric model](/docs/references/1.8.x/models/metric) |
| storage | array<metric> | Aggregated storage used in bytes per period. Can be one of: [Metric model](/docs/references/1.8.x/models/metric) |
| databaseReads | array<metric> | An array of aggregated number of database reads. Can be one of: [Metric model](/docs/references/1.8.x/models/metric) |
| databaseWrites | array<metric> | An array of aggregated number of database writes. Can be one of: [Metric model](/docs/references/1.8.x/models/metric) |

## Example

### REST

```json
{
  "range": "30d",
  "collectionsTotal": 0,
  "tablesTotal": 0,
  "documentsTotal": 0,
  "rowsTotal": 0,
  "storageTotal": 0,
  "databaseReadsTotal": 0,
  "databaseWritesTotal": 0,
  "collections": [],
  "tables": [],
  "documents": [],
  "rows": [],
  "storage": [],
  "databaseReads": [],
  "databaseWrites": []
}
```

### GraphQL

```json
{
  "range": "30d",
  "collectionsTotal": 0,
  "tablesTotal": 0,
  "documentsTotal": 0,
  "rowsTotal": 0,
  "storageTotal": 0,
  "databaseReadsTotal": 0,
  "databaseWritesTotal": 0,
  "collections": [],
  "tables": [],
  "documents": [],
  "rows": [],
  "storage": [],
  "databaseReads": [],
  "databaseWrites": []
}
```

