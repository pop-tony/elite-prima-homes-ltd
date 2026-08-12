
export default function TrustBar(){
  const stats=[
    {k:'12+ Years', v:'in Accra market'},
    {k:'400+ Homes', v:'listed & managed'},
    {k:'Verified', v:'titles only'},
    {k:'24h', v:'viewing response'}
  ]
  return (
    <div className="border-y border-brick-subtle/60 bg-white/60 backdrop-blur transition-colors dark:border-white/10 dark:bg-white/[0.03]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-4 flex flex-wrap gap-6 md:gap-10 justify-between">
        {stats.map(s=><div key={s.k} className="flex items-baseline gap-2"><span className="serif text-[18px] text-brick-black dark:text-white">{s.k}</span><span className="text-[11px] uppercase tracking-[0.2em] text-brick-muted dark:text-white/45">{s.v}</span></div>)}
      </div>
    </div>
  )
}
