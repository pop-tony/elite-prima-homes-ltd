
import { useTheme } from '../../context/ThemeContext'
import { Moon, Sun } from 'lucide-react'
export default function ThemeToggle(){
  const {isDark,toggle,toggleTheme}=useTheme()
  const handleClick = toggleTheme ?? toggle

  return <button onClick={handleClick} className={`grid h-9 w-9 place-items-center rounded-full ${isDark? 'bg-white/10 border-white/10 text-white' : 'bg-white border-black/5 text-[#081714]'}`}>{isDark?<Sun size={14}/>:<Moon size={14}/>}</button>
}
