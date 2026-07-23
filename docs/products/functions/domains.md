---
layout: article
title: Domains
description: Execute Clikkle Functions through domains using standard HTTP GET, POST, or other request methods to serve static, JSON, HTML, or other content.
---

Each deployed function can have its own domain, generated or developer defined.
You can use this domain to execute Clikkle Functions through HTTP methods.
You can use common practices like using paths, query parameters, headers, HTTP methods, formdata,
and all the typical HTTP concepts to implement Clikkle Functions.

Clikkle generates TLS certificates to enforce HTTPS on all Clikkle Functions domains, generated or custom.
These domains are safe to use and access in production.

{% arrow_link href="/docs/products/functions/develop" %}
Learn about Function development
{% /arrow_link %}

# Generated domains {% #generated-domains %}

Each function automatically receives a region-specific domain that's ready to use immediately after deployment.

1. In the Clikkle Console's sidebar, click **Functions**.
1. Under the **Domains** tab, you'll find the generated domain from Clikkle.

The generated domain ends with `.clikkle.run`, which executes your function directly in the region where it is deployed. For example:

```text
https://64d4d22db370ae41a32e.fra.clikkle.run
```

# Edge network domain {% #edge-network-domain %}

You can add an `clikkle.network` domain to your function to take advantage of Clikkle's edge network. The `clikkle.network` domain routes requests to the nearest region based on the user's geographic location, reducing latency for globally distributed users.

To add an edge network domain:

1. Navigate to the Clikkle Console's **Functions** page.
2. Navigate to the **Domains** tab.
3. Click on **Create domain** and add the `clikkle.network` domain to your function.

The edge network domain ends with `.clikkle.network`. For example:

```text
https://64d4d22db370ae41a32e.clikkle.network
```

{% arrow_link href="/docs/products/network/edges" %}
Learn more about edge network
{% /arrow_link %}


# Add a custom domain {% #add-a-custom-domain %}

1. Navigate to the Clikkle Console's **Functions** page.
2. Navigate to the **Domains** tab.
3. Click on **Create domain**.
4. Input your domain and click **Next**.
5. Copy the **CNAME** record and add it to your domain registrar.
6. Click **Go to console** and wait for verification and certificate generation.

DNS records can take up to 48 hours to propagate.

When both **VERIFICATION STATUS** and **CERTIFICATE STATUS** are green, the new domain is ready to use.

