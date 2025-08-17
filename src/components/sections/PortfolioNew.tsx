'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
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
    <Card 
      className="group overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl border-border/50 hover:border-primary/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={company.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <CardContent className="p-0">
          {/* Company Display Area */}
          <div className="relative aspect-[4/3] bg-card flex items-center justify-center overflow-hidden">
            {isHovered ? (
              <div className="absolute inset-0">
                <Image
                  src={company.image}
                  alt={company.name}
                  fill
                  className="object-cover opacity-60"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-foreground text-center px-4">
                    {company.logo || company.name}
                  </span>
                </div>
              </div>
            ) : (
              <span className={`text-base font-semibold text-center px-4 transition-colors ${
                company.isHighlighted ? 'text-primary' : 'text-foreground'
              }`}>
                {company.logo || company.name}
              </span>
            )}
          </div>
          
          {/* Status Bar */}
          <div className={`px-4 py-3 text-xs font-medium tracking-wide uppercase border-t transition-colors ${
            company.isHighlighted 
              ? 'bg-primary text-primary-foreground border-primary' 
              : 'bg-muted text-muted-foreground border-border'
          }`}>
            {company.status}
            {company.statusDetail && (
              <>: {company.statusDetail}</>
            )}
          </div>
        </CardContent>
      </a>
    </Card>
  )
}

export default function PortfolioNew() {
  const [content, setContent] = useState<SiteContent | null>(null)

  useEffect(() => {
    fetchSiteContent().then(setContent)
  }, [])

  if (!content) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-4">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-muted-foreground">Loading portfolio...</p>
        </div>
      </div>
    )
  }

  const portfolioData = content.portfolio

  return (
    <section id="portfolio" className="py-24 bg-background">
      {/* Perfect Container with Centering */}
      <div className="container mx-auto px-4">
        
        {/* Section Header - Perfectly Centered */}
        <div className="text-center mb-20 max-w-4xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {portfolioData.description}
          </p>
        </div>

        {/* Portfolio Grid - Auto-Centering with Perfect Spacing */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {portfolioData.companies.map((company) => (
              <CompanyCard key={company.name} company={company} />
            ))}
          </div>
        </div>

        {/* Additional Info - Centered */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm uppercase tracking-wider font-medium max-w-2xl mx-auto">
            * IPO denotes Initial Public Offering | DPO denotes Direct Public Offering
          </p>
        </div>
        
      </div>
    </section>
  )
}