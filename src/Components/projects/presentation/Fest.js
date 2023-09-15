import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";

const Fest = () => {
    return (
        <>
            <MainBlock
                image={"fest/title.jpg"}
                alt={"fest"}/>
            <Concept
                descr={"Development of a graphic style, layout and design of a presentation for the presentation of an event at a major event venue in Moscow."}/>
            <DoubleBlock
                image1={"fest/1.jpg"}
                alt1={"1"}
                image2={"fest/2.jpg"}
                alt2={"2"}/>
            <MainBlock
                image={"fest/3.jpg"}
                alt={"3"}/>
            <MainBlock
                image={"fest/4.jpg"}
                alt={"4"}/>
            <MainBlock
                image={"fest/5.jpg"}
                alt={"5"}/>
        </>
    )
}

export default Fest;