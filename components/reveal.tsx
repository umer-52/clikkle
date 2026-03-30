"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";

type RevealVariant = "fade-in" | "slide-up" | "slide-left" | "slide-right" | "scale-up";

type RevealProps = PropsWithChildren<{
  delay?: number;
  className?: string;
  variant?: RevealVariant;
  staggerChildren?: number;
}>;

const getVariants = (variant: RevealVariant, delay: number, stagger: number): any => {
  const transition = { duration: 0.55, ease: "easeOut", delay };
  
  const v = {
    "fade-in": {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition },
    },
    "slide-up": {
      initial: { opacity: 0, y: 18 },
      animate: { opacity: 1, y: 0, transition },
    },
    "slide-left": {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0, transition },
    },
    "slide-right": {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0, transition },
    },
    "scale-up": {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1, transition },
    },
  };

  const selected = v[variant];

  // If staggering is requested, we can use Framer Motion's staggerChildren
  // but since we are doing whileInView per Reveal, we just use delay.
  return selected;
};

export function Reveal({ 
  children, 
  delay = 0, 
  className, 
  variant = "slide-up"
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants = getVariants(variant, delay, 0);

  return (
    <motion.div
      className={className}
      initial={variants.initial}
      whileInView={variants.animate}
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  );
}

// Optional StaggerContext / StaggerGroup for parent stagger coordination
// In this implementation stagger is handled by passing increasing delays to sibling Reveals.
