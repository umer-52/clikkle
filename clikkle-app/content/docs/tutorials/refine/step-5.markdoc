---
layout: tutorial
title: Add database
description: Add a database to your React application using Clikkle Web SDK.
step: 5
---
# Create table {% #create-table %}
In Clikkle, data is stored as a table of rows. Create a table in the [Clikkle Console](https://cloud.clikkle.io/) to store our ideas.

{% only_dark %}
![Create project screen](/clikkle/images/docs/tutorials/refine/posts-table-dark.png)
{% /only_dark %}
{% only_light %}
![Create project screen](/clikkle/images/docs/tutorials/refine/posts-table-light.png)
{% /only_light %}

Create a new table with the following columns:
| Field       | Type   | Required |
|-------------|--------|----------|
| title       | Varchar | Yes      |
| content     | Text    | Yes      |

## Connect database to the Refine app {% #blog-context %}

Now that you have a table to hold blog post contents, we can read and write to it from our app. 



To integrate Clikkle API with the Refine App,
- Add a resources array to the `<Refine />` component in `App.tsx`
- Include your `Clikkle Database ID` in both `dataProvider` and `liveProvider`, and specify the `Clikkle Table ID` in the resource name property.


```ts
import { dataProvider, liveProvider } from '@refinedev/clikkle';
...

<Refine
  dataProvider={dataProvider(clikkleClient, {
    databaseId: "<CLIKKLE_DATABASE_ID>",
  })}
  liveProvider={liveProvider(clikkleClient, {
    databaseId: "<CLIKKLE_DATABASE_ID>",
  })}
  authProvider={authProvider}
  routerProvider={routerProvider}
  resources={[
    {
      name: "<CLIKKLE_TABLE_ID>", // resource name must be the same as CLIKKLE_TABLE_ID.
      list: "/posts", // Means that the list action of this resource will be available at /posts in your app
      create: "/posts/create", // create action of this resource will be available at /posts/create
      edit: "/posts/edit/:id", // edit action of this resource will be available at /posts/edit/:id
      show: "/posts/show/:id", // show action of this resource will be available at /posts/show/:id
    },
  ]}
...
/>;
```

Key concepts to performing CRUD operations:

- A [resource](https://refine.dev/docs/api-reference/core/components/refine-config/#name) connects an API endpoint's entity with the app's pages, enabling them to interact with the API data. 
In the resource configuration, path definitions allow Refine to automatically recognize the resource's available actions and identify it based on the current path, eliminating the need for manual specification in hooks and components.

- The [data provider](https://refine.dev/docs/tutorial/understanding-dataprovider/index/#using-data-providers-in-refine) serves as your app's data layer, handling HTTP requests and managing data retrieval. Refine uses this through data hooks. 
With built-in support for Clikkle in Refine, you only need to pass your Clikkle database ID to the `dataProvider` property. 


{% info title="Note" %}
The [@refinedev/clikkle](https://www.npmjs.com/package/@refinedev/clikkle) package supports [Live/Realtime Provider](https://refine.dev/docs/api-reference/core/providers/live-provider/) natively.
{% /info %}




At this point, we created our Clikkle database and connected to the Refine App.

You can now register and login to the app.






