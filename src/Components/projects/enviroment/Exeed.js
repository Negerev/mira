import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";
import Description from "../../blocks/description";

const Exeed = () => {
    return (
        <>
            <MainBlock
                image={"exeed/title.jpg"}
                alt={"exeed"}/>
            <Concept
                title={"Task"}
                descr={"To develop the concept of planning and design solutions for the exhibition of brand cars, observing the visual style broadcast by the brand."}/>
            <MainBlock
                image={"exeed/cars.jpg"}
                alt={"cars"}/>
            <DoubleBlock
                image1={"exeed/woman.jpg"}
                alt1={"woman"}
                image2={"exeed/man.jpg"}
                alt2={"man"}/>
            <Description
                descr={"The concept of “Technology Reflection” is emphasized through the use of mirror surfaces in the interior design of the stand"}/>
            <DoubleBlock
                image1={"exeed/stand.jpg"}
                alt1={"stand"}
                image2={"exeed/plan.jpg"}
                alt2={"plan"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"exeed/blue-car.jpg"}
                alt={"blue-car"}/>
            <DoubleBlock
                image1={"exeed/mirrors.jpg"}
                alt1={"mirrors"}
                image2={"exeed/reception.jpg"}
                alt2={"reception"}/>
            <MainBlock
                image={"exeed/black-car.jpg"}
                alt={"black-car"}/>
        </>
    )
}

export default Exeed;