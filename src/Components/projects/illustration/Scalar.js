import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";
import Description from "../../blocks/description";

const Scalar = () => {
    return (
        <>
            <MainBlock
                image={"scalar/title.jpg"}
                alt={"scalar"}/>
            <Concept
                title={"Task"}
                descr={"To develop a style and a series of image illustrations for sections of the SCALAR website"}/>
            <DoubleBlock
                image1={"scalar/1.jpg"}
                alt1={"1"}
                image2={"scalar/2.jpg"}
                alt2={"2"}/>
            <DoubleBlock
                image1={"scalar/3.jpg"}
                alt1={"3"}
                image2={"scalar/4.jpg"}
                alt2={"4"}
                clazz={"project__container project__container--big"}/>
            <Description
                descr={"The Scalar company was formed by a group of specialists in the field of recruitment and security, who decided to make a breakthrough in the quality of services provided in the market. The Scalar team brought together the best brands, specialists and assets in this field under their wing, which allowed them to take security risk forecasting to a new level."}/>
            <MainBlock
                image={"scalar/5.jpg"}
                alt={"5"}/>
            <DoubleBlock
                image1={"scalar/6.jpg"}
                alt1={"6"}
                image2={"scalar/7.jpg"}
                alt2={"7"}/>
            <DoubleBlock
                image1={"scalar/8.jpg"}
                alt1={"8"}
                image2={"scalar/9.jpg"}
                alt2={"9"}/>
            <Description
                descr={"When working on the project, an in-depth analysis of the companies' activities was carried out, reference visual materials were selected, sketches were created and more than 40 illustrations were drawn, which are used on the project website."}/>
            <MainBlock
                image={"scalar/10.jpg"}
                alt={"10"}/>
            <DoubleBlock
                image1={"scalar/11.jpg"}
                alt1={"11"}
                image2={"scalar/12.jpg"}
                alt2={"12"}/>
            <DoubleBlock
                image1={"scalar/13.jpg"}
                alt1={"13"}
                image2={"scalar/14.jpg"}
                alt2={"14"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"scalar/15.jpg"}
                alt={"15"}/>
            <DoubleBlock
                image1={"scalar/16.jpg"}
                alt1={"16"}
                image2={"scalar/17.jpg"}
                alt2={"17"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"scalar/18.jpg"}
                alt={"18"}/>
            <DoubleBlock
                image1={"scalar/19.jpg"}
                alt1={"19"}
                image2={"scalar/20.jpg"}
                alt2={"20"}/>
            <MainBlock
                image={"scalar/21.jpg"}
                alt={"21"}/>
        </>
    )
}

export default Scalar;