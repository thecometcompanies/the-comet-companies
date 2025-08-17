'use client'

interface VapiShimmerProps {
  children: React.ReactNode
  shimmerColor?: string
  opacity?: number
  duration?: number
  className?: string
}

export default function VapiShimmer({ 
  children, 
  shimmerColor = '#82F8C3', 
  opacity = 0.1,
  duration = 3,
  className = ''
}: VapiShimmerProps) {
  return (
    <div className={`relative ${className}`}>
      {children}
      
      {/* Shimmer Effect Overlay - Exact Vapi Implementation */}
      <div className="pointer-events-none absolute inset-0" style={{ opacity: 0.3 }}>
        <div 
          className="absolute inset-0 animate-shimmer"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${shimmerColor}${Math.round(opacity * 255).toString(16).padStart(2, '0')} 50%, transparent 100%)`,
            animationDuration: `${duration}s`
          }}
        />
      </div>
    </div>
  )
}