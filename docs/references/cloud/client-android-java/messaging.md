# messaging

Clikkle Messaging helps you communicate with your users through push notifications, emails, and SMS text messages.
Sending personalized communication for marketing, updates, and realtime alerts can increase user engagement and retention.
You can also use Clikkle Messaging to implement security checks and custom authentication flows.

You can find guides and examples on using the Messaging API in the Clikkle Messaging product pages.


## Base URL

```
https://<REGION>.cloud.appwrite.io/v1
```

## Endpoints

### subscribers

#### Create subscriber

Create a new subscriber.

**Endpoint:** `POST /messaging/topics/{topicId}/subscribers`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| topicId | string | Yes | Topic ID. The topic ID to subscribe to. |
| subscriberId | string | Yes | Subscriber ID. Choose a custom Subscriber ID or a new Subscriber ID. |
| targetId | string | Yes | Target ID. The target ID to link to the specified Topic ID. |

**Responses:**

- **201**: application/json
  - [Subscriber](/docs/references/cloud/models/subscriber)

**Example:**

```client-android-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>"); // Your project ID

Messaging messaging = new Messaging(client);

messaging.createSubscriber(
    "<TOPIC_ID>", // topicId 
    "<SUBSCRIBER_ID>", // subscriberId 
    "<TARGET_ID>", // targetId 
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        Log.d("Appwrite", result.toString());
    })
);

```

---

#### Delete subscriber

Delete a subscriber by its unique ID.

**Endpoint:** `DELETE /messaging/topics/{topicId}/subscribers/{subscriberId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| topicId | string | Yes | Topic ID. The topic ID subscribed to. |
| subscriberId | string | Yes | Subscriber ID. |

**Responses:**

- **204**: no content

**Example:**

```client-android-java
import io.appwrite.Client;
import io.appwrite.coroutines.CoroutineCallback;
import io.appwrite.services.Messaging;

Client client = new Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>"); // Your project ID

Messaging messaging = new Messaging(client);

messaging.deleteSubscriber(
    "<TOPIC_ID>", // topicId 
    "<SUBSCRIBER_ID>", // subscriberId 
    new CoroutineCallback<>((result, error) -> {
        if (error != null) {
            error.printStackTrace();
            return;
        }

        Log.d("Appwrite", result.toString());
    })
);

```

---

