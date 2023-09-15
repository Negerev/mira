import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";

const Spirit = () => {
    return (
        <>
            <MainBlock
                image={"spirit/title.jpg"}
                alt={"spirit"}/>
            {/* <Concept
                descr={"Wana sari means “beautiful place” in Balinese. We have developed a logo and corporate identity for a cozy hotel located in the heart of the jungle of Bali."}/> */}
            <MainBlock
                image={"spirit/1.jpg"}
                alt={"1"}/>
            <DoubleBlock
                image1={"spirit/2.jpg"}
                alt1={"2"}
                image2={"spirit/3.jpg"}
                alt2={"3"}/>
            <MainBlock
                image={"spirit/4.jpg"}
                alt={"4"}/>
        </>
    )
}

export default Spirit;