import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";

const StepNetwork = () => {
  return (
    <>
      <MainBlock
        image={"step-network/title.jpg"}
        alt={"step network"}/>
      <Concept
        descr={"Powerful for developers. Fast for everyone. Step network is a decentralized blockchain built to enable scalable, user-friendly apps for the world."}/>

      <img className="project__img" src={require("../../../resourses/img/projects/step-network/1.jpg")} alt='website step network'/>

      <img className="project__img" src={require("../../../resourses/img/projects/step-network/2.jpg")} alt='website step network'/>
        
    </>
  )
}

export default StepNetwork;