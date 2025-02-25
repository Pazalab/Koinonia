import { useNavigate } from "react-router-dom"
import { programs } from "../../data/programs"
import { LuMoveRight } from "react-icons/lu"
const ProgramsBody = () => {
  const navigate = useNavigate();
  return (
    <div className="programs-body">
              <div className="inner-row">
                         <div className="programs-body-row">
                                   { programs.map(item => 
                                           <div className="program-moja" key={item.id} onClick={()=> navigate(item.link)}>
                                                    <div className="program-image">
                                                           <img src={item.image} alt="" />
                                                           <span><LuMoveRight /></span>
                                                              <div className="coverflow"></div>
                                                    </div>                  
                                                    <div className="program-texts">
                                                           <h3>{item.category}</h3>
                                                              <h2>{item.title}</h2>
                                                    </div>
                                           </div>
                                   )}
                         </div>
              </div>
    </div>
  )
}

export default ProgramsBody