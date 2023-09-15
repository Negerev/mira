import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";
import Description from "../../blocks/description";

const KChtZ = () => {
    return (
        <>
            <MainBlock
                image={"k-cht-z/title.jpg"}
                alt={"k-cht-z"}/>
            <Concept
                descr={"A simple and memorable sign of this brand in the form of a rabbit's head is emphasized by a laconic font execution. Nothing superfluous, no small details in branding, the products of this brand are a priority and the logo is just a small highlight."}/>
            <DoubleBlock
                image1={"k-cht-z/colors.jpg"}
                alt1={"colors"}
                image2={"k-cht-z/logo.jpg"}
                alt2={"logo"}/>
            <MainBlock
                image={"k-cht-z/bags.jpg"}
                alt={"bags"}/>
            <DoubleBlock
                image1={"k-cht-z/black.jpg"}
                alt1={"black"}
                image2={"k-cht-z/white.jpg"}
                alt2={"white"}/>
            <Description
                descr={"As part of the task, in addition to developing the logo, work was carried out on layouts of packaging products, labels, packages and boutique interiors"}/>
            <MainBlock
                image={"k-cht-z/interrior.jpg"}
                alt={"interrior"}/>
            <DoubleBlock
                image1={"k-cht-z/showroom.jpg"}
                alt1={"showroom"}
                image2={"k-cht-z/plant.jpg"}
                alt2={"plant"}/>
            <Description
                descr={"Interior solutions are distinguished by their simplicity and conciseness, presenting the brand's clothing in a winning position. The signature turquoise color among the white, calm walls of the room looks like an accent, but also attracts attention to the main functional areas of the store"}/>
            <DoubleBlock
                image1={"k-cht-z/tag.jpg"}
                alt1={"tag"}
                image2={"k-cht-z/box.jpg"}
                alt2={"box"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"k-cht-z/good.jpg"}
                alt={"good"}/>
            <DoubleBlock
                image1={"k-cht-z/promo.jpg"}
                alt1={"promo"}
                image2={"k-cht-z/ears.jpg"}
                alt2={"ears"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"k-cht-z/swetshot.jpg"}
                alt={"swetshot"}/>
        </>
    )
}

export default KChtZ;