import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";
import Description from "../../blocks/description";

const Irus = () => {
    return (
        <>
            <MainBlock
                image={"irus/title.jpg"}
                alt={"irus"}/>
            <Concept
                descr={"A corporate identity was developed for the development company IRUS, which is broadcast on many media."}/>
            <DoubleBlock
                image1={"irus/city.jpg"}
                alt1={"city"}
                image2={"irus/logo.jpg"}
                alt2={"logo"}/>
            <DoubleBlock
                image1={"irus/liters.jpg"}
                alt1={"liters"}
                image2={"irus/steel.jpg"}
                alt2={"steel"}
                clazz={"project__container project__container--big"}/>
            <Description
                descr={"The company develops new approaches in construction, works with architecture and landscaping. IRUS has accumulated extensive experience and competence. We have combined all our knowledge and aspirations in the visual style of the brand."}/>
            <MainBlock
                image={"irus/style.jpg"}
                alt={"style"}/>
            <DoubleBlock
                image1={"irus/visit-cards.jpg"}
                alt1={"visit-cards"}
                image2={"irus/phone.jpg"}
                alt2={"phone"}/>
            <Description
                descr={"The logo and corporate colors are focused on simplicity, elegance and austerity, which emphasizes the values of the brand."}/>
            <MainBlock
                image={"irus/magazine.jpg"}
                alt={"magazine"}/>
            <DoubleBlock
                image1={"irus/bilding.jpg"}
                alt1={"bilding"}
                image2={"irus/orto.jpg"}
                alt2={"orto"}/>
            <DoubleBlock
                image1={"irus/book.jpg"}
                alt1={"book"}
                image2={"irus/pen.jpg"}
                alt2={"pen"}
                clazz={"project__container project__container--big"}/>
        </>
    )
}

export default Irus;