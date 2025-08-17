import { ArrowRight } from 'lucide-react'
import { loadSiteContent } from '@/lib/content-server'

export default function Hero() {
  const content = loadSiteContent()
  const heroData = content.hero
  
  return (
    <section className="pt-32 pb-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Main Content */}
        <div className="text-center max-w-5xl mx-auto mb-20">
          <h1 className="text-5xl font-bold mb-8 text-gray-900">
            {heroData.headline}
          </h1>
          
          <p className="text-xl mb-16 max-w-3xl mx-auto text-gray-600">
            {heroData.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-gray-900 text-white flex items-center gap-3 hover:bg-black transition-colors px-8 py-4 text-lg font-medium rounded-lg">
              View Our Portfolio
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 transition-colors px-8 py-4 text-lg font-medium rounded-lg">
              Start a Partnership
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 pt-20 border-t border-gray-200">
          {heroData.stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                {stat.value}
              </div>
              <div className="text-base text-gray-600 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}