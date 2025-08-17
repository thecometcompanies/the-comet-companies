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
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground tech-heading">
            {contactData.title}
          </h2>
          <p className="text-lg lg:text-xl max-w-3xl mx-auto text-foreground-muted leading-relaxed">
            {contactData.description}
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contactData.options.map((option, index) => (
            <a
              key={option.title}
              href={option.href}
              className="minimal-card group p-10 rounded-lg smooth-scale transition-all duration-200 text-center"
            >
              <div className="w-20 h-20 bg-background-muted rounded-lg flex items-center justify-center mx-auto mb-8 group-hover:bg-primary group-hover:text-foreground transition-all duration-200 border border-border">
                <Mail className="w-10 h-10 text-foreground-muted group-hover:text-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{option.title}</h3>
              <p className="text-foreground-muted mb-8 leading-relaxed">{option.description}</p>
              <div className="text-primary font-semibold text-lg tracking-wide">
                {option.action}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}