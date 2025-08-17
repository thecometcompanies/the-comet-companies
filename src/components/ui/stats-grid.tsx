import { cn } from "@/lib/utils"

interface StatItem {
  value: string
  label: string
  change?: {
    value: number
    direction: 'up' | 'down'
    period: string
  }
  icon?: React.ReactNode
}

interface StatsGridProps {
  stats: StatItem[]
  columns?: 2 | 3 | 4
  variant?: 'default' | 'card' | 'minimal'
  className?: string
}

export function StatsGrid({ 
  stats, 
  columns = 4, 
  variant = 'default',
  className 
}: StatsGridProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4'
  }

  const variantStyles = {
    default: 'text-center',
    card: 'bg-card text-card-foreground rounded-lg border p-6 shadow-sm',
    minimal: 'text-center border-r border-border last:border-r-0 pr-6 last:pr-0'
  }

  return (
    <div className={cn(
      'grid gap-6',
      gridCols[columns],
      variant === 'minimal' && 'divide-x divide-border',
      className
    )}>
      {stats.map((stat, index) => (
        <div key={index} className={cn(
          'space-y-2',
          variantStyles[variant]
        )}>
          {stat.icon && (
            <div className="flex justify-center mb-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {stat.icon}
              </div>
            </div>
          )}
          
          <div className="space-y-1">
            <div className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              {stat.value}
            </div>
            <div className="text-sm font-medium text-muted-foreground">
              {stat.label}
            </div>
          </div>

          {stat.change && (
            <div className="flex items-center justify-center gap-1 text-xs">
              <span className={cn(
                'flex items-center gap-1 font-medium',
                stat.change.direction === 'up' 
                  ? 'text-green-600 dark:text-green-400' 
                  : 'text-red-600 dark:text-red-400'
              )}>
                {stat.change.direction === 'up' ? '↑' : '↓'}
                {stat.change.value}%
              </span>
              <span className="text-muted-foreground">
                vs {stat.change.period}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}