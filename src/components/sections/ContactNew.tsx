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
    <section id="contact" className="py-32 bg-background">
      {/* Perfect Container with Centering */}
      <div className="container mx-auto px-4">
        
        {/* Section Header - Perfectly Centered */}
        <div className="flex flex-col items-center justify-center text-center mb-32 space-y-12">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground max-w-4xl">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            {contactData.description}
          </p>
        </div>

        {/* Contact Content - Perfect Grid Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            
            {/* Contact Options */}
            <div className="space-y-12">
              <div className="space-y-16">
                {contactData.options.map((option) => {
                  const IconComponent = contactIcons[option.title as keyof typeof contactIcons] || Mail
                  
                  return (
                    <Card 
                      key={option.title}
                      className="group transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm"
                    >
                      <a href={option.href} className="block">
                        <CardContent className="p-12">
                          <div className="flex items-start gap-8">
                            {/* Icon */}
                            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                              <IconComponent className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1 space-y-4">
                              <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                                {option.title}
                              </h3>
                              <p className="text-muted-foreground leading-relaxed text-lg">
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
            </div>
            
            {/* Contact Form */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl">
              <CardHeader className="pb-8">
                <CardTitle className="text-3xl text-center text-foreground font-bold">
                  Send us a message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-12">
                <form className="space-y-12">
                  {/* Name Fields */}
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <label className="text-base font-medium text-foreground">
                        First Name
                      </label>
                      <Input 
                        placeholder="John"
                        className="bg-background border-border focus:border-primary focus:ring-primary h-14"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-base font-medium text-foreground">
                        Last Name
                      </label>
                      <Input 
                        placeholder="Doe"
                        className="bg-background border-border focus:border-primary focus:ring-primary h-14"
                      />
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="space-y-4">
                    <label className="text-base font-medium text-foreground">
                      Email
                    </label>
                    <Input 
                      type="email"
                      placeholder="john@company.com"
                      className="bg-background border-border focus:border-primary focus:ring-primary h-14"
                    />
                  </div>
                  
                  {/* Company */}
                  <div className="space-y-4">
                    <label className="text-base font-medium text-foreground">
                      Company
                    </label>
                    <Input 
                      placeholder="Your Company"
                      className="bg-background border-border focus:border-primary focus:ring-primary h-14"
                    />
                  </div>
                  
                  {/* Message */}
                  <div className="space-y-4">
                    <label className="text-base font-medium text-foreground">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your project or inquiry..."
                      className="bg-background border-border focus:border-primary focus:ring-primary min-h-[150px] resize-none p-6"
                    />
                  </div>
                  
                  {/* Submit Button */}
                  <Button 
                    type="submit"
                    className="w-full py-6 text-lg font-semibold rounded-xl mt-8 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
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