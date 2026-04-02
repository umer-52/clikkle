import type { LucideIcon, LucideProps } from "lucide-react";
import {
  ArrowRight,
  Blocks,
  BookOpenText,
  Bot,
  ChartNoAxesCombined,
  CircleHelp,
  CloudCog,
  DatabaseZap,
  Earth,
  Fingerprint,
  LayoutDashboard,
  LifeBuoy,
  MessagesSquare,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow,
  KeyRound,
  Database,
  HardDrive,
  Braces,
  MessageCircleHeart,
  Activity,
  Globe,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type FeatureCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Metric = {
  value: string;
  label: string;
};

export type PricingTier = {
  name: string;
  price: string;
  description: string;
  featured?: boolean;
  highlights: string[];
};

export const navigation: NavItem[] = [
  { label: "Products", href: "/products" },
  { label: "Docs", href: "/docs" },
  { label: "Pricing", href: "/pricing" },
  { label: "Customers", href: "/customers" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "Contact", href: "/contact-us" },
];

export const homeMetrics: Metric[] = [
  { value: "1.2M+", label: "deployments orchestrated by Clikkle teams" },
  { value: "48ms", label: "median edge response for production traffic" },
  { value: "99.98%", label: "uptime tracked across the last 12 months" },
];

export const homeFeatureCards: FeatureCard[] = [
  {
    title: "Backend that scales without the ceremony",
    description:
      "Databases, auth, queues, storage, and events that feel instantly familiar to product teams.",
    icon: DatabaseZap,
  },
  {
    title: "Agents and workflows in one control plane",
    description:
      "Launch automations, background jobs, and AI-assisted flows with observability baked in.",
    icon: Bot,
  },
  {
    title: "Global infrastructure with product-level guardrails",
    description:
      "Roll out across regions, tune permissions, and monitor capacity without leaving the dashboard.",
    icon: Earth,
  },
];

export const platformFeatureCards: FeatureCard[] = [
  {
    title: "Launch apps from one command center",
    description:
      "Provision auth, data, realtime channels, and deployments from a single shared workspace.",
    icon: LayoutDashboard,
  },
  {
    title: "Compose with reusable primitives",
    description:
      "Buttons, cards, and product modules stay consistent across every page and campaign.",
    icon: Blocks,
  },
  {
    title: "Security that stays visible",
    description:
      "Audit trails, scoped permissions, and managed compliance are surfaced right in the product narrative.",
    icon: ShieldCheck,
  },
  {
    title: "Developer ergonomics first",
    description:
      "Clear docs, starter kits, and fast local onboarding remove setup drag for engineering teams.",
    icon: BookOpenText,
  },
];

export const productCards: FeatureCard[] = [
  {
    title: "Launchpad Hosting",
    description:
      "Deploy marketing sites, dashboards, and fullstack apps with edge caching and zero-config previews.",
    icon: Rocket,
  },
  {
    title: "Pulse Data",
    description:
      "Schema-aware collections, relational views, and realtime fanout without managing database plumbing.",
    icon: CloudCog,
  },
  {
    title: "Orbit Workflows",
    description:
      "Background jobs, AI steps, retries, and webhook automations designed for product teams.",
    icon: Workflow,
  },
  {
    title: "Guardian Auth",
    description:
      "Email, passkeys, social logins, roles, and token controls with sensible defaults.",
    icon: Fingerprint,
  },
];

export const testimonialCards = [
  {
    quote:
      "Clikkle gave our team the same confidence as a mature platform with a much faster setup story.",
    name: "Mina Park",
    role: "VP Product, Driftline",
  },
  {
    quote:
      "We moved from stitched-together infra to one visual control plane and our launch cycle shrank by weeks.",
    name: "Adrian Cole",
    role: "Founding Engineer, Northstar AI",
  },
  {
    quote:
      "The docs feel deliberate, the dashboard feels premium, and the product story finally matches the technology.",
    name: "Talia Morgan",
    role: "Design Director, LayerHQ",
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$0",
    description: "A polished sandbox for side projects and early experiments.",
    highlights: [
      "Unlimited local development",
      "3 projects",
      "Shared analytics and logs",
      "Community support",
    ],
  },
  {
    name: "Growth",
    price: "$39",
    description: "For startups shipping production features and internal tools.",
    featured: true,
    highlights: [
      "20 production projects",
      "Custom domains and environments",
      "Advanced permissions and audit history",
      "Priority email support",
    ],
  },
  {
    name: "Scale",
    price: "Custom",
    description: "For enterprises standardizing their product stack around Clikkle.",
    highlights: [
      "Dedicated infrastructure options",
      "Regional data placement",
      "SAML, SCIM, and compliance reviews",
      "Architect-led onboarding",
    ],
  },
];

export const docGroups = [
  {
    title: "Get Started",
    items: ["Quickstart", "Project structure", "Environment setup", "Deployment"],
  },
  {
    title: "Core Products",
    items: ["Hosting", "Auth", "Database", "Storage", "Workflows"],
  },
  {
    title: "Advanced",
    items: ["Observability", "Multi-region", "Access policies", "Automation recipes"],
  },
];

export const teamValues: FeatureCard[] = [
  {
    title: "Opinionated quality",
    description:
      "We sweat hierarchy, motion, and details so the platform feels product-grade from first load.",
    icon: Sparkles,
  },
  {
    title: "Operational clarity",
    description:
      "Every feature should make teams faster without hiding what is happening under the hood.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Support that unblocks",
    description:
      "Docs, migration paths, and human help are designed to reduce anxiety for teams shipping under pressure.",
    icon: LifeBuoy,
  },
];

export const contactOptions: FeatureCard[] = [
  {
    title: "Sales",
    description: "Talk through migrations, procurement, or deployment planning.",
    icon: MessagesSquare,
  },
  {
    title: "Support",
    description: "Get unstuck on architecture, rollout risk, or technical blockers.",
    icon: CircleHelp,
  },
  {
    title: "Partnerships",
    description: "Explore co-marketing, agency collaborations, or platform integrations.",
    icon: ServerCog,
  },
];

export const footerColumns = [
  {
    title: "Platform",
    links: [
      { label: "Products", href: "/products" },
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Docs", href: "/docs" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Status", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Changelog", href: "#" },
      { label: "Guides", href: "#" },
      { label: "Community", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
];

export const pageIntro = {
  products: {
    eyebrow: "Products",
    title: "A product stack built to feel cohesive from day one.",
    description:
      "Clikkle packages hosting, auth, data, workflows, and observability into one clear interface so teams can move quickly without duct-taping vendors together.",
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Pricing that grows with product complexity, not chaos.",
    description:
      "Start free, ship confidently, and unlock the controls enterprise teams care about only when you need them.",
  },
  features: {
    eyebrow: "Features",
    title: "A design-forward platform with engineering depth behind it.",
    description:
      "Every section is tuned to explain capability quickly: what it does, why it matters, and how teams adopt it without friction.",
  },
  docs: {
    eyebrow: "Documentation",
    title: "Documentation designed to reduce friction on the first read.",
    description:
      "Structured categories, fast scanning, and practical getting-started paths make Clikkle easier to adopt for product and platform teams alike.",
  },
  about: {
    eyebrow: "About",
    title: "We build infrastructure that feels understandable.",
    description:
      "Clikkle exists to make backend, hosting, and workflow tooling feel deliberate, approachable, and fast to launch with.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Bring us the messy migration, the launch deadline, or the ambitious roadmap.",
    description:
      "We’ll help you map the right rollout path, answer technical questions, and keep the implementation grounded.",
  },
};

export const arrowIcon = ArrowRight;
export type IconProps = LucideProps;

export type Platform = {
  name: string;
  icon: string;
  href: string;
  primary: string;
  secondary?: string;
};

export const platforms: Platform[] = [
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white", href: "/docs/quick-starts/nextjs", primary: "#fff" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/53C1DE", href: "/docs/quick-starts/react", primary: "#53C1DE" },
  { name: "Vue", icon: "https://cdn.simpleicons.org/vuedotjs/4FC08D", href: "/docs/quick-starts/vue", primary: "#4FC08D" },
  { name: "Angular", icon: "https://cdn.simpleicons.org/angular/DD0031", href: "/docs/quick-starts/angular", primary: "#DD0031" },
  { name: "Svelte", icon: "https://cdn.simpleicons.org/svelte/FF3E00", href: "/docs/quick-starts/sveltekit", primary: "#FF3E00" },
  { name: "TanStack Start", icon: "https://cdn.simpleicons.org/reactquery/FF4154", href: "/docs/quick-starts/tanstack", primary: "#fff" },
  { name: "React Native", icon: "https://cdn.simpleicons.org/react/61DAFB", href: "/docs/quick-starts/react-native", primary: "#61DAFB" },
  { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter/00569E", href: "/docs/quick-starts/flutter", primary: "#00569E", secondary: "#47C5FB" },
  { name: "iOS", icon: "https://cdn.simpleicons.org/apple/white", href: "/docs/quick-starts/apple", primary: "#fff" },
  { name: "Android", icon: "https://cdn.simpleicons.org/android/3DDC84", href: "/docs/quick-starts/android", primary: "#3DDC84" },
  { name: "Kotlin", icon: "https://cdn.simpleicons.org/kotlin/6D74E1", href: "/docs/quick-starts/kotlin", primary: "#6D74E1", secondary: "#E1725C" },
  { name: "Swift", icon: "https://cdn.simpleicons.org/swift/F88A36", href: "/docs/quick-starts/swift", primary: "#F88A36", secondary: "#FD2020" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/8CC84B", href: "/docs/quick-starts/node", primary: "#8CC84B" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/F9C600", href: "/docs/quick-starts/python", primary: "#F9C600", secondary: "#327EBD" },
  { name: "PHP", icon: "https://cdn.simpleicons.org/php/8892BF", href: "/docs/quick-starts/php", primary: "#8892BF" },
  { name: "Ruby", icon: "https://cdn.simpleicons.org/ruby/791C12", href: "/docs/quick-starts/ruby", primary: "#791C12", secondary: "#9E120B" },
  { name: ".NET", icon: "https://cdn.simpleicons.org/dotnet/512BD4", href: "/docs/quick-starts/dotnet", primary: "#512BD4" },
  { name: "Go", icon: "https://cdn.simpleicons.org/go/00ADD8", href: "/docs/quick-starts/go", primary: "#00ADD8" },
  { name: "Deno", icon: "https://cdn.simpleicons.org/deno/white", href: "/docs/quick-starts/deno", primary: "#fff" },
  { name: "Dart", icon: "https://cdn.simpleicons.org/dart/01579B", href: "/docs/quick-starts/dart", primary: "#01579B", secondary: "#29B6F6" },
];

export type ClikkleProduct = {
  title: string;
  description: string;
  icon: any;
  href: string;
};

export const clikkleProducts: ClikkleProduct[] = [
  { title: "Auth", description: "Secure login with multi-factor auth", icon: KeyRound, href: "/products/auth" },
  { title: "Databases", description: "Scalable and robust databases", icon: Database, href: "/products/databases" },
  { title: "Storage", description: "Advanced compression and encryption", icon: HardDrive, href: "/products/storage" },
  { title: "Functions", description: "Deploy & scale serverless functions", icon: Braces, href: "/products/functions" },
  { title: "Messaging", description: "Set up a full-functioning messaging service", icon: MessageCircleHeart, href: "/products/messaging" },
  { title: "Realtime", description: "Subscribe and react to any event", icon: Activity, href: "/products/realtime" },
  { title: "Sites", description: "The open-source Vercel alternative", icon: Globe, href: "/products/sites" },
];

export const megaMenuComparisons = [
  { label: "Clikkle vs. Supabase", href: "/compare/supabase" },
  { label: "Clikkle vs. Firebase", href: "/compare/firebase" },
  { label: "Clikkle vs. Vercel", href: "/compare/vercel" },
];

export const clikkleStats = [
  { value: "55.2K", label: "GitHub Stars" },
  { value: "100K+", label: "Developers" },
  { value: "1M+", label: "API Requests/day" },
  { value: "99.9%", label: "Uptime SLA" },
];

export type CodeSample = {
  language: string;
  code: string;
};

export const codeSamples: Record<string, CodeSample> = {
  javascript: {
    language: "JavaScript",
    code: `import { Client, Account, ID } from "clikkle";

const client = new Client()
    .setEndpoint('https://cloud.clikkle.com/v1')
    .setProject('<PROJECT_ID>');

const account = new Account(client);

const user = await account.create(
    ID.unique(), 
    'email@example.com', 
    'password'
);`,
  },
  python: {
    language: "Python",
    code: `from clikkle.client import Client
from clikkle.services.users import Users

client = Client()
client.set_endpoint('https://cloud.clikkle.com/v1')
client.set_project('<PROJECT_ID>')
client.set_key('<API_KEY>')

users = Users(client)

result = users.create(
    user_id='unique()',
    email='email@example.com',
    password='password'
)`,
  },
  php: {
    language: "PHP",
    code: `<?php
use Clikkle\\Client;
use Clikkle\\Services\\Account;

$client = new Client();
$client
    ->setEndpoint('https://cloud.clikkle.com/v1')
    ->setProject('<PROJECT_ID>');

$account = new Account($client);

$result = $account->create(
    'unique()',
    'email@example.com',
    'password'
);`,
  },
  dart: {
    language: "Dart",
    code: `import 'package:clikkle/clikkle.dart';

void main() async {
    Client client = Client()
        .setEndpoint('https://cloud.clikkle.com/v1')
        .setProject('<PROJECT_ID>');

    Account account = Account(client);

    final user = await account.create(
        userId: ID.unique(),
        email: 'email@example.com',
        password: 'password',
    );
}`,
  },
  swift: {
    language: "Swift",
    code: `import Clikkle

let client = Client()
    .setEndpoint("https://cloud.clikkle.com/v1")
    .setProject("<PROJECT_ID>")

let account = Account(client)

let user = try await account.create(
    userId: ID.unique(),
    email: "email@example.com",
    password: "password"
)`,
  },
  kotlin: {
    language: "Kotlin",
    code: `import io.clikkle.Client
import io.clikkle.services.Account

val client = Client(context)
    .setEndpoint("https://cloud.clikkle.com/v1")
    .setProject("<PROJECT_ID>")

val account = Account(client)

val user = account.create(
    userId = ID.unique(),
    email = "email@example.com",
    password = "password"
)`,
  },
};

export const pageMetadata = {
  home: {
    title: "Clikkle - Built for the first solocorn",
    description: "Clikkle is an open-source, developer infrastructure platform with Auth, Database, Storage, Functions, Realtime, SMS, Email, Push, and Hosting.",
  },
};


