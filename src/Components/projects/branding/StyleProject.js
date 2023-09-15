import MainBlock from "../../blocks/mainBlock";
import Concept from "../../blocks/concept";
import DoubleBlock from "../../blocks/doubleBlock";
import DescriptionDouble from '../../blocks/descriptionDouble'
import Description from "../../blocks/description";

const StyleProject = () => {
    return (
        <>
            <MainBlock
                image={"style-project/title.jpg"}
                alt={"style-project"}/>
            <Concept
                descr={"Style Project - event agency specializes in holding sports events of any complexity - from small competitions at the corporate level to international sports festivals."}/>
            <DoubleBlock
                image1={"style-project/logo.jpg"}
                alt1={"logo"}
                image2={"style-project/grey-logo.jpg"}
                alt2={"grey-logo"}/>
            <MainBlock
                image={"style-project/style.jpg"}
                alt={"style"}/>
            <DescriptionDouble
                descr1={"Sport is always dynamics and movement, to reflect this paradigm in the company's logo, we used dynamic graphic techniques."}
                descr2={"Additional icons - a heart, a star and a cup, symbolize the principles that the agency follows when working with its clients and when creating vivid impressions."}/>
            <MainBlock
                image={"style-project/colors.jpg"}
                alt={"colors"}/>
            <DoubleBlock
                image1={"style-project/event.jpg"}
                alt1={"event"}
                image2={"style-project/liters.jpg"}
                alt2={"liters"}/>
            <DoubleBlock
                image1={"style-project/swetshot.jpg"}
                alt1={"swetshot"}
                image2={"style-project/phones.jpg"}
                alt2={"phones"}
                clazz={"project__container project__container--big"}/>
            <DoubleBlock
                image1={"style-project/cup.jpg"}
                alt1={"cup"}
                image2={"style-project/tag.jpg"}
                alt2={"tag"}
                clazz={"project__container project__container--big"}/>
            <DoubleBlock
                image1={"style-project/hat.jpg"}
                alt1={"hat"}
                image2={"style-project/br.jpg"}
                alt2={"br"}/>
            <MainBlock
                image={"style-project/jags.jpg"}
                alt={"jags"}/>
        </>
    )
}

export default StyleProject;