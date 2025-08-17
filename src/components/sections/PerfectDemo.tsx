import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Building2, Users, Mail, Star } from 'lucide-react'

export default function PerfectDemo() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      
      {/* PERFECT H2 CENTERING - Problem Solved! */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              ✅ Perfect Centering Solution
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground">
              This H2 is <span className="text-primary">Perfectly Centered</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Notice how the heading and text are automatically centered using container + max-width + mx-auto pattern
            </p>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* CARD PADDING - Problem Solved! */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Card Padding <span className="text-primary">Automatically Fixed</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Shadcn/ui CardContent component handles all padding automatically
            </p>
          </div>

          {/* Grid with Perfect Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* Card 1 - Notice automatic padding */}
            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">Perfect Padding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  CardContent automatically adds proper padding (p-6). No manual CSS needed!
                </p>
                <Button size="sm" className="w-full">
                  Perfectly Spaced Button
                </Button>
              </CardContent>
            </Card>

            {/* Card 2 - With form elements */}
            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">Form Elements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Perfect spacing" />
                <Textarea placeholder="Auto-sized textarea" className="min-h-[100px]" />
                <Button className="w-full">Submit</Button>
              </CardContent>
            </Card>

            {/* Card 3 - With stats */}
            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">Auto Layout</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Performance</span>
                    <Badge variant="secondary">95%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Accessibility</span>
                    <Badge className="bg-primary text-primary-foreground">100%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">SEO</span>
                    <Badge variant="secondary">98%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* RESPONSIVE GRID - Auto-centering */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              <span className="text-primary">Responsive Grid</span> Auto-Centering
            </h2>
            <p className="text-xl text-muted-foreground">
              Grid items automatically center and reflow on different screen sizes
            </p>
          </div>

          {/* Auto-centering responsive grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {[...Array(12)].map((_, i) => (
              <Card key={i} className="p-4 text-center hover:scale-105 transition-transform">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">Item {i + 1}</p>
                  <p className="text-xs text-muted-foreground">Auto-centered</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* PERFECT FORM LAYOUT */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Perfect <span className="text-primary">Form Layout</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                All spacing and alignment handled automatically
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Contact Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input type="email" placeholder="john@company.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <Textarea placeholder="Your message..." className="min-h-[120px]" />
                  </div>
                  
                  <Button className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FINAL DEMO - Everything Together */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary text-primary-foreground">
              🎯 All Problems Solved
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why <span className="text-primary">Shadcn/ui</span> Fixes Everything
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Before/After Comparison */}
            <Card className="border-red-500/20">
              <CardHeader>
                <CardTitle className="text-red-400">❌ Before (Manual CSS)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p>• H2s not centered properly</p>
                  <p>• Cards have no padding</p>
                  <p>• Manual spacing calculations</p>
                  <p>• Responsive design breaks</p>
                  <p>• Inconsistent styling</p>
                  <p>• CSS conflicts and overrides</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">✅ After (Shadcn/ui)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p>• Perfect centering with container patterns</p>
                  <p>• CardContent adds padding automatically</p>
                  <p>• Built-in spacing system (space-y, gap)</p>
                  <p>• Responsive by default</p>
                  <p>• Consistent design tokens</p>
                  <p>• Zero CSS conflicts</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}