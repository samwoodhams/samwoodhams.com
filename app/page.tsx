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
            <a href="#">
              <h1 className="text-xl dark:text-white">Sam Woodhams</h1>
            </a>
            <ul className="flex items-center dark:text-white">
              <li>
                <div>
                <BsFillMoonFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:hidden"/>
                <BsFillSunFill onClick={() => setDarkMode(!darkMode)} className="hidden cursor-pointer text-2xl dark:block"/>
                </div>
              </li>
            </ul>
          </nav>
          <div className="justify-center">
            <div className="relative mx-auto bg-gradient-to-b from-slate-300 to-slate-400 rounded-full w-80 h-80 overflow-hidden">
              <Image className="disable-blur object-cover w-full h-full" src={face} alt="male face" unoptimized/>
            </div>
            <div className="text-center p-10">
              <h2 className="text-5xl py-2 text-slate-600 font-medium md:text-6xl dark:text-teal-400">Samuel Woodhams</h2>
              <h3 className="text-2xl py-2 md:text-3xl dark:text-slate-300">Computer Science Student</h3>
              <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-slate-300">
                An undergraduate student currently studying computer science at the University of Warwick.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 text-slate-600 dark:text-white">My Experience</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-300">
              During my journey into the world of computer science and cyber security I've acquired valuable skills, become proficient with essential tools, and gained practical experience in this ever-evolving field. Below, you'll discover the expertise I can offer, the tools I'm well-versed in, and some of the exciting fields I've had the opportunity to work in.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-300">
              For more information, here is a link to my <a className="text-teal-500" href="#">resume</a>
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gray-700">
              <h3 className="font-bold text-slate-600 text-xl flex-1 dark:text-teal-300 mb-3">Skills</h3>
              <p className="text-gray-800 py-1 dark:text-slate-300">Programming</p>
              <p className="text-gray-800 py-1 dark:text-slate-300">Design</p>
              <p className="text-gray-800 py-1 dark:text-slate-300">Cyber Security</p>
              <p className="text-gray-800 py-1 dark:text-slate-300">3D Modelling</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gray-700">
              <h3 className="font-bold text-slate-600 text-xl dark:text-teal-300 mb-3">Tools</h3>
              <p className="text-gray-800 py-1 dark:text-slate-300">Linux</p>
              <p className="text-gray-800 py-1 dark:text-slate-300">Visual Studio Code</p>
              <p className="text-gray-800 py-1 dark:text-slate-300">Neovim</p>
              <p className="text-gray-800 py-1 dark:text-slate-300">Git and GitHub</p>
              <p className="text-gray-800 py-1 dark:text-slate-300">Blender</p>
              <p className="text-gray-800 py-1 dark:text-slate-300">Aseprite</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gray-700">
              <h3 className="font-bold text-slate-600 text-xl dark:text-teal-300 mb-3">Experience</h3>
              <p className="text-gray-800 py-1 dark:text-slate-300">Web Development</p>
              <p className="text-gray-800 py-1 dark:text-slate-300">Low-level development</p>
              <p className="text-gray-800 py-1 dark:text-slate-300">Penetration Testing</p>
              <p className="text-gray-800 py-1 dark:text-slate-300">Security Research</p>
              <p className="text-gray-800 py-1 dark:text-slate-300">Full time Linux user</p>
            </div>
          </div>
        </section>

        <section>
          <div>
          <h3 className="text-3xl py-1 text-slate-600 dark:text-white">Portfolio</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-300">
              A list of some of the <span className="text-teal-500">cool</span> and <span className="text-teal-500">exciting</span> things that I've been working on.
          </p>
          </div>
          <div className="basis-1/3 gap-10 flex flex-wrap">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gray-700">
              <h3 className="font-bold text-slate-600 text-xl dark:text-teal-300 mb-6">Example project</h3>
              <a className="flex justify-center text-gray-600 text-3xl mb-3 dark:text-slate-100" href="https://github.com/samwoodhams">
                <BsGithub className="cursor-pointer"/>
              </a>
              <p className="text-gray-800 py-1 dark:text-slate-300">An Example project that I completed...</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gray-700">
              <h3 className="font-bold text-slate-600 text-xl dark:text-teal-300 mb-6">Example project</h3>
              <a className="flex justify-center text-gray-600 text-3xl mb-3 dark:text-slate-100" href="https://github.com/samwoodhams">
                <BsGithub className="cursor-pointer"/>
              </a>
              <p className="text-gray-800 py-1 dark:text-slate-300">An Example project that I completed...</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gray-700">
              <h3 className="font-bold text-slate-600 text-xl dark:text-teal-300 mb-6">Example project</h3>
              <a className="flex justify-center text-gray-600 text-3xl mb-3 dark:text-slate-100" href="https://github.com/samwoodhams">
                <BsGithub className="cursor-pointer"/>
              </a>
              <p className="text-gray-800 py-1 dark:text-slate-300">An Example project that I completed...</p>
            </div>
            {/* Fill projects and work in here */}
          </div>
        </section>
        
        <section>
          <div className="flex justify-center gap-16 py-3 text-gray-600 text-3xl mb-5 dark:text-slate-300">
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

        <section>
          <div className="flex justify-center py-3 dark:text-slate-300">
            <p>© All rights reserved - Samuel Woodhams 2023</p>
          </div>
        </section>
      </main>
    </div>
    
  )
}

// Contact me page
// Things I found interesting page
// Resume