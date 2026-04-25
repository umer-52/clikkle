---
layout: article
title: Clikkle MCP and OpenCode
description: Learn how to add the Clikkle MCP servers to OpenCode to interact with both the Clikkle API and documentation.
---

Learn how you can add the Clikkle MCP servers to OpenCode to interact with both the Clikkle API and documentation.

Before you begin, ensure you have the following **pre-requisites** installed on your system:

{% tabs %}
{% tabsitem #api-server-prerequisites title="API server" %}

[uv](https://docs.astral.sh/uv/getting-started/installation/) must be installed on your system.

{% /tabsitem %}

{% tabsitem #docs-server-prerequisites title="Docs server" %}

[Node.js](https://nodejs.org/en/download) and npm must be installed on your system.

{% /tabsitem %}
{% /tabs %}

{% section #step-1 step=1 title="Add MCP servers" %}

Use the following configuration in your `opencode.json` file to use the Clikkle MCP servers.

{% tabs %}
{% tabsitem #api-only title="API server" %}

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "clikkle": {
      "type": "local",
      "command": [
        "uvx",
        "mcp-server-clikkle",
        "--sites"
      ],
      "enabled": true,
      "environment": {
        "CLIKKLE_PROJECT_ID": "your-project-id",
        "CLIKKLE_API_KEY": "your-api-key",
        "CLIKKLE_ENDPOINT": "https://<REGION>.cloud.clikkle.io/v1"
      }
    }
  }
}
```

**Configuration:**
- Replace `your-project-id` with your actual Clikkle project ID
- Replace `your-api-key` with your Clikkle API key
- Replace `<REGION>` with your Clikkle Cloud region (e.g., `nyc`, `fra`)

{% /tabsitem %}

{% tabsitem #docs-only title="Docs server" %}

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "clikkle-docs": {
      "type": "remote",
      "enabled": true,
      "url": "https://mcp-for-docs.clikkle.io"
    }
  }
}
```

{% /tabsitem %}
{% /tabs %}

{% info title="Enable other API MCP tools" %}

To enable additional API tools, learn more about [command-line arguments](/docs/tooling/mcp/api#command-line-arguments).

{% /info %}

{% /section %}

{% section #step-2 step=2 title="Test the integration" %}

Try out the following example prompts based on the MCP server you have configured:

{% tabs %}
{% tabsitem #test-api title="API server" %}

**Example prompts:**
- `Create a new user in my Clikkle project`
- `List all databases in my project`
- `Show me the collections in my database`
- `Create a new document in my collection`
- `Delete a specific user by ID`

{% /tabsitem %}

{% tabsitem #test-docs title="Docs server" %}

**Example prompts:**
- `How do I set up real-time subscriptions in Clikkle?`
- `Show me how to authenticate users with OAuth`
- `What are the best practices for database queries?`
- `How do I implement file uploads with Clikkle Storage?`
- `Show me an example of using Clikkle Functions`

{% /tabsitem %}

{% /tabs %}

![Implement OAuth authentication in Clikkle](/clikkle/images/docs/mcp/opencode/oauth-question.png)

{% /section %}

