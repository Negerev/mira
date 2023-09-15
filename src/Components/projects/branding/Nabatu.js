import MainBlock from "../../blocks/mainBlock";
import ConceptDouble from "../../blocks/conceptDouble";
import DoubleBlock from "../../blocks/doubleBlock";
import Description from "../../blocks/description";

const Nabatu = () => {
    return (
        <>
            <MainBlock
                image={"nabatu/title.jpg"}
                alt={"nabatu"}/>
            <ConceptDouble
                descr1={"Nabatu is an urban coffee shop in Saudi Arabia. the name of which comes from the ancient kingdom of “Nabatea”."}
                descr2={"The sign is made in the style of Nabataean art, using traditional geometric patterns and figures."}/>
            <DoubleBlock
                image1={"nabatu/visit-card.jpg"}
                alt1={"visit-card"}
                image2={"nabatu/colors.jpg"}
                alt2={"colors"}/>
            <Description
                descr={"The logo reflects the historical and cultural value of coffee for the people of Nabatea, and at the same time evokes associations with aromatic coffee."}/>
            <DoubleBlock
                image1={"nabatu/logo.jpg"}
                alt1={"logo"}
                image2={"nabatu/ornament.jpg"}
                alt2={"ornament"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"nabatu/phones.jpg"}
                alt={"phones"}/>
            <Description
                descr={"The color scheme is associated with sandy tones, which are characteristic of the desert area where the Nabataeans lived."}/>
            <DoubleBlock
                image1={"nabatu/style.jpg"}
                alt1={"style"}
                image2={"nabatu/cups.jpg"}
                alt2={"cups"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"nabatu/cafe.jpg"}
                alt={"cafe"}/>
        </>
        
    )
}

export default Nabatu;