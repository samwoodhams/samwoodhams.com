"use client"

import Link from 'next/link'
import { BsFillMoonFill, BsFillSunFill, BsLinkedin, BsGithub } from 'react-icons/bs'
import { BiLogoGmail } from 'react-icons/bi'
import { useTheme } from 'next-themes'


export default function Contact() {
  const {theme, setTheme } = useTheme()

  return (
    <div>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800">
        <section className="flex flex-col h-screen justify-between">
          <nav className="py-10 mb-12 flex justify-between">
            <Link href="/">
              <h1 className="text-xl dark:text-white">Sam Woodhams</h1>
            </Link>
            <ul className="flex items-center dark:text-white">
              <li>
                <button className="cursor-pointer text-2xl" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                  { theme === "dark" ? <BsFillSunFill/>: <BsFillMoonFill/> }
                </button>
              </li>
            </ul>
          </nav>
          <div className="text-center">
            <h2 className="text-4xl text-slate-600 font-medium md:text-6xl dark:text-teal-400">Contact Me</h2>
          </div>

          <div className="flex justify-center gap-16 pb-20 text-gray-600 text-6xl m-auto dark:text-slate-300 md:gap-24">
            <a href="https://www.linkedin.com/in/sam-woodhams-58334a1b1/">
              <BsLinkedin className="cursor-pointer"/>
            </a>
            <a href="mailto:samuel.woodhams@proton.me?subject=Contact%20Me">
              <BiLogoGmail className="cursor-pointer"/>
            </a>
            <a href="https://github.com/samwoodhams">
              <BsGithub className="cursor-pointer"/>
            </a>
          </div>

          <footer>
            <div className="flex justify-center text-center underline-offset-4 text-slate-600 font-bold gap-10 py-3 dark:text-teal-500">
              <div className="underline cursor-pointer">
                <Link className="px-2" href="/">
                  Home
                </Link>
              </div>
              <div className="underline cursor-pointer">
                <Link href="#">
                  Contact Me
                </Link>
              </div>
              <div className="underline cursor-pointer">
                <Link href="/resume">
                  Resume
                </Link>
              </div>
            </div>

            <div className="flex justify-center py-3 dark:text-slate-300">
              <p className="text-xs md:text-sm">© All rights reserved - Samuel Woodhams 2023</p>
            </div>
          </footer>
        </section>
      </main>
    </div>
  )
}