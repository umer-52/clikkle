"use client";

import NumberFlow from "@number-flow/react";

interface InitCounterProps {
  value: number;
}

export function InitCounter({ value }: InitCounterProps) {
  return (
    <NumberFlow
      className="text-center"
      value={value}
      format={{ notation: "compact", minimumIntegerDigits: 2 }}
    />
  );
}
