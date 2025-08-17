'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Section, SectionHeader, SectionTitle, SectionDescription } from '@/components/ui/section'
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
      className="group overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border-border/50 hover:border-primary/50 h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={company.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <CardContent className="p-0 h-full flex flex-col">
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
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <span className="text-xl font-bold text-foreground text-center">
                    {company.logo || company.name}
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center p-6 h-full">
                <span className={`text-base font-semibold text-center transition-colors ${
                  company.isHighlighted ? 'text-primary' : 'text-foreground'
                }`}>
                  {company.logo || company.name}
                </span>
              </div>
            )}
          </div>
          
          {/* Status Bar */}
          <div className={`px-6 py-4 text-xs font-medium tracking-wide uppercase border-t transition-colors flex-shrink-0 ${
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

export default function PortfolioRevamped() {
  const [content, setContent] = useState<SiteContent | null>(null)

  useEffect(() => {
    fetchSiteContent().then(setContent)
  }, [])

  if (!content) {
    return (
      <Section className="bg-background">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center space-y-4">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-muted-foreground">Loading portfolio...</p>
          </div>
        </div>
      </Section>
    )
  }

  const portfolioData = content.portfolio

  return (
    <Section id="portfolio" className="bg-background" size="xl">
      {/* Section Header with Proper Spacing */}
      <SectionHeader>
        <SectionTitle>
          Our <span className="text-primary">Portfolio</span>
        </SectionTitle>
        <SectionDescription>
          {portfolioData.description}
        </SectionDescription>
      </SectionHeader>

      {/* Portfolio Grid with Generous Spacing */}
      <div className="space-y-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {portfolioData.companies.map((company) => (
            <CompanyCard key={company.name} company={company} />
          ))}
        </div>

        {/* Additional Info with Proper Spacing */}
        <div className="text-center pt-12 border-t border-border/30">
          <p className="text-muted-foreground text-sm uppercase tracking-wider font-medium max-w-2xl mx-auto">
            * IPO denotes Initial Public Offering | DPO denotes Direct Public Offering
          </p>
        </div>
      </div>
    </Section>
  )
}