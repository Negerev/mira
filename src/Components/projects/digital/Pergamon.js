import VideoBlock from "../../blocks/videoBlock";
import Concept from "../../blocks/concept";

const Pergamon = () => {
  return (
    <>
      <VideoBlock
        video={"per.mp4"}
        main = {false}/>
      <Concept
        descr={"Development of content and a website for the non-profit Pergamon Foundation dedicated to the popularization of ancient Greek culture and historical and cultural values."}/>

      <img className="project__img" src={require("../../../resourses/img/projects/pergamon/1.jpg")} alt='website pergamon'/>

      <img className="project__img" src={require("../../../resourses/img/projects/pergamon/2.jpg")} alt='website pergamon'/>

      <img className="project__img" src={require("../../../resourses/img/projects/pergamon/3.jpg")} alt='website pergamon'/>
        
    </>
  )
}

export default Pergamon;