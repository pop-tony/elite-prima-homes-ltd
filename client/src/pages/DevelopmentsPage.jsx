import { properties } from '../lib/mockData'
import PropertyCard from '../components/property/PropertyCard'
export default function DevelopmentsPage(){
  return <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16"><h1 className="serif text-5xl">Developments</h1><p className="mt-4 max-w-2xl text-brick-muted">Elite PriMa Homes Ltd developments across Lakeside and East Legon — modern, verified, and built for quiet living.</p><div className="mt-10 grid gap-6 md:grid-cols-3">{properties.slice(0,3).map(p=><PropertyCard key={p.id} property={p}/>)}</div></div>
}