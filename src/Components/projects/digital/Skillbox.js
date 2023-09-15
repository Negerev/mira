import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";

const Skillbox = () => {
  return (
    <>
      <MainBlock
        image={"skillbox/title.jpg"}
        alt={"skillbox"}/>
      <Concept
        descr={"Development of interface design for a series of interactive games by Skillbox."}/>

      <img className="project__img" src={require("../../../resourses/img/projects/skillbox/1.jpg")} alt='website skillbox'/>

      <img className="project__img" src={require("../../../resourses/img/projects/skillbox/2.jpg")} alt='website skillbox'/>

      <img className="project__img" src={require("../../../resourses/img/projects/skillbox/3.jpg")} alt='website skillbox'/>
        
    </>
  )
}

export default Skillbox;