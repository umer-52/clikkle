# teams

The Teams service allows you to group users of your project and share read and write access to resources like database rows or storage files.

Each user who creates a team becomes the team owner and can delegate the ownership role by inviting a new team member. Only team owners can invite new users to their team.


## Base URL

```
https://<REGION>.cloud.appwrite.io/v1
```

## Endpoints

#### Create team

Create a new team. The user who creates the team will automatically be assigned as the owner of the team. Only the users with the owner role can invite new members, add new owners and delete or update the team.

**Endpoint:** `POST /teams`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| teamId | string | Yes | Team ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| name | string | Yes | Team name. Max length: 128 chars. |
| roles | array | No | Array of strings. Use this param to set the roles in the team for the user who created it. The default role is **owner**. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/permissions). Maximum of 100 roles are allowed, each 32 characters long. |

**Responses:**

- **201**: application/json
  - [Team](/docs/references/1.4.x/models/team)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('5df5acd0d48c2') # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

teams = Teams.new(client)

response = teams.create(team_id: '[TEAM_ID]', name: '[NAME]')

puts response.inspect

```

---

#### Create team membership

Invite a new member to join your team. Provide an ID for existing users, or invite unregistered users using an email or phone number. If initiated from a Client SDK, Appwrite will send an email or sms with a link to join the team to the invited user, and an account will be created for them if one doesn't exist. If initiated from a Server SDK, the new member will be added automatically to the team.

You only need to provide one of a user ID, email, or phone number. Appwrite will prioritize accepting the user ID > email > phone number if you provide more than one of these parameters.

Use the `url` parameter to redirect the user from the invitation email to your app. After the user is redirected, use the Update Team Membership Status endpoint to allow the user to accept the invitation to the team. 

Please note that to avoid a Redirect Attack Appwrite will accept the only redirect URLs under the domains you have added as a platform on the Appwrite Console.


**Endpoint:** `POST /teams/{teamId}/memberships`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| teamId | string | Yes | Team ID. |
| roles | array | Yes | Array of strings. Use this param to set the user roles in the team. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/permissions). Maximum of 100 roles are allowed, each 32 characters long. |
| email | string | No | Email of the new team member. |
| userId | string | No | ID of the user to be added to a team. |
| phone | string | No | Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212. |
| url | string | No | URL to redirect the user back to your app from the invitation email.  Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API. |
| name | string | No | Name of the new team member. Max length: 128 chars. |

**Responses:**

- **201**: application/json
  - [Membership](/docs/references/1.4.x/models/membership)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('5df5acd0d48c2') # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

teams = Teams.new(client)

response = teams.create_membership(team_id: '[TEAM_ID]', roles: [])

puts response.inspect

```

---

#### Get team

Get a team by its ID. All team members have read access for this resource.

**Endpoint:** `GET /teams/{teamId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| teamId | string | Yes | Team ID. |

**Responses:**

- **200**: application/json
  - [Team](/docs/references/1.4.x/models/team)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('5df5acd0d48c2') # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

teams = Teams.new(client)

response = teams.get(team_id: '[TEAM_ID]')

puts response.inspect

```

---

#### Get team membership

Get a team member by the membership unique id. All team members have read access for this resource.

**Endpoint:** `GET /teams/{teamId}/memberships/{membershipId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| teamId | string | Yes | Team ID. |
| membershipId | string | Yes | Membership ID. |

**Responses:**

- **200**: application/json
  - [Membership](/docs/references/1.4.x/models/membership)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('5df5acd0d48c2') # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

teams = Teams.new(client)

response = teams.get_membership(team_id: '[TEAM_ID]', membership_id: '[MEMBERSHIP_ID]')

puts response.inspect

```

---

#### Get team preferences

Get the team's shared preferences by its unique ID. If a preference doesn't need to be shared by all team members, prefer storing them in user preferences.

**Endpoint:** `GET /teams/{teamId}/prefs`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| teamId | string | Yes | Team ID. |

**Responses:**

- **200**: application/json
  - [Preferences](/docs/references/1.4.x/models/preferences)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('5df5acd0d48c2') # Your project ID
    .set_jwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') # Your secret JSON Web Token

teams = Teams.new(client)

response = teams.get_prefs(team_id: '[TEAM_ID]')

puts response.inspect

```

---

#### List team memberships

Use this endpoint to list a team's members using the team's ID. All team members have read access to this endpoint.

**Endpoint:** `GET /teams/{teamId}/memberships`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| teamId | string | Yes | Team ID. |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, teamId, invited, joined, confirm |
| search | string | No | Search term to filter your list results. Max length: 256 chars. |

**Responses:**

- **200**: application/json
  - [Memberships List](/docs/references/1.4.x/models/membershipList)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('5df5acd0d48c2') # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

teams = Teams.new(client)

response = teams.list_memberships(team_id: '[TEAM_ID]')

puts response.inspect

```

---

#### List teams

Get a list of all the teams in which the current user is a member. You can use the parameters to filter your results.

**Endpoint:** `GET /teams`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, total |
| search | string | No | Search term to filter your list results. Max length: 256 chars. |

**Responses:**

- **200**: application/json
  - [Teams List](/docs/references/1.4.x/models/teamList)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('5df5acd0d48c2') # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

teams = Teams.new(client)

response = teams.list()

puts response.inspect

```

---

#### Update membership

Modify the roles of a team member. Only team members with the owner role have access to this endpoint. Learn more about roles and permissions.


**Endpoint:** `PATCH /teams/{teamId}/memberships/{membershipId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| teamId | string | Yes | Team ID. |
| membershipId | string | Yes | Membership ID. |
| roles | array | Yes | An array of strings. Use this param to set the user's roles in the team. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/permissions). Maximum of 100 roles are allowed, each 32 characters long. |

**Responses:**

- **200**: application/json
  - [Membership](/docs/references/1.4.x/models/membership)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('5df5acd0d48c2') # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

teams = Teams.new(client)

response = teams.update_membership(team_id: '[TEAM_ID]', membership_id: '[MEMBERSHIP_ID]', roles: [])

puts response.inspect

```

---

#### Update name

Update the team's name by its unique ID.

**Endpoint:** `PUT /teams/{teamId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| teamId | string | Yes | Team ID. |
| name | string | Yes | New team name. Max length: 128 chars. |

**Responses:**

- **200**: application/json
  - [Team](/docs/references/1.4.x/models/team)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('5df5acd0d48c2') # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

teams = Teams.new(client)

response = teams.update_name(team_id: '[TEAM_ID]', name: '[NAME]')

puts response.inspect

```

---

#### Update preferences

Update the team's preferences by its unique ID. The object you pass is stored as is and replaces any previous value. The maximum allowed prefs size is 64kB and throws an error if exceeded.

**Endpoint:** `PUT /teams/{teamId}/prefs`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| teamId | string | Yes | Team ID. |
| prefs | object | Yes | Prefs key-value JSON object. |

**Responses:**

- **200**: application/json
  - [Preferences](/docs/references/1.4.x/models/preferences)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('5df5acd0d48c2') # Your project ID
    .set_jwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') # Your secret JSON Web Token

teams = Teams.new(client)

response = teams.update_prefs(team_id: '[TEAM_ID]', prefs: {})

puts response.inspect

```

---

#### Update team membership status

Use this endpoint to allow a user to accept an invitation to join a team after being redirected back to your app from the invitation email received by the user.

If the request is successful, a session for the user is automatically created.


**Endpoint:** `PATCH /teams/{teamId}/memberships/{membershipId}/status`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| teamId | string | Yes | Team ID. |
| membershipId | string | Yes | Membership ID. |
| userId | string | Yes | User ID. |
| secret | string | Yes | Secret key. |

**Responses:**

- **200**: application/json
  - [Membership](/docs/references/1.4.x/models/membership)

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('5df5acd0d48c2') # Your project ID
    .set_jwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...') # Your secret JSON Web Token

teams = Teams.new(client)

response = teams.update_membership_status(team_id: '[TEAM_ID]', membership_id: '[MEMBERSHIP_ID]', user_id: '[USER_ID]', secret: '[SECRET]')

puts response.inspect

```

---

#### Delete team

Delete a team using its ID. Only team members with the owner role can delete the team.

**Endpoint:** `DELETE /teams/{teamId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| teamId | string | Yes | Team ID. |

**Responses:**

- **204**: no content

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('5df5acd0d48c2') # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

teams = Teams.new(client)

response = teams.delete(team_id: '[TEAM_ID]')

puts response.inspect

```

---

#### Delete team membership

This endpoint allows a user to leave a team or for a team owner to delete the membership of any other team member. You can also use this endpoint to delete a user membership even if it is not accepted.

**Endpoint:** `DELETE /teams/{teamId}/memberships/{membershipId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| teamId | string | Yes | Team ID. |
| membershipId | string | Yes | Membership ID. |

**Responses:**

- **204**: no content

**Example:**

```server-ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('5df5acd0d48c2') # Your project ID
    .set_key('919c2d18fb5d4...a2ae413da83346ad2') # Your secret API key

teams = Teams.new(client)

response = teams.delete_membership(team_id: '[TEAM_ID]', membership_id: '[MEMBERSHIP_ID]')

puts response.inspect

```

---

