'use client'

import { cn } from "@/lib/utils"
import { Button } from "./button"

interface PricingFeature {
  text: string
  included: boolean
}

interface PricingCardProps {
  title: string
  description: string
  price: {
    amount: string
    period?: string
    currency?: string
  }
  features: PricingFeature[]
  ctaText: string
  ctaAction?: () => void
  popular?: boolean
  variant?: 'default' | 'featured'
  className?: string
}

export function PricingCard({
  title,
  description,
  price,
  features,
  ctaText,
  ctaAction,
  popular = false,
  variant = 'default',
  className
}: PricingCardProps) {
  const cardStyles = {
    default: 'bg-card text-card-foreground rounded-lg border p-6 shadow-sm',
    featured: 'bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border-2 border-primary p-8 shadow-xl relative'
  }

  return (
    <div className={cn(
      cardStyles[variant],
      popular && 'ring-2 ring-primary ring-offset-2 ring-offset-background',
      className
    )}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        <div className="mb-6">
          <span className="text-3xl md:text-4xl font-bold">
            {price.currency || '$'}{price.amount}
          </span>
          {price.period && (
            <span className="text-muted-foreground ml-1">
              /{price.period}
            </span>
          )}
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className={cn(
              "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
              feature.included 
                ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                : "bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500"
            )}>
              {feature.included ? (
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <span className={cn(
              "text-sm",
              feature.included ? "text-foreground" : "text-muted-foreground line-through"
            )}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <Button 
        className="w-full" 
        variant={popular ? 'default' : 'outline'}
        size="lg"
        onClick={ctaAction}
      >
        {ctaText}
      </Button>
    </div>
  )
}

interface PricingGridProps {
  plans: PricingCardProps[]
  className?: string
}

export function PricingGrid({ plans, className }: PricingGridProps) {
  return (
    <div className={cn(
      'grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start',
      className
    )}>
      {plans.map((plan, index) => (
        <PricingCard key={index} {...plan} />
      ))}
    </div>
  )
}