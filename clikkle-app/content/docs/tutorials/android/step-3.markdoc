---
layout: tutorial
title: Set up Clikkle
description: Initialize Clikkle in your Android project.
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

Then, under **Add a platform**, add an **Android app**. The **Package Name** should be the same as the one you used when creating your app.

{% only_dark %}
![Add a platform](/clikkle/images/docs/quick-starts/dark/add-platform.png)
{% /only_dark %}
{% only_light %}
![Add a platform](/clikkle/images/docs/quick-starts/add-platform.png)
{% /only_light %}

You can skip optional steps.

## Initialize Clikkle SDK {% #init-sdk %}

To use Clikkle in our Android app, we'll need to find our project ID. Find your project's ID in the **Settings** page. 

{% only_dark %}
![Project settings screen](/clikkle/images/docs/quick-starts/dark/project-id.png)
{% /only_dark %}
{% only_light %}
![Project settings screen](/clikkle/images/docs/quick-starts/project-id.png)
{% /only_light %}

Create a new file `services/Clikkle.kt` to hold our Clikkle related code.
Only one instance of the `Client` class should be created per app.
Add the following code to it, replacing `<PROJECT_ID>` with your project ID.

```kotlin
package <YOUR_ROOT_PACKAGE_HERE>.services

import android.content.Context
import io.clikkle.Client

object Clikkle {
    private const val ENDPOINT = "https://<REGION>.cloud.clikkle.io/v1"
    private const val PROJECT_ID = "<PROJECT_ID>"

    private lateinit var client: Client

    fun init(context: Context) {
        client = Client(context)
            .setEndpoint(ENDPOINT)
            .setProject(PROJECT_ID)
    }
}
```

