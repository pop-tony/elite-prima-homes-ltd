
import { useState } from 'react'
export default function ScheduleViewing({property}){
  const [date,setDate]=useState('')
  return (
    <div className="rounded-[24px] border border-black/5 bg-brick-card p-6">
      <h3 className="serif text-[18px]">Schedule Viewing</h3>
      <p className="mt-2 text-sm text-brick-muted">Private viewing for {property?.title}</p>
      <input type="date" value={date} onChange={e=>setDate(e.target.value)} className="mt-4 w-full rounded-full border border-brick-subtle bg-white px-4 py-3 text-sm" />
      <a href={`https://wa.me/233241234567?text=Hi Elite PriMa, I want to view ${property?.title} on ${date}`} target="_blank" className="mt-4 flex w-full justify-center rounded-full bg-brick-black px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-white hover:bg-brick-gold">Request via WhatsApp</a>
    </div>
  )
}
