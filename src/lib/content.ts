import fs from 'fs'
import path from 'path'

export interface SiteContent {
  hero: {
    headline: string
    subheadline: string
    stats: Array<{ value: string; label: string }>
  }
  portfolio: {
    title: string
    description: string
    companies: Array<{
      title: string
      description: string
      category: string
      image: string
      metrics: Array<{ label: string; value: string }>
      link: string
    }>
  }
  contact: {
    title: string
    description: string
    options: Array<{
      title: string
      description: string
      action: string
      href: string
    }>
  }
  company: {
    name: string
    tagline: string
    email: string
    social: {
      twitter: string
      linkedin: string
    }
  }
}

export function getContent(): SiteContent {
  const contentPath = path.join(process.cwd(), 'content', 'site-content.json')
  const fileContents = fs.readFileSync(contentPath, 'utf8')
  return JSON.parse(fileContents) as SiteContent
}