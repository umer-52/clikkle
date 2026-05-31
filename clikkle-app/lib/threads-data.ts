export interface DiscordMessage {
  $id: string;
  threadId: string;
  author: string;
  author_avatar: string;
  message: string;
  role?: "support" | "community" | "user";
  timestamp: string; /* ISO UTC timestamp */
}

export interface DiscordThread {
  $id: string;
  discord_id: string;
  author: string;
  author_avatar: string;
  title: string;
  content: string;
  tags?: string[];
  seo_description?: string;
  tldr: string;
  vote_count: number;
  message_count: number;
  timestamp: string; /* ISO UTC timestamp */
  messages: DiscordMessage[];
}

export const MOCK_THREADS: DiscordThread[] = [
  {
    $id: "thread-1",
    discord_id: "123456789010000001",
    author: "AlexDev99",
    author_avatar: "https://api.dicebear.com/7.x/initials/svg?seed=AlexDev99&backgroundColor=ff5a79",
    title: "How to query relationship columns in Clikkle Databases?",
    content: "Hey everyone! I'm trying out Clikkle's Databases service and I've configured a two-way relationship between an `authors` collection and a `books` collection. How do I actually query books and include the author details in the returned JSON? Is it possible to filter books by the author's name in a single SDK query?",
    tags: ["Databases", "REST API", "Web"],
    seo_description: "Learn how to query database relationships in Clikkle and perform joins or nested queries on collections.",
    tldr: "Clikkle automatically resolves relationship columns and returns nested documents in the JSON response up to 2 levels. However, cross-collection filtering is done via multi-queries or subqueries.",
    vote_count: 8,
    message_count: 3,
    timestamp: "2026-05-20T10:15:30Z",
    messages: [
      {
        $id: "msg-1-1",
        threadId: "thread-1",
        author: "AlexDev99",
        author_avatar: "https://api.dicebear.com/7.x/initials/svg?seed=AlexDev99&backgroundColor=ff5a79",
        message: "Hey everyone! I'm trying out Clikkle's Databases service and I've configured a two-way relationship between an `authors` collection and a `books` collection. How do I query books and include the author details in the returned JSON? Is it possible to filter books by the author's name in a single SDK query?",
        role: "user",
        timestamp: "2026-05-20T10:15:30Z"
      },
      {
        $id: "msg-1-2",
        threadId: "thread-1",
        author: "Sarah_Support",
        author_avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Sarah_Support&backgroundColor=3b82f6",
        message: "Hi Alex! Welcome to Clikkle! \n\nYes, Clikkle Databases fully supports relationships! When you define a relationship column, Clikkle automatically handles the join for you. When you fetch a book document using `databases.getDocument()` or `databases.listDocuments()`, the author column will be resolved and returned as a nested JSON object inside the book document.\n\nHere is an example in Javascript:\n\n```javascript\nconst response = await databases.listDocuments('db_id', 'books_collection_id');\nconsole.log(response.documents[0].author); // This will output the full nested author object!\n```\n\nRegarding filtering books by author's name, Clikkle does not currently support SQL-style joins or filtering on nested attributes in a single query (e.g. `Query.equal('author.name', 'Alex')`). To do this, you should first query the `authors` collection to get their ID, and then query the `books` collection filtering by the author ID attribute:\n\n```javascript\n// 1. Get Author ID\nconst authorQuery = await databases.listDocuments('db_id', 'authors_id', [Query.equal('name', 'Alex')]);\nconst authorId = authorQuery.documents[0].$id;\n\n// 2. Query books using that author's relationship ID\nconst booksQuery = await databases.listDocuments('db_id', 'books_id', [Query.equal('author', authorId)]);\n```\n\nHope this helps!",
        role: "support",
        timestamp: "2026-05-20T10:30:15Z"
      },
      {
        $id: "msg-1-3",
        threadId: "thread-1",
        author: "AlexDev99",
        author_avatar: "https://api.dicebear.com/7.x/initials/svg?seed=AlexDev99&backgroundColor=ff5a79",
        message: "That works beautifully! Having the nesting resolved automatically up to 2 levels makes it super clean. The two-query approach for cross-filtering makes complete sense. Thank you Sarah!",
        role: "user",
        timestamp: "2026-05-20T11:02:45Z"
      }
    ]
  },
  {
    $id: "thread-2",
    discord_id: "123456789010000002",
    author: "VibeCoder",
    author_avatar: "https://api.dicebear.com/7.x/initials/svg?seed=VibeCoder&backgroundColor=10b981",
    title: "Setting up Google OAuth2 provider with Clikkle Auth",
    content: "I'm trying to integrate Google OAuth2 inside my React application. I created the web app Client ID on Google Developer Console and pasted it into Clikkle Auth settings. However, during login, Google gives a `redirect_uri_mismatch` error. What am I doing wrong, and what should my redirect URI be?",
    tags: ["Web", "Accounts", "Users"],
    seo_description: "Resolve redirect URI mismatch errors when setting up Google OAuth2 login in Clikkle Auth.",
    tldr: "Copy the redirect URI supplied in the Clikkle Auth provider configuration modal and paste it exactly into the Authorized Redirect URIs field of your Google Developer Console OAuth 2.0 Client credentials.",
    vote_count: 14,
    message_count: 2,
    timestamp: "2026-05-21T14:22:11Z",
    messages: [
      {
        $id: "msg-2-1",
        threadId: "thread-2",
        author: "VibeCoder",
        author_avatar: "https://api.dicebear.com/7.x/initials/svg?seed=VibeCoder&backgroundColor=10b981",
        message: "I'm trying to integrate Google OAuth2 inside my React application. I created the web app Client ID on Google Developer Console and pasted it into Clikkle Auth settings. However, during login, Google gives a `redirect_uri_mismatch` error. What am I doing wrong, and what should my redirect URI be?",
        role: "user",
        timestamp: "2026-05-21T14:22:11Z"
      },
      {
        $id: "msg-2-2",
        threadId: "thread-2",
        author: "James_Clikkle",
        author_avatar: "https://api.dicebear.com/7.x/initials/svg?seed=James_Clikkle&backgroundColor=6366f1",
        message: "Hey VibeCoder!\n\nThis error occurs when the URL your application asks Google to redirect back to does not match the list of allowed URIs in your Google Developer Console.\n\nTo fix this:\n1. Open your **Clikkle Console** and navigate to your project's **Auth** page, then select the **Settings** tab.\n2. Click on **Google** under **OAuth2 Providers**.\n3. You will see a pre-generated, read-only field labeled **Redirect URI** (it looks like `https://cloud.clikkle.com/v1/account/sessions/oauth2/callback/google/YOUR_PROJECT_ID`). Copy this entire URI.\n4. Go to the [Google Developer Console](https://console.cloud.google.com/).\n5. Select your project, navigate to **APIs & Services** > **Credentials**.\n6. Under **OAuth 2.0 Client IDs**, edit the Web Application credentials you created.\n7. Scroll down to the **Authorized redirect URIs** section and click **ADD URI**.\n8. Paste the exact callback URL you copied from the Clikkle console, and save the settings.\n\nNote that it may take a minute or two for Google's servers to apply the updated redirect whitelist. Try signing in again after saving and let us know if it works!",
        role: "support",
        timestamp: "2026-05-21T14:40:00Z"
      }
    ]
  },
  {
    $id: "thread-3",
    discord_id: "123456789010000003",
    author: "Nils_K",
    author_avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Nils_K&backgroundColor=f59e0b",
    title: "Is there a size limit for files in Clikkle Storage?",
    content: "I want to allow users to upload PDF and video files into my app. Is there a built-in maximum file size limit for uploads in Clikkle Storage? Can I restrict uploads on a per-bucket level or is it configured globally in the environment files?",
    tags: ["Storage", "General"],
    seo_description: "Configure bucket size limits, allowed extensions, and file validation rules in Clikkle Storage.",
    tldr: "Clikkle Storage allows you to set max file size limits and whitelisted extensions both globally (via environment variables) and at a fine-grained, per-bucket level in the console.",
    vote_count: 5,
    message_count: 3,
    timestamp: "2026-05-22T08:05:00Z",
    messages: [
      {
        $id: "msg-3-1",
        threadId: "thread-3",
        author: "Nils_K",
        author_avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Nils_K&backgroundColor=f59e0b",
        message: "I want to allow users to upload PDF and video files into my app. Is there a built-in maximum file size limit for uploads in Clikkle Storage? Can I restrict uploads on a per-bucket level or is it configured globally in the environment files?",
        role: "user",
        timestamp: "2026-05-22T08:05:00Z"
      },
      {
        $id: "msg-3-2",
        threadId: "thread-3",
        author: "Dave_Support",
        author_avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Dave_Support&backgroundColor=ec4899",
        message: "Hey Nils!\n\nYes, absolutely! By default, Clikkle enforces a global maximum file size limit (often 50MB, but customizable in self-hosted configurations using the `_APP_STORAGE_LIMIT` env variable).\n\nHowever, you can configure much tighter constraints at the **bucket level** directly from the Clikkle Console without restarting your servers:\n\n1. In your console, navigate to the **Storage** tab.\n2. Click on the bucket you want to configure, and open the **Settings** tab.\n3. Under **Configuration**, you'll find settings for:\n   * **Maximum File Size**: Enter a value in megabytes (e.g. `10` for 10MB).\n   * **Allowed File Extensions**: You can whitelist extensions by writing them as a list, for example: `pdf, mp4, mov`.\n4. Click save!\n\nClikkle will automatically validate file size and extension header metadata prior to chunked uploads, ensuring instant security and preventing raw bandwidth consumption.",
        role: "support",
        timestamp: "2026-05-22T08:28:12Z"
      },
      {
        $id: "msg-3-3",
        threadId: "thread-3",
        author: "Nils_K",
        author_avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Nils_K&backgroundColor=f59e0b",
        message: "That's perfect! Per-bucket level validation directly in the console is exactly what I was looking for. No need to mess with env settings for simple upload filters. Thanks!",
        role: "user",
        timestamp: "2026-05-22T09:12:00Z"
      }
    ]
  },
  {
    $id: "thread-4",
    discord_id: "123456789010000004",
    author: "Elena_Dev",
    author_avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Elena_Dev&backgroundColor=8b5cf6",
    title: "Can I run Python runtime in Clikkle Functions?",
    content: "I'm planning to write a machine learning preprocessing step using Clikkle Functions. Can I select Python as the runtime when deploying my code? If so, how can I add third-party dependencies like `pandas` or `numpy`? Will Clikkle install them automatically?",
    tags: ["Functions", "Cloud", "Self Hosted"],
    seo_description: "Learn how to use the Python runtime in Clikkle Functions and install dependencies using requirements.txt.",
    tldr: "Clikkle Functions fully supports Python (3.9 and 3.10) runtimes. Add external packages to your standard requirements.txt file and Clikkle will compile them on deployment.",
    vote_count: 11,
    message_count: 2,
    timestamp: "2026-05-22T15:10:45Z",
    messages: [
      {
        $id: "msg-4-1",
        threadId: "thread-4",
        author: "Elena_Dev",
        author_avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Elena_Dev&backgroundColor=8b5cf6",
        message: "I'm planning to write a machine learning preprocessing step using Clikkle Functions. Can I select Python as the runtime when deploying my code? If so, how can I add third-party dependencies like `pandas` or `numpy`? Will Clikkle install them automatically?",
        role: "user",
        timestamp: "2026-05-22T15:10:45Z"
      },
      {
        $id: "msg-4-2",
        threadId: "thread-4",
        author: "Sarah_Support",
        author_avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Sarah_Support&backgroundColor=3b82f6",
        message: "Hi Elena!\n\nYes! Clikkle Functions has comprehensive support for Python runtimes, including `python-3.9` and `python-3.10`.\n\nTo install third-party packages like `pandas` or `numpy`:\n\n1. Inside your function directory (the one containing your `main.py` entrypoint), create a standard `requirements.txt` file.\n2. Write your dependencies in standard pip format:\n   ```text\n   pandas>=2.0.0\n   numpy>=1.24.0\n   ```\n3. When you push your code (via GitHub Integration, Clikkle CLI, or uploading a `.zip` archive), Clikkle's automated build container detects `requirements.txt` and runs pip package compilation for you in a isolated build sandbox.\n\nHere is a simple example of how your `main.py` might look:\n\n```python\nimport pandas as pd\n\ndef main(context):\n    # Incoming request payload\n    data = context.req.body_json\n    \n    # Run pandas logic\n    df = pd.DataFrame(data)\n    processed = df.describe().to_json()\n    \n    return context.res.json({\n        \"status\": \"success\",\n        \"summary\": processed\n    })\n```\n\nTip: Compiling native libraries like numpy can take a minute or two on first build. Clikkle will cache the installed dependencies, so subsequent deployments without modifications to `requirements.txt` will build almost instantly!",
        role: "support",
        timestamp: "2026-05-22T15:35:10Z"
      }
    ]
  },
  {
    $id: "thread-5",
    discord_id: "123456789010000005",
    author: "Zack_AI",
    author_avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Zack_AI&backgroundColor=ef4444",
    title: "Connecting to real-time events via WebSockets",
    content: "I'm building a collaborative whiteboarding tool. I want my React frontend to receive instant updates when a user draws a line. Does Clikkle provide a real-time event listener? What is the client subscription syntax to listen to a specific database collection?",
    tags: ["Web", "Realtime", "Tools"],
    seo_description: "Leverage Clikkle's real-time WebSocket connection to subscribe to database collection changes in React.",
    tldr: "Use Clikkle's client.subscribe() method with channel structures like 'databases.DATABASE_ID.collections.COLLECTION_ID.documents' to listen for real-time document updates.",
    vote_count: 19,
    message_count: 3,
    timestamp: "2026-05-23T11:45:00Z",
    messages: [
      {
        $id: "msg-5-1",
        threadId: "thread-5",
        author: "Zack_AI",
        author_avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Zack_AI&backgroundColor=ef4444",
        message: "I'm building a collaborative whiteboarding tool. I want my React frontend to receive instant updates when a user draws a line. Does Clikkle provide a real-time event listener? What is the client subscription syntax to listen to a specific database collection?",
        role: "user",
        timestamp: "2026-05-23T11:45:00Z"
      },
      {
        $id: "msg-5-2",
        threadId: "thread-5",
        author: "James_Clikkle",
        author_avatar: "https://api.dicebear.com/7.x/initials/svg?seed=James_Clikkle&backgroundColor=6366f1",
        message: "Hi Zack!\n\nYes, absolutely! Clikkle has an ultra-low latency Realtime API built on WebSockets. Using our standard web SDK, you can subscribe to any changes in real-time.\n\nHere is how you would subscribe to updates for a specific collection in your React application:\n\n```javascript\nimport { Client } from 'clikkle';\n\nconst client = new Client()\n    .setEndpoint('https://cloud.clikkle.io/v1')\n    .setProject('YOUR_PROJECT_ID');\n\n// 1. Establish subscription listener\nconst unsubscribe = client.subscribe(\n    'databases.db_id.collections.lines_id.documents',\n    response => {\n        // Response contains event type and document payload\n        console.log(\"Event Type:\", response.events); // e.g. [databases.*.collections.*.documents.*.create]\n        console.log(\"New Line coordinates:\", response.payload);\n        \n        if (response.events.includes('databases.db_id.collections.lines_id.documents.1.create')) {\n            // Add line to your state/canvas\n            drawNewLine(response.payload);\n        }\n    }\n);\n\n// 2. Call unsubscribe() on cleanup/unmount!\n```\n\n### Available WebSocket Channels:\n* `databases.DATABASE_ID.collections.COLLECTION_ID.documents` - Listen to all document events inside this collection (creates, updates, deletes).\n* `databases.DATABASE_ID.collections.COLLECTION_ID.documents.DOCUMENT_ID` - Listen only to changes on one specific document.\n* `files` - Listen to uploads and deletions across all storage buckets.\n\nWebsocket connections are secured using your existing Session Cookie or JWT automatically, so permissions and access control rules will behave exactly as expected!",
        role: "support",
        timestamp: "2026-05-23T12:05:00Z"
      },
      {
        $id: "msg-5-3",
        threadId: "thread-5",
        author: "Zack_AI",
        author_avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Zack_AI&backgroundColor=ef4444",
        message: "This is fantastic. The latency is practically imperceptible when pushing database writes. Having cookie-based authentication handled automatically over the socket connection is a huge time-saver.",
        role: "user",
        timestamp: "2026-05-23T12:55:00Z"
      }
    ]
  },
  {
    $id: "thread-6",
    discord_id: "123456789010000006",
    author: "Marc_J",
    author_avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Marc_J&backgroundColor=14b8a6",
    title: "SSL Certificate Status stuck in pending on Clikkle Hosting",
    content: "I configured a custom domain `app.myapp.com` for my static frontend using Clikkle Sites/Hosting. I created a CNAME record pointing to Clikkle Cloud. The domain is working, but the SSL certificate status in the dashboard has been showing 'pending' for over 12 hours. How long does the verification usually take?",
    tags: ["Cloud", "Tools", "General"],
    seo_description: "Debug pending SSL certificate verification status on custom domains in Clikkle Hosting.",
    tldr: "SSL certificates are issued automatically within 10-30 minutes. If stuck in pending, verify your DNS resolver does not have overlapping A records or CAA security blocks.",
    vote_count: 3,
    message_count: 2,
    timestamp: "2026-05-23T16:20:00Z",
    messages: [
      {
        $id: "msg-6-1",
        threadId: "thread-6",
        author: "Marc_J",
        author_avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Marc_J&backgroundColor=14b8a6",
        message: "I configured a custom domain `app.myapp.com` for my static frontend using Clikkle Sites/Hosting. I created a CNAME record pointing to Clikkle Cloud. The domain is working, but the SSL certificate status in the dashboard has been showing 'pending' for over 12 hours. How long does the verification usually take?",
        role: "user",
        timestamp: "2026-05-23T16:20:00Z"
      },
      {
        $id: "msg-6-2",
        threadId: "thread-6",
        author: "Dave_Support",
        author_avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Dave_Support&backgroundColor=ec4899",
        message: "Hi Marc!\n\nGenerally, SSL certificates (we use automated Let's Encrypt certificates) are issued and active within 10 to 30 minutes of DNS CNAME propagation.\n\nIf it has been stuck in pending for 12 hours, there is usually a DNS lookup failure or certificate verification blocker. Please check these three common causes:\n\n1. **Overlapping DNS Records**: Make sure you *only* have a single CNAME record for your subdomain (`app`). If you have both a CNAME record and a lingering `A` record pointing to an old server, the Let's Encrypt validation will fail because HTTP challenges query all resolved IPs.\n2. **CAA Records**: Check if your domain registrar has a CAA (Certification Authority Authorization) record configured. If a CAA record exists and does not explicitly permit `letsencrypt.org`, Let's Encrypt is legally barred from issuing certificates for your domain. You'll need to add a CAA record with value `0 issue \"letsencrypt.org\"`.\n3. **Cloudflare Proxy Settings**: If you manage your domain via Cloudflare, ensure your CNAME record is set to **DNS Only** (grey cloud) rather than **Proxied** (orange cloud) during first-time certificate setup, as Cloudflare's SSL proxy can interfere with Let's Encrypt HTTP-01 challenges.\n\nIf none of these apply, let me know your actual domain name and I'll query Let's Encrypt's logs to see the precise error!",
        role: "support",
        timestamp: "2026-05-23T16:50:00Z"
      }
    ]
  },
  {
    $id: "thread-7",
    discord_id: "123456789010000007",
    author: "DevOps_Dan",
    author_avatar: "https://api.dicebear.com/7.x/initials/svg?seed=DevOps_Dan&backgroundColor=6b7280",
    title: "Setting up Clikkle on a custom VPS using Docker Compose",
    content: "I want to self-host Clikkle on a clean Ubuntu VPS. I downloaded the default `docker-compose.yml` file, but my server already has Nginx running on port 80 and 443. How do I change the default ports of Clikkle's gateway container, and configure Nginx as a reverse proxy?",
    tags: ["Self Hosted", "Tools"],
    seo_description: "Configure self-hosted Clikkle to run on non-standard ports and proxy traffic through Nginx.",
    tldr: "Modify '_APP_ENV' to update ports to non-standard ones, and configure an Nginx location block to forward WebSocket and HTTP requests with appropriate proxy headers.",
    vote_count: 6,
    message_count: 2,
    timestamp: "2026-05-23T20:00:00Z",
    messages: [
      {
        $id: "msg-7-1",
        threadId: "thread-7",
        author: "DevOps_Dan",
        author_avatar: "https://api.dicebear.com/7.x/initials/svg?seed=DevOps_Dan&backgroundColor=6b7280",
        message: "I want to self-host Clikkle on a clean Ubuntu VPS. I downloaded the default `docker-compose.yml` file, but my server already has Nginx running on port 80 and 443. How do I change the default ports of Clikkle's gateway container, and configure Nginx as a reverse proxy?",
        role: "user",
        timestamp: "2026-05-23T20:00:00Z"
      },
      {
        $id: "msg-7-2",
        threadId: "thread-7",
        author: "James_Clikkle",
        author_avatar: "https://api.dicebear.com/7.x/initials/svg?seed=James_Clikkle&backgroundColor=6366f1",
        message: "Hi Dan!\n\nThis is a very common production setup! You can easily configure this by changing the internal Traefik gateway ports in the Clikkle environment file, and setting Nginx up to route requests.\n\n### Step 1: Modify Clikkle Ports\nOpen your `.env` file (usually generated in your setup folder next to `docker-compose.yml`) and modify the following environment variables. Do *not* edit the `docker-compose.yml` directly, as editing the env file is cleaner:\n\n```bash\n# Change these from default 80 and 443\n_APP_OPTIONS_PORT=8080\n_APP_OPTIONS_PORT_SECURE=4433\n```\n\nRun `docker compose down && docker compose up -d` to apply. Now Clikkle's gateway container will be listening on `http://localhost:8080` instead.\n\n### Step 2: Configure Nginx Reverse Proxy\nCreate an Nginx server block (e.g. `/etc/nginx/sites-available/clikkle.conf`) to proxy traffic from your domains. Ensure you forward WebSocket headers so Realtime subscriptions function properly:\n\n```nginx\nserver {\n    listen 80;\n    listen [::]:80;\n    server_name clikkle.yourdomain.com;\n    return 301 https://$host$request_uri;\n}\n\nserver {\n    listen 443 ssl http2;\n    server_name clikkle.yourdomain.com;\n\n    ssl_certificate /etc/letsencrypt/live/clikkle.yourdomain.com/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/clikkle.yourdomain.com/privkey.pem;\n\n    location / {\n        proxy_pass http://127.0.0.1:8080;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-Forwarded-Proto $scheme;\n\n        # Critical for WebSocket support (Realtime)\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection \"Upgrade\";\n        \n        # Extend timeouts for long-lived realtime connections\n        proxy_read_timeout 600s;\n        proxy_send_timeout 600s;\n    }\n}\n```\n\nRun `nginx -t && systemctl reload nginx` and you'll be good to go!",
        role: "support",
        timestamp: "2026-05-23T20:32:00Z"
      }
    ]
  }
];

export function sanitizeContent(rawContent: string, maxLength: number = 200): string {
  const cleaned = rawContent.replace(
    /```(?:\w+)?\n([\s\S]*?)```|```([\s\S]*?)```/g,
    (_, withLang, withoutLang) => {
      return (withLang || withoutLang).trim();
    }
  );
  return cleaned.length > maxLength ? cleaned.slice(0, maxLength) + "..." : cleaned;
}

export function filterThreads({
  q,
  threads,
  tags,
  allTags = true,
}: {
  threads: DiscordThread[];
  q?: string | null;
  tags?: string[];
  allTags?: boolean;
}) {
  let filtered = threads;

  if (tags && tags.length > 0) {
    filtered = filtered.filter((thread) => {
      const threadTags = thread.tags ?? [];
      if (allTags) {
        return tags.every((tag) => threadTags.includes(tag));
      } else {
        return tags.some((tag) => threadTags.includes(tag));
      }
    });
  }

  if (!q) return filtered;

  const queryWords = q.toLowerCase().split(/\s+/).filter(Boolean);
  if (queryWords.length === 0) return filtered;

  const rankPerWord = 1 / queryWords.length;
  const res: { data: DiscordThread; rank: number }[] = [];

  filtered.forEach((item) => {
    const foundWords = new Set<string>();
    const searchableFields = [
      item.title,
      item.content,
      ...(item.tags ?? []),
      ...(item.messages?.map((m) => m.message) ?? []),
    ].map((f) => f.toLowerCase());

    queryWords.forEach((word) => {
      const hasMatch = searchableFields.some((field) => field.includes(word));
      if (hasMatch) {
        foundWords.add(word);
      }
    });

    const rank = foundWords.size * rankPerWord;
    if (rank > 0) {
      res.push({ data: item, rank });
    }
  });

  return res.sort((a, b) => b.rank - a.rank).map(({ data }) => data);
}

export function getThreads({
  q,
  tags,
  allTags = true,
}: {
  q?: string | null;
  tags?: string[];
  allTags?: boolean;
} = {}) {
  return filterThreads({ threads: MOCK_THREADS, q, tags, allTags });
}

export function getThread(id: string): DiscordThread | undefined {
  return MOCK_THREADS.find((t) => t.$id === id);
}

export function getRelatedThreads(thread: DiscordThread, limit: number = 3): DiscordThread[] {
  const tags = thread.tags ?? [];
  if (tags.length === 0) {
    return MOCK_THREADS.filter((t) => t.$id !== thread.$id).slice(0, limit);
  }
  const related = filterThreads({
    threads: MOCK_THREADS,
    tags,
    allTags: false,
  });
  return related.filter((t) => t.$id !== thread.$id).slice(0, limit);
}
