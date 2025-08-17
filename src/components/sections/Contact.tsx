'use client'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { useState, useEffect } from 'react'
import { fetchSiteContent } from '@/lib/content-client'
import type { SiteContent } from '@/lib/content-types'

export default function Contact() {
  const [content, setContent] = useState<SiteContent | null>(null)

  useEffect(() => {
    fetchSiteContent().then(setContent)
  }, [])

  if (!content) {
    return <div>Loading...</div>
  }

  const contactData = content.contact


  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 text-white">
            {contactData.title}
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
            {contactData.description}
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contactData.options.map((option, index) => (
            <a
              key={option.title}
              href={option.href}
              className="blackstone-card group p-10 rounded-xl hover-lift transition-all duration-500 text-center"
            >
              <div className="w-20 h-20 bg-gray-800 rounded-xl flex items-center justify-center mx-auto mb-8 group-hover:bg-yellow-600 group-hover:text-black transition-all duration-300 border border-gray-700">
                <Mail className="w-10 h-10 text-gray-400 group-hover:text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">{option.title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">{option.description}</p>
              <div className="text-yellow-400 font-semibold text-lg tracking-wide">
                {option.action}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}