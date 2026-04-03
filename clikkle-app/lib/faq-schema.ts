/**
 * Appwrite `src/lib/utils/metadata.ts` `createFaqSchema` — plain text answers for JSON-LD.
 */
export function stripHtmlForSchema(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function createFaqSchemaJsonLd(
  faqs: Array<{ question: string; answer: string }>
): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: stripHtmlForSchema(item.answer),
      },
    })),
  });
}
