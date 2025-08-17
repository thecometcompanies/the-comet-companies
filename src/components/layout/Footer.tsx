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
    <footer className="bg-white border-t border-gray-100">
      <div className="container max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-8"
        >
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-gray-900 mb-2">
              The Comet Companies
            </h3>
            <p className="text-gray-600 text-sm max-w-md">
              Building the future through technology and strategic investments.
            </p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8 text-sm">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com/thecometcompanies"
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/company/thecometcompanies"
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:hello@thecometcompanies.com"
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 pt-8 border-t border-gray-100 text-center"
        >
          <p className="text-gray-500 text-sm">
            © 2024 The Comet Companies. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}