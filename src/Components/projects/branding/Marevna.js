import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";
import Description from "../../blocks/description";

const Marevna = () => {
    return (
        <>
            <MainBlock
                image={"marevna/title.jpg"}
                alt={"marevna"}/>
            <Concept
                descr={"Marevna is an international brand of designer jewelry and clothing for business and purposeful women."}/>
            <DoubleBlock
                image1={"marevna/1.jpg"}
                alt1={"1"}
                image2={"marevna/2.jpg"}
                alt2={"2"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"marevna/3.jpg"}
                alt={"3"}/>
            <MainBlock
                image={"marevna/4.jpg"}
                alt={"4"}/>
            <MainBlock
                image={"marevna/5.jpg"}
                alt={"5"}/>
            <Description
                descr={"Product design for the clothing line"}/>
            <DoubleBlock
                image1={"marevna/6.jpg"}
                alt1={"6"}
                image2={"marevna/7.jpg"}
                alt2={"7"}/>
            <DoubleBlock
                image1={"marevna/8.jpg"}
                alt1={"8"}
                image2={"marevna/9.jpg"}
                alt2={"9"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"marevna/10.jpg"}
                alt={"10"}/>
            <DoubleBlock
                image1={"marevna/11.jpg"}
                alt1={"11"}
                image2={"marevna/12.jpg"}
                alt2={"12"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"marevna/13.jpg"}
                alt={"13"}/>
            <Description
                descr={"Design of products for the jewelry line"}/>
            <MainBlock
                image={"marevna/14.jpg"}
                alt={"14"}/>
            <DoubleBlock
                image1={"marevna/15.jpg"}
                alt1={"15"}
                image2={"marevna/16.jpg"}
                alt2={"16"}
                clazz={"project__container project__container--big"}/>
            <Description
                descr={"Registration of the promotional program"}/>
            <MainBlock
                image={"marevna/17.jpg"}
                alt={"17"}/>
            <DoubleBlock
                image1={"marevna/18.jpg"}
                alt1={"18"}
                image2={"marevna/19.jpg"}
                alt2={"19"}
                clazz={"project__container project__container--big"}/>
        </>
    )
}

export default Marevna;