import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";
import Description from "../../blocks/description";

const N13 = () => {
    return (
        <>
            <MainBlock
                image={"n-13/title.jpg"}
                alt={"n-13"}/>
            <Concept
                descr={'№13 - a brand of high-quality and comfortable clothing. The corporate identity is based on the principle of "nothing superfluous". Simple and strict font, typography, copyright.'}/>
            <DoubleBlock
                image1={"n-13/i-am-13.jpg"}
                alt1={"i-am-13"}
                image2={"n-13/13.jpg"}
                alt2={"13"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"n-13/colors.jpg"}
                alt={"colors"}/>
            <DoubleBlock
                image1={"n-13/tag.jpg"}
                alt1={"tag"}
                image2={"n-13/grey-tag.jpg"}
                alt2={"grey-tag"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"n-13/tags.jpg"}
                alt={"tags"}/>
            <DoubleBlock
                image1={"n-13/bag.jpg"}
                alt1={"bag"}
                image2={"n-13/postcard.jpg"}
                alt2={"postcard"}
                clazz={"project__container project__container--big"}/>
            <Description
                descr={`Black, white and gray are the main colors of the company's products, we broadcast the same color scheme in the corporate style. The brand says: "just be yourself-you don't need bright labels."`}/>
            <DoubleBlock
                image1={"n-13/swetshot.jpg"}
                alt1={"swetshot"}
                image2={"n-13/hanger.jpg"}
                alt2={"hanger"}/>
            <MainBlock
                image={"n-13/style.jpg"}
                alt={"style"}/>
        </>
    )
}

export default N13;