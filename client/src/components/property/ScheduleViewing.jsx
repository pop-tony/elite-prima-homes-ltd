
import { useState } from 'react'
import { useTheme } from '../../context/ThemeContext'

export default function ScheduleViewing({property}){
  const [date,setDate]=useState('')
  const { isDark } = useTheme()
  return (
    <div className={`rounded-[24px] p-6 border ${isDark? 'bg-[#071726] border-white/10 text-white' : 'bg-brick-card border-black/5'}`}>
      <h3 className="serif text-[18px]">Schedule Viewing</h3>
      <p className="mt-2 text-sm text-brick-muted">Private viewing for {property?.title}</p>
      <input type="date" value={date} onChange={e=>setDate(e.target.value)} className={`mt-4 w-full rounded-full border px-4 py-3 text-sm ${isDark? 'bg-[#0A2342] border-white/10 text-white' : 'bg-white border-brick-subtle text-[#081714]'}`} />
      <a href={`https://wa.me/233241234567?text=Hi Elite PriMa, I want to view ${property?.title} on ${date}`} target="_blank" className="mt-4 flex w-full justify-center rounded-full bg-brick-black px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-white hover:bg-brick-gold">Request via WhatsApp</a>
    </div>
  )
}
