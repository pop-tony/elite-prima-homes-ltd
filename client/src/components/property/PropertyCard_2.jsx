
import { MapPin, Bed, Bath, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PropertyCard({property}){
  return (
    <Link to={`/properties/${property.id}`} className="group flex flex-col bg-brick-white border border-brick-subtle hover:shadow-luxe transition-luxe">
      <div className="relative overflow-hidden">
        <img src={property.image} alt={property.title} className="h-[260px] w-full object-cover transition-luxe group-hover:scale-[1.03]" />
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="bg-brick-white px-3 py-1 text-[9px] font-bold tracking-[0.18em] uppercase text-brick-black border border-brick-subtle">{property.tag}</span>
          <span className="bg-brick-black px-3 py-1 text-[9px] font-bold tracking-[0.18em] uppercase text-brick-white">{property.status}</span>
        </div>
        <button className="absolute right-3 top-3 grid h-8 w-8 place-items-center bg-brick-white border border-brick-subtle hover:bg-brick-card transition-luxe" onClick={e=>e.preventDefault()}>
          <Heart size={12} />
        </button>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-3 left-3 bg-brick-black text-brick-white px-3 py-1.5 text-[11px] font-bold tracking-wide">{property.price}</div>
      </div>

      <div className="p-5">
        <h3 className="font-serif text-[18px] leading-tight text-brick-black">{property.title}</h3>
        <div className="mt-2 flex items-center gap-1 text-[12px] text-brick-muted"><MapPin size={12}/>{property.location}</div>
        <div className="mt-4 flex items-center gap-2 border-t border-brick-subtle pt-4">
          <span className="inline-flex items-center gap-1.5 bg-brick-card px-2.5 py-1 text-[11px] text-brick-muted border border-brick-subtle"><Bed size={12}/>{property.beds}</span>
          <span className="inline-flex items-center gap-1.5 bg-brick-card px-2.5 py-1 text-[11px] text-brick-muted border border-brick-subtle"><Bath size={12}/>{property.baths}</span>
          <span className="ml-auto text-[10px] tracking-[0.12em] uppercase text-brick-muted">{property.sqft} sqft • {property.type}</span>
        </div>
      </div>
    </Link>
  )
}
