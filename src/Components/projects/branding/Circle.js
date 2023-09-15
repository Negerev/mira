import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";
import Description from "../../blocks/description";

const Circle = () => {
    return (
        <>
            <MainBlock
                image={"circle/title.jpg"}
                alt={"circle"}/>
            <Concept
                descr={"Circlegen is an international company engaged in the research, production and development of immersion equipment for servers and mining, positioning itself as a partner and promoter of the entire industry."}/>
            <DoubleBlock
                image1={"circle/logo.jpg"}
                alt1={"logo"}
                image2={"circle/blue-logo.jpg"}
                alt2={"blue-logo"}
                clazz={"project__container project__container--big"}/>
            <DoubleBlock
                image1={"circle/colors.jpg"}
                alt1={"colors"}
                image2={"circle/icons.jpg"}
                alt2={"icons"}
                clazz={"project__container project__container--big"}/>
            <Description
                descr={"A unique branding has been developed using a global concept, expressed by the use of circles and open colors, corresponding to the spirit of the company."}/>
            <MainBlock
                image={"circle/phones.jpg"}
                alt={"phones"}/>
            <DoubleBlock
                image1={"circle/promo.jpg"}
                alt1={"promo"}
                image2={"circle/style.jpg"}
                alt2={"style"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"circle/mac.jpg"}
                alt={"mac"}/>
            <DoubleBlock
                image1={"circle/latter.jpg"}
                alt1={"latter"}
                image2={"circle/magazine.jpg"}
                alt2={"magazine"}
                clazz={"project__container project__container--big"}/>
            <DoubleBlock
                image1={"circle/pictures.jpg"}
                alt1={"pictures"}
                image2={"circle/wall.jpg"}
                alt2={"wall"}/>
            <MainBlock
                image={"circle/case.jpg"}
                alt={"case"}/>
        </>
    )
}

export default Circle;