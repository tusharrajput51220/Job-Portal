"use client"
import CategoryCarousel from '@/components/CategoryCarousel'
import Footer from '@/components/shared/Footer'
import HeroSection from '@/components/HeroSection'
import LatestJobs from '@/components/LatestJobs'
import React from 'react'

function page({children}) {
  return (
    <div>
    {/* <Provider store={store}><Navbar /> {children} <Toaster /></Provider> */}
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
      <Footer />
    </div>
  )
}

export default page