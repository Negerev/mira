import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";
import Description from "../../blocks/description";
import VideoBlock from "../../blocks/videoBlock";

const Genesis = () => {
    return (
        <>
            <VideoBlock
                video={"genezis.mp4"}
                main = {false}/>
            <Concept
                title="Task"
                descr={"For the Genesis Engeniring company's website, come up with and draw an illustration of a city of the future, with a developed infrastructure based on environmental technologies."}/>
            <MainBlock
                image={"genesis/1.jpg"}
                alt={"1"}/>
            <DoubleBlock
                image1={"genesis/2.jpg"}
                alt1={"2"}
                image2={"genesis/3.jpg"}
                alt2={"3"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"genesis/4.jpg"}
                alt={"4"}/>
            <MainBlock
                image={"genesis/5.jpg"}
                alt={"5"}/>
                <Description
                descr={"workflow"}/>
            <DoubleBlock
                image1={"genesis/6.jpg"}
                alt1={"6"}
                image2={"genesis/7.jpg"}
                alt2={"7"}/>
        </>
    )
}

export default Genesis;