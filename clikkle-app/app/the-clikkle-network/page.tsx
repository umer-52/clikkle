import type { Metadata } from "next";
import { TheClikkleNetworkPage } from "@/components/the-clikkle-network-page";

export const metadata: Metadata = {
  title: "The Clikkle Network",
  description:
    "Explore Clikkle's global network of PoP locations, edges, and regions for low latency and resilient infrastructure.",
  openGraph: {
    title: "The Clikkle Network",
    description:
      "Explore Clikkle's global network of PoP locations, edges, and regions.",
    type: "website",
  },
};

export default function TheClikkleNetworkRoute() {
  return <TheClikkleNetworkPage />;
}
