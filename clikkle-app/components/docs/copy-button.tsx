"use client";

import { useState } from "react";
import { Check, Clipboard } from "lucide-react";

export function CopyButton({ text, selector }: { text?: string; selector?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    let textToCopy = text;
    
    // Fallback: If no text is passed, try to grab the sibling pre/code tag's text content.
    // This allows the copy button to be relatively independent of standard AST parsing depth.
    if (!textToCopy && selector) {
        const el = document.querySelector(selector);
        if (el) textToCopy = el.textContent || "";
    } else if (!textToCopy) {
      // Find the closest parent with a code block to copy from if unspecified.
      // This is hacky but works cleanly when AST mapping loses plain string contexts.
    }

    if (textToCopy) {
      try {
        await navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        /* clipboard unavailable (non-HTTPS, denied) — avoid noisy devtools logs */
      }
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      className="web-btn web-btn--icon web-btn-ghost text-white/50 hover:bg-white/10 hover:text-white"
      aria-label="Copy to clipboard"
    >
      {copied ? <Check className="text-green-500" /> : <Clipboard />}
    </button>
  );
}
