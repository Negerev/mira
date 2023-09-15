import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";

const Lamps = () => {
    return (
        <>
            <MainBlock
                image={"lamps/title.jpg"}
                alt={"lamps"}/>
            {/* <Concept
                descr={"Wana sari means “beautiful place” in Balinese. We have developed a logo and corporate identity for a cozy hotel located in the heart of the jungle of Bali."}/> */}
            <DoubleBlock
                image1={"lamps/1.jpg"}
                alt1={"1"}
                image2={"lamps/2.jpg"}
                alt2={"2"}/>
            <MainBlock
                image={"lamps/3.jpg"}
                alt={"3"}/>
            <MainBlock
                image={"lamps/4.jpg"}
                alt={"4"}/>
            <MainBlock
                image={"lamps/5.jpg"}
                alt={"5"}/>
            <MainBlock
                image={"lamps/6.jpg"}
                alt={"6"}/>
        </>
    )
}

export default Lamps;