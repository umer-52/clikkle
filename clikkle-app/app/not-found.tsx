import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[60vh] max-w-screen flex-col items-center justify-center overflow-hidden py-24">
      {/* Background Lighting Effect matching Hero Area */}
      <div
        className={
          "animate-lighting absolute top-0 left-0 -z-10 h-full w-[200vw] -translate-x-[25%] translate-y-8 rotate-25 overflow-hidden blur-3xl md:w-full bg-[image:radial-gradient(ellipse_390px_50px_at_10%_30%,_rgba(59,_130,_246,_0.18)_0%,_rgba(59,_130,_246,_0)_70%),_radial-gradient(ellipse_1100px_170px_at_15%_40%,rgba(45,_99,_255,_0.08)_0%,_rgba(45,_99,_255,_0)_70%),_radial-gradient(ellipse_1200px_180px_at_30%_30%,_rgba(30,_58,_138,_0.12)_0%,_rgba(30,_58,_138,_0)_70%)] bg-position-[0%_0%]"
        }
      ></div>

      <div className="animate-fade-in relative container mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="font-aeonik-pro text-[120px] leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#2D63FF] to-white to-50%">
          404<span className="text-accent">_</span>
        </h1>
        <h2 className="mt-4 text-title font-medium text-primary">Page not found</h2>
        <p className="mt-4 max-w-md text-sub-body text-secondary">
          The page you're looking for doesn't exist, has been moved, or is currently unavailable in this clone.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="web-btn web-btn-primary w-full sm:w-fit group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span className="text">Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
