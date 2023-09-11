"use client"

import Image from 'next/image'
import face from '../public/face.png'
import { BsFillMoonFill, BsFillSunFill, BsLinkedin, BsGithub } from 'react-icons/bs'
import { BiLogoGmail } from 'react-icons/bi'
import { useState } from "react"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl dark:text-white">Sam Woodhams</h1>
            <ul className="flex items-center dark:text-white">
              <li>
                <div>
                <BsFillMoonFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:hidden"/>
                <BsFillSunFill onClick={() => setDarkMode(!darkMode)} className="hidden cursor-pointer text-2xl dark:block"/>
                </div>
              </li>
            </ul>
          </nav>
          <div className="relative mx-auto bg-gradient-to-b from-slate-300 to-slate-400 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image className="disable-blur object-cover w-full h-full" src={face} alt="male face" unoptimized/>
          </div>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-slate-700 font-medium md:text-6xl dark:text-white">Samuel Woodhams</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-slate-300">Computer Science Student</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-slate-300">
              Hello, World!
            </p>
            <a className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-4 py-2 rounded-md ml-2" href="#">
              Resume
            </a>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 text-slate-700 dark:text-white">My Experience</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-300">
              Some text
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-300">
              Some <span className="text-teal-500">more</span> text
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <h3 className="font-bold text-slate-700 text-xl flex-1 dark:text-slate-300">Skills</h3>
              <h4 className="mt-2 dark:text-slate-300">
                Some of my skills:
              </h4>
              <p className="text-gray-800 py-1 dark:text-slate-300">Programming</p>
              <p className="text-gray-800 py-1 dark:text-slate-300">Programming</p>
              <p className="text-gray-800 py-1 dark:text-slate-300">Programming</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <h3 className="font-bold text-slate-700 text-xl dark:text-slate-300">Tools</h3>
              <h4 className="mt-2 dark:text-slate-300">
                Tools that I use:
              </h4>
              <p className="text-gray-800 py-1 dark:text-slate-300">Programming</p>
              <p className="text-gray-800 py-1 dark:text-slate-300">Programming</p>
              <p className="text-gray-800 py-1 dark:text-slate-300">Programming</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <h3 className="font-bold text-slate-700 text-xl dark:text-slate-300">Experience</h3>
              <h4 className="mt-2 dark:text-slate-300">
                Experience that I have:
              </h4>
              <p className="text-gray-800 py-1 dark:text-slate-300">Programming</p>
              <p className="text-gray-800 py-1 dark:text-slate-300">Programming</p>
              <p className="text-gray-800 py-1 dark:text-slate-300">Programming</p>
            </div>
          </div>
        </section>

        <section>
          <div>
          <h3 className="text-3xl py-1 text-slate-700 dark:text-white">Portfolio</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-300">
              Some text
          </p>
          </div>
          <div className="flex flex-column gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              {/* Fill projects and work in here */}
            </div>
          </div>
        </section>
        
        <section>
          <div className="flex justify-center gap-16 py-3 text-gray-600 text-3xl dark:text-slate-300">
            <a href="https://www.linkedin.com/in/sam-woodhams-58334a1b1/">
              <BsLinkedin className="cursor-pointer"/>
            </a>
            <a href="#">
              <BiLogoGmail className="cursor-pointer"/>
            </a>
            <a href="https://github.com/samwoodhams">
              <BsGithub className="cursor-pointer"/>
            </a>
          </div>
        </section>
      </main>
    </div>
    
  )
}