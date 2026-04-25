# teams

The Teams service allows you to group users of your project and share read and write access to resources like database rows or storage files.

Each user who creates a team becomes the team owner and can delegate the ownership role by inviting a new team member. Only team owners can invite new users to their team.


## Base URL

```
https://<REGION>.cloud.appwrite.io/v1
```

## Endpoints

#### Create Team

Create a new team. The user who creates the team will automatically be assigned as the owner of the team. Only the users with the owner role can invite new members, add new owners and delete or update the team.

**Endpoint:** `POST /teams`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| teamId | string | Yes | Team ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars. |
| name | string | Yes | Team name. Max length: 128 chars. |
| roles | array | No | Array of strings. Use this param to set the roles in the team for the user who created it. The default role is **owner**. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/advanced/platform/permissions). Maximum of 100 roles are allowed, each 32 characters long. |

**Responses:**

- **201**: application/json
  - [Team](/docs/references/1.2.x/models/team)

**Example:**

```client-android-kotlin
import io.appwrite.Client
import io.appwrite.services.Teams

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2") // Your project ID

val teams = Teams(client)

val response = teams.create(
    teamId = "[TEAM_ID]",
    name = "[NAME]",
)

```

---

#### Create Team Membership

Invite a new member to join your team. If initiated from the client SDK, an email with a link to join the team will be sent to the member's email address and an account will be created for them should they not be signed up already. If initiated from server-side SDKs, the new member will automatically be added to the team.

Use the 'url' parameter to redirect the user from the invitation email back to your app. When the user is redirected, use the Update Team Membership Status endpoint to allow the user to accept the invitation to the team. 

Please note that to avoid a Redirect Attack the only valid redirect URL's are the once from domains you have set when adding your platforms in the console interface.

**Endpoint:** `POST /teams/{teamId}/memberships`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| teamId | string | Yes | Team ID. |
| email | string | Yes | Email of the new team member. |
| roles | array | Yes | Array of strings. Use this param to set the user roles in the team. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/advanced/platform/permissions). Maximum of 100 roles are allowed, each 32 characters long. |
| url | string | Yes | URL to redirect the user back to your app from the invitation email.  Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API. |
| name | string | No | Name of the new team member. Max length: 128 chars. |

**Responses:**

- **201**: application/json
  - [Membership](/docs/references/1.2.x/models/membership)

**Rate limits:** 10 requests per 3600 seconds

**Example:**

```client-android-kotlin
import io.appwrite.Client
import io.appwrite.services.Teams

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2") // Your project ID

val teams = Teams(client)

val response = teams.createMembership(
    teamId = "[TEAM_ID]",
    email = "email@example.com",
    roles = listOf(),
    url = "https://example.com",
)

```

---

#### Get Team

Get a team by its ID. All team members have read access for this resource.

**Endpoint:** `GET /teams/{teamId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| teamId | string | Yes | Team ID. |

**Responses:**

- **200**: application/json
  - [Team](/docs/references/1.2.x/models/team)

**Example:**

```client-android-kotlin
import io.appwrite.Client
import io.appwrite.services.Teams

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2") // Your project ID

val teams = Teams(client)

val response = teams.get(
    teamId = "[TEAM_ID]"
)

```

---

#### Get Team Membership

Get a team member by the membership unique id. All team members have read access for this resource.

**Endpoint:** `GET /teams/{teamId}/memberships/{membershipId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| teamId | string | Yes | Team ID. |
| membershipId | string | Yes | Membership ID. |

**Responses:**

- **200**: application/json
  - [Membership](/docs/references/1.2.x/models/membership)

**Example:**

```client-android-kotlin
import io.appwrite.Client
import io.appwrite.services.Teams

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2") // Your project ID

val teams = Teams(client)

val response = teams.getMembership(
    teamId = "[TEAM_ID]",
    membershipId = "[MEMBERSHIP_ID]"
)

```

---

#### List Team Memberships

Use this endpoint to list a team's members using the team's ID. All team members have read access to this endpoint.

**Endpoint:** `GET /teams/{teamId}/memberships`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| teamId | string | Yes | Team ID. |
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/products/databases/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, teamId, invited, joined, confirm |
| search | string | No | Search term to filter your list results. Max length: 256 chars. |

**Responses:**

- **200**: application/json
  - [Memberships List](/docs/references/1.2.x/models/membershipList)

**Example:**

```client-android-kotlin
import io.appwrite.Client
import io.appwrite.services.Teams

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2") // Your project ID

val teams = Teams(client)

val response = teams.listMemberships(
    teamId = "[TEAM_ID]",
)

```

---

#### List Teams

Get a list of all the teams in which the current user is a member. You can use the parameters to filter your results.

**Endpoint:** `GET /teams`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| queries | array | No | Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/products/databases/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, total |
| search | string | No | Search term to filter your list results. Max length: 256 chars. |

**Responses:**

- **200**: application/json
  - [Teams List](/docs/references/1.2.x/models/teamList)

**Example:**

```client-android-kotlin
import io.appwrite.Client
import io.appwrite.services.Teams

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2") // Your project ID

val teams = Teams(client)

val response = teams.list(
)

```

---

#### Update Membership Roles

Modify the roles of a team member. Only team members with the owner role have access to this endpoint. Learn more about roles and permissions.

**Endpoint:** `PATCH /teams/{teamId}/memberships/{membershipId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| teamId | string | Yes | Team ID. |
| membershipId | string | Yes | Membership ID. |
| roles | array | Yes | An array of strings. Use this param to set the user's roles in the team. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/advanced/platform/permissions). Maximum of 100 roles are allowed, each 32 characters long. |

**Responses:**

- **200**: application/json
  - [Membership](/docs/references/1.2.x/models/membership)

**Example:**

```client-android-kotlin
import io.appwrite.Client
import io.appwrite.services.Teams

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2") // Your project ID

val teams = Teams(client)

val response = teams.updateMembershipRoles(
    teamId = "[TEAM_ID]",
    membershipId = "[MEMBERSHIP_ID]",
    roles = listOf()
)

```

---

#### Update Team

Update a team using its ID. Only members with the owner role can update the team.

**Endpoint:** `PUT /teams/{teamId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| teamId | string | Yes | Team ID. |
| name | string | Yes | New team name. Max length: 128 chars. |

**Responses:**

- **200**: application/json
  - [Team](/docs/references/1.2.x/models/team)

**Example:**

```client-android-kotlin
import io.appwrite.Client
import io.appwrite.services.Teams

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2") // Your project ID

val teams = Teams(client)

val response = teams.update(
    teamId = "[TEAM_ID]",
    name = "[NAME]"
)

```

---

#### Update Team Membership Status

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
  - [Membership](/docs/references/1.2.x/models/membership)

**Example:**

```client-android-kotlin
import io.appwrite.Client
import io.appwrite.services.Teams

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2") // Your project ID

val teams = Teams(client)

val response = teams.updateMembershipStatus(
    teamId = "[TEAM_ID]",
    membershipId = "[MEMBERSHIP_ID]",
    userId = "[USER_ID]",
    secret = "[SECRET]"
)

```

---

#### Delete Team

Delete a team using its ID. Only team members with the owner role can delete the team.

**Endpoint:** `DELETE /teams/{teamId}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| teamId | string | Yes | Team ID. |

**Responses:**

- **204**: no content

**Example:**

```client-android-kotlin
import io.appwrite.Client
import io.appwrite.services.Teams

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2") // Your project ID

val teams = Teams(client)

val response = teams.delete(
    teamId = "[TEAM_ID]"
)

```

---

#### Delete Team Membership

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

```client-android-kotlin
import io.appwrite.Client
import io.appwrite.services.Teams

val client = Client(context)
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2") // Your project ID

val teams = Teams(client)

val response = teams.deleteMembership(
    teamId = "[TEAM_ID]",
    membershipId = "[MEMBERSHIP_ID]"
)

```

---

