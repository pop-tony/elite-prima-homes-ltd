
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useState } from 'react'
const links = [
  {label:'Properties', to:'/properties'},
  {label:'Developments', to:'/developments'},
  {label:'Sell', to:'/sell'},
  {label:'Manage', to:'/manage'},
  {label:'Agents', to:'/agents'},
  {label:'About', to:'/about'},
]
export default function Navbar(){
  const {isDark, toggle} = useTheme()
  const [open,setOpen]=useState(false)
  const loc=useLocation()
  return (
    <header className={`sticky top-0 z-50 border-b ${isDark?'bg-[#081714]/80 border-white/10':'bg-[#F6F1E8]/80 border-black/5'} backdrop-blur-xl`}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-8 h-[72px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-full bg-[#081714] text-white grid place-items-center font-serif text-[15px] font-bold tracking-[-0.05em]">EP</div>
          <div className="leading-[0.9]">
            <div className={`font-black tracking-[-0.02em] text-[13px] ${isDark?'text-white':'text-[#081714]'}`}>ELITE PRIMA</div>
            <div className="text-[#B78A4A] text-[9px] tracking-[0.28em] font-black">HOMES LTD</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-1 rounded-full bg-white/70 dark:bg-white/5 p-1 border border-black/5 dark:border-white/10">
          {links.map(l=>(
            <Link key={l.to} to={l.to} className={`rounded-full px-4 py-2 text-[11px] font-bold tracking-[0.14em] uppercase transition ${loc.pathname===l.to?'bg-[#081714] text-white':'text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white'}`}>{l.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={toggle} className="h-10 w-10 grid place-items-center rounded-full bg-white dark:bg-white/10 border border-black/5 dark:border-white/10">{isDark?<Sun size={16}/>:<Moon size={16}/>}</button>
          <Link to="/contact" className="hidden md:inline-flex rounded-full bg-[#081714] text-white px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.18em] hover:bg-[#B78A4A]">Contact</Link>
          <button onClick={()=>setOpen(!open)} className="lg:hidden h-10 w-10 grid place-items-center rounded-full bg-white border">{open?<X size={16}/>:<Menu size={16}/>}</button>
        </div>
      </div>
      {open && <div className="lg:hidden px-6 pb-6 grid gap-2 bg-[#F6F1E8] dark:bg-[#081714]">{links.map(l=><Link key={l.to} to={l.to} onClick={()=>setOpen(false)} className="rounded-2xl bg-white dark:bg-white/5 px-5 py-4 font-bold">{l.label}</Link>)}</div>}
    </header>
  )
}
