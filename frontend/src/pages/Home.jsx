import React from 'react'
import HeroSection from '../components/Hero'
import FaturedSection from '../components/FaturedSection'
import Popular from '../components/Popular'
import Reviews from '../components/Reviews'
import SriLankaHero from '../components/SriLankaHero'
import RecommendedHotels from '../components/RecommendedHotels'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <RecommendedHotels/>
      <FaturedSection />
      <Popular />
      <Reviews />
      <SriLankaHero/>
    </div>
  )
}

export default Home
