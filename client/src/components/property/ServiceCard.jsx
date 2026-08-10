
import { ArrowUpRight } from 'lucide-react'
export default function ServiceCard({icon:Icon, title, desc}){
  return (
    <div className="group rounded-[28px] border border-black/5 bg-white p-6 transition-luxe hover:-translate-y-1 hover:shadow-luxe">
      <div className="flex items-start justify-between">
        <div className="grid h-11 w-11 place-items-center rounded-full bg-brick-offwhite text-brick-black"><Icon size={18}/></div>
        <div className="grid h-8 w-8 place-items-center rounded-full bg-brick-black text-white opacity-0 group-hover:opacity-100 transition-luxe"><ArrowUpRight size={14}/></div>
      </div>
      <h3 className="mt-5 serif text-[20px] text-brick-black">{title}</h3>
      <p className="mt-2 text-[13px] leading-6 text-brick-muted">{desc}</p>
    </div>
  )
}
