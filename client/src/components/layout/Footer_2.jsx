
import { Link } from 'react-router-dom'
export default function Footer(){
  return (
    <footer className="bg-brick-black text-brick-white mt-24">
      <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 grid md:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 bg-brick-white text-brick-black grid place-items-center font-serif font-bold">EP</div>
            <div className="leading-[0.9]"><div className="font-serif font-bold text-[13px]">ELITE PRIMA</div><div className="text-brick-gold text-[9px] tracking-[0.28em] font-bold">HOMES LTD</div></div>
          </div>
          <p className="mt-5 text-brick-muted text-sm leading-6 max-w-[32ch]">Elite PriMa Homes Ltd — quieter, more personal real estate across Accra. Verified titles, direct communication.</p>
        </div>
        <div><p className="text-[11px] tracking-[0.3em] uppercase font-bold text-brick-gold">Explore</p><div className="mt-5 grid gap-2.5 text-sm text-white/60"><Link to="/properties" className="hover:text-white">Properties</Link><Link to="/developments" className="hover:text-white">Developments</Link><Link to="/agents" className="hover:text-white">Agents</Link></div></div>
        <div><p className="text-[11px] tracking-[0.3em] uppercase font-bold text-brick-gold">Company</p><div className="mt-5 grid gap-2.5 text-sm text-white/60"><Link to="/about" className="hover:text-white">About</Link><Link to="/careers" className="hover:text-white">Careers</Link><Link to="/contact" className="hover:text-white">Contact</Link></div></div>
        <div><p className="text-[11px] tracking-[0.3em] uppercase font-bold text-brick-gold">Get in touch</p><p className="mt-5 text-sm leading-6 text-white/60">Lakeside Estate, Accra<br/>+233 24 123 4567<br/>hello@eliteprimahomes.com</p></div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-[10px] tracking-[0.25em] uppercase text-white/30">© 2026 Elite PriMa Homes Ltd — Accra, Ghana</div>
    </footer>
  )
}
