import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";
import Description from "../../blocks/description";

const ThreedIllustration = () => {
    return (
        <>
            <MainBlock
                image={"3d-illustration/title.jpg"}
                alt={"3d-illustration"}/>
            <Concept
                descr={"A collection of abstract 3D illustrations and icons designed for various websites and presentations"}/>
            <DoubleBlock
                image1={"3d-illustration/1.jpg"}
                alt1={"1"}
                image2={"3d-illustration/2.jpg"}
                alt2={"2"}/>
            <DoubleBlock
                image1={"3d-illustration/3.jpg"}
                alt1={"3"}
                image2={"3d-illustration/4.jpg"}
                alt2={"4"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"3d-illustration/5.jpg"}
                alt={"5"}/>
            <DoubleBlock
                image1={"3d-illustration/6.jpg"}
                alt1={"6"}
                image2={"3d-illustration/7.jpg"}
                alt2={"7"}/>
            <DoubleBlock
                image1={"3d-illustration/8.jpg"}
                alt1={"8"}
                image2={"3d-illustration/9.jpg"}
                alt2={"9"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"3d-illustration/10.jpg"}
                alt={"10"}/>
            <DoubleBlock
                image1={"3d-illustration/11.jpg"}
                alt1={"11"}
                image2={"3d-illustration/12.jpg"}
                alt2={"12"}/>
            <DoubleBlock
                image1={"3d-illustration/13.jpg"}
                alt1={"13"}
                image2={"3d-illustration/14.jpg"}
                alt2={"14"}/>
            <MainBlock
                image={"3d-illustration/15.jpg"}
                alt={"15"}/>
            <DoubleBlock
                image1={"3d-illustration/16.jpg"}
                alt1={"16"}
                image2={"3d-illustration/17.jpg"}
                alt2={"17"}
                clazz={"project__container project__container--big"}/>
            <DoubleBlock
                image1={"3d-illustration/18.jpg"}
                alt1={"18"}
                image2={"3d-illustration/19.jpg"}
                alt2={"19"}/>
            <DoubleBlock
                image1={"3d-illustration/20.jpg"}
                alt1={"20"}
                image2={"3d-illustration/21.jpg"}
                alt2={"21"}/>
            <MainBlock
                image={"3d-illustration/22.jpg"}
                alt={"22"}/>
        </>
    )
}

export default ThreedIllustration;