import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";
import Description from "../../blocks/description";

const Creative = () => {
    return (
        <>
            <MainBlock
                image={"creative/title.jpg"}
                alt={"creative"}/>
            <Concept
                title={"Task"}
                descr={"Develop a character and a series of NFT illustrations for Creative Communications digital studio"}/>
            <DoubleBlock
                image1={"creative/1.jpg"}
                alt1={"1"}
                image2={"creative/2.jpg"}
                alt2={"2"}
                clazz={"project__container project__container--big"}/>
            <DoubleBlock
                image1={"creative/3.jpg"}
                alt1={"3"}
                image2={"creative/4.jpg"}
                alt2={"4"}
                clazz={"project__container project__container--big"}/>
            <MainBlock
                image={"creative/5.jpg"}
                alt={"5"}/>
            <DoubleBlock
                image1={"creative/6.jpg"}
                alt1={"6"}
                image2={"creative/7.jpg"}
                alt2={"7"}
                clazz={"project__container project__container--big"}/>
            <DoubleBlock
                image1={"creative/8.jpg"}
                alt1={"8"}
                image2={"creative/9.jpg"}
                alt2={"9"}
                clazz={"project__container project__container--big"}/>
        </>
    )
}

export default Creative;