'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, Calendar } from 'lucide-react'

export default function Contact() {
  const contactOptions = [
    {
      icon: Mail,
      title: 'General Inquiries',
      description: 'Get in touch via email',
      action: 'hello@thecometcompanies.com',
      href: 'mailto:hello@thecometcompanies.com'
    },
    {
      icon: MessageCircle,
      title: 'Partnership Opportunities',
      description: 'Discuss investment and partnerships',
      action: 'partnerships@thecometcompanies.com',
      href: 'mailto:partnerships@thecometcompanies.com'
    },
    {
      icon: Calendar,
      title: 'Schedule a Meeting',
      description: 'Book a consultation call',
      action: 'Book a Call',
      href: '#'
    }
  ]

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
            Get in Touch
          </h2>
          <p className="body-lg max-w-2xl mx-auto text-gray-600">
            Interested in partnering with us or learning more about our portfolio companies? 
            We&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {contactOptions.map((option, index) => (
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
                <option.icon className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{option.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{option.description}</p>
              <div className="text-gray-900 font-medium text-sm">
                {option.action}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}