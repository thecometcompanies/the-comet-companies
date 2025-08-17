'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const heroData = {
    headline: "The Comet Companies",
    subheadline: "A Holding Company of Tech Driven Businesses",
    stats: [
      { value: "8+", label: "Projects completed" },
      { value: "185k+", label: "Happy clients" },
      { value: "15+", label: "Years experience" },
      { value: "100%", label: "Tech focused" }
    ]
  }
  
  return (
    <section className="pt-32 pb-20 px-6 bg-white">
      <div className="container max-w-6xl mx-auto">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="h1 mb-8">
            {heroData.headline}
          </h1>
          
          <p className="body-lg mb-12 max-w-2xl mx-auto">
            {heroData.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary flex items-center gap-2 hover-lift">
              View our work
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="btn-secondary hover-lift">
              Start a project
            </button>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-gray-100"
        >
          {heroData.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}