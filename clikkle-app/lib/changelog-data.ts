export interface ChangelogEntry {
  title: string;
  date: string;
  cover?: string;
  body: string;
  slug: string;
}

export const changelogEntries: ChangelogEntry[] = [
  {
    title: 'Introducing Clikkle Skills',
    date: '2026-03-09',
    cover: '/clikkle/images/blog/introducing-Clikkle-skills/cover.png',
    slug: '2026-03-09',
    body: `Clikkle Skills are open-source Markdown files that give AI coding agents deep, language-specific knowledge of Clikkle SDKs. Install skills into your project, and your AI tools generate correct Clikkle code automatically, no more pasting docs into prompts.

Skills are available for the Clikkle CLI and all major SDKs, including TypeScript, Dart, .NET, Go, Kotlin, PHP, Python, Ruby, and Swift. They work with Claude Code, Cursor, Windsurf, and other compatible agents.

Get started with one command:

\`\`\`bash
npx skills add Clikkle/agent-skills
\`\`\``,
  },
  {
    title: 'CNAME flattening support for Clikkle Sites',
    date: '2026-03-06',
    cover: '/clikkle/images/blog/announcing-cname-flattening/cover.png',
    slug: '2026-03-05',
    body: `You can now connect a custom domain to Clikkle Sites without changing your nameservers. Clikkle Sites now supports CNAME flattening and similar apex-domain features provided by modern DNS providers.

Instead of migrating nameservers to Clikkle, you can add a DNS record with your existing provider, verify the domain in the Console, and go live. This works with CNAME flattening (Cloudflare), ALIAS records (Route 53), and ANAME records, depending on your provider.`,
  },
  {
    title: 'Infrastructure stability improvements',
    date: '2026-03-02',
    slug: '2026-03-02',
    body: `We've rolled out infrastructure improvements to strengthen runtime stability across regions, including NYC, after identifying DNS-related instability under load.

What's improved:

- DNS resilience under network partitions
- More powerful instance types and tuning of runtime resource allocations improve performance alongside noisy neighbours
- Improvements to runtime monitoring and alerting

These changes reduce DNS-related latency, improve cold start reliability, and minimize blast radius during node-level issues.`,
  },
  {
    title: 'SMS rates updated to match upstream providers',
    date: '2026-02-22',
    slug: '2026-02-22',
    body: `SMS pricing for Phone OTP has been updated to reflect current rates from our upstream providers. We continuously work with our vendors to ensure the best availability and local delivery for OTP messages worldwide. Per-country rates have been adjusted across the board so that our documentation and billing stay in sync with carrier and provider changes—some destinations saw rate decreases, others increases, and the pricing table has been reorganized for clarity.

See the [Phone OTP documentation](/docs/advanced/platform/phone-otp) for the full per-country SMS pricing table.`,
  },
  {
    title: 'Free plan update: Automatic pausing of inactive projects',
    date: '2026-02-20',
    slug: '2026-02-20-1',
    body: `To reduce idle infrastructure costs and keep the Free plan sustainable at scale, projects on the Free plan with no development activity for 7 consecutive days will be automatically paused.

**What "paused" means**

- Data is not deleted
- The project is not accessible to users while paused
- No background processes run (backups, cron jobs, scheduled functions)
- Projects can be reactivated anytime from the Clikkle Console and become active immediately

**Why this change**
Running cloud infrastructure incurs ongoing costs, even for inactive projects. Automatically pausing idle projects ensures resources are prioritized for developers actively building, while keeping the Free plan sustainable long term.

**Important**
Projects that require continuous availability should be on a paid plan. Free plan projects remain active as long as they show development activity in the Console.`,
  },
  {
    title: 'DNS: TXT record encoding and truncation handling',
    date: '2026-02-20',
    slug: '2026-02-20',
    body: `Two fixes are now live for DNS used by custom domains and network features.

**TXT records:** TXT records now support payloads longer than 255 bytes by using chunked encoding (splitting into 255-byte chunks per RFC 1035), and empty TXT rdata is encoded as a single zero-length character-string so encoding and decoding stay correct.

**Response truncation:** When a response is truncated and the authority section is dropped to fit size limits, NODATA (NOERROR with no answers) and NXDOMAIN responses are now marked non-authoritative so they remain valid and pass validation.

Now live on Clikkle Cloud.`,
  },
  {
    title: 'Advanced filtering across the Console',
    date: '2026-02-17',
    cover: '/clikkle/images/changelog/2026-02-17.png',
    slug: '2026-02-17',
    body: `Debugging and monitoring just got easier. The Clikkle Console now supports advanced filtering for function executions, site logs, and deployments.

Filter by status, trigger type, HTTP method, response status code, duration, request path, or time range, and combine multiple filters to quickly find exactly what you need.

For example, surface all failed function executions from the last hour, or find slow site requests exceeding 5 seconds.

Now live on Clikkle Cloud.`,
  },
  {
    title: 'Realtime queries: Server-side event filtering for subscriptions',
    date: '2026-02-16',
    cover: '/clikkle/images/blog/announcing-realtime-queries/cover.png',
    slug: '2026-02-16',
    body: `Clikkle Realtime now supports passing SDK queries when subscribing to channels. Events are filtered server-side based on your queries, so your callbacks only receive updates that match your conditions.

You can use queries like \`Query.equal()\`, \`Query.notEqual()\`, \`Query.greaterThan()\`, and more, and combine them with \`Query.and()\` and \`Query.or()\` for precise filtering. You can also subscribe to the same channel multiple times with different filters to handle different subsets of events independently.

Available across all Clikkle client SDKs: Web, Flutter, Apple, and Android.

Now live on Clikkle Cloud.`,
  },
  {
    title: 'Realtime Channel helpers: Type-safe subscriptions made simple',
    date: '2026-02-13',
    cover: '/clikkle/images/blog/announcing-realtime-channel-helpers/cover.png',
    slug: '2026-02-13',
    body: `Clikkle Realtime now includes Channel helpers, a fluent, type-safe API for building channel subscriptions. Instead of manually writing channel strings, you use the Channel class with IDE autocomplete and compile-time validation.

Channel helpers support all available channels, event type filtering with \`.create()\`, \`.update()\`, and \`.delete()\`, and flexible wildcards by omitting IDs. Existing string-based subscriptions continue to work.

Available across all Clikkle client SDKs: Web, Flutter, Apple, and Android.

Now live on Clikkle Cloud.`,
  },
  {
    title: 'New string column types for Clikkle Databases',
    date: '2026-02-12',
    cover: '/clikkle/images/blog/new-string-types/cover.png',
    slug: '2026-02-12',
    body: `Clikkle Databases now supports four explicit string column types - \`varchar\`, \`text\`, \`mediumtext\`, and \`longtext\` - giving you transparent control over storage behavior and indexing.

Each type has defined limits and indexing strategies suited to different use cases, from short identifiers to large content. The legacy \`string\` type remains supported for backward compatibility.

Now live on Clikkle Cloud.`,
  },
  {
    title: 'Generate a type-safe SDK from your schema with the Clikkle CLI',
    date: '2026-02-09',
    cover: '/clikkle/images/blog/Clikkle-generate/cover.png',
    slug: '2026-02-09',
    body: `The Clikkle CLI now includes a \`generate\` command that creates a type-safe, project-aware SDK directly from your database schema. The generated SDK includes typed helpers with autocomplete for querying and mutating rows, eliminating boilerplate and turning schema-related runtime bugs into type errors.

Run \`Clikkle generate\` in your project directory to get started.

Now live on Clikkle Cloud.`,
  },
  {
    title: 'Relationship queries and up to 18x faster relationship performance',
    date: '2026-02-06',
    cover: '/clikkle/images/blog/announcing-relationship-queries/cover.png',
    slug: '2026-02-06',
    body: `Clikkle Databases now supports filter queries directly on relationship columns using dot notation. Query across related data with operators like \`equal\`, \`notEqual\`, \`greaterThan\`, \`lessThan\`, \`between\`, and more, without needing to fetch and filter application-side.

Additionally, all relationship operations are now 12-18x faster across the board, with no configuration changes needed.

Now live on Clikkle Cloud.`,
  },
  {
    title: 'Announcing CSV exports: Effortless data extraction, right from your Console',
    date: '2026-02-04',
    cover: '/clikkle/images/blog/announcing-csv-export/cover.png',
    slug: '2026-02-04',
    body: `Clikkle now supports exporting data to CSV directly from the Console. This feature simplifies data extraction and reporting without requiring SDKs or custom scripts.

**What's new**

CSV export introduces a new option in the Clikkle Console for downloading CSV files from your database tables.

That means, you can:

- Apply filters or queries before export
- Choose specific attributes (columns) to include
- Set a custom delimiter and optional header row
- Run exports asynchronously in the background
- Receive email notifications with a short-lived download link once the export completes
- Export relationship fields as IDs by default

Now live on Clikkle Cloud.`,
  },
  {
    title: 'GraphQL schema is now public',
    date: '2026-02-02',
    slug: '2026-02-02',
    body: `You can now run introspection queries on Clikkle's GraphQL API. With introspection enabled, you get:

- **IDE autocomplete** for queries, mutations, and fields
- **Schema exploration** using tools like GraphQL Playground, Insomnia, or Postman
- **Type generation** for strongly-typed clients in your preferred language

Now live on Clikkle Cloud.`,
  },
  {
    title: 'Announcing Screenshots API: Generate pixel-perfect webpage screenshots on demand',
    date: '2026-01-21',
    cover: '/clikkle/images/blog/announcing-screenshots-api/cover.png',
    slug: '2026-01-20',
    body: `We're excited to announce the **Screenshots API**, a new addition to Clikkle Avatars that lets you generate fully customizable webpage screenshots with a single API call.

No more headless browser infrastructure to maintain. No more environment-specific workarounds. Just simple, reliable screenshot generation.

**What you can do:**

- Capture any public webpage as an image
- Simulate an authenticated experience via custom request headers
- Control browser viewport size and device scale
- Render in light or dark theme
- Simulate different locales, timezones, and geolocation
- Pre-grant browser permissions
- Generate full-page or viewport-only screenshots
- Customize output format, dimensions, and quality

The Screenshots API is available today as part of Clikkle Avatars.`,
  },
];

export function formatChangelogDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

