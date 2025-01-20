import Navbar from "../components/common/navigation/Navbar"
import blog1 from "../assets/church-building.jpg"
import blog2 from "../assets/donateBg.jpg"
import blog3 from "../assets/children.jpg"
import { LuMoveRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import Footer from "../components/common/Footer";
import "../css/articles.css"
const Articles = () => {
  return (
    <>
         <Navbar />
         <div className="articles-body">
                   <div className="inner-row">
                             <div className="articles-body-content">
                                         <div className="articles-body-intro">
                                                   <h3>impact stories</h3>
                                                   <h1>Koinonia Essential Reads</h1>
                                         </div>

                                         <div className="blog-row">
                                                <div className="blog-moja">
                                                             <img src={blog1} alt="" />
                                                             <div className="blog-overshadow"></div>
                                                             <div className="blog-texts">
                                                                        <h4>Charity</h4>
                                                                        <div className="author-date">
                                                                                    <h5>admin</h5>
                                                                                    <span>|</span>
                                                                                     <p>May 13, 2025</p>
                                                                        </div>
                                                                        <h3>Live out your faith boldly and courageously</h3>

                                                                        <Link to={"/"}><span><LuMoveRight /></span>Read More</Link>
                                                             </div>
                                                </div>
                                                <div className="blog-moja">
                                                             <img src={blog2} alt="" />
                                                             <div className="blog-overshadow"></div>
                                                             <div className="blog-texts">
                                                                        <h4>impact</h4>
                                                                        <div className="author-date">
                                                                                    <h5>admin</h5>
                                                                                    <span>|</span>
                                                                                     <p>June 13, 2025</p>
                                                                        </div>
                                                                        <h3>Grace abounds in the heart that believes</h3>

                                                                        <Link to={"/"}><span><LuMoveRight /></span>Read More</Link>
                                                             </div>
                                                </div>
                                                <div className="blog-moja">
                                                             <img src={blog3} alt="" />
                                                             <div className="blog-overshadow"></div>
                                                             <div className="blog-texts">
                                                                        <h4>Donation</h4>
                                                                        <div className="author-date">
                                                                                    <h5>admin</h5>
                                                                                    <span>|</span>
                                                                                     <p>August 23, 2025</p>
                                                                        </div>
                                                                        <h3>United in Christ as His love endures</h3>

                                                                        <Link to={"/"}><span><LuMoveRight /></span>Read More</Link>
                                                             </div>
                                                </div>
                                      </div>
                             </div>
                   </div>
         </div>

         <Footer />
    </>
  )
}

export default Articles