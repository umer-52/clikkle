# Campaign

Campaign

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Campaign ID |
| template | string | Campaign template |
| title | string | Campaign title |
| description | string | Campaign description |
| plan | string | Billing plan campaign is associated with |
| cta | string | Campaign CTA |
| claimed | string | Campaign info when claimed |
| unclaimed | string | Campaign infor when unclaimed |
| image | object | Campaign images |
| reviews | array<review> | Campaign reviews Can be one of: [Review model](/docs/references/cloud/models/review) |
| onlyNewOrgs | boolean | Campaign valid only for new orgs. |
| footer | boolean | Is footer |

## Example

### REST

```json
{
  "$id": "",
  "template": "",
  "title": "",
  "description": "",
  "plan": "",
  "cta": "",
  "claimed": "",
  "unclaimed": "",
  "image": "",
  "reviews": "",
  "onlyNewOrgs": "",
  "footer": ""
}
```

### GraphQL

```json
{
  "_id": "",
  "template": "",
  "title": "",
  "description": "",
  "plan": "",
  "cta": "",
  "claimed": "",
  "unclaimed": "",
  "image": "",
  "reviews": "",
  "onlyNewOrgs": "",
  "footer": ""
}
```

