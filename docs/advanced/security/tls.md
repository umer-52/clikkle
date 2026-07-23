---
layout: article
title: TLS
description: Clikkle helps keep the web secure by generating TLS (Transport Layer Security) certificates for all user and generated domains.
---

Clikkle generates TLS certificates to ensure your API traffic is appropriately encrypted. The certificate authority used depends on your deployment type:

- **Self-hosted deployments** use [Let's Encrypt](https://letsencrypt.org/), an open source and not-for-profit certificate authority provided by the Internet Security Research Group (ISRG) that secures more than 363 million websites.
- **Clikkle Cloud** uses [Certainly](https://docs.fastly.com/products/certainly), Fastly's certificate authority, for Sites and Functions.

TLS certificates are generated for all of the following.
- Clikkle products and endpoints, like Databases, Storage, Authentication, Functions, Messaging, and all other endpoints.
- [Custom domains](/docs/advanced/platform/custom-domains) that you configure for your Clikkle projects.
- [Domains for Clikkle Functions](/docs/products/functions/domains), generated or user provided.
- [Domains for Clikkle Sites](/docs/products/sites/domains), generated or user provided.

TLS certificates are crucial to ensure all connections between your apps and Clikkle Cloud are encrypted.
This protects your users from attack vectors like man-in-the-middle and eavesdropping attacks.

