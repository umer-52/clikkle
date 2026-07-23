# Rule

Rule

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Rule ID. |
| $createdAt | string | Rule creation date in ISO 8601 format. |
| $updatedAt | string | Rule update date in ISO 8601 format. |
| domain | string | Domain name. |
| type | string | Action definition for the rule. Possible values are "api", "deployment", or "redirect" |
| trigger | string | Defines how the rule was created. Possible values are "manual" or "deployment" |
| redirectUrl | string | URL to redirect to. Used if type is "redirect" |
| redirectStatusCode | integer | Status code to apply during redirect. Used if type is "redirect" |
| deploymentId | string | ID of deployment. Used if type is "deployment" |
| deploymentResourceType | string | Type of deployment. Possible values are "function", "site". Used if rule's type is "deployment". |
| deploymentResourceId | string | ID deployment's resource. Used if type is "deployment" |
| deploymentVcsProviderBranch | string | Name of Git branch that updates rule. Used if type is "deployment" |
| status | string | Domain verification status. Possible values are "created", "verifying", "verified" and "unverified" |
| logs | string | Certificate generation logs. This will return an empty string if generation did not run, or succeeded. |
| renewAt | string | Certificate auto-renewal date in ISO 8601 format. |

## Example

### REST

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "domain": "appwrite.company.com",
  "type": "deployment",
  "trigger": "manual",
  "redirectUrl": "https://appwrite.io/docs",
  "redirectStatusCode": 301,
  "deploymentId": "n3u9feiwmf",
  "deploymentResourceType": "function",
  "deploymentResourceId": "n3u9feiwmf",
  "deploymentVcsProviderBranch": "function",
  "status": "verified",
  "logs": "HTTP challegne failed.",
  "renewAt": "datetime"
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "domain": "appwrite.company.com",
  "type": "deployment",
  "trigger": "manual",
  "redirectUrl": "https://appwrite.io/docs",
  "redirectStatusCode": 301,
  "deploymentId": "n3u9feiwmf",
  "deploymentResourceType": "function",
  "deploymentResourceId": "n3u9feiwmf",
  "deploymentVcsProviderBranch": "function",
  "status": "verified",
  "logs": "HTTP challegne failed.",
  "renewAt": "datetime"
}
```

