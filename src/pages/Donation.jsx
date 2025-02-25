import "../css/donate.css"
import Navbar from "../components/common/navigation/Navbar"
import DonationHero from "../components/donation/DonationHero"
import DonationBody from "../components/donation/DonationBody"
import Footer from "../components/common/Footer"
import AboutPartners from "../components/about/AboutPartners"
const Donation = () => {
  return (
    <>
           <div className="donation-page-landing">
                      <Navbar />
                      <DonationHero />
           </div>
           <DonationBody />
           {/* <AboutPartners /> */}
           <Footer />
    </>
  )
}

export default Donation