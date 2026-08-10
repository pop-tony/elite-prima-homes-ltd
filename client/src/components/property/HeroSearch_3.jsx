
import { useState } from 'react'
import { Search } from 'lucide-react'
import heroBg from '../../assets/hero-bg.webp'

export default function HeroSearch({ onSearch }){
  const [q,setQ]=useState({location:'', type:'', budget:''})
  return (
    <section className="relative overflow-hidden min-h-[86vh] flex items-center">
      {/* Classy BG Image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Elite PriMa Homes" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-brick-offwhite/85 dark:bg-brick-white/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-brick-white via-brick-white/70 to-brick-white/10 dark:from-brick-white dark:via-brick-white/80 dark:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brick-white via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1400px] w-full px-6 md:px-8 py-16 md:py-24 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-3 border border-brick-subtle bg-brick-white px-4 py-2">
            <span className="h-1.5 w-1.5 bg-brick-gold rounded-full animate-pulse" />
            <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-brick-muted">ELITE PRIMA HOMES LTD • Accra</span>
          </div>

          <h1 className="font-serif mt-6 text-[52px] md:text-[92px] leading-[0.88] tracking-[-0.04em] text-brick-black">
            Find a<br/><span className="italic font-light text-brick-gold">quieter</span><br/>way home.
          </h1>

          <p className="mt-6 max-w-[44ch] text-[15px] leading-[1.8] text-brick-muted">
            Elite PriMa Homes Ltd presents cleanly listed homes, verified titles, and direct WhatsApp viewings. No spam, no clutter — just personal.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            <div className="bg-brick-black text-brick-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em]">Verified Titles</div>
            <div className="bg-brick-white border border-brick-subtle px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brick-black">Private Viewings</div>
            <div className="bg-brick-card border border-brick-subtle px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brick-muted">Lakeside • East Legon</div>
          </div>
        </div>

        {/* Search Card - Sharp, Luxe */}
        <div className="relative">
          <div className="bg-brick-white border border-brick-subtle shadow-luxe p-1">
            <div className="bg-brick-card border border-brick-subtle p-7 md:p-8">
              <div className="flex items-center justify-between">
                <label className="text-[10px] uppercase tracking-[0.28em] font-bold text-brick-muted">Search Elite PriMa</label>
                <span className="text-[10px] text-brick-gold font-bold tracking-widest">400+ HOMES</span>
              </div>

              <div className="mt-6 grid gap-3">
                <div className="relative">
                  <input value={q.location} onChange={e=>setQ({...q, location:e.target.value})} placeholder="Location — e.g. Lakeside" className="w-full bg-brick-white border border-brick-subtle px-5 py-4 text-[14px] placeholder:text-brick-muted focus:border-brick-black focus:outline-none transition-luxe" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <select value={q.type} onChange={e=>setQ({...q, type:e.target.value})} className="w-full bg-brick-white border border-brick-subtle px-5 py-4 text-[13px] focus:border-brick-black focus:outline-none transition-luxe">
                    <option value="">Any Type</option><option>House</option><option>Apartment</option><option>Studio</option>
                  </select>
                  <select value={q.budget} onChange={e=>setQ({...q, budget:e.target.value})} className="w-full bg-brick-white border border-brick-subtle px-5 py-4 text-[13px] focus:border-brick-black focus:outline-none transition-luxe">
                    <option value="">Any Budget</option><option value="low">Under $2k</option><option value="mid">$2k - $200k</option><option value="high">$200k+</option>
                  </select>
                </div>
              </div>

              <button onClick={()=>onSearch?.(q)} className="mt-6 w-full inline-flex items-center justify-center gap-3 bg-brick-black text-brick-white px-6 py-4 text-[11px] font-bold uppercase tracking-[0.22em] hover:bg-brick-gold transition-luxe">
                Search Properties <Search size={14} />
              </button>

              <div className="mt-5 flex items-center justify-center gap-2 text-[10px] tracking-[0.18em] uppercase text-brick-muted">
                <span className="h-px w-8 bg-brick-subtle" /> Updated today <span className="h-px w-8 bg-brick-subtle" />
              </div>
            </div>
          </div>

          {/* Subtle gold glow behind */}
          <div className="pointer-events-none absolute -z-10 -right-12 -top-12 h-[280px] w-[280px] bg-brick-gold/10 blur-[60px]" />
        </div>
      </div>
    </section>
  )
}
