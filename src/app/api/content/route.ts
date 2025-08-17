import { loadSiteContent } from '@/lib/content-server'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const content = loadSiteContent()
    return NextResponse.json(content)
  } catch (error) {
    console.error('Error loading content:', error)
    return NextResponse.json({ error: 'Failed to load content' }, { status: 500 })
  }
}