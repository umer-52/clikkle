---
layout: tutorial
title: Create app
description: Create a Refine app project and integrate with Clikkle.
step: 2
---

## Create Refine project {% #create-react-project %}

Create a Refine app with the `npm create` command.

```sh
npm create refine-app@latest -- --preset refine-clikkle
```

We're using the `refine-clikkle` preset that installs the [`@refinedev/clikkle`](https://github.com/refinedev/refine/tree/master/packages/clikkle) which already has the  Clikkle dependency pre-configured.

To make this example more visual, we'll use the Ant Desing UI package which natively supported by Refine.

{% info title="Existing projects" %}

No additional dependencies are required for this tutorial. If you want to integrate Clikkle into an existing Refine app, use the following command.
```sh
npm install @refinedev/clikkle
```
Learn more about [adding Clikkle a refine data provider](https://refine.dev/docs/packages/documentation/data-providers/clikkle).
{% /info %}



You can start the development server to watch your app update in the browser as you make changes.

```sh
npm run dev -- --open --port 3000
```

Once the app is running, you should be greeted with the welcome screen.


![App welcome screen](/clikkle/images/docs/tutorials/refine/refine-welcome-page.png)


