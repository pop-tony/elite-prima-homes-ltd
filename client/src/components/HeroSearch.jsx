
import { Search, MapPin, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/logo.webp';

const LIGHT_BG = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940";
const DARK_BG = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2940";

export default function HeroSearch(){
  const [status,setStatus]=useState('Buy');
  const [location,setLocation]=useState('');
  const [type,setType]=useState('');
  const navigate=useNavigate();
  const { isDark } = useTheme();

  const handleSearch=()=>{
    const params=new URLSearchParams();
    if(status!=='Buy') params.set('status',status.toLowerCase());
    if(location) params.set('location',location.toLowerCase().replace(' ','-'));
    if(type) params.set('type',type.toLowerCase());
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <section className={`relative pt-[108px] overflow-hidden transition-colors duration-700 ${isDark?'bg-[#081714]':'bg-[#F6F1E8]'}`}>

      {/* BACKGROUND - INCREASED VISIBILITY */}
      <div className="absolute inset-0">
        <img
          src={LIGHT_BG}
          alt="light"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${isDark? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          src={DARK_BG}
          alt="dark"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${isDark? 'opacity-100' : 'opacity-0'}`}
        />

        {/* WAS REDUCED FROM 85/80 TO 55/45 SO IMAGE SHOWS MORE */}
        <div className={`absolute inset-0 transition-colors duration-700 ${isDark? 'bg-[#081714]/58' : 'bg-[#F6F1E8]/42'}`} />

        <div className={`absolute inset-0 transition-colors duration-700 bg-gradient-to-br ${isDark? 'from-[#081714]/90 via-[#081714]/52 to-transparent' : 'from-[#F6F1E8]/92 via-[#F6F1E8]/48 to-transparent'}`} />

        <div className={`absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(183,138,74,0.20),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(8,23,20,0.12),transparent_28%)]`} />
      </div>

      {/* CONTENT */}
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-10 md:py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: 'easeOut' }} className="max-w-2xl">
          <div className={`inline-flex items-center gap-2 border px-4 py-2 rounded-full transition-all duration-500 ${isDark?'bg-white/8 border-white/10':'bg-white/75 border-black/5 shadow-sm'}`}>
            <Sparkles className="h-3.5 w-3.5 text-[#B78A4A]" />
            <p className="text-[#B78A4A] text-[10px] tracking-[0.28em] uppercase font-black">Lakeside Estate • GREDA Licensed</p>
          </div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }} className={`mt-6 font-black text-4xl md:text-5xl lg:text-7xl leading-[0.9] transition-colors duration-500 ${isDark?'text-white':'text-[#081714]'}`}>
            Spaces shaped for<br/><span className="text-[#B78A4A]">modern living</span><br/>and calm ownership.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.14, ease: 'easeOut' }} className={`mt-5 max-w-xl text-sm md:text-base leading-7 transition-colors duration-500 ${isDark?'text-white/62':'text-black/58'}`}>
            Elite PriMa Homes Ltd curates premium property experiences across Accra with verified titles, clean design, and a more personal advisory approach.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-3">
            {['Private listings', 'Tailored search', 'Direct support'].map(label => (
              <span key={label} className={`rounded-full border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] ${isDark ? 'border-white/10 bg-white/5 text-white/70' : 'border-black/5 bg-white/70 text-black/55'}`}>{label}</span>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.7, delay: 0.18, ease: 'easeOut' }} className={`mt-8 rounded-[28px] border p-3 md:p-4 transition-all duration-500 ${isDark?'bg-white/6 backdrop-blur-xl border-white/10 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)]':'bg-white/80 backdrop-blur-xl border-black/5 shadow-[0_24px_60px_-20px_rgba(8,23,20,0.12)]'}`}>
            <div className="grid gap-3 md:grid-cols-[0.8fr_1.2fr_0.8fr_auto]">
              <select value={status} onChange={e=>setStatus(e.target.value)} className={`h-12 md:h-14 w-full rounded-2xl border px-4 text-sm font-semibold outline-none transition-colors ${isDark?'bg-white/5 border-white/10 text-white':'bg-[#F6F1E8] border-black/5 text-[#081714]'}`}>
                <option>Buy</option><option>Rent</option><option>New Builds</option>
              </select>

              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#B78A4A]"/>
                <input value={location} onChange={e=>setLocation(e.target.value)} placeholder="Search area or title" className={`h-12 md:h-14 w-full rounded-2xl border pl-11 pr-4 text-sm outline-none transition-colors ${isDark?'bg-white/5 border-white/10 text-white placeholder:text-white/40':'bg-[#F6F1E8] border-black/5 text-[#081714] placeholder:text-black/35'}`} />
              </div>

              <select value={type} onChange={e=>setType(e.target.value)} className={`h-12 md:h-14 w-full rounded-2xl border px-4 text-sm outline-none transition-colors ${isDark?'bg-white/5 border-white/10 text-white':'bg-[#F6F1E8] border-black/5 text-[#081714]'}`}>
                <option value="">Type</option><option>Apartment</option><option>House</option><option>Land</option>
              </select>

              <button onClick={handleSearch} className="h-12 md:h-14 flex items-center justify-center gap-2 bg-[#B78A4A] px-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.22em] text-white hover:bg-[#A27135] transition-colors shrink-0">
                <Search className="h-4 w-4"/> Search
              </button>
            </div>
          </motion.div>

          <div className={`mt-6 flex flex-wrap gap-5 text-sm transition-colors ${isDark?'text-white/52':'text-black/50'}`}>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-[#B78A4A]"/>Verified Titles</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-[#B78A4A]"/>Titled Land</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-[#B78A4A]"/>Installment Plans</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75, delay: 0.18, ease: 'easeOut' }} className="relative hidden lg:block">
          <div className={`relative overflow-hidden rounded-[32px] border p-4 shadow-2xl transition-colors duration-500 ${isDark?'bg-[#0E1E1A] border-white/10':'bg-white border-black/5'}`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(183,138,74,0.24),transparent_28%)]" />
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-[26px] bg-[#081714]">
                <motion.img src={logo} animate={{ y: [0, -6, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="h-72 w-full object-cover opacity-95" alt="Elite PriMa Homes Ltd"/>
              </div>
              <div className={`grid grid-cols-2 gap-4 ${isDark?'text-white':'text-[#081714]'}`}>
                <div className={`rounded-3xl p-4 ${isDark?'bg-white/5':'bg-[#F6F1E8]'}`}>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#B78A4A] font-black">Prime Pick</p>
                  <p className="mt-2 font-serif text-2xl leading-tight">Cantonments penthouse with skyline views</p>
                </div>
                <div className={`rounded-3xl p-4 ${isDark?'bg-white/5':'bg-[#F6F1E8]'}`}>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#B78A4A] font-black">Fast Track</p>
                  <p className="mt-2 text-sm leading-6">Book a private viewing or ask us to shortlist options for you.</p>
                </div>
              </div>
            </div>
            <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-[10px] font-black uppercase tracking-[0.28em] text-[#081714] shadow-lg">Private advisory</div>
            <div className="absolute bottom-4 right-4 rounded-full bg-[#B78A4A] px-4 py-2 text-[10px] font-black uppercase tracking-[0.28em] text-white shadow-lg">Since 2015</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}