import { useTheme } from '../context/ThemeContext'

export default function AboutPage(){
  const { isDark } = useTheme()
  return (
    <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16">
      <h1 className="serif text-5xl">About Elite PriMa Homes Ltd</h1>
      <p className="mt-6 max-w-2xl leading-7 text-brick-muted">We are a quieter, more personal real estate company based in Lakeside Estate, Accra. We focus on verified titles, clean presentation, and direct WhatsApp communication. No spam, no clutter.</p>
      <div className="mt-10 grid md:grid-cols-3 gap-6 text-sm">
        <div className={`rounded-[24px] p-6 border ${isDark?'bg-[#071726] border-white/10 text-white':'bg-white border-black/5'}`}>Founded in Accra, serving Lakeside, East Legon, Cantonments, Trasacco.</div>
        <div className={`rounded-[24px] p-6 border ${isDark?'bg-[#071726] border-white/10 text-white':'bg-white border-black/5'}`}>400+ homes listed, 12+ years combined experience.</div>
        <div className={`rounded-[24px] p-6 border ${isDark?'bg-[#071726] border-white/10 text-white':'bg-white border-black/5'}`}>Verified titles only, private viewings within 24h.</div>
      </div>
    </div>
  )
}