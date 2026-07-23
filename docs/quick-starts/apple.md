---
layout: article
title: Start with Apple
description: Build iOS apps with Clikkle and learn how to use our powerful backend to add authentication, user management, file storage, and more.
difficulty: beginner
readtime: 10
back: /docs/quick-starts
---

Learn how to setup your first Apple project powered by Clikkle and the [Clikkle Apple SDK](https://github.com/clikkle/sdk-for-apple).

{% section #step-1 step=1 title="Create Apple project" %}
Open Xcode and click **Create a new Xcode project**.

Choose your desired project template, for example **iOS App**,  and click **Next**.

Now enter your app **product name** and **bundle identifier** and click **Next**. You will need both of these values later when you create your project in the Clikkle console.

Choose a directory for your project in and click **Create** to create your project.

{% /section %}

{% section #step-2 step=2 title="Create Clikkle project" %}
Head to the [Clikkle Console](https://cloud.clikkle.io/console).

{% only_dark %}
![Create project screen](/clikkle/images/docs/quick-starts/dark/create-project.png)
{% /only_dark %}
{% only_light %}
![Create project screen](/clikkle/images/docs/quick-starts/create-project.png)
{% /only_light %}

If this is your first time using Clikkle, create an account and create your first project.

Then, under **Add a platform**, add an **Apple app**. Choose any of **iOS**, **macOS**, **watchOS** or **tvOS** as your Apple platform. If you are creating a multi-platform app, you can add more platforms later.

Add your app's **product name** and **bundle identifier**, your bundle identifier is the one entered when creating an Xcode project. For existing projects, you should use the **bundle identifier** from your project files **Identity** section.

{% only_dark %}
![Add a platform](/clikkle/images/docs/quick-starts/dark/add-platform.png)
{% /only_dark %}
{% only_light %}
![Add a platform](/clikkle/images/docs/quick-starts/add-platform.png)
{% /only_light %}

You can skip optional steps.

{% /section %}

{% section #step-3 step=3 title="Add the Clikkle SDK" %}
To add the Clikkle SDK for Apple as a dependency, open the **File** menu and click **Add Packages**.

In the **Package URL** search box, enter https://github.com/clikkle/sdk-for-apple. 

Once the SDK is found, use `10.1.0` as version, select **Up to Next Major Version** as your **Dependency Rule** and click **Add Package**.

When dependency resolution is complete, click **Add Package** again to add the SDK package to your target.

In order to allow creating OAuth sessions, the following URL scheme must be added to your **Info.plist** file.

```xml
<key>CFBundleURLTypes</key>
<array>
<dict>
    <key>CFBundleTypeRole</key>
    <string>Editor</string>
    <key>CFBundleURLName</key>
    <string>io.clikkle</string>
    <key>CFBundleURLSchemes</key>
    <array>
        <string>clikkle-callback-<PROJECT_ID></string>
    </array>
</dict>
</array>
```

If you're using UIKit as opposed to SwiftUI, you will also need to add the following to your **SceneDelegate.swift** file.

```swift
func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {
    guard let url = URLContexts.first?.url,
        url.absoluteString.contains("clikkle-callback") else {
        return
    }

    WebAuthComponent.handleIncomingCookie(from: url)
}
```
{% /section %}

{% section #step-4 step=4 title="Create Clikkle Singleton" %}
Find your project's ID in the **Settings** page. 

{% only_dark %}
![Project settings screen](/clikkle/images/docs/quick-starts/dark/project-id.png)
{% /only_dark %}
{% only_light %}
![Project settings screen](/clikkle/images/docs/quick-starts/project-id.png)
{% /only_light %}
Create a new file `Clikkle.swift` and add the following code to it, replacing `<PROJECT_ID>` with your project ID.

```swift
import Foundation
import Clikkle
import JSONCodable

class Clikkle {
    var client: Client
    var account: Account
    
    public init() {
        self.client = Client()
            .setEndpoint("https://<REGION>.cloud.clikkle.io/v1")
            .setProject("<PROJECT_ID>")
        
        self.account = Account(client)
    }
    
    public func onRegister(
        _ email: String,
        _ password: String
    ) async throws -> User<[String: AnyCodable]> {
        try await account.create(
            userId: ID.unique(),
            email: email,
            password: password
        )
    }
    
    public func onLogin(
        _ email: String,
        _ password: String
    ) async throws -> Session {
        try await account.createEmailPasswordSession(
            email: email,
            password: password
        )
    }
    
    public func onLogout() async throws {
        _ = try await account.deleteSession(
            sessionId: "current"
        )
    }
    
}

```
{% /section %}
{% section #step-5 step=5 title="Create a login page" %}
Add the following code to `ContentView.swift`.

```swift
import SwiftUI

class ViewModel: ObservableObject {
    @Published var email: String = ""
    @Published var password: String = ""
}

struct ContentView: View {
    @ObservedObject var viewModel = ViewModel()
    let clikkle = Clikkle()

    var body: some View {
        VStack {
            TextField(
                "Email",
                text: $viewModel.email
            )
            SecureField(
                "Password",
                text: $viewModel.password
            )
            Button(
                action: { Task {
                    try await clikkle.onRegister(
                        viewModel.email,
                        viewModel.password
                    )
                }},
                label: {
                    Text("Register")
                }
            )
            Button(
                action: { Task {
                    try await clikkle.onLogin(
                        viewModel.email,
                        viewModel.password
                    )
                }},
                label: {
                    Text("Login")
                }
            )
        }
        .padding()
    }
}
```
{% /section %}

{% section #step-6 step=6 title="Type safety with models" %}
For enhanced type safety, you can use custom model structs with the `nestedType` parameter:

```swift
import Clikkle
struct User: Codable {
    let name: String
    let email: String
    let isVerified: Bool
}

// Usage with type safety
let clikkle = Clikkle()
let tablesDB = TablesDB(clikkle.client)

do {
    let users = try await tablesDB.listRows(
        databaseId: "[DATABASE_ID]",
        tableId: "[TABLE_ID]",
        nestedType: User.self // Enables type safety
    )

    for user in users.rows {
        print("User: \(user.name) (\(user.email))")
    }
} catch {
    print("Error: \(error.localizedDescription)")
}
```

{% info title="Generate types automatically" %}
Use the [Clikkle CLI](/docs/products/databases/type-generation) to generate model structs automatically: `clikkle types collection`
{% /info %}

{% /section %}

{% section #step-7 step=7 title="All set" %}
Run your project by clicking **Start active scheme** in Xcode.
{% /section %}

