"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cpu, Zap, ShieldCheck, Activity, Database, Link as LinkIcon, Loader2, Download, ArrowLeft, 
  Brain, Clock, Terminal, Play, Save, Microscope, Crosshair, Map, Layers, TrendingUp, Smartphone, BarChart3, ChevronDown, Bell, User, Sword 
} from "lucide-react";

const GalaxyStars = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div className="fixed inset-0 z-0 bg-[#00040a] overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div key={i} className="absolute bg-white rounded-full opacity-20 animate-pulse" 
             style={{ top: `${Math.random()*100}%`, left: `${Math.random()*100}%`, width: 2, height: 2 }} />
      ))}
    </div>
  );
};

// --- DYNAMIC SUB-PAGES ---
const IntelligencePage = ({ data }: { data: any }) => {
  const intel = data?.intelligence || {};
  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 text-left">
      <div className="lg:col-span-2 bg-white/[0.03] border border-white/5 rounded-[3rem] p-10 h-[550px] relative overflow-hidden backdrop-blur-3xl flex flex-col justify-between">
        <h3 className="text-xl font-black italic uppercase text-blue-400">Semantic Brain Map</h3>
        <div className="flex-1 flex items-center justify-center relative">
          <Brain size={80} className="text-blue-500 z-10 animate-pulse drop-shadow-[0_0_20px_#3b82f6]" />
        </div>
        <div className="bg-rose-500/10 border border-rose-500/30 p-8 rounded-3xl backdrop-blur-xl">
            <p className="text-[10px] font-black text-rose-500 uppercase mb-2">Neural Gap Detected</p>
            <p className="text-base text-white font-black uppercase italic underline mb-2">{intel.brain_map_gap || "Analyzing Nodes..."}</p>
            <p className="text-xs text-slate-400 font-bold leading-relaxed uppercase">{intel.brain_map_problem}</p>
        </div>
      </div>
      <div className="bg-white/[0.03] border border-white/5 rounded-[3rem] p-10 backdrop-blur-3xl flex flex-col justify-between">
          <h3 className="text-xl font-black italic uppercase text-emerald-400">Geo-Resonance</h3>
          <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
             <p className="text-xs text-slate-300 italic font-bold uppercase leading-relaxed">{intel.geo_suggestion}</p>
          </div>
          <Map size={100} className="mx-auto text-emerald-500/10 mt-10" />
      </div>
    </div>
  );
};

const GrowthPage = ({ data }: { data: any }) => {
  const growth = data?.growth || {};
  const trends = growth.trends || Array(24).fill(10);
  const maxTrend = Math.max(...trends, 1);
  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 text-left">
      <div className="bg-white/[0.03] border border-white/5 rounded-[4rem] p-12 backdrop-blur-3xl">
        <h3 className="text-3xl font-black italic uppercase text-blue-400 mb-12">SEO Time Machine</h3>
        <div className="h-72 flex items-end gap-2 border-l border-b border-white/10 p-4 relative">
          {trends.map((v: number, i: number) => (
            <div key={i} className="flex-1 flex flex-col items-center justify-end h-full group">
               <span className="opacity-0 group-hover:opacity-100 text-[8px] font-black text-blue-400 mb-1 transition-opacity">{v}</span>
               <motion.div initial={{ height: 0 }} animate={{ height: `${(v / maxTrend) * 100}%` }} 
                 className={`w-full rounded-t-lg transition-all ${i > 15 ? 'bg-blue-500 shadow-[0_0_20px_#3b82f6] animate-pulse' : 'bg-slate-800'}`} />
            </div>
          ))}
          <div className="absolute left-[66%] top-0 bottom-0 w-[1px] bg-rose-500/50"><span className="absolute top-0 -translate-x-1/2 -translate-y-8 bg-rose-500 text-[8px] px-1 py-0.5 rounded font-black uppercase">Today</span></div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/[0.03] border border-white/5 rounded-[3rem] p-10 backdrop-blur-3xl"><h3 className="text-xl font-black italic uppercase text-rose-400 mb-6">War Room</h3><p className="text-sm text-slate-300 font-bold uppercase leading-relaxed">{growth.war_room_battle}</p></div>
        <div className="bg-blue-600/5 border border-blue-500/20 rounded-[3rem] p-10 flex flex-col justify-center items-center text-center">
           <Crosshair size={60} className="text-blue-500 mb-4 animate-pulse" />
           <p className="text-base text-white italic font-bold uppercase">{growth.defense_matrix}</p>
        </div>
      </div>
    </div>
  );
};

// --- AUDIT VIEW (FIXED: Resilient Data Mapping) ---
const DetailedAuditView = ({ category, onBack, liveData }: { category: string, onBack: () => void, liveData: any }) => {
  const data = liveData?.audit ? liveData.audit[category] : [];

  return (
    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="w-full max-w-5xl mx-auto space-y-6 text-left">
      <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors uppercase text-[10px] font-black"><ArrowLeft size={16} /> BACK</button>
      <div className="bg-[#0c0f16] border border-white/10 rounded-[3rem] backdrop-blur-3xl overflow-hidden shadow-2xl">
        <div className="p-12 border-b border-white/5 bg-white/5 text-left"><h2 className="text-3xl font-black italic uppercase text-blue-400 tracking-tighter">{category} ANALYSIS</h2></div>
        <div className="p-12 space-y-12">
          {data && data.length > 0 ? data.map((item: any, idx: number) => (
            <div key={idx} className="p-10 bg-white/[0.02] rounded-[2.5rem] border border-white/5">
              <h4 className="font-black text-blue-300 uppercase text-[14px] mb-4 tracking-widest">{item.element || "Neural Node"}</h4>
              <p className="text-lg text-white mb-10 font-bold uppercase tracking-tight">{item.problem}</p>
              <div className="p-10 bg-black/60 rounded-[2.5rem] border border-emerald-500/20 font-mono text-xs text-emerald-400 overflow-x-auto">
                <p className="text-[10px] text-slate-500 mb-4 uppercase font-sans font-black">Implementation Code:</p>
                <code>{item.mitigation}</code>
              </div>
            </div>
          )) : <div className="text-center py-24 text-slate-700 font-black text-xs uppercase animate-pulse">Inference Branch Empty... Ensure you analyzed a URL first.</div>}
        </div>
      </div>
    </motion.div>
  );
};
// --- DASHBOARD (Scores now dynamic from data.scores) ---
const DashboardView = ({ hasData, data, onSelectMetric }: { hasData: boolean, data: any, onSelectMetric: (cat: string) => void }) => {
  // We match the keys between Python and TypeScript
  const topCards = [
    { id: "seo", label: "SEO Score" },
    { id: "trust", label: "Trust Score" },
    { id: "visibility", label: "Visibility Score" },
    { id: "backlink", label: "Backlink Score" }
  ];

  const middleCards = [
    { id: "onpage", label: "ON-PAGE ENGINE" },
    { id: "offpage", label: "OFF-PAGE MATRIX" },
    { id: "technical", label: "TECHNICAL NODE" }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {topCards.map((card, i) => (
          <button key={card.id} onClick={() => hasData && onSelectMetric(card.id)} className="text-left group relative p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 backdrop-blur-xl hover:bg-white/10 transition-all disabled:opacity-50" disabled={!hasData}>
            <div className="flex justify-between items-start mb-6"><div className="p-4 bg-white/10 rounded-2xl text-white group-hover:bg-blue-600 transition-colors"><Zap size={20}/></div><h3 className="text-3xl font-black italic">{hasData ? (data.scores?.[card.id] || "0") : "---"}</h3></div>
            <div className="flex justify-between items-end relative z-10"><span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">{card.label}</span><span className="text-[10px] font-bold text-emerald-400">↗</span></div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {middleCards.map((card) => (
          <button key={card.id} onClick={() => hasData && onSelectMetric(card.id)} className="flex items-center gap-8 p-12 rounded-[3rem] bg-white/[0.03] border border-white/5 backdrop-blur-xl hover:bg-white/10 transition-all group" disabled={!hasData}>
             <div className="p-6 bg-white/5 rounded-3xl text-blue-400 group-hover:scale-110 transition-transform"><Layers size={32}/></div>
             <div className="text-left"><h4 className="text-[11px] font-black uppercase text-slate-400">{card.label}</h4><p className="text-2xl text-white font-black italic mt-1">{hasData ? (data.scores?.[card.id] || "0") : "--"}</p></div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-center">
         {[{ id: 'intent', title: 'Contextual Intent' }, { id: 'accessibility', title: 'Node Accessibility' }, { id: 'analytics', title: 'Impression Analytics' }].map((item) => (
           <button key={item.id} onClick={() => hasData && onSelectMetric(item.id)} className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 backdrop-blur-xl flex flex-col items-center group" disabled={!hasData}>
              <div className="w-full flex justify-between mb-12"><h4 className="text-[11px] font-black uppercase text-slate-400">{item.title}</h4><ChevronDown size={14} className="text-slate-600"/></div>
              <div className="relative w-36 h-36 flex items-center justify-center">
                 <svg className="w-full h-full -rotate-90"><circle cx="72" cy="72" r="64" stroke="#1e293b" strokeWidth="12" fill="none" /><motion.circle initial={{pathLength:0}} animate={{pathLength: hasData ? 0.7 : 0}} cx="72" cy="72" r="64" stroke="#3b82f6" strokeWidth="12" fill="none" strokeDasharray="402" strokeLinecap="round" /></svg>
                 <span className="absolute text-sm font-black">{hasData ? (data.scores?.[item.id] || "0") + "%" : "0%"}</span>
              </div>
           </button>
         ))}
      </div>
    </div>
  );
};

// --- APP WRAPPER (Includes persistent Health state) ---
export default function NeuralEngineApp() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [url, setUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasData, setHasData] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);
  const [liveAuditData, setLiveAuditData] = useState<any>(null);

  const handleAudit = async () => {
    if (!url) return;
    setIsAnalyzing(true);
    setHasData(false);
    setSelectedMetric(null);
    try {
      const res = await fetch("https://neuro-search-engine-optimization-engine.onrender.com/analyze", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ url }) });
      const data = await res.json();
      setLiveAuditData(data);
      setHasData(true);
    } catch (e) { alert("Neural connection failed."); }
    finally { setIsAnalyzing(false); }
  };

  return (
    <div className="min-h-screen w-full flex flex-col font-sans text-slate-200 overflow-x-hidden relative bg-[#00040a]">
      <GalaxyStars /><header className="flex-none h-24 flex items-center justify-center z-50 px-6 w-full"><div className="bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] px-10 py-5 flex items-center justify-between shadow-2xl w-full max-w-6xl mx-auto"><div className="flex items-center gap-3 cursor-pointer group" onClick={() => { setActiveTab("Dashboard"); setSelectedMetric(null); }}><div className="bg-blue-600 p-2 rounded-xl text-white shadow-xl"><Cpu size={22} /></div><span className="text-xl font-black italic tracking-tighter uppercase">Neural</span></div><nav className="hidden md:flex items-center gap-10">{["Dashboard", "Intelligence", "Growth", "Health"].map((t) => (<button key={t} onClick={() => { setActiveTab(t); setSelectedMetric(null); }} className={`text-[11px] font-black uppercase tracking-widest transition-all ${activeTab === t ? "text-blue-400 scale-110 shadow-blue-500/20 shadow-2xl" : "text-slate-500 hover:text-white"}`}>{t}</button>))}</nav><div className="flex items-center gap-4"><Bell size={20} className="text-slate-500" /><div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-xl"><User size={18} /></div></div></div></header>
      <main className="flex-1 w-full flex flex-col items-center justify-start relative z-10 px-6 py-10 overflow-y-auto no-scrollbar"><div className="w-full max-w-6xl mx-auto"><AnimatePresence mode="wait">
            {isAnalyzing ? ( <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center mt-32 text-center"><div className="w-24 h-24 border-t-2 border-blue-500 rounded-full animate-spin mb-10 shadow-[0_0_30px_rgba(59,130,246,0.2)]" /><h3 className="text-3xl font-black italic uppercase text-white tracking-tighter">Neural Inference Trace...</h3></motion.div>
            ) : ( <motion.div key={activeTab} initial={{ opacity: 0, scale: 0.99 }} animate={{ opacity: 1, scale: 1 }} className="w-full flex flex-col items-center">
                {activeTab === "Dashboard" && (<div className="w-full space-y-12">{!selectedMetric && (<div className="relative group w-full max-w-2xl mx-auto"><div className="absolute -inset-1 bg-blue-600 rounded-[2.5rem] blur-2xl opacity-10" /><div className="relative flex items-center bg-white/5 border border-white/10 rounded-[2.5rem] p-2 pl-10 w-full backdrop-blur-3xl shadow-2xl shadow-blue-500/10"><LinkIcon size={20} className="text-blue-500 mr-6" /><input value={url} onChange={(e) => setUrl(e.target.value)} type="text" placeholder="PASTE TARGET URL COMMAND..." className="bg-transparent outline-none text-xs w-full font-black text-white placeholder:text-slate-700 tracking-widest" /><button onClick={handleAudit} className="bg-blue-600 text-white px-12 py-6 rounded-[2.2rem] text-[12px] font-black uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl">ANALYZE</button></div></div>)}<AnimatePresence mode="wait">{selectedMetric ? ( <DetailedAuditView category={selectedMetric} onBack={() => setSelectedMetric(null)} liveData={liveAuditData} /> ) : ( <DashboardView hasData={hasData} data={liveAuditData} onSelectMetric={(cat) => setSelectedMetric(cat)} /> )}</AnimatePresence></div>)}
                {activeTab === "Intelligence" && (hasData ? <IntelligencePage data={liveAuditData} /> : <div className="mt-40 opacity-30 text-center flex flex-col items-center"><Microscope size={80} className="mb-10 text-blue-500"/><p className="text-[12px] font-black uppercase tracking-[1em] animate-pulse">Awaiting Semantic Trace...</p></div>)}
                {activeTab === "Growth" && (hasData ? <GrowthPage data={liveAuditData} /> : <div className="mt-40 opacity-30 text-center flex flex-col items-center"><TrendingUp size={80} className="mb-10 text-emerald-500"/><p className="text-[12px] font-black uppercase tracking-[1em] animate-pulse">Awaiting Projection Matrix...</p></div>)}
                {activeTab === "Health" && <HealthPage data={liveAuditData} />}
              </motion.div>
            )}
          </AnimatePresence></div></main>
    </div>
  );
}

// Fixed HealthPage to allow data prop or separate sandbox check
const HealthPage = ({ data }: { data: any }) => {
  const [code, setCode] = useState("");
  const [res, setRes] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const runSandbox = async () => {
    if(!code) return;
    setLoading(true);
    try {
      const response = await fetch("https://neuro-search-engine-optimization-engine.onrender.com/sandbox", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ code_content: code }) });
      const result = await response.json();
      setRes(result);
    } catch (e) { alert("Sandbox Failed"); }
    finally { setLoading(false); }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto text-left">
      <div className="lg:col-span-2 bg-white/[0.03] border border-white/5 rounded-[3rem] p-10 flex flex-col backdrop-blur-3xl h-[650px]">
        <h3 className="text-2xl font-black italic uppercase text-emerald-400 mb-6">Neural Sandbox</h3>
        <textarea value={code} onChange={(e) => setCode(e.target.value)} className="flex-1 bg-black/40 border border-white/10 rounded-2xl p-8 text-xs font-mono text-emerald-500 outline-none resize-none" placeholder="// Paste Code snippet to Analyze Safety Matrix..." />
        <button onClick={runSandbox} disabled={loading} className="mt-8 w-full py-8 bg-emerald-600 hover:bg-emerald-500 text-white rounded-3xl text-[14px] font-black uppercase tracking-widest flex items-center justify-center gap-4 transition-all shadow-lg">
          {loading ? <Loader2 className="animate-spin" /> : <Play size={20} fill="currentColor" />} RUN NEURAL CHECK
        </button>
      </div>
      <div className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/5 backdrop-blur-3xl flex flex-col justify-between">
           <div><h4 className="text-[10px] font-black uppercase text-slate-500 mb-10 tracking-[0.3em]">AI Pre-Flight Warning</h4>
           <div className="p-6 bg-rose-500/10 border border-rose-500/30 rounded-[2rem] text-sm text-rose-400 italic font-bold uppercase leading-loose">{res?.sandbox_warning || data?.health?.sandbox_warning || "Awaiting code..."}</div></div>
           <div className="text-center mt-10"><p className="text-[10px] font-black text-emerald-500 uppercase mb-4">Safety Index</p><p className="text-9xl font-black italic text-white drop-shadow-[0_0_20px_white]">{res?.safety_score || data?.health?.safety_score || "100"}</p></div>
      </div>
    </div>
  );
};