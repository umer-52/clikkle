---
layout: article
title: Webhooks
description: Leverage webhooks in the Clikkle platform for real-time updates. Learn how to configure, manage, and integrate webhooks to keep your applications in sync.
---

Webhooks allow you to build or set up integrations which subscribe to certain events on Clikkle. When one of those events is triggered, we'll send an HTTP POST payload to the webhook's configured URL. Webhooks can be used to purge cache from CDN, calculate data or send a Slack notification. You're only limited by your imagination.

# Getting started {% #getting-started %}

You can set your webhook by adding it from your Clikkle project dashboard. You can access your webhooks settings from your project dashboard or on the left navigation panel. Click the 'Add Webhook' button and choose your webhook name and the events that should trigger it. You can also set an optional basic HTTP authentication username and password to protect your endpoint from unauthorized access.

# Payload {% #payload %}

Each event type has a specific payload format with the relevant event information. All event payloads mirror the payloads for the API payload which parallel to the [event types](/docs/advanced/platform/events).

# Headers {% #headers %}

HTTP requests made to your webhook's configured URL endpoint will contain several special headers.

| Header | Description |
|--------|-------------|
| X-Clikkle-Webhook-Id | The ID of the Webhook who triggered the event. |
| X-Clikkle-Webhook-Events | Names of the events that triggered this delivery. |
| X-Clikkle-Webhook-Name | Name of the webhook as specified in your app settings and [events list](/docs/advanced/platform/events). |
| X-Clikkle-Webhook-User-Id | The user ID of the user who triggered the event. Returns an empty string if an API key triggered the event. Note that events like `account.create` or `account.sessions.create` are performed by guest users and will not return any user ID. If you still need the user ID for these events, you can find it in the event payload. |
| X-Clikkle-Webhook-Project-Id | The ID of the project who owns the Webhook and API call. |
| X-Clikkle-Webhook-Signature | The HMAC-SHA1 signature of the payload. This is used to verify the authenticity of the payload. |
| User-Agent | Each request made by Clikkle will be 'Clikkle-Server'. |

# Verification {% #verification %}

Webhooks can be verified by using the [X-Clikkle-Webhook-Signature](/docs/advanced/platform/webhooks#headers) header.
This is the HMAC-SHA1 signature of the payload. You can find the signature key in your webhooks properties in the dashboard.
To generate this hash you append the payload to the end of webhook URL (make sure there are no spaces in between) and then use the HMAC-SHA1 algorithm to generate the signature.
After you've generated the signature, compare it to the `X-Clikkle-Webhook-Signature` header value.
If they match, the payload is valid and you can trust it came from your Clikkle instance.


# Events {% #events %}

Clikkle has events that fire when a resource changes.
These events cover all Clikkle resources and can reflect create, update, and delete actions.
You can specify one or many events to subscribe to with webhooks.

{% accordion %}
{% accordion_item title="Authentication events" %}
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
{% accordion_item title="Databases events" %}
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
{% accordion_item title="Storage events" %}
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
{% accordion_item title="Functions events" %}
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
{% accordion_item title="Messaging events" %}
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

[Learn more about events](/docs/advanced/platform/api-keys)

