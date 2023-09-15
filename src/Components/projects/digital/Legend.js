import VideoBlock from "../../blocks/videoBlock";
import Concept from "../../blocks/concept";

const Legend = () => {
  return (
    <>
      <VideoBlock
        video={"lgnd.mp4"}
        main = {false}/>
      <Concept
        descr={"The website of the event company's portfolio for organizing large-scale sporting events."}/>

      <img className="project__img" src={require("../../../resourses/img/projects/legend/1.jpg")} alt='website legend'/>

      <img className="project__img" src={require("../../../resourses/img/projects/legend/2.jpg")} alt='website legend'/>

      <img className="project__img" src={require("../../../resourses/img/projects/legend/3.jpg")} alt='website legend'/>

      <img className="project__img" src={require("../../../resourses/img/projects/legend/4.jpg")} alt='website legend'/>
      
      <img className="project__img" src={require("../../../resourses/img/projects/legend/5.jpg")} alt='website legend'/>
        
    </>
  )
}

export default Legend;