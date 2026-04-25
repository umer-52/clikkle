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
| userId | string | Yes | User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| email | string | No | User email. |
| phone | string | No | Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212. |
| password | string | No | Plain text user password. Must be at least 8 chars. |
| name | string | No | User name. Max length: 128 chars. |

**Responses:**

- **201**: application/json
  - [User](/docs/references/1.2.x/models/user)

**Example:**

```server-rest
POST /v1/users HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.0.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "userId": "[USER_ID]",
  "email": "email@example.com",
  "phone": "+12065550100",
  "password": "password",
  "name": "[NAME]"
}

```

---

#### Create User with Argon2 Password

Create a new user. Password provided must be hashed with the Argon2 algorithm. Use the POST /users endpoint to create users with a plain text password.

**Endpoint:** `POST /users/argon2`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| email | string | Yes | User email. |
| password | string | Yes | User password hashed using Argon2. |
| name | string | No | User name. Max length: 128 chars. |

**Responses:**

- **201**: application/json
  - [User](/docs/references/1.2.x/models/user)

**Example:**

```server-rest
POST /v1/users/argon2 HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.0.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "userId": "[USER_ID]",
  "email": "email@example.com",
  "password": "password",
  "name": "[NAME]"
}

```

---

#### Create User with Bcrypt Password

Create a new user. Password provided must be hashed with the Bcrypt algorithm. Use the POST /users endpoint to create users with a plain text password.

**Endpoint:** `POST /users/bcrypt`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| email | string | Yes | User email. |
| password | string | Yes | User password hashed using Bcrypt. |
| name | string | No | User name. Max length: 128 chars. |

**Responses:**

- **201**: application/json
  - [User](/docs/references/1.2.x/models/user)

**Example:**

```server-rest
POST /v1/users/bcrypt HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.0.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "userId": "[USER_ID]",
  "email": "email@example.com",
  "password": "password",
  "name": "[NAME]"
}

```

---

#### Create User with MD5 Password

Create a new user. Password provided must be hashed with the MD5 algorithm. Use the POST /users endpoint to create users with a plain text password.

**Endpoint:** `POST /users/md5`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| email | string | Yes | User email. |
| password | string | Yes | User password hashed using MD5. |
| name | string | No | User name. Max length: 128 chars. |

**Responses:**

- **201**: application/json
  - [User](/docs/references/1.2.x/models/user)

**Example:**

```server-rest
POST /v1/users/md5 HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.0.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "userId": "[USER_ID]",
  "email": "email@example.com",
  "password": "password",
  "name": "[NAME]"
}

```

---

#### Create User with PHPass Password

Create a new user. Password provided must be hashed with the PHPass algorithm. Use the POST /users endpoint to create users with a plain text password.

**Endpoint:** `POST /users/phpass`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. Choose a custom ID or pass the string `ID.unique()`to auto generate it. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| email | string | Yes | User email. |
| password | string | Yes | User password hashed using PHPass. |
| name | string | No | User name. Max length: 128 chars. |

**Responses:**

- **201**: application/json
  - [User](/docs/references/1.2.x/models/user)

**Example:**

```server-rest
POST /v1/users/phpass HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.0.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "userId": "[USER_ID]",
  "email": "email@example.com",
  "password": "password",
  "name": "[NAME]"
}

```

---

#### Create User with Scrypt Modified Password

Create a new user. Password provided must be hashed with the Scrypt Modified algorithm. Use the POST /users endpoint to create users with a plain text password.

**Endpoint:** `POST /users/scrypt-modified`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| email | string | Yes | User email. |
| password | string | Yes | User password hashed using Scrypt Modified. |
| passwordSalt | string | Yes | Salt used to hash password. |
| passwordSaltSeparator | string | Yes | Salt separator used to hash password. |
| passwordSignerKey | string | Yes | Signer key used to hash password. |
| name | string | No | User name. Max length: 128 chars. |

**Responses:**

- **201**: application/json
  - [User](/docs/references/1.2.x/models/user)

**Example:**

```server-rest
POST /v1/users/scrypt-modified HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.0.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "userId": "[USER_ID]",
  "email": "email@example.com",
  "password": "password",
  "passwordSalt": "[PASSWORD_SALT]",
  "passwordSaltSeparator": "[PASSWORD_SALT_SEPARATOR]",
  "passwordSignerKey": "[PASSWORD_SIGNER_KEY]",
  "name": "[NAME]"
}

```

---

#### Create User with Scrypt Password

Create a new user. Password provided must be hashed with the Scrypt algorithm. Use the POST /users endpoint to create users with a plain text password.

**Endpoint:** `POST /users/scrypt`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| email | string | Yes | User email. |
| password | string | Yes | User password hashed using Scrypt. |
| passwordSalt | string | Yes | Optional salt used to hash password. |
| passwordCpu | integer | Yes | Optional CPU cost used to hash password. |
| passwordMemory | integer | Yes | Optional memory cost used to hash password. |
| passwordParallel | integer | Yes | Optional parallelization cost used to hash password. |
| passwordLength | integer | Yes | Optional hash length used to hash password. |
| name | string | No | User name. Max length: 128 chars. |

**Responses:**

- **201**: application/json
  - [User](/docs/references/1.2.x/models/user)

**Example:**

```server-rest
POST /v1/users/scrypt HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.0.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "userId": "[USER_ID]",
  "email": "email@example.com",
  "password": "password",
  "passwordSalt": "[PASSWORD_SALT]",
  "passwordCpu": 0,
  "passwordMemory": 0,
  "passwordParallel": 0,
  "passwordLength": 0,
  "name": "[NAME]"
}

```

---

#### Create User with SHA Password

Create a new user. Password provided must be hashed with the SHA algorithm. Use the POST /users endpoint to create users with a plain text password.

**Endpoint:** `POST /users/sha`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| email | string | Yes | User email. |
| password | string | Yes | User password hashed using SHA. |
| passwordVersion | string | No | Optional SHA version used to hash password. Allowed values are: 'sha1', 'sha224', 'sha256', 'sha384', 'sha512/224', 'sha512/256', 'sha512', 'sha3-224', 'sha3-256', 'sha3-384', 'sha3-512' |
| name | string | No | User name. Max length: 128 chars. |

**Responses:**

- **201**: application/json
  - [User](/docs/references/1.2.x/models/user)

**Example:**

```server-rest
POST /v1/users/sha HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.0.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "userId": "[USER_ID]",
  "email": "email@example.com",
  "password": "password",
  "passwordVersion": "sha1",
  "name": "[NAME]"
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
  - [User](/docs/references/1.2.x/models/user)

**Example:**

```server-rest
GET /v1/users/{userId} HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.0.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2


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
  - [Preferences](/docs/references/1.2.x/models/preferences)

**Example:**

```server-rest
GET /v1/users/{userId}/prefs HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.0.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2


```

---

#### List User Logs

Get the user activity logs list by its unique ID.

**Endpoint:** `GET /users/{userId}/logs`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/products/databases/queries). Only supported methods are limit and offset |

**Responses:**

- **200**: application/json
  - [Logs List](/docs/references/1.2.x/models/logList)

**Example:**

```server-rest
GET /v1/users/{userId}/logs HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.0.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2


```

---

#### List User Memberships

Get the user membership list by its unique ID.

**Endpoint:** `GET /users/{userId}/memberships`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |

**Responses:**

- **200**: application/json
  - [Memberships List](/docs/references/1.2.x/models/membershipList)

**Example:**

```server-rest
GET /v1/users/{userId}/memberships HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.0.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2


```

---

#### List User Sessions

Get the user sessions list by its unique ID.

**Endpoint:** `GET /users/{userId}/sessions`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |

**Responses:**

- **200**: application/json
  - [Sessions List](/docs/references/1.2.x/models/sessionList)

**Example:**

```server-rest
GET /v1/users/{userId}/sessions HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.0.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2


```

---

#### List Users

Get a list of all the project's users. You can use the query params to filter your results.

**Endpoint:** `GET /users`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/products/databases/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, email, phone, status, passwordUpdate, registration, emailVerification, phoneVerification |
| search | string | No | Search term to filter your list results. Max length: 256 chars. |

**Responses:**

- **200**: application/json
  - [Users List](/docs/references/1.2.x/models/userList)

**Example:**

```server-rest
GET /v1/users HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.0.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2


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
  - [User](/docs/references/1.2.x/models/user)

**Example:**

```server-rest
PATCH /v1/users/{userId}/email HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.0.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "email": "email@example.com"
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
  - [User](/docs/references/1.2.x/models/user)

**Example:**

```server-rest
PATCH /v1/users/{userId}/verification HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.0.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "emailVerification": false
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
  - [User](/docs/references/1.2.x/models/user)

**Example:**

```server-rest
PATCH /v1/users/{userId}/name HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.0.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "name": "[NAME]"
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
  - [User](/docs/references/1.2.x/models/user)

**Example:**

```server-rest
PATCH /v1/users/{userId}/password HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.0.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "password": "password"
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
  - [User](/docs/references/1.2.x/models/user)

**Example:**

```server-rest
PATCH /v1/users/{userId}/phone HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.0.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "number": "+12065550100"
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
  - [User](/docs/references/1.2.x/models/user)

**Example:**

```server-rest
PATCH /v1/users/{userId}/verification/phone HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.0.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "phoneVerification": false
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
  - [Preferences](/docs/references/1.2.x/models/preferences)

**Example:**

```server-rest
PATCH /v1/users/{userId}/prefs HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.0.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "prefs": {}
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
  - [User](/docs/references/1.2.x/models/user)

**Example:**

```server-rest
PATCH /v1/users/{userId}/status HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.0.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2

{
  "status": false
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

```server-rest
DELETE /v1/users/{userId} HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.0.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2


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

```server-rest
DELETE /v1/users/{userId}/sessions/{sessionId} HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.0.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2


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

```server-rest
DELETE /v1/users/{userId}/sessions HTTP/1.1
Host: HOSTNAME
Content-Type: application/json
X-Appwrite-Response-Format: 1.0.0
X-Appwrite-Project: 5df5acd0d48c2
X-Appwrite-Key: 919c2d18fb5d4...a2ae413da83346ad2


```

---

