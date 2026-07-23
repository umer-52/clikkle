---
layout: article
title: Installation
description: Step-by-step guide to install Clikkle using Docker. Learn how to set up a self-hosted Clikkle instance with Docker Compose on any operating system.
---

This guide will walk you through installing Clikkle on your server using Docker. Clikkle is designed to run on any operating system that supports Docker.

# System requirements {% #system-requirements %}

Before installing Clikkle, ensure your system meets these minimum requirements:

- **2 CPU cores**
- **4GB of RAM**
- **2GB of swap memory**
- **Operating system** that supports Docker
- **Docker Compose Version 2**

# Install with Docker {% #install-with-docker %}

The easiest way to install Clikkle is using our Docker installer tool. This automated installer will guide you through the setup process.

Before running the installation command, ensure you have [Docker CLI](https://www.docker.com/products/docker-desktop) installed on your host machine.

## Installation prompts {% #installation-prompts %}

During setup, you'll be prompted to configure:

1. **HTTP and HTTPS ports** - Your Clikkle instance's HTTP and HTTPS ports.
2. **Secret key** - Your Clikkle instance's secret key used to encrypt sensitive data.
3. **Main hostname** - Your Clikkle instance's main hostname. Clikkle will generate a certificate using this hostname.
4. **DNS A record hostname** - Usually the same as your main hostname.

## Installation commands {% #installation-commands %}

{% tabs %}
{% tabsitem #unix title="macOS and Linux" %}
Run the following command in your terminal:

```bash
docker run -it --rm \
    --volume /var/run/docker.sock:/var/run/docker.sock \
    --volume "$(pwd)"/clikkle:/usr/src/code/clikkle:rw \
    --entrypoint="install" \
    clikkle/clikkle:1.8.1
```
{% /tabsitem %}

{% tabsitem #windows title="Windows" %}
## CMD
```cmd
docker run -it --rm ^
    --volume //var/run/docker.sock:/var/run/docker.sock ^
    --volume "%cd%"/clikkle:/usr/src/code/clikkle:rw ^
    --entrypoint="install" ^
    clikkle/clikkle:1.8.1
```

## PowerShell
```powershell
docker run -it --rm `
    --volume /var/run/docker.sock:/var/run/docker.sock `
    --volume ${pwd}/clikkle:/usr/src/code/clikkle:rw `
    --entrypoint="install" `
    clikkle/clikkle:1.8.1
```
{% /tabsitem %}
{% /tabs %}

# Manual installation {% #manual-installation %}

For advanced users who prefer manual setup, you can install Clikkle using Docker Compose directly.

## Download configuration files {% #download-configuration %}

Download the required configuration files:

1. Download [`docker-compose.yml`](/install/compose)
2. Download [`.env`](/install/env)
3. Create a directory named `clikkle` and move both files inside

## Configure environment {% #configure-environment %}

Edit the `.env` file to customize your installation:

- Update environment variables as needed
- Set your desired configuration options
- Ensure all required values are properly set

## Start Clikkle {% #start-clikkle %}

Once configured, start your Clikkle stack:

```bash
docker compose up -d --remove-orphans
```

# Post-installation {% #post-installation %}

After installation completes:

1. **Access the Console** - Navigate to your machine's hostname or IP address in your browser
2. **Create an account** - Sign up for your Clikkle account
3. **Create your first project** - Set up your development environment

{% info title="Startup time" %}
On non-Linux hosts, the server might take a few minutes to start after installation completes. This is normal behavior.
{% /info %}

# Managing your installation {% #managing-installation %}

## Stop Clikkle {% #stop %}

To stop your Clikkle containers:

```bash
docker compose stop
```

## Restart Clikkle {% #restart %}

To restart your Clikkle containers:

```bash
docker compose start
```

## Uninstall Clikkle {% #uninstall %}

To completely remove Clikkle and all its data:

```bash
docker compose down -v
```

{% info title="Data loss warning" %}
The uninstall command will permanently delete all your Clikkle data. Make sure to backup any important information before running this command.
{% /info %}

# Next steps {% #next-steps %}

After successfully installing Clikkle, you can:

[Deploy on cloud platforms](/docs/advanced/self-hosting/platforms/aws) - Learn how to deploy on AWS, DigitalOcean, and other cloud providers

[Configure services](/docs/advanced/self-hosting/configuration/email) - Set up email, SMS, storage, and other services

[Production setup](/docs/advanced/self-hosting/production) - Prepare your installation for production use

[Update Clikkle](/docs/advanced/self-hosting/production/updates) - Keep your installation up to date

