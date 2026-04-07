"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const benchmarkData = [
  { 
    model: "GPT-4", 
    cost: "$30", 
    overall: 94, 
    auth: 96, 
    databases: 93, 
    functions: 92, 
    storage: 95, 
    sites: 91, 
    messaging: 94 
  },
  { 
    model: "Claude 3.5 Sonnet", 
    cost: "$15", 
    overall: 96, 
    auth: 98, 
    databases: 95, 
    functions: 94, 
    storage: 97, 
    sites: 93, 
    messaging: 96 
  },
  { 
    model: "Gemini Pro", 
    cost: "$7", 
    overall: 89, 
    auth: 91, 
    databases: 88, 
    functions: 87, 
    storage: 90, 
    sites: 86, 
    messaging: 89 
  },
  { 
    model: "GPT-3.5 Turbo", 
    cost: "$2", 
    overall: 82, 
    auth: 84, 
    databases: 81, 
    functions: 79, 
    storage: 83, 
    sites: 80, 
    messaging: 82 
  },
];

function getScoreColor(score: number) {
  if (score >= 95) return "text-cyan-400 bg-cyan-400/10";
  if (score >= 90) return "text-green-400 bg-green-400/10";
  if (score >= 85) return "text-yellow-400 bg-yellow-400/10";
  return "text-gray-400 bg-white/5";
}

export function LLMBenchmark() {
  return (
    <section className="py-24 bg-[var(--bg-primary)]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Works with every major LLM
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Benchmark results across different language models for Clikkle operations
          </p>
          
          <div className="not-prose flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs/tooling/skills"
              className="web-btn web-btn--appwrite-primary w-full justify-center sm:w-auto"
            >
              Install skill
            </Link>
            <a
              href="#benchmark-table"
              className="web-btn web-btn--appwrite-secondary w-full justify-center sm:w-auto"
            >
              View full benchmark
            </a>
          </div>
        </motion.div>

        {/* Benchmark Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="overflow-x-auto rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Model
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Cost/1M
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-blue-500 uppercase tracking-wider">
                  Overall
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Auth
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Databases
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Functions
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Storage
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Sites
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Messaging
                </th>
              </tr>
            </thead>
            <tbody>
              {benchmarkData.map((row, index) => (
                <motion.tr
                  key={row.model}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="px-6 py-4 font-medium text-white">
                    {row.model}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-400">
                    {row.cost}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center justify-center min-w-[60px] px-3 py-1 rounded-full font-bold ${getScoreColor(row.overall)}`}>
                      {row.overall}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-gray-300">
                    {row.auth}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-300">
                    {row.databases}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-300">
                    {row.functions}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-300">
                    {row.storage}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-300">
                    {row.sites}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-300">
                    {row.messaging}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 flex flex-wrap gap-4 justify-center text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-cyan-400" />
            <span className="text-gray-400">Excellent (95+)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <span className="text-gray-400">Good (90-94)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="text-gray-400">Fair (85-89)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
