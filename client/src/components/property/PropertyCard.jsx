
import { MapPin, Bed, Bath, Heart } from 'lucide-react'
import Badge from '../ui/Badge'
import { Link } from 'react-router-dom'

export default function PropertyCard({property, featured}){
  return (
    <Link to={`/properties/${property.id}`} className={`group relative flex flex-col overflow-hidden rounded-[28px] border bg-white border-black/5 transition-luxe hover:-translate-y-1 hover:shadow-luxe dark:bg-white/5 dark:border-white/10 ${featured?'md:row-span-2':''}`}>
      <div className="relative">
        <img src={property.image} alt={property.title} className="h-[240px] w-full object-cover transition-luxe group-hover:scale-[1.04]" />
        <div className="absolute left-3 top-3 flex gap-2"><Badge>{property.tag}</Badge><Badge tone="dark">{property.status}</Badge></div>
        <button className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 backdrop-blur hover:bg-white transition-colors dark:bg-white/10 dark:text-white dark:hover:bg-white/20" onClick={e=>e.preventDefault()}><Heart size={14}/></button>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-3 left-3 rounded-full bg-brick-black px-3 py-1.5 text-[11px] font-black text-white">{property.price}</div>
      </div>
      <div className="p-5">
        <h3 className="serif text-[18px] leading-tight text-brick-black dark:text-white">{property.title}</h3>
        <div className="mt-1.5 flex items-center gap-1 text-[12px] text-brick-muted dark:text-white/55"><MapPin size={12}/>{property.location}</div>
        <div className="mt-4 flex items-center gap-3 text-[12px] font-medium text-brick-muted dark:text-white/55"><span className="inline-flex items-center gap-1 rounded-full bg-brick-offwhite px-2.5 py-1 dark:bg-white/10 dark:text-white"><Bed size={12}/>{property.beds}</span><span className="inline-flex items-center gap-1 rounded-full bg-brick-offwhite px-2.5 py-1 dark:bg-white/10 dark:text-white"><Bath size={12}/>{property.baths}</span><span className="ml-auto text-[11px]">{property.sqft} sqft • {property.type}</span></div>
      </div>
    </Link>
  )
}
