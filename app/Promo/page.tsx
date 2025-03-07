import { BlogGrid } from '@/components/blog'
import CalculatorCargo from '@/components/calculator-cargo'
import { FAQSection } from '@/components/faq-section'
import { LoyaltyRewards } from '@/components/loyalty-reward'
import { PromoCounter } from '@/components/promo-counter'
import CargoSearch from '@/components/ship-search'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen">

      <section className='mb-16'>
      <LoyaltyRewards />
      </section>

      {/* Promo Counter Section */}
      <section className="mb-16">
        <PromoCounter />
      </section>

      {/* Cargo Search Section */}
      <section className="mb-16">
        <CargoSearch />
      </section>

      {/* Calculator Cargo Section */}
      <section className="mb-16">
        <CalculatorCargo />
      </section>

      {/* Related Posts Section */}
      <section className="mb-16">
        <div className="relative block text-center">
          <h2 className="text-4xl font-bold">RELATED POSTS</h2>
          <div className="absolute bottom-0 left-1/2 w-1/5 h-2 bg-[#1B1464] -mb-2 transform -translate-x-1/2"></div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section>
        <BlogGrid />
      </section>

      <section>
      <FAQSection />
      </section>
    </div>
  )
}

export default page
