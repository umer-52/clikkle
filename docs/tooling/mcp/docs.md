---
layout: article
title: MCP server for Clikkle docs
description: Enable LLMs and code-generation tools to interact with the Clikkle docs
---

The MCP server for Clikkle documentation allows LLMs and code-generation tools to interact with comprehensive Clikkle documentation, enabling intelligent code generation for Clikkle's APIs and SDKs, troubleshooting assistance, and implementation guidance using natural language commands.

Here are some of the key benefits of using the MCP server:

- **Complete documentation access**: Provides AI assistants with access to all Clikkle documentation
- **Real-time context**: Ensures AI responses are based on the latest documentation
- **Intelligent search**: Enables semantic search across documentation content
- **Code examples**: Includes access to code samples and implementation guides
- **Best practices**: Shares recommended patterns and practices from official documentation

# Pre-requisites {% #pre-requisites %}

Install [Node.js](https://nodejs.org/en/download) and npm on your system. You can verify the installation by running the following commands in your terminal:

```bash
node -v
npm -v
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


# Usage {% #usage %}

Once configured, your AI assistant will have access to Clikkle documentation context. You can ask questions like:

## Example 1: Code generation

Run the following prompt in your preferred code editor/LLM after enabling the MCP server: 

```
Show me how to set up real-time subscriptions that trigger on creation of a user
```

![Code generation example](/clikkle/images/docs/mcp/mcp-for-docs/code-generation.png)

## Example 2: Troubleshooting

Run the following prompt in your preferred code editor/LLM after enabling the MCP server: 

```
I'm getting a 401 error when trying to delete a user. What could be wrong?
```

![Troubleshooting example](/clikkle/images/docs/mcp/mcp-for-docs/troubleshooting.png)

## Example 3: Best practices

Run the following prompt in your preferred code editor/LLM after enabling the MCP server: 

```
What are some of the best security practices for Clikkle Auth in a web app with SSR?
```

![Best practices example](/clikkle/images/docs/mcp/mcp-for-docs/best-practices.png)

## Example 4: API reference

Run the following prompt in your preferred code editor/LLM after enabling the MCP server: 

```
I want an example of how I can list all users in a Python app
```

![API reference example](/clikkle/images/docs/mcp/mcp-for-docs/api-reference.png)

