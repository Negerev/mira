import MainBlock from "../../blocks/mainBlock";
import VideoBlock from "../../blocks/videoBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";
import Description from "../../blocks/description";

const FieldDay = () => {
    return (
        <>
             <VideoBlock
                video={"osen.mp4"}
                main = {false}/>
            <Concept
                title="Task"
                descr={"Systematize the participants of the exhibition and build a stylistic and logical solution for displaying various thematic zones on the navigation map"}/>
            <DoubleBlock
                image1={"field-day/1.jpg"}
                alt1={"1"}
                image2={"field-day/2.jpg"}
                alt2={"2"}/>
            <Description
                descr={"For ease of orientation on the map, a symmetrical structure with a pronounced central line was chosen. On different sides there are thematic zones of sponsor companies and stands of the participating regions."}/>
            <MainBlock
                image={"field-day/3.jpg"}
                alt={"3"}/>
            <Description
                descr={"Exclusive participants have an individual design, then the stands differ in several types: business, region, standard."}/>
            <DoubleBlock
                image1={"field-day/4.jpg"}
                alt1={"4"}
                image2={"field-day/5.jpg"}
                alt2={"5"}/>
            <Concept
                title={"workflow"}
                descr={"In the process, we developed not only the design and visualization of the main map, but also experimented on various architectural solutions for the exhibitors' stands"}
                clazz={"project__subtitle project__subtitle--thik"}/>
            <DoubleBlock
                image1={"field-day/6.jpg"}
                alt1={"6"}
                image2={"field-day/7.jpg"}
                alt2={"7"}/>
            <DoubleBlock
                image1={"field-day/8.jpg"}
                alt1={"8"}
                image2={"field-day/9.jpg"}
                alt2={"9"}/>
            <DoubleBlock
                image1={"field-day/10.jpg"}
                alt1={"10"}
                image2={"field-day/11.jpg"}
                alt2={"11"}/>
            <MainBlock
                image={"field-day/12.jpg"}
                alt={"12"}/>
        </>
    )
}

export default FieldDay;