import { ArrowRight } from 'lucide-react'
import { loadSiteContent } from '@/lib/content-server'

export default function Hero() {
  const content = loadSiteContent()
  const heroData = content.hero
  
  return (
    <section className="pt-32 pb-24 px-6 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative">
        {/* Main Content */}
        <div className="text-center max-w-5xl mx-auto mb-24">
          <h1 className="text-6xl lg:text-7xl font-bold mb-8 text-foreground leading-tight tech-heading">
            {heroData.headline}
          </h1>
          
          <p className="text-xl lg:text-2xl mb-16 max-w-4xl mx-auto text-foreground-muted leading-relaxed">
            {heroData.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary flex items-center gap-3 smooth-scale">
              View Our Portfolio
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="btn-secondary smooth-scale">
              Investor Relations
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 pt-20 border-t border-border">
          {heroData.stats.map((stat, index) => (
            <div key={stat.label} className="text-center group">
              <div className="text-4xl lg:text-6xl font-bold accent-gradient-text mb-4 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm text-foreground-subtle uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}