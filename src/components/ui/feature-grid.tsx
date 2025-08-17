import { cn } from "@/lib/utils"

interface Feature {
  title: string
  description: string
  icon?: React.ReactNode
  link?: {
    text: string
    href: string
  }
}

interface FeatureGridProps {
  features: Feature[]
  columns?: 2 | 3 | 4
  variant?: 'default' | 'card' | 'minimal'
  className?: string
}

export function FeatureGrid({ 
  features, 
  columns = 3, 
  variant = 'default',
  className 
}: FeatureGridProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }

  const variantStyles = {
    default: 'text-center',
    card: 'bg-card text-card-foreground rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow',
    minimal: 'text-left'
  }

  return (
    <div className={cn(
      'grid gap-8',
      gridCols[columns],
      className
    )}>
      {features.map((feature, index) => (
        <div key={index} className={cn(
          'space-y-4',
          variantStyles[variant]
        )}>
          {feature.icon && (
            <div className={cn(
              "flex items-center justify-center",
              variant === 'minimal' && "justify-start"
            )}>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {feature.icon}
              </div>
            </div>
          )}
          
          <div className="space-y-2">
            <h3 className="text-lg font-semibold tracking-tight">
              {feature.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>

          {feature.link && (
            <div className={cn(
              "pt-2",
              variant === 'default' && "flex justify-center"
            )}>
              <a 
                href={feature.link.href}
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                {feature.link.text}
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

// Specialized components for common feature patterns
interface ServiceFeatureProps {
  title: string
  description: string
  benefits: string[]
  icon?: React.ReactNode
  className?: string
}

export function ServiceFeature({ 
  title, 
  description, 
  benefits, 
  icon,
  className 
}: ServiceFeatureProps) {
  return (
    <div className={cn(
      'bg-card text-card-foreground rounded-lg border p-6 shadow-sm',
      className
    )}>
      {icon && (
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
          {icon}
        </div>
      )}
      
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
        {description}
      </p>
      
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <svg
              className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}