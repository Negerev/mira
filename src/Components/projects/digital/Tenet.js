import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";

const Tenet = () => {
  return (
    <>
      <MainBlock
        image={"tenet/title.jpg"}
        alt={"tenet"}/>
      <Concept
        descr={"Battle-tested EVM Libraries are liberated by the scale and composability of Cosmos. Distributed Proof of Stake puts Liquid Staking Derivatives to use, while building a smart contract network more secure than Ethereum."}/>

      <img className="project__img" src={require("../../../resourses/img/projects/tenet/1.jpg")} alt='website tenet'/>

      <img className="project__img" src={require("../../../resourses/img/projects/tenet/2.jpg")} alt='website tenet'/>

      <img className="project__img" src={require("../../../resourses/img/projects/tenet/3.jpg")} alt='website tenet'/>
        
    </>
  )
}

export default Tenet;