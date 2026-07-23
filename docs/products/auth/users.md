---
layout: article
title: Manage users
description: Manage user identities and profiles effectively with Clikkle. Dive into user management features, account settings, and user data customization
---

Clikkle Users API is used for managing users in server applications.
Users API can only be used with an API key with the [Server SDK](/docs/sdks#server), to manage all users. 
If you need to act on behalf of users through an Clikkle Function or your own backend, use [JWT login](/docs/products/auth/jwt).

{% info title="Account vs Users API" %}
The Account API is the API you should use in your **client applications** with [Client SDKs](/docs/sdks#client) like web, Flutter, mobile, and native apps.
Account API creates sessions, which represent an authenticated user and is attached to a user's [account](/docs/products/auth/accounts).
Sessions respect [permissions](/docs/advanced/platform/permissions), which means users can only access resources if they have been granted the correct permissions.

The Users API is a dedicated API for managing users from an admin's perspective.
It should be used with backend or server-side applications with [Server SDKs](/docs/sdks#server). Users API uses API keys instead of sessions.
This means they're not restricted by permissions, but by the scopes granted to the API key used.
{% /info %}


The users API can be used to create users, import users, update user info, get user audit logs, and remove users.

{% arrow_link href="/docs/references/cloud/server-nodejs/users" %}
Learn more in the Users API references 
{% /arrow_link %}

