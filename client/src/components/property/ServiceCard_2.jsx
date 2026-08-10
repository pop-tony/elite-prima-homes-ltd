
import { ArrowUpRight } from 'lucide-react'
export default function ServiceCard({icon:Icon, title, desc}){
  return (
    <div className="group bg-brick-white border border-brick-subtle p-6 hover:shadow-luxe transition-luxe">
      <div className="flex items-start justify-between">
        <div className="grid h-11 w-11 place-items-center bg-brick-card border border-brick-subtle text-brick-black"><Icon size={18}/></div>
        <div className="grid h-7 w-7 place-items-center bg-brick-black text-brick-white opacity-0 group-hover:opacity-100 transition-luxe"><ArrowUpRight size={12}/></div>
      </div>
      <h3 className="mt-6 font-serif text-[20px] text-brick-black">{title}</h3>
      <p className="mt-2 text-[13px] leading-6 text-brick-muted">{desc}</p>
      <div className="mt-5 h-px w-full bg-brick-subtle group-hover:bg-brick-gold transition-luxe" />
    </div>
  )
}
