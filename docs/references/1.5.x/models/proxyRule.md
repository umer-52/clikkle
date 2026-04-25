# Rule

Rule

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Rule ID. |
| $createdAt | string | Rule creation date in ISO 8601 format. |
| $updatedAt | string | Rule update date in ISO 8601 format. |
| domain | string | Domain name. |
| resourceType | string | Action definition for the rule. Possible values are "api", "function", or "redirect" |
| resourceId | string | ID of resource for the action type. If resourceType is "api" or "url", it is empty. If resourceType is "function", it is ID of the function. |
| status | string | Domain verification status. Possible values are "created", "verifying", "verified" and "unverified" |
| logs | string | Certificate generation logs. This will return an empty string if generation did not run, or succeeded. |
| renewAt | string | Certificate auto-renewal date in ISO 8601 format. |

## Example

### REST

```json
{}
```

### GraphQL

```json
{}
```

