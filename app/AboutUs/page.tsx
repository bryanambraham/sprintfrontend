import { AboutHero } from '@/components/about-hero'
import { ShippingSolution } from '@/components/about-ship'
import { DescriptionContent } from '@/components/content-desc'
import { HeroSection } from '@/components/hero'
import { WhyChooseHero } from '@/components/hero2'
import { VisionMission } from '@/components/vision-mission'
import React from 'react'



const page = () => {
  return (
    <div className='min-h-screen bg-white'>

      <AboutHero />
      <VisionMission />
      <ShippingSolution />

      <WhyChooseHero />
        

    </div>
  )
}

export default page