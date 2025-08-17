'use client'

import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100"
    >
      <div className="container max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Company Name */}
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900 tracking-tight">
              The Comet Companies
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#portfolio" 
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Portfolio
            </a>
            <a 
              href="#about" 
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-600 hover:text-gray-900">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  )
}