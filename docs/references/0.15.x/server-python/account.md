# account

The Account service allows you to authenticate and manage a user account. You can use the account service to update user information, retrieve the user sessions across different devices, and fetch the user security logs with his or her recent activity.

Register new user accounts with the Create Account, Create Magic URL session, or Create Phone session endpoint. You can authenticate the user account by using multiple sign-in methods available. Once the user is authenticated, a new session object will be created to allow the user to access his or her private data and settings.

This service also exposes an endpoint to save and read the user preferences as a key-value object. This feature is handy if you want to allow extra customization in your app. Common usage for this feature may include saving the user's preferred locale, timezone, or custom app theme.


## Base URL

```
https://<REGION>.cloud.appwrite.io/v1
```

## Endpoints

#### Create Email Verification

Use this endpoint to send a verification message to your user email address to confirm they are the valid owners of that address. Both the **userId** and **secret** arguments will be passed as query parameters to the URL you have provided to be attached to the verification email. The provided URL should redirect the user back to your app and allow you to complete the verification process by verifying both the **userId** and **secret** parameters. Learn more about how to complete the verification process. The verification link sent to the user's email address is valid for 7 days.

Please note that in order to avoid a Redirect Attack, the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.


**Endpoint:** `POST /account/verification`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| url | string | Yes | URL to redirect the user back to your app from the verification email. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API. |

**Responses:**

- **201**: application/json
  - [Token](/docs/references/0.15.x/models/token)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```server-python
from appwrite.client import Client
from appwrite.services.account import Account

client = Client()

(client
  .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
  .set_project('5df5acd0d48c2') # Your project ID
  .set_jwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') # Your secret JSON Web Token
)

account = Account(client)

result = account.create_verification('https://example.com')

```

---

#### Create Email Verification (confirmation)

Use this endpoint to complete the user email verification process. Use both the **userId** and **secret** parameters that were attached to your app URL to verify the user email ownership. If confirmed this route will return a 200 status code.

**Endpoint:** `PUT /account/verification`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| secret | string | Yes | Valid verification token. |

**Responses:**

- **200**: application/json
  - [Token](/docs/references/0.15.x/models/token)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```server-python
from appwrite.client import Client
from appwrite.services.account import Account

client = Client()

(client
  .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
  .set_project('5df5acd0d48c2') # Your project ID
  .set_jwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') # Your secret JSON Web Token
)

account = Account(client)

result = account.update_verification('[USER_ID]', '[SECRET]')

```

---

#### Create Password Recovery

Sends the user an email with a temporary secret key for password reset. When the user clicks the confirmation link he is redirected back to your app password reset URL with the secret key and email address values attached to the URL query string. Use the query string params to submit a request to the PUT /account/recovery endpoint to complete the process. The verification link sent to the user's email address is valid for 1 hour.

**Endpoint:** `POST /account/recovery`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| email | string | Yes | User email. |
| url | string | Yes | URL to redirect the user back to your app from the recovery email. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API. |

**Responses:**

- **201**: application/json
  - [Token](/docs/references/0.15.x/models/token)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```server-python
from appwrite.client import Client
from appwrite.services.account import Account

client = Client()

(client
  .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
  .set_project('5df5acd0d48c2') # Your project ID
  .set_jwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') # Your secret JSON Web Token
)

account = Account(client)

result = account.create_recovery('email@example.com', 'https://example.com')

```

---

#### Create Password Recovery (confirmation)

Use this endpoint to complete the user account password reset. Both the **userId** and **secret** arguments will be passed as query parameters to the redirect URL you have provided when sending your request to the POST /account/recovery endpoint.

Please note that in order to avoid a Redirect Attack the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.

**Endpoint:** `PUT /account/recovery`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| secret | string | Yes | Valid reset token. |
| password | string | Yes | New user password. Must be at least 8 chars. |
| passwordAgain | string | Yes | Repeat new user password. Must be at least 8 chars. |

**Responses:**

- **200**: application/json
  - [Token](/docs/references/0.15.x/models/token)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```server-python
from appwrite.client import Client
from appwrite.services.account import Account

client = Client()

(client
  .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
  .set_project('5df5acd0d48c2') # Your project ID
  .set_jwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') # Your secret JSON Web Token
)

account = Account(client)

result = account.update_recovery('[USER_ID]', '[SECRET]', 'password', 'password')

```

---

#### Create Phone Verification

Use this endpoint to send a verification SMS to the currently logged in user. This endpoint is meant for use after updating a user's phone number using the accountUpdatePhone endpoint. Learn more about how to complete the verification process. The verification code sent to the user's phone number is valid for 15 minutes.

**Endpoint:** `POST /account/verification/phone`

**Responses:**

- **201**: application/json
  - [Token](/docs/references/0.15.x/models/token)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```server-python
from appwrite.client import Client
from appwrite.services.account import Account

client = Client()

(client
  .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
  .set_project('5df5acd0d48c2') # Your project ID
  .set_jwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') # Your secret JSON Web Token
)

account = Account(client)

result = account.create_phone_verification()

```

---

#### Create Phone Verification (confirmation)

Use this endpoint to complete the user phone verification process. Use the **userId** and **secret** that were sent to your user's phone number to verify the user email ownership. If confirmed this route will return a 200 status code.

**Endpoint:** `PUT /account/verification/phone`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| secret | string | Yes | Valid verification token. |

**Responses:**

- **200**: application/json
  - [Token](/docs/references/0.15.x/models/token)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```server-python
from appwrite.client import Client
from appwrite.services.account import Account

client = Client()

(client
  .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
  .set_project('5df5acd0d48c2') # Your project ID
  .set_jwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') # Your secret JSON Web Token
)

account = Account(client)

result = account.update_phone_verification('[USER_ID]', '[SECRET]')

```

---

#### Get Account

Get currently logged in user data as JSON object.

**Endpoint:** `GET /account`

**Responses:**

- **200**: application/json
  - [User](/docs/references/0.15.x/models/user)

**Example:**

```server-python
from appwrite.client import Client
from appwrite.services.account import Account

client = Client()

(client
  .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
  .set_project('5df5acd0d48c2') # Your project ID
  .set_jwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') # Your secret JSON Web Token
)

account = Account(client)

result = account.get()

```

---

#### Get Account Logs

Get currently logged in user list of latest security activity logs. Each log returns user IP address, location and date and time of log.

**Endpoint:** `GET /account/logs`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| limit | integer | No | Maximum number of logs to return in response. By default will return maximum 25 results. Maximum of 100 results allowed per request. |
| offset | integer | No | Offset value. The default value is 0. Use this value to manage pagination. [learn more about pagination](https://appwrite.io/docs/pagination) |

**Responses:**

- **200**: application/json
  - [Logs List](/docs/references/0.15.x/models/logList)

**Example:**

```server-python
from appwrite.client import Client
from appwrite.services.account import Account

client = Client()

(client
  .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
  .set_project('5df5acd0d48c2') # Your project ID
  .set_jwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') # Your secret JSON Web Token
)

account = Account(client)

result = account.get_logs()

```

---

#### Get Account Preferences

Get currently logged in user preferences as a key-value object.

**Endpoint:** `GET /account/prefs`

**Responses:**

- **200**: application/json
  - [Preferences](/docs/references/0.15.x/models/preferences)

**Example:**

```server-python
from appwrite.client import Client
from appwrite.services.account import Account

client = Client()

(client
  .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
  .set_project('5df5acd0d48c2') # Your project ID
  .set_jwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') # Your secret JSON Web Token
)

account = Account(client)

result = account.get_prefs()

```

---

#### Get Account Sessions

Get currently logged in user list of active sessions across different devices.

**Endpoint:** `GET /account/sessions`

**Responses:**

- **200**: application/json
  - [Sessions List](/docs/references/0.15.x/models/sessionList)

**Example:**

```server-python
from appwrite.client import Client
from appwrite.services.account import Account

client = Client()

(client
  .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
  .set_project('5df5acd0d48c2') # Your project ID
  .set_jwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') # Your secret JSON Web Token
)

account = Account(client)

result = account.get_sessions()

```

---

#### Get Session By ID

Use this endpoint to get a logged in user's session using a Session ID. Inputting 'current' will return the current session being used.

**Endpoint:** `GET /account/sessions/{sessionId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| sessionId | string | Yes | Session ID. Use the string 'current' to get the current device session. |

**Responses:**

- **200**: application/json
  - [Session](/docs/references/0.15.x/models/session)

**Example:**

```server-python
from appwrite.client import Client
from appwrite.services.account import Account

client = Client()

(client
  .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
  .set_project('5df5acd0d48c2') # Your project ID
  .set_jwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') # Your secret JSON Web Token
)

account = Account(client)

result = account.get_session('[SESSION_ID]')

```

---

#### Update Account Email

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
  - [User](/docs/references/0.15.x/models/user)

**Example:**

```server-python
from appwrite.client import Client
from appwrite.services.account import Account

client = Client()

(client
  .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
  .set_project('5df5acd0d48c2') # Your project ID
  .set_jwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') # Your secret JSON Web Token
)

account = Account(client)

result = account.update_email('email@example.com', 'password')

```

---

#### Update Account Name

Update currently logged in user account name.

**Endpoint:** `PATCH /account/name`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| name | string | Yes | User name. Max length: 128 chars. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/0.15.x/models/user)

**Example:**

```server-python
from appwrite.client import Client
from appwrite.services.account import Account

client = Client()

(client
  .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
  .set_project('5df5acd0d48c2') # Your project ID
  .set_jwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') # Your secret JSON Web Token
)

account = Account(client)

result = account.update_name('[NAME]')

```

---

#### Update Account Password

Update currently logged in user password. For validation, user is required to pass in the new password, and the old password. For users created with OAuth, Team Invites and Magic URL, oldPassword is optional.

**Endpoint:** `PATCH /account/password`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| password | string | Yes | New user password. Must be at least 8 chars. |
| oldPassword | string | No | Current user password. Must be at least 8 chars. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/0.15.x/models/user)

**Example:**

```server-python
from appwrite.client import Client
from appwrite.services.account import Account

client = Client()

(client
  .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
  .set_project('5df5acd0d48c2') # Your project ID
  .set_jwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') # Your secret JSON Web Token
)

account = Account(client)

result = account.update_password('password')

```

---

#### Update Account Phone

Update the currently logged in user's phone number. After updating the phone number, the phone verification status will be reset. A confirmation SMS is not sent automatically, however you can use the POST /account/verification/phone endpoint to send a confirmation SMS.

**Endpoint:** `PATCH /account/phone`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| number | string | Yes | Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212. |
| password | string | Yes | User password. Must be at least 8 chars. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/0.15.x/models/user)

**Example:**

```server-python
from appwrite.client import Client
from appwrite.services.account import Account

client = Client()

(client
  .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
  .set_project('5df5acd0d48c2') # Your project ID
  .set_jwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') # Your secret JSON Web Token
)

account = Account(client)

result = account.update_phone('', 'password')

```

---

#### Update Account Preferences

Update currently logged in user account preferences. The object you pass is stored as is, and replaces any previous value. The maximum allowed prefs size is 64kB and throws error if exceeded.

**Endpoint:** `PATCH /account/prefs`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| prefs | object | Yes | Prefs key-value JSON object. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/0.15.x/models/user)

**Example:**

```server-python
from appwrite.client import Client
from appwrite.services.account import Account

client = Client()

(client
  .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
  .set_project('5df5acd0d48c2') # Your project ID
  .set_jwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') # Your secret JSON Web Token
)

account = Account(client)

result = account.update_prefs({})

```

---

#### Update Account Status

Block the currently logged in user account. Behind the scene, the user record is not deleted but permanently blocked from any access. To completely delete a user, use the Users API instead.

**Endpoint:** `PATCH /account/status`

**Responses:**

- **200**: application/json
  - [User](/docs/references/0.15.x/models/user)

**Example:**

```server-python
from appwrite.client import Client
from appwrite.services.account import Account

client = Client()

(client
  .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
  .set_project('5df5acd0d48c2') # Your project ID
  .set_jwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') # Your secret JSON Web Token
)

account = Account(client)

result = account.update_status()

```

---

#### Update Session (Refresh Tokens)

Access tokens have limited lifespan and expire to mitigate security risks. If session was created using an OAuth provider, this route can be used to "refresh" the access token.

**Endpoint:** `PATCH /account/sessions/{sessionId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| sessionId | string | Yes | Session ID. Use the string 'current' to update the current device session. |

**Responses:**

- **200**: application/json
  - [Session](/docs/references/0.15.x/models/session)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```server-python
from appwrite.client import Client
from appwrite.services.account import Account

client = Client()

(client
  .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
  .set_project('5df5acd0d48c2') # Your project ID
  .set_jwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') # Your secret JSON Web Token
)

account = Account(client)

result = account.update_session('[SESSION_ID]')

```

---

#### Delete Account Session

Use this endpoint to log out the currently logged in user from all their account sessions across all of their different devices. When using the Session ID argument, only the unique session ID provided is deleted.


**Endpoint:** `DELETE /account/sessions/{sessionId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| sessionId | string | Yes | Session ID. Use the string 'current' to delete the current device session. |

**Responses:**

- **204**: no content

**Rate limits:** 100 requests per 3600 seconds

**Example:**

```server-python
from appwrite.client import Client
from appwrite.services.account import Account

client = Client()

(client
  .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
  .set_project('5df5acd0d48c2') # Your project ID
  .set_jwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') # Your secret JSON Web Token
)

account = Account(client)

result = account.delete_session('[SESSION_ID]')

```

---

#### Delete All Account Sessions

Delete all sessions from the user account and remove any sessions cookies from the end client.

**Endpoint:** `DELETE /account/sessions`

**Responses:**

- **204**: no content

**Rate limits:** 100 requests per 3600 seconds

**Example:**

```server-python
from appwrite.client import Client
from appwrite.services.account import Account

client = Client()

(client
  .set_endpoint('https://[HOSTNAME_OR_IP]/v1') # Your API Endpoint
  .set_project('5df5acd0d48c2') # Your project ID
  .set_jwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') # Your secret JSON Web Token
)

account = Account(client)

result = account.delete_sessions()

```

---

