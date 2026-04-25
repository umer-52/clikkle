---
layout: article
title: Accounts
description: Unlock advanced user management - Clikkle's Account API for seamless signups, authentication, and dynamic permissions.
---

Clikkle Account API is used for user signup and login in client applications.
Users can be organized into teams and be given labels, so they can be given different permissions and access different resources.

{% info title="Account vs Users API" %}
The Account API is the API you should use in your **client applications** with [Client SDKs](/docs/sdks#client) like web, Flutter, mobile, and native apps.
Account API creates sessions, which represent an authenticated user and is attached to a user's [account](/docs/products/auth/accounts).
Sessions respect [permissions](/docs/advanced/platform/permissions), which means users can only access resources if they have been granted the correct permissions.

The Users API is a dedicated API for managing users from an admin's perspective.
It should be used with backend or server-side applications with [Server SDKs](/docs/sdks#server). Users API uses API keys instead of sessions.
This means they're not restricted by permissions, but by the scopes granted to the API key used.
{% /info %}


# Signup and login {% #signup-login %}

You can signup and login a user with an account create through
[email password](/docs/products/auth/email-password),
[phone (SMS)](/docs/products/auth/phone-sms),
[Anonymous](/docs/products/auth/anonymous),
[magic URL](/docs/products/auth/magic-url), and
[OAuth 2](/docs/products/auth/oauth2)
authentication.

# Permissions {% #permissions %}

You can grant permissions to all users using the `Role.users(<STATUS>)` role or
individual users using the `Role.user(<USER_ID>, <STATUS>)` role.
| Description                                 | Role                               |
| ------------------------------------------- | ------------------------------------------- |
| Verified users   | `Role.users('verified')`|
| Unverified users | `Role.users('unverified')` |
| Verified user   | `Role.user(<USER_ID>, 'verified')`|
| Unverified user | `Role.user(<USER_ID>, 'unverified')` |


{% arrow_link href="/docs/advanced/platform/permissions" %}
Learn more about permissions
{% /arrow_link %}



