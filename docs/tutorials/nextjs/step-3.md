---
layout: tutorial
title: Set up Clikkle
description: Import and configure a project with Clikkle Cloud.
step: 3
---

## Create project {% #create-project %}

Head to the [Clikkle Console](https://cloud.clikkle.io/console).

{% only_dark %}
![Create project screen](/clikkle/images/docs/quick-starts/dark/create-project.png)
{% /only_dark %}
{% only_light %}
![Create project screen](/clikkle/images/docs/quick-starts/create-project.png)
{% /only_light %}

If this is your first time using Clikkle, create an account and create your first project.

Then, under **Add a platform**, add a **Web app**.
The **Hostname** should be `localhost`.

{% only_dark %}
![Add a platform](/clikkle/images/docs/quick-starts/dark/add-platform.png)
{% /only_dark %}
{% only_light %}
![Add a platform](/clikkle/images/docs/quick-starts/add-platform.png)
{% /only_light %}

You can skip the optional steps.

## Environment variables {% #environment-variables %}

To connect to Clikkle in our app, we'll need to configure our project endpoint and project ID.
We keep the secrets by using environment variables for the endpoint and project ID.
Your project ID is located in the **Settings** page in the Clikkle console.

{% only_dark %}
![Project settings screen](/clikkle/images/docs/quick-starts/dark/project-id.png)
{% /only_dark %}
{% only_light %}
![Project settings screen](/clikkle/images/docs/quick-starts/project-id.png)
{% /only_light %}

Add a `.env.local` file to the root directory and add the following code to it, replacing `PROJECT_ID` with your project id.

```
NEXT_PUBLIC_CLIKKLE_ENDPOINT=https://<REGION>.cloud.clikkle.io/v1
NEXT_PUBLIC_CLIKKLE_PROJECT=PROJECT_ID
```

## Initialize Clikkle SDK {% #init-sdk %}

Create a new file `lib/clikkle.ts` for the Clikkle related code.
Only one instance of the `Client()` class should be created per app.
Add the following code to it.

```ts
// lib/clikkle.ts

import { Client, Account, TablesDB } from "clikkle";

const client = new Client();

client
    .setEndpoint(process.env.NEXT_PUBLIC_CLIKKLE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_CLIKKLE_PROJECT!);

export const account = new Account(client);
export const tablesDB = new TablesDB(client);
export { ID } from "clikkle";
```

