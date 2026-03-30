import { codeSamples } from "@/lib/site-data";
import { codeToHtml } from "shiki";
import { CodePreviewClient } from "./code-preview-client";
import { Reveal } from "./reveal";

export async function CodePreview() {
  const highlightedSamples: Record<string, string> = {};
  const rawCodes: Record<string, string> = {};

  // For each language snippet, generate HTML via Shiki
  for (const [key, sample] of Object.entries(codeSamples)) {
    let shikiLang = "javascript";
    if (key === "python") shikiLang = "python";
    else if (key === "php") shikiLang = "php";
    else if (key === "dart") shikiLang = "dart";
    else if (key === "swift") shikiLang = "swift";
    else if (key === "kotlin") shikiLang = "kotlin";

    try {
      const html = await codeToHtml(sample.code, {
        lang: shikiLang,
        theme: "dark-plus", // A clean, recognizable dark theme
      });
      highlightedSamples[key] = html;
    } catch (e) {
      // Fallback if a language isn't supported by default shiki bundle
      highlightedSamples[key] = `<pre><code>${sample.code}</code></pre>`;
    }
    rawCodes[key] = sample.code;
  }

  // Generate tabs array
  const tabs = Object.entries(codeSamples).map(([key, sample]) => ({
    id: key,
    label: sample.language,
  }));

  return (
    <section className="py-20 md:py-32 bg-[var(--bg-primary)] px-4">
      <div className="shell mx-auto">
        <Reveal className="mb-12 md:mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 tracking-tight">
              APIs that feel like home_
            </h2>
            <p className="text-lg md:text-xl text-[var(--text-secondary)]">
              Clikkle SDKs are designed to be intuitive, typed, and familiar to developers working in any modern ecosystem.
            </p>
          </div>
          <a
            href="/docs"
            className="button-secondary shrink-0 whitespace-nowrap self-center md:self-end text-sm md:text-base py-2.5 px-6"
          >
            Explore documentation
          </a>
        </Reveal>

        <Reveal delay={0.2} className="max-w-[1000px] mx-auto xl:mx-0">
          <CodePreviewClient 
            tabs={tabs} 
            defaultTab="javascript" 
            highlightedSamples={highlightedSamples} 
            rawCodes={rawCodes} 
          />
        </Reveal>
      </div>
    </section>
  );
}
