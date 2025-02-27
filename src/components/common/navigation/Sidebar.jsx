import { useContext, useEffect, useRef, } from "react"
import { CgClose } from "react-icons/cg"
import { Link, NavLink } from "react-router-dom"
import gsap from "gsap"
import { sidebarContext } from "./navcontext"
import { MdPhone } from "react-icons/md";
import { PiEnvelopeLight } from "react-icons/pi";
import { SiGooglemaps } from "react-icons/si";
import { FaFacebook, FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
// import Dropdown from "./Dropdown"
//import { IoIosArrowDown } from "react-icons/io";
import { GoHeartFill } from "react-icons/go";

const Sidebar = () => {
    const [sidebarStatus, setSidebarStatus] = useContext(sidebarContext);
    const sidebarRef = useRef();

    console.log(sidebarStatus)

//       const aboutData = [
//           { title: "Story", link: "/about-us"},
//           { title: "Team", link: "/team"},
//           { title: "Awards", link: "#"},
//           { title: "Financials", link: '#'}
//       ]
//       const [status, setStatus] = useState(false)

    useEffect(() => {
            if(sidebarStatus){
                   sidebarRef.current.classList.add("active");

                   let tl =gsap.timeline();

                   tl.to(sidebarRef.current.querySelector(".sidebar-overlay"), {
                        y: 0,
                        duration: 0.5
                   })

                   tl.to(sidebarRef.current.querySelector(".sidebar-content"), {
                          x: 0,
                          duration: 0.5
                   })
            }else{
                   let tl = gsap.timeline();

                   tl.to(sidebarRef.current.querySelector(".sidebar-content"), {
                           x: "-105%",
                           duration: 0.5
                   })

                   tl.to(sidebarRef.current.querySelector(".sidebar-overlay"), {
                         y:  "-100%",
                         duration: 0.5
                   })

                setTimeout(() => {
                       sidebarRef.current.classList.remove("active")
                }, 2000)
            }
    }, [sidebarStatus])

  return (
    <div ref={sidebarRef} className="sidebar-section">
              <div className="sidebar-overlay"></div>
              <div className="sidebar-content">
                          <div className="sidebar-header">
                                    <h3>Menu</h3>
                                    <span onClick={() => setSidebarStatus(false)}><CgClose /></span>
                          </div>
                          <div className="sidebar-content-overflow">
                                  <div className="sidebar-nav">
                                             <ul>
                                                     <li><NavLink to={"/"}>Home</NavLink></li>
                                                     <li>
                                                                <div className="dropdown-link">
                                                                         <NavLink to={"/who-we-are"}>Who We Are</NavLink>
                                                                         {/* <span><IoIosArrowDown /></span> */}
                                                                </div>
                                                               {/* <Dropdown status={status} data={aboutData}/> */}
                                                     </li>
                                                     <li><NavLink to={"/what-we-do"}>What We Do</NavLink></li>
                                                     <li><NavLink to={"/articles"}>Articles</NavLink></li>
                                                     <li><NavLink to={"/get-in-touch"}>Contact Us</NavLink></li>
                                             </ul>

                                             <Link to={"/donate"} className="donate-btn">Donate <span><GoHeartFill /></span></Link>
                                  </div>
                                   <div className="sidebar-extra">
                                              <div className="sidebar-extra-column">
                                                          <h4>Contact Information</h4>
                                                          <p><span><MdPhone /></span>+254 0748 999</p>
                                                          <p><span><PiEnvelopeLight /></span>support@koinoniaglobal.org</p>
                                                          <p><span><SiGooglemaps /></span>3346 Dolfield Ave Karen, Nairobi - Kenya</p>
                                              </div>
                                              <div className="sidebar-extra-column">
                                                            <h4>Connect with Us</h4>
                                                            <div className="social-links">
                                                                      <ul>
                                                                               <li><Link to={"/"}><span><FaFacebook /></span></Link></li>
                                                                               <li><Link to={"/"}><span><FaXTwitter /></span></Link></li>
                                                                               <li><Link to={"/"}><span><FaLinkedinIn /></span></Link></li>
                                                                               <li><Link to={"/"}><span><FaYoutube /></span></Link></li>
                                                                      </ul>
                                                            </div>
                                              </div>
                                   </div>
                          </div>
              </div>
    </div>
  )
}

export default Sidebar