import VapiHeroAnimation from '@/components/animations/VapiHeroAnimation'
import VapiShimmer from '@/components/animations/VapiShimmer'

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Demo Section */}
      <section className="container mx-auto px-4 py-12">
        <VapiHeroAnimation
          mainText="The Comet Companies"
          cyclingWords={[
            "Tech Innovation",
            "Digital Solutions", 
            "Portfolio Growth",
            "Strategic Partnerships",
            "Market Leadership"
          ]}
          subtext="A holding company of tech-driven businesses, powering the future through strategic investments and innovative solutions across multiple industries."
          soundWaveSpeed={2.2}
        />
      </section>

      {/* Alternative Demo */}
      <section className="container mx-auto px-4 py-12 border-t border-gray-700">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Alternative Version</h2>
          <p className="text-gray-400">Different speed and content for client sites</p>
        </div>
        
        <VapiHeroAnimation
          mainText="Transform Your Business"
          cyclingWords={[
            "Digital Excellence",
            "Custom Solutions",
            "Growth Strategies", 
            "Modern Technology",
            "Competitive Edge"
          ]}
          subtext="Partner with industry experts to accelerate your digital transformation and achieve measurable business results."
          soundWaveSpeed={1.5}
        />
      </section>

      {/* Exact Vapi Shimmer Animation */}
      <section className="container mx-auto px-4 py-12 border-t border-gray-700">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">🎯 Exact Vapi Shimmer Animation</h2>
          <p className="text-gray-400">Extracted directly from Vapi's newsletter banner</p>
        </div>
        
        {/* Newsletter Banner Recreation */}
        <VapiShimmer className="mb-8">
          <div className="relative w-full cursor-pointer bg-gradient-to-r from-[#0E0E13] via-[#1a1a20] to-[#0E0E13] text-[#FFFAEA] transition-all duration-300 hover:brightness-110 py-4 rounded-lg">
            <div className="relative mx-auto max-w-4xl px-4">
              <div className="flex items-center justify-center">
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 text-xl">✉️</span>
                  <p className="text-sm font-medium">
                    Subscribe to The Comet Companies newsletter and stay ahead of all tech developments
                  </p>
                  <span className="text-sm">→</span>
                </div>
              </div>
            </div>
          </div>
        </VapiShimmer>

        {/* Button Examples with Shimmer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VapiShimmer>
            <button className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
              Get Started with Shimmer
            </button>
          </VapiShimmer>
          
          <VapiShimmer shimmerColor="#82F8C3" duration={2}>
            <div className="w-full px-8 py-4 border border-gray-600 text-gray-300 rounded-lg font-semibold text-center">
              Custom Green Shimmer
            </div>
          </VapiShimmer>
        </div>

        {/* Card with Shimmer */}
        <div className="mt-8">
          <VapiShimmer shimmerColor="#8B5CF6" duration={4}>
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Portfolio Company Showcase</h3>
              <p className="text-gray-300 mb-6">
                Experience the same premium shimmer effect that Vapi uses to highlight their key content and drive user engagement.
              </p>
              <div className="flex gap-4">
                <span className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm">Tech Innovation</span>
                <span className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">Growth Strategy</span>
              </div>
            </div>
          </VapiShimmer>
        </div>
      </section>

    </div>
  )
}