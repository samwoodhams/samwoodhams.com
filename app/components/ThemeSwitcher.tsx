"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button className="cursor-pointer text-2xl" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      { theme === "dark" ? <BsFillSunFill/>: <BsFillMoonFill/> }
    </button>
  )
};