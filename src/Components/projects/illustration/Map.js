import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";
import Description from "../../blocks/description";

const Map = () => {
    return (
        <>
            <MainBlock
                image={"map/title.jpg"}
                alt={"map"}/>
            <Concept
                title="Task"
                descr={"To develop a navigation map for the exhibition, which would include the pavilions of all Federal Districts of Russia and visually reflect the theme of the Agro-Industrial Complex of Russia"}/>
            <DoubleBlock
                image1={"map/1.jpg"}
                alt1={"1"}
                image2={"map/2.jpg"}
                alt2={"2"}/>
            <Description
                descr={"The map is geographically divided into several thematic zones: animal husbandry, crop production, fishing. The pavilions of the regions of Russia are grouped by districts and are located on the map in accordance with their geographical location."}/>
            <MainBlock
                image={"map/3.jpg"}
                alt={"3"}/>
            <DoubleBlock
                image1={"map/4.jpg"}
                alt1={"4"}
                image2={"map/5.jpg"}
                alt2={"5"}/>
            <Description
                descr={"As part of the project, 4 maps corresponding to the seasons were drawn"}/>
            <MainBlock
                image={"map/6.jpg"}
                alt={"6"}/>
            <MainBlock
                image={"map/7.jpg"}
                alt={"7"}/>
            <MainBlock
                image={"map/8.jpg"}
                alt={"8"}/>
            <MainBlock
                image={"map/9.jpg"}
                alt={"9"}/>
            <Description
                descr={"workflow"}/>
            <DoubleBlock
                image1={"map/10.jpg"}
                alt1={"10"}
                image2={"map/11.jpg"}
                alt2={"11"}/>
        </>
    )
}

export default Map;