
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useState } from 'react'

const links=[
  {label:'Properties', to:'/properties'},
  {label:'Developments', to:'/developments'},
  {label:'Sell', to:'/sell'},
  {label:'Manage', to:'/manage'},
  {label:'Agents', to:'/agents'},
  {label:'About', to:'/about'},
]

export default function Navbar(){
  const {isDark,toggle}=useTheme()
  const [open,setOpen]=useState(false)
  const loc=useLocation()
  return (
    <header className="sticky top-0 z-50 border-b border-brick-subtle/50 bg-brick-offwhite/80 backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-brick-black/80">
      <div className="mx-auto max-w-[1400px] px-6 md:px-8 h-[72px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-full bg-brick-black text-white grid place-items-center font-serif text-[15px] font-bold">EP</div>
          <div className="leading-[0.9]">
            <div className="font-black tracking-[-0.02em] text-[13px] text-brick-black dark:text-white">ELITE PRIMA</div>
            <div className="text-brick-gold text-[9px] tracking-[0.28em] font-black">HOMES LTD</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-1 rounded-full bg-white/70 p-1 border border-black/5 shadow-sm transition-colors dark:bg-white/5 dark:border-white/10">
          {links.map(l=>(
            <Link key={l.to} to={l.to} className={`rounded-full px-4 py-2 text-[11px] font-bold tracking-[0.14em] uppercase transition-luxe ${loc.pathname===l.to?'bg-brick-black text-white dark:bg-white dark:text-brick-black':'text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white'}`}>{l.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={toggle} className="h-10 w-10 grid place-items-center rounded-full bg-white border border-black/5 transition-colors dark:bg-white/10 dark:border-white/10">{isDark?<Sun size={16}/>:<Moon size={16}/>}</button>
          <Link to="/contact" className="hidden md:inline-flex rounded-full bg-brick-black text-white px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.18em] hover:bg-brick-gold transition-luxe">Contact</Link>
          <button onClick={()=>setOpen(!open)} className="lg:hidden h-10 w-10 grid place-items-center rounded-full bg-white border transition-colors dark:bg-white/10 dark:border-white/10">{open?<X size={16}/>:<Menu size={16}/>}</button>
        </div>
      </div>
      {open && <div className="lg:hidden px-6 pb-6 grid gap-2 bg-brick-offwhite border-t border-brick-subtle transition-colors dark:bg-brick-black dark:border-white/10">{links.map(l=><Link key={l.to} to={l.to} onClick={()=>setOpen(false)} className="rounded-2xl bg-white px-5 py-4 font-bold border border-black/5 transition-colors dark:bg-white/5 dark:border-white/10 dark:text-white">{l.label}</Link>)}</div>}
    </header>
  )
}
