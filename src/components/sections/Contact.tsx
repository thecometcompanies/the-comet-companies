'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, Calendar } from 'lucide-react'
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

  // Map contact options to icons
  const getIcon = (title: string) => {
    if (title.toLowerCase().includes('general')) return Mail
    if (title.toLowerCase().includes('partnership')) return MessageCircle
    return Calendar
  }

  return (
    <section id="contact" className="enterprise-spacing bg-executive-white">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="h2 boardroom-text luxury-text-shadow mb-6 text-luxury-dark">
            {contactData.title}
          </h2>
          <p className="body-lg executive-text max-w-3xl mx-auto text-premium-gray">
            {contactData.description}
          </p>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {contactData.options.map((option, index) => {
            const IconComponent = getIcon(option.title)
            return (
              <motion.a
                key={option.title}
                href={option.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 bg-white luxury-border rounded-xl hover:premium-shadow transition-all duration-500 text-center smooth-scale glass-effect"
              >
                <div className="w-16 h-16 bg-boardroom-gray rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-luxury-dark group-hover:text-white transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-premium-gray group-hover:text-white" />
                </div>
                <h3 className="boardroom-text text-luxury-dark mb-3 text-xl">{option.title}</h3>
                <p className="executive-text text-premium-gray mb-6">{option.description}</p>
                <div className="executive-text text-luxury-dark font-semibold">
                  {option.action}
                </div>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}