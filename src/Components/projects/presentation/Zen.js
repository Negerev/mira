import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";

const Zen = () => {
    return (
        <>
            <MainBlock
                image={"zen/title.jpg"}
                alt={"zen"}/>
            {/* <Concept
                descr={"Wana sari means “beautiful place” in Balinese. We have developed a logo and corporate identity for a cozy hotel located in the heart of the jungle of Bali."}/> */}
            <MainBlock
                image={"zen/1.jpg"}
                alt={"1"}/>
            <MainBlock
                image={"zen/2.jpg"}
                alt={"2"}/>
            <MainBlock
                image={"zen/3.jpg"}
                alt={"3"}/>
            <MainBlock
                image={"zen/4.jpg"}
                alt={"4"}/>
           
        </>
    )
}

export default Zen;