"use client";

import { useEffect, useState } from "react";
import TypeMe, { Delete } from 'react-typeme'

export function TypingEffect() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <h3 className="text-2xl py-2 md:text-3xl dark:text-slate-300">Computer Science Student</h3>
    )
  }

  return (
    <TypeMe className="text-xl py-2 md:text-3xl dark:text-slate-300"
      typingSpeed="200"
      loop
      backspaceDelay="1500"
      strings={[
        'Computer Science Student',
        <Delete key={1}/>,
        'Cybersecurity Enthusiast',
        <Delete key={2}/>,
        'Developer',
        <Delete key={3}/>,
        'Nerd',
        <Delete key={4}/>,
      ]}
    />
  )
};