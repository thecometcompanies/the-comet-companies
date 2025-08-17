'use client'

import { cn } from "@/lib/utils"
import { Button } from "./button"

interface HeroAction {
  text: string
  href?: string
  onClick?: () => void
  variant?: 'default' | 'outline' | 'ghost'
}

interface HeroSectionProps {
  headline: string
  subheadline?: string
  description?: string
  actions?: HeroAction[]
  badge?: {
    text: string
    variant?: 'default' | 'success' | 'warning'
  }
  variant?: 'default' | 'centered' | 'split'
  backgroundImage?: string
  className?: string
  children?: React.ReactNode
}

export function HeroSection({
  headline,
  subheadline,
  description,
  actions = [],
  badge,
  variant = 'centered',
  backgroundImage,
  className,
  children
}: HeroSectionProps) {
  const variantStyles = {
    default: 'text-left max-w-2xl',
    centered: 'text-center max-w-4xl mx-auto',
    split: 'text-left max-w-2xl'
  }

  const badgeVariants = {
    default: 'bg-primary/10 text-primary border-primary/20',
    success: 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800',
    warning: 'bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800'
  }

  return (
    <section className={cn(
      'relative py-16 md:py-24 lg:py-32',
      className
    )}>
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      <div className="relative container mx-auto px-4">
        <div className={variantStyles[variant]}>
          {badge && (
            <div className="mb-6">
              <span className={cn(
                'inline-flex items-center px-3 py-1 rounded-full border text-xs font-medium',
                badgeVariants[badge.variant || 'default']
              )}>
                {badge.text}
              </span>
            </div>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6">
            {headline}
            {subheadline && (
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                {subheadline}
              </span>
            )}
          </h1>

          {description && (
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {description}
            </p>
          )}

          {actions.length > 0 && (
            <div className={cn(
              'flex gap-4',
              variant === 'centered' && 'justify-center',
              'flex-col sm:flex-row'
            )}>
              {actions.map((action, index) => (
                <Button
                  key={index}
                  variant={action.variant || (index === 0 ? 'default' : 'outline')}
                  size="lg"
                  asChild={!!action.href}
                  onClick={action.onClick}
                  className="min-w-[140px]"
                >
                  {action.href ? (
                    <a href={action.href}>{action.text}</a>
                  ) : (
                    action.text
                  )}
                </Button>
              ))}
            </div>
          )}

          {children && (
            <div className="mt-12">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

// Specialized hero variants
interface PortfolioHeroProps {
  companyName: string
  tagline: string
  description: string
  stats?: Array<{
    value: string
    label: string
  }>
  ctaText?: string
  ctaAction?: () => void
}

export function PortfolioHero({
  companyName,
  tagline,
  description,
  stats,
  ctaText = "Get Started",
  ctaAction
}: PortfolioHeroProps) {
  return (
    <HeroSection
      headline={companyName}
      subheadline={tagline}
      description={description}
      variant="centered"
      actions={[
        { text: ctaText, onClick: ctaAction },
        { text: "Learn More", variant: 'outline' }
      ]}
    >
      {stats && stats.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </HeroSection>
  )
}