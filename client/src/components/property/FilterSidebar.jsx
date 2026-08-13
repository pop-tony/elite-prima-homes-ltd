
import { useTheme } from '../../context/ThemeContext'

export default function FilterSidebar({filters,setFilters}){
  const { isDark } = useTheme()
  return (
    <div className={`rounded-[24px] p-6 border ${isDark? 'bg-[#071726] border-white/10 text-white' : 'bg-white border-black/5'}`}>
      <h3 className="font-bold text-[12px] uppercase tracking-widest">Filters</h3>
      <div className="mt-4 grid gap-3">
        <select value={filters.type||''} onChange={e=>setFilters({...filters,type:e.target.value})} className={`rounded-full border px-4 py-3 text-sm ${isDark? 'bg-[#0A2342] border-white/10 text-white' : 'bg-white border-brick-subtle text-[#081714]'}`}><option value="">All Types</option><option>House</option><option>Apartment</option><option>Studio</option></select>
        <select value={filters.status||''} onChange={e=>setFilters({...filters,status:e.target.value})} className={`rounded-full border px-4 py-3 text-sm ${isDark? 'bg-[#0A2342] border-white/10 text-white' : 'bg-white border-brick-subtle text-[#081714]'}`}><option value="">Sale & Rent</option><option value="sale">For Sale</option><option value="rent">For Rent</option></select>
      </div>
    </div>
  )
}
