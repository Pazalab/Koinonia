import AboutBody from "../components/about/AboutBody"
import AboutHero from "../components/about/AboutHero"
import AboutPartners from "../components/about/AboutPartners"
import TeamSection from "../components/about/TeamSection"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import DonationSection from "../components/home/DonationSection"
import "../css/about.css"

const About = () => {
  return (
    <>
           <Navbar />
           <AboutHero />
           <AboutBody />
           <DonationSection />
           <TeamSection />
           <AboutPartners />
           <Footer />
    </>
  )
}

export default About