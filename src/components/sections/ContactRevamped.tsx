'use client'

import { Mail, Building2, Users } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Button, Card, CardBody, CardHeader, Input, Textarea, Divider } from '@heroui/react'
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
                  isPressable
                >
                  <a href={option.href} className="block">
                    <CardBody className="p-8 lg:p-12">
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
                    </CardBody>
                  </a>
                </Card>
              )
            })}
          </div>
          
          {/* Enhanced Contact Form with HeroUI */}
          <Card className="shadow-2xl bg-gradient-to-br from-background to-background/80 border-border/30">
            <CardHeader className="pb-8">
              <div className="text-center space-y-4">
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Send us a message
                </h3>
                <p className="text-muted-foreground text-lg">
                  Let's discuss your next big idea
                </p>
              </div>
            </CardHeader>
            
            <Divider className="opacity-20" />
            
            <CardBody className="space-y-8 p-8 lg:p-12">
              <form className="space-y-8">
                {/* Name Fields */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    label="First Name"
                    placeholder="John"
                    variant="bordered"
                    size="lg"
                    className="text-base"
                    classNames={{
                      input: "text-foreground placeholder:text-muted-foreground",
                      inputWrapper: "border-border data-[hover=true]:border-primary/50 group-data-[focus=true]:border-primary"
                    }}
                  />
                  <Input
                    type="text"
                    label="Last Name"
                    placeholder="Doe"
                    variant="bordered"
                    size="lg"
                    className="text-base"
                    classNames={{
                      input: "text-foreground placeholder:text-muted-foreground",
                      inputWrapper: "border-border data-[hover=true]:border-primary/50 group-data-[focus=true]:border-primary"
                    }}
                  />
                </div>
                
                {/* Email */}
                <Input
                  type="email"
                  label="Email Address"
                  placeholder="john@company.com"
                  variant="bordered"
                  size="lg"
                  className="text-base"
                  classNames={{
                    input: "text-foreground placeholder:text-muted-foreground",
                    inputWrapper: "border-border data-[hover=true]:border-primary/50 group-data-[focus=true]:border-primary"
                  }}
                />
                
                {/* Company */}
                <Input
                  type="text"
                  label="Company"
                  placeholder="Your Company"
                  variant="bordered"
                  size="lg"
                  className="text-base"
                  classNames={{
                    input: "text-foreground placeholder:text-muted-foreground",
                    inputWrapper: "border-border data-[hover=true]:border-primary/50 group-data-[focus=true]:border-primary"
                  }}
                />
                
                {/* Message */}
                <Textarea
                  label="Message"
                  placeholder="Tell us about your project or inquiry..."
                  variant="bordered"
                  minRows={6}
                  className="text-base"
                  classNames={{
                    input: "text-foreground placeholder:text-muted-foreground resize-none",
                    inputWrapper: "border-border data-[hover=true]:border-primary/50 group-data-[focus=true]:border-primary"
                  }}
                />
                
                {/* Submit Button */}
                <Button 
                  type="submit"
                  color="primary"
                  size="lg"
                  className="w-full py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  radius="lg"
                >
                  Send Message
                </Button>
              </form>
            </CardBody>
          </Card>
          
        </div>
      </div>
    </Section>
  )
}