import type { NavParent, NavTree } from "@/lib/docs/nav-tree";
import { isNewUntil } from "@/lib/docs/is-new-until";

export type SectionSidebarDef = {
  prefix: string;
  parent: NavParent;
  navigation: NavTree;
};

const auth: SectionSidebarDef = {
  prefix: "/docs/products/auth",
  parent: { href: "/docs", label: "Auth" },
  navigation: [
    {
      label: "Getting started",
      items: [
        { label: "Overview", href: "/docs/products/auth" },
        { label: "Quick start", href: "/docs/products/auth/quick-start" },
      ],
    },
    {
      label: "Concepts",
      items: [
        { label: "Accounts", href: "/docs/products/auth/accounts" },
        { label: "Users", href: "/docs/products/auth/users" },
        { label: "Teams", href: "/docs/products/auth/teams" },
        { label: "Preferences", href: "/docs/products/auth/preferences" },
        { label: "Labels", href: "/docs/products/auth/labels" },
        { label: "Security", href: "/docs/products/auth/security" },
        { label: "Tokens", href: "/docs/products/auth/tokens" },
        { label: "Identities", href: "/docs/products/auth/identities" },
      ],
    },
    {
      label: "Journeys",
      items: [
        { label: "Email and password login", href: "/docs/products/auth/email-password" },
        { label: "Phone (SMS) login", href: "/docs/products/auth/phone-sms" },
        { label: "Magic URL login", href: "/docs/products/auth/magic-url" },
        { label: "Email OTP login", href: "/docs/products/auth/email-otp" },
        { label: "OAuth2 login", href: "/docs/products/auth/oauth2" },
        { label: "Anonymous login", href: "/docs/products/auth/anonymous" },
        { label: "JWT login", href: "/docs/products/auth/jwt" },
        { label: "SSR login", href: "/docs/products/auth/server-side-rendering" },
        { label: "Custom token login", href: "/docs/products/auth/custom-token" },
        { label: "Multi-factor authentication", href: "/docs/products/auth/mfa" },
        { label: "Auth status check", href: "/docs/products/auth/checking-auth-status" },
        { label: "User verification", href: "/docs/products/auth/verify-user" },
        { label: "Team invites", href: "/docs/products/auth/team-invites" },
        { label: "Multi-tenancy", href: "/docs/products/auth/multi-tenancy" },
      ],
    },
    {
      label: "References",
      items: [
        { label: "Account API", href: "/docs/references/cloud/client-web/account" },
        { label: "Users API", href: "/docs/references/cloud/server-nodejs/users" },
        { label: "Teams API", href: "/docs/references/cloud/client-web/teams" },
      ],
    },
  ],
};

const storage: SectionSidebarDef = {
  prefix: "/docs/products/storage",
  parent: { href: "/docs", label: "Storage" },
  navigation: [
    {
      label: "Getting started",
      items: [
        { label: "Overview", href: "/docs/products/storage" },
        { label: "Quick start", href: "/docs/products/storage/quick-start" },
      ],
    },
    {
      label: "Concepts",
      items: [
        { label: "Buckets", href: "/docs/products/storage/buckets" },
        { label: "Permissions", href: "/docs/products/storage/permissions" },
        { label: "File tokens", href: "/docs/products/storage/file-tokens" },
      ],
    },
    {
      label: "Journeys",
      items: [
        { label: "Upload and download", href: "/docs/products/storage/upload-download" },
        { label: "Image transformations", href: "/docs/products/storage/images" },
      ],
    },
    {
      label: "References",
      items: [{ label: "Storage API", href: "/docs/references/cloud/client-web/storage" }],
    },
  ],
};

const functions: SectionSidebarDef = {
  prefix: "/docs/products/functions",
  parent: { href: "/docs", label: "Functions" },
  navigation: [
    {
      label: "Getting started",
      items: [
        { label: "Overview", href: "/docs/products/functions" },
        { label: "Quick start", href: "/docs/products/functions/quick-start" },
      ],
    },
    {
      label: "Concepts",
      items: [
        { label: "Functions", href: "/docs/products/functions/functions" },
        { label: "Deployments", href: "/docs/products/functions/deployments" },
        { label: "Executions", href: "/docs/products/functions/executions" },
        { label: "Domains", href: "/docs/products/functions/domains" },
        { label: "Runtimes", href: "/docs/products/functions/runtimes" },
      ],
    },
    {
      label: "Journeys",
      items: [
        { label: "Templates", href: "/docs/products/functions/templates" },
        { label: "Develop", href: "/docs/products/functions/develop" },
        { label: "Develop locally", href: "/docs/products/functions/develop-locally" },
        { label: "Deploy from Git", href: "/docs/products/functions/deploy-from-git" },
        { label: "Deploy manually", href: "/docs/products/functions/deploy-manually" },
        { label: "Execute", href: "/docs/products/functions/execute" },
      ],
    },
    {
      label: "References",
      items: [{ label: "Functions API", href: "/docs/references/cloud/client-web/functions" }],
    },
  ],
};

const messaging: SectionSidebarDef = {
  prefix: "/docs/products/messaging",
  parent: { href: "/docs", label: "Messaging" },
  navigation: [
    { label: "Getting started", items: [{ label: "Overview", href: "/docs/products/messaging" }] },
    {
      label: "Concepts",
      items: [
        { label: "Providers", href: "/docs/products/messaging/providers" },
        { label: "Topics", href: "/docs/products/messaging/topics" },
        { label: "Targets", href: "/docs/products/messaging/targets" },
        { label: "Messages", href: "/docs/products/messaging/messages" },
      ],
    },
    {
      label: "Providers",
      items: [
        { label: "Push with APNs", href: "/docs/products/messaging/apns" },
        { label: "Push with FCM", href: "/docs/products/messaging/fcm" },
        { label: "Email with Mailgun", href: "/docs/products/messaging/mailgun" },
        { label: "Email with SendGrid", href: "/docs/products/messaging/sendgrid" },
        { label: "Email with SMTP", href: "/docs/products/messaging/smtp" },
        { label: "SMS with Twilio", href: "/docs/products/messaging/twilio" },
        { label: "SMS with MSG91", href: "/docs/products/messaging/msg91" },
        { label: "SMS with Telesign", href: "/docs/products/messaging/telesign" },
        { label: "SMS with Textmagic", href: "/docs/products/messaging/textmagic" },
        { label: "SMS with Vonage", href: "/docs/products/messaging/vonage" },
      ],
    },
    {
      label: "Journeys",
      items: [
        { label: "Send push notifications", href: "/docs/products/messaging/send-push-notifications" },
        { label: "Send email messages", href: "/docs/products/messaging/send-email-messages" },
        { label: "Send SMS messages", href: "/docs/products/messaging/send-sms-messages" },
      ],
    },
    {
      label: "References",
      items: [{ label: "API reference", href: "/docs/references/cloud/client-web/messaging" }],
    },
  ],
};

const sites: SectionSidebarDef = {
  prefix: "/docs/products/sites",
  parent: { href: "/docs", label: "Sites" },
  navigation: [
    {
      label: "Getting started",
      items: [
        { label: "Overview", href: "/docs/products/sites" },
        { label: "Quick start", href: "/docs/products/sites/quick-start" },
      ],
    },
    {
      label: "Concepts",
      items: [
        { label: "Rendering", href: "/docs/products/sites/rendering" },
        { label: "Deployments", href: "/docs/products/sites/deployments" },
        { label: "Previews", href: "/docs/products/sites/previews" },
        { label: "Instant rollbacks", href: "/docs/products/sites/instant-rollbacks" },
        { label: "Logs", href: "/docs/products/sites/logs" },
        { label: "Domains", href: "/docs/products/sites/domains" },
        { label: "Frameworks", href: "/docs/products/sites/frameworks" },
      ],
    },
    {
      label: "Journeys",
      items: [
        { label: "Templates", href: "/docs/products/sites/templates" },
        { label: "Develop", href: "/docs/products/sites/develop" },
        { label: "Deploy from Git", href: "/docs/products/sites/deploy-from-git" },
        { label: "Deploy from CLI", href: "/docs/products/sites/deploy-from-cli" },
        { label: "Deploy manually", href: "/docs/products/sites/deploy-manually" },
      ],
    },
    {
      label: "References",
      items: [{ label: "Sites API", href: "/docs/references/cloud/server-nodejs/sites" }],
    },
  ],
};

const avatars: SectionSidebarDef = {
  prefix: "/docs/products/avatars",
  parent: { href: "/docs", label: "Avatars" },
  navigation: [
    {
      label: "Getting started",
      items: [
        { label: "Overview", href: "/docs/products/avatars" },
        { label: "Quick start", href: "/docs/products/avatars/quick-start" },
      ],
    },
    {
      label: "Concepts",
      items: [
        { label: "User initials", href: "/docs/products/avatars/initials" },
        { label: "QR codes", href: "/docs/products/avatars/qr-codes" },
        { label: "Country flags", href: "/docs/products/avatars/flags" },
        { label: "Browser icons", href: "/docs/products/avatars/browsers" },
        { label: "Payment methods", href: "/docs/products/avatars/payment-methods" },
        { label: "Favicons", href: "/docs/products/avatars/favicons" },
        { label: "Screenshots", href: "/docs/products/avatars/screenshots", new: isNewUntil("28 Feb 2026") },
        { label: "Image proxy", href: "/docs/products/avatars/image-manipulation" },
      ],
    },
    {
      label: "References",
      items: [{ label: "Avatars API", href: "/docs/references/cloud/client-web/avatars" }],
    },
  ],
};

const network: SectionSidebarDef = {
  prefix: "/docs/products/network",
  parent: { href: "/docs", label: "Network" },
  navigation: [
    { label: "Getting started", items: [{ label: "Overview", href: "/docs/products/network" }] },
    {
      label: "Concepts",
      items: [
        { label: "Regions", href: "/docs/products/network/regions" },
        { label: "Edges", href: "/docs/products/network/edges" },
        { label: "CDN", href: "/docs/products/network/cdn" },
        { label: "Endpoints", href: "/docs/products/network/endpoints" },
      ],
    },
    {
      label: "Features",
      items: [
        { label: "DNS", href: "/docs/products/network/dns" },
        { label: "DDoS mitigation", href: "/docs/products/network/ddos" },
        { label: "TLS", href: "/docs/products/network/tls" },
        { label: "WAF", href: "/docs/products/network/waf" },
        { label: "Compression", href: "/docs/products/network/compression" },
        { label: "Caching", href: "/docs/products/network/caching" },
      ],
    },
  ],
};

const ai: SectionSidebarDef = {
  prefix: "/docs/products/ai",
  parent: { href: "/docs", label: "AI" },
  navigation: [
    { label: "Getting started", items: [{ label: "Overview", href: "/docs/products/ai" }] },
    {
      label: "Concepts",
      items: [
        { label: "Computer vision", href: "/docs/products/ai/computer-vision" },
        { label: "Natural language processing", href: "/docs/products/ai/natural-language" },
        { label: "Audio processing", href: "/docs/products/ai/audio-processing" },
      ],
    },
    {
      label: "Computer vision",
      items: [
        { label: "Image classification", href: "/docs/products/ai/tutorials/image-classification" },
        { label: "Object detection", href: "/docs/products/ai/tutorials/object-detection" },
      ],
    },
    {
      label: "Natural language processing",
      items: [
        { label: "Text generation", href: "/docs/products/ai/tutorials/text-generation" },
        { label: "Language translation", href: "/docs/products/ai/tutorials/language-translation" },
      ],
    },
    {
      label: "Audio processing",
      items: [
        { label: "Speech recognition", href: "/docs/products/ai/tutorials/speech-recognition" },
        { label: "Text to speech", href: "/docs/products/ai/tutorials/text-to-speech" },
        { label: "Music generation", href: "/docs/products/ai/tutorials/music-generation" },
      ],
    },
    {
      label: "Integrations",
      items: [
        { label: "Perplexity", href: "/docs/products/ai/integrations/perplexity" },
        { label: "Replicate", href: "/docs/products/ai/integrations/replicate" },
        { label: "OpenAI", href: "/docs/products/ai/integrations/openai" },
        { label: "Pinecone", href: "/docs/products/ai/integrations/pinecone" },
        { label: "ElevenLabs", href: "/docs/products/ai/integrations/elevenlabs" },
        { label: "LangChain", href: "/docs/products/ai/integrations/langchain" },
        { label: "Anyscale", href: "/docs/products/ai/integrations/anyscale" },
        { label: "LMNT", href: "/docs/products/ai/integrations/lmnt" },
        { label: "Together AI", href: "/docs/products/ai/integrations/togetherai" },
        { label: "fal.ai", href: "/docs/products/ai/integrations/fal-ai" },
      ],
    },
  ],
};

const realtime: SectionSidebarDef = {
  prefix: "/docs/apis/realtime",
  parent: { href: "/docs", label: "Realtime" },
  navigation: [
    {
      label: "Getting started",
      items: [
        { label: "Overview", href: "/docs/apis/realtime" },
        { label: "Authentication", href: "/docs/apis/realtime/authentication" },
        { label: "Subscribe", href: "/docs/apis/realtime/subscribe" },
      ],
    },
    {
      label: "Concepts",
      items: [
        { label: "Channels", href: "/docs/apis/realtime/channels" },
        { label: "Queries", href: "/docs/apis/realtime/queries" },
        { label: "Payload", href: "/docs/apis/realtime/payload" },
      ],
    },
    {
      label: "Configuration",
      items: [{ label: "Custom endpoint", href: "/docs/apis/realtime/custom-endpoint" }],
    },
  ],
};

const commandLine: SectionSidebarDef = {
  prefix: "/docs/tooling/command-line",
  parent: { href: "/docs", label: "CLI" },
  navigation: [
    {
      label: "Guides",
      items: [
        { label: "Installation", href: "/docs/tooling/command-line/installation" },
        { label: "Commands", href: "/docs/tooling/command-line/commands" },
        { label: "Non interactive", href: "/docs/tooling/command-line/non-interactive" },
        { label: "Generate SDK", href: "/docs/tooling/command-line/generate" },
      ],
    },
    {
      label: "Deployments",
      items: [
        { label: "Tables", href: "/docs/tooling/command-line/tables" },
        { label: "Functions", href: "/docs/tooling/command-line/functions" },
        { label: "Sites", href: "/docs/tooling/command-line/sites" },
        { label: "Teams", href: "/docs/tooling/command-line/teams" },
        { label: "Topics", href: "/docs/tooling/command-line/topics" },
        { label: "Buckets", href: "/docs/tooling/command-line/buckets" },
      ],
    },
  ],
};

const mcp: SectionSidebarDef = {
  prefix: "/docs/tooling/mcp",
  parent: { href: "/docs", label: "MCP Server" },
  navigation: [
    { label: "Getting Started", items: [{ label: "Overview", href: "/docs/tooling/mcp" }] },
    {
      label: "Servers",
      items: [
        { label: "MCP for API", href: "/docs/tooling/mcp/api" },
        { label: "MCP for Docs", href: "/docs/tooling/mcp/docs", new: isNewUntil("31 Oct 2025") },
      ],
    },
    {
      label: "Integrations",
      items: [
        { label: "Claude Desktop", href: "/docs/tooling/mcp/claude-desktop" },
        { label: "Claude Code", href: "/docs/tooling/mcp/claude-code" },
        { label: "Zenflow", href: "/docs/tooling/mcp/zenflow" },
        { label: "Cursor", href: "/docs/tooling/mcp/cursor" },
        { label: "Windsurf Editor", href: "/docs/tooling/mcp/windsurf" },
        { label: "VS Code", href: "/docs/tooling/mcp/vscode" },
        { label: "OpenCode", href: "/docs/tooling/mcp/opencode" },
        { label: "Google Antigravity", href: "/docs/tooling/mcp/antigravity" },
      ],
    },
  ],
};

const migrations: SectionSidebarDef = {
  prefix: "/docs/advanced/migrations",
  parent: { href: "/docs", label: "Migrations" },
  navigation: [
    { label: "Getting started", items: [{ label: "Overview", href: "/docs/advanced/migrations" }] },
    {
      label: "Guides",
      items: [
        { label: "From Firebase", href: "/docs/advanced/migrations/firebase" },
        { label: "From Supabase", href: "/docs/advanced/migrations/supabase" },
        { label: "From Nhost", href: "/docs/advanced/migrations/nhost" },
        { label: "From Cloud", href: "/docs/advanced/migrations/cloud" },
        { label: "From self-hosted", href: "/docs/advanced/migrations/self-hosted" },
      ],
    },
  ],
};

const security: SectionSidebarDef = {
  prefix: "/docs/advanced/security",
  parent: { href: "/docs", label: "Security" },
  navigation: [
    { label: "Getting started", items: [{ label: "Overview", href: "/docs/advanced/security" }] },
    {
      label: "Compliances",
      items: [
        { label: "GDPR", href: "/docs/advanced/security/gdpr" },
        { label: "PCI", href: "/docs/advanced/security/pci" },
        { label: "SOC 2", href: "/docs/advanced/security/soc2" },
        { label: "HIPAA", href: "/docs/advanced/security/hipaa" },
        { label: "CCPA", href: "/docs/advanced/security/ccpa" },
      ],
    },
    {
      label: "Measures",
      items: [
        { label: "Authentication", href: "/docs/advanced/security/authentication" },
        { label: "Encryption", href: "/docs/advanced/security/encryption" },
        { label: "Multi-Factor authentication", href: "/docs/advanced/security/mfa" },
        { label: "HTTPS", href: "/docs/advanced/security/https" },
        { label: "TLS", href: "/docs/advanced/security/tls" },
        { label: "Backups", href: "/docs/advanced/security/backups" },
        { label: "Penetration tests", href: "/docs/advanced/security/penetration-tests" },
        { label: "Audit logs", href: "/docs/advanced/security/audit-logs" },
        { label: "Abuse protection", href: "/docs/advanced/security/abuse-protection" },
      ],
    },
  ],
};

const integration: SectionSidebarDef = {
  prefix: "/docs/advanced/integration",
  parent: { href: "/docs", label: "Integration" },
  navigation: [
    { label: "Getting started", items: [{ label: "Overview", href: "/docs/advanced/integration" }] },
    { label: "Guides", items: [] },
  ],
};

const selfHosting: SectionSidebarDef = {
  prefix: "/docs/advanced/self-hosting",
  parent: { href: "/docs", label: "Self-hosting" },
  navigation: [
    {
      label: "Getting started",
      items: [
        { label: "Overview", href: "/docs/advanced/self-hosting/" },
        { label: "Installation", href: "/docs/advanced/self-hosting/installation" },
      ],
    },
    {
      label: "Platform deployment",
      items: [
        { label: "AWS", href: "/docs/advanced/self-hosting/platforms/aws" },
        { label: "DigitalOcean", href: "/docs/advanced/self-hosting/platforms/digitalocean" },
        { label: "Google Cloud", href: "/docs/advanced/self-hosting/platforms/google-cloud" },
        { label: "Azure", href: "/docs/advanced/self-hosting/platforms/azure" },
        { label: "Coolify", href: "/docs/advanced/self-hosting/platforms/coolify" },
      ],
    },
    {
      label: "Configuration",
      items: [
        {
          label: "Environment variables",
          href: "/docs/advanced/self-hosting/configuration/environment-variables",
        },
        { label: "Email delivery", href: "/docs/advanced/self-hosting/configuration/email" },
        { label: "SMS delivery", href: "/docs/advanced/self-hosting/configuration/sms" },
        { label: "Functions", href: "/docs/advanced/self-hosting/configuration/functions" },
        { label: "Sites", href: "/docs/advanced/self-hosting/configuration/sites" },
        { label: "Storage", href: "/docs/advanced/self-hosting/configuration/storage" },
        { label: "TLS certificates", href: "/docs/advanced/self-hosting/configuration/tls-certificates" },
        { label: "Version control", href: "/docs/advanced/self-hosting/configuration/version-control" },
      ],
    },
    {
      label: "Production",
      items: [
        { label: "Preparation", href: "/docs/advanced/self-hosting/production" },
        { label: "Security", href: "/docs/advanced/self-hosting/production/security" },
        { label: "Scaling", href: "/docs/advanced/self-hosting/production/scaling" },
        { label: "Rate limits", href: "/docs/advanced/self-hosting/production/rate-limits" },
        { label: "Email delivery", href: "/docs/advanced/self-hosting/production/emails" },
        { label: "Error monitoring", href: "/docs/advanced/self-hosting/production/errors" },
        { label: "Backups", href: "/docs/advanced/self-hosting/production/backups" },
        { label: "Updates and migrations", href: "/docs/advanced/self-hosting/production/updates" },
        { label: "Debugging", href: "/docs/advanced/self-hosting/production/debugging" },
      ],
    },
  ],
};

const platform: SectionSidebarDef = {
  prefix: "/docs/advanced/platform",
  parent: { href: "/docs", label: "Platform" },
  navigation: [
    {
      label: "Platform",
      items: [
        { label: "Overview", href: "/docs/advanced/platform" },
        { label: "Shortcuts", href: "/docs/advanced/platform/shortcuts" },
        { label: "Roles", href: "/docs/advanced/platform/roles" },
      ],
    },
    {
      label: "Integration",
      items: [
        { label: "Events", href: "/docs/advanced/platform/events" },
        { label: "Webhooks", href: "/docs/advanced/platform/webhooks" },
        { label: "Response codes", href: "/docs/advanced/platform/response-codes" },
        { label: "Error handling", href: "/docs/advanced/platform/error-handling", new: isNewUntil("10 Mar 2025") },
      ],
    },
    {
      label: "Access control",
      items: [
        { label: "Permissions", href: "/docs/advanced/platform/permissions" },
        { label: "Rate limits", href: "/docs/advanced/platform/rate-limits" },
        { label: "API keys", href: "/docs/advanced/platform/api-keys" },
        { label: "Dev keys", href: "/docs/advanced/platform/dev-keys" },
      ],
    },
    {
      label: "Plans",
      items: [
        { label: "Billing", href: "/docs/advanced/platform/billing" },
        { label: "Free", href: "/docs/advanced/platform/free" },
        { label: "Pro", href: "/docs/advanced/platform/pro" },
        { label: "Enterprise", href: "/docs/advanced/platform/enterprise" },
        { label: "Open source", href: "/docs/advanced/platform/oss" },
      ],
    },
    {
      label: "Add ons",
      items: [
        { label: "Compute", href: "/docs/advanced/platform/compute", new: isNewUntil("28 Feb 2025") },
        { label: "Phone OTP", href: "/docs/advanced/platform/phone-otp", new: isNewUntil("28 Feb 2025") },
        {
          label: "Image Transformations",
          href: "/docs/advanced/platform/image-transformations",
          new: isNewUntil("15 Apr 2025"),
        },
        {
          label: "Database Reads and Writes",
          href: "/docs/advanced/platform/database-reads-and-writes",
          new: isNewUntil("30 Apr 2025"),
        },
      ],
    },
    {
      label: "Configuration",
      items: [
        { label: "Custom domains", href: "/docs/advanced/platform/custom-domains" },
        { label: "Message templates", href: "/docs/advanced/platform/message-templates" },
      ],
    },
    {
      label: "Policies",
      items: [
        { label: "Release", href: "/docs/advanced/platform/release-policy" },
        { label: "Fair use", href: "/docs/advanced/platform/fair-use-policy", new: isNewUntil("28 Feb 2025") },
        { label: "Abuse", href: "/docs/advanced/platform/abuse", new: isNewUntil("28 Feb 2025") },
        { label: "Support SLA", href: "/docs/advanced/platform/support-sla", new: isNewUntil("31 July 2025") },
        { label: "Uptime SLA", href: "/docs/advanced/platform/uptime-sla", new: isNewUntil("31 July 2025") },
        { label: "Refund", href: "/docs/advanced/platform/refund-policy", new: isNewUntil("31 July 2025") },
      ],
    },
  ],
};

const databases: SectionSidebarDef = {
  prefix: "/docs/products/databases",
  parent: { href: "/docs", label: "Databases" },
  navigation: [
    {
      label: "Getting started",
      items: [
        { label: "Overview", href: "/docs/products/databases" },
        { label: "Quick start", href: "/docs/products/databases/quick-start" },
      ],
    },
    {
      label: "Concepts",
      items: [
        { label: "Databases", href: "/docs/products/databases/databases" },
        { label: "Tables", href: "/docs/products/databases/tables" },
        { label: "Rows", href: "/docs/products/databases/rows" },
        { label: "Permissions", href: "/docs/products/databases/permissions" },
        { label: "Relationships", href: "/docs/products/databases/relationships" },
        { label: "Queries", href: "/docs/products/databases/queries" },
        { label: "Order", href: "/docs/products/databases/order" },
        { label: "Operators", href: "/docs/products/databases/operators", new: isNewUntil("31 Dec 2025") },
        { label: "Geo queries", href: "/docs/products/databases/geo-queries", new: isNewUntil("30 Sep 2025") },
        { label: "Backups", href: "/docs/products/databases/backups" },
      ],
    },
    {
      label: "Journeys",
      items: [
        { label: "Pagination", href: "/docs/products/databases/pagination" },
        { label: "Transactions", href: "/docs/products/databases/transactions", new: isNewUntil("31 Oct 2025") },
        { label: "Type generation", href: "/docs/products/databases/type-generation", new: isNewUntil("31 Jul 2025") },
        { label: "Offline sync", href: "/docs/products/databases/offline" },
        { label: "Bulk operations", href: "/docs/products/databases/bulk-operations", new: isNewUntil("31 Jul 2025") },
        {
          label: "Atomic numeric operations",
          href: "/docs/products/databases/atomic-numeric-operations",
          new: isNewUntil("31 Jul 2025"),
        },
        { label: "CSV imports", href: "/docs/products/databases/csv-imports", new: isNewUntil("31 Jul 2025") },
        { label: "CSV exports", href: "/docs/products/databases/csv-exports", new: isNewUntil("28 Feb 2026") },
        { label: "AI suggestions", href: "/docs/products/databases/ai-suggestions", new: isNewUntil("31 Dec 2025") },
        { label: "Timestamp overrides", href: "/docs/products/databases/timestamp-overrides" },
      ],
    },
    {
      label: "References",
      items: [
        {
          label: "TablesDB API",
          href: "/docs/references/cloud/client-web/tablesDB",
          new: isNewUntil("31 Oct 2025"),
        },
        { label: "Legacy API", href: "/docs/references/cloud/client-web/databases" },
      ],
    },
  ],
};

/** Longest-prefix match first */
export const SECTION_SIDEBAR_DEFS: SectionSidebarDef[] = [
  databases,
  auth,
  storage,
  functions,
  messaging,
  sites,
  avatars,
  network,
  ai,
  realtime,
  commandLine,
  mcp,
  platform,
  migrations,
  security,
  selfHosting,
  integration,
].sort((a, b) => b.prefix.length - a.prefix.length);
