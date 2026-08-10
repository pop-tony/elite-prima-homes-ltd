
import HeroSearch from '../components/property/HeroSearch'
import PropertyCard from '../components/property/PropertyCard'
import ServiceCard from '../components/property/ServiceCard'
import TrustBar from '../components/layout/TrustBar'
import { Building2, Key, Hammer, ClipboardList, ArrowRight } from 'lucide-react'
import { properties } from '../lib/mockData'
import { Link } from 'react-router-dom'
import { useState, useMemo } from 'react'

const services=[
  {icon:Hammer,title:'Build',desc:'Elite PriMa developments across Accra with verified titles',link:'/developments'},
  {icon:Key,title:'Rent',desc:'Short & long term rentals in Lakeside & East Legon',link:'/properties?status=rent'},
  {icon:Building2,title:'Sell',desc:'List with Elite PriMa, we handle valuation to closing',link:'/sell'},
  {icon:ClipboardList,title:'Manage',desc:'For landlords & diaspora - Elite PriMa manages at 10% monthly',link:'/manage'},
]

export default function HomePage(){
  const [filter,setFilter]=useState({})
  const filtered = useMemo(()=>{
    return properties.filter(p=>{
      if(filter.location && !p.location.toLowerCase().includes(filter.location.toLowerCase())) return false
      if(filter.type && p.type!==filter.type) return false
      return true
    })
  },[filter])
  return (
    <div className="min-h-screen bg-[#F6F1E8] dark:bg-[#081714] transition-colors">
      <HeroSearch onSearch={setFilter}/>
      <TrustBar/>
      <section className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <div className="rounded-[32px] p-8 md:p-10 border bg-white/80 dark:bg-white/5 border-black/5 dark:border-white/10 shadow-[0_20px_50px_-30px_rgba(8,23,20,0.25)] sticky top-[88px]">
            <p className="text-[#B78A4A] text-[11px] tracking-[0.3em] uppercase font-black mb-3">Elite PriMa Homes Ltd</p>
            <h2 className="serif font-normal text-4xl md:text-[56px] leading-[0.92] tracking-[-0.02em] text-[#081714] dark:text-white">Featured properties with a quieter, more personal feel.</h2>
            <p className="mt-5 text-[15px] leading-7 text-black/60 dark:text-white/60">Elite PriMa focuses on cleanly presented homes, direct communication, and less friction from search to viewing.</p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[{k:'Verified', v:'titles'},{k:'Flexible', v:'plans'},{k:'Private', v:'viewings'},{k:'Local', v:'support'}].map(item=>(
                <div key={item.k} className="rounded-3xl p-4 bg-[#F6F1E8] dark:bg-white/5"><p className="text-[10px] uppercase tracking-[0.28em] text-[#B78A4A] font-black">{item.k}</p><p className="mt-2 font-black text-sm text-[#081714] dark:text-white">{item.v}</p></div>
              ))}
            </div>
            <Link to="/properties" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#081714] px-5 py-3 text-[11px] font-black uppercase tracking-[0.24em] text-white hover:bg-[#B78A4A]">Browse all <ArrowRight size={16}/></Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {(filtered.length?filtered:properties).slice(0,6).map((property, i)=><PropertyCard key={property.id} property={property} featured={i===0}/>)}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-white dark:bg-[#0E1E1A]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div><p className="text-[#B78A4A] text-[11px] tracking-[0.3em] uppercase font-black">Elite PriMa Services</p><h2 className="serif text-3xl md:text-5xl mt-3 text-[#081714] dark:text-white">What we do.</h2></div>
            <p className="max-w-xl text-sm leading-7 text-black/55 dark:text-white/55">Elite PriMa Homes Ltd offers a more direct, concierge-style approach to buying, renting, developing, and managing property.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{services.map(s=><ServiceCard key={s.title} {...s}/>)}</div>
        </div>
      </section>
    </div>
  )
}
