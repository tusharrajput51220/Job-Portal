"use client"
import CategoryCarousel from '@/components/CategoryCarousel'
import Footer from '@/components/shared/Footer'
import HeroSection from '@/components/HeroSection'
import LatestJobs from '@/components/LatestJobs'
import React from 'react'
import UseGetAllJobs from '@/hooks/useGetAllJobs'

function page({children}) {
  UseGetAllJobs()
  return (
    <div>
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
      <Footer />
    </div>
  )
}

export default page