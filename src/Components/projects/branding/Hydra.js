import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";
import Description from "../../blocks/description";

const Hydra = () => {
    return (
        <>
            <MainBlock
                image={"hydra/title.jpg"}
                alt={"hydra"}/>
            <Concept
                descr={"The redesign of the logo for Hydra is an open source Proof-of-Stake blockchain with a unique set of economic functions."}/>
            <DoubleBlock
                image1={"hydra/grey-card.jpg"}
                alt1={"grey-card"}
                image2={"hydra/dark-card.jpg"}
                alt2={"dark-card"}/>
            <Description
                descr={"The main problem with the existing logo is its excessive detail, which, when the sign is reduced, interferes with the perception of the image. The font part does not correspond to the technological orientation of the company and violates the entire visual image"}/>
            <DoubleBlock
                image1={"hydra/logo.jpg"}
                alt1={"logo"}
                image2={"hydra/colors.jpg"}
                alt2={"colors"}/>
            <MainBlock
                image={"hydra/ornaments.jpg"}
                alt={"ornaments"}/>
            <Description
                descr={"as part of the task, we simplified the iconic part while maintaining continuity and recognition with the old logo and worked out the font spelling that is more consistent with the company's charter. А corporate pattern and additional identification elements were also developed."}/>
            <DoubleBlock
                image1={"hydra/flash.jpg"}
                alt1={"flash"}
                image2={"hydra/case.jpg"}
                alt2={"case"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"hydra/phones.jpg"}
                alt={"phones"}/>
            <DoubleBlock
                image1={"hydra/hudy.jpg"}
                alt1={"hudy"}
                image2={"hydra/snap.jpg"}
                alt2={"snap"}/>
            <Description
                descr={"We applied the logo and corporate identity and graphics to the development of the company's corporate presentation"}/>
            <DoubleBlock
                image1={"hydra/map.jpg"}
                alt1={"map"}
                image2={"hydra/ring.jpg"}
                alt2={"ring"}/>
            <MainBlock
                image={"hydra/visit-cards.jpg"}
                alt={"visit-cards"}/>
        </>
    )
}

export default Hydra;