import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";
import Description from "../../blocks/description";

const Urban = () => {
    return (
        <>
            <MainBlock
                image={"urban/title.jpg"}
                alt={"urban"}/>
            <Concept
                title="Task"
                descr={"Basic interior solutions of different types of premises are designed to understand the space and layout of future housing"}/>
            <DoubleBlock
                image1={"urban/center.jpg"}
                alt1={"center"}
                image2={"urban/night.jpg"}
                alt2={"night"}/>
            <MainBlock
                image={"urban/roof.jpg"}
                alt={"roof"}/>
            <Description
                descr={"The interior and exterior space is organized taking into account the placement of various functional zones: a work area, a lecture hall, places for privacy, cafes, storerooms, a recreation area, etc."}/>
            <MainBlock
                image={"urban/bycikles.jpg"}
                alt={"bycikles"}/>
            <MainBlock
                image={"urban/day.jpg"}
                alt={"day"}/>
            <DoubleBlock
                image1={"urban/reception.jpg"}
                alt1={"reception"}
                image2={"urban/roof2.jpg"}
                alt2={"roof2"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"urban/woomen.jpg"}
                alt={"woomen"}/>
            <DoubleBlock
                image1={"urban/room.jpg"}
                alt1={"room"}
                image2={"urban/poofs.jpg"}
                alt2={"poofs"}/>
            <DoubleBlock
                image1={"urban/interrior.jpg"}
                alt1={"interrior"}
                image2={"urban/men.jpg"}
                alt2={"men"}/>
        </>
    )
}

export default Urban;