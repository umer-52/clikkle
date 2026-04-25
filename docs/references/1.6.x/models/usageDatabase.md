# UsageDatabase

UsageDatabase

## Properties

| Name | Type | Description |
|------|------|-------------|
| range | string | Time range of the usage stats. |
| collectionsTotal | integer | Total aggregated number of collections. |
| documentsTotal | integer | Total aggregated number of documents. |
| storageTotal | integer | Total aggregated number of total storage used in bytes. |
| databaseReadsTotal | integer | Total number of databases reads. |
| databaseWritesTotal | integer | Total number of databases writes. |
| collections | array<metric> | Aggregated  number of collections per period. Can be one of: [Metric model](/docs/references/1.6.x/models/metric) |
| documents | array<metric> | Aggregated  number of documents per period. Can be one of: [Metric model](/docs/references/1.6.x/models/metric) |
| storage | array<metric> | Aggregated storage used in bytes per period. Can be one of: [Metric model](/docs/references/1.6.x/models/metric) |
| databaseReads | array<metric> | An array of aggregated number of database reads. Can be one of: [Metric model](/docs/references/1.6.x/models/metric) |
| databaseWrites | array<metric> | An array of aggregated number of database writes. Can be one of: [Metric model](/docs/references/1.6.x/models/metric) |

## Example

### REST

```json
{}
```

### GraphQL

```json
{}
```

