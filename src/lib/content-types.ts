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
      name: string
      logo?: string
      image: string
      status: string
      statusDetail?: string
      link: string
      isHighlighted?: boolean
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