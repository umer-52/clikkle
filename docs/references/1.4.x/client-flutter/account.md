# account

The Account service allows you to authenticate and manage a user account. You can use the account service to update user information, retrieve the user sessions across different devices, and fetch the user security logs with his or her recent activity.

Register new user accounts with the Create Account, Create Magic URL session, or Create Phone session endpoint. You can authenticate the user account by using multiple sign-in methods available. Once the user is authenticated, a new session object will be created to allow the user to access his or her private data and settings.

This service also exposes an endpoint to save and read the user preferences as a key-value object. This feature is handy if you want to allow extra customization in your app. Common usage for this feature may include saving the user's preferred locale, timezone, or custom app theme.


## Base URL

```
https://<REGION>.cloud.appwrite.io/v1
```

## Endpoints

#### Create account

Use this endpoint to allow a new user to register a new account in your project. After the user registration completes successfully, you can use the /account/verfication route to start verifying the user email address. To allow the new user to login to their new account, you need to create a new account session.

**Endpoint:** `POST /account`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| email | string | Yes | User email. |
| password | string | Yes | New user password. Must be at least 8 chars. |
| name | string | No | User name. Max length: 128 chars. |

**Responses:**

- **201**: application/json
  - [User](/docs/references/1.4.x/models/user)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```client-flutter
import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
  ;
  Future result = account.create(
    userId: '[USER_ID]',
    email: 'email@example.com',
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

#### Create anonymous session

Use this endpoint to allow a new user to register an anonymous account in your project. This route will also create a new session for the user. To allow the new user to convert an anonymous account to a normal account, you need to update its email and password or create an OAuth2 session.

**Endpoint:** `POST /account/sessions/anonymous`

**Responses:**

- **201**: application/json
  - [Session](/docs/references/1.4.x/models/session)

**Rate limits:** 50 requests per 3600 seconds

**Example:**

```client-flutter
import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
  ;
  Future result = account.createAnonymousSession();

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}

```

---

#### Create email session

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
  - [Session](/docs/references/1.4.x/models/session)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```client-flutter
import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
  ;
  Future result = account.createEmailSession(
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
  - [Token](/docs/references/1.4.x/models/token)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```client-flutter
import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
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

#### Create email verification (confirmation)

Use this endpoint to complete the user email verification process. Use both the **userId** and **secret** parameters that were attached to your app URL to verify the user email ownership. If confirmed this route will return a 200 status code.

**Endpoint:** `PUT /account/verification`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| secret | string | Yes | Valid verification token. |

**Responses:**

- **200**: application/json
  - [Token](/docs/references/1.4.x/models/token)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```client-flutter
import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
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

#### Create JWT

Use this endpoint to create a JSON Web Token. You can use the resulting JWT to authenticate on behalf of the current user when working with the Appwrite server-side API and SDKs. The JWT secret is valid for 15 minutes from its creation and will be invalid if the user will logout in that time frame.

**Endpoint:** `POST /account/jwt`

**Responses:**

- **201**: application/json
  - [JWT](/docs/references/1.4.x/models/jwt)

**Rate limits:** 100 requests per 3600 seconds

**Example:**

```client-flutter
import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
  ;
  Future result = account.createJWT();

  result
    .then((response) {
      print(response);
    }).catchError((error) {
      print(error.response);
  });
}

```

---

#### Create magic URL session

Sends the user an email with a secret key for creating a session. If the provided user ID has not been registered, a new user will be created. When the user clicks the link in the email, the user is redirected back to the URL you provided with the secret key and userId values attached to the URL query string. Use the query string parameters to submit a request to the PUT /account/sessions/magic-url endpoint to complete the login process. The link sent to the user's email address is valid for 1 hour. If you are on a mobile device you can leave the URL parameter empty, so that the login completion will be handled by your Appwrite instance by default.

A user is limited to 10 active sessions at a time by default. Learn more about session limits.


**Endpoint:** `POST /account/sessions/magic-url`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| email | string | Yes | User email. |
| url | string | No | URL to redirect the user back to your app from the magic URL login. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API. |

**Responses:**

- **201**: application/json
  - [Token](/docs/references/1.4.x/models/token)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```client-flutter
import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
  ;
  Future result = account.createMagicURLSession(
    userId: '[USER_ID]',
    email: 'email@example.com',
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

#### Create magic URL session (confirmation)

Use this endpoint to complete creating the session with the Magic URL. Both the **userId** and **secret** arguments will be passed as query parameters to the redirect URL you have provided when sending your request to the POST /account/sessions/magic-url endpoint.

Please note that in order to avoid a Redirect Attack the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.

**Endpoint:** `PUT /account/sessions/magic-url`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| secret | string | Yes | Valid verification token. |

**Responses:**

- **200**: application/json
  - [Session](/docs/references/1.4.x/models/session)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```client-flutter
import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
  ;
  Future result = account.updateMagicURLSession(
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

#### Create OAuth2 session

Allow the user to login to their account using the OAuth2 provider of their choice. Each OAuth2 provider should be enabled from the Appwrite console first. Use the success and failure arguments to provide a redirect URL's back to your app when login is completed.

If there is already an active session, the new session will be attached to the logged-in account. If there are no active sessions, the server will attempt to look for a user with the same email address as the email received from the OAuth2 provider and attach the new session to the existing user. If no matching user is found - the server will create a new user.

A user is limited to 10 active sessions at a time by default. Learn more about session limits.


**Endpoint:** `GET /account/sessions/oauth2/{provider}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| provider | string | Yes | OAuth2 Provider. Currently, supported providers are: amazon, apple, auth0, authentik, autodesk, bitbucket, bitly, box, dailymotion, discord, disqus, dropbox, etsy, facebook, github, gitlab, google, linkedin, microsoft, notion, oidc, okta, paypal, paypalSandbox, podio, salesforce, slack, spotify, stripe, tradeshift, tradeshiftBox, twitch, wordpress, yahoo, yammer, yandex, zoom. |
| success | string | No | URL to redirect back to your app after a successful login attempt.  Only URLs from hostnames in your project's platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API. |
| failure | string | No | URL to redirect back to your app after a failed login attempt.  Only URLs from hostnames in your project's platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API. |
| scopes | array | No | A list of custom OAuth2 scopes. Check each provider internal docs for a list of supported scopes. Maximum of 100 scopes are allowed, each 4096 characters long. |

**Responses:**

- **301**: no content

**Rate limits:** 50 requests per 3600 seconds

**Example:**

```client-flutter
import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
  ;
  Future result = account.createOAuth2Session(
    provider: 'amazon',
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
  - [Token](/docs/references/1.4.x/models/token)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```client-flutter
import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
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

#### Create password recovery (confirmation)

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
  - [Token](/docs/references/1.4.x/models/token)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```client-flutter
import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
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

#### Create phone session

Sends the user an SMS with a secret key for creating a session. If the provided user ID has not be registered, a new user will be created. Use the returned user ID and secret and submit a request to the PUT /account/sessions/phone endpoint to complete the login process. The secret sent to the user's phone is valid for 15 minutes.

A user is limited to 10 active sessions at a time by default. Learn more about session limits.

**Endpoint:** `POST /account/sessions/phone`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| phone | string | Yes | Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212. |

**Responses:**

- **201**: application/json
  - [Token](/docs/references/1.4.x/models/token)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```client-flutter
import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
  ;
  Future result = account.createPhoneSession(
    userId: '[USER_ID]',
    phone: '+12065550100',
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

#### Create phone session (confirmation)

Use this endpoint to complete creating a session with SMS. Use the **userId** from the createPhoneSession endpoint and the **secret** received via SMS to successfully update and confirm the phone session.

**Endpoint:** `PUT /account/sessions/phone`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| secret | string | Yes | Valid verification token. |

**Responses:**

- **200**: application/json
  - [Session](/docs/references/1.4.x/models/session)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```client-flutter
import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
  ;
  Future result = account.updatePhoneSession(
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

#### Create phone verification

Use this endpoint to send a verification SMS to the currently logged in user. This endpoint is meant for use after updating a user's phone number using the accountUpdatePhone endpoint. Learn more about how to complete the verification process. The verification code sent to the user's phone number is valid for 15 minutes.

**Endpoint:** `POST /account/verification/phone`

**Responses:**

- **201**: application/json
  - [Token](/docs/references/1.4.x/models/token)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```client-flutter
import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
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

#### Create phone verification (confirmation)

Use this endpoint to complete the user phone verification process. Use the **userId** and **secret** that were sent to your user's phone number to verify the user email ownership. If confirmed this route will return a 200 status code.

**Endpoint:** `PUT /account/verification/phone`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| secret | string | Yes | Valid verification token. |

**Responses:**

- **200**: application/json
  - [Token](/docs/references/1.4.x/models/token)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```client-flutter
import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
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

#### Get account

Get the currently logged in user.

**Endpoint:** `GET /account`

**Responses:**

- **200**: application/json
  - [User](/docs/references/1.4.x/models/user)

**Example:**

```client-flutter
import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
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

#### Get account preferences

Get the preferences as a key-value object for the currently logged in user.

**Endpoint:** `GET /account/prefs`

**Responses:**

- **200**: application/json
  - [Preferences](/docs/references/1.4.x/models/preferences)

**Example:**

```client-flutter
import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
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

#### Get session

Use this endpoint to get a logged in user's session using a Session ID. Inputting 'current' will return the current session being used.

**Endpoint:** `GET /account/sessions/{sessionId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| sessionId | string | Yes | Session ID. Use the string 'current' to get the current device session. |

**Responses:**

- **200**: application/json
  - [Session](/docs/references/1.4.x/models/session)

**Example:**

```client-flutter
import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
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

#### List Identities

Get the list of identities for the currently logged in user.

**Endpoint:** `GET /account/identities`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| queries | string | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, provider, providerUid, providerEmail, providerAccessTokenExpiry |

**Responses:**

- **200**: application/json
  - [Identities List](/docs/references/1.4.x/models/identityList)

**Example:**

```client-flutter
import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
  ;
  Future result = account.listIdentities(
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

#### List logs

Get the list of latest security activity logs for the currently logged in user. Each log returns user IP address, location and date and time of log.

**Endpoint:** `GET /account/logs`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset |

**Responses:**

- **200**: application/json
  - [Logs List](/docs/references/1.4.x/models/logList)

**Example:**

```client-flutter
import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
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

#### List sessions

Get the list of active sessions across different devices for the currently logged in user.

**Endpoint:** `GET /account/sessions`

**Responses:**

- **200**: application/json
  - [Sessions List](/docs/references/1.4.x/models/sessionList)

**Example:**

```client-flutter
import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
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
  - [User](/docs/references/1.4.x/models/user)

**Example:**

```client-flutter
import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
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

#### Update name

Update currently logged in user account name.

**Endpoint:** `PATCH /account/name`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| name | string | Yes | User name. Max length: 128 chars. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/1.4.x/models/user)

**Example:**

```client-flutter
import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
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

#### Update OAuth session (refresh tokens)

Access tokens have limited lifespan and expire to mitigate security risks. If session was created using an OAuth provider, this route can be used to "refresh" the access token.

**Endpoint:** `PATCH /account/sessions/{sessionId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| sessionId | string | Yes | Session ID. Use the string 'current' to update the current device session. |

**Responses:**

- **200**: application/json
  - [Session](/docs/references/1.4.x/models/session)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```client-flutter
import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
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
  - [User](/docs/references/1.4.x/models/user)

**Example:**

```client-flutter
import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
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
  - [User](/docs/references/1.4.x/models/user)

**Example:**

```client-flutter
import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
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

#### Update preferences

Update currently logged in user account preferences. The object you pass is stored as is, and replaces any previous value. The maximum allowed prefs size is 64kB and throws error if exceeded.

**Endpoint:** `PATCH /account/prefs`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| prefs | object | Yes | Prefs key-value JSON object. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/1.4.x/models/user)

**Example:**

```client-flutter
import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
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

#### Update status

Block the currently logged in user account. Behind the scene, the user record is not deleted but permanently blocked from any access. To completely delete a user, use the Users API instead.

**Endpoint:** `PATCH /account/status`

**Responses:**

- **200**: application/json
  - [User](/docs/references/1.4.x/models/user)

**Example:**

```client-flutter
import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
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

#### Delete Identity

Delete an identity by its unique ID.

**Endpoint:** `DELETE /account/identities/{identityId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| identityId | string | Yes | Identity ID. |

**Responses:**

- **204**: no content

**Example:**

```client-flutter
import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
  ;
  Future result = account.deleteIdentity(
    identityId: '[IDENTITY_ID]',
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

```client-flutter
import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
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

#### Delete sessions

Delete all sessions from the user account and remove any sessions cookies from the end client.

**Endpoint:** `DELETE /account/sessions`

**Responses:**

- **204**: no content

**Rate limits:** 100 requests per 3600 seconds

**Example:**

```client-flutter
import 'package:appwrite/appwrite.dart';

void main() { // Init SDK
  Client client = Client();
  Account account = Account(client);

  client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
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

