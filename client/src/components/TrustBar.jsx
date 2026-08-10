
import { ShieldCheck, Home, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
export default function TrustBar(){
  const { isDark } = useTheme();
  const stats=[{icon:ShieldCheck,k:'GREDA',v:'Licensed',sub:'Since 2015'},{icon:Home,k:'200+',v:'Properties',sub:'Sold in Accra'},{icon:Star,k:'Lakeside',v:'Experts',sub:'Estate Specialists'}];
  return (
    <section className={`transition-colors duration-500 ${isDark?'bg-[#0B1714]':'bg-[#F6F1E8]'}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-5 md:py-6">
        <div className={`grid grid-cols-1 md:grid-cols-3 overflow-hidden rounded-[28px] border ${isDark?'border-white/10 bg-white/5':'border-black/5 bg-white/70'}`}>
        {stats.map((s,i)=>{ const Icon=s.icon; return <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.45, delay: i * 0.08 }} className={`flex items-center gap-4 px-5 py-6 ${i!==0?'md:border-l border-t md:border-t-0':''} ${isDark?'md:border-white/10 border-white/10':'md:border-black/5 border-black/5'}`}><div className="h-11 w-11 bg-[#B78A4A] rounded-2xl flex items-center justify-center text-white shadow"><Icon className="h-5 w-5"/></div><div><p className={`font-black text-xl ${isDark?'text-white':'text-[#081714]'}`}>{s.k} <span className="font-normal opacity-70">{s.v}</span></p><p className={`text-[11px] uppercase tracking-widest font-bold ${isDark?'text-white/40':'text-black/40'}`}>{s.sub}</p></div></motion.div>})}
        </div>
      </div>
    </section>
  )
}
