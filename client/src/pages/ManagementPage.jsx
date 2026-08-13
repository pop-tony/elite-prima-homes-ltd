import { useTheme } from '../context/ThemeContext'

export default function ManagementPage(){
  const { isDark } = useTheme()
  return (
    <div className={`mx-auto max-w-[1400px] px-6 md:px-8 py-16 transition-colors ${isDark? 'text-white' : 'text-brick-charcoal'}`}>
      <h1 className="serif text-5xl">Property Management</h1>
      <p className={`${isDark? 'mt-4 max-w-2xl text-white/80' : 'mt-4 max-w-2xl text-brick-muted'}`}>For landlords & diaspora — 10% monthly. Rent collection, maintenance, and WhatsApp reporting.</p>
      <div className={`mt-8 rounded-[24px] p-8 ${isDark? 'bg-[#071726] border border-white/10 text-white' : 'bg-white border border-black/5 text-[#081714]'}`}>
        <p className="text-brick-gold text-[11px] uppercase tracking-widest font-bold">Elite PriMa Promise</p>
        <p className="serif text-2xl mt-3">We manage like owners, not agents.</p>
      </div>
    </div>
  )
}