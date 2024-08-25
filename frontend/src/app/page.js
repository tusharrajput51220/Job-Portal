"use client";
import CategoryCarousel from '@/components/CategoryCarousel';
import Footer from '@/components/shared/Footer';
import HeroSection from '@/components/HeroSection';
import LatestJobs from '@/components/LatestJobs';
import React, { useEffect, useState } from 'react';
import UseGetAllJobs from '@/hooks/useGetAllJobs';

function Page() {
  UseGetAllJobs()
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs`);
        const jobsData = await response.json();
        return jobsData;
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
      <Footer />
    </div>
  );
}

export default Page;
