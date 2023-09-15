import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";
import Description from "../../blocks/description";

const UrbanFarm = () => {
    return (
        <>
            <MainBlock
                image={"urban-farm/title.jpg"}
                alt={"urban-farm"}/>
            <Concept
                descr={"Circlegen is an international company engaged in the research, production and development of immersion equipment for servers and mining, positioning itself as a partner and promoter of the entire industry."}/>
            <DoubleBlock
                image1={"urban-farm/colors.jpg"}
                alt1={"color"}
                image2={"urban-farm/card.jpg"}
                alt2={"card"}/>
            <MainBlock
                image={"urban-farm/wall.jpg"}
                alt={"wall"}/>
            <Description
                descr={"The company's logo includes an image of a stylized greenhouse in the form of simple lines combined with images of greenhouse crops. The colors of the logo are bright and saturated to attract attention and associate with nature.The font in the corporate style is modern and readable."}/>
            <DoubleBlock
                image1={"urban-farm/phone.jpg"}
                alt1={"phone"}
                image2={"urban-farm/post.jpg"}
                alt2={"post"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"urban-farm/plant.jpg"}
                alt={"plant"}/>
            <Description
                descr={"In general, the corporate identity conveys the idea that urban mobile greenhouses are a modern and convenient solution for lovers of a healthy lifestyle and environmentally friendly products."}/>
            <DoubleBlock
                image1={"urban-farm/car.jpg"}
                alt1={"car"}
                image2={"urban-farm/containers.jpg"}
                alt2={"containers"}/>
            <MainBlock
                image={"urban-farm/logo.jpg"}
                alt={"logo"}/>
        </>
    )
}

export default UrbanFarm;