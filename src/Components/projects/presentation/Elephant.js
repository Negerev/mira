import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";

const Elephant = () => {
    return (
        <>
            <MainBlock
                image={"elephant/title.jpg"}
                alt={"elephant"}/>
            {/* <Concept
                descr={"Wana sari means “beautiful place” in Balinese. We have developed a logo and corporate identity for a cozy hotel located in the heart of the jungle of Bali."}/> */}
            <DoubleBlock
                image1={"elephant/1.jpg"}
                alt1={"1"}
                image2={"elephant/2.jpg"}
                alt2={"2"}/>
            <MainBlock
                image={"elephant/3.jpg"}
                alt={"3"}/>
            <DoubleBlock
                image1={"elephant/4.jpg"}
                alt1={"4"}
                image2={"elephant/5.jpg"}
                alt2={"5"}/>
            <MainBlock
                image={"elephant/6.jpg"}
                alt={"6"}/>
        </>
    )
}

export default Elephant;