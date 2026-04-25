# Deployment

Deployment

## Properties

| Name | Type | Description |
|------|------|-------------|
| $id | string | Deployment ID. |
| $createdAt | string | Deployment creation date in ISO 8601 format. |
| $updatedAt | string | Deployment update date in ISO 8601 format. |
| type | string | Type of deployment. |
| resourceId | string | Resource ID. |
| resourceType | string | Resource type. |
| entrypoint | string | The entrypoint file to use to execute the deployment code. |
| sourceSize | integer | The code size in bytes. |
| buildSize | integer | The build output size in bytes. |
| totalSize | integer | The total size in bytes (source and build output). |
| buildId | string | The current build ID. |
| activate | boolean | Whether the deployment should be automatically activated. |
| screenshotLight | string | Screenshot with light theme preference file ID. |
| screenshotDark | string | Screenshot with dark theme preference file ID. |
| status | string | The deployment status. Possible values are "waiting", "processing", "building", "ready", "canceled" and "failed". |
| buildLogs | string | The build logs. |
| buildDuration | integer | The current build time in seconds. |
| providerRepositoryName | string | The name of the vcs provider repository |
| providerRepositoryOwner | string | The name of the vcs provider repository owner |
| providerRepositoryUrl | string | The url of the vcs provider repository |
| providerCommitHash | string | The commit hash of the vcs commit |
| providerCommitAuthorUrl | string | The url of vcs commit author |
| providerCommitAuthor | string | The name of vcs commit author |
| providerCommitMessage | string | The commit message |
| providerCommitUrl | string | The url of the vcs commit |
| providerBranch | string | The branch of the vcs repository |
| providerBranchUrl | string | The branch of the vcs repository |

## Example

### REST

```json
{
  "$id": "5e5ea5c16897e",
  "$createdAt": "2020-10-15T06:38:00.000+00:00",
  "$updatedAt": "2020-10-15T06:38:00.000+00:00",
  "type": "vcs",
  "resourceId": "5e5ea6g16897e",
  "resourceType": "functions",
  "entrypoint": "index.js",
  "sourceSize": 128,
  "buildSize": 128,
  "totalSize": 128,
  "buildId": "5e5ea5c16897e",
  "activate": true,
  "screenshotLight": "5e5ea5c16897e",
  "screenshotDark": "5e5ea5c16897e",
  "status": "ready",
  "buildLogs": "Compiling source files...",
  "buildDuration": 128,
  "providerRepositoryName": "database",
  "providerRepositoryOwner": "utopia",
  "providerRepositoryUrl": "https://github.com/vermakhushboo/g4-node-function",
  "providerCommitHash": "7c3f25d",
  "providerCommitAuthorUrl": "https://github.com/vermakhushboo",
  "providerCommitAuthor": "Khushboo Verma",
  "providerCommitMessage": "Update index.js",
  "providerCommitUrl": "https://github.com/vermakhushboo/g4-node-function/commit/60c0416257a9cbcdd96b2d370c38d8f8d150ccfb",
  "providerBranch": "0.7.x",
  "providerBranchUrl": "https://github.com/vermakhushboo/appwrite/tree/0.7.x"
}
```

### GraphQL

```json
{
  "_id": "5e5ea5c16897e",
  "_createdAt": "2020-10-15T06:38:00.000+00:00",
  "_updatedAt": "2020-10-15T06:38:00.000+00:00",
  "type": "vcs",
  "resourceId": "5e5ea6g16897e",
  "resourceType": "functions",
  "entrypoint": "index.js",
  "sourceSize": 128,
  "buildSize": 128,
  "totalSize": 128,
  "buildId": "5e5ea5c16897e",
  "activate": true,
  "screenshotLight": "5e5ea5c16897e",
  "screenshotDark": "5e5ea5c16897e",
  "status": "ready",
  "buildLogs": "Compiling source files...",
  "buildDuration": 128,
  "providerRepositoryName": "database",
  "providerRepositoryOwner": "utopia",
  "providerRepositoryUrl": "https://github.com/vermakhushboo/g4-node-function",
  "providerCommitHash": "7c3f25d",
  "providerCommitAuthorUrl": "https://github.com/vermakhushboo",
  "providerCommitAuthor": "Khushboo Verma",
  "providerCommitMessage": "Update index.js",
  "providerCommitUrl": "https://github.com/vermakhushboo/g4-node-function/commit/60c0416257a9cbcdd96b2d370c38d8f8d150ccfb",
  "providerBranch": "0.7.x",
  "providerBranchUrl": "https://github.com/vermakhushboo/appwrite/tree/0.7.x"
}
```

