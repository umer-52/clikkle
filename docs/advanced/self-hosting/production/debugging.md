---
layout: article
title: Debug
description: Master debugging techniques for self-hosted Clikkle. Discover best practices and tools for troubleshooting and maintaining a robust deployment.
---

Clikkle comes with a few built-in tools and methods that easily debug and investigate issues on your Clikkle stack environment.

# Doctor CLI {% #doctor-cli %}

The doctor CLI helps you validate your server health and best practices. Using the Doctor CLI, you can verify your server configuration for best practices, validate your Clikkle stack connectivity and storage read and write access, and available storage space.

To run the Doctor check, simply run the following command from your terminal. You might need to replace 'clikkle' with your Clikkle Docker container ID. To find out what's your container ID, you can run `docker ps` command (more on that, in the next section).

```bash
docker exec clikkle doctor
```

# Logs {% #logs %}

Checking your Clikkle containers can be a great way to pinpoint where and what exactly happens inside your Clikkle services. You can list your Clikkle containers using the following command in your terminal:

```bash
docker ps
```

The output of this command will show you a list of all your running Docker containers, their ID's, uptime, and open ports. You can use each container ID to get a list of all the container `stdout` and `stderr` logs by using the following command:

```bash
docker logs [CONTAINER-ID]
```

# Status codes {% #status-codes %}

Clikkle uses conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the 2xx range indicate success. Codes in the 4xx range indicate an error that failed given the information provided (e.g., a required parameter was omitted, invalid input, etc.). Codes in the 5xx range indicate an error with the Clikkle server, but these are rare.

{% arrow_link href="/docs/advanced/platform/response-codes" %}
Learn more about Clikkle status codes
{% /arrow_link %}

# Development mode {% #development-mode%}

When moving to dev mode, your server will produce much more verbose error messages. Instead of getting a general 500 error, you'll be able to view the exact error that happened on the server, debug the issue further or [report it to the Clikkle team](https://github.com/clikkle/clikkle/issues/new?body=500%20Error).

To change your dev environment, edit your server `_APP_ENV` environment variable from 'production' to 'development' in your `.env` file located in the `clikkle` directory in the location where you first installed Clikkle.

```text
_APP_ENV=development
_APP_OPENSSL_KEY_V1=your-secret-key
_APP_DOMAIN=localhost
```
{% info title="Applying changes" %}

After editing your `docker-compose.yml` or `.env` files, you will need to recreate your Clikkle stack by running the following compose command in your terminal.

```sh
docker compose up -d
```

You can verify if the changes have been successfully applied by running this command:

```sh
docker compose exec clikkle vars
```

{% /info %}


