---
layout: article
title: Clikkle MCP and Google Antigravity
description: Learn how to add the Clikkle MCP servers to Agent Manager in Google Antigravity to interact with both the Clikkle API and documentation.
---

Learn how you can add the Clikkle MCP servers to Agent Manager in Google Antigravity to interact with both the Clikkle API and documentation.

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

To add the Clikkle MCP server, open Antigravity and go to the drop-down (...) menu in the Agent window . From there, navigate to Manage MCP Servers in the MCP Store, and then click View raw config in the main panel to add your custom MCP server.

{% tabs %}
{% tabsitem #api-only title="API server" %}

Update the `mcp_config.json` file to include the API server:

```json
{
  "mcpServers": {
    "clikkle-api": {
      "command": "uvx",
      "args": [
        "mcp-server-clikkle",
        "--users"
      ],
      "env": {
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

Update the `mcp_config.json` file to include the docs server:

```json
{
  "mcpServers": {
      "clikkle-docs": {
          "command": "npx",
          "args": [
              "mcp-remote",
              "https://mcp-for-docs.clikkle.io"
          ]
      }
  }
}
```

{% /tabsitem %}
{% /tabs %}

Head back to the Managed MCP Server page and click refresh.

{% /section %}

{% section #step-2 step=2 title="Test the integration" %}

Open **Agent Manager** in Antigravity to test your MCP integrations. You can try out the following example prompts based on the MCP server you have configured:

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

![Search for portfolio site in Clikkle project](/clikkle/images/docs/mcp/antigravity/agent-chat.png)

{% /section %}

