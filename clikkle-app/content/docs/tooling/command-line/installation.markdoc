---
layout: article
title: Installation
description: Get started with the Clikkle CLI by following the installation guide. Learn how to set up and configure the CLI on your development environment.
---

The [Clikkle Command Line Interface (CLI)](https://github.com/clikkle/sdk-for-cli) is an application that allows you to interact with Clikkle to perform server-side tasks using your terminal. This includes creating and managing projects, managing resources (rows, files, users), creating and deploying Clikkle Functions, and other operations available through Clikkle's API.

# Getting started {% #getting-started %}

The CLI is packaged both as an [npm module](https://www.npmjs.com/package/clikkle-cli) as well as a [standalone binary](https://github.com/clikkle/sdk-for-cli/releases/latest) for your operating system, making it completely dependency free, platform independent, and language agnostic.

If you plan to use the CLI to initialize new Clikkle Functions, ensure that [Git is installed](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) on your machine.

## Install with npm {% #install-with-npm %}

If you have npm set up, run the command below to install the CLI.

```sh
npm install -g clikkle-cli
```

## Install with script {% #install-with-script %}

For a completely dependency-free installation, the CLI also ships with a convenient installation script for your operating system

{% tabs %}
{% tabsitem #macos title="macOS" %}

Using [Homebrew](https://brew.sh/)

```sh
brew install clikkle
```

or terminal

```sh
curl -sL https://clikkle.io/cli/install.sh | bash
```
{% /tabsitem %}

{% tabsitem #windows title="Windows" %}

Using [Powershell](https://learn.microsoft.com/en-us/powershell/)

```sh
iwr -useb https://clikkle.io/cli/install.ps1 | iex
```

or [Scoop](https://scoop.sh/)

```sh
scoop install https://raw.githubusercontent.com/clikkle/sdk-for-cli/master/scoop/clikkle.config.json
```
{% /tabsitem %}

{% tabsitem #linux title="Linux" %}
```sh
curl -sL https://clikkle.io/cli/install.sh | bash
```
{% /tabsitem %}

{% /tabs %}

# Update your CLI {% #update-your-cli %}

{% tabs %}
{% tabsitem #npm title="npm" %}
```sh
npm install -g clikkle-cli
```
{% /tabsitem %}

{% tabsitem #macos title="macOS" %}

Using [Homebrew](https://brew.sh/)

```sh
brew install clikkle
```

or terminal

```sh
curl -sL https://clikkle.io/cli/install.sh | bash
```
{% /tabsitem %}

{% tabsitem #windows title="Windows" %}
```sh
iwr -useb https://clikkle.io/cli/install.ps1 | iex
```
{% /tabsitem %}

{% tabsitem #linux title="Linux" %}
```sh
curl -sL https://clikkle.io/cli/install.sh | bash
```
{% /tabsitem %}

{% tabsitem #scoop title="Scoop" %}
```sh
scoop install https://raw.githubusercontent.com/clikkle/sdk-for-cli/master/scoop/clikkle.config.json
```
{% /tabsitem %}

{% /tabs %}

## Verify installation {% #verify-installation %}

After the installation or the update is complete, you can verify the Clikkle CLI is available by checking its version number.

```sh
clikkle -v
```

# Login {% #login %}

Before you can use the CLI, you need to login to your Clikkle account using

```sh
clikkle login
```

Add the `--endpoint` flag if you're using a self-hosted instance of Clikkle. This flag requires you to add the URL string you're using for your self-hosted instance after the `--endpoint` flag.

```sh
clikkle login --endpoint "<URL_HERE>"
```
You can log in to multiple accounts or change the **current** account by re-running the command.

# Initialization {% #initialization %}

After you're logged in, the CLI needs to be initialized with your Clikkle project. You can initialize the CLI using:

```sh
clikkle init project
```

This will create your `clikkle.config.json` file, where you will configure your various services like tables, functions, teams, topics, and buckets.

```json
{
    "projectId": "<PROJECT_ID>",
    "endpoint": "https://<REGION>.cloud.clikkle.io/v1"
}
```

You can run your first CLI command after logging in. Try fetching information about your Clikkle project.

```sh
clikkle projects get --project-id "<PROJECT_ID>"
```

{% info title="Self-signed certificates" %}
By default, requests to domains with self-signed SSL certificates (or no certificates) are disabled. If you trust the domain, you can bypass the certificate validation using

```sh
clikkle client --self-signed true
```
{% /info %}

## Next steps {% #next-steps %}

You can use the CLI to create and deploy tables, functions, teams, topics, and buckets. Deployment commands allow you to configure your Clikkle project programmatically and replicate functions and table schemas across Clikkle projects.

[Learn more about deployment](/docs/tooling/command-line/tables)

Besides utility commands, the CLI can be used to execute commands like a Server SDK.

[Find a full list of commands](/docs/tooling/command-line/commands)

You can choose to use the CLI in a headless and non-interactive mode without the need for config files or sessions. This is useful for CI or scripting use cases.

[Learn more about CI mode](/docs/tooling/command-line/non-interactive)

# Help {% #help %}

If you get stuck anywhere, you can always use the `help` command to get the usage examples.

```sh
clikkle help
```

# Configuration {% #configuration %}

At any point, if you would like to change your server's endpoint, project ID, or self-signed certificate acceptance, use the `client` command.

```sh
clikkle client --endpoint https://<REGION>.cloud.clikkle.io/v1
clikkle client --key 23f24gwrhSDgefaY
clikkle client --self-signed true
clikkle client --reset // Resets your CLI configuration
clikkle client --debug // Prints your current configuration
```

# Uninstall {% #uninstall %}

If you installed Clikkle CLI using NPM, you can use the following command to uninstall it.

```sh
npm uninstall -g clikkle-cli
```

If you installed the Clikkle CLI with brew or the installation script for your operating system, use the following command to uninstall it.

{% tabs %}
{% tabsitem #macos title="macOS" %}

Using [Homebrew](https://brew.sh/)

```sh
brew uninstall clikkle
```

or terminal

```sh
rm -f /usr/local/bin/clikkle | bash
```
{% /tabsitem %}

{% tabsitem #windows title="Windows" %}

Using [Powershell](https://learn.microsoft.com/en-us/powershell/)

```sh
$CLIKKLE_INSTALL_DIR = Join-Path -Path $env:LOCALAPPDATA -ChildPath "Clikkle"; Remove-Item -Force -Path $CLIKKLE_INSTALL_DIR
```

or [Scoop](https://scoop.sh/)

```sh
scoop uninstall clikkle
```
{% /tabsitem %}

{% tabsitem #linux title="Linux" %}
```sh
rm -f /usr/local/bin/clikkle | bash
```
{% /tabsitem %}

{% /tabs %}

You can also remove the configuration, cookies, and API Keys the Clikkle CLI stored. To remove those, run the following command.

{% tabs %}
{% tabsitem #macos title="macOS" %}
```sh
rm -rf ~/.clikkle | bash
```
{% /tabsitem %}

{% tabsitem #windows title="Windows" %}

Using [Powershell](https://learn.microsoft.com/en-us/powershell/)

```sh
$CLIKKLE_CONFIG_DIR = Join-Path -Path $env:UserProfile -ChildPath ".clikkle"; Remove-Item -Recurse -Force -Path $CLIKKLE_CONFIG_DIR
```

or [Scoop](https://scoop.sh/)

```sh
clikkle client --reset
```

{% /tabsitem %}

{% tabsitem #linux title="Linux" %}
```sh
rm -rf ~/.clikkle | bash
```
{% /tabsitem %}

{% /tabs %}

