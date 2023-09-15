import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";
import DescriptionDouble from "../../blocks/descriptionDouble";

const WanaSari = () => {
    return (
        <>
            <MainBlock
                image={"wana-sari/title.jpg"}
                alt={"wana-sari"}/>
            <Concept
                descr={"Wana sari means “beautiful place” in Balinese. We have developed a logo and corporate identity for a cozy hotel located in the heart of the jungle of Bali."}/>
            <DoubleBlock
                image1={"wana-sari/flowers.jpg"}
                alt1={"flowers"}
                image2={"wana-sari/soap.jpg"}
                alt2={"soap"}/>
            <MainBlock
                image={"wana-sari/brands.jpg"}
                alt={"brands"}/>
            <DoubleBlock
                image1={"wana-sari/colors.jpg"}
                alt1={"colors"}
                image2={"wana-sari/ornaments.jpg"}
                alt2={"ornaments"}/>
            <DescriptionDouble
                descr1={"The typography and the logo sign are clean and modern with plastic elements inherent in the national ornament."}
                descr2={"To emphasize the tranquility and comfort of the hotel, the color scheme is associated with natural colors characteristic of the local landscape and creates a single image together with it."}/>
            <MainBlock
                image={"wana-sari/things.jpg"}
                alt={"things"}/>
            <DoubleBlock
                image1={"wana-sari/scrapbooking.jpg"}
                alt1={"scrapbooking"}
                image2={"wana-sari/door.jpg"}
                alt2={"door"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"wana-sari/phones.jpg"}
                alt={"phones"}/>
            <DescriptionDouble
                descr1={"The typography and the logo sign are clean and modern with plastic elements inherent in the national ornament."}
                descr2={"To emphasize the tranquility and comfort of the hotel, the color scheme is associated with natural colors characteristic of the local landscape and creates a single image together with it."}/>
            <MainBlock
                image={"wana-sari/footer.jpg"}
                alt={"footer"}/>
        </>
        
    )
}

export default WanaSari;