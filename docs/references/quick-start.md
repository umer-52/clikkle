---
layout: article
title: Quick start
description: Configure the Clikkle SDKs and take the necessary steps to start using Clikkle.
---
Follow these steps before you begin using the Clikkle SDKs or accessing Clikkle through the REST and GraphQL API.

{% section #select-the-right-API step=1 title="Select the right API" %}
Clikkle has two types of APIs for different use cases, select one or both depending on your use case.

If you're creating a **web, mobile, or native application** used by end-users that will register and create accounts,
install a [Client SDK](/docs/sdks#client) and follow steps for Client APIs.

If you're create a server application, like a **backend, admin app, or a CLI tool**,
install a [Server SDK](/docs/sdks#server) and follow steps for Server APIs.

If you're creating a **Server-side Rendered (SSR)** web app, 
install a [Server SDK](/docs/sdks#server) and follow steps for SSR.
{% /section %}

{% section #configure-project step=2 title="Configure project" %}

Head to the [Clikkle Console](https://cloud.clikkle.io/console).

If this is your first time using Clikkle, create an account and create your first project.

{% only_dark %}
![Create project screen](/clikkle/images/docs/quick-starts/dark/create-project.png)
{% /only_dark %}
{% only_light %}
![Create project screen](/clikkle/images/docs/quick-starts/create-project.png)
{% /only_light %}

Then, configure your project depending on use case.
You can follow all three flows to enable all three use cases.

{% tabs %}
{% tabsitem #client title="Client" %}
Under **Add a platform**, add a platform for **each** web, mobile, and native app you plan to create.
This means, a different platform for each web app hosted under a different domain,
and a different platform for each mobile or native app that use a different package ID.

{% only_dark %}
![Add a platform](/clikkle/images/docs/quick-starts/dark/add-platform.png)
{% /only_dark %}
{% only_light %}
![Add a platform](/clikkle/images/docs/quick-starts/add-platform.png)
{% /only_light %}

You can skip optional steps.
{% /tabsitem %}

{% tabsitem #server title="Server" %}
Under **Integrate with your server**, add an **API Key**.
{% only_dark %}
![Create project screen](/clikkle/images/docs/quick-starts/dark/integrate-server.png)
{% /only_dark %}
{% only_light %}
![Create project screen](/clikkle/images/docs/quick-starts/integrate-server.png)
{% /only_light %}

Enable the scopes for the Clikkle products you plan to use for your app.
It's a good idea to only grant scopes that you need, and edit the API keys as your needs change for security.
{% /tabsitem %}

{% tabsitem #ssr title="SSR" %}
Under **Integrate with your server**, add an **API Key** with the following scopes.
{% only_dark %}
![Create project screen](/clikkle/images/docs/quick-starts/dark/integrate-server.png)
{% /only_dark %}
{% only_light %}
![Create project screen](/clikkle/images/docs/quick-starts/integrate-server.png)
{% /only_light %}

| Category  {% width=120 %} | Required scopes       | Purpose |
|-----------|-----------------------|---------|
| Sessions  | `sessions.write`     | Allows API key to create, update, and delete sessions. |

{% /tabsitem %}
{% /tabs %}

{% /section %}

{% section #initialize-sdks step=3 title="Initialize SDKs" %}
When using the Clikkle APIs, you need to pass information like endpoint, project ID, credentials
and other metadata for Clikkle to properly parse your request.

{% tabs %}
{% tabsitem #client title="Client" %}
Client apps need to be configured with endpoint and project ID,
so the Clikkle SDK knows which endpoint and project to connect to.
{% multicode %}
```client-web
import { Client } from "clikkle";

const client = new Client();

client
    .setEndpoint('https://<REGION>.cloud.clikkle.io/v1')    // Your API Endpoint
    .setProject('<PROJECT_ID>')                // Your project ID
;
```
```client-flutter
import 'package:clikkle/clikkle.dart';

Client client = Client();

client
    .setEndpoint('https://<REGION>.cloud.clikkle.io/v1')    // Your API Endpoint
    .setProject('<PROJECT_ID>')                // Your project ID
;
```
```client-apple
import Clikkle

let client = Client()
    .setEndpoint("https://<REGION>.cloud.clikkle.io/v1")    // Your API Endpoint
    .setProject("<PROJECT_ID>")                            // Your project ID
```
```client-android-kotlin
import io.clikkle.Client

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.clikkle.io/v1")    // Your API Endpoint
    .setProject("<PROJECT_ID>")                // Your project ID
```
{% /multicode %}
{% /tabsitem %}

{% tabsitem #server title="Server" %}
Server apps need to be configured with endpoint, project ID, and an API key
so the Clikkle SDK knows which endpoint and project to connect to, as well as have credentials to perform admin actions.

{% multicode %}
```server-nodejs
const sdk = require('node-clikkle');

// Init SDK
const client = new sdk.Client();

client
    .setEndpoint('https://<REGION>.cloud.clikkle.io/v1')                // Your API Endpoint
    .setProject('<PROJECT_ID>')                            // Your project ID
    .setJWT('<YOUR_API_KEY>')                                   // Your secret JSON Web Token
;
```
```deno
import * as sdk from "npm:node-clikkle";

// Init SDK
let client = new sdk.Client();

client
    .setEndpoint('https://<REGION>.cloud.clikkle.io/v1')                // Your API Endpoint
    .setProject('<PROJECT_ID>')                            // Your project ID
    .setJWT('<YOUR_API_KEY>')                                   // Your secret JSON Web Token
;
```
```php
<?php

use Clikkle\Client;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.clikkle.io/v1')               // Your API Endpoint
    ->setProject('<PROJECT_ID>')                           // Your project ID
    ->setJWT('<YOUR_API_KEY>')                                  // Your secret JSON Web Token
;
```
```python
from clikkle.client import Client

client = Client()

(client
  .set_endpoint('https://<REGION>.cloud.clikkle.io/v1')                 # Your API Endpoint
  .set_project('<PROJECT_ID>')                             # Your project ID
  .set_jwt('<YOUR_API_KEY>')                                    # Your secret JSON Web Token
)
```
```ruby
require 'clikkle'

include Clikkle

client = Client.new
    .set_endpoint('https://<REGION>.cloud.clikkle.io/v1')               # Your API Endpoint
    .set_project('<PROJECT_ID>')                           # Your project ID
    .set_jwt('<YOUR_API_KEY>')                                  # Your secret JSON Web Token
```
```csharp
using Clikkle;
using Clikkle.Services;

var client = new Client()
    .SetEndPoint("https://<REGION>.cloud.clikkle.io/v1")                // Your API Endpoint
    .SetProject("<PROJECT_ID>")                            // Your project ID
    .SetJWT("<YOUR_API_KEY>");                                  // Your secret JSON Web Token
```
```dart
import 'package:dart_clikkle/dart_clikkle.dart';

void main() {                                                   // Init SDK
  Client client = Client();

  client
    .setEndpoint('https://<REGION>.cloud.clikkle.io/v1')                // Your API Endpoint
    .setProject('<PROJECT_ID>')                            // Your project ID
    .setJWT('<YOUR_API_KEY>')                                   // Your secret JSON Web Token
  ;
}
```
```kotlin
import io.clikkle.Client;
import io.clikkle.coroutines.CoroutineCallback;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.clikkle.io/v1")                // Your API Endpoint
    .setProject("<PROJECT_ID>")                            // Your project ID
    .setJWT("<YOUR_API_KEY>");                                  // Your secret JSON Web Token
```
```java
import io.clikkle.Client;
import io.clikkle.coroutines.CoroutineCallback;

Client client = new Client()
    .setEndpoint("https://<REGION>.cloud.clikkle.io/v1")                // Your API Endpoint
    .setProject("<PROJECT_ID>")                            // Your project ID
    .setJWT("<YOUR_API_KEY>");                                  // Your secret JSON Web Token
```
```swift
import Clikkle

let client = Client()
    .setEndpoint("https://<REGION>.cloud.clikkle.io/v1")                // Your API Endpoint
    .setProject("<PROJECT_ID>")                            // Your project ID
    .setJWT("<YOUR_API_KEY>")                                   // Your secret JSON Web Token
```
{% /multicode %}
{% /tabsitem %}

{% tabsitem #ssr title="SSR" %}
Clikkle uses Server SDKs for SSR apps. The initialization is different
## Admin client {% #admin-client %}

{% info title="Admin clients" %}
Admin clients should only be used if you need to perform admin actions that bypass permissions
or [unauthenticated requests that bypass rate limits](/docs/products/auth/server-side-rendering#rate-limits).
{% /info %}

To initialize the admin client, we'll need to first [generated an API key](/docs/advanced/platform/api-keys#create-api-key). 
The API key should have the following scope in order to perform authentication:

| Category  {% width=120 %} | Required scopes    | Purpose |
|-----------|---------------------|---------|
| Sessions  | `sessions.write`    | Allows API key to create, update, and delete sessions. |

{% multicode %}
```server-nodejs
import { Client } from "node-clikkle"; // Using the server SDK

const adminClient = new Client()
    .setEndpoint('https://<REGION>.cloud.clikkle.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')             // Your project ID
    .setKey('<YOUR_API_KEY>');                   // Your secret API key
```
```php
use Clikkle\Client;
use Clikkle\Services\Account;

$adminClient = (new Client())
    ->setEndpoint('https://<REGION>.cloud.clikkle.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>')             // Your project ID
    ->setKey('<YOUR_API_KEY>');                   // Your secret API key


```
{% /multicode %}

It is important to use an API key, as this will allow your server requests to bypass [rate limits](/docs/advanced/platform/rate-limits). If you don't use an API key, your server will be rate limited as if it were a client from a single IP address.

## Session client {% #session-client %}

The session client will be used to make requests to Clikkle on behalf of the end-user. 
It will be initialized with the session, usually stored within a cookie.

You should create a new client for each request and **never** share the client between requests.

{% multicode %}
```server-nodejs
const sessionClient = new Client()
    .setEndpoint('https://<REGION>.cloud.clikkle.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');            // Your project ID

const session = req.cookies.session; // Get the session cookie from the request
if (session) {
    sessionClient.setSession(session);
}
```
```php
$sessionClient = (new Client())
    ->setEndpoint('https://<REGION>.cloud.clikkle.io/v1') // Your API Endpoint
    ->setProject('<PROJECT_ID>');            // Your project ID

$session = $_COOKIE['session']; // Get the session cookie from the request
if ($session) {
    $sessionClient->setSession($session);
}
```
{% /multicode %}
{% /tabsitem %}

You will use the initialized client in all requests you make to Clikkle.
{% /tabs %}

If you're using Clikkle without an SDK, follow the guides for the [REST API](/docs/apis/rest) or [GraphQL API](/docs/apis/graphql).
{% /section %}

{% section #examples step=4 title="Examples" %}
If you prefer to explore examples, follow one of the following quick starts.

## Client apps {% #client-app %}
Examples when building with Client APIs
{% cards %}
{% cards_item href="/docs/quick-starts/web" title="Web" icon="icon-nextjs" %}
Just plain JavaScript and TypeScript.
{% /cards_item %}
{% cards_item href="/docs/quick-starts/nextjs" title="Next.js" icon="icon-nextjs" %}
Get started with Clikkle and Next.js
{% /cards_item %}
{% cards_item href="/docs/quick-starts/react" title="React" icon="icon-react" %}
Get started with Clikkle and React
{% /cards_item %}
{% cards_item href="/docs/quick-starts/vue" title="Vue.js" icon="web-icon-vue" %}
Get started with Clikkle and Vue.js
{% /cards_item %}
{% cards_item href="/docs/quick-starts/nuxt" title="Nuxt" icon="web-icon-nuxt" %}
Get started with Clikkle and Nuxt
{% /cards_item %}
{% cards_item href="/docs/quick-starts/sveltekit" title="SvelteKit" icon="icon-svelte" %}
Get started with Clikkle and SvelteKit
{% /cards_item %}
{% cards_item href="/docs/quick-starts/angular" title="Angular" icon="icon-angular" %}
Get started with Clikkle and Angular
{% /cards_item %}
{% cards_item href="/docs/quick-starts/flutter" title="Flutter" icon="icon-flutter" %}
Get started with Clikkle and Flutter
{% /cards_item %}
{% cards_item href="/docs/quick-starts/apple" title="Apple" icon="icon-apple" %}
Get started with Clikkle and Apple
{% /cards_item %}
{% cards_item href="/docs/quick-starts/android" title="Android" icon="icon-android" %}
Get started with Clikkle and Android
{% /cards_item %}
{% /cards %}

## Server apps {% #server-app %}
Examples when building with Server APIs

{% cards %}
{% cards_item href="/docs/quick-starts/node" title="Node.js" icon="icon-node_js" %}
Get started with Clikkle and Node.js
{% /cards_item %}
{% cards_item href="/docs/quick-starts/python" title="Python" icon="icon-python" %}
Get started with Clikkle and Python
{% /cards_item %}
{% cards_item href="/docs/quick-starts/dart" title="Dart" icon="web-icon-dart" %}
Get started with Clikkle and Dart
{% /cards_item %}
{% cards_item href="/docs/quick-starts/php" title="PHP" icon="web-icon-php" %}
Get started with Clikkle and PHP
{% /cards_item %}
{% cards_item href="/docs/quick-starts/ruby" title="Ruby" icon="web-icon-ruby" %}
Get started with Clikkle and Ruby
{% /cards_item %}
{% cards_item href="/docs/quick-starts/dotnet" title=".NET" icon="web-icon-dotnet" %}
Get started with Clikkle and .NET
{% /cards_item %}
{% cards_item href="/docs/quick-starts/deno" title="Deno" icon="web-icon-deno" %}
Get started with Clikkle and Deno
{% /cards_item %}
{% cards_item href="/docs/quick-starts/go" title="Go" icon="web-icon-go" %}
Get started with Clikkle and Go
{% /cards_item %}
{% cards_item href="/docs/quick-starts/swift" title="Swift" icon="web-icon-swift" %}
Get started with Clikkle and Swift
{% /cards_item %}
{% cards_item href="/docs/quick-starts/kotlin" title="Kotlin" icon="web-icon-kotlin" %}
Get started with Clikkle and Kotlin
{% /cards_item %}
{% /cards %}


{% /section %}
