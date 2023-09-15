import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";
import Description from "../../blocks/description";

const ThreedMap = () => {
    return (
        <>
            <MainBlock
                image={"3d-map/title.jpg"}
                alt={"3d-map"}/>
            <Concept
                title={"Task"}
                descr={"To visualize a stylized 3d map of the educational institution of the Timiryazev Agricultural Academy."}/>
            <DoubleBlock
                image1={"3d-map/1.jpg"}
                alt1={"1"}
                image2={"3d-map/2.jpg"}
                alt2={"2"}/>
            <DoubleBlock
                image1={"3d-map/3.jpg"}
                alt1={"3"}
                image2={"3d-map/4.jpg"}
                alt2={"4"}
                clazz={"project__container project__container--big"}/>
            <Description
                descr={"workflow"}/>
            <MainBlock
                image={"3d-map/5.jpg"}
                alt={"5"}/>
            <DoubleBlock
                image1={"3d-map/7.jpg"}
                alt1={"7"}
                image2={"3d-map/6.jpg"}
                alt2={"6"}/>
        </>
    )
}

export default ThreedMap;