# users

The Users service allows you to manage your project users. Use this service to search, block, and view your users' info, current sessions, and latest activity logs. You can also use the Users service to edit your users' preferences and personal info.


## Base URL

```
https://<REGION>.cloud.appwrite.io/v1
```

## Endpoints

#### Create MFA Recovery Codes

Generate recovery codes used as backup for MFA flow for User ID. Recovery codes can be used as a MFA verification type in createMfaChallenge method by client SDK.

**Endpoint:** `PATCH /users/{userId}/mfa/recovery-codes`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |

**Responses:**

- **201**: application/json
  - [MFA Recovery Codes](/docs/references/1.5.x/models/mfaRecoveryCodes)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.CreateMfaRecoveryCodes(
        "<USER_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

#### Create session

Creates a session for a user. Returns an immediately usable session object.

If you want to generate a token for a custom authentication flow, use the POST /users/{userId}/tokens endpoint.

**Endpoint:** `POST /users/{userId}/sessions`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |

**Responses:**

- **201**: application/json
  - [Session](/docs/references/1.5.x/models/session)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.CreateSession(
        "<USER_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

#### Create token

Returns a token with a secret key for creating a session. Use the user ID and secret and submit a request to the PUT /account/sessions/token endpoint to complete the login process.


**Endpoint:** `POST /users/{userId}/tokens`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| length | integer | No | Token length in characters. The default length is 6 characters |
| expire | integer | No | Token expiration period in seconds. The default expiration is 15 minutes. |

**Responses:**

- **201**: application/json
  - [Token](/docs/references/1.5.x/models/token)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.CreateToken(
        "<USER_ID>",
        users.WithCreateTokenLength(4),
        users.WithCreateTokenExpire(60),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

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
  - [User](/docs/references/1.5.x/models/user)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.Create(
        "<USER_ID>",
        users.WithCreateEmail("email@example.com"),
        users.WithCreatePhone("+12065550100"),
        users.WithCreatePassword(""),
        users.WithCreateName("<NAME>"),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

#### Create User Target

Create a messaging target.

**Endpoint:** `POST /users/{userId}/targets`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| targetId | string | Yes | Target ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| providerType | string | Yes | The target provider type. Can be one of the following: `email`, `sms` or `push`. |
| identifier | string | Yes | The target identifier (token, email, phone etc.) |
| providerId | string | No | Provider ID. Message will be sent to this target from the specified provider ID. If no provider ID is set the first setup provider will be used. |
| name | string | No | Target name. Max length: 128 chars. For example: My Awesome App Galaxy S23. |

**Responses:**

- **201**: application/json
  - [Target](/docs/references/1.5.x/models/target)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.CreateTarget(
        "<USER_ID>",
        "<TARGET_ID>",
        "email",
        "<IDENTIFIER>",
        users.WithCreateTargetProviderId("<PROVIDER_ID>"),
        users.WithCreateTargetName("<NAME>"),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
  - [User](/docs/references/1.5.x/models/user)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.CreateArgon2User(
        "<USER_ID>",
        "email@example.com",
        "password",
        users.WithCreateArgon2UserName("<NAME>"),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
  - [User](/docs/references/1.5.x/models/user)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.CreateBcryptUser(
        "<USER_ID>",
        "email@example.com",
        "password",
        users.WithCreateBcryptUserName("<NAME>"),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
  - [User](/docs/references/1.5.x/models/user)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.CreateMD5User(
        "<USER_ID>",
        "email@example.com",
        "password",
        users.WithCreateMD5UserName("<NAME>"),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
  - [User](/docs/references/1.5.x/models/user)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.CreatePHPassUser(
        "<USER_ID>",
        "email@example.com",
        "password",
        users.WithCreatePHPassUserName("<NAME>"),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
  - [User](/docs/references/1.5.x/models/user)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.CreateScryptModifiedUser(
        "<USER_ID>",
        "email@example.com",
        "password",
        "<PASSWORD_SALT>",
        "<PASSWORD_SALT_SEPARATOR>",
        "<PASSWORD_SIGNER_KEY>",
        users.WithCreateScryptModifiedUserName("<NAME>"),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
  - [User](/docs/references/1.5.x/models/user)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.CreateScryptUser(
        "<USER_ID>",
        "email@example.com",
        "password",
        "<PASSWORD_SALT>",
        0,
        0,
        0,
        0,
        users.WithCreateScryptUserName("<NAME>"),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
  - [User](/docs/references/1.5.x/models/user)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.CreateSHAUser(
        "<USER_ID>",
        "email@example.com",
        "password",
        users.WithCreateSHAUserPasswordVersion("sha1"),
        users.WithCreateSHAUserName("<NAME>"),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

#### Get MFA Recovery Codes

Get recovery codes that can be used as backup for MFA flow by User ID. Before getting codes, they must be generated using createMfaRecoveryCodes method.

**Endpoint:** `GET /users/{userId}/mfa/recovery-codes`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |

**Responses:**

- **200**: application/json
  - [MFA Recovery Codes](/docs/references/1.5.x/models/mfaRecoveryCodes)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.GetMfaRecoveryCodes(
        "<USER_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
  - [User](/docs/references/1.5.x/models/user)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.Get(
        "<USER_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
  - [Preferences](/docs/references/1.5.x/models/preferences)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.GetPrefs(
        "<USER_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

#### Get User Target

Get a user's push notification target by ID.

**Endpoint:** `GET /users/{userId}/targets/{targetId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| targetId | string | Yes | Target ID. |

**Responses:**

- **200**: application/json
  - [Target](/docs/references/1.5.x/models/target)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.GetTarget(
        "<USER_ID>",
        "<TARGET_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

#### List Factors

List the factors available on the account to be used as a MFA challange.

**Endpoint:** `GET /users/{userId}/mfa/factors`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |

**Responses:**

- **200**: application/json
  - [MFAFactors](/docs/references/1.5.x/models/mfaFactors)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.ListMfaFactors(
        "<USER_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

#### List Identities

Get identities for all users.

**Endpoint:** `GET /users/identities`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, provider, providerUid, providerEmail, providerAccessTokenExpiry |
| search | string | No | Search term to filter your list results. Max length: 256 chars. |

**Responses:**

- **200**: application/json
  - [Identities List](/docs/references/1.5.x/models/identityList)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.ListIdentities(
        users.WithListIdentitiesQueries([]interface{}{}),
        users.WithListIdentitiesSearch("<SEARCH>"),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
  - [Logs List](/docs/references/1.5.x/models/logList)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.ListLogs(
        "<USER_ID>",
        users.WithListLogsQueries([]interface{}{}),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
  - [Memberships List](/docs/references/1.5.x/models/membershipList)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.ListMemberships(
        "<USER_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
  - [Sessions List](/docs/references/1.5.x/models/sessionList)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.ListSessions(
        "<USER_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

#### List User Targets

List the messaging targets that are associated with a user.

**Endpoint:** `GET /users/{userId}/targets`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, email, phone, status, passwordUpdate, registration, emailVerification, phoneVerification, labels |

**Responses:**

- **200**: application/json
  - [Target list](/docs/references/1.5.x/models/targetList)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.ListTargets(
        "<USER_ID>",
        users.WithListTargetsQueries([]interface{}{}),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

#### List users

Get a list of all the project's users. You can use the query params to filter your results.

**Endpoint:** `GET /users`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, email, phone, status, passwordUpdate, registration, emailVerification, phoneVerification, labels |
| search | string | No | Search term to filter your list results. Max length: 256 chars. |

**Responses:**

- **200**: application/json
  - [Users List](/docs/references/1.5.x/models/userList)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.List(
        users.WithListQueries([]interface{}{}),
        users.WithListSearch("<SEARCH>"),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
  - [User](/docs/references/1.5.x/models/user)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.UpdateEmail(
        "<USER_ID>",
        "email@example.com",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
  - [User](/docs/references/1.5.x/models/user)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.UpdateEmailVerification(
        "<USER_ID>",
        false,
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

#### Update MFA

Enable or disable MFA on a user account.

**Endpoint:** `PATCH /users/{userId}/mfa`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| mfa | boolean | Yes | Enable or disable MFA. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/1.5.x/models/user)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.UpdateMfa(
        "<USER_ID>",
        false,
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
  - [User](/docs/references/1.5.x/models/user)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.UpdateName(
        "<USER_ID>",
        "<NAME>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
  - [User](/docs/references/1.5.x/models/user)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.UpdatePassword(
        "<USER_ID>",
        "",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
  - [User](/docs/references/1.5.x/models/user)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.UpdatePhone(
        "<USER_ID>",
        "+12065550100",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
  - [User](/docs/references/1.5.x/models/user)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.UpdatePhoneVerification(
        "<USER_ID>",
        false,
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
| labels | array | Yes | Array of user labels. Replaces the previous labels. Maximum of 1000 labels are allowed, each up to 36 alphanumeric characters long. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/1.5.x/models/user)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.UpdateLabels(
        "<USER_ID>",
        []interface{}{},
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
  - [Preferences](/docs/references/1.5.x/models/preferences)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.UpdatePrefs(
        "<USER_ID>",
        map[string]interface{}{},
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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
  - [User](/docs/references/1.5.x/models/user)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.UpdateStatus(
        "<USER_ID>",
        false,
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

#### Update User target

Update a messaging target.

**Endpoint:** `PATCH /users/{userId}/targets/{targetId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| targetId | string | Yes | Target ID. |
| identifier | string | No | The target identifier (token, email, phone etc.) |
| providerId | string | No | Provider ID. Message will be sent to this target from the specified provider ID. If no provider ID is set the first setup provider will be used. |
| name | string | No | Target name. Max length: 128 chars. For example: My Awesome App Galaxy S23. |

**Responses:**

- **200**: application/json
  - [Target](/docs/references/1.5.x/models/target)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.UpdateTarget(
        "<USER_ID>",
        "<TARGET_ID>",
        users.WithUpdateTargetIdentifier("<IDENTIFIER>"),
        users.WithUpdateTargetProviderId("<PROVIDER_ID>"),
        users.WithUpdateTargetName("<NAME>"),
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

#### Delete Authenticator

Delete an authenticator app.

**Endpoint:** `DELETE /users/{userId}/mfa/authenticators/{type}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| type | string | Yes | Type of authenticator. |

**Responses:**

- **200**: application/json
  - [User](/docs/references/1.5.x/models/user)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.DeleteMfaAuthenticator(
        "<USER_ID>",
        "totp",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

#### Delete identity

Delete an identity by its unique ID.

**Endpoint:** `DELETE /users/identities/{identityId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| identityId | string | Yes | Identity ID. |

**Responses:**

- **204**: no content

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.DeleteIdentity(
        "<IDENTITY_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.Delete(
        "<USER_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.DeleteSession(
        "<USER_ID>",
        "<SESSION_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

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

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.DeleteSessions(
        "<USER_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

#### Delete user target

Delete a messaging target.

**Endpoint:** `DELETE /users/{userId}/targets/{targetId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |
| targetId | string | Yes | Target ID. |

**Responses:**

- **204**: no content

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.DeleteTarget(
        "<USER_ID>",
        "<TARGET_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

#### Regenerate MFA Recovery Codes

Regenerate recovery codes that can be used as backup for MFA flow by User ID. Before regenerating codes, they must be first generated using createMfaRecoveryCodes method.

**Endpoint:** `PUT /users/{userId}/mfa/recovery-codes`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| userId | string | Yes | User ID. |

**Responses:**

- **200**: application/json
  - [MFA Recovery Codes](/docs/references/1.5.x/models/mfaRecoveryCodes)

**Example:**

```server-go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/client"
    "github.com/appwrite/sdk-for-go/users"
)

func main() {
    client := client.NewClient()

    client.SetEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    client.SetProject("<YOUR_PROJECT_ID>") // Your project ID
    client.SetKey("<YOUR_API_KEY>") // Your secret API key

    service := users.NewUsers(client)
    response, error := service.UpdateMfaRecoveryCodes(
        "<USER_ID>",
    )

    if error != nil {
        panic(error)
    }

    fmt.Println(response)
}

```

---

