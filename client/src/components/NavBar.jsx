import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/logo.webp';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'Developments', path: '/developments' },
    { name: 'Sell', path: '/sell' },
    { name: 'Manage', path: '/manage' },
    { name: 'Agents', path: '/agents' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="fixed top-0 z-50 w-full p-4 md:p-5">

      <nav className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 md:px-5 md:py-4 transition-all duration-500 ${
        scrolled ? 'shadow-[0_18px_45px_-20px_rgba(8,23,20,0.25)] backdrop-blur-2xl' : ''
      } ${isDark
       ? 'bg-[#0B1714]/85 border-white/10'
        : 'bg-[rgba(246,241,232,0.82)] border-black/5'}`}>
        <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to="/" className="flex items-center gap-3">
          <div className={`h-11 w-11 rounded-2xl p-1.5 flex items-center justify-center shadow-sm transition-colors duration-500 ${isDark? 'bg-white' : 'bg-[#0B1714]'}`}>
            <img src={logo} alt="Elite PriMa Homes Ltd" className="h-full w-full object-contain" />
          </div>
          <div className="leading-[0.9]">
            <p className={`font-black text-sm tracking-[0.18em] transition-colors ${isDark? 'text-white' : 'text-[#081714]'}`}>ELITE PRIMA</p>
            <p className={`text-[10px] tracking-[0.3em] font-bold uppercase transition-colors ${isDark? 'text-white/55' : 'text-black/45'}`}>Homes Ltd</p>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {links.map(l => (
            <NavLink onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} key={l.name} to={l.path} className={({isActive}) =>
              `text-sm font-semibold transition-colors ${isActive? 'text-[#B78A4A] font-black' : isDark? 'text-white/70 hover:text-white' : 'text-black/55 hover:text-[#081714]'}`}>
              {l.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} className={`h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 ${isDark? 'bg-white/10 text-white hover:bg-white/20' : 'bg-black/5 text-[#081714] hover:bg-black/10'}`}>
            {isDark? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a href="tel:+233598052702" className="hidden md:flex items-center gap-2 bg-[#B78A4A] px-5 py-3 text-xs font-black uppercase tracking-[0.24em] text-white hover:bg-[#A27135] rounded-full shadow transition-colors">
            <Phone className="h-3.5 w-3.5" /> Call
          </a>
          <button onClick={() => setOpen(!open)} className={`lg:hidden p-2.5 rounded-full transition-colors ${isDark? 'text-white hover:bg-white/10' : 'text-[#081714] hover:bg-black/5'}`}>
            {open? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className={`mt-3 lg:hidden rounded-3xl border px-4 py-6 transition-colors ${isDark? 'bg-[#0B1714] border-white/10' : 'bg-[rgba(246,241,232,0.98)] border-black/5'}`}>
          {links.map(l => (
            <NavLink key={l.name} to={l.path} onClick={()=>setOpen(false)} className={({isActive})=>`block py-4 border-b text-sm transition-colors ${isDark? 'border-white/10' : 'border-black/5'} ${isActive?'text-[#B78A4A] font-black': isDark?'text-white/80':'text-black/60'}`}>{l.name}</NavLink>
          ))}
          <div className="mt-4 flex gap-3">
            <button onClick={toggleTheme} className={`flex-1 py-3 rounded-full text-xs font-black uppercase flex items-center justify-center gap-2 transition-colors ${isDark? 'bg-white/10 text-white' : 'bg-black/5 text-[#081714]'}`}>{isDark? <><Sun className="h-4 w-4"/> Light</> : <><Moon className="h-4 w-4"/> Dark</>}</button>
            <a href="tel:+233598052702" className="flex-1 bg-[#B78A4A] py-3 rounded-full text-xs font-black uppercase text-white text-center">Call</a>
          </div>
        </div>
      )}
    </header>
  );
}