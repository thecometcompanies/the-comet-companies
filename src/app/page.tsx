import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import Portfolio from '@/components/sections/Portfolio'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
