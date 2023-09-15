import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";

const GoogleGames = () => {
  return (
    <>
      <MainBlock
        image={"google-games/title.jpg"}
        alt={"google games"}/>
      <Concept
        descr={"Development of landing pages with live broadcast for a series of Google seminars, the functionality of the site provides for game mechanics, direct transactions and video recording of speeches, voting and internal chat on various topics."}/>

      <img className="project__img" src={require("../../../resourses/img/projects/google-games/1.jpg")} alt='website google games'/>

      <img className="project__img" src={require("../../../resourses/img/projects/google-games/2.jpg")} alt='website google games'/>

      <img className="project__img" src={require("../../../resourses/img/projects/google-games/3.jpg")} alt='website google games'/>
        
    </>
  )
}

export default GoogleGames;