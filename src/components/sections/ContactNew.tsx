'use client'

import { Mail, Building2, Users } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { fetchSiteContent } from '@/lib/content-client'
import type { SiteContent } from '@/lib/content-types'

const contactIcons = {
  'General Inquiries': Mail,
  'Partnership Opportunities': Building2,
  'Investor Relations': Users,
}

export default function ContactNew() {
  const [content, setContent] = useState<SiteContent | null>(null)

  useEffect(() => {
    fetchSiteContent().then(setContent)
  }, [])

  if (!content) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-4">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  const contactData = content.contact

  return (
    <section id="contact" className="py-24 bg-background">
      {/* Perfect Container with Centering */}
      <div className="container mx-auto px-4">
        
        {/* Section Header - Perfectly Centered */}
        <div className="text-center mb-20 max-w-5xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mx-auto">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {contactData.description}
          </p>
        </div>

        {/* Contact Content - Perfect Grid Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact Options */}
            <div className="space-y-6">
              <div className="space-y-8">
                {contactData.options.map((option) => {
                  const IconComponent = contactIcons[option.title as keyof typeof contactIcons] || Mail
                  
                  return (
                    <Card 
                      key={option.title}
                      className="group transition-all duration-300 hover:scale-105 hover:shadow-lg border-border/50 hover:border-primary/50"
                    >
                      <a href={option.href} className="block">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            {/* Icon */}
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                              <IconComponent className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1 space-y-2">
                              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                                {option.title}
                              </h3>
                              <p className="text-muted-foreground leading-relaxed">
                                {option.description}
                              </p>
                              <div className="text-primary font-medium text-sm uppercase tracking-wide">
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
            </div>
            
            {/* Contact Form */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-foreground">
                  Send us a message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        First Name
                      </label>
                      <Input 
                        placeholder="John"
                        className="bg-background border-border focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Last Name
                      </label>
                      <Input 
                        placeholder="Doe"
                        className="bg-background border-border focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input 
                      type="email"
                      placeholder="john@company.com"
                      className="bg-background border-border focus:border-primary focus:ring-primary"
                    />
                  </div>
                  
                  {/* Company */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Company
                    </label>
                    <Input 
                      placeholder="Your Company"
                      className="bg-background border-border focus:border-primary focus:ring-primary"
                    />
                  </div>
                  
                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your project or inquiry..."
                      className="bg-background border-border focus:border-primary focus:ring-primary min-h-[120px] resize-none"
                    />
                  </div>
                  
                  {/* Submit Button */}
                  <Button 
                    type="submit"
                    className="w-full py-3 text-base font-medium rounded-lg"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            
          </div>
        </div>
        
      </div>
    </section>
  )
}