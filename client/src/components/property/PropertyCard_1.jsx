
import { MapPin, Bed, Bath, Heart } from 'lucide-react'
import Badge from '../ui/Badge'
import { Link } from 'react-router-dom'
export default function PropertyCard({property, featured}){
  return (
    <Link to={`/properties/${property.id}`} className={`group relative flex flex-col overflow-hidden rounded-[28px] border bg-white dark:bg-white/[0.04] dark:border-white/10 border-black/5 transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.3)] ${featured?'md:row-span-2':''}`}>
      <div className="relative">
        <img src={property.image} alt={property.title} className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-[1.04]"/>
        <div className="absolute left-3 top-3 flex gap-2"><Badge>{property.tag}</Badge><Badge>{property.status}</Badge></div>
        <button className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 backdrop-blur hover:bg-white"><Heart size={14}/></button>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent"/>
        <div className="absolute bottom-3 left-3 rounded-full bg-[#081714] px-3 py-1.5 text-[11px] font-black text-white">{property.price}</div>
      </div>
      <div className="p-5">
        <h3 className="serif text-[18px] leading-tight tracking-[-0.01em] text-[#081714] dark:text-white">{property.title}</h3>
        <div className="mt-1.5 flex items-center gap-1 text-[12px] text-black/50 dark:text-white/50"><MapPin size={12}/>{property.location}</div>
        <div className="mt-4 flex items-center gap-3 text-[12px] font-medium text-black/60 dark:text-white/60"><span className="inline-flex items-center gap-1 rounded-full bg-[#F6F1E8] dark:bg-white/10 px-2.5 py-1"><Bed size={12}/>{property.beds}</span><span className="inline-flex items-center gap-1 rounded-full bg-[#F6F1E8] dark:bg-white/10 px-2.5 py-1"><Bath size={12}/>{property.baths}</span><span className="ml-auto text-[11px]">{property.sqft} sqft • {property.type}</span></div>
      </div>
    </Link>
  )
}
