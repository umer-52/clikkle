---
layout: article
title: MCP server for Clikkle API
description: Enable LLMs and code-generation tools to interact with the Clikkle API
---

The MCP server for Clikkle API allows LLMs and code-generation tools to interact with the Clikkle platform and perform various operations on your Clikkle resources, such as creating users, managing databases, and more, using natural language commands.

Here are some of the key benefits of using the MCP server:

- **Direct API interaction**: Enables LLMs to perform actions directly on your Clikkle project
- **Real-time data access**: Allows LLMs to fetch and manipulate live data from your Clikkle instance
- **Simplified workflows**: Facilitates complex operations through simple natural language prompts
- **Customizable tools**: Offers a range of tools for different Clikkle services, which can be enabled as needed

# Pre-requisites {% #pre-requisites %}

## Clikkle API key

Before launching the MCP server, you must [set up an Clikkle project](https://cloud.clikkle.io) and create an **API key** with the necessary scopes enabled.

{% only_light %}
![Clikkle API key](/clikkle/images/docs/mcp/clikkle/clikkle-api-secret.png)
{% /only_light %}
{% only_dark %}
![Clikkle API key](/clikkle/images/docs/mcp/clikkle/dark/clikkle-api-secret.png)
{% /only_dark %}

Ensure you save the **API key** along with the **project ID**, **region** and **endpoint URL** from the Settings page of your project as you'll need them later.

## Install uv

Install [uv](https://docs.astral.sh/uv/getting-started/installation/) on your system with:

{% tabs %}
{% tabsitem #uv-linux-macos title="Linux and MacOS" %}

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

{% /tabsitem %}

{% tabsitem #uv-windows title="Windows" %}

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
``` 

{% /tabsitem %}
{% /tabs %}

You can verify the installation by running the following command in your terminal:

```bash
uv
```

# Installation {% #installation %}

You can add the MCP server to various AI tools and code editors:

{% only_light %}
{% cards %}

{% cards_item href="/docs/tooling/mcp/claude-desktop" title="Claude Desktop" image="/images/docs/mcp/logos/claude.svg" %}
{% /cards_item %}

{% cards_item href="/docs/tooling/mcp/claude-code" title="Claude Code" image="/images/docs/mcp/logos/claude.svg" %}
{% /cards_item %}

{% cards_item href="/docs/tooling/mcp/zenflow" title="Zenflow" image="/images/docs/mcp/logos/zenflow.svg" %}
{% /cards_item %}

{% cards_item href="/docs/tooling/mcp/cursor" title="Cursor" image="/images/docs/mcp/logos/cursor-ai.svg" %}
{% /cards_item %}

{% cards_item href="/docs/tooling/mcp/windsurf" title="Windsurf Editor" image="/images/docs/mcp/logos/windsurf.svg" %}
{% /cards_item %}

{% cards_item href="/docs/tooling/mcp/vscode" title="VS Code" image="/images/docs/mcp/logos/vscode.svg" %}
{% /cards_item %}

{% cards_item href="/docs/tooling/mcp/opencode" title="OpenCode" image="/images/docs/mcp/logos/opencode.svg" %}
{% /cards_item %}

{% cards_item href="/docs/tooling/mcp/antigravity" title="Google Antigravity" image="/images/docs/mcp/logos/google-antigravity.svg" %}
{% /cards_item %}

{% /cards %}
{% /only_light %}

{% only_dark %}
{% cards %}

{% cards_item href="/docs/tooling/mcp/claude-desktop" title="Claude Desktop" image="/images/docs/mcp/logos/dark/claude.svg" %}
{% /cards_item %}

{% cards_item href="/docs/tooling/mcp/claude-code" title="Claude Code" image="/images/docs/mcp/logos/dark/claude.svg" %}
{% /cards_item %}

{% cards_item href="/docs/tooling/mcp/zenflow" title="Zenflow" image="/images/docs/mcp/logos/dark/zenflow.svg" %}
{% /cards_item %}

{% cards_item href="/docs/tooling/mcp/cursor" title="Cursor" image="/images/docs/mcp/logos/dark/cursor-ai.svg" %}
{% /cards_item %}

{% cards_item href="/docs/tooling/mcp/windsurf" title="Windsurf Editor" image="/images/docs/mcp/logos/dark/windsurf.svg" %}
{% /cards_item %}

{% cards_item href="/docs/tooling/mcp/vscode" title="VS Code" image="/images/docs/mcp/logos/dark/vscode.svg" %}
{% /cards_item %}

{% cards_item href="/docs/tooling/mcp/opencode" title="OpenCode" image="/images/docs/mcp/logos/dark/opencode.svg" %}
{% /cards_item %}

{% cards_item href="/docs/tooling/mcp/antigravity" title="Google Antigravity" image="/images/docs/mcp/logos/dark/google-antigravity.svg" %}
{% /cards_item %}

{% /cards %}
{% /only_dark %}

{% info title="Want to integrate your AI tool?" %}

If you are building an AI code-generation tool that can integrate with MCP servers and would like to collaborate, join our [Technology Partners](https://clikkle.io/integrations/technology-partner) program.

{% /info %}


## Command-line arguments

Database tools are enabled by default. In addition you can pass arguments to `uvx mcp-server-clikkle [args]` to enable other MCP tools for various Clikkle APIs.

| Argument | Description |
| --- | --- |
| `--tablesdb` | Enables the TablesDB API |
| `--users` | Enables the Users API |
| `--teams` | Enables the Teams API |
| `--storage` | Enables the Storage API |
| `--functions` | Enables the Functions API |
| `--messaging` | Enables the Messaging API |
| `--locale` | Enables the Locale API |
| `--avatars` | Enables the Avatars API |
| `--databases` | Enables the legacy Databases API |
| `--all` | Enables all Clikkle APIs |

{% info title="Enable only necessary MCP tools" %}
When an MCP tool is enabled, the tool's definition is passed to the LLM, using up tokens from the model's available context window. As a result, the effective context window is reduced. Some IDEs may return errors if too many tools are enabled for the same reason.

The default Clikkle MCP server ships with only the Databases tools (our most commonly used API) enabled to stay within these limits. Additional tools can be enabled using the flags above.
{% /info %}

# Usage {% #usage %}

Once configured, your AI assistant will have access to your Clikkle project. You can ask questions like:

## Example 1: List users

Run the following prompt in your preferred code editor/LLM after enabling the MCP server: 

```
List users in my Clikkle project
```

![List users in Clikkle project](/clikkle/images/docs/mcp/claude-desktop/claude-list-users.png)

## Example 2: Search a site

Run the following prompt in your preferred code editor/LLM after enabling the MCP server: 

```
Get the details of my portfolio site from Clikkle
```

![Search for portfolio site in Clikkle project](/clikkle/images/docs/mcp/vscode/copilot-chat.png)

## Example 3: Create a user

Run the following prompt in your preferred code editor/LLM after enabling the MCP server: 

```
Add a user john.doe@example.com to the Clikkle project
```

![Create user in Clikkle project](/clikkle/images/docs/mcp/cursor/cursor-create-user.png)

