import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";

const StructuraPrez = () => {
    return (
        <>
            <MainBlock
                image={"structura-prez/title.jpg"}
                alt={"structura-prez"}/>
            {/* <Concept
                descr={"Development of a graphic style, layout and design of a presentation for the presentation of an event at a major event venue in Moscow."}/> */}
            <DoubleBlock
                image1={"structura-prez/1.jpg"}
                alt1={"1"}
                image2={"structura-prez/2.jpg"}
                alt2={"2"}/>
            <MainBlock
                image={"structura-prez/3.jpg"}
                alt={"3"}/>
            <DoubleBlock
                image1={"structura-prez/4.jpg"}
                alt1={"4"}
                image2={"structura-prez/5.jpg"}
                alt2={"5"}/>
            <MainBlock
                image={"structura-prez/6.jpg"}
                alt={"6"}/>
            <DoubleBlock
                image1={"structura-prez/7.jpg"}
                alt1={"7"}
                image2={"structura-prez/8.jpg"}
                alt2={"8"}/>
            <MainBlock
                image={"structura-prez/9.jpg"}
                alt={"9"}/>
            <DoubleBlock
                image1={"structura-prez/10.jpg"}
                alt1={"10"}
                image2={"structura-prez/11.jpg"}
                alt2={"11"}/>
            <MainBlock
                image={"structura-prez/12.jpg"}
                alt={"12"}/>
            <DoubleBlock
                image1={"structura-prez/13.jpg"}
                alt1={"13"}
                image2={"structura-prez/14.jpg"}
                alt2={"14"}/>
            <MainBlock
                image={"structura-prez/15.jpg"}
                alt={"15"}/>
            <MainBlock
                image={"structura-prez/16.jpg"}
                alt={"16"}/>
        </>
    )
}

export default StructuraPrez;