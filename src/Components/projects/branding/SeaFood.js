import MainBlock from "../../blocks/mainBlock";
import ConceptDouble from "../../blocks/conceptDouble";
import DoubleBlock from "../../blocks/doubleBlock";
import Description from "../../blocks/description";

const SeaFood = () => {
    return (
        <>
        <MainBlock
            image={"sea-food/title.jpg"}
            alt={"sea-food"}/>
        <ConceptDouble
            descr1={"Sea food catering is a professional service specializing in fresh seafood dishes.All the dishes that are being prepared are made from high-quality seafood that has just been caught."}
            descr2={"It is for this reason that the company's symbol is chosen fishing hooks, which symbolize the freshness of seafood delivered just from fishermen."}/>
        <DoubleBlock
            image1={"sea-food/grey-hook.jpg"}
            alt1={"grey-hook"}
            image2={"sea-food/hook.jpg"}
            alt2={"hook"}/>
        <MainBlock
            image={"sea-food/boxes.jpg"}
            alt={"boxes"}/>
        <Description
            descr={"The company pays great attention not only to food and the quality of dishes, but also to details, therefore, within the framework of the corporate identity, many layouts have been developed that all together create the image of professionals"}/>
        <DoubleBlock
            image1={"sea-food/oysters.jpg"}
            alt1={"oysters"}
            image2={"sea-food/car.jpg"}
            alt2={"car"}/>
        <MainBlock
            image={"sea-food/jar.jpg"}
            alt={"jar"}/>
        <DoubleBlock
            image1={"sea-food/food.jpg"}
            alt1={"food"}
            image2={"sea-food/vine.jpg"}
            alt2={"vine"}
            clazz={"project__container project__container--big"}/>
        </>
    )
}

export default SeaFood;