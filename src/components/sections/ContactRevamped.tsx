'use client'

import { Mail, Building2, Users } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Section, SectionHeader, SectionTitle, SectionDescription } from '@/components/ui/section'
import { fetchSiteContent } from '@/lib/content-client'
import type { SiteContent } from '@/lib/content-types'

const contactIcons = {
  'General Inquiries': Mail,
  'Partnership Opportunities': Building2,
  'Investor Relations': Users,
}

export default function ContactRevamped() {
  const [content, setContent] = useState<SiteContent | null>(null)

  useEffect(() => {
    fetchSiteContent().then(setContent)
  }, [])

  if (!content) {
    return (
      <Section className="bg-background">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center space-y-4">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-muted-foreground">Loading contact information...</p>
          </div>
        </div>
      </Section>
    )
  }

  const contactData = content.contact

  return (
    <Section id="contact" className="bg-background" size="xl">
      {/* Section Header with Proper Spacing */}
      <SectionHeader>
        <SectionTitle>
          Get In <span className="text-primary">Touch</span>
        </SectionTitle>
        <SectionDescription>
          {contactData.description}
        </SectionDescription>
      </SectionHeader>

      {/* Contact Content Grid with Generous Spacing */}
      <div className="space-y-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Contact Options */}
          <div className="space-y-8">
            {contactData.options.map((option) => {
              const IconComponent = contactIcons[option.title as keyof typeof contactIcons] || Mail
              
              return (
                <Card 
                  key={option.title}
                  className="group transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm"
                >
                  <a href={option.href} className="block">
                    <CardContent className="p-8 lg:p-12">
                      <div className="flex items-start gap-6 lg:gap-8">
                        {/* Icon */}
                        <div className="w-14 h-14 lg:w-16 lg:h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                          <IconComponent className="w-7 h-7 lg:w-8 lg:h-8 text-primary group-hover:text-primary-foreground" />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 space-y-3 lg:space-y-4">
                          <h3 className="text-xl lg:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                            {option.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                            {option.description}
                          </p>
                          <div className="text-primary font-medium text-sm uppercase tracking-wider pt-2">
                            {option.action}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </a>
                </Card>
              )
            })}
          </div>
          
          {/* Contact Form */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl sticky top-8">
            <CardHeader className="pb-6 lg:pb-8">
              <CardTitle className="text-2xl lg:text-3xl text-center text-foreground font-bold">
                Send us a message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 lg:space-y-10">
              <form className="space-y-8 lg:space-y-10">
                {/* Name Fields */}
                <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                  <div className="space-y-3 lg:space-y-4">
                    <label className="text-base font-medium text-foreground">
                      First Name
                    </label>
                    <Input 
                      placeholder="John"
                      className="bg-background border-border focus:border-primary focus:ring-primary h-12 lg:h-14"
                    />
                  </div>
                  <div className="space-y-3 lg:space-y-4">
                    <label className="text-base font-medium text-foreground">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Doe"
                      className="bg-background border-border focus:border-primary focus:ring-primary h-12 lg:h-14"
                    />
                  </div>
                </div>
                
                {/* Email */}
                <div className="space-y-3 lg:space-y-4">
                  <label className="text-base font-medium text-foreground">
                    Email
                  </label>
                  <Input 
                    type="email"
                    placeholder="john@company.com"
                    className="bg-background border-border focus:border-primary focus:ring-primary h-12 lg:h-14"
                  />
                </div>
                
                {/* Company */}
                <div className="space-y-3 lg:space-y-4">
                  <label className="text-base font-medium text-foreground">
                    Company
                  </label>
                  <Input 
                    placeholder="Your Company"
                    className="bg-background border-border focus:border-primary focus:ring-primary h-12 lg:h-14"
                  />
                </div>
                
                {/* Message */}
                <div className="space-y-3 lg:space-y-4">
                  <label className="text-base font-medium text-foreground">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your project or inquiry..."
                    className="bg-background border-border focus:border-primary focus:ring-primary min-h-[120px] lg:min-h-[150px] resize-none p-4 lg:p-6"
                  />
                </div>
                
                {/* Submit Button */}
                <Button 
                  type="submit"
                  className="w-full py-4 lg:py-6 text-base lg:text-lg font-semibold rounded-xl bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
        </div>
      </div>
    </Section>
  )
}