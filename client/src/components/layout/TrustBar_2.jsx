
export default function TrustBar(){
  const stats=[{k:'12+ Years', v:'in Accra market'},{k:'400+ Homes', v:'listed & managed'},{k:'Verified', v:'titles only'},{k:'24h', v:'viewing response'}]
  return (
    <div className="border-y border-brick-subtle bg-brick-card">
      <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-4 flex flex-wrap gap-6 md:gap-12 justify-between">
        {stats.map(s=>(
          <div key={s.k} className="flex items-baseline gap-2.5">
            <span className="font-serif text-[17px] text-brick-black">{s.k}</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-brick-muted">{s.v}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
