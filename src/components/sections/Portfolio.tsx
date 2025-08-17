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
    <a
      href={company.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        relative aspect-[4/3] border border-gray-700 flex flex-col
        ${company.isHighlighted ? 'bg-gradient-to-br from-yellow-900/20 to-yellow-800/20' : 'bg-gray-800'}
        hover:z-10 cursor-pointer overflow-hidden transition-all duration-300
        hover:border-yellow-400/50 hover:shadow-xl hover:shadow-yellow-400/20
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
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">
                {company.logo || company.name}
              </span>
            </div>
          </div>
        ) : (
          <span className={`text-lg font-semibold ${company.isHighlighted ? 'text-yellow-400' : 'text-white'}`}>
            {company.logo || company.name}
          </span>
        )}
      </div>
      
      {/* Status Bar */}
      <div className={`
        px-3 py-2 text-xs font-medium tracking-wide uppercase
        ${company.isHighlighted ? 'bg-yellow-600 text-black' : 'bg-black text-gray-300'}
      `}>
        {company.status}
        {company.statusDetail && (
          <>: {company.statusDetail}</>
        )}
      </div>
    </a>
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
    <section id="portfolio" className="py-24 bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 text-white">
            {portfolioData.title}
          </h2>
          <p className="text-xl max-w-4xl mx-auto text-gray-300 leading-relaxed">
            {portfolioData.description}
          </p>
        </div>

        {/* Company Grid - Blackstone Style */}
        <div className="blackstone-shadow rounded-xl overflow-hidden bg-black border border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 -m-[0.5px]">
            {portfolioData.companies.map((company, index) => (
              <CompanyCard key={company.name} company={company} index={index} />
            ))}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 text-sm uppercase tracking-wider font-medium">
            * IPO denotes Initial Public Offering | DPO denotes Direct Public Offering
          </p>
        </div>
      </div>
    </section>
  )
}