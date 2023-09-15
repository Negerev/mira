import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";

const Saldens = () => {
    return (
        <>
            <MainBlock
                image={"saldens/title.jpg"}
                alt={"saldens"}/>
            <Concept
                descr={"interior design for an Italian coffee shop. The design is made taking into account the preservation of the historical appearance of the interiors, ancient masonry and decorative elements."}/>
            <DoubleBlock
                image1={"saldens/1.jpg"}
                alt1={"1"}
                image2={"saldens/2.jpg"}
                alt2={"2"}/>
            <MainBlock
                image={"saldens/3.jpg"}
                alt={"3"}/>
            <DoubleBlock
                image1={"saldens/4.jpg"}
                alt1={"4"}
                image2={"saldens/5.jpg"}
                alt2={"5"}/>
           
        </>
    )
}

export default Saldens;