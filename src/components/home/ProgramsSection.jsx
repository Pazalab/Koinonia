import { Link } from "react-router-dom"
import { LuMoveRight } from "react-icons/lu";
import children from "../../assets/children.jpg"
import church from "../../assets/church-building.jpg"
import missions from "../../assets/mission.jpg"

const ProgramsSection = () => {
  return (
    <div className="program-section">
              <div className="inner-row">
                         <div className="programs-section-content">
                                    <div className="programs-intro">
                                               <div className="programs-intro-column">
                                                       <h3>What We Do</h3>
                                                       <h2>Featured Programs</h2>
                                               </div>
                                               <div className="programs-intro-column">
                                                         <p>We are a mission-driven NGO dedicated to transforming lives and uplifting communities through faith, compassion, and purposeful action. Our work is guided by a commitment to service, collaboration, and creating meaningful impact, both locally and globally. Together, we strive to build a world where hope and opportunity reach every corner.</p>
                                               </div>
                                               <div className="programs-intro-column">
                                                         <Link to={"/"}>All Programs <span><LuMoveRight /></span>
                                                         </Link>
                                               </div>
                                    </div>

                                    <div className="programs-row">
                                                <div className="program-moja">
                                                           <div className="program-image">
                                                                    <img src={children} alt="" />
                                                                    <span><LuMoveRight /></span>
                                                                    <div className="coverflow"></div>
                                                           </div>

                                                           <div className="program-texts">
                                                                    <h3>Charity</h3>
                                                                    <h2>Children’s Homes and Orphanage Care</h2>
                                                           </div>
                                                </div>

                                                <div className="program-moja">
                                                           <div className="program-image">
                                                                    <img src={church} alt="" />
                                                                    <span><LuMoveRight /></span>
                                                                    <div className="coverflow"></div>
                                                           </div>

                                                           <div className="program-texts">
                                                                    <h3>impact</h3>
                                                                    <h2>Community Church Building</h2>
                                                           </div>
                                                </div>
                                                <div className="program-moja">
                                                           <div className="program-image">
                                                                    <img src={missions} alt="" />
                                                                    <span><LuMoveRight /></span>
                                                                    <div className="coverflow"></div>
                                                           </div>

                                                           <div className="program-texts">
                                                                    <h3>social</h3>
                                                                    <h2>Global Mission Outreach</h2>
                                                           </div>
                                                </div>
                                    </div>


                                    <p className="linker">Join the <Link to={"/"}>1000+</Link> people trusting Koinonia Organization</p>
                         </div>
              </div>
    </div>
  )
}

export default ProgramsSection