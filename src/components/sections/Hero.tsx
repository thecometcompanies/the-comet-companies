import { ArrowRight } from 'lucide-react'
import { loadSiteContent } from '@/lib/content-server'

export default function Hero() {
  const content = loadSiteContent()
  const heroData = content.hero
  
  return (
    <section className="pt-32 pb-24 px-6 bg-black relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid-bg h-full w-full"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative">
        {/* Main Content */}
        <div className="text-center max-w-5xl mx-auto mb-24">
          <h1 className="text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight">
            {heroData.headline}
          </h1>
          
          <p className="text-xl lg:text-2xl mb-16 max-w-4xl mx-auto text-gray-300 leading-relaxed">
            {heroData.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="btn-primary flex items-center gap-3 hover-lift">
              View Our Portfolio
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="btn-secondary hover-lift">
              Investor Relations
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 pt-20 border-t border-gray-800">
          {heroData.stats.map((stat, index) => (
            <div key={stat.label} className="text-center group">
              <div className="text-4xl lg:text-6xl font-bold gold-gradient-text mb-4 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}