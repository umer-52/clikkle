# users

The Users service allows you to manage your project users. Use this service to search, block, and view your users' info, current sessions, and latest activity logs. You can also use the Users service to edit your users' preferences and personal info.


## Base URL

```
https://<REGION>.cloud.appwrite.io/v1
```

## Endpoints

#### Create User

Create a new user.

**Endpoint:** `POST /users`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. Choose your own unique ID or pass the string "unique()" to auto generate it. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| email | string | Yes | User email. |
| password | string | Yes | User password. Must be at least 8 chars. |
| name | string | No | User name. Max length: 128 chars. |

**Responses:**

- **201**: application/json
  - [User](/docs/references/0.15.x/models/user)

**Example:**

```server-swift
import Appwrite

func main() async throws {
    let client = Client()
      .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
      .setProject("5df5acd0d48c2") // Your project ID
      .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key
    let users = Users(client)
    let user = try await users.create(
        userId: "[USER_ID]",
        email: "email@example.com",
        password: "password"
    )

    print(String(describing: user)
}

```

---

#### Get User

Get a user by its unique ID.

**Endpoint:** `GET /users/{userId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/0.15.x/models/user)

**Example:**

```server-swift
import Appwrite

func main() async throws {
    let client = Client()
      .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
      .setProject("5df5acd0d48c2") // Your project ID
      .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key
    let users = Users(client)
    let user = try await users.get(
        userId: "[USER_ID]"
    )

    print(String(describing: user)
}

```

---

#### Get User Logs

Get the user activity logs list by its unique ID.

**Endpoint:** `GET /users/{userId}/logs`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| limit | integer | No | Maximum number of logs to return in response. By default will return maximum 25 results. Maximum of 100 results allowed per request. |
| offset | integer | No | Offset value. The default value is 0. Use this value to manage pagination. [learn more about pagination](https://appwrite.io/docs/pagination) |

**Responses:**

- **200**: application/json
  - [Logs List](/docs/references/0.15.x/models/logList)

**Example:**

```server-swift
import Appwrite

func main() async throws {
    let client = Client()
      .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
      .setProject("5df5acd0d48c2") // Your project ID
      .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key
    let users = Users(client)
    let logList = try await users.getLogs(
        userId: "[USER_ID]"
    )

    print(String(describing: logList)
}

```

---

#### Get User Memberships

Get the user membership list by its unique ID.

**Endpoint:** `GET /users/{userId}/memberships`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |

**Responses:**

- **200**: application/json
  - [Memberships List](/docs/references/0.15.x/models/membershipList)

**Example:**

```server-swift
import Appwrite

func main() async throws {
    let client = Client()
      .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
      .setProject("5df5acd0d48c2") // Your project ID
      .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key
    let users = Users(client)
    let membershipList = try await users.getMemberships(
        userId: "[USER_ID]"
    )

    print(String(describing: membershipList)
}

```

---

#### Get User Preferences

Get the user preferences by its unique ID.

**Endpoint:** `GET /users/{userId}/prefs`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |

**Responses:**

- **200**: application/json
  - [Preferences](/docs/references/0.15.x/models/preferences)

**Example:**

```server-swift
import Appwrite

func main() async throws {
    let client = Client()
      .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
      .setProject("5df5acd0d48c2") // Your project ID
      .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key
    let users = Users(client)
    let preferences = try await users.getPrefs(
        userId: "[USER_ID]"
    )

    print(String(describing: preferences)
}

```

---

#### Get User Sessions

Get the user sessions list by its unique ID.

**Endpoint:** `GET /users/{userId}/sessions`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |

**Responses:**

- **200**: application/json
  - [Sessions List](/docs/references/0.15.x/models/sessionList)

**Example:**

```server-swift
import Appwrite

func main() async throws {
    let client = Client()
      .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
      .setProject("5df5acd0d48c2") // Your project ID
      .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key
    let users = Users(client)
    let sessionList = try await users.getSessions(
        userId: "[USER_ID]"
    )

    print(String(describing: sessionList)
}

```

---

#### List Users

Get a list of all the project's users. You can use the query params to filter your results.

**Endpoint:** `GET /users`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| search | string | No | Search term to filter your list results. Max length: 256 chars. |
| limit | integer | No | Maximum number of users to return in response. By default will return maximum 25 results. Maximum of 100 results allowed per request. |
| offset | integer | No | Offset value. The default value is 0. Use this param to manage pagination. [learn more about pagination](https://appwrite.io/docs/pagination) |
| cursor | string | No | ID of the user used as the starting point for the query, excluding the user itself. Should be used for efficient pagination when working with large sets of data. [learn more about pagination](https://appwrite.io/docs/pagination) |
| cursorDirection | string | No | Direction of the cursor, can be either 'before' or 'after'. |
| orderType | string | No | Order result by ASC or DESC order. |

**Responses:**

- **200**: application/json
  - [Users List](/docs/references/0.15.x/models/userList)

**Example:**

```server-swift
import Appwrite

func main() async throws {
    let client = Client()
      .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
      .setProject("5df5acd0d48c2") // Your project ID
      .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key
    let users = Users(client)
    let userList = try await users.list()

    print(String(describing: userList)
}

```

---

#### Update Email

Update the user email by its unique ID.

**Endpoint:** `PATCH /users/{userId}/email`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| email | string | Yes | User email. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/0.15.x/models/user)

**Example:**

```server-swift
import Appwrite

func main() async throws {
    let client = Client()
      .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
      .setProject("5df5acd0d48c2") // Your project ID
      .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key
    let users = Users(client)
    let user = try await users.updateEmail(
        userId: "[USER_ID]",
        email: "email@example.com"
    )

    print(String(describing: user)
}

```

---

#### Update Email Verification

Update the user email verification status by its unique ID.

**Endpoint:** `PATCH /users/{userId}/verification`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| emailVerification | boolean | Yes | User email verification status. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/0.15.x/models/user)

**Example:**

```server-swift
import Appwrite

func main() async throws {
    let client = Client()
      .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
      .setProject("5df5acd0d48c2") // Your project ID
      .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key
    let users = Users(client)
    let user = try await users.updateEmailVerification(
        userId: "[USER_ID]",
        emailVerification: xfalse
    )

    print(String(describing: user)
}

```

---

#### Update Name

Update the user name by its unique ID.

**Endpoint:** `PATCH /users/{userId}/name`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| name | string | Yes | User name. Max length: 128 chars. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/0.15.x/models/user)

**Example:**

```server-swift
import Appwrite

func main() async throws {
    let client = Client()
      .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
      .setProject("5df5acd0d48c2") // Your project ID
      .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key
    let users = Users(client)
    let user = try await users.updateName(
        userId: "[USER_ID]",
        name: "[NAME]"
    )

    print(String(describing: user)
}

```

---

#### Update Password

Update the user password by its unique ID.

**Endpoint:** `PATCH /users/{userId}/password`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| password | string | Yes | New user password. Must be at least 8 chars. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/0.15.x/models/user)

**Example:**

```server-swift
import Appwrite

func main() async throws {
    let client = Client()
      .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
      .setProject("5df5acd0d48c2") // Your project ID
      .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key
    let users = Users(client)
    let user = try await users.updatePassword(
        userId: "[USER_ID]",
        password: "password"
    )

    print(String(describing: user)
}

```

---

#### Update Phone

Update the user phone by its unique ID.

**Endpoint:** `PATCH /users/{userId}/phone`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| number | string | Yes | User phone number. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/0.15.x/models/user)

**Example:**

```server-swift
import Appwrite

func main() async throws {
    let client = Client()
      .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
      .setProject("5df5acd0d48c2") // Your project ID
      .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key
    let users = Users(client)
    let user = try await users.updatePhone(
        userId: "[USER_ID]",
        number: ""
    )

    print(String(describing: user)
}

```

---

#### Update Phone Verification

Update the user phone verification status by its unique ID.

**Endpoint:** `PATCH /users/{userId}/verification/phone`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| phoneVerification | boolean | Yes | User phone verification status. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/0.15.x/models/user)

**Example:**

```server-swift
import Appwrite

func main() async throws {
    let client = Client()
      .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
      .setProject("5df5acd0d48c2") // Your project ID
      .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key
    let users = Users(client)
    let user = try await users.updatePhoneVerification(
        userId: "[USER_ID]",
        phoneVerification: xfalse
    )

    print(String(describing: user)
}

```

---

#### Update User Preferences

Update the user preferences by its unique ID. The object you pass is stored as is, and replaces any previous value. The maximum allowed prefs size is 64kB and throws error if exceeded.

**Endpoint:** `PATCH /users/{userId}/prefs`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| prefs | object | Yes | Prefs key-value JSON object. |

**Responses:**

- **200**: application/json
  - [Preferences](/docs/references/0.15.x/models/preferences)

**Example:**

```server-swift
import Appwrite

func main() async throws {
    let client = Client()
      .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
      .setProject("5df5acd0d48c2") // Your project ID
      .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key
    let users = Users(client)
    let preferences = try await users.updatePrefs(
        userId: "[USER_ID]",
        prefs: [:]
    )

    print(String(describing: preferences)
}

```

---

#### Update User Status

Update the user status by its unique ID. Use this endpoint as an alternative to deleting a user if you want to keep user's ID reserved.

**Endpoint:** `PATCH /users/{userId}/status`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| status | boolean | Yes | User Status. To activate the user pass `true` and to block the user pass `false`. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/0.15.x/models/user)

**Example:**

```server-swift
import Appwrite

func main() async throws {
    let client = Client()
      .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
      .setProject("5df5acd0d48c2") // Your project ID
      .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key
    let users = Users(client)
    let user = try await users.updateStatus(
        userId: "[USER_ID]",
        status: xfalse
    )

    print(String(describing: user)
}

```

---

#### Delete User

Delete a user by its unique ID, thereby releasing it's ID. Since ID is released and can be reused, all user-related resources like documents or storage files should be deleted before user deletion. If you want to keep ID reserved, use the updateStatus endpoint instead.

**Endpoint:** `DELETE /users/{userId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |

**Responses:**

- **204**: no content

**Example:**

```server-swift
import Appwrite

func main() async throws {
    let client = Client()
      .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
      .setProject("5df5acd0d48c2") // Your project ID
      .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key
    let users = Users(client)
    let result = try await users.delete(
        userId: "[USER_ID]"
    )

    print(String(describing: result)
}

```

---

#### Delete User Session

Delete a user sessions by its unique ID.

**Endpoint:** `DELETE /users/{userId}/sessions/{sessionId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| sessionId | string | Yes | Session ID. |

**Responses:**

- **204**: no content

**Example:**

```server-swift
import Appwrite

func main() async throws {
    let client = Client()
      .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
      .setProject("5df5acd0d48c2") // Your project ID
      .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key
    let users = Users(client)
    let result = try await users.deleteSession(
        userId: "[USER_ID]",
        sessionId: "[SESSION_ID]"
    )

    print(String(describing: result)
}

```

---

#### Delete User Sessions

Delete all user's sessions by using the user's unique ID.

**Endpoint:** `DELETE /users/{userId}/sessions`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |

**Responses:**

- **204**: no content

**Example:**

```server-swift
import Appwrite

func main() async throws {
    let client = Client()
      .setEndpoint("https://[HOSTNAME_OR_IP]/v1") // Your API Endpoint
      .setProject("5df5acd0d48c2") // Your project ID
      .setKey("919c2d18fb5d4...a2ae413da83346ad2") // Your secret API key
    let users = Users(client)
    let result = try await users.deleteSessions(
        userId: "[USER_ID]"
    )

    print(String(describing: result)
}

```

---

