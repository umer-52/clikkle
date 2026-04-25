---
layout: article
title: Execution
description: Understand serverless function execution in Clikkle. Explore how triggers, events, and data flow enable dynamic execution of your code.
difficulty: beginner
readtime: 3
---


Clikkle Functions can be executed in several ways.
Executions can be invoked through the Clikkle SDK and visiting its REST endpoint. Functions can also be triggered by events and scheduled executions.
Here are all the different ways to consume your Clikkle Functions.

# Execution modes {% #execution-modes %}

Clikkle Functions support two execution modes: **synchronous** and **asynchronous**.

## Synchronous executions {% #synchronous-executions %}

Synchronous executions are those where Clikkle makes the request to the function runtime synchronously and waits for the response. The client making the request will wait until the function completes and receives the response directly.

Synchronous executions are created via:
- The [Create execution](/docs/references/cloud/client-web/functions#createExecution) endpoint where the `async` parameter is `false`
- Requests to custom or auto-generated [domains](/docs/products/functions/execute#domains)

Synchronous executions:
- Return response bodies and headers directly to the client
- Have a **30-second hard timeout limit** to discourage slow API calls that cause poor user experience in apps
- Are ideal for short-running operations where you need response data quickly

## Asynchronous executions {% #asynchronous-executions %}

Asynchronous executions are added to a queue and processed by the function worker as background jobs.

Asynchronous executions are created via:
- The [Create execution](/docs/references/cloud/client-web/functions#createExecution) endpoint where the `async` parameter is `true`
- Event triggers (when functions are triggered by [platform events](/docs/advanced/platform/events))
- Scheduled executions (cron jobs or delayed executions)

Asynchronous executions:
- Have no timeout limitations beyond your function's configured timeout
- Are ideal for background processing and event-driven workflows

{% info title="Response body storage" %}
Response bodies and headers are not stored anywhere, so they are only ever returned via synchronous executions.
{% /info %}

# Domains {% #domains %}
You can execute a function through HTTP requests, using a browser or by sending an HTTP request.
1. In the Clikkle Console's sidebar, click **Functions**.
1. Under **Execute access**, set the access to `Any` so that anyone can execute the function. You will use [JWTs](/docs/products/auth/jwt) to authenticate users.
1. Under the **Domains** tab, you'll find the generated domain from Clikkle and your custom domains. [Learn about adding a custom domain](/docs/products/functions/domains).

```bash
https://64d4d22db370ae41a32e.fra.clikkle.run
```

When requests are made to this domain, whether through a browser or through an HTTP request,
the request information like request URL, request headers, and request body will be passed to the function.

```bash
curl -X POST https://64d4d22db370ae41a32e.fra.clikkle.run \
-H "X-Custom-Header: 123" \
-H "x-clikkle-user-jwt: <YOUR_JWT_KEY>" \
-H "Content-Type: application/json" \
-d '{"data":"this is json data"}'
```

Notice how a `x-clikkle-user-jwt` header is passed in the request, you will use this to authenticate users.
[Learn more about JWTs](/docs/products/auth/jwt).

This unlocks the ability for you to develop custom HTTP endpoints with Clikkle Functions.
It also allows accepting incoming webhooks for handling online payments, hosting social platform bots, and much more.

# SDK {% #sdk %}

You can invoke your Clikkle Functions directly from the [Clikkle SDKs](/docs/sdks).

{% tabs %}
{% tabsitem #client title="Client SDKs" %}

{% multicode %}
```client-web
import { Client, Functions } from "clikkle";

const client = new Client();

const functions = new Functions(client);

client
    .setProject('<PROJECT_ID>') // Your project ID
;

const promise = functions.createExecution({
    functionId: '<FUNCTION_ID>',
    body: '<BODY>',  // optional
    async: false,  // optional
    xpath: '<PATH>',  // optional
    method: 'GET',  // optional
    headers: {} // optional
});

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
```
```dart
import 'package:clikkle/clikkle.dart';

void main() { // Init SDK
  Client client = Client();
  Functions functions = Functions(client);

  client
    .setProject('<PROJECT_ID>') // Your project ID
  ;
  Future result = functions.createExecution(
    functionId: '<FUNCTION_ID>',
    body: '<BODY>', // optional
    xasync: false, // optional
    path: '<PATH>', // optional
    method: 'GET', // optional
    headers: {}, // optional
  );

  result
    .then((response) {
      print(response); // Success
    }).catchError((error) {
      print(error.response); // Failure
  });
}
```
```swift
import Clikkle

let client = Client()
    .setProject("<PROJECT_ID>") // Your project ID

let functions = Functions(client)

let execution = try await functions.createExecution(
  functionId: "<FUNCTION_ID>",
  body: "<BODY>", // optional
  async: xfalse, // optional
  path: "<PATH>", // optional
  method: "GET", // optional
  headers: [:] // optional
)
```
```kotlin
import io.clikkle.Client
import io.clikkle.services.Functions

val client = Client(context)
    .setProject("<PROJECT_ID>") // Your project ID

val functions = Functions(client)

val response = functions.createExecution(
    functionId = "<FUNCTION_ID>",
    body = "<BODY>", // optional
    async = false, // optional
    path = "<PATH>", // optional
    method = "GET", // optional
    headers = mapOf( "a" to "b" ) // optional
)
```
```java
import io.clikkle.Client;
import io.clikkle.coroutines.CoroutineCallback;
import io.clikkle.services.Functions;

Client client = new Client(context)
    .setProject("<PROJECT_ID>"); // Your project ID

Functions functions = new Functions(client);

functions.createExecution(
    "<FUNCTION_ID>", // functionId
    "<BODY>", // body (optional)
    false, // async (optional)
    "<PATH>", // path (optional)
    "GET", // method (optional)
    mapOf( "a" to "b" ) // headers (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        Log.d("Clikkle", result.toString());
    })
);
```
{% /multicode %}

{% /tabsitem %}

{% tabsitem #server title="Server SDKs" %}
{% multicode %}
```server-nodejs
const sdk = require('node-clikkle');

// Init SDK
const client = new sdk.Client();

const functions = new sdk.Functions(client);

client
    .setProject('<PROJECT_ID>') // Your project ID
;

const promise = functions.createExecution({
    functionId: '<FUNCTION_ID>',
    body: '<BODY>',  // optional
    async: false,  // optional
    path: '<PATH>',  // optional
    method: 'GET',  // optional
    headers: {} // optional
});

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
```
```deno
import * as sdk from "npm:node-clikkle";

// Init SDK
let client = new sdk.Client();

let functions = new sdk.Functions(client);

client
    .setProject('<PROJECT_ID>') // Your project ID
;

const promise = functions.createExecution({
    functionId: '<FUNCTION_ID>',
    body: '<BODY>',  // optional
    async: false,  // optional
    xpath: '<PATH>',  // optional
    method: 'GET',  // optional
    headers: {} // optional
});

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
```
```go
package main

import (
	"fmt"

	"github.com/clikkle/sdk-for-go/clikkle"
)

func main() {
	client := clikkle.NewClient(
		clikkle.WithProject("<PROJECT_ID>"),
	)

	functions := clikkle.NewFunctions(client)

	execution, err := functions.CreateExecution(
		"<FUNCTION_ID>", // functionId
		functions.WithCreateExecutionBody("<BODY>"), // body (optional)
		functions.WithCreateExecutionAsync(false), // async (optional)
		functions.WithCreateExecutionPath("<PATH>"), // path (optional)
		functions.WithCreateExecutionMethod("GET"), // method (optional)
		functions.WithCreateExecutionHeaders(map[string]interface{}{})) // headers (optional)

	fmt.Println(execution)

	if err != nil {
		fmt.Println(err)
	}
}
```
```php
<?php

use Clikkle\Client;
use Clikkle\Services\Functions;

$client = new Client();

$client
    ->setProject('<PROJECT_ID>') // Your project ID
;

$functions = new Functions($client);

$result = $functions->createExecution(
    functionId: '<FUNCTION_ID>',
    body: '<BODY>',  // optional
    async: false,  // optional
    path: '<PATH>',  // optional
    method: 'GET',  // optional
    headers: [] // optional
);
```
```python
from clikkle.client import Client
from clikkle.services.functions import Functions

client = Client()

(client
  .set_project('<PROJECT_ID>') # Your project ID
)

functions = Functions(client)

result = functions.create_execution(
    function_id = '<FUNCTION_ID>',
    body = '<BODY>',  # optional
    async = False,  # optional
    path = '<PATH>',  # optional
    method = 'GET',  # optional
    headers = {} # optional
)
```
```ruby
require 'clikkle'

include Clikkle

client = Client.new
    .set_project('<PROJECT_ID>') # Your project ID

functions = Functions.new(client)

response = functions.create_execution(
    function_id: '<FUNCTION_ID>',
    body: '<BODY>',  # optional
    async: false,  # optional
    path: '<PATH>',  # optional
    method: 'GET',  # optional
    headers: {} # optional
)

puts response.inspect
```
```csharp
using Clikkle;
using Clikkle.Services;
using Clikkle.Models;

var client = new Client()
    .SetProject("<PROJECT_ID>"); // Your project ID

var functions = new Functions(client);

Execution result = await functions.CreateExecution(
    functionId: "<FUNCTION_ID>"
    body: "<BODY>" // optional
    async: false // optional
    path: "<PATH>" // optional
    method: "GET" // optional
    headers: [object]); // optional
```
```dart
import 'package:dart_clikkle/dart_clikkle.dart';

void main() { // Init SDK
  Client client = Client();
  Functions functions = Functions(client);

  client
    .setProject('<PROJECT_ID>') // Your project ID
  ;

  Future result = functions.createExecution(
    functionId: '<FUNCTION_ID>',
    body: '<BODY>', // optional
    xasync: false, // optional
    path: '<PATH>', // optional
    method: 'GET', // optional
    headers: {}, // optional
  );

  result
    .then((response) {
      print(response); // Success
    }).catchError((error) {
      print(error.response); // Failure
  });
}
```
```kotlin
import io.clikkle.Client;
import io.clikkle.coroutines.CoroutineCallback;
import io.clikkle.services.Functions;

Client client = new Client()
    .setProject("<PROJECT_ID>"); // Your project ID

Functions functions = new Functions(client);

functions.createExecution(
    "<FUNCTION_ID>", // functionId
    "<BODY>", // body (optional)
    false, // async (optional)
    "<PATH>", // path (optional)
    "GET", // method (optional)
    mapOf( "a" to "b" ) // headers (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
```
```java
import io.clikkle.Client;
import io.clikkle.coroutines.CoroutineCallback;
import io.clikkle.services.Functions;

Client client = new Client()
    .setProject("<PROJECT_ID>"); // Your project ID

Functions functions = new Functions(client);

functions.createExecution(
    "<FUNCTION_ID>", // functionId
    "<BODY>", // body (optional)
    false, // async (optional)
    "<PATH>", // path (optional)
    "GET", // method (optional)
    mapOf( "a" to "b" ) // headers (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
```
```swift
import Clikkle

let client = Client()
    .setProject("<PROJECT_ID>") // Your project ID

let functions = Functions(client)

let execution = try await functions.createExecution(
  functionId: "<FUNCTION_ID>",
  body: "<BODY>", // optional
  async: xfalse, // optional
  path: "<PATH>", // optional
  method: "GET", // optional
  headers: [:] // optional
)
```
{% /multicode %}
{% /tabsitem %}
{% /tabs %}

# Console {% #console %}
Another easy way to test a function is directly in the Clikkle Console.
You test a function by hitting the **Execute now** button, which will display a modal below.

You'll be able to mock executions by configuring the path, method, headers, and body.

{% only_dark %}
![Create project screen](/clikkle/images/docs/functions/execution/dark/execute-function.png)
{% /only_dark %}
{% only_light %}
![Create project screen](/clikkle/images/docs/functions/execution/execute-function.png)
{% /only_light %}


# Events {% #events %}

Changes in Clikkle emit events. You can configure Functions to be executed in response to these events.

1. In Clikkle Console, navigate to **Functions**.
2. Click to open a function you wish to configure.
3. Under the **Settings** tab, navigate to **Events**.
4. Add one or multiple events as triggers for the function.
5. Be careful to avoid selecting events that can be caused by the function itself. This can cause the function to trigger its own execution, resulting in infinite recursions.

In these executions, the event that triggered the function will be passed as the header `x-clikkle-event` to the function.
The `request.body` parameter will contain the event data. [Learn more about events](/docs/advanced/platform/events).

You can use one of the following events.
{% accordion %}
{% accordion_item title="Authentication" %}
{% table %}

- Name
- Description

---

- `teams.*`
- This event triggers on any teams event.
  Returns [Team Object](/docs/references/cloud/models/team)

---

- `teams.*.create`
- This event triggers when a team is created.
  Returns [Team Object](/docs/references/cloud/models/team)

---

- `teams.*.delete`
- This event triggers when a team is deleted.
  Returns [Team Object](/docs/references/cloud/models/team)

---

- `teams.*.memberships.*`
- This event triggers on any team memberships event.
  Returns [Membership Object](/docs/references/cloud/models/membership)

---

- `teams.*.memberships.*.create`
- This event triggers when a membership is created.
  Returns [Membership Object](/docs/references/cloud/models/membership)

---

- `teams.*.memberships.*.delete`
- This event triggers when a membership is deleted.
  Returns [Membership Object](/docs/references/cloud/models/membership)

---

- `teams.*.memberships.*.update`
- This event triggers when a membership is updated.
  Returns [Membership Object](/docs/references/cloud/models/membership)

---

- `teams.*.memberships.*.update.status`
- This event triggers when a team memberships status is updated.
  Returns [Membership Object](/docs/references/cloud/models/membership)

---

- `teams.*.update`
- This event triggers when a team is updated.
  Returns [Team Object](/docs/references/cloud/models/team)

---

- `teams.*.update.prefs`
- This event triggers when a team's preferences are updated.
  Returns [Team Object](/docs/references/cloud/models/team)

---

- `users.*`
- This event triggers on any user's event.
  Returns [User Object](/docs/references/cloud/models/user)

---

- `users.*.create`
- This event triggers when a user is created.
  Returns [User Object](/docs/references/cloud/models/user)

---

- `users.*.delete`
- This event triggers when a user is deleted.
  Returns [User Object](/docs/references/cloud/models/user)

---

- `users.*.recovery.*`
- This event triggers on any user's recovery token event.
  Returns [Token Object](/docs/references/cloud/models/token)

---

- `users.*.recovery.*.create`
- This event triggers when a recovery token for a user is created.
  Returns [Token Object](/docs/references/cloud/models/token)

---

- `users.*.recovery.*.update`
- This event triggers when a recovery token for a user is validated.
  Returns [Token Object](/docs/references/cloud/models/token)

---

- `users.*.sessions.*`
- This event triggers on any user's sessions event.
  Returns [Session Object](/docs/references/cloud/models/session)

---

- `users.*.sessions.*.create`
- This event triggers when a session for a user is created.
  Returns [Session Object](/docs/references/cloud/models/session)

---

- `users.*.sessions.*.delete`
- This event triggers when a session for a user is deleted.
  Returns [Session Object](/docs/references/cloud/models/session)

---

- `users.*.update`
- This event triggers when a user is updated.
  Returns [User Object](/docs/references/cloud/models/user)

---

- `users.*.update.email`
- This event triggers when a user's email address is updated.
  Returns [User Object](/docs/references/cloud/models/user)

---

- `users.*.update.name`
- This event triggers when a user's name is updated.
  Returns [User Object](/docs/references/cloud/models/user)

---

- `users.*.update.password`
- This event triggers when a user's password is updated.
  Returns [User Object](/docs/references/cloud/models/user)

---

- `users.*.update.prefs`
- This event triggers when a user's preferences is updated.
  Returns [User Object](/docs/references/cloud/models/user)

---

- `users.*.update.status`
- This event triggers when a user's status is updated.
  Returns [User Object](/docs/references/cloud/models/user)

---

- `users.*.verification.*`
- This event triggers on any user's verification token event.
  Returns [Token Object](/docs/references/cloud/models/token)

---

- `users.*.verification.*.create`
- This event triggers when a verification token for a user is created.
  Returns [Token Object](/docs/references/cloud/models/token)

---

- `users.*.verification.*.update`
- This event triggers when a verification token for a user is validated.
  Returns [Token Object](/docs/references/cloud/models/token)

{% /table %}

{% /accordion_item %}
{% accordion_item title="Databases" %}
{% table %}

- Name
- Description

---

- `tablesdb.*`
- This event triggers on any database event.
  Returns [Database Object](/docs/references/cloud/models/database)

---

- `tablesdb.*.tables.*`
- This event triggers on any table event.
  Returns [Table Object](/docs/references/cloud/models/table)

---

- `tablesdb.*.tables.*.columns.*`
- This event triggers on any columns event.
  Returns [Column Object](/docs/references/cloud/models/columnList)

---

- `tablesdb.*.tables.*.columns.*.create`
- This event triggers when a column is created.
  Returns [Column Object](/docs/references/cloud/models/columnList)

---

- `tablesdb.*.tables.*.columns.*.update`
- This event triggers when a column is updated.
  Returns [Column Object](/docs/references/cloud/models/columnList)

---

- `tablesdb.*.tables.*.columns.*.delete`
- This event triggers when a column is deleted.
  Returns [Column Object](/docs/references/cloud/models/columnList)

---

- `tablesdb.*.tables.*.create`
- This event triggers when a table is created.
  Returns [Table Object](/docs/references/cloud/models/table)

---

- `tablesdb.*.tables.*.delete`
- This event triggers when a table is deleted.
  Returns [Table Object](/docs/references/cloud/models/table)

---

- `tablesdb.*.tables.*.rows.*`
- This event triggers on any rows event.
  Returns [Row Object](/docs/references/cloud/models/row)

---

- `tablesdb.*.tables.*.rows.*.create`
- This event triggers when a row is created.
  Returns [Row Object](/docs/references/cloud/models/row)

---

- `tablesdb.*.tables.*.rows.*.delete`
- This event triggers when a row is deleted.
  Returns [Row Object](/docs/references/cloud/models/row)

---

- `tablesdb.*.tables.*.rows.*.update`
- This event triggers when a row is updated.
  Returns [Row Object](/docs/references/cloud/models/row)

---

- `tablesdb.*.tables.*.rows.*.upsert`
- This event triggers when a row is upserted.
  Returns [Row Object](/docs/references/cloud/models/row)

---

- `tablesdb.*.tables.*.indexes.*`
- This event triggers on any indexes event.
  Returns [Index Object](/docs/references/cloud/models/columnIndex)

---

- `tablesdb.*.tables.*.indexes.*.create`
- This event triggers when an index is created.
  Returns [Index Object](/docs/references/cloud/models/columnIndex)

---

- `tablesdb.*.tables.*.indexes.*.update`
- This event triggers when an index is updated.
  Returns [Index Object](/docs/references/cloud/models/columnIndex)

---

- `tablesdb.*.tables.*.indexes.*.delete`
- This event triggers when an index is deleted.
  Returns [Index Object](/docs/references/cloud/models/columnIndex)

---

- `tablesdb.*.tables.*.update`
- This event triggers when a table is updated.
  Returns [Table Object](/docs/references/cloud/models/table)

---

- `tablesdb.*.create`
- This event triggers when a database is created.
  Returns [Database Object](/docs/references/cloud/models/database)

---

- `tablesdb.*.delete`
- This event triggers when a database is deleted.
  Returns [Database Object](/docs/references/cloud/models/database)

---

- `tablesdb.*.update`
- This event triggers when a database is updated.
  Returns [Database Object](/docs/references/cloud/models/database){% /table %}

{% /accordion_item %}
{% accordion_item title="Storage" %}
{% table %}

- Name
- Description

---

- `buckets.*`
- This event triggers on any buckets event.
  Returns [Bucket Object](/docs/references/cloud/models/bucket)

---

- `buckets.*.create`
- This event triggers when a bucket is created.
  Returns [Bucket Object](/docs/references/cloud/models/bucket)

---

- `buckets.*.delete`
- This event triggers when a bucket is deleted.
  Returns [Bucket Object](/docs/references/cloud/models/bucket)

---

- `buckets.*.files.*`
- This event triggers on any files event.
  Returns [File Object](/docs/references/cloud/models/file)

---

- `buckets.*.files.*.create`
- Since the Clikkle SDK chunks files in 5MB increments, this event will trigger for each 5MB chunk. A file is fully uploaded when `chunksTotal` equals `chunksUploaded`.
  Returns [File Object](/docs/references/cloud/models/file)

---

- `buckets.*.files.*.delete`
- This event triggers when a file is deleted.
  Returns [File Object](/docs/references/cloud/models/file)

---

- `buckets.*.files.*.update`
- This event triggers when a file is updated.
  Returns [File Object](/docs/references/cloud/models/file)

---

- `buckets.*.update`
- This event triggers when a bucket is updated.
  Returns [Bucket Object](/docs/references/cloud/models/bucket)

{% /table %}

{% /accordion_item %}
{% accordion_item title="Functions" %}
{% table %}

- Name
- Description

---

- `functions.*`
- This event triggers on any functions event.
  Returns [Function Object](/docs/references/cloud/models/function)

---

- `functions.*.create`
- This event triggers when a function is created.
  Returns [Function Object](/docs/references/cloud/models/function)

---

- `functions.*.delete`
- This event triggers when a function is deleted.
  Returns [Function Object](/docs/references/cloud/models/function)

---

- `functions.*.deployments.*`
- This event triggers on any deployments event.
  Returns [Deployment Object](/docs/references/cloud/models/deployment)

---

- `functions.*.deployments.*.create`
- This event triggers when a deployment is created.
  Returns [Deployment Object](/docs/references/cloud/models/deployment)

---

- `functions.*.deployments.*.delete`
- This event triggers when a deployment is deleted.
  Returns [Deployment Object](/docs/references/cloud/models/deployment)

---

- `functions.*.deployments.*.update`
- This event triggers when a deployment is updated.
  Returns [Deployment Object](/docs/references/cloud/models/deployment)

---

- `functions.*.executions.*`
- This event triggers on any executions event.
  Returns [Execution Object](/docs/references/cloud/models/execution)

---

- `functions.*.executions.*.create`
- This event triggers when an execution is created.
  Returns [Execution Object](/docs/references/cloud/models/execution)

---

- `functions.*.executions.*.delete`
- This event triggers when an execution is deleted.
  Returns [Execution Object](/docs/references/cloud/models/execution)

---

- `functions.*.executions.*.update`
- This event triggers when an execution is updated.
  Returns [Execution Object](/docs/references/cloud/models/execution)

---

- `functions.*.update`
- This event triggers when a function is updated.
  Returns [Function Object](/docs/references/cloud/models/function)

{% /table %}

{% /accordion_item %}
{% accordion_item title="Messaging" %}
{% table %}

- Name
- Description

---

- `providers.*`
- This event triggers on any providers event.
  Returns [Provider Object](/docs/references/cloud/models/provider)

---

- `providers.*.create`
- This event triggers when a provider is created.
  Returns [Provider Object](/docs/references/cloud/models/provider)

---

- `providers.*.delete`
- This event triggers when a provider is deleted.
  Returns [Provider Object](/docs/references/cloud/models/provider)

---

- `providers.*.update`
- This event triggers when a provider is updated.
  Returns [Provider Object](/docs/references/cloud/models/provider)

---

- `topics.*`
- This event triggers on any topic event.
  Returns [Topic Object](/docs/references/cloud/models/topic)

---

- `topics.*.create`
- This event triggers when a topic is created.
  Returns [Topic Object](/docs/references/cloud/models/topic)

---

- `topics.*.delete`
- This event triggers when a topic is deleted.
  Returns [Topic Object](/docs/references/cloud/models/topic)

---

- `topics.*.update`
- This event triggers when a topic is updated.
  Returns [Topic Object](/docs/references/cloud/models/topic)

---

- `topics.*.subscribers.*.create`
- This event triggers when a subscriber to a topic is created.
  Returns [Topic Object](/docs/references/cloud/models/topic)

---

- `topics.*.subscribers.*.delete`
- This event triggers when a subscriber to a topic is deleted.
  Returns [Topic Object](/docs/references/cloud/models/topic)

---

- `messages.*`
- This event triggers on any message event.
  Returns [Message Object](/docs/references/cloud/models/message)

---

- `messages.*.create`
- This event triggers when a message is created.
  Returns [Message Object](/docs/references/cloud/models/message)

---

- `messages.*.delete`
- This event triggers when a message is deleted.
  Returns [Message Object](/docs/references/cloud/models/message)

---

- `messages.*.update`
- This event triggers when a message is updated.
  Returns [Message Object](/docs/references/cloud/models/message)

{% /table %}

{% /accordion_item %}
{% /accordion %}

# Schedule {% #schedule %}

Clikkle supports scheduled function executions. You can schedule executions using [cron expressions](https://en.wikipedia.org/wiki/Cron) in the settings of your function. Cron supports recurring executions as frequently as **every minute**.

Here are some cron expressions for common intervals:

| Cron Expression  | Schedule              |
| ---------------- | --------------------- |
| `*/15 * * * *`   | Every 15 minutes      |
| `0 * * * *`      | Every Hour            |
| `0 0 * * *`      | Every day at 00:00    |
| `0 0 * * 1`      | Every Monday at 00:00 |

# Delayed executions {% #delayed-executions %}

You can also delay function executions, which trigger the function only once at a future date and time. You can schedule a function execution using the Clikkle Console, a Client SDK, or a Server SDK.

{% tabs %}
{% tabsitem #console title="Console" %}
To schedule an execution, navigate to **Your function** > **Executions** > **Execute now** > **Schedule** in the Clikkle Console.

{% only_dark %}
![Scheduled execution details screen](/clikkle/images/docs/functions/execution/dark/scheduled-execution-function.png)
{% /only_dark %}
{% only_light %}
![Scheduled execution details screen](/clikkle/images/docs/functions/execution/scheduled-execution-function.png)
{% /only_light %}
{% /tabsitem %}

{% tabsitem #client-sdk title="Client SDK" %}
You can also schedule your function executions using a supported [Client SDK](/docs/sdks/#client).

{% multicode %}

```client-web
import { Client, Functions, ExecutionMethod } from "clikkle";

const client = new Client()
    .setProject('<PROJECT_ID>'); // Your project ID

const functions = new Functions(client);

const result = await functions.createExecution({
    functionId: '<FUNCTION_ID>',
    body: '<BODY>', // optional
    async: true, // Scheduled executions need to be async
    xpath: '<PATH>', // optional
    method: ExecutionMethod.GET, // optional
    headers: {}, // optional
    scheduledAt: '2020-10-15T06:38:00.000+00:00' // Schedule execution (optional)
});

console.log(result);
```

```client-flutter
import 'package:clikkle/clikkle.dart';

Client client = Client()
    .setProject('<PROJECT_ID>'); // Your project ID

Functions functions = Functions(client);

Execution result = await functions.createExecution(
    functionId: '<FUNCTION_ID>', // functionId
    body: '<BODY>', // optional
    xasync: true, // Scheduled executions need to be async
    path: '<PATH>', // optional
    method: ExecutionMethod.gET, // optional
    headers: {}, // optional
    scheduledAt: '2020-10-15T06:38:00.000+00:00' // Schedule execution (optional)
);
```

```client-react-native
import { Client, Functions, ExecutionMethod } from "react-native-clikkle";

const client = new Client()
    .setProject('<PROJECT_ID>'); // Your project ID

const functions = new Functions(client);

const result = await functions.createExecution({
    functionId: '<FUNCTION_ID>',
    body: '<BODY>', // optional
    async: true, // Scheduled executions need to be async
    xpath: '<PATH>', // optional
    method: ExecutionMethod.GET, // optional
    headers: {}, // optional
    scheduledAt: '2020-10-15T06:38:00.000+00:00' // Schedule execution (optional)
});

console.log(result);
```

```client-apple
import Clikkle
import ClikkleEnums

let client = Client()
    .setProject("<PROJECT_ID>") // Your project ID

let functions = Functions(client)

let execution = try await functions.createExecution(
    functionId: "<FUNCTION_ID>", // functionId
    body: "<BODY>", // optional
    async: true, // Scheduled executions need to be async
    path: "<PATH>", // optional
    method: .gET, // optional
    headers: [:], // optional
    scheduledAt: "2020-10-15T06:38:00.000+00:00" // Schedule execution (optional)
)
```

```client-android-kotlin
import io.clikkle.Client
import io.clikkle.coroutines.CoroutineCallback
import io.clikkle.services.Functions

val client = Client(context)
    .setProject("<PROJECT_ID>") // Your project ID

val functions = Functions(client)

val result = functions.createExecution(
    functionId = "<FUNCTION_ID>", // functionId
    body = "<BODY>", // (optional)
    async = true, // Scheduled executions need to be async
    path = "<PATH>", // (optional)
    method = ExecutionMethod.GET, // (optional)
    headers = mapOf( "a" to "b" ), // (optional)
    scheduledAt = "2020-10-15T06:38:00.000+00:00" // Schedule execution (optional)
)
```

```graphql
mutation {
    functionsCreateExecution(
        functionId: "<FUNCTION_ID>",
        body: "<BODY>",
        async: true,
        path: "<PATH>",
        method: "GET",
        headers: "{}",
        scheduledAt: "2020-10-15T06:38:00.000+00:00"
    ) {
        _id
        _createdAt
        _updatedAt
        _permissions
        functionId
        trigger
        status
        requestMethod
        requestPath
        requestHeaders {
            name
            value
        }
        responseStatusCode
        responseBody
        responseHeaders {
            name
            value
        }
        logs
        errors
        duration
    }
}
```


```http
POST https://<REGION>.cloud.clikkle.io/v1/functions/<FUNCTION_ID>/executions HTTP/1.1
X-Clikkle-Project: "<PROJECT_ID>"
X-Clikkle-Response-Format: 1.5.0
Content-Type: application/json

{
  "body": "<BODY>",
  "async": true,
  "path": "<PATH>",
  "method": "GET",
  "headers": {},
  "scheduledAt": "2025-10-15T06:38:00.000+00:00"
}
```

{% /multicode %}

{% /tabsitem %}

{% tabsitem #sdk title="Server SDK" %}
You can also schedule your function executions using a supported [Server SDK](/docs/sdks/#server).

{% multicode %}
```server-nodejs
const sdk = require('node-clikkle');

// Init SDK
const client = new sdk.Client();

const functions = new sdk.Functions(client);

client
    .setProject('<PROJECT_ID>') // Your project ID
;

const promise = functions.createExecution(
        '<FUNCTION_ID>', // functionId
        '<BODY>', // body (optional)
        true, // Scheduled executions need to be async
        '<PATH>', // path (optional)
        ExecutionMethod.GET, // method (optional)
        {}, // headers (optional)
        '2020-10-15T06:38:00.000+00:00' // Schedule execution (optional)
    );

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
```
```deno
import * as sdk from "npm:node-clikkle";

// Init SDK
let client = new sdk.Client();

let functions = new sdk.Functions(client);

client
    .setProject('<PROJECT_ID>') // Your project ID
;

const promise = functions.createExecution(
        '<FUNCTION_ID>', // functionId
        '<BODY>', // body (optional)
        true, // Scheduled executions need to be async
        '<PATH>', // path (optional)
        ExecutionMethod.GET, // method (optional)
        {}, // headers (optional)
        '2020-10-15T06:38:00.000+00:00' // Schedule execution (optional)
    );

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
```
```go
package main

import (
	"fmt"

	"github.com/clikkle/sdk-for-go/clikkle"
)

func main() {
	client := clikkle.NewClient(
		clikkle.WithProject("<PROJECT_ID>"),
	)

	functions := clikkle.NewFunctions(client)

	execution, err := functions.CreateExecution(
		"<FUNCTION_ID>", // functionId
		functions.WithCreateExecutionBody("<BODY>"), // body (optional)
		functions.WithCreateExecutionAsync(true), // Scheduled executions need to be async
		functions.WithCreateExecutionPath("<PATH>"), // path (optional)
		functions.WithCreateExecutionMethod("GET"), // method (optional)
		functions.WithCreateExecutionHeaders(map[string]interface{}{}), // headers (optional)
		functions.WithCreateExecutionScheduledAt("2025-10-15T06:38:00.000+00:00")) // Schedule execution (optional)

	fmt.Println(execution)

	if err != nil {
		fmt.Println(err)
	}
}
```
```php
<?php

use Clikkle\Client;
use Clikkle\Services\Functions;

$client = new Client();

$client
    ->setProject('<PROJECT_ID>') // Your project ID
;

$functions = new Functions($client);

$result = $functions->createExecution(
    '<FUNCTION_ID>', // functionId
    '<BODY>', // body (optional)
    true, // Scheduled executions need to be async
    '<PATH>', // path (optional)
    ExecutionMethod.GET, // method (optional)
    {}, // headers (optional)
    '2020-10-15T06:38:00.000+00:00' // Schedule execution (optional)
);
```
```python
from clikkle.client import Client
from clikkle.services.functions import Functions

client = Client()

(client
  .set_project('<PROJECT_ID>') # Your project ID
)

functions = Functions(client)

result = functions.create_execution(
    function_id = '<FUNCTION_ID>', # functionId
    body = '<BODY>', # body (optional)
    async = True, # Scheduled executions need to be async
    path = '<PATH>', # path (optional)
    method = ExecutionMethod.GET, # method (optional)
    headers = {} # headers (optional)
    scheduled_at = '2020-10-15T06:38:00.000+00:00' # Schedule execution (optional)
)
```
```ruby
require 'clikkle'

include Clikkle

client = Client.new
    .set_project('<PROJECT_ID>') # Your project ID

functions = Functions.new(client)

response = functions.create_execution(
    function_id: '<FUNCTION_ID>', # functionId
    body: '<BODY>', # body (optional)
    async: true, # Scheduled executions need to be async
    path: '<PATH>', # path (optional)
    method: ExecutionMethod::GET, # method (optional)
    headers: {} # headers (optional)
    scheduled_at: '2020-10-15T06:38:00.000+00:00' # Schedule execution (optional)
)

puts response.inspect
```
```csharp
using Clikkle;
using Clikkle.Services;
using Clikkle.Models;

var client = new Client()
    .SetProject("<PROJECT_ID>"); // Your project ID

var functions = new Functions(client);

Execution result = await functions.CreateExecution(
    functionId: "<FUNCTION_ID>", // functionId
    body: "<BODY>", // body (optional)
    async: true, // Scheduled executions need to be async
    path: "<PATH>", // path (optional)
    method: ExecutionMethod.GET, // method (optional)
    headers: [object] // headers (optional)
    scheduledAt: "2020-10-15T06:38:00.000+00:00"; // Schedule execution (optional)
```
```dart
import 'package:dart_clikkle/dart_clikkle.dart';

void main() { // Init SDK
  Client client = Client();
  Functions functions = Functions(client);

  client
    .setProject('<PROJECT_ID>') // Your project ID
  ;

  Future result = functions.createExecution(
    functionId: '<FUNCTION_ID>', // functionId
    body: '<BODY>', // (optional)
    xasync: true, // Scheduled executions need to be async
    path: '<PATH>', // (optional)
    method: ExecutionMethod.GET, // (optional)
    headers: {}, // (optional)
    scheduledAt: '2020-10-15T06:38:00.000+00:00' // Schedule execution (optional)
  );

  result
    .then((response) {
      print(response); // Success
    }).catchError((error) {
      print(error.response); // Failure
  });
}
```
```kotlin
import io.clikkle.Client;
import io.clikkle.coroutines.CoroutineCallback;
import io.clikkle.services.Functions;

Client client = new Client()
    .setProject("<PROJECT_ID>"); // Your project ID

Functions functions = new Functions(client);

functions.createExecution(
    "<FUNCTION_ID>", // functionId
    "<BODY>", // body (optional)
    true, // Scheduled executions need to be async
    "<PATH>", // path (optional)
    "GET", // method (optional)
    mapOf( "a" to "b" ), // headers (optional)
    "2020-10-15T06:38:00.000+00:00", // Schedule execution (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
```
```java
import io.clikkle.Client;
import io.clikkle.coroutines.CoroutineCallback;
import io.clikkle.services.Functions;

Client client = new Client()
    .setProject("<PROJECT_ID>"); // Your project ID

Functions functions = new Functions(client);

functions.createExecution(
    "<FUNCTION_ID>", // functionId
    "<BODY>", // body (optional)
    true, // Scheduled executions need to be async
    "<PATH>", // path (optional)
    ExecutionMethod.GET, // method (optional)
    mapOf( "a" to "b" ), // headers (optional)
    "2020-10-15T06:38:00.000+00:00" // Schedule execution (optional)
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        System.out.println(result);
    })
);
```
```swift
import Clikkle

let client = Client()
    .setProject("<PROJECT_ID>") // Your project ID

let functions = Functions(client)

let execution = try await functions.createExecution(
  functionId: "<FUNCTION_ID>",
  body: "<BODY>", // optional
  async: true, // Scheduled executions need to be async
  path: "<PATH>", // optional
  method: .gET, // optional
  headers: [:] // optional
  scheduledAt: "2020-10-15T06:38:00.000+00:00" // Schedule execution (optional)
)
```
{% /multicode %}

{% /tabsitem %}
{% /tabs %}

# Permissions {% #permission %}

Clikkle Functions can be executed using Client or Server SDKs. Client SDKs must be authenticated with an account that has been granted execution [permissions](/docs/advanced/platform/permissions) on the function's settings page. Server SDKs require an API key with the correct scopes.

If your function has a generated or custom domain, executions are not authenticated. Anyone visiting the configured domains will be considered a guest, so make sure to give `Any` execute permission in order for domain executions to work. If you need to enforce permissions for functions with a domain, use authentication methods like JWT.

