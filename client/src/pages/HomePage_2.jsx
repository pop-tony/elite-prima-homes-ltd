
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
    <div className="min-h-screen bg-brick-white">
      <HeroSearch onSearch={setFilter}/>
      <TrustBar/>

      <section className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <div className="bg-brick-card border border-brick-subtle p-8 md:p-10 sticky top-[88px]">
            <p className="text-brick-gold text-[11px] tracking-[0.32em] uppercase font-bold mb-4">Elite PriMa Homes Ltd</p>
            <h2 className="font-serif text-4xl md:text-[54px] leading-[0.92] tracking-[-0.03em] text-brick-black">
              Featured properties with a quieter, more personal feel.
            </h2>
            <p className="mt-5 text-[14px] leading-7 text-brick-muted">
              We focus on cleanly presented homes, direct communication, and less friction from search to viewing.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {[{k:'Verified', v:'titles'},{k:'Flexible', v:'plans'},{k:'Private', v:'viewings'},{k:'Local', v:'support'}].map(item=>(
                <div key={item.k} className="bg-brick-white border border-brick-subtle p-4">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-brick-gold font-bold">{item.k}</p>
                  <p className="mt-2 font-serif text-[14px] text-brick-black">{item.v}</p>
                </div>
              ))}
            </div>

            <Link to="/properties" className="mt-8 inline-flex items-center gap-2 bg-brick-black text-brick-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.22em] hover:bg-brick-gold transition-luxe">
              Browse all <ArrowRight size={14}/>
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {(filtered.length?filtered:properties).slice(0,6).map(property=>(
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brick-offwhite border-y border-brick-subtle">
        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-brick-gold text-[11px] tracking-[0.32em] uppercase font-bold">Elite PriMa Services</p>
              <h2 className="font-serif text-3xl md:text-5xl mt-3 text-brick-black">What we do.</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-brick-muted">Elite PriMa Homes Ltd offers a more direct, concierge-style approach to buying, renting, developing, and managing property.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{services.map(s=><ServiceCard key={s.title} {...s}/>)}</div>
        </div>
      </section>
    </div>
  )
}
