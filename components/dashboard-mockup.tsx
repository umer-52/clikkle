"use client";

import { BarChart, Database, Fingerprint, FolderArchive, MessageSquare, MonitorPlay, FileJson, LayoutDashboard } from "lucide-react";

export function DashboardMockup() {
  // Generate faux chart bars for visual effect based on Screenshot 1
  const chartBars = Array.from({ length: 48 }).map((_, i) => {
    // Random height between 20% and 90%
    const height = Math.floor(Math.random() * 70) + 20;
    // Apply pink/red color variation to simulate the Clikkle dashboard chart
    const color = Math.random() > 0.6 ? 'bg-[#2D63FF]' : 'bg-[#2D63FF]/50';
    return (
      <div 
        key={i} 
        className={`w-1.5 md:w-2 ${color} rounded-t-sm transition-all duration-300 transform hover:scale-y-110 origin-bottom`}
        style={{ height: `${height}%` }}
      />
    );
  });

  return (
    <div className="w-full h-full bg-[#1e1e21] rounded-[2rem] border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col font-sans relative">
      
      {/* Top Header */}
      <div className="h-14 border-b border-white/5 flex items-center px-6 gap-3 shrink-0 bg-[#2A2A2D]/30 backdrop-blur-sm relative z-10">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2D63FF] text-white shadow-sm ring-1 ring-[#2D63FF]/50">
           <svg className="w-3.5 h-3.5 ml-[1px]" viewBox="0 0 24 24" fill="currentColor">
             <path d="M22.043 14.542l-4.225-7.394c-.958-1.675-2.698-2.646-4.63-2.646h-8.45c-1.932 0-3.673.971-4.63 2.646l-4.224 7.394c-.958 1.675-1.282 3.619-.324 5.294l4.225 7.394c.958 1.675 2.698 2.646 4.63 2.646h8.45c1.932 0 3.673-.971 4.63-2.646l4.224-7.394c.958-1.675 1.282-3.619.324-5.294zm-14.869 6.536l-3.268-5.719c-.439-.769-.607-1.685-.168-2.454l3.268-5.719c.439-.769 1.258-1.229 2.136-1.229h6.536c.878 0 1.697.46 2.136 1.229l3.268 5.719c.439.769.271 1.685-.168 2.454l-3.268 5.719c-.439.769-1.258 1.229-2.136 1.229h-6.536c-.878 0-1.697-.46-2.136-1.229z" />
           </svg>
        </div>
        <span className="font-semibold text-white tracking-tight">Clikkle</span>
        <span className="text-[#A1A1AA] mx-1">/</span>
        <span className="text-[#A1A1AA] text-sm">Acme Corp</span>
        <span className="text-[#A1A1AA] mx-1">/</span>
        <span className="text-white text-sm font-medium">First Clikkle project</span>
      </div>

      <div className="flex flex-1 overflow-hidden">
        
        {/* Left Sidebar */}
        <div className="w-56 border-r border-white/5 bg-[#19191C]/50 flex flex-col pt-6 px-3 shrink-0 hidden md:flex">
          <div className="px-3 py-2 bg-[#2A2A2D]/80 text-white rounded-lg flex items-center gap-3 text-sm font-medium mb-6 transition-colors">
            <MonitorPlay className="w-4 h-4 text-[#A1A1AA]" />
            Overview
          </div>

          <div className="text-[10px] uppercase tracking-wider text-[#A1A1AA] font-bold px-3 mb-3">Build</div>
          <div className="flex flex-col gap-1 mb-8">
            <NavItem icon={Fingerprint} label="Auth" />
            <NavItem icon={Database} label="Databases" />
            <NavItem icon={FileJson} label="Functions" />
            <NavItem icon={FolderArchive} label="Storage" />
            <NavItem icon={MessageSquare} label="Messaging" />
          </div>

          <div className="text-[10px] uppercase tracking-wider text-[#A1A1AA] font-bold px-3 mb-3">Deploy</div>
          <div className="flex flex-col gap-1">
            <NavItem icon={LayoutDashboard} label="Sites" />
          </div>
        </div>

        {/* Main Dashboard Area */}
        <div className="flex-1 p-8 md:p-10 overflow-y-auto">
          {/* Main Title Area */}
          <div className="mb-8 flex flex-col gap-2">
            <h2 className="text-xl md:text-2xl font-display font-semibold text-white tracking-tight">Clikkle Project</h2>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 rounded-full w-max text-[11px] font-mono shadow-sm">
              <span className="text-[#A1A1AA] pt-[1px]">Project ID: 65b8c9d1</span> 
            </div>
          </div>

          {/* Chart Card */}
          <div className="bg-[#19191C]/50 border border-white/5 rounded-2xl p-6 shadow-sm mb-6 max-w-3xl">
            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl md:text-3xl font-bold font-mono text-white tracking-tighter">1.19</span>
                <span className="text-white font-semibold text-sm">GB</span>
              </div>
              <div className="text-xs text-[#A1A1AA] mt-1 font-medium tracking-wide">Bandwidth</div>
            </div>

            {/* Fake Bar Chart */}
            <div className="w-full h-40 flex items-end justify-between gap-0.5 md:gap-1 mt-8 border-b border-[#2A2A2D] pb-1">
              {chartBars}
            </div>
            
            <div className="flex justify-between items-center text-[10px] mt-3 text-[#A1A1AA] uppercase tracking-wider">
              <span>2000</span>
              <span>1500</span>
              <span>1000</span>
              <span>500</span>
              <span>0</span>
            </div>
            <div className="text-[11px] text-[#A1A1AA] mt-4 font-medium pl-2">
              15 July
            </div>
          </div>

          {/* Lower Cards Peek */}
          <div className="grid grid-cols-2 gap-6 max-w-3xl">
             <div className="h-24 rounded-[1.5rem] bg-[#1E1E21] border border-[#2A2A2D] p-5 flex flex-col justify-end">
                <div className="flex items-center justify-between text-[#A1A1AA] text-xs font-bold uppercase tracking-wider">
                  <span>Databases</span>
                  <Database className="w-4 h-4" />
                </div>
             </div>
             <div className="h-24 rounded-[1.5rem] bg-[#1E1E21] border border-[#2A2A2D] p-5 flex flex-col justify-end">
                <div className="flex items-center justify-between text-[#A1A1AA] text-xs font-bold uppercase tracking-wider">
                  <span>Storage</span>
                  <FolderArchive className="w-4 h-4" />
                </div>
             </div>
          </div>
        </div>
      </div>

    </div>
  );
}

// NavItem Helper
function NavItem({ icon: Icon, label }: { icon: React.ElementType, label: string }) {
  return (
    <div className="px-3 py-2 text-[#A1A1AA] rounded-lg flex items-center gap-3 text-[13px] font-medium transition-colors hover:text-white hover:bg-[#232325] cursor-pointer">
      <Icon className="w-4 h-4 opacity-70" />
      {label}
    </div>
  );
}
