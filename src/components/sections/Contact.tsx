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
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="container max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="h2 mb-6 text-gray-900">
            {contactData.title}
          </h2>
          <p className="body-lg max-w-2xl mx-auto text-gray-600">
            {contactData.description}
          </p>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
                className="group p-6 bg-white border border-gray-100 rounded-lg hover:border-gray-200 hover:shadow-lg transition-all duration-300 text-center hover-lift"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-100 transition-colors">
                  <IconComponent className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{option.description}</p>
                <div className="text-gray-900 font-medium text-sm">
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