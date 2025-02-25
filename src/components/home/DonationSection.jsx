import { Link } from "react-router-dom"
import { LuMoveRight } from "react-icons/lu";

const DonationSection = () => {
  return (
    <div className="donation-section">
             <div className="inner-row">
                         <div className="donation-section-content">
                                      <h3>Get Involved</h3>
                                      <h2>Restore Hope and Transform Lives Today</h2>
                                      <p>Your generosity can change the future for street children, orphanages, and vulnerable communities. By supporting our mission, you help provide shelter, education, spiritual growth, and economic empowerment. Join us in making a lasting difference—donate today and be a part of God’s work in transforming lives!</p>
                                      <Link to={'/donate-today'}>Donate Now <span><LuMoveRight /></span></Link>
                         </div>
             </div>
    </div>
  )
}

export default DonationSection