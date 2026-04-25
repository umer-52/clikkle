# avatars

The Avatars service aims to help you complete everyday tasks related to your app image, icons, and avatars.

The Avatars service allows you to fetch country flags, browser icons, payment methods logos, remote websites favicons, generate QR codes, and manipulate remote image URLs.

All endpoints in this service allow you to resize, crop, and change the output image quality for maximum performance and visibility in your app.


## Base URL

```
https://<REGION>.cloud.appwrite.io/v1
```

## Endpoints

#### Get browser icon

You can use this endpoint to show different browser icons to your users. The code argument receives the browser code as it appears in your user GET /account/sessions endpoint. Use width, height and quality arguments to change the output settings.

When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.

**Endpoint:** `GET /avatars/browsers/{code}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| code | string | Yes | Browser Code. |
| width | integer | No | Image width. Pass an integer between 0 to 2000. Defaults to 100. |
| height | integer | No | Image height. Pass an integer between 0 to 2000. Defaults to 100. |
| quality | integer | No | Image quality. Pass an integer between 0 to 100. Defaults to 100. |

**Responses:**

- **200**: no content

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.coroutines.CoroutineCallback
import io.appwrite.services.Avatars
import io.appwrite.enums.Browser

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setSession("") // The user session to authenticate with

val avatars = Avatars(client)

val result = avatars.getBrowser(
    code =  Browser.AVANT_BROWSER,
    width = 0, // optional
    height = 0, // optional
    quality = 0 // optional
)

```

---

#### Get country flag

You can use this endpoint to show different country flags icons to your users. The code argument receives the 2 letter country code. Use width, height and quality arguments to change the output settings. Country codes follow the ISO 3166-1 standard.

When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.


**Endpoint:** `GET /avatars/flags/{code}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| code | string | Yes | Country Code. ISO Alpha-2 country code format. |
| width | integer | No | Image width. Pass an integer between 0 to 2000. Defaults to 100. |
| height | integer | No | Image height. Pass an integer between 0 to 2000. Defaults to 100. |
| quality | integer | No | Image quality. Pass an integer between 0 to 100. Defaults to 100. |

**Responses:**

- **200**: no content

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.coroutines.CoroutineCallback
import io.appwrite.services.Avatars
import io.appwrite.enums.Flag

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setSession("") // The user session to authenticate with

val avatars = Avatars(client)

val result = avatars.getFlag(
    code =  Flag.AFGHANISTAN,
    width = 0, // optional
    height = 0, // optional
    quality = 0 // optional
)

```

---

#### Get credit card icon

The credit card endpoint will return you the icon of the credit card provider you need. Use width, height and quality arguments to change the output settings.

When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.


**Endpoint:** `GET /avatars/credit-cards/{code}`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| code | string | Yes | Credit Card Code. Possible values: amex, argencard, cabal, cencosud, diners, discover, elo, hipercard, jcb, mastercard, naranja, targeta-shopping, union-china-pay, visa, mir, maestro, rupay. |
| width | integer | No | Image width. Pass an integer between 0 to 2000. Defaults to 100. |
| height | integer | No | Image height. Pass an integer between 0 to 2000. Defaults to 100. |
| quality | integer | No | Image quality. Pass an integer between 0 to 100. Defaults to 100. |

**Responses:**

- **200**: no content

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.coroutines.CoroutineCallback
import io.appwrite.services.Avatars
import io.appwrite.enums.CreditCard

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setSession("") // The user session to authenticate with

val avatars = Avatars(client)

val result = avatars.getCreditCard(
    code =  CreditCard.AMERICAN_EXPRESS,
    width = 0, // optional
    height = 0, // optional
    quality = 0 // optional
)

```

---

#### Get favicon

Use this endpoint to fetch the favorite icon (AKA favicon) of any remote website URL.

This endpoint does not follow HTTP redirects.

**Endpoint:** `GET /avatars/favicon`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| url | string | Yes | Website URL which you want to fetch the favicon from. |

**Responses:**

- **200**: no content

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.coroutines.CoroutineCallback
import io.appwrite.services.Avatars

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setSession("") // The user session to authenticate with

val avatars = Avatars(client)

val result = avatars.getFavicon(
    url = "https://example.com"
)

```

---

#### Get image from URL

Use this endpoint to fetch a remote image URL and crop it to any image size you want. This endpoint is very useful if you need to crop and display remote images in your app or in case you want to make sure a 3rd party image is properly served using a TLS protocol.

When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 400x400px.

This endpoint does not follow HTTP redirects.

**Endpoint:** `GET /avatars/image`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| url | string | Yes | Image URL which you want to crop. |
| width | integer | No | Resize preview image width, Pass an integer between 0 to 2000. Defaults to 400. |
| height | integer | No | Resize preview image height, Pass an integer between 0 to 2000. Defaults to 400. |

**Responses:**

- **200**: no content

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.coroutines.CoroutineCallback
import io.appwrite.services.Avatars

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setSession("") // The user session to authenticate with

val avatars = Avatars(client)

val result = avatars.getImage(
    url = "https://example.com",
    width = 0, // optional
    height = 0 // optional
)

```

---

#### Get QR code

Converts a given plain text to a QR code image. You can use the query parameters to change the size and style of the resulting image.


**Endpoint:** `GET /avatars/qr`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| text | string | Yes | Plain text to be converted to QR code image. |
| size | integer | No | QR code size. Pass an integer between 1 to 1000. Defaults to 400. |
| margin | integer | No | Margin from edge. Pass an integer between 0 to 10. Defaults to 1. |
| download | boolean | No | Return resulting image with 'Content-Disposition: attachment ' headers for the browser to start downloading it. Pass 0 for no header, or 1 for otherwise. Default value is set to 0. |

**Responses:**

- **200**: no content

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.coroutines.CoroutineCallback
import io.appwrite.services.Avatars

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setSession("") // The user session to authenticate with

val avatars = Avatars(client)

val result = avatars.getQR(
    text = "<TEXT>",
    size = 1, // optional
    margin = 0, // optional
    download = false // optional
)

```

---

#### Get user initials

Use this endpoint to show your user initials avatar icon on your website or app. By default, this route will try to print your logged-in user name or email initials. You can also overwrite the user name if you pass the 'name' parameter. If no name is given and no user is logged, an empty avatar will be returned.

You can use the color and background params to change the avatar colors. By default, a random theme will be selected. The random theme will persist for the user's initials when reloading the same theme will always return for the same initials.

When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.


**Endpoint:** `GET /avatars/initials`

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| name | string | No | Full Name. When empty, current user name or email will be used. Max length: 128 chars. |
| width | integer | No | Image width. Pass an integer between 0 to 2000. Defaults to 100. |
| height | integer | No | Image height. Pass an integer between 0 to 2000. Defaults to 100. |
| background | string | No | Changes background color. By default a random color will be picked and stay will persistent to the given name. |

**Responses:**

- **200**: no content

**Example:**

```server-kotlin
import io.appwrite.Client
import io.appwrite.coroutines.CoroutineCallback
import io.appwrite.services.Avatars

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setSession("") // The user session to authenticate with

val avatars = Avatars(client)

val result = avatars.getInitials(
    name = "<NAME>", // optional
    width = 0, // optional
    height = 0, // optional
    background = "" // optional
)

```

---

