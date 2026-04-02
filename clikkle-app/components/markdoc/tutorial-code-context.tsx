"use client";

import { createContext, useContext, type ReactNode } from "react";

const TutorialCodeContext = createContext(false);

export function TutorialCodeProvider({ children }: { children: ReactNode }) {
  return <TutorialCodeContext.Provider value={true}>{children}</TutorialCodeContext.Provider>;
}

export function useInTutorialDocs() {
  return useContext(TutorialCodeContext);
}
