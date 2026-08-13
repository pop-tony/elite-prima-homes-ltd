
import { useTheme } from '../../context/ThemeContext'

export default function Button({children, variant='primary', className='', ...props}){
  const { isDark } = useTheme()
  const base="inline-flex items-center justify-center rounded-full font-bold text-[11px] tracking-[0.18em] uppercase transition-all active:scale-[0.98] transition-luxe"
  const map={
    primary:"bg-brick-black text-white hover:bg-brick-gold px-6 py-3.5",
    ghost: isDark? 'bg-white/5 backdrop-blur border border-white/10 text-white hover:bg-white/10 px-6 py-3.5' : 'bg-white/80 backdrop-blur border border-black/5 hover:bg-white px-6 py-3.5',
    gold:"bg-brick-gold text-white hover:bg-brick-black px-6 py-3.5"
  }
  return <button className={`${base} ${map[variant]||map.primary} ${className}`} {...props}>{children}</button>
}
