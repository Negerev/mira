import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";
import Description from "../../blocks/description";

const Rightstep = () => {
    return (
        <>
            <MainBlock
                image={"rightstep/title.jpg"}
                alt={"rightstep"}/>
            <Concept
                descr={"To develop the concept of illustrations for the website of the Right Step company, a software developer for the systematization of work processes."}/>
            <DoubleBlock
                image1={"rightstep/1.jpg"}
                alt1={"1"}
                image2={"rightstep/2.jpg"}
                alt2={"2"}/>
            <MainBlock
                image={"rightstep/3.jpg"}
                alt={"3"}/>
            <DoubleBlock
                image1={"rightstep/4.jpg"}
                alt1={"4"}
                image2={"rightstep/5.jpg"}
                alt2={"5"}/>
            <Description
                descr={"The concept is based on the idea of showing different types of productions for which the company creates a software product. Visual stylization creates a feeling of sterility and order that occurs due to the introduction of the company's products."}/>
            <MainBlock
                image={"rightstep/6.jpg"}
                alt={"6"}/>
            <DoubleBlock
                image1={"rightstep/7.jpg"}
                alt1={"7"}
                image2={"rightstep/8.jpg"}
                alt2={"8"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"rightstep/9.jpg"}
                alt={"9"}/>
             <DoubleBlock
                image1={"rightstep/10.jpg"}
                alt1={"10"}
                image2={"rightstep/11.jpg"}
                alt2={"11"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"rightstep/13.jpg"}
                alt={"13"}/>
            <DoubleBlock
                image1={"rightstep/14.jpg"}
                alt1={"14"}
                image2={"rightstep/15.jpg"}
                alt2={"15"}/>
           
            <DoubleBlock
                image1={"rightstep/16.jpg"}
                alt1={"16"}
                image2={"rightstep/17.jpg"}
                alt2={"17"}/>
            <DoubleBlock
                image1={"rightstep/18.jpg"}
                alt1={"18"}
                image2={"rightstep/19.jpg"}
                alt2={"19"}/>
            <MainBlock
                image={"rightstep/20.jpg"}
                alt={"20"}/>
            
        </>
    )
}

export default Rightstep;