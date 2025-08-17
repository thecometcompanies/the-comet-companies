import { ArrowRight } from 'lucide-react'
import { loadSiteContent } from '@/lib/content-server'

export default function Hero() {
  const content = loadSiteContent()
  const heroData = content.hero
  
  return (
    <section className="relative flex w-full flex-col gap-12 pt-14 text-center md:gap-10 md:pt-24 xl:gap-16 xl:pt-[6.5rem] bg-base-bg-main">
      <div className="dotted-bg absolute inset-0 z-[-1]"></div>
      
      <h1 className="px-6 text-balance xl:text-7xl xl:leading-[100%] xl:tracking-[-0.15rem] md:text-8xl md:leading-[6rem] md:tracking-[-0.11rem] xs:text-5xl xs:leading-[4rem] xs:tracking-[-0.07rem] text-4xl leading-[3.5rem] tracking-[-0.07rem] text-base-bg-alt">
        <span>{heroData.headline.split(' ').slice(0, 3).join(' ')}<br /></span>
        <span>{heroData.headline.split(' ').slice(3).join(' ')}</span>
      </h1>
      
      <div className="mx-auto flex w-full max-w-[19.375rem] flex-col items-center gap-3 px-6 pb-2 sm:max-w-[35.5rem] md:flex-row md:pb-[3.5rem] xl:pb-[0.5rem]">
        <a className="text-center justify-center items-center font-medium rounded-full focus-ring transition-all duration-300 font-mono uppercase active:scale-95 bg-brand-primary hover:bg-brand-primary-hovered text-base-950 focus-ring-primary h-[3.5rem] [--height-value:3.5rem] px-5 py-2 gap-4 tracking-[.07rem] text-xs leading-5 group flex w-full md:flex-1" href="#portfolio">
          <div className="flex h-full w-full items-center justify-center gap-4">
            View Our Portfolio
            <ArrowRight className="w-4 h-4" />
          </div>
        </a>
        <a className="text-center justify-center items-center font-medium rounded-full focus-ring transition-all duration-300 font-mono uppercase active:scale-95 bg-base-950 border border-base-700 text-base-300 hover:text-base-200 hover:border-base-500 focus-ring-secondary h-[3.5rem] [--height-value:3.5rem] px-5 py-2 gap-4 tracking-[.07rem] text-xs leading-5 group flex w-full md:flex-1" href="#contact">
          <div className="flex h-full w-full items-center justify-center gap-4">
            Investor Relations
          </div>
        </a>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 border-t border-base-800 max-w-5xl mx-auto px-6">
        {heroData.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl lg:text-5xl font-bold text-base-bg-alt mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-base-400 uppercase tracking-wide font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}