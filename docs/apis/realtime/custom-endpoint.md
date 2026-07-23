---
layout: article
title: Custom endpoint
description: Learn how to configure a custom WebSocket endpoint for the Clikkle Realtime API when using a custom proxy.
---

The SDK will guess the endpoint of the Realtime API when setting the endpoint of your Clikkle instance. If you are running Clikkle with a custom proxy and changed the route of the Realtime API, you can call the `setEndpointRealtime` method on the Client SDK and set your new endpoint value.

By default the endpoint is `wss://<REGION>.cloud.clikkle.io/v1/realtime`.

{% multicode %}
```client-web
import { Client } from "clikkle";
const client = new Client();

client.setEndpointRealtime('wss://<REGION>.cloud.clikkle.io/v1/realtime');
```

```client-flutter
import 'package:clikkle/clikkle.dart';

final client = Client();
client.setEndpointRealtime('wss://<REGION>.cloud.clikkle.io/v1/realtime');
```

```client-apple
import Clikkle

let client = Client()
client.setEndpointRealtime("wss://<REGION>.cloud.clikkle.io/v1/realtime")
```

```client-android-kotlin
import io.clikkle.Client

val client = Client(context)
client.setEndpointRealtime("wss://<REGION>.cloud.clikkle.io/v1/realtime")
```

```client-android-java
import io.clikkle.Client;

Client client = new Client(context);
client.setEndpointRealtime("wss://<REGION>.cloud.clikkle.io/v1/realtime");
```

{% /multicode %}

