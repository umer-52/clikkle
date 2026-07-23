# Console Variables

Console Variables

## Properties

| Name | Type | Description |
|------|------|-------------|
| _APP_DOMAIN_TARGET_CNAME | string | CNAME target for your Appwrite custom domains. |
| _APP_DOMAIN_TARGET_A | string | A target for your Appwrite custom domains. |
| _APP_DOMAIN_TARGET_AAAA | string | AAAA target for your Appwrite custom domains. |
| _APP_DOMAIN_TARGET_CAA | string | CAA target for your Appwrite custom domains. |
| _APP_STORAGE_LIMIT | integer | Maximum file size allowed for file upload in bytes. |
| _APP_COMPUTE_SIZE_LIMIT | integer | Maximum file size allowed for deployment in bytes. |
| _APP_USAGE_STATS | string | Defines if usage stats are enabled. This value is set to 'enabled' by default, to disable the usage stats set the value to 'disabled'. |
| _APP_VCS_ENABLED | boolean | Defines if VCS (Version Control System) is enabled. |
| _APP_DOMAIN_ENABLED | boolean | Defines if main domain is configured. If so, custom domains can be created. |
| _APP_ASSISTANT_ENABLED | boolean | Defines if AI assistant is enabled. |
| _APP_DOMAIN_SITES | string | A domain to use for site URLs. |
| _APP_DOMAIN_FUNCTIONS | string | A domain to use for function URLs. |
| _APP_OPTIONS_FORCE_HTTPS | string | Defines if HTTPS is enforced for all requests. |
| _APP_DOMAINS_NAMESERVERS | string | Comma-separated list of nameservers. |

## Example

### REST

```json
{
  "_APP_DOMAIN_TARGET_CNAME": "appwrite.io",
  "_APP_DOMAIN_TARGET_A": "127.0.0.1",
  "_APP_DOMAIN_TARGET_AAAA": "::1",
  "_APP_DOMAIN_TARGET_CAA": "digicert.com",
  "_APP_STORAGE_LIMIT": "30000000",
  "_APP_COMPUTE_SIZE_LIMIT": "30000000",
  "_APP_USAGE_STATS": "enabled",
  "_APP_VCS_ENABLED": true,
  "_APP_DOMAIN_ENABLED": true,
  "_APP_ASSISTANT_ENABLED": true,
  "_APP_DOMAIN_SITES": "sites.localhost",
  "_APP_DOMAIN_FUNCTIONS": "functions.localhost",
  "_APP_OPTIONS_FORCE_HTTPS": "enabled",
  "_APP_DOMAINS_NAMESERVERS": "ns1.example.com,ns2.example.com"
}
```

### GraphQL

```json
{
  "_APP_DOMAIN_TARGET_CNAME": "appwrite.io",
  "_APP_DOMAIN_TARGET_A": "127.0.0.1",
  "_APP_DOMAIN_TARGET_AAAA": "::1",
  "_APP_DOMAIN_TARGET_CAA": "digicert.com",
  "_APP_STORAGE_LIMIT": "30000000",
  "_APP_COMPUTE_SIZE_LIMIT": "30000000",
  "_APP_USAGE_STATS": "enabled",
  "_APP_VCS_ENABLED": true,
  "_APP_DOMAIN_ENABLED": true,
  "_APP_ASSISTANT_ENABLED": true,
  "_APP_DOMAIN_SITES": "sites.localhost",
  "_APP_DOMAIN_FUNCTIONS": "functions.localhost",
  "_APP_OPTIONS_FORCE_HTTPS": "enabled",
  "_APP_DOMAINS_NAMESERVERS": "ns1.example.com,ns2.example.com"
}
```

