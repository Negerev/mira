import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";

const Beyond = () => {
    return (
        <>
            <MainBlock
                image={"beyond/title.jpg"}
                alt={"beyond"}/>
            <Concept
                descr={"Business presentation of the company, describing the main services, competencies and advantages of the agency Beyond."}/>
            <DoubleBlock
                image1={"beyond/1.jpg"}
                alt1={"1"}
                image2={"beyond/2.jpg"}
                alt2={"2"}/>
            <MainBlock
                image={"beyond/3.jpg"}
                alt={"3"}/>
            <DoubleBlock
                image1={"beyond/4.jpg"}
                alt1={"4"}
                image2={"beyond/5.jpg"}
                alt2={"5"}/>
            <MainBlock
                image={"beyond/6.jpg"}
                alt={"6"}/>
        </>
    )
}

export default Beyond;