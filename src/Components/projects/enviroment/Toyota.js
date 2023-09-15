import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";
import Description from "../../blocks/description";

const Toyota = () => {
    return (
        <>
            <MainBlock
                image={"toyota/title.jpg"}
                alt={"toyota"}/>
            <Concept
                descr={"Design and visualization of the design concept of the site for the presentation event dedicated to the launch of the new Toyota Rav4 model"}/>
            <DoubleBlock
                image1={"toyota/car1.jpg"}
                alt1={"car1"}
                image2={"toyota/car2.jpg"}
                alt2={"car2"}/>
            <MainBlock
                image={"toyota/woomen.jpg"}
                alt={"woomen"}/>
            <Description
                descr={"According to the concept, the site is divided into several thematic zones, each of which represents one or another advantage of the model"}/>
            <DoubleBlock
                image1={"toyota/ring.jpg"}
                alt1={"ring"}
                image2={"toyota/sound.jpg"}
                alt2={"sound"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"toyota/stand.jpg"}
                alt={"stand"}/>
            <DoubleBlock
                image1={"toyota/woman.jpg"}
                alt1={"woman"}
                image2={"toyota/man.jpg"}
                alt2={"man"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"toyota/photo-zone.jpg"}
                alt={"photo-zone"}/>
            <DoubleBlock
                image1={"toyota/sofa.jpg"}
                alt1={"sofa"}
                image2={"toyota/shelfs.jpg"}
                alt2={"shelfs"}/>
            <MainBlock
                image={"toyota/plan.jpg"}
                alt={"plan"}/>
        </>
    )
}

export default Toyota;