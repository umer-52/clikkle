"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Don't scroll if there's a hash/anchor ID in the URL
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
