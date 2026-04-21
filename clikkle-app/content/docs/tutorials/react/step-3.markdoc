---
layout: tutorial
title: Set up Clikkle
description: Import and initialize Clikkle for your react application.
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

Then, under **Add a platform**, add a **Web app**. The **Hostname** should be localhost. 

{% only_dark %}
![Add a platform](/clikkle/images/docs/quick-starts/dark/add-platform.png)
{% /only_dark %}
{% only_light %}
![Add a platform](/clikkle/images/docs/quick-starts/add-platform.png)
{% /only_light %}

You can skip optional steps.

## Initialize Clikkle SDK {% #init-sdk %}

To use Clikkle in our React app, we'll need to find our project ID. Find your project's ID in the **Settings** page. 

{% only_dark %}
![Project settings screen](/clikkle/images/docs/quick-starts/dark/project-id.png)
{% /only_dark %}
{% only_light %}
![Project settings screen](/clikkle/images/docs/quick-starts/project-id.png)
{% /only_light %}

Create a new file `src/lib/clikkle.js` to hold our Clikkle related code.
Only one instance of the `Client()` class should be created per app.
Add the following code to it, replacing `<PROJECT_ID>` with your project ID.

```client-web
import { Client, TablesDB, Account } from "clikkle";

const client = new Client();
client
  .setEndpoint("https://<REGION>.cloud.clikkle.io/v1")
  .setProject("<PROJECT_ID>"); // Replace with your project ID

export const account = new Account(client);
export const tablesDB = new TablesDB(client);
```

