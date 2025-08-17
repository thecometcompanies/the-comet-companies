import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  size?: "sm" | "md" | "lg" | "xl"
  container?: boolean
}

const sectionSizes = {
  sm: "py-16",
  md: "py-24", 
  lg: "py-32",
  xl: "py-40"
}

function Section({ 
  className, 
  size = "lg", 
  container = true, 
  children, 
  ...props 
}: SectionProps) {
  return (
    <section
      className={cn(
        sectionSizes[size],
        "relative",
        className
      )}
      {...props}
    >
      {container ? (
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      ) : (
        children
      )}
    </section>
  )
}

function SectionHeader({ 
  className, 
  children, 
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "text-center mb-16 lg:mb-24 space-y-6 lg:space-y-8",
        "max-w-4xl mx-auto",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function SectionTitle({ 
  className, 
  children, 
  ...props 
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "text-4xl md:text-5xl lg:text-6xl font-bold text-foreground",
        "leading-tight tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  )
}

function SectionDescription({ 
  className, 
  children, 
  ...props 
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-lg lg:text-xl text-muted-foreground leading-relaxed",
        "max-w-3xl mx-auto",
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}

export { Section, SectionHeader, SectionTitle, SectionDescription }