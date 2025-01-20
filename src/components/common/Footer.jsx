import { Link, NavLink } from "react-router-dom"
import logo from "../../assets/logo.jpg"
import { LuMoveRight } from "react-icons/lu"
import { FaFacebook, FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
              <div className="inner-row">
                         <div className="footer-content">
                                    <div className="footer-content-top">
                                              <img src={logo} alt="" />
                                              <ul>
                                                       <li><Link to={"/"}>Home</Link></li>
                                                       <li><Link to={"/"}>Who We Are</Link></li>
                                                       <li><Link to={"/"}>Programs</Link></li>
                                                       <li><Link to={"/"}>Insights</Link></li>
                                              </ul>
                                    </div>
                                    <div className="footer-content-row">
                                               <div className="footer-column">
                                                        <h3>Ready to make a difference?</h3>
                                                        <p>Get in touch with us today and be part of a movement tranforming lives. Together, we can inspire brighter futures.</p>
                                                        <Link to={"/"} className="footer-link">Let&apos;s Connect <span><LuMoveRight /></span></Link>
                                               </div>
                                               <div className="footer-column">
                                                         <h4>We are here</h4>
                                                         <div className="footer-box">
                                                                  <p>Email: info@koinoniakingdom.org</p>
                                                                  <p>Tel: +254 1234 5678</p>
                                                         </div>
                                                         <p className="extra">Hyde Park, 220 Kwame Street, <br></br>Karen Nairobi, Kenya</p>
                                              </div>
                                              <div className="footer-column">
                                                        <h4>Connect with Us</h4>

                                                        <div className="social-links">
                                                                 <ul>
                                                                          <li><NavLink to={"/"}><span><FaFacebook /></span></NavLink></li>
                                                                          <li><NavLink to={"/"}><span><FaXTwitter /></span></NavLink></li>
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