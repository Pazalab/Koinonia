import { Link } from "react-router-dom"
import about1 from "../../assets/about1.jpg"
import about2 from "../../assets/about2.jpg"
import { LuMoveRight } from "react-icons/lu";

const AboutSection2 = () => {
  return (
    <div className="about-section">
             <div className="inner-row">
                        <div className="about-section-content">
                                      <div className="about-section-column">
                                                   <h3>Who We Are</h3>
                                                   <h2>We are a faith-driven organization committed to transforming the lives of vulnerable children.</h2>

                                                   <img src={about1} alt="" />
                                      </div>
                                      <div className="about-section-column">
                                                    <img src={about2} alt="" />

                                                    <p className="top">Welcome to Koinonia Kingdom Network, a God-centered NGO in Kenya devoted to transforming lives and strengthening communities. Grounded in faith and biblical values, we offer care and support to vulnerable children through safe homes, outreach to street children and opportunities for vulnerable children to thrive. Through love, care, and purposeful action, we restore hope and empower individuals to fulfill their God-given potential, building a brighter, more compassionate future.</p>
                                                    <p>Our team is a dedicated group of Christians committed to serving others with love, faith, and compassion. Guided by Christ’s teachings, we work with integrity and humility to bring positive change and lasting impact to the lives we touch.</p>

                                                    <Link to={"/who-we-are"}>Read More <span><LuMoveRight /></span></Link>
                                      </div>
                        </div>
             </div>
    </div>
  )
}

export default AboutSection2