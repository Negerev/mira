import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";

const Promomed = () => {
    return (
        <>
            <MainBlock
                image={"promomed/title.jpg"}
                alt={"promomed"}/>
            <Concept
                descr={"Development of a multilingual corporate presentation template for the leading pharmaceutical company 'Promomed'"}/>
            <DoubleBlock
                image1={"promomed/1.jpg"}
                alt1={"1"}
                image2={"promomed/2.jpg"}
                alt2={"2"}/>
            <MainBlock
                image={"promomed/3.jpg"}
                alt={"3"}/>
            <DoubleBlock
                image1={"promomed/4.jpg"}
                alt1={"4"}
                image2={"promomed/5.jpg"}
                alt2={"5"}/>
            <MainBlock
                image={"promomed/6.jpg"}
                alt={"6"}/>
        </>
    )
}

export default Promomed;