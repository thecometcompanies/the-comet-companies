'use client'

import { motion } from 'framer-motion'
import { Twitter, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
    { label: 'Privacy', href: '#privacy' },
    { label: 'Terms', href: '#terms' }
  ]

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-3">
              The Comet Companies
            </h3>
            <p className="text-gray-400 text-base max-w-md leading-relaxed">
              Building the future through technology and strategic investments.
            </p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-10 text-sm">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-400 hover:text-yellow-400 transition-colors font-medium uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://twitter.com/thecometcompanies"
              className="p-3 text-gray-500 hover:text-yellow-400 transition-colors hover:bg-gray-800 rounded-lg"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/company/thecometcompanies"
              className="p-3 text-gray-500 hover:text-yellow-400 transition-colors hover:bg-gray-800 rounded-lg"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@thecometcompanies.com"
              className="p-3 text-gray-500 hover:text-yellow-400 transition-colors hover:bg-gray-800 rounded-lg"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 The Comet Companies. All rights reserved. | Confidential and Proprietary
          </p>
        </div>
      </div>
    </footer>
  )
}