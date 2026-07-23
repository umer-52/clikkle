---
layout: article
title: Pro
description: Understand Clikkle's pricing plans, behaviors, billing cycles, and limitations.
---

Clikkle Cloud's Pro plan is designed for professional developers or development teams that need to build applications at scale.
When applications outgrow Clikkle's Free plan, organizations can switch to a Pro plan to continue growing their apps.
You can learn more about the Pro plan on the [pricing page](https://clikkle.io/pricing).

# Create a Pro plan organization {% #create-a-pro-plan-organizations %}

Clikkle's plans are applied to an entire organization, but resources are allocated per project.
Get started with a Pro plan organization by visiting the [pricing page](https://clikkle.io/pricing) and click **Start building**
or create a new organization from the Clikkle Console and select **Pro plan**.

## Switch to Pro plan {% #switch-to-pro-plan %}

You can access your organization's overview through the profile menu at the top right of your Clikkle Console.
Under the **Billing** tab, you can click **Change plan** to update your organization's plan.

# Resource limits {% #resource-limits %}

Each plan in Clikkle Cloud has a set of resource limits per project. You can find the details of these resource limits on the [pricing page](https://clikkle.io/pricing).

Additional resources are automatically purchased when your organization exceeds the resource limits to continue scaling until the budget cap is reached.
Each resource limit is applied per billing period and resets at the beginning of each billing period.

## Budget cap {% #budget-cap %}

Clikkle allows organizations to set budget caps when using a Pro plan.
Clikkle will automatically scale Pro plan projects as they require more resources.
Budget caps limit the amount of automatic scaling and prevent unexpected bills.

Organization budget caps can be set by navigating to the organization's **Billing** tab, under **Budget cap**, toggling, and setting a budget cap.
Clikkle will send emails to warn organization members when they are near the budget cap.

## Check resource usage {% #check-resource-usage %}

You can check your organization's resource usage for the current billing cycle by navigating to your organization, under the **Usage** tab.

## Reaching resource limits {% #reaching-resource-limits %}

Reaching your organization's resource limits will have the following effects until the current billing period ends.
{% table %}

- Component
- Consequence

---

- **Bandwidth** {% rowspan=3 %}
- More bandwidth will be purchased automatically until your organization reaches a budget cap. If the organization uses a Free plan or a budget cap is reached, API access will be denied until your organization's plan is upgraded or your budget cap is increased.

---

- Importing projects via migrations disabled, but you can still export your projects.

---

- Platform creation disabled.

---

- **Users**
- Creating new accounts and team invitations disabled.

---

- **Compute**
- Function executions are disabled.

---

- **Realtime**
- Realtime subscriptions disabled.

---

- **Storage**
- File uploads are disabled. Persists across billing periods until the amount of storage used is below the plan limit.

{% /table %}

## Switching to Free plan and reaching limits {% #switching-to-free-plan-reaching-resource-limits %}

When an orgnization switches from Pro or Scale plan to Free plan, the organization's projects will be able to take advantage of the existing limits until the end of the current billing period.
After the billing period ends, the Free plan limits and consequences will apply.

If an organisation has multiple members after the billing period ends, all admins besides the original creator of the organization will be removed.
The following consequences should also apply at the project level if the Free plan per-project resource limits have been exceeded.

{% table %}

- Component
- Action

---

- **Platforms**
- If more than 3 platforms have been created, disable them in order of date created (oldest ones first).

---

- **Webhooks**
- If more than 2 webhooks have been created, disable them in order of date created (oldest ones first).

---

- **Teams**
- If more than 100 teams have been created, disable them in order of date created (oldest ones first).

---

- **Databases**
- If more than 1 database has been created, disable them in order of date created (oldest ones first).

---

- **Buckets**
- If more than 3 buckets have been created, disable them in order of date created (oldest ones first).

---

- **Functions**
- If more than 5 functions have been created, disable them in order of date created (oldest ones first).

{% /table %}


