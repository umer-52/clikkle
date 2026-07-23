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

To connect to Clikkle in our app, we'll need to use sensitive information.
We keep the secrets by using environment variables for the endpoint and project id.
Your project id is located in the **Settings** page in the Clikkle console.

{% only_dark %}
![Project settings screen](/clikkle/images/docs/quick-starts/dark/project-id.png)
{% /only_dark %}
{% only_light %}
![Project settings screen](/clikkle/images/docs/quick-starts/project-id.png)
{% /only_light %}

Add a `.env` file to the root directory and add the following code to it, replacing `PROJECT_ID` with your project id.

```
VITE_CLIKKLE_ENDPOINT=https://<REGION>.cloud.clikkle.io/v1
VITE_CLIKKLE_PROJECT=PROJECT_ID
```

## Initialize Clikkle SDK {% #init-sdk %}

Create a new file `clikkle.js` for the Clikkle related code.
Only one instance of the `Client()` class should be created per app.
Add the following code to it.

```ts
// clikkle.ts

import { Client, TablesDB, Account } from "clikkle";

const url: string = import.meta.env.VITE_CLIKKLE_ENDPOINT;
const project: string = import.meta.env.VITE_CLIKKLE_PROJECT;

const client: Client = new Client();

client.setEndpoint(url).setProject(project);

export const account: Account = new Account(client);
export const tablesDB: TablesDB = new TablesDB(client);
```

