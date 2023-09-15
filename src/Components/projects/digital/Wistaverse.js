import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";

const Wistaverse = () => {
  return (
    <>
      <MainBlock
        image={"wista/title.jpg"}
        alt={"wista"}/>
      <Concept
        descr={"Wana sari means “beautiful place” in Balinese. We have developed a logo and corporate identity for a cozy hotel located in the heart of the jungle of Bali."}/>

      <img className="project__img" src={require("../../../resourses/img/projects/wista/1.jpg")} alt='website wistaverse'/>
      <img className="project__img" src={require("../../../resourses/img/projects/wista/2.jpg")} alt='website wistaverse'/>
      <img className="project__img" src={require("../../../resourses/img/projects/wista/3.jpg")} alt='website wistaverse'/>
      <img className="project__img" src={require("../../../resourses/img/projects/wista/4.jpg")} alt='website wistaverse'/>
      <img className="project__img" src={require("../../../resourses/img/projects/wista/5.jpg")} alt='website wistaverse'/>
      <img className="project__img" src={require("../../../resourses/img/projects/wista/6.jpg")} alt='website wistaverse'/>
      <img className="project__img" src={require("../../../resourses/img/projects/wista/7.jpg")} alt='website wistaverse'/>
      <img className="project__img" src={require("../../../resourses/img/projects/wista/8.jpg")} alt='website wistaverse'/>
        
    </>
  )
}

export default Wistaverse;