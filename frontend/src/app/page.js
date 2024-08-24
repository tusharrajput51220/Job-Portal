"use client"
import CategoryCarousel from '@/components/CategoryCarousel'
import Footer from '@/components/shared/Footer'
import HeroSection from '@/components/HeroSection'
import LatestJobs from '@/components/LatestJobs'
import React from 'react'
import useGetAllJobs from '@/hooks/useGetAllJobs'

function page({children}) {
  useGetAllJobs()
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