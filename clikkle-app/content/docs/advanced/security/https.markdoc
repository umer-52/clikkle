---
layout: article
title: HTTPS
description: Learn how Clikkle Cloud enforces secure connections by enforcing HTTPS on all endpoints.
---

Clikkle Cloud serves all endpoints over an HTTPS connection by default. 
Requests made through an unsecure HTTP connection will be redirected to.

Redirected requests will show a `301` response status.

```http
HTTP/1.1 301 Moved Permanently
Content-Type: application/json
Location: https://<REGION>.cloud.clikkle.io/v1/<ENDPOINT>
```

Clikkle Cloud does not support HTTP, which is a common practice in modern development, because unencrypted
HTTP traffic is dangerous and exposes sensitive user data to malicious attackers.

# Strict-Transport-Security {% #strict-transport-security %}
Clikkle uses the [Strict-Transport-Security header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security)
to inform browsers that the website should only be accessed using HTTPS, further protecting against 
man-in-the-middle attacks such as protocol downgrade attacks and cookie hijacking. 
By enforcing HTTPS, Clikkle Cloud's endpoint will always be served over a secure connection, which helps protect users' data and privacy.

# Custom domains {% #custom-domains %}
You can add a [custom domain](/docs/advanced/platform/custom-domains) to your Clikkle project so you can access Clikkle API endpoints
on your own domain. Clikkle will [generate TLS certificates](/docs/advanced/security/tls) for your domain and enforce HTTPS communication.

# Function domains {% #function-domains %}
Clikkle generates domains for Clikkle Functions so they can be executed through HTTPS requests.
Clikkle also [generates TLS certificates](/docs/advanced/security/tls) for these domains to enforce HTTPS communication.

