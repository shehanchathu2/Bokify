import React from 'react'
import HeroSection from '../components/Hero'
import FaturedSection from '../components/FaturedSection'
import Popular from '../components/Popular'
import Reviews from '../components/Reviews'
import SriLankaHero from '../components/SriLankaHero'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FaturedSection />
      <Popular />
      <Reviews />
      <SriLankaHero/>
    </div>
  )
}

export default Home
