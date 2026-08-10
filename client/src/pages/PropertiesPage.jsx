
import { useState, useMemo } from 'react'
import { properties } from '../lib/mockData'
import PropertyCard from '../components/property/PropertyCard'
import FilterSidebar from '../components/property/FilterSidebar'

export default function PropertiesPage(){
  const [filters,setFilters]=useState({status:'all',type:''})
  const list=useMemo(()=>properties.filter(p=>{
    if(filters.status!=='all' && p.status!==filters.status) return false
    if(filters.type && p.type!==filters.type) return false
    return true
  }),[filters])

  return (
    <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-10">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div><h1 className="serif text-4xl md:text-6xl">Properties</h1><p className="mt-3 text-sm text-brick-muted">Verified listings across Accra — {list.length} homes</p></div>
        <div className="flex gap-2 rounded-full bg-white p-1 border border-black/5">{['all','sale','rent'].map(s=><button key={s} onClick={()=>setFilters({...filters,status:s})} className={`rounded-full px-5 py-2 text-[11px] uppercase font-black tracking-widest transition-luxe ${filters.status===s?'bg-brick-black text-white':'text-brick-muted hover:text-black'}`}>{s}</button>)}</div>
      </div>
      <div className="mt-10 grid lg:grid-cols-[280px_1fr] gap-8">
        <FilterSidebar filters={filters} setFilters={setFilters}/>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">{list.map(p=><PropertyCard key={p.id} property={p}/>)}</div>
      </div>
    </div>
  )
}
