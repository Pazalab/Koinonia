import partner1 from "../../assets/sanfrancisco.png"
import partner2 from "../../assets/rise.png"
import partner3 from "../../assets/vancouver.png"
import partner4 from "../../assets/snowflake.png"
import partner5 from "../../assets/springfield.png"

const PartnersSection = () => {
  return (
    <div className="partners-section">
             <div className="inner-row">
                         <div className="partners-row">
                                   <img src={partner1} alt="" />
                                   <img src={partner2} alt="" />
                                   <img src={partner3} alt="" />
                                   <img src={partner4} alt="" />
                                   <img src={partner5} alt="" />
                         </div>
             </div>
    </div>
  )
}

export default PartnersSection