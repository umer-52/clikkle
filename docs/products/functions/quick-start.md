---
layout: article
title: Start with Functions
description: Get started quickly with Clikkle Functions. Follow a step-by-step guide to create your first serverless function, define triggers, and execute code.
---
You can create and execute your first Clikkle Function in minutes.

# Create function {% #create-function %} 

Before deploying your function with Git, create a new function attached to your Git repository.

{% only_dark %}
![Create function screen](/clikkle/images/docs/functions/quick-start/dark/create-function.png)
{% /only_dark %}
{% only_light %}
![Create function screen](/clikkle/images/docs/functions/quick-start/create-function.png)
{% /only_light %}

1. In the Clikkle Console's sidebar, click **Functions**.
2. Click **Create function**.
3. Under **Connect Git repository**, select your provider.
4. After connecting to GitHub, under **Quick start**, select a starter template.
5. Follow the step-by-step wizard and create the function.
6. The function will be created and a build will begin. Once the build completes, you'll have created your first function.

You can find the code used by the starter template in your newly created Git repository. 
Each push to your Git repo will trigger a new deployment.

## Execute {% #execute %} 
You can execute your Clikkle Function through [many different triggers](/docs/products/functions/execute).
The easiest way to execute your first function is to use the Clikkle Console.

{% only_dark %}
![Execution-screen](/clikkle/images/docs/functions/quick-start/dark/function-execution.png)
{% /only_dark %}
{% only_light %}
![Execution-screen](/clikkle/images/docs/functions/quick-start/function-execution.png)
{% /only_light %}

1. In the Clikkle Console's sidebar, click **Functions**.
1. Under the **Executions** tab, click **Execute now**.
1. Click **Execute** to execute the starter template function.
1. Wait for the execution to be marked **completed** and click to view the execution logs.


# Explore {% #explore %}
Use this your first function as a springboard to explore the flexible and powerful features of Clikkle Functions.

{% cards %}
{% cards_item href="/docs/products/functions/templates" title="Template" %}
Get a template function up and running with a single click.
{% /cards_item %}
{% cards_item href="/docs/products/functions/develop" title="Develop" %}
Learn about developing your own Clikkle Function.
{% /cards_item %}
{% cards_item href="/docs/products/functions/deploy-from-git" title="Deploy" %}
Learn to deploy Clikkle Functions from Git.
{% /cards_item %}
{% cards_item href="/docs/products/functions/execute" title="Execute" %}
Explore the different ways an Clikkle Function can be executed.
{% /cards_item %}
{% cards_item href="/docs/products/functions/runtimes" title="Runtimes" %}
Write Clikkle Functions in your favorite language.
{% /cards_item %}
{% /cards %}

