import team1 from "../../assets/dum1.jpg"
import team2 from "../../assets/dum2.jpg"
import team3 from "../../assets/dummy3.jpg"
import { FaFacebook, FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import team4 from "../../assets/dummy2.jpg"

const TeamSection = () => {
  return (
    <div className="team-section">
              <div className="inner-row">
                      <div className="team-section-content">
                                 <div className="team-intro">
                                            <h2>Meet the Team</h2>
                                            <p>Our team at Koinonia Kingdom Network is a dedicated group of Christians united by faith and a passion for service. Guided by biblical principles, we work together to uplift vulnerable children, strengthen communities, and share God’s love through compassionate action.</p>
                                 </div>
                                 <div className="team-section-row">
                                            <div className="team-moja">
                                                        <div className="team-image">
                                                                 <img src={team1} alt="" />
                                                                 <div className="social-links">
                                                                 <ul>
                                                                          <li><Link to={"/"}><span><FaFacebook /></span></Link></li>
                                                                          <li><Link to={"/"}><span><FaXTwitter /></span></Link></li>
                                                                          <li><Link to={"/"}><span><FaLinkedinIn /></span></Link></li>
                                                                          <li><Link to={"/"}><span><FaInstagram /></span></Link></li>
                                                                 </ul>
                                                                 </div>
                                                        </div>
                                                        <div className="team-texts">
                                                                  <h3>Timothy Omondi</h3>
                                                                  <p>Founder & Director</p>
                                                        </div>
                                            </div>
                                            <div className="team-moja">
                                                        <div className="team-image">
                                                                 <img src={team2} alt="" />
                                                                 <div className="social-links">
                                                                 <ul>
                                                                          <li><Link to={"/"}><span><FaFacebook /></span></Link></li>
                                                                          <li><Link to={"/"}><span><FaXTwitter /></span></Link></li>
                                                                          <li><Link to={"/"}><span><FaLinkedinIn /></span></Link></li>
                                                                          <li><Link to={"/"}><span><FaInstagram /></span></Link></li>
                                                                 </ul>
                                                                 </div>
                                                        </div>
                                                        <div className="team-texts">
                                                                  <h3>Laura Slessor</h3>
                                                                  <p>Team Leader</p>
                                                        </div>
                                            </div>
                                            <div className="team-moja">
                                                        <div className="team-image">
                                                                 <img src={team3} alt="" />
                                                                 <div className="social-links">
                                                                 <ul>
                                                                          <li><Link to={"/"}><span><FaFacebook /></span></Link></li>
                                                                          <li><Link to={"/"}><span><FaXTwitter /></span></Link></li>
                                                                          <li><Link to={"/"}><span><FaLinkedinIn /></span></Link></li>
                                                                          <li><Link to={"/"}><span><FaInstagram /></span></Link></li>
                                                                 </ul>
                                                                 </div>
                                                        </div>
                                                        <div className="team-texts">
                                                                  <h3>Job Simiyu</h3>
                                                                  <p>Volunteer</p>
                                                        </div>
                                            </div>
                                            <div className="team-moja">
                                                        <div className="team-image">
                                                                 <img src={team4} alt="" />
                                                                 <div className="social-links">
                                                                 <ul>
                                                                          <li><Link to={"/"}><span><FaFacebook /></span></Link></li>
                                                                          <li><Link to={"/"}><span><FaXTwitter /></span></Link></li>
                                                                          <li><Link to={"/"}><span><FaLinkedinIn /></span></Link></li>
                                                                          <li><Link to={"/"}><span><FaInstagram /></span></Link></li>
                                                                 </ul>
                                                                 </div>
                                                        </div>
                                                        <div className="team-texts">
                                                                  <h3>Catherine Musya</h3>
                                                                  <p>Volunteer</p>
                                                        </div>
                                            </div>
                                 </div>
                      </div>
              </div>
    </div>
  )
}

export default TeamSection