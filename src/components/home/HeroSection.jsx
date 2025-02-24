import { Link } from "react-router-dom"
import { LuMoveRight } from "react-icons/lu";
import hero from "../../assets/hero1.jpg"
import { GrPlayFill } from "react-icons/gr";

const HeroSection = () => {
  return (
    <div className="hero-section">
                <div className="inner-row">
                           <div className="hero-section-content">
                                      <div className="hero-texts">
                                               <h1>Transforming Lives through <span className="blueish">Faith</span> and Meaningful <span className="orangish">Service</span>.</h1>
                                                <div className="hero-btns">
                                                             <Link to={"/what-we-do"}>Explore More <span><LuMoveRight /></span></Link>
                                                </div>
                                      </div>

                                      <div className="hero-image-vid">
                                                 <img src={hero} alt="" />

                                                 <span><GrPlayFill /></span>
                                      </div>
                           </div>
                </div>
    </div>
  )
}

export default HeroSection