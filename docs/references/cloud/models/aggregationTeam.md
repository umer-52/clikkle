# AggregationTeam

AggregationTeam

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Aggregation ID. |
| $createdAt | string | Aggregation creation time in ISO 8601 format. |
| $updatedAt | string | Aggregation update date in ISO 8601 format. |
| $permissions | array | Aggregation permissions. [Learn more about permissions](/docs/permissions). |
| from | string | Beginning date of the invoice |
| to | string | End date of the invoice |
| usageStorage | integer | Total storage usage |
| usageTotalStorage | integer | Total storage usage with builds storage |
| usageFilesStorage | integer | Total files storage usage |
| usageDeploymentsStorage | integer | Total deployments storage usage |
| usageBuildsStorage | integer | Total builds storage usage |
| usageDatabasesStorage | integer | Total databases storage usage |
| usageUsers | integer | Total active users for the billing period |
| usageExecutions | integer | Total number of executions for the billing period |
| usageBandwidth | integer | Total bandwidth usage for the billing period |
| usageRealtime | integer | Total realtime usage for the billing period |
| additionalMembers | integer | Additional members |
| additionalMemberAmount | integer | Additional members cost |
| additionalStorageAmount | integer | Additional storage usage cost |
| additionalUsersAmount | integer | Additional users usage cost. |
| additionalExecutionsAmount | integer | Additional executions usage cost |
| additionalBandwidthAmount | integer | Additional bandwidth usage cost |
| additionalRealtimeAmount | integer | Additional realtime usage cost |
| plan | string | Billing plan |
| amount | integer | Aggregated amount |
| breakdown | array<aggregationBreakdown> | Aggregation project breakdown Can be one of: [AggregationBreakdown model](/docs/references/cloud/models/aggregationBreakdown) |
| resources | array<usageResources> | Usage resources Can be one of: [UsageResource model](/docs/references/cloud/models/usageResources) |

## Example

### REST

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "$permissions": [
    "read(\"any\")"
  ],
  "from": "2020-10-15T06:38:00.000+00:00",
  "to": "2020-10-15T06:38:00.000+00:00",
  "usageStorage": 20009090,
  "usageTotalStorage": 20009090,
  "usageFilesStorage": 20009090,
  "usageDeploymentsStorage": 20009090,
  "usageBuildsStorage": 20009090,
  "usageDatabasesStorage": 2009090,
  "usageUsers": 2000,
  "usageExecutions": 2000,
  "usageBandwidth": 2000,
  "usageRealtime": 200,
  "additionalMembers": 5,
  "additionalMemberAmount": 30,
  "additionalStorageAmount": 40,
  "additionalUsersAmount": 4,
  "additionalExecutionsAmount": 30,
  "additionalBandwidthAmount": 40,
  "additionalRealtimeAmount": 20,
  "plan": "tier-0",
  "amount": 2,
  "breakdown": [],
  "resources": []
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "_permissions": [
    "read(\"any\")"
  ],
  "from": "2020-10-15T06:38:00.000+00:00",
  "to": "2020-10-15T06:38:00.000+00:00",
  "usageStorage": 20009090,
  "usageTotalStorage": 20009090,
  "usageFilesStorage": 20009090,
  "usageDeploymentsStorage": 20009090,
  "usageBuildsStorage": 20009090,
  "usageDatabasesStorage": 2009090,
  "usageUsers": 2000,
  "usageExecutions": 2000,
  "usageBandwidth": 2000,
  "usageRealtime": 200,
  "additionalMembers": 5,
  "additionalMemberAmount": 30,
  "additionalStorageAmount": 40,
  "additionalUsersAmount": 4,
  "additionalExecutionsAmount": 30,
  "additionalBandwidthAmount": 40,
  "additionalRealtimeAmount": 20,
  "plan": "tier-0",
  "amount": 2,
  "breakdown": [],
  "resources": []
}
```

