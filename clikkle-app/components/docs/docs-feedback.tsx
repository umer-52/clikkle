"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function DocsFeedback({ date }: { date?: string }) {
  const pathname = usePathname();
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackType, setFeedbackType] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState<string | undefined>();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!showFeedback) {
      setComment("");
      setEmail("");
      setFeedbackType("");
      setSubmitted(false);
      setError(undefined);
    }
  }, [showFeedback]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(undefined);

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          type: feedbackType,
          route: pathname,
          comment,
        }),
      });

      setSubmitting(false);
      if (response.status >= 400) {
        setError(
          response.status >= 500
            ? "Server Error."
            : "Error submitting form."
        );
        return;
      }
      setComment("");
      setEmail("");
      setSubmitted(true);
      setTimeout(() => setShowFeedback(false), 500);
    } catch {
      setSubmitting(false);
      setError("Error submitting form.");
    }
  }

  /** Strip basePath; link to Markdoc source in this repo (`clikkle-app/content/docs`). */
  const docsRelative = (pathname?.replace(/^\/clikkle\/docs\/?/, "") || "").replace(/\/$/, "");
  const githubTreeHref = docsRelative
    ? `https://github.com/clikkle/clikkle/tree/main/clikkle-app/content/docs/${docsRelative}`
    : "https://github.com/clikkle/clikkle/tree/main/clikkle-app/content/docs";

  return (
    <section className="web-content-footer">
      <header className="web-content-footer-header w-full">
        <div
          className="flex w-full items-center justify-between gap-8"
          style={{ flexWrap: "wrap-reverse" }}
        >
          <div className="flex items-center gap-4">
            <h5 className="text-body text-primary font-semibold">
              Was this page helpful?
            </h5>
            <div className="flex gap-2">
              <button
                className={cn(
                  "web-radio-button",
                  feedbackType === "positive" && showFeedback && "is-selected"
                )}
                aria-label="helpful"
                onClick={() => {
                  if (feedbackType === "positive" && showFeedback) {
                    setShowFeedback(false);
                  } else {
                    setFeedbackType("positive");
                    setShowFeedback(true);
                  }
                }}
              >
                <span className="icon-thumb-up" aria-hidden="true" />
              </button>
              <button
                className={cn(
                  "web-radio-button",
                  feedbackType === "negative" && showFeedback && "is-selected"
                )}
                aria-label="unhelpful"
                onClick={() => {
                  if (feedbackType === "negative" && showFeedback) {
                    setShowFeedback(false);
                  } else {
                    setFeedbackType("negative");
                    setShowFeedback(true);
                  }
                }}
              >
                <span className="icon-thumb-dowm" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="web-content-footer-header-end">
            <ul className="web-metadata text-caption">
              {date ? (
                <li>
                  Last updated on{" "}
                  {new Date(date).toLocaleDateString()}
                </li>
              ) : null}
              <li>
                <a
                  href={githubTreeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="web-link flex items-baseline gap-1"
                >
                  <span
                    className="icon-pencil-alt contents"
                    aria-hidden="true"
                  />
                  <span>Update on GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {showFeedback ? (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="web-card is-normal"
          style={{ "--card-padding": "1rem" } as React.CSSProperties}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="feedback-message">
              <span className="text-primary">
                What did you{" "}
                {feedbackType === "negative" ? "dislike" : "like"}?
              </span>
            </label>
            <textarea
              className="web-input-text"
              id="feedback-message"
              placeholder="Write your message"
              required
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <label htmlFor="feedback-email" className="mt-2">
              <span className="text-primary">Email</span>
            </label>
            <input
              className="web-input-text"
              placeholder="Enter your email"
              type="email"
              id="feedback-email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {submitted ? (
            <p className="text-primary mt-4">
              Your message has been sent successfully. We appreciate your
              feedback.
            </p>
          ) : null}
          {error ? (
            <p className="text-primary mt-4">
              There was an error submitting your feedback. Please try again
              later.
            </p>
          ) : null}

          <div className="mt-4 flex justify-end gap-2">
            <button
              type="button"
              className="web-btn is-text"
              onClick={() => setShowFeedback(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="web-btn"
              disabled={submitting || !email}
            >
              Submit
            </button>
          </div>
        </form>
      ) : null}
    </section>
  );
}
