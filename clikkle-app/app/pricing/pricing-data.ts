export type LinkRow = { text: string; url: string };
export type CellValue = string | boolean | LinkRow;

export type ComparisonRow = {
  title: string;
  info?: string;
  free: CellValue;
  pro: CellValue;
  enterprise: CellValue;
};

export type ComparisonTable = {
  title: string;
  rows: ComparisonRow[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const comparisonTables: ComparisonTable[] = [
  {
    title: 'Resources',
    rows: [
      { title: 'API bandwidth', free: '5GB / month', pro: '2TB / month', enterprise: 'Custom' },
      { title: 'Additional API bandwidth', free: '-', pro: '$15 per 100GB / month', enterprise: 'Custom' },
      { title: 'Storage', free: '2GB', pro: '150GB', enterprise: 'Custom' },
      { title: 'Additional storage', free: '-', pro: '$2.8 per 100GB', enterprise: 'Custom' },
      { title: 'Executions', free: '750K / month', pro: '3.5M / month', enterprise: 'Custom' },
      { title: 'Execution logs', free: '100', pro: '1000', enterprise: 'Custom', info: 'Number of execution logs retained per function/site' },
    ]
  },
  {
    title: 'Platform',
    rows: [
      { title: 'Number of projects', free: '2 (Shared resources)', pro: '1 (Dedicated resources)', enterprise: 'Custom' },
      { title: 'Additional projects', free: '-', pro: '$15', enterprise: 'Custom' },
      { title: 'Organization members', free: '1', pro: 'Unlimited', enterprise: 'Unlimited' },
      { title: 'Connected websites and apps', free: '3 per project', pro: 'Unlimited', enterprise: 'Unlimited' },
      { title: 'No Clikkle branding on emails', free: '-', pro: true, enterprise: true },
      { title: 'Custom SMTP', free: '-', pro: true, enterprise: true },
      { title: 'Webhooks', free: '2 per project', pro: 'Unlimited', enterprise: 'Unlimited' },
      { title: 'Logs retention', free: '1 hour', pro: '7 days', enterprise: 'Custom' },
      { title: 'Budget caps and alerts', free: 'Not needed', pro: true, enterprise: true },
    ]
  },
  {
    title: 'Auth',
    rows: [
      { title: 'Users', free: '75,000 monthly active users', pro: '200,000 monthly active users', enterprise: 'Custom' },
      { title: 'Additional users', free: '-', pro: '$3 per 1,000 users', enterprise: 'Custom' },
      { title: 'Phone OTP', free: '-', pro: { text: 'View rates', url: '/docs/advanced/platform/phone-otp#rates' }, enterprise: 'Custom' },
      { title: 'Teams', free: '100 per project', pro: 'Unlimited', enterprise: 'Unlimited' },
      { title: 'SSO', free: '-', pro: '-', enterprise: 'Coming soon' },
    ]
  },
  {
    title: 'Databases',
    rows: [
      { title: 'Databases', free: '1 per project', pro: 'Unlimited', enterprise: 'Unlimited' },
      { title: 'Documents', free: 'Unlimited', pro: 'Unlimited', enterprise: 'Unlimited' },
      { title: 'Reads', free: '500K / month', pro: '1750K / month', enterprise: 'Custom' },
      { title: 'Writes', free: '250K / month', pro: '750K / month', enterprise: 'Custom' },
      { title: 'Additional reads', free: '-', pro: '$0.060 per 100k reads', enterprise: 'Custom' },
      { title: 'Additional writes', free: '-', pro: '$0.10 per 100k writes', enterprise: 'Custom' },
      { title: 'Backups', free: '-', pro: 'Daily', enterprise: 'Custom' },
      { title: 'Backups retention', free: '-', pro: '7 days retention', enterprise: 'Custom' },
      { title: 'Encrypted attributes support', free: '-', pro: 'True', enterprise: 'True' },
      { title: 'Bulk API documents', free: '100', pro: '1000', enterprise: 'Custom' },
      { title: 'Dedicated databases', free: '-', pro: 'Coming soon', enterprise: 'Coming soon' },
    ]
  },
  {
    title: 'Storage',
    rows: [
      { title: 'Buckets', free: '1 per project', pro: 'Unlimited', enterprise: 'Unlimited' },
      { title: 'File size limit', free: '50MB', pro: '5GB', enterprise: 'Custom' },
      { title: 'Image transformations', free: '-', pro: '100 origin images / month', enterprise: 'Custom' },
      { title: 'Additional transformations', free: '-', pro: '$5 per 1000 origin images', enterprise: 'Custom' },
    ]
  },
  {
    title: 'Compute',
    rows: [
      { title: 'Functions', free: '2 per project', pro: 'Unlimited', enterprise: 'Unlimited' },
      { title: 'Sites', free: 'Unlimited', pro: 'Unlimited', enterprise: 'Unlimited' },
      { title: 'Executions', free: '750K / month', pro: '3.5M / month', enterprise: 'Custom' },
      { title: 'GB-hours', free: '100 GB-hour / month', pro: '1,000 GB-hour / month', enterprise: 'Custom' },
      { title: 'Additional GB-hours', free: '-', pro: '$0.06 per GB-hour', enterprise: 'Custom' },
      { title: 'Compute options', free: '0.5 CPUs - 512MB RAM', pro: 'Up to 4 CPUs - 4GB RAM', enterprise: 'Custom' },
      { title: 'Additional executions', free: '-', pro: '$2 per 1m', enterprise: 'Custom' },
      { title: 'Express builds', free: '-', pro: true, enterprise: true, info: 'Dedicated priority queues for build jobs' },
    ]
  },
  {
    title: 'Realtime',
    rows: [
      { title: 'Concurrent connections', free: '250', pro: '500', enterprise: 'Custom' },
      { title: 'Additional connections', free: '-', pro: '$5 per 1,000', enterprise: 'Custom' },
      { title: 'Messages', free: '2M', pro: '6M', enterprise: 'Custom' },
      { title: 'Additional messages', free: '-', pro: '$2.50 per 1m', enterprise: 'Custom' },
      { title: 'Max message size', free: '256 KB', pro: '3 MB', enterprise: 'Custom' },
    ]
  },
  {
    title: 'Messaging',
    rows: [
      { title: 'Messages', free: '1000 / month', pro: 'Unlimited', enterprise: 'Unlimited' },
      { title: 'Topics', free: '1', pro: 'Unlimited', enterprise: 'Unlimited' },
      { title: 'Targets', free: true, pro: true, enterprise: true },
      { title: 'In app notifications', free: true, pro: true, enterprise: true },
      { title: 'Chat', free: true, pro: true, enterprise: true },
      { title: 'Push notifications', free: true, pro: true, enterprise: true },
      { title: 'Email', free: true, pro: true, enterprise: true },
      { title: 'SMS', free: true, pro: true, enterprise: true },
      { title: 'Discord', free: true, pro: true, enterprise: true },
      { title: 'WhatsApp', free: '-', pro: true, enterprise: true },
      { title: 'Slack', free: '-', pro: true, enterprise: true },
      { title: 'Analytics', free: '-', pro: 'Coming soon', enterprise: 'Coming soon' },
    ]
  },
  {
    title: 'Others',
    rows: [
      { title: 'Screenshots', free: '50 / month', pro: '5,000 / month', enterprise: 'Custom' },
      { title: 'Additional screenshots', free: '-', pro: '$0.004 per screenshot', enterprise: 'Custom' },
    ]
  },
  {
    title: 'Network',
    rows: [
      { title: 'Content delivery network', free: 'Basic', pro: 'Advanced', enterprise: 'Advanced', info: 'Available across all Clikkle services, with 200+ global PoP locations for low-latency delivery.' },
      { title: 'Edge compute', free: true, pro: true, enterprise: true },
      { title: 'DDoS mitigation', free: true, pro: true, enterprise: true },
      { title: 'Content compression', free: true, pro: true, enterprise: true, info: 'Support for brotli, zstd, and gzip for text compression and webp for image compression' },
      { title: 'TLS encryption', free: true, pro: true, enterprise: true },
      { title: 'Logs', free: '-', pro: '-', enterprise: 'Coming soon' },
      { title: 'Firewall', free: '-', pro: '-', enterprise: 'Custom rules' },
      { title: 'WAF', free: '-', pro: '-', enterprise: 'Custom rules' },
    ]
  },
  {
    title: 'Security',
    rows: [
      { title: 'Organization roles', free: '-', pro: true, enterprise: true },
      { title: 'SOC-2, HIPAA, and BAA', free: '-', pro: '-', enterprise: true },
      { title: 'Custom organization roles', free: '-', pro: '-', enterprise: 'Coming soon' },
      { title: 'Activity logs', free: '-', pro: '-', enterprise: 'Coming soon' },
    ]
  },
  {
    title: 'Support',
    rows: [
      { title: 'Community', free: true, pro: true, enterprise: true },
      { title: 'Email', free: '-', pro: true, enterprise: true },
      { title: 'SLA', free: '-', pro: '-', enterprise: 'Custom' },
      { title: 'Private Slack channel', free: '-', pro: '-', enterprise: 'Custom' },
    ]
  }
];

export const faqItems: FaqItem[] = [
  {
    question: 'What payment methods does Clikkle support?',
    answer: 'Clikkle currently supports <a class="pricing-faq-link" href="/docs/advanced/platform/billing#payment-methods">credit and debit card payments</a>. We are actively working on adding support for more methods. Please <a class="pricing-faq-link" href="/contact-us">contact us</a> in case this is an issue for you.'
  },
  {
    question: 'What happens if I reach a resource limit in my Pro plan?',
    answer: 'Your project will continue to run, and additional charges will apply. You can find the costs for additional resources in the <a class="pricing-faq-link" href="/pricing">pricing plans comparison</a>. We will also send you email reminders when you hit 75% and 100% of your resource limits. To avoid unexpected payments, you can set up a <a class="pricing-faq-link" href="/docs/advanced/platform/pro#budget-cap">budget cap</a> on your organization.'
  },
  {
    question: 'What happens if I reach a resource limit in my Free plan?',
    answer: 'Your project will freeze, and Clikkle Console will continue running in read-only mode. You need to upgrade to Pro, remove resources that exceed their limit, or wait for the next billing cycle, which resets usage limits.'
  },
  {
    question: 'Why does Clikkle ask for payment verification for up to $150?',
    answer: 'The Reserve Bank of India (RBI) mandates additional security measures for recurring payments on Indian cards. Clikkle is obligated to ask for verification before billing your card. Clikkle asks for verification for up to $150 in case you use add-ons, but will not charge more than the actual amount used or your budget cap.'
  },
  {
    question: 'How can I join the OSS program?',
    answer: 'The OSS program is exclusively for active open-source maintainers using Clikkle Cloud. You can find more information on how to join the program in our <a class="pricing-faq-link" href="/blog/post/announcing-the-clikkle-oss-program">announcement blog</a>.'
  },
  {
    question: 'How can I join the Startups program?',
    answer: 'Are you a founder looking to build with Clikkle? Learn more about our Startups program on our Startups <a class="pricing-faq-link" href="/startups">landing page</a>.'
  },
  {
    question: 'I have a Free plan account. How do I upgrade to a paid plan?',
    answer: 'If you want to upgrade to a paid plan, you can do so in your Clikkle dashboard, select your organization, and change your plan in the <strong>Billing</strong> section.'
  },
  {
    question: 'How can I apply credits to my organization?',
    answer: 'Go to the Clikkle Console and select the organization you wish to add credits to. In your organization overview, you can switch to the billing tab. Here, you need to go to the bottom of the page, where you will find the ability to add credits, as well as see the status of your credits. Credits are only relevant to Pro organizations since Free organizations are 100% free.'
  },
  {
    question: 'Where can I find an overview of my organization usage stats?',
    answer: "Go to the Clikkle Console and select the organization you wish to view. Here, you will find a usage tab with an overview of all your project's usage stats."
  },
  {
    question: 'Where can I find information about my invoices and other billing information?',
    answer: 'Go to the Clikkle Console and use the drop-down menu in the top right corner to navigate to your organization overview by clicking on your organization. This will bring you to your overview, where you can select the billing tab. Here you will find your overview, payment history and methods, billing address, set a budget cap, and add your credits.'
  },
  {
    question: 'I work with sensitive data and need to sign a BAA. Does Clikkle provide this?',
    answer: 'Yes, you can sign a BAA with Clikkle. Learn more about our security and compliance in our <a class="pricing-faq-link" href="/docs/advanced/security">documentation</a>.'
  }
];
