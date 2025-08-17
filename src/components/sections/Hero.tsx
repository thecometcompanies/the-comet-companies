import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { loadSiteContent } from '@/lib/content-server'

export default function Hero() {
  const content = loadSiteContent()
  const heroData = content.hero
  
  return (
    <section className="enterprise-spacing bg-executive-white">
      <div className="container mx-auto">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto mb-20"
        >
          <h1 className="h1 boardroom-text luxury-text-shadow mb-8 text-luxury-dark">
            {heroData.headline}
          </h1>
          
          <p className="body-lg executive-text mb-16 max-w-3xl mx-auto text-premium-gray">
            {heroData.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="btn-primary flex items-center gap-3 hover-lift premium-shadow px-8 py-4 text-lg font-medium">
              View Our Portfolio
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="btn-secondary hover-lift premium-shadow px-8 py-4 text-lg font-medium glass-effect">
              Start a Partnership
            </button>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-12 pt-20 border-t luxury-border"
        >
          {heroData.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="text-center smooth-scale"
            >
              <div className="text-4xl lg:text-5xl boardroom-text text-luxury-dark mb-3 luxury-text-shadow">
                {stat.value}
              </div>
              <div className="text-base executive-text text-premium-gray uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}