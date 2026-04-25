---
layout: article
title: Deploy from CLI
description: Learn to deploy Clikkle Sites from the Clikkle CLI.
---

Clikkle Sites allows you to host and deploy websites directly within the Clikkle platform. Each site can have many deployments, which can be thought of as versions of the web application.

While we recommend you create deployments through [automatic Git deployments](/docs/products/sites/deploy-from-git), you can also create deployments via the Clikkle CLI.

# CLI  {% #cli %} 

You can create sites using the CLI without needing to access the Console.

{% partial file="cli-disclaimer.md" /%}

To deploy your site with the Clikkle CLI, use the `clikkle init sites` command to create a starter site and paste your code into the generated file and folder.

```sh
clikkle init sites
```

To deploy the generated code, add any dependencies and push the site using the following command:

```sh
clikkle push sites
```

{% arrow_link href="/docs/tooling/command-line/sites#commands" %}
Learn more about the CLI sites commands
{% /arrow_link %}


## Configure CLI deployments {% #configure-cli-deployments %}
If you need to target a different project, API endpoint, change the path or entry point of your site, or update any of the other configuration options, 
you can do so by editing the `clikkle.config.json` file.

{% arrow_link href="/docs/tooling/command-line/sites#clikklejson" %}
Learn more about clikkle.config.json
{% /arrow_link %}

# Debugging

- If you updated your site's configuration but the deployment is not working as expected, you may need to first redeploy your site before the changes take effect.

