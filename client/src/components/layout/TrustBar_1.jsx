
export default function TrustBar(){
  const stats=[{k:'12+ Years', v:'in Accra market'},{k:'400+ Homes', v:'listed & managed'},{k:'Verified', v:'titles only'},{k:'24h', v:'viewing response'}]
  return (
    <div className="border-y border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/[0.02] backdrop-blur">
      <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-4 flex flex-wrap gap-6 md:gap-10 justify-between">
        {stats.map(s=><div key={s.k} className="flex items-baseline gap-2"><span className="serif text-[18px] text-[#081714] dark:text-white">{s.k}</span><span className="text-[11px] uppercase tracking-[0.2em] text-black/40 dark:text-white/40">{s.v}</span></div>)}
      </div>
    </div>
  )
}
