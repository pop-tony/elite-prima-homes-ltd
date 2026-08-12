
import { useState } from 'react'
import { Search } from 'lucide-react'
import heroBg from '../../assets/hero-bg.webp'

export default function HeroSearch({ onSearch }){
  const [q,setQ]=useState({location:'', type:'', budget:''})
  return (
    <section className="relative overflow-hidden px-6 md:px-8 py-14 md:py-24 transition-colors dark:bg-[#081714]">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Elite PriMa" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-brick-offwhite/85 backdrop-blur-[1px] dark:bg-[#081714]/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-brick-offwhite/40 via-transparent to-brick-offwhite dark:from-[#081714]/40 dark:to-[#081714]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-brick-subtle px-4 py-2 transition-colors dark:bg-white/5 dark:border-white/10">
            <span className="h-2 w-2 rounded-full bg-brick-gold animate-pulse" />
            <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-brick-muted dark:text-white/50">ELITE PRIMA HOMES LTD • Accra</span>
          </div>
          <h1 className="serif mt-4 text-[52px] md:text-[88px] leading-[0.9] tracking-[-0.03em] text-brick-black dark:text-white">
            Find a<br/><span className="italic font-light text-brick-gold">quieter</span><br/>way home.
          </h1>
          <p className="mt-6 max-w-[46ch] text-[15px] leading-7 text-brick-muted dark:text-white/60">Cleanly listed homes, verified titles, and direct WhatsApp viewings. No spam, no clutter.</p>
          <div className="mt-8 flex gap-2">
            <div className="rounded-full bg-brick-black text-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em]">Verified Titles</div>
            <div className="rounded-full bg-white border border-brick-subtle px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-colors dark:bg-white/5 dark:border-white/10 dark:text-white">Private Viewings</div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[32px] bg-white/90 p-3 md:p-4 shadow-luxe border border-white/60 backdrop-blur-xl transition-colors dark:bg-white/5 dark:border-white/10">
            <div className="rounded-[24px] bg-brick-offwhite/90 p-6 md:p-8 transition-colors dark:bg-[#081714]">
              <label className="text-[10px] uppercase tracking-[0.25em] font-black text-brick-muted dark:text-white/50">Search Elite PriMa</label>
              <div className="mt-4 grid gap-3">
                <input value={q.location} onChange={e=>setQ({...q, location:e.target.value})} placeholder="Location — e.g. Lakeside" className="w-full rounded-full bg-white border border-brick-subtle px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-brick-gold/20 transition-colors dark:bg-white/10 dark:border-white/10 dark:text-white" />
                <div className="grid grid-cols-2 gap-3">
                  <select value={q.type} onChange={e=>setQ({...q, type:e.target.value})} className="rounded-full bg-white border border-brick-subtle px-5 py-4 text-sm outline-none transition-colors dark:bg-white/10 dark:border-white/10 dark:text-white"><option value="">Any Type</option><option>House</option><option>Apartment</option><option>Studio</option></select>
                  <select value={q.budget} onChange={e=>setQ({...q, budget:e.target.value})} className="rounded-full bg-white border border-brick-subtle px-5 py-4 text-sm outline-none transition-colors dark:bg-white/10 dark:border-white/10 dark:text-white"><option value="">Any Budget</option><option value="low">Under $2k</option><option value="mid">$2k - $200k</option><option value="high">$200k+</option></select>
                </div>
              </div>
              <button onClick={()=>onSearch?.(q)} className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-full bg-brick-black px-6 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-white hover:bg-brick-gold transition-luxe">Search Properties <Search size={16}/></button>
              <p className="mt-4 text-center text-[11px] text-brick-muted dark:text-white/50">Elite PriMa — 400+ homes • Updated today</p>
            </div>
          </div>
          <div className="pointer-events-none absolute -z-10 -right-10 -top-10 h-[300px] w-[300px] rounded-full bg-brick-gold/20 blur-[60px]" />
        </div>
      </div>
    </section>
  )
}
