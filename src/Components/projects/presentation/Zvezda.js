import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";

const Zvezda = () => {
    return (
        <>
            <MainBlock
                image={"zvezda/title.jpg"}
                alt={"zvezda"}/>
            <Concept
                descr={"Development of a presentation of a multifunctional event space. The presentation provides detailed information about the site's capabilities, capacity for various events, diagrams and drawings."}/>
            <DoubleBlock
                image1={"zvezda/1.jpg"}
                alt1={"1"}
                image2={"zvezda/2.jpg"}
                alt2={"2"}/>
            <MainBlock
                image={"zvezda/3.jpg"}
                alt={"3"}/>
            <MainBlock
                image={"zvezda/4.jpg"}
                alt={"4"}/>
            <MainBlock
                image={"zvezda/5.jpg"}
                alt={"5"}/>
            <MainBlock
                image={"zvezda/6.jpg"}
                alt={"6"}/>
            <DoubleBlock
                image1={"zvezda/7.jpg"}
                alt1={"7"}
                image2={"zvezda/8.jpg"}
                alt2={"8"}/>
            <MainBlock
                image={"zvezda/9.jpg"}
                alt={"9"}/>
            <DoubleBlock
                image1={"zvezda/10.jpg"}
                alt1={"10"}
                image2={"zvezda/11.jpg"}
                alt2={"11"}/>
            
        </>
    )
}

export default Zvezda;