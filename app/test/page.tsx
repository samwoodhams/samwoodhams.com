"use client"

import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { useTheme } from 'next-themes'

export default function Test() {
  const {theme, setTheme } = useTheme()

  return (
    <button className="cursor-pointer text-2xl" onClick={()=> setTheme( theme === "dark"? "light": "dark" )}>
      { theme === "dark" ? <BsFillSunFill/>: <BsFillMoonFill/> }
    </button>
  )
}