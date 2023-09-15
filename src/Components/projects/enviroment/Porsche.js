import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";
import Description from "../../blocks/description";

const Porsche = () => {
    return (
        <>
            <MainBlock
                image={"porsche/title.jpg"}
                alt={"porsche"}/>
            <Concept
                descr={"Porsche Family Day is a family event organized as part of the celebration of the company's anniversary. The platform, made in the form of a race track, is in fact an exposition of Porsche family cars, showing visitors all the models of the company created over the past 70 years."}/>
            <DoubleBlock
                image1={"porsche/70.jpg"}
                alt1={"70"}
                image2={"porsche/years.jpg"}
                alt2={"years"}/>
            <MainBlock
                image={"porsche/plan.jpg"}
                alt={"plan"}/>
            <DoubleBlock
                image1={"porsche/roof.jpg"}
                alt1={"roof"}
                image2={"porsche/plan-roof.jpg"}
                alt2={"plan-roof"}/>
            <Description
                descr={"Designed in a modern, dynamic style, the venue includes not only a variety of exhibition and interactive areas, but also recreation areas, a children's area, a stage, a photo zone, an organizational area, as well as a zone for the main event."}/>
            <MainBlock
                image={"porsche/porsche.jpg"}
                alt={"porsche"}/>
            <DoubleBlock
                image1={"porsche/street.jpg"}
                alt1={"street"}
                image2={"porsche/pilot.jpg"}
                alt2={"pilot"}/>
            <MainBlock
                image={"porsche/rest-zone.jpg"}
                alt={"rest-zone"}/>
            <DoubleBlock
                image1={"porsche/sofa.jpg"}
                alt1={"sofa"}
                image2={"porsche/stend.jpg"}
                alt2={"stend"}/>
            <Description
                descr={"Porsche is a big family. Every visitor of the exhibition can feel like a part of this family with its history, the best traditions, and the desire for the future."}/>
            <MainBlock
                image={"porsche/reception.jpg"}
                alt={"reception"}/>
            <DoubleBlock
                image1={"porsche/men.jpg"}
                alt1={"men"}
                image2={"porsche/cars.jpg"}
                alt2={"cars"}/>
        </>
    )
}

export default Porsche;