import type { SVGProps } from "react";
import { cn } from "@/lib/utils";
import { GithubHeaderStar } from "@/components/github-header-star";

/** Marketing bar: 16×16 box to match `Main.svelte` `.aw-button-icon`. */
export function MarketingHeaderStar({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <GithubHeaderStar className={cn("aw-button-icon", className)} {...props} />
  );
}
