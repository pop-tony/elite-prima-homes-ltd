import { agents } from '../lib/mockData'
import { useTheme } from '../context/ThemeContext'

export default function AgentsPage(){
  const { isDark } = useTheme()
  return (
    <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16">
      <h1 className="serif text-5xl">Agents</h1>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {agents.map(a=>
          <div key={a.id} className={`rounded-[24px] p-6 text-center border ${isDark? 'bg-[#071726] border-white/10 text-white' : 'bg-white border-black/5'}`}>
            <div className="h-20 w-20 mx-auto rounded-full bg-brick-offwhite overflow-hidden"><img src={a.image} alt={a.name} className="h-full w-full object-cover" /></div>
            <h3 className="mt-4 font-bold">{a.name}</h3>
            <p className="text-xs text-brick-muted">{a.role}</p>
            <a href={`tel:${a.phone}`} className="mt-4 inline-flex rounded-full bg-brick-black text-white px-4 py-2 text-[11px] uppercase font-bold tracking-widest">{a.phone}</a>
          </div>
        )}
      </div>
    </div>
  )
}