import Navbar from "../components/common/navigation/Navbar"
import ActivitiesStrip from "../components/home/ActivitiesStrip"
import HeroSection from "../components/home/HeroSection"
import PartnersSection from "../components/home/PartnersSection"
import "../css/home.css"
import ProgramsSection from "../components/home/ProgramsSection"
import AboutSection2 from "../components/home/AboutSection2"
import DonationSection from "../components/home/DonationSection"
import BlogSection from "../components/home/BlogSection"
const Home = () => {
  return (
    <>
            <Navbar />
            <HeroSection />
            <PartnersSection />
            <ProgramsSection />
            <ActivitiesStrip />
            <AboutSection2 />
            <DonationSection />
            <BlogSection />
    </>
  )
}

export default Home