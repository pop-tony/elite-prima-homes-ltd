
import HeroSearch from '../components/property/HeroSearch'
import PropertyCard from '../components/property/PropertyCard'
import ServiceCard from '../components/property/ServiceCard'
import TrustBar from '../components/layout/TrustBar'
import { Building2, Key, Hammer, ClipboardList, ArrowRight } from 'lucide-react'
import { properties } from '../lib/mockData'
import { Link } from 'react-router-dom'
import { useState, useMemo } from 'react'

const services=[
  {icon:Hammer,title:'Build',desc:'Elite PriMa developments across Accra with verified titles'},
  {icon:Key,title:'Rent',desc:'Short & long term rentals in Lakeside & East Legon'},
  {icon:Building2,title:'Sell',desc:'List with Elite PriMa, we handle valuation to closing'},
  {icon:ClipboardList,title:'Manage',desc:'For landlords & diaspora - 10% monthly'},
]

export default function HomePage(){
  const [filter,setFilter]=useState({})
  const filtered=useMemo(()=>properties.filter(p=>{
    if(filter.location && !p.location.toLowerCase().includes(filter.location.toLowerCase())) return false
    if(filter.type && p.type!==filter.type) return false
    return true
  }),[filter])

  return (
    <div className="min-h-screen bg-brick-offwhite">
      <HeroSearch onSearch={setFilter}/>
      <TrustBar/>
      <section className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <div className="rounded-[32px] p-8 md:p-10 border bg-white/80 border-black/5 shadow-soft sticky top-[88px]">
            <p className="text-brick-gold text-[11px] tracking-[0.3em] uppercase font-black mb-3">Elite PriMa Homes Ltd</p>
            <h2 className="serif text-4xl md:text-[56px] leading-[0.92] tracking-[-0.02em]">Featured properties with a quieter, more personal feel.</h2>
            <p className="mt-5 text-[15px] leading-7 text-brick-muted">Cleanly presented homes, direct communication, less friction.</p>
            <Link to="/properties" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brick-black px-5 py-3 text-[11px] font-black uppercase tracking-[0.24em] text-white hover:bg-brick-gold">Browse all <ArrowRight size={16}/></Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">{(filtered.length?filtered:properties).slice(0,6).map((property,i)=><PropertyCard key={property.id} property={property} featured={i===0}/>)}</div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6"><div><p className="text-brick-gold text-[11px] tracking-[0.3em] uppercase font-black">Elite PriMa Services</p><h2 className="serif text-3xl md:text-5xl mt-3">What we do.</h2></div><p className="max-w-xl text-sm leading-7 text-brick-muted">Concierge-style approach to buying, renting, developing, and managing property.</p></div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{services.map(s=><ServiceCard key={s.title} {...s}/>)}</div>
        </div>
      </section>
    </div>
  )
}
