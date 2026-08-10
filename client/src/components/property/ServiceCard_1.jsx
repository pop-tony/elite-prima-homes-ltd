
import { ArrowUpRight } from 'lucide-react'
export default function ServiceCard({icon:Icon, title, desc, link}){
  return (
    <div className="group rounded-[28px] border border-black/5 dark:border-white/10 bg-white dark:bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.2)]">
      <div className="flex items-start justify-between"><div className="grid h-11 w-11 place-items-center rounded-full bg-[#F6F1E8] dark:bg-white/10 text-[#081714] dark:text-white"><Icon size={18}/></div><div className="grid h-8 w-8 place-items-center rounded-full bg-[#081714] text-white opacity-0 group-hover:opacity-100 transition"><ArrowUpRight size={14}/></div></div>
      <h3 className="mt-5 serif text-[20px] text-[#081714] dark:text-white">{title}</h3>
      <p className="mt-2 text-[13px] leading-6 text-black/55 dark:text-white/55">{desc}</p>
    </div>
  )
}
