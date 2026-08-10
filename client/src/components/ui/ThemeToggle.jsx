
import { useTheme } from '../../context/ThemeContext'
import { Moon, Sun } from 'lucide-react'
export default function ThemeToggle(){
  const {isDark,toggle}=useTheme()
  return <button onClick={toggle} className="grid h-9 w-9 place-items-center rounded-full bg-white border border-black/5">{isDark?<Sun size={14}/>:<Moon size={14}/>}</button>
}
