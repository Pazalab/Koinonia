import { Link } from "react-router-dom"
import { LuMoveRight } from "react-icons/lu";

const DonationSection = () => {
  return (
    <div className="donation-section">
             <div className="inner-row">
                         <div className="donation-section-content">
                                      <h3>Get Involved</h3>
                                      <h2>Join Us in Spreading Love & Light</h2>
                                      <p>Through your generosity, lives are touched, souls are uplifted, and communities are restored. Be part of this great mission in making a difference for God&apos;s glory.</p>
                                      <Link to={'/donate-today'}>Donate Now <span><LuMoveRight /></span></Link>
                         </div>
             </div>
    </div>
  )
}

export default DonationSection