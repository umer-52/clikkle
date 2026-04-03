"use client";

/**
 * Appwrite `IsLoggedIn.svelte`: one dashboard href; label reflects `localStorage` session.
 */
import { useEffect, useState } from "react";

const DASHBOARD_HREF = "https://cloud.clikkle.com";

function readLoggedIn(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return !!(
      localStorage.getItem("appwrite:user") ||
      localStorage.getItem("clikkle:user")
    );
  } catch {
    return false;
  }
}

export function DocsConsoleCta({ className }: { className?: string }) {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(readLoggedIn());
  }, []);

  return (
    <a href={DASHBOARD_HREF} className={className} rel="noopener noreferrer">
      {loggedIn ? "Go to Console" : "Start building for free"}
    </a>
  );
}
