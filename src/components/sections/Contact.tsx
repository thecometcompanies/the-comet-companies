'use client'

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
    <section id="contact" className="py-24 bg-base-bg-main">
      <div className="w-full px-6">
        {/* Header */}
        <div className="text-center mb-20 max-w-5xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-base-bg-alt">
            {contactData.title}
          </h2>
          <p className="text-lg lg:text-xl text-base-300 leading-relaxed">
            {contactData.description}
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contactData.options.map((option) => (
            <a
              key={option.title}
              href={option.href}
              className="bg-base-900 group p-10 rounded-lg transition-all duration-200 text-center border border-base-800 hover:border-brand-primary"
            >
              <div className="w-20 h-20 bg-base-800 rounded-lg flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-primary group-hover:text-base-950 transition-all duration-200 border border-base-700">
                <Mail className="w-10 h-10 text-base-300 group-hover:text-base-950" />
              </div>
              <h3 className="text-2xl font-bold text-base-bg-alt mb-4 group-hover:text-brand-primary transition-colors">{option.title}</h3>
              <p className="text-base-300 mb-8 leading-relaxed">{option.description}</p>
              <div className="text-brand-primary font-semibold text-lg tracking-wide">
                {option.action}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}