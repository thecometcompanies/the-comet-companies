'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

interface CompanyProps {
  name: string
  logo?: string  // Text logo or image URL
  image: string  // Hover image
  status: string // IPO, ACQUIRED BY, etc.
  statusDetail?: string // GOOGLE, AMAZON, etc.
  link: string
  isHighlighted?: boolean // For blue background cells
}

const companies: CompanyProps[] = [
  {
    name: "DTLA Print",
    logo: "DTLA Print",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
    status: "ACTIVE",
    link: "https://dtlaprint.com",
    isHighlighted: true
  },
  {
    name: "Merch Karma",
    logo: "Merch Karma",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center",
    status: "ACQUIRED BY",
    statusDetail: "PRINTFUL",
    link: "https://merchkarma.com"
  },
  {
    name: "DataFlow",
    logo: "DataFlow",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
    status: "ACQUIRED BY",
    statusDetail: "TABLEAU",
    link: "https://dataflow.example.com"
  },
  {
    name: "TechConsult",
    logo: "TechConsult",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center",
    status: "IPO",
    statusDetail: "TCSL",
    link: "https://techconsult.example.com"
  },
  {
    name: "Airbnb",
    logo: "airbnb",
    image: "https://images.unsplash.com/photo-1559599238-308793637427?w=800&h=600&fit=crop&crop=center",
    status: "IPO",
    statusDetail: "ABNB",
    link: "https://airbnb.com"
  },
  {
    name: "Digital Hub",
    logo: "Digital Hub",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center",
    status: "ACQUIRED BY",
    statusDetail: "ADOBE",
    link: "https://digitalhub.example.com"
  },
  {
    name: "CloudOps",
    logo: "CloudOps",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&crop=center",
    status: "ACQUIRED BY",
    statusDetail: "AWS",
    link: "https://cloudops.example.com"
  },
  {
    name: "MediaFlow",
    logo: "MediaFlow",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop&crop=center",
    status: "IPO",
    statusDetail: "MFLW",
    link: "https://mediaflow.example.com"
  },
  {
    name: "SecureAuth",
    logo: "SecureAuth",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center",
    status: "ACQUIRED BY",
    statusDetail: "MICROSOFT",
    link: "https://secureauth.example.com"
  },
  {
    name: "FinanceKit",
    logo: "FinanceKit",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&crop=center",
    status: "DPO",
    statusDetail: "FNKT",
    link: "https://financekit.example.com"
  },
  {
    name: "AutoML Pro",
    logo: "AutoML Pro",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&crop=center",
    status: "ACQUIRED BY",
    statusDetail: "GOOGLE",
    link: "https://automl.example.com"
  },
  {
    name: "VentureNet",
    logo: "VentureNet",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
    status: "ACQUIRED BY",
    statusDetail: "SALESFORCE",
    link: "https://venturenet.example.com"
  },
  {
    name: "BlockChain Co",
    logo: "BlockChain Co",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&crop=center",
    status: "IPO",
    statusDetail: "BLKC",
    link: "https://blockchain.example.com"
  },
  {
    name: "HealthTech",
    logo: "HealthTech",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop&crop=center",
    status: "ACQUIRED BY",
    statusDetail: "JOHNSON & JOHNSON",
    link: "https://healthtech.example.com"
  },
  {
    name: "EduPlatform",
    logo: "EduPlatform",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop&crop=center",
    status: "ACQUIRED BY",
    statusDetail: "PEARSON",
    link: "https://eduplatform.example.com"
  }
]

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
  return (
    <section id="portfolio" className="py-24 px-6 bg-white">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Portfolio Companies
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            We invest in and build companies that are defining the future of technology 
            and creating lasting impact across industries.
          </p>
        </motion.div>

        {/* Company Grid - a16z Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 -m-[0.5px]">
          {companies.map((company, index) => (
            <CompanyCard key={company.name} company={company} index={index} />
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm mb-8">
            * IPO denotes Initial Public Offering | DPO denotes Direct Public Offering
          </p>
        </motion.div>
      </div>
    </section>
  )
}