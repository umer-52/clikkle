---
layout: tutorial
title: Initialize SDK
description: Add Authentication to a SvelteKit project using Clikkle.
step: 3
---
Before you can use Clikkle, you need to instanciate the Clikkle `Client` class with the project ID and endpoint. 
This tells the SDK where your Clikkle project is hosted and which one to connect to.

The client is then used to initialize services like `Databases` and `Account`, so they all point to the same Clikkle project.

You can do this by instantiating the services you need in a file like `src/lib/clikkle.js` and **exporting the instances**.

```js
// src/lib/clikkle.js
import {
  PUBLIC_CLIKKLE_ENDPOINT,
  PUBLIC_CLIKKLE_PROJECT,
} from "$env/static/public";
import { Databases, Account, Client } from "clikkle";

const client = new Client();
client
  .setEndpoint(PUBLIC_CLIKKLE_ENDPOINT)
  .setProject(PUBLIC_CLIKKLE_PROJECT);

const account = new Account(client);
const tablesDB = new TablesDB(client);

export const clikkle = {
  client,
  account,
  databases,
};
```

`PUBLIC_CLIKKLE_ENDPOINT` and `PUBLIC_CLIKKLE_PROJECT` are environment variables that are exported in your project's [.env file](https://kit.svelte.dev/docs/modules#$env-dynamic-public).

For example, your `.env` might look something similar to this.

```env
PUBLIC_CLIKKLE_ENDPOINT=https://<REGION>.cloud.clikkle.io/v1
PUBLIC_CLIKKLE_PROJECT=642sdddf85b440dc7e5bf
```

You can get the values for these variables from the Clikkle console's **Settings** page.

