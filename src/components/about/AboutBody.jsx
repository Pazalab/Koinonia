import { GrPlayFill } from "react-icons/gr";
import aboutImage from "../../assets/about3.jpg"
import faith from "../../assets/faith.png"
import love from "../../assets/service.png"
import community from "../../assets/community.png"
import integrity from "../../assets/trust.png"

const AboutBody = () => {
  return (
    <div className="about-body">
              <div className="about-body-image">
                          <span><GrPlayFill /></span>
              </div>
              <div className="inner-row">
                       <div className="about-story">
                                    <div className="about-story-column">
                                               <h3>Founding Story</h3>
                                               <p>Koinonia Kingdom Network is a Kenya-based NGO founded by Timothy Omondi in response to a calling to serve vulnerable children and underserved communities. Deeply moved by the challenges faced by the less fortunate, Timothy envisioned a God-centered fellowship that would go beyond providing essentials like shelter, food, and education. His goal was to nurture faith, instill hope, and guide people toward fulfilling God’s purpose for their lives. Driven by compassion and a heart for service, he established Koinonia Kingdom Network to transform lives and uplift communities through faith-led initiatives and meaningful action.</p>
                                    </div>
                                    <div className="about-story-column">
                                              <p>Today, we are actively transforming lives through supporting safe homes for children, outreach to street youth, and faith-based community initiatives. We have become a trusted pillar of hope and love in Kenya, impacting lives daily through compassion-driven programs and unwavering faith.</p>
                                              <p>With God&apos;s guidance, we plan to expand our outreach, help build more safe spaces for children, and strengthen its efforts in faith-based community empowerment. We remain steadfast in our approach to inspire hope, nurture potential, and create lasting change for generations to come.</p>
                                    </div>
                       </div>

                       <div className="statement-row">
                                  <div className="statement-image">
                                           <img src={aboutImage} alt="" />
                                  </div>
                                  <div className="statement-texts">
                                             <div className="statement-moja">
                                                        <h3>Our Mission</h3>
                                                        <p>To courageously expand God&apos;s Kingdom by demostrating Christ&apos;s love through dynamic acts of service and compassion, firmly rooted in biblical principles.</p>
                                             </div>
                                             <div className="statement-moja">
                                                         <h3>Our Vision</h3>
                                                         <p>To build a Christ-centered fellowship that brings hope and transformation to the less fortunate, empowering the global community through faith and love, all for the glory of God</p>
                                             </div>
                                  </div>
                       </div>

                       <div className="values-section">
                                 <h2>Our Value System</h2>
                                 <div className="values-section-row">
                                              <div className="value-moja">
                                                        <img src={faith} alt="" />
                                                        <h3>God as our Cornerstone</h3>
                                                        <p>Our work is deeply root in unwavering faith, with God at the center of everything we do. We rely on His guidance and grace to inspire hope and transformation in the lives of those we serve</p>
                                              </div>
                                              <div className="value-moja">
                                                        <img src={love} alt="" />
                                                        <h3>Love in Action</h3>
                                                        <p>Inspired by Christ’s example of unconditional love, we extend care and kindness to the vulnerable and less fortunate. Compassion fuels our mission, driving us to provide comfort and support wherever it is needed most.</p>
                                              </div>
                                              <div className="value-moja">
                                                        <img src={community} alt="" />
                                                        <h3>United for a Greater Purpose</h3>
                                                        <p>We believe in the strength of unity and collaboration. By cultivating a spirit of togetherness, we unite people to create meaningful, lasting change that uplifts individuals and empowers entire communities.</p>
                                              </div>
                                              <div className="value-moja">
                                                        <img src={integrity} alt="" />
                                                        <h3>Guided by Truth and Honesty</h3>
                                                        <p>We are committed to operating with transparency, honesty and accountability. Integrity guides our decisions and actions, ensuring we remain true to our values and our calling to serve for God&apos;s glory.</p>
                                              </div>
                                 </div>
                       </div>
              </div>
    </div>
  )
}

export default AboutBody