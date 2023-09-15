import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";
import Description from "../../blocks/description";

const Structura = () => {
    return (
        <>
            <MainBlock
                image={"structura/title.jpg"}
                alt={"sber"}/>
            <Concept
                title={"Task"}
                descr={"Develop a series of illustrations for visualization of presentation materials. The images must be designed in the same style as the corresponding brandbook of the company."}/>
            <DoubleBlock
                image1={"structura/1.jpg"}
                alt1={"1"}
                image2={"structura/2.jpg"}
                alt2={"2"}/>
            <Description
                descr={"The company identifies several areas of its activity and for each of them we have developed our own visual solution that does not contradict the overall visual style."}/>
            <DoubleBlock
                image1={"structura/3.jpg"}
                alt1={"3"}
                image2={"structura/4.jpg"}
                alt2={"4"}
                clazz={"project__container project__container--big"}/>
            <DoubleBlock
                image1={"structura/5.jpg"}
                alt1={"5"}
                image2={"structura/6.jpg"}
                alt2={"6"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"structura/7.jpg"}
                alt={"7"}/>
             <DoubleBlock
                image1={"structura/8.jpg"}
                alt1={"8"}
                image2={"structura/9.jpg"}
                alt2={"9"}/>
            <Description
                descr={"Within the framework of the project, more than 40 images were created: visualization of directions, infographics, icons, atmospheric abstractions, etc."}/>
            
            <DoubleBlock
                image1={"structura/10.jpg"}
                alt1={"10"}
                image2={"structura/11.jpg"}
                alt2={"11"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"structura/12.jpg"}
                alt={"12"}/>
            <DoubleBlock
                image1={"structura/13.jpg"}
                alt1={"13"}
                image2={"structura/14.jpg"}
                alt2={"14"}/>
            <MainBlock
                image={"structura/15.jpg"}
                alt={"15"}/>
            <DoubleBlock
                image1={"structura/16.jpg"}
                alt1={"16"}
                image2={"structura/17.jpg"}
                alt2={"17"}
                clazz={"project__container project__container--big"}/>
            <DoubleBlock
                image1={"structura/18.jpg"}
                alt1={"18"}
                image2={"structura/19.jpg"}
                alt2={"19"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"structura/20.jpg"}
                alt={"20"}/>
        </>
    )
}

export default Structura;