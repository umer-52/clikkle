---
layout: article
title: Events
description: Harness the power of events in Clikkle. Explore event-driven architecture, event types, and how to use events to create dynamic applications.
---

Clikkle provides a variety of events that allows your application to react to changes as they happen.
An event will fire when a change occurs in your Clikkle project, like when a new user registers or a new file is uploaded to Clikkle.
You can subscribe to these events with Clikkle [Functions](/docs/products/functions), [Realtime](/docs/apis/realtime), or [Webhooks](/docs/advanced/platform/webhooks).

You can subscribe to events for specific resources using their ID or subscribe to changes of all resources of the same type by using a wildcard character * instead of an ID.
You can also filter for events of specific actions like create, update, upsert, or delete.


You can find a list of events for Storage, Databases, Functions, Sites, and Authentication services below.

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


{% info title="Note" %}
Collections, documents, and attributes have been deprecated in favour of tables, rows, and columns. The `databases.*` event prefix has been replaced by `tablesdb.*`.
{% /info %}
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
{% accordion_item title="Sites" %}
{% table %}

- Name
- Description

---

- `sites.*`
- This event triggers on any sites event.
  Returns [Site Object](/docs/references/cloud/models/site)

---

- `sites.*.create`
- This event triggers when a site is created.
  Returns [Site Object](/docs/references/cloud/models/site)

---

- `sites.*.delete`
- This event triggers when a site is deleted.
  Returns [Site Object](/docs/references/cloud/models/site)

---

- `sites.*.deployments.*`
- This event triggers on any deployments event.
  Returns [Deployment Object](/docs/references/cloud/models/deployment)

---

- `sites.*.deployments.*.create`
- This event triggers when a deployment is created.
  Returns [Deployment Object](/docs/references/cloud/models/deployment)

---

- `sites.*.deployments.*.delete`
- This event triggers when a deployment is deleted.
  Returns [Deployment Object](/docs/references/cloud/models/deployment)

---

- `sites.*.deployments.*.update`
- This event triggers when a deployment is updated.
  Returns [Deployment Object](/docs/references/cloud/models/deployment)

---

- `sites.*.update`
- This event triggers when a site is updated.
  Returns [Site Object](/docs/references/cloud/models/site)

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

# Known limitations {% #known-limitations %}

When events fire, only existing subscriptions for that event will receive the update. If your client or server side integrations lose network connection temporarily, delivery of the event is not guaranteed.

For self-hosted instances, when the Clikkle containers are shut down and restarted, events with pending webhooks and subscription updates will not be delivered.

A change to a resource can cause multiple events to fire. For example adding a new row with ID `"lion-king"` to a table with the ID `"movies"` will cause all of the below events to fire.

```json
{
  "events": [
      "tablesdb.default.tables.movies.rows.lion-king.create",
      "tablesdb.*.tables.*.rows.*.create",
      "tablesdb.default.tables.*.rows.lion-king.create",
      "tablesdb.*.tables.*.rows.lion-king.create",
      "tablesdb.*.tables.movies.rows.lion-king.create",
      "tablesdb.default.tables.movies.rows.*.create",
      "tablesdb.*.tables.movies.rows.*.create",
      "tablesdb.default.tables.*.rows.*.create",
      "tablesdb.default.tables.movies.rows.lion-king",
      "tablesdb.*.tables.*.rows.*",
      "tablesdb.default.tables.*.rows.lion-king",
      "tablesdb.*.tables.*.rows.lion-king",
      "tablesdb.*.tables.movies.rows.lion-king",
      "tablesdb.default.tables.movies.rows.*",
      "tablesdb.*.tables.movies.rows.*",
      "tablesdb.default.tables.*.rows.*",
      "tablesdb.default.tables.movies",
      "tablesdb.*.tables.*",
      "tablesdb.default.tables.*",
      "tablesdb.*.tables.movies",
      "tablesdb.default",
      "tablesdb.*"
  ]
}
```

