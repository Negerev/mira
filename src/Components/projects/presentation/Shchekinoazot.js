import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";

const Shchekinoazot = () => {
    return (
        <>
            <MainBlock
                image={"shchekinoazot/title.jpg"}
                alt={"shchekinoazot"}/>
            <Concept
                descr={"Development of a multilingual corporate report for the international company Shchekinoazot"}/>
            <DoubleBlock
                image1={"shchekinoazot/1.jpg"}
                alt1={"1"}
                image2={"shchekinoazot/2.jpg"}
                alt2={"2"}/>
            <MainBlock
                image={"shchekinoazot/3.jpg"}
                alt={"3"}/>
            <MainBlock
                image={"shchekinoazot/4.jpg"}
                alt={"4"}/>
            <DoubleBlock
                image1={"shchekinoazot/5.jpg"}
                alt1={"5"}
                image2={"shchekinoazot/6.jpg"}
                alt2={"6"}/>
            <MainBlock
                image={"shchekinoazot/7.jpg"}
                alt={"7"}/>
            <MainBlock
                image={"shchekinoazot/8.jpg"}
                alt={"8"}/>
        </>
    )
}

export default Shchekinoazot;