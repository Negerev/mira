import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";
import Description from "../../blocks/description";

const Interrior = () => {
    return (
        <>
            <MainBlock
                image={"interrior/title.jpg"}
                alt={"interrior"}/>
            <Concept
                title="Task"
                descr={"To develop standardized planning and design solutions for typical interiors of the residential complex Dream."}/>
            <DoubleBlock
                image1={"interrior/red-armchiar.jpg"}
                alt1={"red-armchiar"}
                image2={"interrior/kitchen.jpg"}
                alt2={"kitchen"}/>
            <DoubleBlock
                image1={"interrior/mirrors.jpg"}
                alt1={"mirrors"}
                image2={"interrior/bedroom.jpg"}
                alt2={"bedroom"}/>
            <Description
                descr={"As part of the task, the designs of standard apartments, the interiors of townhouses and individual villas were developed."}/>
            <DoubleBlock
                image1={"interrior/children-desck.jpg"}
                alt1={"children-desck"}
                image2={"interrior/children-bed.jpg"}
                alt2={"children-bed"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"interrior/sofa.jpg"}
                alt={"sofa"}/>
            <Description
                descr={"Basic interior solutions of different types of premises are designed to understand the space and layout of future housing"}/>
            <MainBlock
                image={"interrior/dinner.jpg"}
                alt={"dinner"}/>
            <DoubleBlock
                image1={"interrior/bath.jpg"}
                alt1={"bath"}
                image2={"interrior/bed-room.jpg"}
                alt2={"bed-room"}/>
            <MainBlock
                image={"interrior/window.jpg"}
                alt={"window"}/>
            <DoubleBlock
                image1={"interrior/ring-table.jpg"}
                alt1={"ring-table"}
                image2={"interrior/cloth.jpg"}
                alt2={"cloth"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"interrior/ladder.jpg"}
                alt={"ladder"}/>
            <MainBlock
                image={"interrior/rest-room.jpg"}
                alt={"rest-room"}/>
            <DoubleBlock
                image1={"interrior/second.jpg"}
                alt1={"second"}
                image2={"interrior/gallery.jpg"}
                alt2={"gallery"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"interrior/comp.jpg"}
                alt={"comp"}/>
            <DoubleBlock
                image1={"interrior/red-bed.jpg"}
                alt1={"red-bed"}
                image2={"interrior/red-sofa.jpg"}
                alt2={"red-sofa"}/>
        </>
    )
}

export default Interrior;