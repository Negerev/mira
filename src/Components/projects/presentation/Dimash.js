import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";

const Dimash = () => {
    return (
        <>
            <MainBlock
                image={"dimash/title.jpg"}
                alt={"dimash"}/>
            <Concept
                descr={"Design and layout of a promotional presentation for a concert tour in support of the presentation of the album DIMASH QUDAIBERGEN"}/>
            <DoubleBlock
                image1={"dimash/1.jpg"}
                alt1={"1"}
                image2={"dimash/2.jpg"}
                alt2={"2"}/>
            <MainBlock
                image={"dimash/3.jpg"}
                alt={"3"}/>
            <DoubleBlock
                image1={"dimash/4.jpg"}
                alt1={"4"}
                image2={"dimash/5.jpg"}
                alt2={"5"}/>
        </>
    )
}

export default Dimash;