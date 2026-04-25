---
layout: article
title: Deploy manually
description: Learn to deploy Clikkle functions manually from the Clikkle CLI or the Clikkle Console.
---

Clikkle Functions are mini-applications in Clikkle with their own endpoints. 
Each function can have many deployments, which can be thought of as versions of the mini-application.

While we recommend you create deployments through [automatic Git deployments](/docs/products/functions/deploy-from-git),
you can also create deployments manually or through the Clikkle CLI.

# CLI  {% #cli %} 

You can create functions using the CLI without needing to access the Console.

{% partial file="cli-disclaimer.md" /%}

To deploy your function with the Clikkle CLI, use the `clikkle init functions` command to create a starter function and paste your code into the generated file and folder.

```sh
clikkle init functions
```

To deploy the generated code, add any dependencies and push the function using the following command:

```sh
clikkle push functions
```

{% arrow_link href="/docs/tooling/command-line/functions#commands" %}
Learn more about the CLI functions commands
{% /arrow_link %}


## Configure CLI deployments {% #configure-cli-deployments %}
If you need to target a different project, API endpoint, change the path or entry point of your function, or update any of the other configuration options, 
you can do so by editing the `clikkle.config.json` file.

{% arrow_link href="/docs/tooling/command-line/functions#clikklejson" %}
Learn more about clikkle.config.json
{% /arrow_link %}

# Manual Deployment {% #manual %} 

You can upload your functions to be deployed using the Clikkle Console. The example below shows a simple Node.js function.

```text
.
├── package.json
└── index.js
```

First, navigate inside the folder that contains your dependency file. Package your code files into the `.tar.gz` format:

{% multicode %}
  ```bash
  tar --exclude code.tar.gz -czf code.tar.gz .
  ```
  ```cmd
  tar --exclude code.tar.gz -czf code.tar.gz .
  ```
  ```powershell
  tar --exclude code.tar.gz -czf code.tar.gz .
  ```
{% /multicode %}


Next, navigate to your Clikkle Console and upload the function.

1. Navigate to the function you want to deploy.
2. Click **Create deployment**.
3. Select the **Manual** tab.
4. Input the entry point of your function under **Entrypoint**. For the example above, it would be `index.js`.
5. Upload `code.tar.gz`.
6. Select **Activate deployment after build**.
7. Click **Create**.


# Debugging {% #debugging %}
- If you updated your function's configuration but the deployment is not working as expected,
you may need to first redeploy your function before the changes take effect.

- If you notice your function is missing dependencies during build or at runtimes, update it's build settings.
Navigate to **Functions** > your function > **Settings** > **Configuration** > **Build settings**. 
These commands will be ran before the function is built and can be used to install dependencies.

- If you're missing some code files at build time, make sure they are included in the **Root directory**. 
Only files in the root directory folder will be copied to the executor.

