import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";

const Google = () => {
  return (
    <>
      <MainBlock
        image={"google/title.jpg"}
        alt={"google"}/>
      <Concept
        descr={"Development of landing pages with live broadcast for a series of Google seminars, the functionality of the site provides for game mechanics, direct transactions and video recording of speeches, voting and internal chat on various topics."}/>

      <img className="project__img" src={require("../../../resourses/img/projects/google/1.jpg")} alt='website google summit'/>

      <img className="project__img" src={require("../../../resourses/img/projects/google/2.jpg")} alt='website google summit'/>

      <img className="project__img" src={require("../../../resourses/img/projects/google/3.jpg")} alt='website google summit'/>
      
    </>
  )
}

export default Google;