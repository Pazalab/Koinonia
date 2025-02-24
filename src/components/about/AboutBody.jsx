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
                                                        <img src={love} alt="" />
                                                        <h3>Love in Action</h3>
                                                        <p>We believe that love is more than just words—it is demonstrated through acts of kindness, generosity, and service. Whether it&apos;s feeding the hungry, caring for orphans, or ministering to the lost, we are committed to showing the love of Christ in practical ways that transform lives.</p>
                                              </div>
                                              <div className="value-moja">
                                                        
                                                        <img src={integrity} alt="" />
                                                        <h3>Restoration & Redemption</h3>
                                                        <p>We reach out to the broken, the lost, and the forgotten, believing that no one is beyond God&apos;s grace. Through discipleship, rehabilitation, and empowerment programs, we walk alongside individuals as they experience healing, restoration, and a fresh start in Christ.</p>
                                              </div>
                                              <div className="value-moja">
                                                        <img src={community} alt="" />
                                                        <h3>Empowering for Impact</h3>
                                                        <p>We don&apos;t just offer temporary relief; we equip individuals and communities with the tools, skills, and resources they need to break cycles of poverty, addiction, and hopelessness. We help people discover their God-given potential and step into a future of purpose.</p>
                                              </div>
                                              <div className="value-moja">
                                                     <img src={faith} alt="" />
                                                        <h3>Faith in Action</h3>
                                                        <p>We trust in God&apos;s power to change lives, and we boldly step out in faith to go where He leads us. We act on our faith by bringing the Gospel to the most challenging places, believing that transformation happens when we obey God&apos;s call.</p>
                                              </div>
                                 </div>
                       </div>
              </div>
    </div>
  )
}

export default AboutBody