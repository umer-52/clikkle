---
layout: article
title: Start with Android (Kotlin)
description: Get started with Clikkle on Android and learn how to build secure and scalable apps using our powerful backend.
difficulty: beginner
readtime: 3
back: /docs/quick-starts
---

Learn how to setup your first Android project powered by Clikkle and the [Clikkle Android SDK](https://github.com/clikkle/sdk-for-android).

{% info title="Using Java?" %}
Check out the [Start with Android (Java)](/docs/quick-starts/android-java) guide.
{% /info %}

{% section #step-1 step=1 title="Create Android project" %}
Open Android Studio and click **New Project** to create a new project.

Choose your desired project template, for example **Empty Activity**, and click **Next**.

Now enter your app **name** and **package name**. You will need both of these later when you create your project in the Clikkle console. Click **Finish** to create your project.

{% /section %}

{% section #step-2 step=2 title="Create Clikkle project" %}
Head to the [Clikkle Console](https://cloud.clikkle.io/console).

{% only_dark %}
![Create project screen](/clikkle/images/docs/quick-starts/dark/create-project.png)
{% /only_dark %}
{% only_light %}
![Create project screen](/clikkle/images/docs/quick-starts/create-project.png)
{% /only_light %}

If this is your first time using Clikkle, create an account and create your first project.

Then, under **Add a platform**, add an **Android app**.

Add your app's **name** and **package name**, your package name is the one entered when creating an Android project. For existing projects, you should use the **applicationId** in your app-level [build.gradle](https://github.com/clikkle/playground-for-android/blob/master/app/build.gradle#L11) file.

{% only_dark %}
![Add a platform](/clikkle/images/docs/quick-starts/dark/add-platform.png)
{% /only_dark %}
{% only_light %}
![Add a platform](/clikkle/images/docs/quick-starts/add-platform.png)
{% /only_light %}

You can skip optional steps.

{% /section %}

{% section #step-3 step=3 title="Add the Clikkle SDK" %}
To add the Clikkle SDK for Android as a dependency, add the following to your app-level **build.gradle.kts** file inside the **dependencies** block.

```kotlin
implementation("io.clikkle:sdk-for-android:8.1.0")
```

In order to allow creating OAuth sessions, the following activity needs to be added inside the `<application>` tag, along side the existing `<activity>` tags in your [AndroidManifest.xml](https://github.com/clikkle/playground-for-flutter/blob/master/android/app/src/main/AndroidManifest.xml).
Be sure to replace the **<PROJECT_ID>** string with your actual Clikkle project ID.
You can find your Clikkle project ID in you project settings screen in your Clikkle Console.

```xml
<manifest ...>
  ...
  <application ...>
    ...
    <!-- Add this inside the `<application>` tag, along side the existing `<activity>` tags -->
    <activity android:name="io.clikkle.views.CallbackActivity" android:exported="true">
      <intent-filter android:label="android_web_auth">
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="clikkle-callback-<PROJECT_ID>" />
      </intent-filter>
    </activity>
  </application>
</manifest>
```
{% /section %}

{% section #step-4 step=4 title="Create Clikkle Singleton" %}
Find your project's ID in the **Settings** page.

{% only_dark %}
![Project settings screen](/clikkle/images/docs/quick-starts/dark/project-id.png)
{% /only_dark %}
{% only_light %}
![Project settings screen](/clikkle/images/docs/quick-starts/project-id.png)
{% /only_light %}

Create a new file `Clikkle.kt` and add the following code to it, replacing `<PROJECT_ID>` with your project ID.

```kotlin
package <YOUR_ROOT_PACKAGE_HERE>

import android.content.Context
import io.clikkle.Client
import io.clikkle.ID
import io.clikkle.models.*
import io.clikkle.services.*

object Clikkle {
    lateinit var client: Client
    lateinit var account: Account

    fun init(context: Context) {
        client = Client(context)
            .setEndpoint("https://<REGION>.cloud.clikkle.io/v1")
            .setProject("<PROJECT_ID>")

        account = Account(client)
    }

    suspend fun onLogin(
        email: String,
        password: String,
    ): Session {
        return account.createEmailPasswordSession(
            email,
            password,
        )
    }

    suspend fun onRegister(
        email: String,
        password: String,
    ): User<Map<String, Any>> {
        return account.create(
            userId = ID.unique(),
            email,
            password,
        )
    }

    suspend fun onLogout() {
        account.deleteSession("current")
    }
}
```
{% /section %}
{% section #step-5 step=5 title="Create a login page" %}
Add the following code to `MainActivity.kt`.

```kotlin
package <YOUR_ROOT_PACKAGE_HERE>

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.text.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.*
import androidx.compose.ui.text.input.*
import androidx.compose.ui.unit.*
import <YOUR_ROOT_PACKAGE_HERE>.ui.theme.MyApplicationTheme
import kotlinx.coroutines.launch

class MainActivity : ComponentActivity() {
    @OptIn(ExperimentalMaterial3Api::class)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        Clikkle.init(applicationContext)

        setContent {
            MyApplicationTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    val coroutineScope = rememberCoroutineScope()

                    var user by remember { mutableStateOf("") }
                    var email by remember { mutableStateOf("") }
                    var password by remember { mutableStateOf("") }

                    if (user.isNotEmpty()) {
                        Column(
                            modifier = Modifier.fillMaxSize(),
                            horizontalAlignment = Alignment.CenterHorizontally,
                            verticalArrangement = Arrangement.Center
                        ) {
                            Text(text = "Logged in as $user")
                            Button(onClick = {
                                coroutineScope.launch {
                                    Clikkle.onLogout()
                                }
                            }) {
                                Text("Logout")
                            }
                        }
                    }

                    Column(
                        modifier = Modifier.fillMaxSize(),
                        horizontalAlignment = Alignment.CenterHorizontally,
                        verticalArrangement = Arrangement.Center
                    ) {
                        TextField(
                            value = email,
                            onValueChange = { email = it },
                            label = { Text("Username") },
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(16.dp)
                        )
                        TextField(
                            value = password,
                            onValueChange = { password = it },
                            label = { Text("Password") },
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(16.dp),
                            visualTransformation = PasswordVisualTransformation(),
                            keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Password)
                        )
                        Row(
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(16.dp),
                            horizontalArrangement = Arrangement.SpaceBetween
                        ) {
                            Button(onClick = {
                                coroutineScope.launch {
                                    try {
                                        Clikkle.onLogin(email, password)

                                        user = email
                                    } catch (e: Exception) {
                                        e.printStackTrace()
                                    }
                                }
                            }) {
                                Text("Login")
                            }
                            Button(onClick = {
                                coroutineScope.launch {
                                    try {
                                        Clikkle.onRegister(email, password)
                                    } catch (e: Exception) {
                                        e.printStackTrace()
                                    }
                                }
                            }) {
                                Text("Register")
                            }
                        }
                    }
                }
            }
        }
    }
}
```
{% /section %}

{% section #step-6 step=6 title="Type safety with models" %}
For enhanced type safety, you can use custom model classes with the `nestedType` parameter:

```kotlin
import io.clikkle.services.TablesDB

data class User(
    val name: String,
    val email: String,
    val isVerified: Boolean = false
)

// Usage with type safety
val tablesDB = TablesDB(Clikkle.client)

try {
    val users = tablesDB.listRows(
        databaseId = "[DATABASE_ID]",
        tableId = "[TABLE_ID]",
        nestedType = User::class.java // Enables type safety
    )

    for (user in users.rows) {
        Log.d("Clikkle", "User: ${user.name} (${user.email})")
    }
} catch (e: ClikkleException) {
    Log.e("Clikkle", "Error: ${e.message}")
}
```

{% info title="Generate types automatically" %}
Use the [Clikkle CLI](/docs/products/databases/type-generation) to generate model classes automatically: `clikkle types ./models`
{% /info %}

{% /section %}

{% section #step-7 step=7 title="All set" %}
Run your project by clicking **Run app** in Android Studio.
{% /section %}

