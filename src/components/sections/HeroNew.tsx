import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { loadSiteContent } from '@/lib/content-server'

export default function HeroNew() {
  const content = loadSiteContent()
  const heroData = content.hero
  
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Background Pattern */}
      <div className="dotted-bg absolute inset-0 z-[-1] opacity-30"></div>
      
      {/* Perfect Centering Container */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-16">
          
          {/* Main Headline with Perfect Typography */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-tight mx-auto">
            <span className="block">{heroData.headline.split(' ').slice(0, 3).join(' ')}</span>
            <span className="block text-primary">{heroData.headline.split(' ').slice(3).join(' ')}</span>
          </h1>
          
          {/* CTA Buttons with Perfect Spacing */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12">
            <Button 
              size="lg" 
              className="px-8 py-4 text-base font-medium rounded-full group min-w-[200px]"
              asChild
            >
              <a href="#portfolio">
                View Our Portfolio
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 text-base font-medium rounded-full min-w-[200px]"
              asChild
            >
              <a href="#contact">
                Investor Relations
              </a>
            </Button>
          </div>
          
        </div>
      </div>
      
      {/* Stats Grid with Perfect Centering */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-20">
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-20 max-w-7xl">
              {heroData.stats.map((stat) => (
                <div key={stat.label} className="text-center space-y-4">
                  <div className="text-3xl lg:text-5xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements for Visual Interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  )
}