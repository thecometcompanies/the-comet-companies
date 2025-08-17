'use client'

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

function CompanyCard({ company }: { company: CompanyProps }) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <a
      href={company.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative aspect-[4/3] border-r border-b border-base-800 flex flex-col bg-base-900 hover:bg-base-800 cursor-pointer overflow-hidden transition-all duration-200 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Company Logo/Name */}
      <div className="flex-1 flex items-center justify-center p-6">
        {isHovered ? (
          <div className="absolute inset-0">
            <Image
              src={company.image}
              alt={company.name}
              fill
              className="object-cover opacity-50"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold text-white">
                {company.logo || company.name}
              </span>
            </div>
          </div>
        ) : (
          <span className={`text-base font-semibold text-center ${company.isHighlighted ? 'text-brand-primary' : 'text-base-bg-alt'}`}>
            {company.logo || company.name}
          </span>
        )}
      </div>
      
      {/* Status Bar */}
      <div className={`
        px-4 py-3 text-xs font-medium tracking-wide uppercase border-t border-base-800
        ${company.isHighlighted ? 'bg-brand-primary text-base-950' : 'bg-base-950 text-base-400'}
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
    <section id="portfolio" className="py-24 bg-base-bg-alt">
      <div className="w-full px-6">
        {/* Header */}
        <div className="text-center mb-20 max-w-5xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-base-950">
            {portfolioData.title}
          </h2>
          <p className="text-xl text-base-700 leading-relaxed">
            {portfolioData.description}
          </p>
        </div>

        {/* Company Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-base-900 rounded-lg overflow-hidden border border-base-800">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {portfolioData.companies.map((company) => (
                <CompanyCard key={company.name} company={company} />
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <p className="text-base-600 text-sm uppercase tracking-wider font-medium">
            * IPO denotes Initial Public Offering | DPO denotes Direct Public Offering
          </p>
        </div>
      </div>
    </section>
  )
}