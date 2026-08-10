
import { useState, useMemo } from 'react'
import { properties } from '../lib/mockData'
import PropertyCard from '../components/property/PropertyCard'
export default function PropertiesPage(){
  const [status,setStatus]=useState('all')
  const list = useMemo(()=> status==='all'?properties:properties.filter(p=>p.status===status),[status])
  return (
    <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-10">
      <div className="flex flex-wrap items-end justify-between gap-6"><div><h1 className="serif text-4xl md:text-6xl">Properties</h1><p className="mt-3 text-sm text-black/50">Verified listings across Accra</p></div>
      <div className="flex gap-2 rounded-full bg-white p-1 border">{['all','sale','rent'].map(s=><button key={s} onClick={()=>setStatus(s)} className={`rounded-full px-5 py-2 text-[11px] uppercase font-black tracking-widest ${status===s?'bg-[#081714] text-white':'text-black/50'}`}>{s}</button>)}</div></div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{list.map(p=><PropertyCard key={p.id} property={p}/>)}</div>
    </div>
  )
}
