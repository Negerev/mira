import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";
import DescriptionDouble from "../../blocks/descriptionDouble";
import Description from "../../blocks/description";

const Dream = () => {
    return (
        <>
            <MainBlock
                image={"dream/title.jpg"}
                alt={"dream"}/>
            <Concept
                title={"Task"}
                descr={"To develop the concept of a unified design of the coastal residential complex space, its stylistic and visual component."}/>
            <DoubleBlock
                image1={"dream/colors.jpg"}
                alt1={"colors"}
                image2={"dream/bird.jpg"}
                alt2={"bird"}/>
            <DoubleBlock
                image1={"dream/ornament.jpg"}
                alt1={"ornament"}
                image2={"dream/icons.jpg"}
                alt2={"icons"}
                clazz={"project__container project__container--big"}/>
            <DescriptionDouble
                descr1={"A logo and a bright and recognizable corporate identity were developed for a residential complex on the seashore in Crimea.The stylistics were based on the image of a swallow."}
                descr2={"According to ancient beliefs, it is believed that if this bird builds a nest under the roof of a person's house, then comfort and happiness will reign in this house."}/>
            <MainBlock
                image={"dream/style.jpg"}
                alt={"style"}/>
            <DoubleBlock
                image1={"dream/visit-cards.jpg"}
                alt1={"visit-cards"}
                image2={"dream/keys.jpg"}
                alt2={"keys"}
                clazz={"project__container project__container--big"}/>
            <Description
                descr={"Branding for this project extended to the design of internal public spaces and interior solutions. The lobby and reception areas were worked out, navigation on the object was developed both outside and inside the premises"}/>
            <MainBlock
                image={"dream/reception.jpg"}
                alt={"reception"}/>
            <DoubleBlock
                image1={"dream/lifts.jpg"}
                alt1={"lifts"}
                image2={"dream/hall.jpg"}
                alt2={"hall"}/>
            <DescriptionDouble
                descr1={"Presentation materials are an important component in the presentation of a real estate project."}
                descr2={"Presentations, booklets, a website and a virtual presentation space were developed for the housing complex"}/>
            <MainBlock
                image={"dream/magazins.jpg"}
                alt={"magazins"}/>
            <DoubleBlock
                image1={"dream/dream.jpg"}
                alt1={"dream"}
                image2={"dream/pages.jpg"}
                alt2={"pages"}
                clazz={"project__container project__container--big"}/>
        </>
    )
}

export default Dream;