
export default function FilterSidebar({filters,setFilters}){
  return (
    <div className="rounded-[24px] border border-black/5 bg-white p-6">
      <h3 className="font-bold text-[12px] uppercase tracking-widest">Filters</h3>
      <div className="mt-4 grid gap-3">
        <select value={filters.type||''} onChange={e=>setFilters({...filters,type:e.target.value})} className="rounded-full border border-brick-subtle bg-white px-4 py-3 text-sm"><option value="">All Types</option><option>House</option><option>Apartment</option><option>Studio</option></select>
        <select value={filters.status||''} onChange={e=>setFilters({...filters,status:e.target.value})} className="rounded-full border border-brick-subtle bg-white px-4 py-3 text-sm"><option value="">Sale & Rent</option><option value="sale">For Sale</option><option value="rent">For Rent</option></select>
      </div>
    </div>
  )
}
