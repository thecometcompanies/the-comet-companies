'use client'

import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border minimal-shadow">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Company Name */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold gradient-text tracking-tight">
              The Comet Companies
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#portfolio" 
              className="text-foreground-muted hover:text-primary transition-colors font-medium text-sm uppercase tracking-wider"
            >
              Portfolio
            </a>
            <a 
              href="#about" 
              className="text-foreground-muted hover:text-primary transition-colors font-medium text-sm uppercase tracking-wider"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-foreground-muted hover:text-primary transition-colors font-medium text-sm uppercase tracking-wider"
            >
              Partnership
            </a>
            <a 
              href="#investor-relations"
              className="btn-primary text-xs px-4 py-2"
            >
              Investor Relations
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-3 text-foreground-muted hover:text-primary transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}