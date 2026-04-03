"use client";

import { motion } from "framer-motion";

export function CodeTerminal() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      className="w-full max-w-3xl mx-auto rounded-xl border border-white/10 shadow-2xl bg-[var(--bg-primary)]/90 backdrop-blur-md overflow-hidden"
    >
      {/* Mac-style Window Header */}
      <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/10">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="mx-auto flex gap-4 text-xs font-mono text-aw-text-muted">
          <span className="text-white cursor-pointer px-2 py-0.5 rounded bg-white/10">main.js</span>
          <span className="cursor-pointer hover:text-white transition-colors">server.py</span>
          <span className="cursor-pointer hover:text-white transition-colors">app.dart</span>
        </div>
      </div>

      {/* Code Editor Content */}
      <div className="p-6 font-mono text-sm sm:text-base leading-relaxed overflow-x-auto text-left whitespace-pre">
        <span className="text-[#FF4D82]">import</span> {"{ "} 
        <span className="text-[#E4E4E7]">Client, Account, ID</span>
        {" } "} <span className="text-[#FF4D82]">from</span> <span className="text-[#22C55E]">"clikkle"</span>;
        {"\n\n"}
        <span className="text-[#FF4D82]">const</span> <span className="text-[#E4E4E7]">client</span> <span className="text-[#FF4D82]">=&nbsp;new</span> <span className="text-[#3B82F6]">Client</span>()
        {"\n"}
        {"    "}<span className="text-[#A1A1AA]">.</span><span className="text-[#3B82F6]">setEndpoint</span>(<span className="text-[#22C55E]">'https://cloud.clikkle.com/v1'</span>)
        {"\n"}
        {"    "}<span className="text-[#A1A1AA]">.</span><span className="text-[#3B82F6]">setProject</span>(<span className="text-[#22C55E]">'&lt;YOUR_PROJECT_ID&gt;'</span>);
        {"\n\n"}
        <span className="text-[#FF4D82]">const</span> <span className="text-[#E4E4E7]">account</span> <span className="text-[#FF4D82]">=&nbsp;new</span> <span className="text-[#3B82F6]">Account</span>(<span className="text-[#E4E4E7]">client</span>);
        {"\n\n"}
        <span className="text-[#FF4D82]">const</span> <span className="text-[#E4E4E7]">user</span> <span className="text-[#FF4D82]">=&nbsp;await</span> <span className="text-[#E4E4E7]">account</span><span className="text-[#A1A1AA]">.</span><span className="text-[#3B82F6]">create</span>(
        {"\n"}
        {"    "}<span className="text-[#E4E4E7]">ID</span><span className="text-[#A1A1AA]">.</span><span className="text-[#3B82F6]">unique</span>(), 
        {"\n"}
        {"    "}<span className="text-[#22C55E]">'email@example.com'</span>, 
        {"\n"}
        {"    "}<span className="text-[#22C55E]">'password'</span>
        {"\n"}
        );
      </div>
    </motion.div>
  );
}
