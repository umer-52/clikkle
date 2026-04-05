"use client";

/**
 * Appwrite docs chrome: dashboard CTA always reads "Go to Console" (see `IsLoggedIn.svelte` logged-in label;
 * appwrite.io/docs mobile matches that copy for the header + drawer footer).
 */
const DASHBOARD_HREF = "https://cloud.clikkle.com";

export function DocsConsoleCta({ className }: { className?: string }) {
  return (
    <a href={DASHBOARD_HREF} className={className} rel="noopener noreferrer">
      Go to Console
    </a>
  );
}
