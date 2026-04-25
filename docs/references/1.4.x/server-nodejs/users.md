# users

The Users service allows you to manage your project users. Use this service to search, block, and view your users' info, current sessions, and latest activity logs. You can also use the Users service to edit your users' preferences and personal info.


## Base URL

```
https://<REGION>.cloud.appwrite.io/v1
```

## Endpoints

#### Create user

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
  - [User](/docs/references/1.4.x/models/user)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const users = new sdk.Users(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = users.create('[USER_ID]');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Create user with Argon2 password

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
  - [User](/docs/references/1.4.x/models/user)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const users = new sdk.Users(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = users.createArgon2User('[USER_ID]', 'email@example.com', 'password');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Create user with bcrypt password

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
  - [User](/docs/references/1.4.x/models/user)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const users = new sdk.Users(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = users.createBcryptUser('[USER_ID]', 'email@example.com', 'password');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Create user with MD5 password

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
  - [User](/docs/references/1.4.x/models/user)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const users = new sdk.Users(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = users.createMD5User('[USER_ID]', 'email@example.com', 'password');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Create user with PHPass password

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
  - [User](/docs/references/1.4.x/models/user)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const users = new sdk.Users(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = users.createPHPassUser('[USER_ID]', 'email@example.com', 'password');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Create user with Scrypt modified password

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
  - [User](/docs/references/1.4.x/models/user)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const users = new sdk.Users(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = users.createScryptModifiedUser('[USER_ID]', 'email@example.com', 'password', '[PASSWORD_SALT]', '[PASSWORD_SALT_SEPARATOR]', '[PASSWORD_SIGNER_KEY]');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Create user with Scrypt password

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
  - [User](/docs/references/1.4.x/models/user)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const users = new sdk.Users(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = users.createScryptUser('[USER_ID]', 'email@example.com', 'password', '[PASSWORD_SALT]', null, null, null, null);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Create user with SHA password

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
  - [User](/docs/references/1.4.x/models/user)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const users = new sdk.Users(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = users.createSHAUser('[USER_ID]', 'email@example.com', 'password');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Get user

Get a user by its unique ID.

**Endpoint:** `GET /users/{userId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/1.4.x/models/user)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const users = new sdk.Users(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = users.get('[USER_ID]');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Get user preferences

Get the user preferences by its unique ID.

**Endpoint:** `GET /users/{userId}/prefs`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |

**Responses:**

- **200**: application/json
  - [Preferences](/docs/references/1.4.x/models/preferences)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const users = new sdk.Users(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = users.getPrefs('[USER_ID]');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### List Identities

Get identities for all users.

**Endpoint:** `GET /users/identities`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| queries | string | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, provider, providerUid, providerEmail, providerAccessTokenExpiry |
| search | string | No | Search term to filter your list results. Max length: 256 chars. |

**Responses:**

- **200**: application/json
  - [Identities List](/docs/references/1.4.x/models/identityList)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const users = new sdk.Users(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = users.listIdentities();

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### List user logs

Get the user activity logs list by its unique ID.

**Endpoint:** `GET /users/{userId}/logs`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset |

**Responses:**

- **200**: application/json
  - [Logs List](/docs/references/1.4.x/models/logList)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const users = new sdk.Users(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = users.listLogs('[USER_ID]');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### List user memberships

Get the user membership list by its unique ID.

**Endpoint:** `GET /users/{userId}/memberships`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |

**Responses:**

- **200**: application/json
  - [Memberships List](/docs/references/1.4.x/models/membershipList)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const users = new sdk.Users(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = users.listMemberships('[USER_ID]');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### List user sessions

Get the user sessions list by its unique ID.

**Endpoint:** `GET /users/{userId}/sessions`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |

**Responses:**

- **200**: application/json
  - [Sessions List](/docs/references/1.4.x/models/sessionList)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const users = new sdk.Users(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = users.listSessions('[USER_ID]');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### List users

Get a list of all the project's users. You can use the query params to filter your results.

**Endpoint:** `GET /users`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, email, phone, status, passwordUpdate, registration, emailVerification, phoneVerification |
| search | string | No | Search term to filter your list results. Max length: 256 chars. |

**Responses:**

- **200**: application/json
  - [Users List](/docs/references/1.4.x/models/userList)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const users = new sdk.Users(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = users.list();

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Update email

Update the user email by its unique ID.

**Endpoint:** `PATCH /users/{userId}/email`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| email | string | Yes | User email. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/1.4.x/models/user)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const users = new sdk.Users(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = users.updateEmail('[USER_ID]', 'email@example.com');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Update email verification

Update the user email verification status by its unique ID.

**Endpoint:** `PATCH /users/{userId}/verification`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| emailVerification | boolean | Yes | User email verification status. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/1.4.x/models/user)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const users = new sdk.Users(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = users.updateEmailVerification('[USER_ID]', false);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Update name

Update the user name by its unique ID.

**Endpoint:** `PATCH /users/{userId}/name`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| name | string | Yes | User name. Max length: 128 chars. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/1.4.x/models/user)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const users = new sdk.Users(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = users.updateName('[USER_ID]', '[NAME]');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Update password

Update the user password by its unique ID.

**Endpoint:** `PATCH /users/{userId}/password`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| password | string | Yes | New user password. Must be at least 8 chars. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/1.4.x/models/user)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const users = new sdk.Users(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = users.updatePassword('[USER_ID]', '');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Update phone

Update the user phone by its unique ID.

**Endpoint:** `PATCH /users/{userId}/phone`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| number | string | Yes | User phone number. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/1.4.x/models/user)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const users = new sdk.Users(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = users.updatePhone('[USER_ID]', '+12065550100');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Update phone verification

Update the user phone verification status by its unique ID.

**Endpoint:** `PATCH /users/{userId}/verification/phone`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| phoneVerification | boolean | Yes | User phone verification status. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/1.4.x/models/user)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const users = new sdk.Users(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = users.updatePhoneVerification('[USER_ID]', false);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Update user labels

Update the user labels by its unique ID. 

Labels can be used to grant access to resources. While teams are a way for user's to share access to a resource, labels can be defined by the developer to grant access without an invitation. See the Permissions docs for more info.

**Endpoint:** `PUT /users/{userId}/labels`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| labels | array | Yes | Array of user labels. Replaces the previous labels. Maximum of 100 labels are allowed, each up to 36 alphanumeric characters long. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/1.4.x/models/user)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const users = new sdk.Users(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = users.updateLabels('[USER_ID]', []);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Update user preferences

Update the user preferences by its unique ID. The object you pass is stored as is, and replaces any previous value. The maximum allowed prefs size is 64kB and throws error if exceeded.

**Endpoint:** `PATCH /users/{userId}/prefs`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| prefs | object | Yes | Prefs key-value JSON object. |

**Responses:**

- **200**: application/json
  - [Preferences](/docs/references/1.4.x/models/preferences)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const users = new sdk.Users(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = users.updatePrefs('[USER_ID]', {});

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Update user status

Update the user status by its unique ID. Use this endpoint as an alternative to deleting a user if you want to keep user's ID reserved.

**Endpoint:** `PATCH /users/{userId}/status`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| status | boolean | Yes | User Status. To activate the user pass `true` and to block the user pass `false`. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/1.4.x/models/user)

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const users = new sdk.Users(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = users.updateStatus('[USER_ID]', false);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Delete Identity

Delete an identity by its unique ID.

**Endpoint:** `DELETE /users/identities/{identityId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| identityId | string | Yes | Identity ID. |

**Responses:**

- **204**: no content

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const users = new sdk.Users(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = users.deleteIdentity('[IDENTITY_ID]');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Delete user

Delete a user by its unique ID, thereby releasing it's ID. Since ID is released and can be reused, all user-related resources like documents or storage files should be deleted before user deletion. If you want to keep ID reserved, use the updateStatus endpoint instead.

**Endpoint:** `DELETE /users/{userId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |

**Responses:**

- **204**: no content

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const users = new sdk.Users(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = users.delete('[USER_ID]');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Delete user session

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

```server-nodejs
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const users = new sdk.Users(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = users.deleteSession('[USER_ID]', '[SESSION_ID]');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

#### Delete user sessions

Delete all user's sessions by using the user's unique ID.

**Endpoint:** `DELETE /users/{userId}/sessions`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |

**Responses:**

- **204**: no content

**Example:**

```server-nodejs
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const users = new sdk.Users(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = users.deleteSessions('[USER_ID]');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```

---

