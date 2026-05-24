"use client";
import React, { useCallback, useState, CSSProperties } from 'react';
import ReactFlow, { 
  Background, Controls, MiniMap, useNodesState, useEdgesState, addEdge, Connection, Edge, MarkerType 
} from 'reactflow';
import 'reactflow/dist/style.css';
import { motion } from 'framer-motion';
import { Cpu, Zap, Plus, Globe, LogOut, Orbit, Sparkles, Box, Database, Share2, BookOpen, ChevronRight } from 'lucide-react';
import Link from "next/link";
import { Node } from 'reactflow';

// --- GALAXY THEME CONSTANTS ---
const edgeOptions = { 
  style: { strokeWidth: 2, stroke: '#f97316' }, 
  animated: true, 
  markerEnd: { type: MarkerType.ArrowClosed, color: '#f97316' } 
};

const initialNodes = [
  { id: '1', position: { x: 400, y: 100 }, data: { label: 'PILLAR: ROOT DOMAIN' }, type: 'input', style: { background: 'radial-gradient(circle, #fb923c 0%, #f97316 100%)', color: '#000', borderRadius: '50%', width: 160, height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' as CSSProperties['textAlign'], fontWeight: '900', border: 'none', boxShadow: '0 0 60px rgba(249, 115, 22, 0.6)', fontSize: '12px' } }
];

export default function PerfectSEOPlayground() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [authority, setAuthority] = useState(94.2);

  const onConnect = useCallback((params: Connection | Edge) => setEdges((eds) => addEdge({ ...params, ...edgeOptions, label: 'Authority Flow', labelStyle: { fill: '#fff', fontSize: '10px', fontWeight: 900 }, labelBgStyle: { fill: '#000', fillOpacity: 0.7 } }, eds)), [setEdges]);

  // --- NODE SPAWNING LOGIC (Sidebar Button Actions) ---
 // ...existing code...
const spawnNode = (type: string) => {
  const id = `${nodes.length + 1}`;
  let nodeStyle = {};
  let label = "";

  if(type === 'Pillar') {
      label = `PILLAR: ${id}`;
      nodeStyle = { background: '#f97316', color: '#000', borderRadius: '50%', width: 150, height: 150, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', boxShadow: '0 0 30px #f97316', border: 'none' };
  } else if(type === 'Competitor') {
      label = `EXTERNAL: ${id}`;
      nodeStyle = { background: '#ef4444', color: '#fff', borderRadius: '15px', padding: '15px', fontWeight: 'bold', border: 'none', boxShadow: '0 0 20px #ef4444', width: 180 };
  } else if(type === 'Entity') {
      label = `BERT: ENTITY ${id}`;
      nodeStyle = { background: '#000', color: '#fbbf24', borderRadius: '50%', width: 110, height: 110, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed #fbbf24', fontSize: '10px', fontWeight: '900', boxShadow: '0 0 15px #fbbf24' };
  } else {
      label = `SUBPAGE: /${id}`;
      nodeStyle = { background: '#050505', color: '#a855f7', borderRadius: '20px', padding: '15px', border: '2px solid #a855f7', fontWeight: 'bold', width: 170, boxShadow: '0 0 20px rgba(168,85,247,0.3)' };
  }

  setNodes((nds) => nds.concat({ id, position: { x: Math.random() * 500 + 100, y: Math.random() * 400 + 100 }, data: { label }, type: 'default', style: nodeStyle }));
};
// ...existing code...

  return (
    <div className="h-screen w-full bg-[#020202] flex flex-col overflow-hidden font-mono text-white relative">
      
      {/* 1. TOP CONTROL CONSOLE */}
      <header className="h-20 border-b border-white/5 flex items-center justify-between px-10 bg-black/40 backdrop-blur-xl z-50">
        <div className="flex items-center gap-4">
           <Link href="/" className="bg-gradient-to-br from-orange-500 to-red-600 p-2.5 rounded-2xl text-black shadow-lg">
             <Orbit size={24}/>
           </Link>
           <h1 className="text-sm font-black uppercase tracking-[0.5em] leading-none text-white">Neural-Orbit Engine</h1>
        </div>

        <div className="flex items-center gap-4">
           <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/10">
              <button onClick={() => spawnNode('Pillar')} className="px-5 py-2 hover:bg-orange-500 hover:text-black rounded-xl text-[10px] font-black uppercase transition-all flex items-center gap-2 transition-colors"><Box size={14}/> New Pillar</button>
              <button onClick={() => spawnNode('Page')} className="px-5 py-2 hover:bg-purple-600 rounded-xl text-[10px] font-black uppercase text-slate-400 transition-all flex items-center gap-2 transition-colors"><Plus size={14}/> Add Subpage</button>
           </div>
           <button className="bg-white text-black px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-orange-500 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]">Recalculate Rank Gravity</button>
        </div>
      </header>

      <div className="flex-1 flex relative">
        {/* 2. ANALYTICS SIDEBAR */}
        <aside className="w-80 border-r border-white/5 p-8 space-y-12 bg-black/40 backdrop-blur-3xl z-10">
           <div className="space-y-6">
              <p className="text-[10px] font-black uppercase text-orange-500 tracking-[0.4em]">Audit Intelligence</p>
              <div className="bg-gradient-to-br from-white/[0.05] to-transparent p-8 rounded-[3rem] border border-white/10 relative overflow-hidden group shadow-2xl">
                 <p className="text-[10px] font-bold text-slate-500 uppercase mb-2 italic">Authority Index</p>
                 <h2 className="text-5xl font-black text-orange-500 tracking-tighter">{authority}%</h2>
                 <div className="mt-6 w-full h-1 bg-white/5 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: `${authority}%` }} className="h-full bg-gradient-to-r from-orange-500 to-purple-600 shadow-[0_0_15px_#f97316]" /></div>
              </div>
           </div>

           <div className="space-y-4">
              <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Neural Objects</p>
              {[
                { name: "Root Domain", icon: <Globe size={18}/>, color: "text-orange-500", type: "Pillar", label: "Primary Core" },
                { name: "Competitor", icon: <Share2 size={18}/>, color: "text-red-500", type: "Competitor", label: "External Pull" },
                { name: "BERT Entity", icon: <Zap size={18}/>, color: "text-yellow-400", type: "Entity", label: "Intent Node" },
              ].map(item => (
                <button key={item.name} onClick={() => spawnNode(item.type)} className="w-full flex items-center gap-4 p-5 bg-white/[0.03] border border-white/5 rounded-[2rem] hover:border-orange-500/50 hover:bg-white/[0.06] transition-all group">
                   <div className={`p-3 rounded-2xl bg-black border border-white/5 ${item.color} shadow-lg group-hover:scale-110 transition-transform`}>{item.icon}</div>
                   <div className="text-left"><p className="text-[11px] font-black uppercase tracking-tight text-slate-200">{item.name}</p><p className="text-[9px] font-bold text-slate-600 uppercase">{item.label}</p></div>
                </button>
              ))}
           </div>
           <Link href="/auth" className="flex items-center justify-center gap-3 text-slate-700 hover:text-rose-500 transition-all text-[11px] font-black uppercase tracking-[0.2em] pt-10 border-t border-white/5"><LogOut size={16}/> Terminate Session</Link>
        </aside>

        {/* 3. THE GALAXY CANVAS */}
        <main className="flex-1 bg-transparent relative">
          
          {/* --- DIGITAL ARCHITECT'S HANDBOOK (Top Right) --- */}
          <div className="absolute top-8 right-8 z-40 w-96 max-h-[80vh] overflow-y-auto no-scrollbar bg-[#0a0a0a]/90 border-2 border-orange-500/30 rounded-[3rem] backdrop-blur-2xl shadow-[0_30px_60px_-15px_rgba(249,115,22,0.2)] p-10 font-sans">
            <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
                <div className="p-3 bg-orange-500 rounded-2xl text-black shadow-lg shadow-orange-500/20"><BookOpen size={24}/></div>
                <div><h5 className="text-orange-500 font-black uppercase text-xs tracking-[0.3em]">Architect's Manual</h5><p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-1">v1.0.4 - Logic Only</p></div>
            </div>
            
            <div className="space-y-8">
                <div><h6 className="text-[10px] font-black text-white uppercase tracking-widest mb-4 flex items-center gap-2"><ChevronRight size={12} className="text-orange-500"/> I. Neural Origins</h6><p className="text-[12px] text-slate-400 leading-relaxed font-medium">Click **Root Domain** in the sidebar to spawn your Pillar Page. This is your SEO Sun.</p></div>
                <div><h6 className="text-[10px] font-black text-white uppercase tracking-widest mb-4 flex items-center gap-2"><ChevronRight size={12} className="text-orange-500"/> II. Authority Flow</h6><p className="text-[12px] text-slate-400 leading-relaxed font-medium">Connect Satellites to the Root. Drag handles to draw **Authority Flow** lines.</p></div>
                <div><h6 className="text-[10px] font-black text-white uppercase tracking-widest mb-4 flex items-center gap-2"><ChevronRight size={12} className="text-orange-500"/> III. BERT Pulsars</h6><p className="text-[12px] text-slate-400 leading-relaxed font-medium">Deploy **BERT Entities** (Yellow) to check intent matching scores.</p></div>
            </div>
            <div className="mt-10 p-5 bg-orange-500/5 border border-orange-500/10 rounded-2xl italic text-[11px] text-orange-500 font-bold text-center uppercase tracking-widest">Goal: Reach 100% Gravity</div>
          </div>

          {/* Canvas Starfield */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
             {[...Array(40)].map((_, i) => (<div key={i} className="absolute bg-white rounded-full animate-pulse" style={{ width: '2px', height: '2px', top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }} />))}
          </div>

          <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect} fitView>
            <Background color="#111" gap={50} size={1} />
            <Controls className="bg-black border border-white/10 rounded-2xl m-6 p-2 shadow-2xl text-white" />
            <MiniMap style={{ background: '#000', border: '1px solid #222', borderRadius: '20px' }} nodeColor={(n) => n.id === '1' ? '#f97316' : '#a855f7'} maskColor="rgba(0, 0, 0, 0.8)"/>
          </ReactFlow>

          {/* HUD STATUS */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-black/60 text-white px-12 py-7 rounded-[4rem] shadow-2xl flex items-center gap-16 border border-white/5 backdrop-blur-3xl z-40">
             <div className="text-center"><p className="text-[9px] font-black uppercase text-slate-500 tracking-widest mb-1">Crawl Status</p><div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-orange-500 animate-ping" /><p className="text-sm font-black italic">OPTIMIZED</p></div></div>
             <div className="w-[1px] h-10 bg-white/10" /><div className="text-center"><p className="text-[9px] font-black uppercase text-slate-500 tracking-widest mb-1">Link Juice</p><p className="text-sm font-black italic text-orange-500 uppercase tracking-tighter">Max Flux</p></div>
             <div className="w-[1px] h-10 bg-white/10" /><div className="text-center"><p className="text-[9px] font-black uppercase text-slate-500 tracking-widest mb-1">Entities</p><p className="text-sm font-black italic text-purple-400 uppercase tracking-tighter">{nodes.length} Synced</p></div>
          </div>
        </main>
      </div>
    </div>
  );
}
