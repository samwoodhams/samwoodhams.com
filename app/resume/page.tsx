"use client"

import Link from 'next/link'
import { BsFillMoonFill, BsFillSunFill, BsLinkedin, BsGithub } from 'react-icons/bs'
import { BiLogoGmail } from 'react-icons/bi'
import { useTheme } from 'next-themes'


export default function Resume() {
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

          <div>
            <div className="my-10">
              <h3 className="text-3xl py-1 md:text-4xl mb-2 text-slate-600 dark:text-teal-400">Education</h3>
              <div className="flex pb-2 text-sm md:text-lg text-gray-800 dark:text-slate-300">
                <table className="table-fixed w-full">
                  <tbody>
                    <tr>
                      <td className="align-top font-semibold">2022 - Now</td>
                      <td>BSc Computer Science, University of Warwick</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="my-10">
              <h3 className="text-3xl py-1 md:text-4xl mb-2 text-slate-600 dark:text-teal-400">Experience</h3>
              <div className="flex pb-2 text-sm md:text-lg text-gray-800 dark:text-slate-300">
                <table className="table-fixed w-full">
                  <tbody>
                    <tr>
                      <td className="align-top font-semibold">Jun 2021</td>
                      <td className="py-2 md:py-4">Gained work experience with the head of online banking at Barclays specifically looking at cryptocurrencies and digital transactions and their implications for the world of banking</td>
                    </tr>
                    <tr>
                      <td className="align-top font-semibold">Jun 2020</td>
                      <td className="py-2 md:py-4">Young Professionals work experience program</td>
                    </tr>
                  </tbody>
                </table> 
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-16 py-3 text-gray-600 text-3xl mt-5 dark:text-slate-300">
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
                <Link href="/contact">
                  Contact Me
                </Link>
              </div>
              <div className="underline cursor-pointer">
                <Link href="#">
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