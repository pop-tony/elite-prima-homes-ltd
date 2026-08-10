
import { useParams, Link } from 'react-router-dom'
import { properties } from '../lib/mockData'
import ScheduleViewing from '../components/property/ScheduleViewing'
import { MapPin, Bed, Bath, ArrowLeft } from 'lucide-react'

export default function PropertyDetail(){
  const {id}=useParams()
  const property=properties.find(p=>String(p.id)===String(id)) || properties[0]

  return (
    <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-8">
      <Link to="/properties" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold hover:text-brick-gold"><ArrowLeft size={14}/> Back to properties</Link>
      <div className="mt-6 grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
        <div>
          <div className="overflow-hidden rounded-[32px] border border-black/5"><img src={property.image} alt={property.title} className="h-[480px] w-full object-cover" /></div>
          <div className="mt-6">
            <h1 className="serif text-3xl md:text-5xl">{property.title}</h1>
            <div className="mt-3 flex items-center gap-2 text-brick-muted"><MapPin size={14}/>{property.location}</div>
            <div className="mt-6 flex gap-3"><span className="rounded-full bg-brick-offwhite px-4 py-2 text-xs"><Bed size={12} className="inline mr-1"/>{property.beds} Beds</span><span className="rounded-full bg-brick-offwhite px-4 py-2 text-xs"><Bath size={12} className="inline mr-1"/>{property.baths} Baths</span><span className="rounded-full bg-brick-offwhite px-4 py-2 text-xs">{property.sqft} sqft</span></div>
            <p className="mt-8 text-[15px] leading-7 text-brick-muted max-w-[60ch]">{property.desc} Elite PriMa Homes Ltd ensures verified titles, direct owner communication, and private viewings across Lakeside, East Legon, and Cantonments.</p>
          </div>
        </div>
        <div className="grid gap-6 self-start">
          <div className="rounded-[24px] bg-white border border-black/5 p-6"><div className="text-[11px] uppercase tracking-widest text-brick-muted">Price</div><div className="serif text-3xl mt-2">{property.price}</div><div className="mt-2 text-xs text-brick-muted">{property.tag} • {property.status}</div></div>
          <ScheduleViewing property={property}/>
        </div>
      </div>
    </div>
  )
}
