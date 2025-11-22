"use client"
import Hero from '../Hero'
import Categories from '../Categories'
import Projects from '../Projects'
import OurSectors from '../OurSectors'
import Sustainability from '../Sustainability'
import ContactBanner from '../ContactBanner'
import ServicesSection from '../ServicesSection'
import BuildingForTheBest from '../BuildingForTheBest'
import SafetySection from '../SafetySection'


const LandingPage = () => {
  return (
    <div>
      <Hero/>
      <Categories/>
      <Projects/>
      <OurSectors/>
      <Sustainability/>
      <ServicesSection/>
      <BuildingForTheBest/>
      <SafetySection/>
      <ContactBanner/>
    </div>
  )
}

export default LandingPage
