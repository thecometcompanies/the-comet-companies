import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const width = parseInt(searchParams.get('width') || '600')
  const height = parseInt(searchParams.get('height') || '400')
  
  // Generate a better SVG placeholder with proper encoding
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:0.1" />
      <stop offset="100%" style="stop-color:#8B5CF6;stop-opacity:0.1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="#18181B"/>
  <rect width="100%" height="100%" fill="url(#grad)"/>
  <rect x="0" y="0" width="100%" height="1" fill="#27272A"/>
  <rect x="0" y="0" width="1" height="100%" fill="#27272A"/>
  <rect x="${width - 1}" y="0" width="1" height="100%" fill="#27272A"/>
  <rect x="0" y="${height - 1}" width="100%" height="1" fill="#27272A"/>
  <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#71717A" font-family="system-ui" font-size="14">
    ${width} × ${height}
  </text>
</svg>`
  
  return new NextResponse(svg.trim(), {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}