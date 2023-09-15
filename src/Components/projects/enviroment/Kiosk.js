import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";

const Kiosk = () => {
    return (
        <>
            <MainBlock
                image={"kiosk/title.jpg"}
                alt={"kiosk"}/>
            <Concept
                descr={"The menu of the establishment includes shaverma and falafel, so the interior is made in the style of a Tel Aviv institution of Israeli cuisine."}/>
            <MainBlock
                image={"kiosk/bar.jpg"}
                alt={"bar"}/>
            <DoubleBlock
                image1={"kiosk/interrior.jpg"}
                alt1={"interrior"}
                image2={"kiosk/shelf.jpg"}
                alt2={"shelf"}/>
            <MainBlock
                image={"kiosk/peppers.jpg"}
                alt={"peppers"}/>
            <DoubleBlock
                image1={"kiosk/kooker.jpg"}
                alt1={"kooker"}
                image2={"kiosk/chiars.jpg"}
                alt2={"chiars"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"kiosk/street.jpg"}
                alt={"street"}/>
            
        </>
    )
}

export default Kiosk;