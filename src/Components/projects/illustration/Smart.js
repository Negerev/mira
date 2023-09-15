import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";
import Description from "../../blocks/description";

const Smart = () => {
    return (
        <>
            <MainBlock
                image={"smart/title.jpg"}
                alt={"smart"}/>
            <Concept
                title="Task"
                descr={"Create “kind” illustrations of characters in modern business style for visualization of thematic blocks on the website"}/>
            <DoubleBlock
                image1={"smart/1.jpg"}
                alt1={"1"}
                image2={"smart/2.jpg"}
                alt2={"2"}/>
            <DoubleBlock
                image1={"smart/3.jpg"}
                alt1={"3"}
                image2={"smart/4.jpg"}
                alt2={"4"}
                clazz={"project__container project__container--big"}/>
             <MainBlock
                image={"smart/5.jpg"}
                alt={"5"}/>
             <MainBlock
                image={"smart/6.jpg"}
                alt={"6"}/>
        </>
    )
}

export default Smart;