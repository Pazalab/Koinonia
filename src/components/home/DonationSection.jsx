import { Link } from "react-router-dom"
import { LuMoveRight } from "react-icons/lu";

const DonationSection = () => {
  return (
    <div className="donation-section">
             <div className="inner-row">
                         <div className="donation-section-content">
                                      <h3>Get Involved</h3>
                                      <h2>Bring Hope to a Child Today</h2>
                                      <p>Your support can transform the life of a vulnerable child. By donating, you provide essentials like food, shelter, education, and a safe environment for children in need. Together, we can restore hope, nurture potential, and create brighter futures for these children. Every contribution, no matter the size, makes a profound difference. Join us in being a beacon of love and compassion — impact a child’s life today and inspire others to do the same.</p>
                                      <Link to={'/donate-today'}>Donate Now <span><LuMoveRight /></span></Link>
                         </div>
             </div>
    </div>
  )
}

export default DonationSection