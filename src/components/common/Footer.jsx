import { Link, NavLink } from "react-router-dom"
import logo from "../../assets/logo.png"
import { LuMoveRight } from "react-icons/lu"
import { FaFacebook, FaXTwitter, FaLinkedinIn, FaYoutube, FaTiktok } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
              <div className="inner-row">
                         <div className="footer-content">
                                    <div className="footer-content-top">
                                              <img src={logo} alt="" />
                                              <ul>
                                                       <li><Link to={"/"}>Home</Link></li>
                                                       <li><Link to={"/who-we-are"}>Who We Are</Link></li>
                                                       <li><Link to={"/what-we-do"}>Programs</Link></li>
                                                       <li><Link to={"/"}>Insights</Link></li>
                                              </ul>
                                    </div>
                                    <div className="footer-content-row">
                                               <div className="footer-column">
                                                        <h3>Be a Vessel of Change Today</h3>
                                                        <p>Connect with us today and be part of a mission transforming lives for God&apos;s glory.</p>
                                                        <Link to={"/contact-us"} className="footer-link">Let&apos;s Connect <span><LuMoveRight /></span></Link>
                                               </div>
                                               <div className="footer-column">
                                                         <h4>We are here</h4>
                                                         <div className="footer-box">
                                                                  <p>Email: info@koinoniakingdom.com</p>
                                                                  <p>Tel: +254 7151 36561</p>
                                                         </div>
                                                         <p className="extra">829 Rosemarie Lane, <br></br>Suite 1, Stockton, CA 95207</p>
                                              </div>
                                              <div className="footer-column">
                                                        <h4>Connect with Us</h4>

                                                        <div className="social-links">
                                                                 <ul>
                                                                          <li><NavLink to={"https://www.facebook.com/profile.php?id=61568477908862"}><span><FaFacebook /></span></NavLink></li>
                                                                          <li><NavLink to={"https://www.tiktok.com/@koinoniakingdomnetwork"}><span><FaTiktok /></span></NavLink></li>
                                                                          <li><NavLink to={"/"}><span><FaLinkedinIn /></span></NavLink></li>
                                                                          <li><NavLink to={"/"}><span><FaYoutube /></span></NavLink></li>
                                                                 </ul>
                                                        </div>
                                              </div>
                                    </div>

                                    <div className="copyright">
                                                <p>All rights reserved &copy; {new Date().getFullYear()} Koinonia Kingdom Network</p>
                                    </div>
                         </div>
              </div>
    </footer>
  )
}

export default Footer