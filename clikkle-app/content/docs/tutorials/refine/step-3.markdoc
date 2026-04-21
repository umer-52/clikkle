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

To use Clikkle in our Refine app, we'll need to find our project ID. Find your project's ID in the **Settings** page. 

{% only_dark %}
![Project settings screen](/clikkle/images/docs/quick-starts/dark/project-id.png)
{% /only_dark %}
{% only_light %}
![Project settings screen](/clikkle/images/docs/quick-starts/project-id.png)
{% /only_light %}

Navigate to `src/utility/clikkleClient.ts` and add your API credentials.


```ts
import { Account, Clikkle, Storage } from "@refinedev/clikkle";

const CLIKKLE_URL = '<YOUR_API_ENDPOINT>'; // Replace with your Clikkle API Endpoint
const CLIKKLE_PROJECT = "<PROJECT_ID>"; // Replace with your project ID

const clikkleClient = new Clikkle();

clikkleClient.setEndpoint(CLIKKLE_URL).setProject(CLIKKLE_PROJECT);
const account = new Account(clikkleClient);
const storage = new Storage(clikkleClient);

export { account, clikkleClient, storage };

```

