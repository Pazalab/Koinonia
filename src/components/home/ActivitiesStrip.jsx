import future from "../../assets/future.png"
import helping from "../../assets/helping.png"
import impact from "../../assets/positive-impact.png"
import love from "../../assets/love.png"
import { useEffect, useRef, useState } from "react"

const ActivitiesStrip = () => {
  const [imageNumber, setImageNumber ] = useState("one")
  const stripRef = useRef();
  useEffect(() => {
         const strips =   stripRef.current.querySelectorAll(".activity-moja");

         strips[0].addEventListener("mouseover", () => {
                 setImageNumber("one")
         })
         strips[1].addEventListener("mouseover", () => {
                setImageNumber("two")
         })
         strips[2].addEventListener("mouseover", () => {
            setImageNumber("three")
        })
       strips[3].addEventListener("mouseover", () => {
                setImageNumber("four")
       })
  }, [])

  console.log(imageNumber)
  return (
    <div ref={stripRef} className={`activities-strip ${imageNumber}`}>
                 <div className="activity-moja">
                              <div className="activity-texts">
                                         <img src={helping} alt="" />
                                         <h3>Helping Hands</h3>
                                         <p>We extend care and resources to vulnerable children, offering them a safe and nurturing environment to grow and thrive.</p>
                              </div>
                 </div>
                 <div className="activity-moja">
                              <div className="activity-texts">
                                         <img src={love} alt="" />
                                         <h3>Spreading Love</h3>
                                         <p>We demostrate Christ&apos;s love through acts of compassion, providing hope and belonging to children in need.</p>
                              </div>
                 </div>
                 <div className="activity-moja">
                              <div className="activity-texts">
                                         <img src={impact} alt="" />
                                         <h3>Positive Impact</h3>
                                         <p>Transforming the lives of street children and those in our care by equipping them with opportunities for a better future.</p>
                              </div>
                 </div>
                 <div className="activity-moja">
                              <div className="activity-texts">
                                         <img src={future} alt="" />
                                         <h3>Brighter Future</h3>
                                         <p>We empower children with faith, education and support to build a strong foundation for a promising tomorrow.</p>
                              </div>
                 </div>
    </div>
  )
}

export default ActivitiesStrip