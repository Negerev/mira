import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";

const Ozon = () => {
    return (
        <>
            <MainBlock
                image={"ozon/title.jpg"}
                alt={"ozon"}/>
            {/* <Concept
                descr={"Wana sari means “beautiful place” in Balinese. We have developed a logo and corporate identity for a cozy hotel located in the heart of the jungle of Bali."}/> */}
            <DoubleBlock
                image1={"ozon/1.jpg"}
                alt1={"1"}
                image2={"ozon/2.jpg"}
                alt2={"2"}/>
            <MainBlock
                image={"ozon/3.jpg"}
                alt={"3"}/>
            <DoubleBlock
                image1={"ozon/4.jpg"}
                alt1={"4"}
                image2={"ozon/5.jpg"}
                alt2={"5"}/>
            <MainBlock
                image={"ozon/6.jpg"}
                alt={"6"}/>
            <MainBlock
                image={"ozon/7.jpg"}
                alt={"7"}/>
        </>
    )
}

export default Ozon;