import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";

const ToyotaPrez = () => {
    return (
        <>
            <MainBlock
                image={"toyota-prez/title.jpg"}
                alt={"toyota"}/>
            {/* <Concept
                descr={"Wana sari means “beautiful place” in Balinese. We have developed a logo and corporate identity for a cozy hotel located in the heart of the jungle of Bali."}/> */}
            <DoubleBlock
                image1={"toyota-prez/1.jpg"}
                alt1={"1"}
                image2={"toyota-prez/2.jpg"}
                alt2={"2"}/>
            <MainBlock
                image={"toyota-prez/3.jpg"}
                alt={"3"}/>
            <DoubleBlock
                image1={"toyota-prez/4.jpg"}
                alt1={"4"}
                image2={"toyota-prez/5.jpg"}
                alt2={"5"}/>
            <MainBlock
                image={"toyota-prez/6.jpg"}
                alt={"6"}/>
            <MainBlock
                image={"toyota-prez/7.jpg"}
                alt={"7"}/>
        </>
    )
}

export default ToyotaPrez;