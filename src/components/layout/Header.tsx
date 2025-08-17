'use client'

import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className="border-base-800 z-50 sticky top-0 border-b">
      <div className="bg-base-bg-main/90 -z-10 pointer-events-none absolute inset-0 backdrop-blur-sm"></div>
      <div className="mx-auto max-w-[86rem] px-8">
        <nav className="flex h-16 items-center justify-between gap-5">
          <a aria-label="The Comet Companies Logo" className="relative w-fit shrink-0" href="/">
            <span className="text-xl font-bold text-base-bg-alt">The Comet Companies</span>
          </a>
          
          <ul className="hidden items-center font-mono text-[.6875rem] leading-5 font-medium tracking-[.06rem] uppercase lg:gap-2 xl:gap-8 2xl:gap-10 lg:flex">
            <li className="text-base-300 hover:text-base-50 transition-colors duration-300 ease-in-out">
              <a className="group py-6 px-4" href="#portfolio">
                <span className="after:bg-base-50 relative py-[inherit] after:absolute after:inset-x-0 after:-bottom-[.1875rem] after:h-px after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out group-hover:after:opacity-30">Portfolio</span>
              </a>
            </li>
            <li className="text-base-300 hover:text-base-50 transition-colors duration-300 ease-in-out">
              <a className="group py-6 px-4" href="#about">
                <span className="after:bg-base-50 relative py-[inherit] after:absolute after:inset-x-0 after:-bottom-[.1875rem] after:h-px after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out group-hover:after:opacity-30">About</span>
              </a>
            </li>
            <li className="text-base-300 hover:text-base-50 transition-colors duration-300 ease-in-out">
              <a className="group py-6 px-4" href="#contact">
                <span className="after:bg-base-50 relative py-[inherit] after:absolute after:inset-x-0 after:-bottom-[.1875rem] after:h-px after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out group-hover:after:opacity-30">Partnership</span>
              </a>
            </li>
          </ul>
          
          <div className="flex items-center gap-2">
            <a className="flex text-center justify-center items-center font-medium rounded-full transition-all duration-300 font-mono uppercase active:scale-95 bg-brand-primary hover:bg-brand-primary-hovered text-base-950 h-9 px-4 py-2.5 gap-2 tracking-[.05rem] text-xs leading-5 w-40 shrink-0" href="#contact">
              Investor Relations
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}