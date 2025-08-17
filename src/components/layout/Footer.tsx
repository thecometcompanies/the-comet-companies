'use client'

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
    <footer className="bg-base-bg-main border-t border-base-800">
      <div className="w-full px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-base-bg-alt mb-3">
              The Comet Companies
            </h3>
            <p className="text-base-300 text-base max-w-md leading-relaxed">
              Building the future through technology and strategic investments.
            </p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-10 text-sm">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base-300 hover:text-brand-primary transition-colors font-medium uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://twitter.com/thecometcompanies"
              className="p-3 text-base-400 hover:text-brand-primary transition-colors hover:bg-base-800 rounded-lg"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/company/thecometcompanies"
              className="p-3 text-base-400 hover:text-brand-primary transition-colors hover:bg-base-800 rounded-lg"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@thecometcompanies.com"
              className="p-3 text-base-400 hover:text-brand-primary transition-colors hover:bg-base-800 rounded-lg"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-base-800 text-center">
          <p className="text-base-400 text-sm">
            © 2024 The Comet Companies. All rights reserved. | Confidential and Proprietary
          </p>
        </div>
      </div>
    </footer>
  )
}