import { useParams } from "react-router-dom"
import { programs } from "../../data/programs";
import { GiBlackBook } from "react-icons/gi";
import { IoCheckboxSharp } from "react-icons/io5";

const SingleProgramBody = () => {
    const { name } = useParams();
    const program = programs.find(item => item.url_param === name);

    console.log(program)
  return (
    <div className="single-program-body">
             <div className="inner-row">
                          <div className="single-program-body-content">
                                      <h2>{program.title}</h2>
                                      <img className="intro-image" src={program.image} alt="" />


                                      <div className="single-program-texts">
                                                 <p>{program.intro}</p>

                                                 <div className="program-list">
                                                             { program.list_title ? <p>{program.list_title}</p> : ""}
                                                             { program.list && program.list.length > 0 ? 
                                                                       <ul>
                                                                               { program.list.map(item => <li key={item}> <span><IoCheckboxSharp /></span>{item}</li>)}
                                                                       </ul>
                                                                   : ""}
                                                 </div>
                                                 <p>{program.description[0]}</p>

                                                 { program.verse ? <p className="verse"><span><GiBlackBook /></span>{program.verse}</p> : ''}

                                                 { program.description.slice(1, 6).map(item => <p key={item}>{item}</p>)}

                                                 { program.projects && program.projects.length > 0 ? 
                                                           program.projects.map(item => 
                                                                   <div className="project-moja" key={item.id}>
                                                                              <h3>{item.title}</h3>
                                                                              { item.description.map(item => <p key={item}>{item}</p>)}
                                                                   </div>
                                                           )
                                                  : ""}
                                      </div>
                          </div>
             </div>
    </div>
  )
}

export default SingleProgramBody