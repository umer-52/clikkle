---
layout: article
title: Start with Databases
description: Get started with Clikkle Databases. Follow a step-by-step guide to create your first database, define collections, and perform basic data operations.
---

{% section #create-database step=1 title="Create database" %}
Head to your [Clikkle Console](https://cloud.clikkle.io/console/) and create a database and name it `Oscar`.
Optionally, add a custom database ID.
{% /section %}

{% section #create-collection step=2 title="Create collection" %}
Create a collection and name it `My books`. Optionally, add a custom collection ID.

Navigate to **Attributes** and create attributes by clicking **Create attribute** and select **String**.
Attributes define the structure of your collection's documents. Enter **Attribute key** and **Size**. For example, `title` and `100`.

Navigate to **Settings** > **Permissions** and add a new role **Any**.
Check the **CREATE** and **READ** permissions, so anyone can create and read documents.
{% /section %}


{% section #create-documents step=3 title="Create documents" %}
To create a document use the `createDocument` method.

In the **Settings** menu, find your project ID and replace `<PROJECT_ID>` in the example.

Navigate to the `Oscar` database, copy the database ID, and replace `<DATABASE_ID>`.
Then, in the `My books` collection, copy the collection ID, and replace `<COLLECTION_ID>`.

{% multicode %}
```client-web
import { Client, Databases, ID } from "clikkle";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.clikkle.io/v1')
    .setProject('<PROJECT_ID>');

const databases = new Databases(client);

const promise = databases.createDocument(
    '<DATABASE_ID>',
    '<COLLECTION_ID>',
    ID.unique(),
    { "title": "Hamlet" }
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```
```client-flutter
import 'package:clikkle/clikkle.dart';

void main() async {
    final client = Client()
        .setEndpoint('https://<REGION>.cloud.clikkle.io/v1')
        .setProject('<PROJECT_ID>');

    final databases = Databases(client);

    try {
        final document = databases.createDocument(
            databaseId: '<DATABASE_ID>',
            collectionId: '<COLLECTION_ID>',
            documentId: ID.unique(),
            data: { "title": "Hamlet" }
        );
    } on ClikkleException catch(e) {
        print(e);
    }
}
```
```client-apple
import Clikkle
import ClikkleModels

func main() async throws {
    let client = Client()
        .setEndpoint("https://<REGION>.cloud.clikkle.io/v1")
        .setProject("<PROJECT_ID>")

    let databases = Databases(client)

    do {
        let document = try await databases.createDocument(
            databaseId: "<DATABASE_ID>",
            collectionId: "<COLLECTION_ID>",
            documentId: ID.unique(),
            data: ["title" : "hamlet"]
        )
    } catch {
        print(error.localizedDescription)
    }
}
```
```client-android-kotlin
import io.clikkle.Client
import io.clikkle.services.Databases

suspend fun main() {
    val client = Client(applicationContext)
        .setEndpoint("https://<REGION>.cloud.clikkle.io/v1")
        .setProject("<PROJECT_ID>")

    val databases = Databases(client)

    try {
        val document = databases.createDocument(
            databaseId = "<DATABASE_ID>",
            collectionId = "<COLLECTION_ID>",
            documentId = ID.unique(),
            data = mapOf("title" to "hamlet"),
        )
    } catch (e: Exception) {
        Log.e("Clikkle", "Error: " + e.message)
    }
}
```
{% /multicode %}

The response should look similar to this.

```json
{
    "title": "Hamlet",
    "$id": "65013138dcd8618e80c4",
    "$permissions": [],
    "$createdAt": "2023-09-13T03:49:12.905+00:00",
    "$updatedAt": "2023-09-13T03:49:12.905+00:00",
    "$databaseId": "650125c64b3c25ce4bc4",
    "$collectionId": "650125cff227cf9f95ad"
}
```

{% /section %}

{% section #list-documents step=4 title="List documents" %}
To read and query data from your collection, use the `listDocuments` endpoint.

Like the previous step, replace `<PROJECT_ID>`, `<DATABASE_ID>`, and`<COLLECTION_ID>` with their respective IDs.
{% multicode %}
```client-web
import { Client, Databases, Query } from "clikkle";

const client = new Client()
    .setEndpoint("https://<REGION>.cloud.clikkle.io/v1")
    .setProject("<PROJECT_ID>")

const databases = new Databases(client);

let promise = databases.listDocuments(
    "<DATABASE_ID>",
    "<COLLECTION_ID>",
    [
        Query.equal('title', 'Hamlet')
    ]
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
```
```client-flutter
import 'package:clikkle/clikkle.dart';

void main() async {
    final client = Client()
        .setEndpoint("https://<REGION>.cloud.clikkle.io/v1")
        .setProject("<PROJECT_ID>")

    final databases = Databases(client);

    try {
        final documents = await databases.listDocuments(
            databaseId: '<DATABASE_ID>',
            collectionId: '<COLLECTION_ID>',
            queries: [
                Query.equal('title', 'Hamlet')
            ]
        );
    } on ClikkleException catch(e) {
        print(e);
    }
}
```
```client-apple
import Clikkle
import ClikkleModels

func main() async throws{
    let client = Client()
        .setEndpoint("https://<REGION>.cloud.clikkle.io/v1")
        .setProject("<PROJECT_ID>")

    let databases = Databases(client)

    do {
        let documents = try await databases.listDocuments(
            databaseId: "<DATABASE_ID>",
            collectionId: "<COLLECTION_ID>",
            queries: [
                Query.equal("title", value: "Hamlet")
            ]
        )
    } catch {
        print(error.localizedDescription)
    }
}
```
```client-android-kotlin
import io.clikkle.Client
import io.clikkle.Query
import io.clikkle.services.Databases

suspend fun main() {
    val client = Client(applicationContext)
        .setEndpoint("https://<REGION>.cloud.clikkle.io/v1")
        .setProject("<PROJECT_ID>")

    val databases = Databases(client)

    try {
        val documents = databases.listDocuments(
            databaseId = "<DATABASE_ID>",
            collectionId = "<COLLECTION_ID>",
            queries = listOf(
                Query.equal("title", "Hamlet")
            )
        )
    } catch (e: ClikkleException) {
        Log.e("Clikkle", "Error: " + e.message)
    }
}
```

{% /multicode %}
{% /section %}

