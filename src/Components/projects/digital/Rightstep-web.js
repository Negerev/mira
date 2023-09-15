
import VideoBlock from "../../blocks/videoBlock";
import Concept from "../../blocks/concept";

const RightstepWeb = () => {
  return (
    <>
      <VideoBlock
        video={"rightstep.mp4"}
        main = {false}/>
      <Concept
        descr={"The concept is based on the idea to show different types of productions for which the company creates a software product. Visual stylization creates a feeling of sterility and order that occurs due to the introduction of the company's products."}/>

      <img className="project__img" src={require("../../../resourses/img/projects/rightstep-web/1.jpg")} alt='website right step'/>

      <img className="project__img" src={require("../../../resourses/img/projects/rightstep-web/2.jpg")} alt='website right step'/>

      <img className="project__img" src={require("../../../resourses/img/projects/rightstep-web/3.jpg")} alt='website right step'/>
        
    </>
  )
}

export default RightstepWeb;