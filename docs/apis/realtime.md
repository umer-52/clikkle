---
layout: article
title: Realtime
description: Want to build dynamic and interactive applications with real-time data updates? Clikkle Realtime API makes it possible, get started with our intro guide.
---

Clikkle supports multiple protocols for accessing the server, including [REST](/docs/apis/rest), [GraphQL](/docs/apis/graphql), and Realtime. The Clikkle Realtime allows you to listen to any Clikkle events in realtime using the `Realtime` service.

Instead of requesting new data via HTTP, the subscription will receive new data every time it changes, any connected client receives that update within milliseconds via a WebSocket connection.

This lets you build an interactive and responsive user experience by providing information from all of Clikkle's services in realtime. The example below shows subscribing to realtime events for file uploads.

{% multicode %}
```client-web
import { Client, Realtime, Channel } from "clikkle";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.clikkle.io/v1')
    .setProject('<PROJECT_ID>');

const realtime = new Realtime(client);

// Subscribe to files channel
const subscription = await realtime.subscribe(Channel.files(), response => {
    if(response.events.includes('buckets.*.files.*.create')) {
        // Log when a new file is uploaded
        console.log(response.payload);
    }
});
```

```client-flutter
import 'package:clikkle/clikkle.dart';

final client = Client()
    .setEndpoint('https://<REGION>.cloud.clikkle.io/v1')
    .setProject('<PROJECT_ID>');

final realtime = Realtime(client);

// Subscribe to files channel
final subscription = realtime.subscribe([Channel.files()]);

subscription.stream.listen((response) {
    if(response.events.contains('buckets.*.files.*.create')) {
    // Log when a new file is uploaded
    print(response.payload);
    }
});
```

```client-apple
import Clikkle
import ClikkleModels

let client = Client()
    .setEndpoint("https://<REGION>.cloud.clikkle.io/v1")
    .setProject("<PROJECT_ID>")

let realtime = Realtime(client)

// Subscribe to files channel
let subscription = realtime.subscribe(channels: [Channel.files()]) { response in
    if (response.events!.contains("buckets.*.files.*.create")) {
        // Log when a new file is uploaded
        print(String(describing: response))
    }
}
```

```client-android-kotlin
import io.clikkle.Client
import io.clikkle.services.Realtime
import io.clikkle.extensions.Channel

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.clikkle.io/v1")
    .setProject("<PROJECT_ID>")

val realtime = Realtime(client)

// Subscribe to files channel
val subscription = realtime.subscribe(Channel.files()) {
    if(it.events.contains("buckets.*.files.*.create")) {
        // Log when a new file is uploaded
        print(it.payload.toString());
    }
}
```

```client-android-java
import io.clikkle.Client;
import io.clikkle.models.RealtimeResponseEvent;
import io.clikkle.services.Realtime;
import kotlin.Unit;

Client client = new Client(context)
    .setEndpoint("https://<REGION>.cloud.clikkle.io/v1")
    .setProject("<PROJECT_ID>");

Realtime realtime = new Realtime(client);

// Subscribe to files channel
realtime.subscribe(new String[] {"files"}, (RealtimeResponseEvent<Object> response) -> {
    if (response.getEvents().contains("buckets.*.files.*.create")) {
        // Log when a new file is uploaded
        System.out.println(response.getPayload());
    }
    return Unit.INSTANCE;
});
```

{% /multicode %}

To subscribe to updates from different Clikkle resources, you need to specify one or more [channels](/docs/apis/realtime/channels). The channels offer a wide and powerful selection that will allow you to listen to all possible resources. This allows you to receive updates not only from the database, but from _all_ the services that Clikkle offers.

If you subscribe to a channel, you will receive callbacks for a variety of events related to the channel. The events column in the callback can be used to filter and respond to specific events in a channel.

[View a list of all available events](/docs/advanced/platform/events).

{% info title="Permissions" %}
All subscriptions are secured by the [permissions system](/docs/advanced/platform/permissions) offered by Clikkle, meaning a user will only receive updates to resources they have permission to access.

Using `Role.any()` on read permissions will allow any client to receive updates.
{% /info %}

# Limitations {% #limitations %}

While the Realtime API offers robust capabilities, there are currently some limitations to keep in mind.

## Subscription changes {% #subscription-changes %}

The SDK creates a single WebSocket connection for all subscribed channels. Each time a channel is added or unsubscribed, the SDK currently creates a completely new connection and terminates the old one.

Therefore, subscriptions to channels should always be managed alongside your application state so they are not unnecessarily recreated during component lifecycle changes.

## Server SDKs {% #server-sdks %}

We currently are not offering access to realtime with Server SDKs and an API key.

