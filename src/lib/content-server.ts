import fs from 'fs'
import path from 'path'
import { SiteContent } from './content-types'

// Server-side content loader (works in server components)
export function loadSiteContent(): SiteContent {
  const contentPath = path.join(process.cwd(), 'content', 'site-content.json')
  const fileContents = fs.readFileSync(contentPath, 'utf8')
  return JSON.parse(fileContents) as SiteContent
}