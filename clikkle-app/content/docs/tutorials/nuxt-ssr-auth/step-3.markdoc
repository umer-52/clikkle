---
layout: tutorial
title: Initialize SDK
description: Add authentication to a Nuxt project using Clikkle.
step: 3
---
Before you can use Clikkle, you need to create the Clikkle `Client` and set the project ID and endpoint.
The client is then used to create services like `Databases` and `Account`, so they all point to the same Clikkle project.

Create a function to the build services you need in a file like `server/lib/clikkle.js` and **exporting the instances**.

As part of the function, set the current user's session if they are logged in. This is done by accessing the session cookie from the request and calling the `setSession(session)` with the cookie value.

{% info title="Clikkle client security" %}
We recommend creating a new `Client` instance for each request.
When using Clikkle in server-integrations, it's important to **never share a `Client` instance** between two requests.
Doing so could create security vulnerabilities.
{% /info %}

```js
// server/lib/clikkle.js
import { Client, Account } from "node-clikkle";

export const SESSION_COOKIE = "my-custom-session";

export function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.PUBLIC_CLIKKLE_ENDPOINT)
    .setProject(process.env.PUBLIC_CLIKKLE_PROJECT)
    .setKey(process.env.CLIKKLE_KEY);

  return {
    get account() {
      return new Account(client);
    },
  };
}

export function createSessionClient(event) {
  const config = useRuntimeConfig(event);

  const client = new Client()
    .setEndpoint(config.public.clikkleEndpoint)
    .setProject(config.public.clikkleProjectId);

  const session = getCookie(event, SESSION_COOKIE);
  if (session) {
    client.setSession(session);
  }

  return {
    get account() {
      return new Account(client);
    },
  };
}
```

`config.clikkleApiKey`, `config.public.clikkleEndpoint` and `config.public.clikkleProjectId` are Nuxt runtime configuration variables. Create a [nuxt.config.js](https://nuxt.com/docs/api/configuration/nuxt-config) file in the root of your project and add the following code to set the runtime configuration.

```js
export default defineNuxtConfig({
  runtimeConfig: {
    clikkleKey: process.env.CLIKKLE_KEY,
    public: {
      clikkleEndpoint: process.env.PUBLIC_CLIKKLE_ENDPOINT,
      clikkleProjectId: process.env.PUBLIC_CLIKKLE_PROJECT,
    },
  },
});
```

Now you can use `.env` files to set the environment variables for your project. Retrieve the values for these variables from the Clikkle console.

The `PUBLIC_CLIKKLE_ENDPOINT` is the endpoint of your Clikkle project, and the `PUBLIC_CLIKKLE_PROJECT` is the ID of the project you want to use.
You can get the values for these variables from the Clikkle console.

{% only_dark %}
![Create project screen](/clikkle/images/docs/quick-starts/dark/create-project.png)
{% /only_dark %}

{% only_light %}
![Create project screen](/clikkle/images/docs/quick-starts/create-project.png)
{% /only_light %}

The `CLIKKLE_KEY` is an Clikkle API key with the necessary permissions to create new sessions.

For this tutorial you'll need an API key with the following scopes:

| Category  {% width=120 %}                              | Required scopes                                        | Purpose                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| Sessions                                               | `sessions.write`                                       | Allows API key to create, update, and delete sessions. |

{% only_dark %}
![Server integrations](/clikkle/images/docs/quick-starts/dark/integrate-server.png)
{% /only_dark %}

{% only_light %}
![Server integrations](/clikkle/images/docs/quick-starts/integrate-server.png)
{% /only_light %}

For example, your `.env` might look something similar to this.

```env
CLIKKLE_KEY=<YOUR_API_KEY>
PUBLIC_CLIKKLE_ENDPOINT=https://<REGION>.cloud.clikkle.io/v1
PUBLIC_CLIKKLE_PROJECT=<PROJECT_ID>
```

