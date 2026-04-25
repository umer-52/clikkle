# account

The Account service allows you to authenticate and manage a user account. You can use the account service to update user information, retrieve the user sessions across different devices, and fetch the user security logs with his or her recent activity.

Register new user accounts with the Create Account, Create Magic URL session, or Create Phone session endpoint. You can authenticate the user account by using multiple sign-in methods available. Once the user is authenticated, a new session object will be created to allow the user to access his or her private data and settings.

This service also exposes an endpoint to save and read the user preferences as a key-value object. This feature is handy if you want to allow extra customization in your app. Common usage for this feature may include saving the user's preferred locale, timezone, or custom app theme.


## Base URL

```
https://<REGION>.cloud.appwrite.io/v1
```

## Endpoints

### account

#### Create account

Use this endpoint to allow a new user to register a new account in your project. After the user registration completes successfully, you can use the /account/verfication route to start verifying the user email address. To allow the new user to login to their new account, you need to create a new account session.

**Endpoint:** `POST /account`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| email | string | Yes | User email. |
| password | string | Yes | New user password. Must be between 8 and 256 chars. |
| name | string | No | User name. Max length: 128 chars. |

**Responses:**

- **201**: application/json
  - [User](/docs/references/1.7.x/models/user)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```client-graphql
mutation {
    accountCreate(
        userId: "<USER_ID>",
        email: "email@example.com",
        password: "",
        name: "<NAME>"
    ) {
        _id
        _createdAt
        _updatedAt
        name
        password
        hash
        hashOptions
        registration
        status
        labels
        passwordUpdate
        email
        phone
        emailVerification
        phoneVerification
        mfa
        prefs {
            data
        }
        targets {
            _id
            _createdAt
            _updatedAt
            name
            userId
            providerId
            providerType
            identifier
            expired
        }
        accessedAt
    }
}

```

---

#### Get account

Get the currently logged in user.

**Endpoint:** `GET /account`

**Responses:**

- **200**: application/json
  - [User](/docs/references/1.7.x/models/user)

---

#### Get account preferences

Get the preferences as a key-value object for the currently logged in user.

**Endpoint:** `GET /account/prefs`

**Responses:**

- **200**: application/json
  - [Preferences](/docs/references/1.7.x/models/preferences)

---

#### Update email

Update currently logged in user account email address. After changing user address, the user confirmation status will get reset. A new confirmation email is not sent automatically however you can use the send confirmation email endpoint again to send the confirmation email. For security measures, user password is required to complete this request.
This endpoint can also be used to convert an anonymous account to a normal one, by passing an email address and a new password.


**Endpoint:** `PATCH /account/email`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| email | string | Yes | User email. |
| password | string | Yes | User password. Must be at least 8 chars. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/1.7.x/models/user)

**Example:**

```client-graphql
mutation {
    accountUpdateEmail(
        email: "email@example.com",
        password: "password"
    ) {
        _id
        _createdAt
        _updatedAt
        name
        password
        hash
        hashOptions
        registration
        status
        labels
        passwordUpdate
        email
        phone
        emailVerification
        phoneVerification
        mfa
        prefs {
            data
        }
        targets {
            _id
            _createdAt
            _updatedAt
            name
            userId
            providerId
            providerType
            identifier
            expired
        }
        accessedAt
    }
}

```

---

#### Update name

Update currently logged in user account name.

**Endpoint:** `PATCH /account/name`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| name | string | Yes | User name. Max length: 128 chars. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/1.7.x/models/user)

**Example:**

```client-graphql
mutation {
    accountUpdateName(
        name: "<NAME>"
    ) {
        _id
        _createdAt
        _updatedAt
        name
        password
        hash
        hashOptions
        registration
        status
        labels
        passwordUpdate
        email
        phone
        emailVerification
        phoneVerification
        mfa
        prefs {
            data
        }
        targets {
            _id
            _createdAt
            _updatedAt
            name
            userId
            providerId
            providerType
            identifier
            expired
        }
        accessedAt
    }
}

```

---

#### Update password

Update currently logged in user password. For validation, user is required to pass in the new password, and the old password. For users created with OAuth, Team Invites and Magic URL, oldPassword is optional.

**Endpoint:** `PATCH /account/password`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| password | string | Yes | New user password. Must be at least 8 chars. |
| oldPassword | string | No | Current user password. Must be at least 8 chars. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/1.7.x/models/user)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```client-graphql
mutation {
    accountUpdatePassword(
        password: "",
        oldPassword: "password"
    ) {
        _id
        _createdAt
        _updatedAt
        name
        password
        hash
        hashOptions
        registration
        status
        labels
        passwordUpdate
        email
        phone
        emailVerification
        phoneVerification
        mfa
        prefs {
            data
        }
        targets {
            _id
            _createdAt
            _updatedAt
            name
            userId
            providerId
            providerType
            identifier
            expired
        }
        accessedAt
    }
}

```

---

#### Update phone

Update the currently logged in user's phone number. After updating the phone number, the phone verification status will be reset. A confirmation SMS is not sent automatically, however you can use the POST /account/verification/phone endpoint to send a confirmation SMS.

**Endpoint:** `PATCH /account/phone`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| phone | string | Yes | Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212. |
| password | string | Yes | User password. Must be at least 8 chars. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/1.7.x/models/user)

**Example:**

```client-graphql
mutation {
    accountUpdatePhone(
        phone: "+12065550100",
        password: "password"
    ) {
        _id
        _createdAt
        _updatedAt
        name
        password
        hash
        hashOptions
        registration
        status
        labels
        passwordUpdate
        email
        phone
        emailVerification
        phoneVerification
        mfa
        prefs {
            data
        }
        targets {
            _id
            _createdAt
            _updatedAt
            name
            userId
            providerId
            providerType
            identifier
            expired
        }
        accessedAt
    }
}

```

---

#### Update preferences

Update currently logged in user account preferences. The object you pass is stored as is, and replaces any previous value. The maximum allowed prefs size is 64kB and throws error if exceeded.

**Endpoint:** `PATCH /account/prefs`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| prefs | object | Yes | Prefs key-value JSON object. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/1.7.x/models/user)

**Example:**

```client-graphql
mutation {
    accountUpdatePrefs(
        prefs: "{}"
    ) {
        _id
        _createdAt
        _updatedAt
        name
        password
        hash
        hashOptions
        registration
        status
        labels
        passwordUpdate
        email
        phone
        emailVerification
        phoneVerification
        mfa
        prefs {
            data
        }
        targets {
            _id
            _createdAt
            _updatedAt
            name
            userId
            providerId
            providerType
            identifier
            expired
        }
        accessedAt
    }
}

```

---

#### Update status

Block the currently logged in user account. Behind the scene, the user record is not deleted but permanently blocked from any access. To completely delete a user, use the Users API instead.

**Endpoint:** `PATCH /account/status`

**Responses:**

- **200**: application/json
  - [User](/docs/references/1.7.x/models/user)

**Example:**

```client-graphql
mutation {
    accountUpdateStatus {
        _id
        _createdAt
        _updatedAt
        name
        password
        hash
        hashOptions
        registration
        status
        labels
        passwordUpdate
        email
        phone
        emailVerification
        phoneVerification
        mfa
        prefs {
            data
        }
        targets {
            _id
            _createdAt
            _updatedAt
            name
            userId
            providerId
            providerType
            identifier
            expired
        }
        accessedAt
    }
}

```

---

### sessions

#### Create anonymous session

Use this endpoint to allow a new user to register an anonymous account in your project. This route will also create a new session for the user. To allow the new user to convert an anonymous account to a normal account, you need to update its email and password or create an OAuth2 session.

**Endpoint:** `POST /account/sessions/anonymous`

**Responses:**

- **201**: application/json
  - [Session](/docs/references/1.7.x/models/session)

**Rate limits:** 50 requests per 3600 seconds

**Example:**

```client-graphql
mutation {
    accountCreateAnonymousSession {
        _id
        _createdAt
        _updatedAt
        userId
        expire
        provider
        providerUid
        providerAccessToken
        providerAccessTokenExpiry
        providerRefreshToken
        ip
        osCode
        osName
        osVersion
        clientType
        clientCode
        clientName
        clientVersion
        clientEngine
        clientEngineVersion
        deviceName
        deviceBrand
        deviceModel
        countryCode
        countryName
        current
        factors
        secret
        mfaUpdatedAt
    }
}

```

---

#### Create email password session

Allow the user to login into their account by providing a valid email and password combination. This route will create a new session for the user.

A user is limited to 10 active sessions at a time by default. Learn more about session limits.

**Endpoint:** `POST /account/sessions/email`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| email | string | Yes | User email. |
| password | string | Yes | User password. Must be at least 8 chars. |

**Responses:**

- **201**: application/json
  - [Session](/docs/references/1.7.x/models/session)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```client-graphql
mutation {
    accountCreateEmailPasswordSession(
        email: "email@example.com",
        password: "password"
    ) {
        _id
        _createdAt
        _updatedAt
        userId
        expire
        provider
        providerUid
        providerAccessToken
        providerAccessTokenExpiry
        providerRefreshToken
        ip
        osCode
        osName
        osVersion
        clientType
        clientCode
        clientName
        clientVersion
        clientEngine
        clientEngineVersion
        deviceName
        deviceBrand
        deviceModel
        countryCode
        countryName
        current
        factors
        secret
        mfaUpdatedAt
    }
}

```

---

#### Create session

Use this endpoint to create a session from token. Provide the **userId** and **secret** parameters from the successful response of authentication flows initiated by token creation. For example, magic URL and phone login.

**Endpoint:** `POST /account/sessions/token`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| secret | string | Yes | Secret of a token generated by login methods. For example, the `createMagicURLToken` or `createPhoneToken` methods. |

**Responses:**

- **201**: application/json
  - [Session](/docs/references/1.7.x/models/session)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```client-graphql
mutation {
    accountCreateSession(
        userId: "<USER_ID>",
        secret: "<SECRET>"
    ) {
        _id
        _createdAt
        _updatedAt
        userId
        expire
        provider
        providerUid
        providerAccessToken
        providerAccessTokenExpiry
        providerRefreshToken
        ip
        osCode
        osName
        osVersion
        clientType
        clientCode
        clientName
        clientVersion
        clientEngine
        clientEngineVersion
        deviceName
        deviceBrand
        deviceModel
        countryCode
        countryName
        current
        factors
        secret
        mfaUpdatedAt
    }
}

```

---

#### Get session

Use this endpoint to get a logged in user's session using a Session ID. Inputting 'current' will return the current session being used.

**Endpoint:** `GET /account/sessions/{sessionId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| sessionId | string | Yes | Session ID. Use the string 'current' to get the current device session. |

**Responses:**

- **200**: application/json
  - [Session](/docs/references/1.7.x/models/session)

---

#### List sessions

Get the list of active sessions across different devices for the currently logged in user.

**Endpoint:** `GET /account/sessions`

**Responses:**

- **200**: application/json
  - [Sessions List](/docs/references/1.7.x/models/sessionList)

---

#### Update magic URL session

Use this endpoint to create a session from token. Provide the **userId** and **secret** parameters from the successful response of authentication flows initiated by token creation. For example, magic URL and phone login.

**Endpoint:** `PUT /account/sessions/magic-url`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| secret | string | Yes | Valid verification token. |

**Responses:**

- **201**: application/json
  - [Session](/docs/references/1.7.x/models/session)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```client-graphql
mutation {
    accountUpdateMagicURLSession(
        userId: "<USER_ID>",
        secret: "<SECRET>"
    ) {
        _id
        _createdAt
        _updatedAt
        userId
        expire
        provider
        providerUid
        providerAccessToken
        providerAccessTokenExpiry
        providerRefreshToken
        ip
        osCode
        osName
        osVersion
        clientType
        clientCode
        clientName
        clientVersion
        clientEngine
        clientEngineVersion
        deviceName
        deviceBrand
        deviceModel
        countryCode
        countryName
        current
        factors
        secret
        mfaUpdatedAt
    }
}

```

---

#### Update phone session

Use this endpoint to create a session from token. Provide the **userId** and **secret** parameters from the successful response of authentication flows initiated by token creation. For example, magic URL and phone login.

**Endpoint:** `PUT /account/sessions/phone`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| secret | string | Yes | Valid verification token. |

**Responses:**

- **201**: application/json
  - [Session](/docs/references/1.7.x/models/session)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```client-graphql
mutation {
    accountUpdatePhoneSession(
        userId: "<USER_ID>",
        secret: "<SECRET>"
    ) {
        _id
        _createdAt
        _updatedAt
        userId
        expire
        provider
        providerUid
        providerAccessToken
        providerAccessTokenExpiry
        providerRefreshToken
        ip
        osCode
        osName
        osVersion
        clientType
        clientCode
        clientName
        clientVersion
        clientEngine
        clientEngineVersion
        deviceName
        deviceBrand
        deviceModel
        countryCode
        countryName
        current
        factors
        secret
        mfaUpdatedAt
    }
}

```

---

#### Update session

Use this endpoint to extend a session's length. Extending a session is useful when session expiry is short. If the session was created using an OAuth provider, this endpoint refreshes the access token from the provider.

**Endpoint:** `PATCH /account/sessions/{sessionId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| sessionId | string | Yes | Session ID. Use the string 'current' to update the current device session. |

**Responses:**

- **200**: application/json
  - [Session](/docs/references/1.7.x/models/session)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```client-graphql
mutation {
    accountUpdateSession(
        sessionId: "<SESSION_ID>"
    ) {
        _id
        _createdAt
        _updatedAt
        userId
        expire
        provider
        providerUid
        providerAccessToken
        providerAccessTokenExpiry
        providerRefreshToken
        ip
        osCode
        osName
        osVersion
        clientType
        clientCode
        clientName
        clientVersion
        clientEngine
        clientEngineVersion
        deviceName
        deviceBrand
        deviceModel
        countryCode
        countryName
        current
        factors
        secret
        mfaUpdatedAt
    }
}

```

---

#### Delete session

Logout the user. Use 'current' as the session ID to logout on this device, use a session ID to logout on another device. If you're looking to logout the user on all devices, use Delete Sessions instead.

**Endpoint:** `DELETE /account/sessions/{sessionId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| sessionId | string | Yes | Session ID. Use the string 'current' to delete the current device session. |

**Responses:**

- **204**: no content

**Rate limits:** 100 requests per 3600 seconds

**Example:**

```client-graphql
mutation {
    accountDeleteSession(
        sessionId: "<SESSION_ID>"
    ) {
        status
    }
}

```

---

#### Delete sessions

Delete all sessions from the user account and remove any sessions cookies from the end client.

**Endpoint:** `DELETE /account/sessions`

**Responses:**

- **204**: no content

**Rate limits:** 100 requests per 3600 seconds

**Example:**

```client-graphql
mutation {
    accountDeleteSessions {
        status
    }
}

```

---

### tokens

#### Create email token (OTP)

Sends the user an email with a secret key for creating a session. If the email address has never been used, a **new account is created** using the provided `userId`. Otherwise, if the email address is already attached to an account, the **user ID is ignored**. Then, the user will receive an email with the one-time password. Use the returned user ID and secret and submit a request to the POST /v1/account/sessions/token endpoint to complete the login process. The secret sent to the user's email is valid for 15 minutes.

A user is limited to 10 active sessions at a time by default. Learn more about session limits.


**Endpoint:** `POST /account/tokens/email`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. If the email address has never been used, a new account is created using the provided userId. Otherwise, if the email address is already attached to an account, the user ID is ignored. |
| email | string | Yes | User email. |
| phrase | boolean | No | Toggle for security phrase. If enabled, email will be send with a randomly generated phrase and the phrase will also be included in the response. Confirming phrases match increases the security of your authentication flow. |

**Responses:**

- **201**: application/json
  - [Token](/docs/references/1.7.x/models/token)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```client-graphql
mutation {
    accountCreateEmailToken(
        userId: "<USER_ID>",
        email: "email@example.com",
        phrase: false
    ) {
        _id
        _createdAt
        userId
        secret
        expire
        phrase
    }
}

```

---

#### Create JWT

Use this endpoint to create a JSON Web Token. You can use the resulting JWT to authenticate on behalf of the current user when working with the Appwrite server-side API and SDKs. The JWT secret is valid for 15 minutes from its creation and will be invalid if the user will logout in that time frame.

**Endpoint:** `POST /account/jwts`

**Responses:**

- **201**: application/json
  - [JWT](/docs/references/1.7.x/models/jwt)

**Rate limits:** 100 requests per 3600 seconds

**Example:**

```client-graphql
mutation {
    accountCreateJWT {
        jwt
    }
}

```

---

#### Create magic URL token

Sends the user an email with a secret key for creating a session. If the provided user ID has not been registered, a new user will be created. When the user clicks the link in the email, the user is redirected back to the URL you provided with the secret key and userId values attached to the URL query string. Use the query string parameters to submit a request to the POST /v1/account/sessions/token endpoint to complete the login process. The link sent to the user's email address is valid for 1 hour.

A user is limited to 10 active sessions at a time by default. Learn more about session limits.


**Endpoint:** `POST /account/tokens/magic-url`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. If the email address has never been used, a new account is created using the provided userId. Otherwise, if the email address is already attached to an account, the user ID is ignored. |
| email | string | Yes | User email. |
| url | string | No | URL to redirect the user back to your app from the magic URL login. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API. |
| phrase | boolean | No | Toggle for security phrase. If enabled, email will be send with a randomly generated phrase and the phrase will also be included in the response. Confirming phrases match increases the security of your authentication flow. |

**Responses:**

- **201**: application/json
  - [Token](/docs/references/1.7.x/models/token)

**Rate limits:** 60 requests per 3600 seconds

**Example:**

```client-graphql
mutation {
    accountCreateMagicURLToken(
        userId: "<USER_ID>",
        email: "email@example.com",
        url: "https://example.com",
        phrase: false
    ) {
        _id
        _createdAt
        userId
        secret
        expire
        phrase
    }
}

```

---

#### Create phone token

Sends the user an SMS with a secret key for creating a session. If the provided user ID has not be registered, a new user will be created. Use the returned user ID and secret and submit a request to the POST /v1/account/sessions/token endpoint to complete the login process. The secret sent to the user's phone is valid for 15 minutes.

A user is limited to 10 active sessions at a time by default. Learn more about session limits.

**Endpoint:** `POST /account/tokens/phone`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. If the phone number has never been used, a new account is created using the provided userId. Otherwise, if the phone number is already attached to an account, the user ID is ignored. |
| phone | string | Yes | Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212. |

**Responses:**

- **201**: application/json
  - [Token](/docs/references/1.7.x/models/token)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```client-graphql
mutation {
    accountCreatePhoneToken(
        userId: "<USER_ID>",
        phone: "+12065550100"
    ) {
        _id
        _createdAt
        userId
        secret
        expire
        phrase
    }
}

```

---

### logs

#### List logs

Get the list of latest security activity logs for the currently logged in user. Each log returns user IP address, location and date and time of log.

**Endpoint:** `GET /account/logs`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset |

**Responses:**

- **200**: application/json
  - [Logs List](/docs/references/1.7.x/models/logList)

---

### recovery

#### Create password recovery

Sends the user an email with a temporary secret key for password reset. When the user clicks the confirmation link he is redirected back to your app password reset URL with the secret key and email address values attached to the URL query string. Use the query string params to submit a request to the PUT /account/recovery endpoint to complete the process. The verification link sent to the user's email address is valid for 1 hour.

**Endpoint:** `POST /account/recovery`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| email | string | Yes | User email. |
| url | string | Yes | URL to redirect the user back to your app from the recovery email. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API. |

**Responses:**

- **201**: application/json
  - [Token](/docs/references/1.7.x/models/token)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```client-graphql
mutation {
    accountCreateRecovery(
        email: "email@example.com",
        url: "https://example.com"
    ) {
        _id
        _createdAt
        userId
        secret
        expire
        phrase
    }
}

```

---

#### Update password recovery (confirmation)

Use this endpoint to complete the user account password reset. Both the **userId** and **secret** arguments will be passed as query parameters to the redirect URL you have provided when sending your request to the POST /account/recovery endpoint.

Please note that in order to avoid a Redirect Attack the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.

**Endpoint:** `PUT /account/recovery`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| secret | string | Yes | Valid reset token. |
| password | string | Yes | New user password. Must be between 8 and 256 chars. |

**Responses:**

- **200**: application/json
  - [Token](/docs/references/1.7.x/models/token)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```client-graphql
mutation {
    accountUpdateRecovery(
        userId: "<USER_ID>",
        secret: "<SECRET>",
        password: ""
    ) {
        _id
        _createdAt
        userId
        secret
        expire
        phrase
    }
}

```

---

### verification

#### Create email verification

Use this endpoint to send a verification message to your user email address to confirm they are the valid owners of that address. Both the **userId** and **secret** arguments will be passed as query parameters to the URL you have provided to be attached to the verification email. The provided URL should redirect the user back to your app and allow you to complete the verification process by verifying both the **userId** and **secret** parameters. Learn more about how to complete the verification process. The verification link sent to the user's email address is valid for 7 days.

Please note that in order to avoid a Redirect Attack, the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.


**Endpoint:** `POST /account/verification`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| url | string | Yes | URL to redirect the user back to your app from the verification email. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API. |

**Responses:**

- **201**: application/json
  - [Token](/docs/references/1.7.x/models/token)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```client-graphql
mutation {
    accountCreateVerification(
        url: "https://example.com"
    ) {
        _id
        _createdAt
        userId
        secret
        expire
        phrase
    }
}

```

---

#### Create phone verification

Use this endpoint to send a verification SMS to the currently logged in user. This endpoint is meant for use after updating a user's phone number using the accountUpdatePhone endpoint. Learn more about how to complete the verification process. The verification code sent to the user's phone number is valid for 15 minutes.

**Endpoint:** `POST /account/verification/phone`

**Responses:**

- **201**: application/json
  - [Token](/docs/references/1.7.x/models/token)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```client-graphql
mutation {
    accountCreatePhoneVerification {
        _id
        _createdAt
        userId
        secret
        expire
        phrase
    }
}

```

---

#### Update email verification (confirmation)

Use this endpoint to complete the user email verification process. Use both the **userId** and **secret** parameters that were attached to your app URL to verify the user email ownership. If confirmed this route will return a 200 status code.

**Endpoint:** `PUT /account/verification`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| secret | string | Yes | Valid verification token. |

**Responses:**

- **200**: application/json
  - [Token](/docs/references/1.7.x/models/token)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```client-graphql
mutation {
    accountUpdateVerification(
        userId: "<USER_ID>",
        secret: "<SECRET>"
    ) {
        _id
        _createdAt
        userId
        secret
        expire
        phrase
    }
}

```

---

#### Update phone verification (confirmation)

Use this endpoint to complete the user phone verification process. Use the **userId** and **secret** that were sent to your user's phone number to verify the user email ownership. If confirmed this route will return a 200 status code.

**Endpoint:** `PUT /account/verification/phone`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| secret | string | Yes | Valid verification token. |

**Responses:**

- **200**: application/json
  - [Token](/docs/references/1.7.x/models/token)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```client-graphql
mutation {
    accountUpdatePhoneVerification(
        userId: "<USER_ID>",
        secret: "<SECRET>"
    ) {
        _id
        _createdAt
        userId
        secret
        expire
        phrase
    }
}

```

---

### mfa

#### Create authenticator

Add an authenticator app to be used as an MFA factor. Verify the authenticator using the verify authenticator method.

**Endpoint:** `POST /account/mfa/authenticators/{type}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| type | string | Yes | Type of authenticator. Must be `totp` |

**Responses:**

- **200**: application/json
  - [MFAType](/docs/references/1.7.x/models/mfaType)

**Example:**

```client-graphql
mutation {
    accountCreateMfaAuthenticator(
        type: "totp"
    ) {
        secret
        uri
    }
}

```

---

#### Create MFA challenge

Begin the process of MFA verification after sign-in. Finish the flow with updateMfaChallenge method.

**Endpoint:** `POST /account/mfa/challenge`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| factor | string | Yes | Factor used for verification. Must be one of following: `email`, `phone`, `totp`, `recoveryCode`. |

**Responses:**

- **201**: application/json
  - [MFA Challenge](/docs/references/1.7.x/models/mfaChallenge)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```client-graphql
mutation {
    accountCreateMfaChallenge(
        factor: "email"
    ) {
        _id
        _createdAt
        userId
        expire
    }
}

```

---

#### Create MFA recovery codes

Generate recovery codes as backup for MFA flow. It's recommended to generate and show then immediately after user successfully adds their authehticator. Recovery codes can be used as a MFA verification type in createMfaChallenge method.

**Endpoint:** `POST /account/mfa/recovery-codes`

**Responses:**

- **201**: application/json
  - [MFA Recovery Codes](/docs/references/1.7.x/models/mfaRecoveryCodes)

**Example:**

```client-graphql
mutation {
    accountCreateMfaRecoveryCodes {
        recoveryCodes
    }
}

```

---

#### List factors

List the factors available on the account to be used as a MFA challange.

**Endpoint:** `GET /account/mfa/factors`

**Responses:**

- **200**: application/json
  - [MFAFactors](/docs/references/1.7.x/models/mfaFactors)

---

#### List MFA recovery codes

Get recovery codes that can be used as backup for MFA flow. Before getting codes, they must be generated using createMfaRecoveryCodes method. An OTP challenge is required to read recovery codes.

**Endpoint:** `GET /account/mfa/recovery-codes`

**Responses:**

- **200**: application/json
  - [MFA Recovery Codes](/docs/references/1.7.x/models/mfaRecoveryCodes)

---

#### Update authenticator (confirmation)

Verify an authenticator app after adding it using the add authenticator method.

**Endpoint:** `PUT /account/mfa/authenticators/{type}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| type | string | Yes | Type of authenticator. |
| otp | string | Yes | Valid verification token. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/1.7.x/models/user)

**Example:**

```client-graphql
mutation {
    accountUpdateMfaAuthenticator(
        type: "totp",
        otp: "<OTP>"
    ) {
        _id
        _createdAt
        _updatedAt
        name
        password
        hash
        hashOptions
        registration
        status
        labels
        passwordUpdate
        email
        phone
        emailVerification
        phoneVerification
        mfa
        prefs {
            data
        }
        targets {
            _id
            _createdAt
            _updatedAt
            name
            userId
            providerId
            providerType
            identifier
            expired
        }
        accessedAt
    }
}

```

---

#### Update MFA

Enable or disable MFA on an account.

**Endpoint:** `PATCH /account/mfa`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| mfa | boolean | Yes | Enable or disable MFA. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/1.7.x/models/user)

**Example:**

```client-graphql
mutation {
    accountUpdateMFA(
        mfa: false
    ) {
        _id
        _createdAt
        _updatedAt
        name
        password
        hash
        hashOptions
        registration
        status
        labels
        passwordUpdate
        email
        phone
        emailVerification
        phoneVerification
        mfa
        prefs {
            data
        }
        targets {
            _id
            _createdAt
            _updatedAt
            name
            userId
            providerId
            providerType
            identifier
            expired
        }
        accessedAt
    }
}

```

---

#### Update MFA challenge (confirmation)

Complete the MFA challenge by providing the one-time password. Finish the process of MFA verification by providing the one-time password. To begin the flow, use createMfaChallenge method.

**Endpoint:** `PUT /account/mfa/challenge`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| challengeId | string | Yes | ID of the challenge. |
| otp | string | Yes | Valid verification token. |

**Responses:**

- **200**: application/json
  - [Session](/docs/references/1.7.x/models/session)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```client-graphql
mutation {
    accountUpdateMfaChallenge(
        challengeId: "<CHALLENGE_ID>",
        otp: "<OTP>"
    ) {
        _id
        _createdAt
        _updatedAt
        userId
        expire
        provider
        providerUid
        providerAccessToken
        providerAccessTokenExpiry
        providerRefreshToken
        ip
        osCode
        osName
        osVersion
        clientType
        clientCode
        clientName
        clientVersion
        clientEngine
        clientEngineVersion
        deviceName
        deviceBrand
        deviceModel
        countryCode
        countryName
        current
        factors
        secret
        mfaUpdatedAt
    }
}

```

---

#### Update MFA recovery codes (regenerate)

Regenerate recovery codes that can be used as backup for MFA flow. Before regenerating codes, they must be first generated using createMfaRecoveryCodes method. An OTP challenge is required to regenreate recovery codes.

**Endpoint:** `PATCH /account/mfa/recovery-codes`

**Responses:**

- **200**: application/json
  - [MFA Recovery Codes](/docs/references/1.7.x/models/mfaRecoveryCodes)

**Example:**

```client-graphql
mutation {
    accountUpdateMfaRecoveryCodes {
        recoveryCodes
    }
}

```

---

#### Delete authenticator

Delete an authenticator for a user by ID.

**Endpoint:** `DELETE /account/mfa/authenticators/{type}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| type | string | Yes | Type of authenticator. |

**Responses:**

- **204**: no content

**Example:**

```client-graphql
mutation {
    accountDeleteMfaAuthenticator(
        type: "totp"
    ) {
        status
    }
}

```

---

### pushTargets

#### Create push target

Use this endpoint to register a device for push notifications. Provide a target ID (custom or generated using ID.unique()), a device identifier (usually a device token), and optionally specify which provider should send notifications to this target. The target is automatically linked to the current session and includes device information like brand and model.

**Endpoint:** `POST /account/targets/push`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| targetId | string | Yes | Target ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| identifier | string | Yes | The target identifier (token, email, phone etc.) |
| providerId | string | No | Provider ID. Message will be sent to this target from the specified provider ID. If no provider ID is set the first setup provider will be used. |

**Responses:**

- **201**: application/json
  - [Target](/docs/references/1.7.x/models/target)

**Example:**

```client-graphql
mutation {
    accountCreatePushTarget(
        targetId: "<TARGET_ID>",
        identifier: "<IDENTIFIER>",
        providerId: "<PROVIDER_ID>"
    ) {
        _id
        _createdAt
        _updatedAt
        name
        userId
        providerId
        providerType
        identifier
        expired
    }
}

```

---

#### Update push target

Update the currently logged in user's push notification target. You can modify the target's identifier (device token) and provider ID (token, email, phone etc.). The target must exist and belong to the current user. If you change the provider ID, notifications will be sent through the new messaging provider instead.

**Endpoint:** `PUT /account/targets/{targetId}/push`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| targetId | string | Yes | Target ID. |
| identifier | string | Yes | The target identifier (token, email, phone etc.) |

**Responses:**

- **200**: application/json
  - [Target](/docs/references/1.7.x/models/target)

**Example:**

```client-graphql
mutation {
    accountUpdatePushTarget(
        targetId: "<TARGET_ID>",
        identifier: "<IDENTIFIER>"
    ) {
        _id
        _createdAt
        _updatedAt
        name
        userId
        providerId
        providerType
        identifier
        expired
    }
}

```

---

#### Delete push target

Delete a push notification target for the currently logged in user. After deletion, the device will no longer receive push notifications. The target must exist and belong to the current user.

**Endpoint:** `DELETE /account/targets/{targetId}/push`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| targetId | string | Yes | Target ID. |

**Responses:**

- **204**: no content

**Example:**

```client-graphql
mutation {
    accountDeletePushTarget(
        targetId: "<TARGET_ID>"
    ) {
        status
    }
}

```

---

### identities

#### List identities

Get the list of identities for the currently logged in user.

**Endpoint:** `GET /account/identities`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, provider, providerUid, providerEmail, providerAccessTokenExpiry |

**Responses:**

- **200**: application/json
  - [Identities List](/docs/references/1.7.x/models/identityList)

---

#### Delete identity

Delete an identity by its unique ID.

**Endpoint:** `DELETE /account/identities/{identityId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| identityId | string | Yes | Identity ID. |

**Responses:**

- **204**: no content

**Example:**

```client-graphql
mutation {
    accountDeleteIdentity(
        identityId: "<IDENTITY_ID>"
    ) {
        status
    }
}

```

---

