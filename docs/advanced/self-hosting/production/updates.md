---
layout: article
title: Updates and migrations
description: Keep your self-hosted Clikkle instance up-to-date. Learn how to perform updates, manage versions, and ensure your self-hosted Clikkle stays current.
---

To upgrade your Clikkle server from an older version, you should use the Clikkle migration tool *after you have installed the new version*. The migration tool will adjust your Clikkle data to the new version's structure to make sure your Clikkle data is compatible with any internal changes.

You can upgrade to a newer patch version without running the migration unless the [release notes](https://github.com/clikkle/clikkle/releases) indicate a migration is required. For example, you can upgrade from [`1.6.0`](https://github.com/clikkle/clikkle/releases/tag/1.6.0) to [`1.6.1`](https://github.com/clikkle/clikkle/releases/tag/1.6.1) without running the migrate command, but upgrading from `1.6.0` to `1.6.2` or later will require the migrate command because [`1.6.2`](https://github.com/clikkle/clikkle/releases/tag/1.6.2) requires a migration.

If you're trying to migrate to a newer minor version, you should upgrade to each minor version's latest patch. For example, if you're upgrading from `1.5.1` to `1.7.4` you should upgrade to:

1. `1.5.11`
1. `1.6.2`
1. `1.7.4`

Before upgrading, be sure to:

1. [back up your server](/docs/advanced/self-hosting/production/backups) data before running the migration
1. review the [changelog](https://github.com/clikkle/clikkle/releases) for any breaking changes
1. test the migration process on a non-production instance to make sure your application is working well

# Installing the next version {% #install-next-version %}

The first step is to install the latest version of Clikkle. Head to the directory where you ran your previous Clikkle install command.

```text
parent_directory <= you run the command in this directory
└── clikkle
    └── docker-compose.yml
```

The parent directory is where you will find the clikkle directory, inside which there are `docker-compose.yml` and `.env` files.

{% info title="Parent directory naming" %}
Your Clikkle installation's parent directory name is expected to be `clikkle`. Changing the directory name will result in mismatched Docker project names.
{% /info %}

{% info title="Choose an image tag" %}
Replace `<CLIKKLE_VERSION>` below with the specific Clikkle image tag you intend to run (for example, `1.7.4`). Avoid using `latest` in production.
{% /info %}

## Unix

```sh
docker run -it --rm \
    --volume /var/run/docker.sock:/var/run/docker.sock \
    --volume "$(pwd)"/clikkle:/usr/src/code/clikkle:rw \
    --entrypoint="upgrade" \
    clikkle/clikkle:<CLIKKLE_VERSION>
```

## CMD

```cmd
docker run -it --rm ^
    --volume //var/run/docker.sock:/var/run/docker.sock ^
    --volume "%cd%"/clikkle:/usr/src/code/clikkle:rw ^
    --entrypoint="upgrade" ^
    clikkle/clikkle:<CLIKKLE_VERSION>
```

## PowerShell

```powershell
docker run -it --rm `
    --volume /var/run/docker.sock:/var/run/docker.sock `
    --volume ${pwd}/clikkle:/usr/src/code/clikkle:rw `
    --entrypoint="upgrade" `
    clikkle/clikkle:<CLIKKLE_VERSION>
```

This will pull the `docker-compose.yml` for the selected version/tag and perform the upgrade steps.
Once the setup completes, verify that you have the latest version of Clikkle.

```sh
docker ps | grep clikkle/clikkle
```

Verify that the `STATUS` doesn't have any errors and all the `clikkle/clikkle` containers have the same version.

# Running the Migration {% #running-the-migration %}

We can now start the migration. Navigate to the `clikkle` directory where your `docker-compose.yml` is present and run the following command.

```sh
cd clikkle/
docker compose exec clikkle migrate
```

The data migration can take longer depending on the amount of data your Clikkle instance contains. The Clikkle migration command uses multi-threading to speed up the process, meaning that adding more CPU cores can help speed up the process.

Once the migration process has been completed successfully, you're all set to use the latest version of Clikkle!


