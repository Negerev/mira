import VideoBlock from "../../blocks/videoBlock";
import Concept from "../../blocks/concept";

const Alus = () => {
  return (
    <>
      <VideoBlock
        video={"alus.mp4"}
        main = {false}/>
      {/* <Concept
        descr={"Wana sari means “beautiful place” in Balinese. We have developed a logo and corporate identity for a cozy hotel located in the heart of the jungle of Bali."}/> */}

      <img className="project__img" src={require("../../../resourses/img/projects/alus/1.jpg")} alt='website alus'/>
        
    </>
  )
}

export default Alus;