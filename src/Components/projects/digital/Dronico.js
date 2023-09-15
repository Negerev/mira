import VideoBlock from "../../blocks/videoBlock";
import Concept from "../../blocks/concept";

const Dronico = () => {
  return (
    <>
      <VideoBlock
        video={"dronico.mp4"}
        main = {false}/>
      <Concept
        descr={"Website design and development for Dronco. The company organizes drone shows and airship shows. at various events."}/>

      <img className="project__img" src={require("../../../resourses/img/projects/dronico/1.jpg")} alt='website dronico'/>

      <img className="project__img" src={require("../../../resourses/img/projects/dronico/2.jpg")} alt='website dronico'/>

      <img className="project__img" src={require("../../../resourses/img/projects/dronico/3.jpg")} alt='website dronico'/>
        
    </>
  )
}

export default Dronico;