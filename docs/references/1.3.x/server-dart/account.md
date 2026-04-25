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
  - [Token](/docs/references/1.3.x/models/token)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') // Your secret JSON Web Token
  ;

  Future result = account.createVerification(
    url: 'https://example.com',
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
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
  - [Token](/docs/references/1.3.x/models/token)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') // Your secret JSON Web Token
  ;

  Future result = account.updateVerification(
    userId: '[USER_ID]',
    secret: '[SECRET]',
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
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
  - [Token](/docs/references/1.3.x/models/token)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') // Your secret JSON Web Token
  ;

  Future result = account.createRecovery(
    email: 'email@example.com',
    url: 'https://example.com',
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
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
  - [Token](/docs/references/1.3.x/models/token)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') // Your secret JSON Web Token
  ;

  Future result = account.updateRecovery(
    userId: '[USER_ID]',
    secret: '[SECRET]',
    password: 'password',
    passwordAgain: 'password',
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
```

---

#### Create Phone Verification

Use this endpoint to send a verification SMS to the currently logged in user. This endpoint is meant for use after updating a user's phone number using the accountUpdatePhone endpoint. Learn more about how to complete the verification process. The verification code sent to the user's phone number is valid for 15 minutes.

**Endpoint:** `POST /account/verification/phone`

**Responses:**

- **201**: application/json
  - [Token](/docs/references/1.3.x/models/token)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') // Your secret JSON Web Token
  ;

  Future result = account.createPhoneVerification();

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
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
  - [Token](/docs/references/1.3.x/models/token)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') // Your secret JSON Web Token
  ;

  Future result = account.updatePhoneVerification(
    userId: '[USER_ID]',
    secret: '[SECRET]',
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
```

---

#### Get Account

Get currently logged in user data as JSON object.

**Endpoint:** `GET /account`

**Responses:**

- **200**: application/json
  - [User](/docs/references/1.3.x/models/user)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') // Your secret JSON Web Token
  ;

  Future result = account.get();

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
```

---

#### Get Account Preferences

Get currently logged in user preferences as a key-value object.

**Endpoint:** `GET /account/prefs`

**Responses:**

- **200**: application/json
  - [Preferences](/docs/references/1.3.x/models/preferences)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') // Your secret JSON Web Token
  ;

  Future result = account.getPrefs();

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
```

---

#### Get Session

Use this endpoint to get a logged in user's session using a Session ID. Inputting 'current' will return the current session being used.

**Endpoint:** `GET /account/sessions/{sessionId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| sessionId | string | Yes | Session ID. Use the string 'current' to get the current device session. |

**Responses:**

- **200**: application/json
  - [Session](/docs/references/1.3.x/models/session)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') // Your secret JSON Web Token
  ;

  Future result = account.getSession(
    sessionId: '[SESSION_ID]',
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
```

---

#### List Logs

Get currently logged in user list of latest security activity logs. Each log returns user IP address, location and date and time of log.

**Endpoint:** `GET /account/logs`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/products/databases/queries). Only supported methods are limit and offset |

**Responses:**

- **200**: application/json
  - [Logs List](/docs/references/1.3.x/models/logList)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') // Your secret JSON Web Token
  ;

  Future result = account.listLogs(
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
```

---

#### List Sessions

Get currently logged in user list of active sessions across different devices.

**Endpoint:** `GET /account/sessions`

**Responses:**

- **200**: application/json
  - [Sessions List](/docs/references/1.3.x/models/sessionList)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') // Your secret JSON Web Token
  ;

  Future result = account.listSessions();

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
```

---

#### Update Email

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
  - [User](/docs/references/1.3.x/models/user)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') // Your secret JSON Web Token
  ;

  Future result = account.updateEmail(
    email: 'email@example.com',
    password: 'password',
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
```

---

#### Update Name

Update currently logged in user account name.

**Endpoint:** `PATCH /account/name`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| name | string | Yes | User name. Max length: 128 chars. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/1.3.x/models/user)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') // Your secret JSON Web Token
  ;

  Future result = account.updateName(
    name: '[NAME]',
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
```

---

#### Update OAuth Session (Refresh Tokens)

Access tokens have limited lifespan and expire to mitigate security risks. If session was created using an OAuth provider, this route can be used to "refresh" the access token.

**Endpoint:** `PATCH /account/sessions/{sessionId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| sessionId | string | Yes | Session ID. Use the string 'current' to update the current device session. |

**Responses:**

- **200**: application/json
  - [Session](/docs/references/1.3.x/models/session)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') // Your secret JSON Web Token
  ;

  Future result = account.updateSession(
    sessionId: '[SESSION_ID]',
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
```

---

#### Update Password

Update currently logged in user password. For validation, user is required to pass in the new password, and the old password. For users created with OAuth, Team Invites and Magic URL, oldPassword is optional.

**Endpoint:** `PATCH /account/password`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| password | string | Yes | New user password. Must be at least 8 chars. |
| oldPassword | string | No | Current user password. Must be at least 8 chars. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/1.3.x/models/user)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') // Your secret JSON Web Token
  ;

  Future result = account.updatePassword(
    password: '',
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
```

---

#### Update Phone

Update the currently logged in user's phone number. After updating the phone number, the phone verification status will be reset. A confirmation SMS is not sent automatically, however you can use the POST /account/verification/phone endpoint to send a confirmation SMS.

**Endpoint:** `PATCH /account/phone`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| phone | string | Yes | Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212. |
| password | string | Yes | User password. Must be at least 8 chars. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/1.3.x/models/user)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') // Your secret JSON Web Token
  ;

  Future result = account.updatePhone(
    phone: '+12065550100',
    password: 'password',
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
```

---

#### Update Preferences

Update currently logged in user account preferences. The object you pass is stored as is, and replaces any previous value. The maximum allowed prefs size is 64kB and throws error if exceeded.

**Endpoint:** `PATCH /account/prefs`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| prefs | object | Yes | Prefs key-value JSON object. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/1.3.x/models/user)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') // Your secret JSON Web Token
  ;

  Future result = account.updatePrefs(
    prefs: {},
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
```

---

#### Update Status

Block the currently logged in user account. Behind the scene, the user record is not deleted but permanently blocked from any access. To completely delete a user, use the Users API instead.

**Endpoint:** `PATCH /account/status`

**Responses:**

- **200**: application/json
  - [User](/docs/references/1.3.x/models/user)

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') // Your secret JSON Web Token
  ;

  Future result = account.updateStatus();

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
```

---

#### Delete Session

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

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') // Your secret JSON Web Token
  ;

  Future result = account.deleteSession(
    sessionId: '[SESSION_ID]',
  );

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
```

---

#### Delete Sessions

Delete all sessions from the user account and remove any sessions cookies from the end client.

**Endpoint:** `DELETE /account/sessions`

**Responses:**

- **204**: no content

**Rate limits:** 100 requests per 3600 seconds

**Example:**

```server-dart
import 'package:dart_appwrite/dart_appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
    .setJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') // Your secret JSON Web Token
  ;

  Future result = account.deleteSessions();

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}
```

---

