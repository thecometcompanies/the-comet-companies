import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfoliosites.com'),
  title: {
    default: 'The Comet Companies - Premium Web Development & Design Agency',
    template: '%s | The Comet Companies'
  },
  description: 'We create exceptional digital experiences for forward-thinking companies. From sleek portfolios to powerful web applications, we bring your vision to life with cutting-edge technology.',
  keywords: ['web development', 'web design', 'portfolio', 'digital agency', 'next.js', 'react', 'custom websites', 'e-commerce', 'web applications'],
  authors: [{ name: 'The Comet Companies Team' }],
  creator: 'The Comet Companies',
  publisher: 'The Comet Companies',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thecometcompanies.com',
    siteName: 'The Comet Companies',
    title: 'The Comet Companies - Premium Web Development & Design Agency',
    description: 'We create exceptional digital experiences for forward-thinking companies. From sleek portfolios to powerful web applications.',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Portfolio Sites - Premium Web Development & Design Agency'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@thecometcompanies',
    creator: '@thecometcompanies',
    title: 'The Comet Companies - Premium Web Development & Design Agency',
    description: 'We create exceptional digital experiences for forward-thinking companies.',
    images: ['/twitter-image.jpg']
  },
  alternates: {
    canonical: 'https://thecometcompanies.com',
  },
  category: 'technology',
  classification: 'Business',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'The Comet Companies',
  url: 'https://thecometcompanies.com',
  logo: 'https://thecometcompanies.com/logo.png',
  description: 'Premium web development and design agency creating exceptional digital experiences.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Global',
    addressCountry: 'Worldwide'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-0123',
    contactType: 'customer service',
    email: 'hello@thecometcompanies.com',
    availableLanguage: ['English']
  },
  sameAs: [
    'https://twitter.com/thecometcompanies',
    'https://linkedin.com/company/thecometcompanies',
    'https://github.com/thecometcompanies'
  ],
  service: {
    '@type': 'Service',
    name: 'Web Development Services',
    description: 'Custom web development, design, and digital solutions',
    provider: {
      '@type': 'Organization',
      name: 'The Comet Companies'
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
