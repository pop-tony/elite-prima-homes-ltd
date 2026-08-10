
import { createContext, useContext, useEffect, useState } from 'react'
const ThemeContext = createContext()
export function ThemeProvider({children}){
  const [isDark, setIsDark] = useState(false)
  useEffect(()=>{ document.documentElement.classList.toggle('dark', isDark) },[isDark])
  return <ThemeContext.Provider value={{isDark, toggle:()=>setIsDark(!isDark)}}>{children}</ThemeContext.Provider>
}
export const useTheme = ()=>useContext(ThemeContext)
