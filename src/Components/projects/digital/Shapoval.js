import VideoBlock from "../../blocks/videoBlock";
import Concept from "../../blocks/concept";

const Shapoval = () => {
  return (
    <>
      <VideoBlock
        video={"shapoval.mp4"}
        main = {false}/>
      <Concept
        descr={"website development for event producer and event organizer"}/>

      <img className="project__img" src={require("../../../resourses/img/projects/shapoval/1.jpg")} alt='website shapoval'/>

      <img className="project__img" src={require("../../../resourses/img/projects/shapoval/2.jpg")} alt='website shapoval'/>

      <img className="project__img" src={require("../../../resourses/img/projects/shapoval/3.jpg")} alt='website shapoval'/>
        
    </>
  )
}

export default Shapoval;