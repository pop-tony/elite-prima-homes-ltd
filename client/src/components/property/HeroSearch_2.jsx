
import { useState } from 'react'
import { Search } from 'lucide-react'
import heroBg from '../../assets/hero-bg.webp'

export default function HeroSearch({ onSearch } ){
  const [q,setQ]=useState({location:'', type:'', budget:''})
  return (
    <section className="relative overflow-hidden px-6 md:px-8 py-14 md:py-24">
      {/* Classy BG Image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Elite PriMa Homes" className="h-full w-full object-cover"/>
        <div className="absolute inset-0 bg-[#F6F1E8]/85 dark:bg-[#081714]/80 backdrop-blur-[1px]"/>
        <div className="absolute inset-0 bg-gradient-to-b from-[#F6F1E8]/40 via-transparent to-[#F6F1E8] dark:from-[#081714]/20 dark:via-transparent dark:to-[#081714]"/>
      </div>

      <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        <div>
          <p className="text-[#B78A4A] text-[11px] tracking-[0.35em] uppercase font-black">ELITE PRIMA HOMES LTD • Accra</p>
          <h1 className="serif mt-4 text-[48px] md:text-[84px] leading-[0.9] tracking-[-0.03em] text-[#081714] dark:text-white">Find a<br/><span className="italic font-light">quieter</span><br/>way home.</h1>
          <p className="mt-6 max-w-[46ch] text-[15px] leading-7 text-black/60 dark:text-white/70">Elite PriMa Homes Ltd presents cleanly listed homes, verified titles, and direct WhatsApp viewings. No spam, no clutter.</p>
          <div className="mt-8 flex gap-3">
            <div className="rounded-full bg-[#081714] text-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em]">Verified Titles</div>
            <div className="rounded-full bg-white/80 backdrop-blur border px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em]">Private Viewings</div>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-[32px] bg-white/90 dark:bg-white/5 p-3 md:p-4 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.35)] border border-white/60 dark:border-white/10 backdrop-blur-xl">
            <div className="rounded-[24px] overflow-hidden bg-[#F6F1E8]/90 dark:bg-[#081714]/90 p-6 md:p-8">
              <div className="grid gap-4">
                <label className="text-[10px] uppercase tracking-[0.25em] font-black text-black/40 dark:text-white/40">Search Elite PriMa</label>
                <div className="grid gap-3">
                  <input value={q.location} onChange={e=>setQ({{...q, location:e.target.value}})} placeholder="Location — e.g. Lakeside" className="w-full rounded-full bg-white dark:bg-white/10 px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-[#B78A4A]/20"/>
                  <div className="grid grid-cols-2 gap-3">
                    <select value={q.type} onChange={e=>setQ({{...q, type:e.target.value}})} className="rounded-full bg-white dark:bg-white/10 px-5 py-4 text-sm outline-none"><option value="">Any Type</option><option>House</option><option>Apartment</option><option>Studio</option></select>
                    <select value={q.budget} onChange={e=>setQ({{...q, budget:e.target.value}})} className="rounded-full bg-white dark:bg-white/10 px-5 py-4 text-sm outline-none"><option value="">Any Budget</option><option value="low">Under $2k</option><option value="mid">$2k - $200k</option><option value="high">$200k+</option></select>
                  </div>
                </div>
                <button onClick={()=>onSearch?.(q)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#081714] px-6 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-white hover:bg-[#B78A4A] transition">Search Properties <Search size={16}/></button>
                <p className="text-center text-[11px] text-black/40 dark:text-white/40">Elite PriMa — 400+ homes • Updated today</p>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -z-10 -right-10 -top-10 h-[300px] w-[300px] rounded-full bg-[#B78A4A]/20 blur-[60px]"/>
        </div>
      </div>
    </section>
  )
}
