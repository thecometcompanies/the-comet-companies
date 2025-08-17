'use client'

import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect luxury-border border-b premium-shadow"
    >
      <div className="container mx-auto py-6">
        <div className="flex items-center justify-between">
          {/* Logo/Company Name */}
          <div className="flex items-center">
            <h1 className="text-2xl boardroom-text text-luxury-dark tracking-tight luxury-text-shadow">
              The Comet Companies
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <a 
              href="#portfolio" 
              className="executive-text text-premium-gray hover:text-luxury-dark transition-colors font-medium"
            >
              Portfolio
            </a>
            <a 
              href="#about" 
              className="executive-text text-premium-gray hover:text-luxury-dark transition-colors font-medium"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="executive-text text-premium-gray hover:text-luxury-dark transition-colors font-medium"
            >
              Partnership
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-3 text-premium-gray hover:text-luxury-dark transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  )
}