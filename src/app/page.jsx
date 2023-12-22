import { Newsletter } from '@/components/Newsletter'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Moderators } from '@/components/Moderators'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { Founders } from '@/components/Founders'
import { ScrollToTop } from '@/components/ScrollToTop'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <Newsletter />
        <Testimonials />
        <Moderators />
        <Founders />
        <Faqs />
      </main>
      <Footer />
      <ScrollToTop/>
    </>
  )
}
