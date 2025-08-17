import Header from '@/components/layout/Header'
import HeroNew from '@/components/sections/HeroNew'
import PortfolioRevamped from '@/components/sections/PortfolioRevamped'
import ContactRevamped from '@/components/sections/ContactRevamped'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-background">
        <HeroNew />
        <PortfolioRevamped />
        <ContactRevamped />
      </main>
      <Footer />
    </>
  )
}
