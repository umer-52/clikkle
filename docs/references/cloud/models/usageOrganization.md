# UsageOrganization

UsageOrganization

## Properties

| Name | Type | Description |
|------|------|-------------|
| bandwidth | array<metric> | Aggregated stats for number of requests. Can be one of: [Metric model](/docs/references/cloud/models/metric) |
| users | array<metric> | Aggregated stats for consumed bandwidth. Can be one of: [Metric model](/docs/references/cloud/models/metric) |
| executions | array<metric> | Aggregated stats for function executions. Can be one of: [Metric model](/docs/references/cloud/models/metric) |
| databasesReads | array<metric> | Aggregated stats for database reads. Can be one of: [Metric model](/docs/references/cloud/models/metric) |
| databasesWrites | array<metric> | Aggregated stats for database writes. Can be one of: [Metric model](/docs/references/cloud/models/metric) |
| imageTransformations | array<metric> | Aggregated stats for file transformations. Can be one of: [Metric model](/docs/references/cloud/models/metric) |
| imageTransformationsTotal | integer | Aggregated stats for total file transformations. |
| screenshotsGenerated | array<metric> | Aggregated stats for file transformations. Can be one of: [Metric model](/docs/references/cloud/models/metric) |
| screenshotsGeneratedTotal | integer | Aggregated stats for total file transformations. |
| imagineCredits | array<metric> | Aggregated stats for imagine credits. Can be one of: [Metric model](/docs/references/cloud/models/metric) |
| imagineCreditsTotal | integer | Aggregated stats for total imagine credits. |
| usersTotal | integer | Aggregated stats for total users. |
| executionsTotal | integer | Aggregated stats for total executions. |
| executionsMBSecondsTotal | integer | Aggregated stats for function executions in mb seconds. |
| buildsMBSecondsTotal | integer | Aggregated stats for function builds in mb seconds. |
| filesStorageTotal | integer | Aggregated stats for total file storage. |
| buildsStorageTotal | integer | Aggregated stats for total builds storage. |
| deploymentsStorageTotal | integer | Aggregated stats for total deployments storage. |
| databasesStorageTotal | integer | Aggregated stats for total databases storage. |
| databasesReadsTotal | integer | Aggregated stats for total databases  reads. |
| databasesWritesTotal | integer | Aggregated stats for total databases  writes. |
| backupsStorageTotal | integer | Aggregated stats for total backups storage. |
| storageTotal | integer | Aggregated stats for total storage. |
| authPhoneTotal | integer | Aggregated stats for total auth phone. |
| authPhoneEstimate | integer | Aggregated stats for total auth phone estimation. |
| projects | array<usageOrganizationProject> | Aggregated stats for each projects. Can be one of: [UsageOrganizationProject model](/docs/references/cloud/models/usageOrganizationProject) |

## Example

### REST

```json
{
  "bandwidth": [],
  "users": [],
  "executions": [],
  "databasesReads": [],
  "databasesWrites": [],
  "imageTransformations": [],
  "imageTransformationsTotal": 0,
  "screenshotsGenerated": [],
  "screenshotsGeneratedTotal": 0,
  "imagineCredits": [],
  "imagineCreditsTotal": 0,
  "usersTotal": 0,
  "executionsTotal": 0,
  "executionsMBSecondsTotal": 0,
  "buildsMBSecondsTotal": 0,
  "filesStorageTotal": 0,
  "buildsStorageTotal": 0,
  "deploymentsStorageTotal": 0,
  "databasesStorageTotal": 0,
  "databasesReadsTotal": 0,
  "databasesWritesTotal": 0,
  "backupsStorageTotal": 0,
  "storageTotal": 0,
  "authPhoneTotal": 0,
  "authPhoneEstimate": 0,
  "projects": []
}
```

### GraphQL

```json
{
  "bandwidth": [],
  "users": [],
  "executions": [],
  "databasesReads": [],
  "databasesWrites": [],
  "imageTransformations": [],
  "imageTransformationsTotal": 0,
  "screenshotsGenerated": [],
  "screenshotsGeneratedTotal": 0,
  "imagineCredits": [],
  "imagineCreditsTotal": 0,
  "usersTotal": 0,
  "executionsTotal": 0,
  "executionsMBSecondsTotal": 0,
  "buildsMBSecondsTotal": 0,
  "filesStorageTotal": 0,
  "buildsStorageTotal": 0,
  "deploymentsStorageTotal": 0,
  "databasesStorageTotal": 0,
  "databasesReadsTotal": 0,
  "databasesWritesTotal": 0,
  "backupsStorageTotal": 0,
  "storageTotal": 0,
  "authPhoneTotal": 0,
  "authPhoneEstimate": 0,
  "projects": []
}
```

