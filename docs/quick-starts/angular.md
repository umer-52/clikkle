---
layout: article
title: Start with Angular
description: Learn how to use Clikkle to add authentication, user management, file storage, and more to your Angular apps.
difficulty: beginner
readtime: 3
back: /docs/quick-starts
---


Learn how to setup your first Angular project powered by Clikkle.
{% section #step-1 step=1 title="Create project" %}
Head to the [Clikkle Console](https://cloud.clikkle.io/console).

{% only_dark %}
![Create project screen](/clikkle/images/docs/quick-starts/dark/create-project.png)
{% /only_dark %}
{% only_light %}
![Create project screen](/clikkle/images/docs/quick-starts/create-project.png)
{% /only_light %}

If this is your first time using Clikkle, create an account and create your first project.

Then, under **Add a platform**, add a **Web app**. The **Hostname** should be `localhost`.

{% info title="Cross-Origin Resource Sharing (CORS)" %}
Adding `localhost` as a platform lets your local app talk to Clikkle. For production, add your live domain to avoid CORS errors.

Learn more in our [CORS error guide](/blog/post/cors-error).
{% /info %}


{% only_dark %}
![Add a platform](/clikkle/images/docs/quick-starts/dark/add-platform.png)
{% /only_dark %}
{% only_light %}
![Add a platform](/clikkle/images/docs/quick-starts/add-platform.png)
{% /only_light %}

You can skip optional steps.

{% /section %}
{% section #step-2 step=2 title="Create Angular project" %}
Create an Angular project.

If you don't have Angular CLI installed, run this command.
```sh
npm install -g @angular/cli
```

Then, create a project.

```sh
ng new my-app
cd my-app
```

{% /section %}
{% section #step-3 step=3 title="Install Clikkle" %}

Install the JavaScript Clikkle SDK.

```sh
npm install clikkle
```
{% /section %}
{% section #step-4 step=4 title="Import Clikkle" %}
Find your project's ID in the **Settings** page.

{% only_dark %}
![Project settings screen](/clikkle/images/docs/quick-starts/dark/project-id.png)
{% /only_dark %}
{% only_light %}
![Project settings screen](/clikkle/images/docs/quick-starts/project-id.png)
{% /only_light %}
Create a new file `src/lib/clikkle.ts` and add the following code to it, replace `<PROJECT_ID>` with your project ID.

```client-web
import { Client, Account} from 'clikkle';

export const client = new Client();

client
    .setEndpoint('https://<REGION>.cloud.clikkle.io/v1')
    .setProject('<PROJECT_ID>'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'clikkle';
```
{% /section %}
{% section #step-5 step=5 title="Create a login page" %}
First, add imports for the `FormsModule` from Angular to handle the login form..

```ts
import { FormsModule } from '@angular/forms';
...
@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    // ...
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Then, replace the contents of `src/app/app.component.html`.
```html
<div>
  <p>
    {{ loggedInUser ? 'Logged in as ' + loggedInUser.name : 'Not logged in' }}
  </p>

  <div>
    <input type="email" placeholder="Email" [(ngModel)]="email" />
    <input type="password" placeholder="Password" [(ngModel)]="password" />
    <input type="text" placeholder="Name" [(ngModel)]="name" />

    <button (click)="login(email, password)">
      Login
    </button>

    <button (click)="register(email, password, name)">
      Register
    </button>

    <button (click)="logout()">
      Logout
    </button>
  </div>
</div>
```

Lastly, update `src/app/app.component.ts`.
```ts
import { Component } from '@angular/core';
import { account, ID } from '../lib/clikkle';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedInUser: any = null;
  email: string = '';
  password: string = '';
  name: string = '';

  async login(email: string, password: string) {
    await account.createEmailPasswordSession({
      email,
      password
    });
    this.loggedInUser = await account.get();
  }

  async register(email: string, password: string, name: string) {
    await account.create({
      userId: ID.unique(),
      email,
      password,
      name
    });
    this.login(email, password);
  }

  async logout() {
    await account.deleteSession({
      sessionId: 'current'
    });
    this.loggedInUser = null;
  }
}
```

{% /section %}

{% section #step-6 step=6 title="All set" %}
Run your project with `ng serve --port 3000` and open [Localhost on Port 3000](http://localhost:3000) in your browser.
{% /section %}

