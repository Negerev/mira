import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";

const CxWorld = () => {
  return (
    <>
      <MainBlock
        image={"cx-world/title.jpg"}
        alt={"cx-world"}/>
      <Concept
        descr={"Wana sari means “beautiful place” in Balinese. We have developed a logo and corporate identity for a cozy hotel located in the heart of the jungle of Bali."}/>

      <img className="project__img" src={require("../../../resourses/img/projects/cx-world/1.jpg")} alt='website cx-world'/>
      <img className="project__img" src={require("../../../resourses/img/projects/cx-world/2.jpg")} alt='website cx-world'/>
      <img className="project__img" src={require("../../../resourses/img/projects/cx-world/3.jpg")} alt='website cx-world'/>
      <img className="project__img" src={require("../../../resourses/img/projects/cx-world/4.jpg")} alt='website cx-world'/>
      <img className="project__img" src={require("../../../resourses/img/projects/cx-world/5.jpg")} alt='website cx-world'/>
        
    </>
  )
}

export default CxWorld;