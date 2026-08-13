import { useTheme } from '../context/ThemeContext'

export default function SellPage(){
  const { isDark } = useTheme()
  return (
    <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16">
      <h1 className="serif text-5xl">Sell with Elite PriMa</h1>
      <p className="mt-4 max-w-2xl text-brick-muted">Valuation to closing. We photograph, list, verify title, and handle WhatsApp enquiries directly.</p>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <div className={`rounded-[24px] p-6 border ${isDark? 'bg-[#071726] border-white/10 text-white' : 'bg-white border-black/5'}`}><h3 className="font-bold">1. Valuation</h3><p className="mt-2 text-sm text-brick-muted">Free market valuation within 24h</p></div>
        <div className={`rounded-[24px] p-6 border ${isDark? 'bg-[#071726] border-white/10 text-white' : 'bg-white border-black/5'}`}><h3 className="font-bold">2. Listing</h3><p className="mt-2 text-sm text-brick-muted">Professional photos + verified badge</p></div>
        <div className={`rounded-[24px] p-6 border ${isDark? 'bg-[#071726] border-white/10 text-white' : 'bg-white border-black/5'}`}><h3 className="font-bold">3. Closing</h3><p className="mt-2 text-sm text-brick-muted">Direct negotiation, no spam</p></div>
      </div>
    </div>
  )
}