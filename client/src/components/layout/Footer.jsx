
import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

export default function Footer(){
  const { isDark } = useTheme()
  return (
    <footer className={`mt-24 transition-colors ${isDark? 'bg-[#081A33] text-white border-t border-white/10' : 'bg-white border-t border-black/5 text-[#081714]'}`}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2.5">
            <div className={`h-9 w-9 rounded-full grid place-items-center font-serif font-bold ${isDark? 'bg-white text-brick-black' : 'bg-brick-black text-white'}`}>EP</div>
            <div className="leading-[0.9]"><div className="font-black text-[13px]">ELITE PRIMA</div><div className="text-brick-gold text-[9px] tracking-[0.28em] font-black">HOMES LTD</div></div>
          </div>
          <p className={`${isDark? 'mt-4 text-white/60' : 'mt-4 text-black/60'} text-sm leading-6 max-w-[30ch]`}>Elite PriMa Homes Ltd — quieter, more personal real estate across Accra. Verified titles, direct WhatsApp viewings.</p>
        </div>
        <div><p className="text-[11px] tracking-[0.3em] uppercase font-black text-brick-gold">Explore</p><div className={`mt-4 grid gap-2 text-sm ${isDark? 'text-white/70' : 'text-black/70'}`}><Link to="/properties" className={`hover:${isDark? 'text-white' : 'text-black'}`}>Properties</Link><Link to="/developments" className={`hover:${isDark? 'text-white' : 'text-black'}`}>Developments</Link><Link to="/agents" className={`hover:${isDark? 'text-white' : 'text-black'}`}>Agents</Link></div></div>
        <div><p className="text-[11px] tracking-[0.3em] uppercase font-black text-brick-gold">Company</p><div className={`mt-4 grid gap-2 text-sm ${isDark? 'text-white/70' : 'text-black/70'}`}><Link to="/about" className={`hover:${isDark? 'text-white' : 'text-black'}`}>About</Link><Link to="/careers" className={`hover:${isDark? 'text-white' : 'text-black'}`}>Careers</Link><Link to="/contact" className={`hover:${isDark? 'text-white' : 'text-black'}`}>Contact</Link></div></div>
        <div><p className="text-[11px] tracking-[0.3em] uppercase font-black text-brick-gold">Get in touch</p><p className={`mt-4 text-sm ${isDark? 'text-white/70' : 'text-black/70'}`}>Lakeside Estate, Accra<br/>+233 24 123 4567<br/>hello@eliteprimahomes.com</p></div>
      </div>
      <div className={`py-6 text-center text-[11px] tracking-[0.2em] uppercase ${isDark? 'text-white/30 border-t border-white/10' : 'text-black/30 border-t border-black/5'}`}>© 2026 Elite PriMa Homes Ltd — Accra, Ghana</div>
    </footer>
  )
}
