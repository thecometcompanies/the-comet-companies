'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { fetchSiteContent } from '@/lib/content-client'
import type { SiteContent } from '@/lib/content-types'

interface CompanyProps {
  name: string
  logo?: string
  image: string
  status: string
  statusDetail?: string
  link: string
  isHighlighted?: boolean
}

function CompanyCard({ company, index }: { company: CompanyProps; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.a
      href={company.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: index * 0.02 }}
      className={`
        relative aspect-[4/3] border border-gray-200 flex flex-col
        ${company.isHighlighted ? 'bg-cyan-400' : 'bg-white'}
        hover:z-10 cursor-pointer overflow-hidden
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Company Logo/Name */}
      <div className="flex-1 flex items-center justify-center p-4">
        {isHovered ? (
          <div className="absolute inset-0">
            <Image
              src={company.image}
              alt={company.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={`text-2xl font-bold ${company.isHighlighted ? 'text-white' : 'text-white'}`}>
                {company.logo || company.name}
              </span>
            </div>
          </div>
        ) : (
          <span className={`text-xl font-semibold ${company.isHighlighted ? 'text-white' : 'text-gray-900'}`}>
            {company.logo || company.name}
          </span>
        )}
      </div>
      
      {/* Status Bar */}
      <div className={`
        px-3 py-2 text-xs font-medium tracking-wide uppercase
        ${company.isHighlighted ? 'bg-cyan-500 text-white' : 'bg-gray-800 text-white'}
      `}>
        {company.status}
        {company.statusDetail && (
          <>: {company.statusDetail}</>
        )}
      </div>
    </motion.a>
  )
}

export default function Portfolio() {
  const [content, setContent] = useState<SiteContent | null>(null)

  useEffect(() => {
    fetchSiteContent().then(setContent)
  }, [])

  if (!content) {
    return <div>Loading...</div>
  }

  const portfolioData = content.portfolio

  return (
    <section id="portfolio" className="enterprise-spacing bg-boardroom-gray">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="h2 boardroom-text luxury-text-shadow mb-6 text-luxury-dark">
            {portfolioData.title}
          </h2>
          <p className="body-lg executive-text max-w-4xl mx-auto text-premium-gray">
            {portfolioData.description}
          </p>
        </motion.div>

        {/* Company Grid - Premium a16z Style */}
        <div className="premium-shadow rounded-lg overflow-hidden bg-white">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 -m-[0.5px]">
            {portfolioData.companies.map((company, index) => (
              <CompanyCard key={company.name} company={company} index={index} />
            ))}
          </div>
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="executive-text text-premium-gray text-sm uppercase tracking-wider">
            * IPO denotes Initial Public Offering | DPO denotes Direct Public Offering
          </p>
        </motion.div>
      </div>
    </section>
  )
}