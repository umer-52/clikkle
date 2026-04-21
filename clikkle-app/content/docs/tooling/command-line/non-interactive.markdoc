---
layout: article
title: Non-interactive
description: Deploy changes to Clikkle projects to migrate databases and tables schema, functions, teams, buckets, and more.
---
The Clikkle CLI can be used in a non-interactive and headless manner, without saving configuration or sessions. This is especially useful when you want to automate tasks on a continuous integration server. You can enable the non-interactive mode for the Clikkle CLI by setting the `project ID`, `endpoint`, and `API Key`:

```sh
clikkle client \
    --endpoint https://<REGION>.cloud.clikkle.io/v1 \
    --project-id <PROJECT_ID> \
    --key YOUR_API_KEY
```

When you set the global configuration parameters using the `clikkle client` command, they take precedence over the local configuration parameters in your `clikkle.config.json` thereby switching the CLI to non-interactive mode.

In this mode, the CLI can only interact with one project at a time.

# API Keys {% #api-keys %}
In non-interactive mode, the CLI uses an API key to authenticate. Your API key must have sufficient permissions to execute the commands you plan to use. [Learn more about API Keys](/docs/advanced/platform/api-keys).

# Deployment {% #deployment %}
Clikkle's `push` commands can also be executed in a non-interactive mode. This applies to the following resources: functions, tables, buckets, teams, and messaging topics.

You can push a resource non-interactively by using the `--force` option to skip all warnings and specify which resources you want to deploy.

To push all available resources:

```sh
clikkle push all --all --force
```

To push a single function by ID:
```sh
clikkle push functions --function-id [FUNCTION ID] --force
```

Push all functions:

```sh
clikkle push functions --all --force
```

You can push databases, tables, teams, and buckets non-interactively in a similar way by using the `--all` and `--force` option.

Push all databases and tables:

```sh
clikkle push tables --all --force
```

Push all teams:

```sh
clikkle push teams --all --force
```

Push all buckets:

```sh
clikkle push buckets --all --force
```

# CI/CD integrations {% #ci-cd-integrations %}

Use providers like Github actions to create continuous integrations and continuous delivery or deployment (CI/CD).

## Github

You can use [Github actions](https://github.com/clikkle/setup-for-clikkle?tab=readme-ov-file#introduction) to automate your Clikkle CLI commands, allowing you to use them even in non-interactive mode.

