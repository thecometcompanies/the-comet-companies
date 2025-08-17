import Header from '@/components/layout/Header'
import HeroNew from '@/components/sections/HeroNew'
import PortfolioNew from '@/components/sections/PortfolioNew'
import ContactNew from '@/components/sections/ContactNew'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroNew />
        <PortfolioNew />
        <ContactNew />
      </main>
      <Footer />
    </>
  )
}
