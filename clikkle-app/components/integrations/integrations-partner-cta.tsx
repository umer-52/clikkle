import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {
  partnerHref?: string;
};

/** Appwrite integrations partner band: centered copy + CTA; Clikkle uses blue radial glare instead of pink. */
export function IntegrationsPartnerCta({
  partnerHref = "/integrations/technology-partner",
}: Props) {
  return (
    <section
      className="relative overflow-hidden border-t border-white/5 bg-[var(--bg-primary)] pt-24 pb-32"
      aria-labelledby="integrations-partner-heading"
    >
      <div
        className="pointer-events-none absolute -left-[25%] top-1/2 h-[min(56rem,140vw)] w-[min(56rem,140vw)] -translate-y-1/2 rounded-full bg-[#2D63FF]/30 blur-[140px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-[8%] top-[15%] h-[28rem] w-[28rem] rounded-full bg-[#2D63FF]/18 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-[10%] bottom-[-10%] h-[24rem] w-[36rem] rounded-full bg-[#2D63FF]/12 blur-[90px]"
        aria-hidden
      />

      <div className="container relative z-10 mx-auto">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <h2
            id="integrations-partner-heading"
            className="text-display font-aeonik-pro text-primary max-w-[600px]"
          >
            Become a Technology Partner
          </h2>
          <p className="text-main-body font-medium text-secondary">
            Join our Technology Partners program to integrate your solutions with Clikkle&apos;s API,
            enhancing functionality and expanding your reach.
          </p>
          <Button
            asChild
            variant="outline"
            className="mt-2 !border-transparent !bg-white !text-black hover:!bg-white/90"
          >
            <Link href={partnerHref}>Get Started</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
