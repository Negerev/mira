import VideoBlock from "../../blocks/videoBlock";
import Concept from "../../blocks/concept";

const StepLaunchpad = () => {
  return (
    <>
      <VideoBlock
        video={"steplaunch-new.mp4"}
        main = {false}/>
      <Concept
        descr={"Steplaunch serves step ecosystem community, both users abd builder. Startups get support and adoption; community members get to be a first adopter."}/>

      <img className="project__img" src={require("../../../resourses/img/projects/step-launchpad/1.jpg")} alt='website step launchpad'/>
        
    </>
  )
}

export default StepLaunchpad;