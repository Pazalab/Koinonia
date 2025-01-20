import AboutPartners from "../components/about/AboutPartners"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import ActivitiesStrip from "../components/home/ActivitiesStrip"
import DonationSection from "../components/home/DonationSection"
import ProgramsBody from "../components/programs/ProgramsBody"
import ProgramsHero from "../components/programs/ProgramsHero"
import "../css/programs.css"

const Programs = () => {
  return (
    <>
             <Navbar />
             <ProgramsHero />
             <ProgramsBody />
             <ActivitiesStrip />
             <DonationSection />
             <AboutPartners />
             <Footer />
    </>
  )
}

export default Programs