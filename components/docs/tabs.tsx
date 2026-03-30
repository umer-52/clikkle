"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export function Tabs({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState(0);

  // Safely extract titles from the children (TabsItem components)
  const tabs = React.Children.toArray(children)
    .filter(React.isValidElement)
    .map((child: any) => child.props.title || "Tab");

  if (tabs.length === 0) {
    return <div className="p-4 border border-red-500 text-red-500 rounded">Invalid Tabs Structure</div>;
  }

  return (
    <div className="my-6 w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
      {/* Tab Headers */}
      <div className="flex border-b border-white/10 overflow-x-auto hide-scrollbar px-2 pt-2 gap-2 bg-black/20">
        {tabs.map((title, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={cn(
              "px-4 py-2.5 text-sm font-medium transition-colors border-b-2",
              activeTab === idx
                ? "border-[#2D63FF] text-white"
                : "border-transparent text-white/50 hover:text-white/80"
            )}
          >
            {title}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div className="p-4 md:p-6">
        {React.Children.toArray(children).filter(React.isValidElement)[activeTab]}
      </div>
    </div>
  );
}

export function TabsItem({ title, children }: { title: string; children: React.ReactNode }) {
  return <div className="animate-in fade-in duration-300">{children}</div>;
}
