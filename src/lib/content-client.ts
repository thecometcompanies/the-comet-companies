import { SiteContent } from './content-types'

// Client-side content loader (for client components via API)
export async function fetchSiteContent(): Promise<SiteContent> {
  const response = await fetch('/api/content')
  if (!response.ok) {
    throw new Error('Failed to fetch content')
  }
  return response.json()
}