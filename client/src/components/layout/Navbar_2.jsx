
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
    <header className="sticky top-0 z-50 border-b border-brick-subtle bg-brick-white/80 backdrop-blur-xl">
      <div className="mx-auto max-w-[1400px] px-6 md:px-8 h-[72px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-9 w-9 bg-brick-black text-brick-white grid place-items-center font-serif text-[13px] font-bold">EP</div>
          <div className="leading-[0.9]">
            <div className="font-serif font-bold tracking-[-0.02em] text-[13px] text-brick-black">ELITE PRIMA</div>
            <div className="text-brick-gold text-[9px] tracking-[0.28em] font-bold">HOMES LTD</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {links.map(l=>(
            <Link key={l.to} to={l.to} className={`text-[11px] font-medium tracking-[0.14em] uppercase transition-luxe border-b ${loc.pathname===l.to?'border-brick-black text-brick-black':'border-transparent text-brick-muted hover:text-brick-black'}`}>{l.label}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={toggle} className="h-10 w-10 grid place-items-center border border-brick-subtle bg-brick-white hover:bg-brick-card transition-luxe">
            {isDark?<Sun size={16}/>:<Moon size={16}/>}
          </button>
          <Link to="/contact" className="hidden md:inline-flex bg-brick-black text-brick-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-brick-gold transition-luxe">
            Contact
          </Link>
          <button onClick={()=>setOpen(!open)} className="lg:hidden h-10 w-10 grid place-items-center border border-brick-subtle bg-brick-white">
            {open?<X size={16}/>:<Menu size={16}/>}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-brick-subtle bg-brick-offwhite px-6 py-6 grid gap-1">
          {links.map(l=>(
            <Link key={l.to} to={l.to} onClick={()=>setOpen(false)} className="px-4 py-3 text-[12px] uppercase tracking-[0.18em] font-medium bg-brick-white border border-brick-subtle">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
