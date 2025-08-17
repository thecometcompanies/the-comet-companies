'use client'

import { Button, Card, CardBody, CardHeader, CardFooter, Chip, Avatar, Progress, Badge, Divider, Link, Spacer } from "@heroui/react"
import { StatsGrid } from "@/components/ui/stats-grid"
import { TestimonialCard, TestimonialsGrid } from "@/components/ui/testimonial-card"
import { PricingGrid } from "@/components/ui/pricing-card"
import { FeatureGrid, ServiceFeature } from "@/components/ui/feature-grid"

export default function ComponentShowcase() {
  // Sample data for components
  const stats = [
    { value: "185k+", label: "Happy Clients", change: { value: 23, direction: 'up' as const, period: 'last quarter' } },
    { value: "95%", label: "Client Retention" },
    { value: "15+", label: "Years Experience" },
    { value: "100%", label: "Tech Focused" }
  ]

  const testimonials = [
    {
      quote: "The Comet Companies transformed our digital presence completely. Their expertise in tech-driven solutions is unmatched.",
      author: {
        name: "Sarah Johnson",
        title: "CEO",
        company: "TechStart Inc."
      },
      rating: 5
    },
    {
      quote: "Working with their portfolio companies has been a game-changer for our business growth and innovation.",
      author: {
        name: "Michael Chen",
        title: "CTO",
        company: "Innovation Labs"
      },
      rating: 5
    },
    {
      quote: "Their strategic approach to technology investments has consistently delivered exceptional results.",
      author: {
        name: "Emily Rodriguez",
        title: "Founder",
        company: "GrowthTech"
      },
      rating: 5
    }
  ]

  const pricingPlans = [
    {
      title: "Starter",
      description: "Perfect for small businesses getting started",
      price: { amount: "99", period: "month" },
      features: [
        { text: "Up to 5 projects", included: true },
        { text: "Basic analytics", included: true },
        { text: "Email support", included: true },
        { text: "Advanced features", included: false },
        { text: "Priority support", included: false }
      ],
      ctaText: "Get Started"
    },
    {
      title: "Professional",
      description: "Ideal for growing companies",
      price: { amount: "299", period: "month" },
      features: [
        { text: "Unlimited projects", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Priority support", included: true },
        { text: "Custom integrations", included: true },
        { text: "Dedicated manager", included: false }
      ],
      ctaText: "Upgrade Now",
      popular: true
    },
    {
      title: "Enterprise",
      description: "For large organizations",
      price: { amount: "999", period: "month" },
      features: [
        { text: "Everything in Professional", included: true },
        { text: "Dedicated account manager", included: true },
        { text: "Custom development", included: true },
        { text: "24/7 phone support", included: true },
        { text: "SLA guarantee", included: true }
      ],
      ctaText: "Contact Sales"
    }
  ]

  const features = [
    {
      title: "Tech Innovation",
      description: "Cutting-edge technology solutions that drive business growth and competitive advantage.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Strategic Growth",
      description: "Data-driven strategies that accelerate expansion and maximize market opportunities.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    {
      title: "Expert Support",
      description: "Dedicated team of professionals providing guidance and support throughout your journey.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto px-8 py-12">
          <h1 className="text-4xl font-bold mb-4">Professional Component Library</h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
            A comprehensive collection of professional, reusable components for The Comet Companies portfolio. 
            These components provide consistent, accessible, and beautiful UI elements for all your projects.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-8 py-16 space-y-20">
        
        {/* HeroUI Professional Components */}
        <section>
          <h2 className="text-3xl font-bold mb-12">HeroUI Professional Components</h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            
            {/* Professional Card Example */}
            <Card className="w-full p-6">
              <CardHeader className="flex gap-4 pb-6">
                <Avatar
                  alt="nextui logo"
                  height={48}
                  radius="sm"
                  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                  width={48}
                />
                <div className="flex flex-col">
                  <p className="text-lg font-semibold">NextUI</p>
                  <p className="text-default-500">nextui.org</p>
                </div>
              </CardHeader>
              <Divider/>
              <CardBody className="py-6">
                <p className="text-base leading-relaxed">Make beautiful websites regardless of your design experience.</p>
              </CardBody>
              <Divider/>
              <CardFooter className="pt-6">
                <Link
                  isExternal
                  showAnchorIcon
                  href="https://github.com/nextui-org/nextui"
                  className="text-primary"
                >
                  Visit source code on GitHub.
                </Link>
              </CardFooter>
            </Card>

            {/* Progress Cards */}
            <Card className="w-full p-6">
              <CardHeader className="pb-6">
                <h3 className="text-lg font-semibold">Project Progress</h3>
              </CardHeader>
              <CardBody className="space-y-6">
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-base font-medium">Frontend Development</span>
                    <span className="text-base font-semibold text-success">85%</span>
                  </div>
                  <Progress 
                    aria-label="Frontend progress"
                    size="md"
                    value={85}
                    color="success"
                    className="w-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-base font-medium">Backend API</span>
                    <span className="text-base font-semibold text-warning">60%</span>
                  </div>
                  <Progress 
                    aria-label="Backend progress"
                    size="md"
                    value={60}
                    color="warning"
                    className="w-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-base font-medium">Testing</span>
                    <span className="text-base font-semibold text-danger">40%</span>
                  </div>
                  <Progress 
                    aria-label="Testing progress"
                    size="md"
                    value={40}
                    color="danger"
                    className="w-full"
                  />
                </div>
              </CardBody>
            </Card>

            {/* Status & Badges Card */}
            <Card className="w-full p-6">
              <CardHeader className="pb-6">
                <h3 className="text-lg font-semibold">System Status</h3>
              </CardHeader>
              <CardBody className="space-y-5">
                <div className="flex items-center justify-between py-2">
                  <span className="text-base font-medium">API Status</span>
                  <Chip color="success" variant="flat" size="md">Online</Chip>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-base font-medium">Database</span>
                  <Chip color="success" variant="flat" size="md">Healthy</Chip>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-base font-medium">CDN</span>
                  <Chip color="warning" variant="flat" size="md">Degraded</Chip>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-base font-medium">Monitoring</span>
                  <Chip color="danger" variant="flat" size="md">Down</Chip>
                </div>
                <Spacer y={4} />
                <div className="flex gap-4 flex-wrap">
                  <Badge content="99" color="danger">
                    <Button variant="bordered" size="md" className="px-6 py-2">Notifications</Button>
                  </Badge>
                  <Badge content="5" color="primary">
                    <Button variant="bordered" size="md" className="px-6 py-2">Messages</Button>
                  </Badge>
                </div>
              </CardBody>
            </Card>

            {/* Team Members Card */}
            <Card className="w-full p-6">
              <CardHeader className="pb-6">
                <h3 className="text-lg font-semibold">Team Members</h3>
              </CardHeader>
              <CardBody className="space-y-5">
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-default-50 transition-colors">
                  <Avatar 
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    size="md"
                  />
                  <div className="flex flex-col flex-1">
                    <span className="text-base font-semibold">Sarah Johnson</span>
                    <span className="text-sm text-default-500">Lead Developer</span>
                  </div>
                  <Chip size="md" color="success" variant="flat">Active</Chip>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-default-50 transition-colors">
                  <Avatar 
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    size="md"
                  />
                  <div className="flex flex-col flex-1">
                    <span className="text-base font-semibold">Michael Chen</span>
                    <span className="text-sm text-default-500">Designer</span>
                  </div>
                  <Chip size="md" color="warning" variant="flat">Away</Chip>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-default-50 transition-colors">
                  <Avatar 
                    src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                    size="md"
                  />
                  <div className="flex flex-col flex-1">
                    <span className="text-base font-semibold">Emily Rodriguez</span>
                    <span className="text-sm text-default-500">Product Manager</span>
                  </div>
                  <Chip size="md" color="default" variant="flat">Offline</Chip>
                </div>
              </CardBody>
            </Card>

            {/* Actions Card */}
            <Card className="w-full p-6">
              <CardHeader className="pb-6">
                <h3 className="text-lg font-semibold">Quick Actions</h3>
              </CardHeader>
              <CardBody className="space-y-4">
                <Button color="primary" size="lg" className="w-full py-3">
                  Deploy to Production
                </Button>
                <Button color="secondary" variant="bordered" size="lg" className="w-full py-3">
                  Run Tests
                </Button>
                <Button color="warning" variant="flat" size="lg" className="w-full py-3">
                  Generate Report
                </Button>
                <Button color="danger" variant="light" size="lg" className="w-full py-3">
                  Emergency Stop
                </Button>
              </CardBody>
            </Card>

            {/* Analytics Card */}
            <Card className="w-full p-6">
              <CardHeader className="flex flex-col items-start pb-6">
                <h3 className="text-lg font-semibold">Analytics Overview</h3>
                <p className="text-base text-default-500 mt-1">Last 30 days</p>
              </CardHeader>
              <CardBody className="space-y-6">
                <div className="flex justify-between items-center py-2">
                  <span className="text-base font-medium">Page Views</span>
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold">24,561</span>
                    <Chip size="md" color="success" variant="flat">+12%</Chip>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-base font-medium">Unique Visitors</span>
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold">8,432</span>
                    <Chip size="md" color="success" variant="flat">+8%</Chip>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-base font-medium">Conversion Rate</span>
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold">3.2%</span>
                    <Chip size="md" color="danger" variant="flat">-2%</Chip>
                  </div>
                </div>
              </CardBody>
            </Card>

          </div>
        </section>

        {/* Stats Grid */}
        <section>
          <h2 className="text-3xl font-bold mb-12">Statistics & Metrics</h2>
          <div className="space-y-10">
            <Card className="p-10">
              <h3 className="text-xl font-semibold mb-8">Stats Grid - Card Variant</h3>
              <StatsGrid stats={stats} variant="card" columns={4} />
            </Card>
            
            <Card className="p-10">
              <h3 className="text-xl font-semibold mb-8">Stats Grid - Minimal Variant</h3>
              <StatsGrid stats={stats} variant="minimal" columns={4} />
            </Card>
          </div>
        </section>

        {/* Feature Grid */}
        <section>
          <h2 className="text-3xl font-bold mb-12">Feature Showcases</h2>
          <div className="space-y-10">
            <Card className="p-10">
              <h3 className="text-xl font-semibold mb-8">Feature Grid - Card Variant</h3>
              <FeatureGrid features={features} variant="card" columns={3} />
            </Card>

            <Card className="p-10">
              <h3 className="text-xl font-semibold mb-8">Service Feature</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <ServiceFeature
                  title="Digital Transformation"
                  description="Complete digital overhaul to modernize your business operations and customer experience."
                  benefits={[
                    "Process automation",
                    "Cloud migration",
                    "Data analytics",
                    "Mobile optimization"
                  ]}
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  }
                />
                <ServiceFeature
                  title="Strategic Consulting"
                  description="Expert guidance to navigate complex business challenges and identify growth opportunities."
                  benefits={[
                    "Market analysis",
                    "Competitive research",
                    "Strategic planning",
                    "Implementation support"
                  ]}
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  }
                />
              </div>
            </Card>
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <h2 className="text-3xl font-bold mb-12">Client Testimonials</h2>
          <div className="space-y-10">
            <Card className="p-10">
              <h3 className="text-xl font-semibold mb-8">Testimonials Grid</h3>
              <TestimonialsGrid testimonials={testimonials} columns={3} />
            </Card>

            <Card className="p-10">
              <h3 className="text-xl font-semibold mb-8">Featured Testimonial</h3>
              <TestimonialCard {...testimonials[0]} variant="featured" />
            </Card>
          </div>
        </section>

        {/* Pricing */}
        <section>
          <h2 className="text-3xl font-bold mb-12">Pricing Tables</h2>
          <Card className="p-10">
            <h3 className="text-xl font-semibold mb-8">Pricing Grid</h3>
            <PricingGrid plans={pricingPlans} />
          </Card>
        </section>

        {/* Usage Guide */}
        <section>
          <h2 className="text-3xl font-bold mb-12">Usage Guide</h2>
          <Card className="p-10">
            <h3 className="text-xl font-semibold mb-8">How to Use These Components</h3>
            <div className="prose dark:prose-invert max-w-none">
              <p>This showcase features two component systems:</p>
              
              <h4>1. HeroUI Professional Components (Recommended)</h4>
              <p>Enterprise-grade components built with modern design principles:</p>
              <ul>
                <li><strong>Professional:</strong> Pre-built components designed for business applications</li>
                <li><strong>Accessible:</strong> WCAG 2.1 compliant with keyboard navigation</li>
                <li><strong>Customizable:</strong> Theme-based customization with design tokens</li>
                <li><strong>Modern:</strong> React 19 compatible with latest features</li>
                <li><strong>TypeScript:</strong> Fully typed for better developer experience</li>
              </ul>
              
              <h4>Import HeroUI components:</h4>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`import { 
  Button, 
  Card, 
  CardBody, 
  CardHeader,
  Avatar,
  Chip,
  Progress,
  Badge
} from "@heroui/react"

// Use in your components
<Button color="primary">Click me</Button>
<Card>
  <CardHeader>Title</CardHeader>
  <CardBody>Content</CardBody>
</Card>`}
              </pre>

              <h4>2. Custom UI Components</h4>
              <p>Custom-built components for specific use cases:</p>
              <ul>
                <li><strong>StatsGrid:</strong> Display metrics and KPIs</li>
                <li><strong>TestimonialCard:</strong> Client testimonials with ratings</li>
                <li><strong>PricingGrid:</strong> Pricing tables and plans</li>
                <li><strong>FeatureGrid:</strong> Feature showcases and benefits</li>
              </ul>
              
              <h4>Import custom components:</h4>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`import { 
  StatsGrid, 
  TestimonialCard, 
  PricingGrid 
} from "@/components/ui"

// Use in your pages/components
<StatsGrid stats={statsData} variant="card" />
<TestimonialCard {...testimonialData} />
<PricingGrid plans={pricingData} />`}
              </pre>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}