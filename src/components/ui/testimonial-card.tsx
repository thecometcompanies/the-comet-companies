import { cn } from "@/lib/utils"

interface TestimonialProps {
  quote: string
  author: {
    name: string
    title: string
    company?: string
    avatar?: string
  }
  rating?: number
  variant?: 'default' | 'featured' | 'minimal'
  className?: string
}

export function TestimonialCard({ 
  quote, 
  author, 
  rating = 5,
  variant = 'default',
  className 
}: TestimonialProps) {
  const variantStyles = {
    default: 'bg-card text-card-foreground rounded-lg border p-6 shadow-sm',
    featured: 'bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20 p-8 shadow-lg',
    minimal: 'border-l-4 border-primary pl-6 py-4'
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={cn(
              "h-4 w-4",
              i < rating 
                ? "text-yellow-400 fill-current" 
                : "text-gray-300 dark:text-gray-600"
            )}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <div className={cn(variantStyles[variant], className)}>
      {variant !== 'minimal' && renderStars(rating)}
      
      <blockquote className="text-lg leading-relaxed mb-6 italic">
        "{quote}"
      </blockquote>

      <div className="flex items-center gap-4">
        {author.avatar ? (
          <img
            src={author.avatar}
            alt={author.name}
            className="h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-semibold text-lg">
              {author.name.charAt(0)}
            </span>
          </div>
        )}
        
        <div>
          <div className="font-semibold text-foreground">
            {author.name}
          </div>
          <div className="text-sm text-muted-foreground">
            {author.title}
            {author.company && (
              <>
                <span className="mx-1">•</span>
                {author.company}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

interface TestimonialsGridProps {
  testimonials: TestimonialProps[]
  columns?: 1 | 2 | 3
  className?: string
}

export function TestimonialsGrid({ 
  testimonials, 
  columns = 3,
  className 
}: TestimonialsGridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  }

  return (
    <div className={cn(
      'grid gap-6',
      gridCols[columns],
      className
    )}>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          {...testimonial}
        />
      ))}
    </div>
  )
}