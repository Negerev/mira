import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";

const Soul = () => {
    return (
        <>
            <MainBlock
                image={"soul/title.jpg"}
                alt={"soul"}/>
            <Concept
                descr={"Development of the design of the site for the presentation and launch of a new Porsche car model."}/>
            <DoubleBlock
                image1={"soul/up.jpg"}
                alt1={"up"}
                image2={"soul/men.jpg"}
                alt2={"men"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"soul/porsche.jpg"}
                alt={"porsche"}/>
            
            <MainBlock
                image={"soul/screen.jpg"}
                alt={"screen"}/>
            <DoubleBlock
                image1={"soul/lays.jpg"}
                alt1={"lays"}
                image2={"soul/car.jpg"}
                alt2={"car"}/>
            <MainBlock
                image={"soul/front.jpg"}
                alt={"front"}/>
            <DoubleBlock
                image1={"soul/car1.jpg"}
                alt1={"car1"}
                image2={"soul/car2.jpg"}
                alt2={"car2"}
                clazz={"project__container project__container--big"}/>
            
        </>
    )
}

export default Soul;