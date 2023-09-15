import React, {useEffect} from 'react';
import WideBlock from "../../blocks/wideBlock";
import SmallBlock from "../../blocks/smallBlock";
import MiddleBlock from "../../blocks/middleBlock";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const IllustrationInset = ({onSelectCase, process}) => {
    useEffect(() => {
        ScrollTrigger.refresh();
    }, [])
    return (
        
        <>
            <WideBlock      
                process={process}
                image={"illustration/sber.jpg"}
                imageMin={"illustration/sber-min.jpg"}
                alt={"sber"}
                classes={"cases__filter--salad"}
                description={"Development of architectural stylistics, modeling and visualization of an interactive map for an online exhibition"}
                pageName={"sber"}
                caseName={"Sberbank"}
                onSelectCase={onSelectCase}/>
            <SmallBlock     
                process={process}
                image1={"illustration/structure-min.jpg"}
                imageMin1={"illustration/structure-min.jpg"}
                alt1={"structure"}
                classes1={"cases__filter--dark-orange"}
                description1={" Creating a series of 3D illustrations for the presentation of the company Structure"}
                pageName1={"structura"}
                caseName1={"Structura"}
                image2={"illustration/rightstep.jpg"}
                imageMin2={"illustration/rightstep-min.jpg"}
                alt2={"rightstep"}
                classes2={"cases__filter--dark-yellow"}
                description2={"Development of a visual concept and rendering of 3d illustrations for the rightstep company website"}
                pageName2={"rightstep"}
                caseName2={"RightStep"}
                onSelectCase={onSelectCase}/>
            <MiddleBlock    
                process={process}
                image1={"illustration/circle.jpg"}
                imageMin1={"illustration/circle-min.jpg"}
                alt1={"circle"}
                classes1={"cases__filter--dark-sky"}
                description1={" Creating infographics and product visualizations for Сirclegen's website"}
                pageName1={"circle-illustration"}
                caseName1={"Circle"}
                image2={"illustration/genesis.jpg"}
                imageMin2={"illustration/genesis-min.jpg"}
                alt2={"genesis"}
                classes2={"cases__filter--genesis"}
                description2={"Creating an interactive animated illustration of the city of the future for the Genesis Engeniring company website"}
                pageName2={"genesis"}
                caseName2={"Genesis"}
                onSelectCase={onSelectCase}/>
            <SmallBlock     
                process={process}
                image1={"illustration/complex.jpg"}
                imageMin1={"illustration/complex-min.jpg"}
                alt1={"complex"}
                classes1={"cases__filter--yellow-brown"}
                description1={"Visualization of the layout of the building of the scientific complex"}
                pageName1={"3d-map"}
                caseName1={"3D Map"}
                image2={"illustration/paveletsky.jpg"}
                imageMin2={"illustration/paveletsky-min.jpg"}
                alt2={"paveletsky"}
                classes2={"cases__filter--pav"}
                description2={"Modeling and floor-by-floor rendering of spaces and interiors of the event site"}
                pageName2={"paveletsky"}
                caseName2={"Paveletsky"}
                onSelectCase={onSelectCase}/>
            <MiddleBlock    
                process={process}
                image1={"illustration/creative.jpg"}
                imageMin1={"illustration/creative-min.jpg"}
                alt1={"creative"}
                classes1={"cases__filter--black"}
                description1={"Development of illustrations for the digital agency website"}
                pageName1={"creative"}
                caseName1={"Creative Communication"}
                image2={"illustration/3d.jpg"}
                imageMin2={"illustration/3d-min.jpg"}
                alt2={"illustration/3d"}
                classes2={"cases__filter--three"}
                description2={"3d illustration series for websites"}
                pageName2={'3d-illustration'}
                caseName2={"3D Illustration"}
                onSelectCase={onSelectCase}/>
            <SmallBlock     
                process={process}
                image1={"illustration/gift.jpg"}
                imageMin1={"illustration/gift-min.jpg"}
                alt1={"gift"}
                classes1={"cases__filter--gift"}
                description1={"Creating a creative concept and drawing a series of illustrations for a gift calendar"}
                pageName1={'calendar'}
                caseName1={"Calendar"}
                image2={"illustration/field-day.jpg"}
                imageMin2={"illustration/field-day-min.jpg"}
                alt2={"field-day"}
                classes2={"cases__filter--field"}
                description2={"Creating an animated interactive map for an online exhibition of achievements"}
                pageName2={"field-day"}
                caseName2={"Field Day"}
                onSelectCase={onSelectCase}/>
            <MiddleBlock    
                process={process}
                image1={"illustration/scalar.jpg"}
                imageMin1={"illustration/scalar-min.jpg"}
                alt1={"scalar"}
                classes1={"cases__filter--scalar"}
                description1={"Creating a concept and drawing a series of illustrations for the Scalar company website"}
                pageName1={"scalar"}
                caseName1={"Scalar"}
                image2={"illustration/smart.jpg"}
                imageMin2={"illustration/smart-min.jpg"}
                alt2={"smart"}
                classes2={"cases__filter--smart"}
                description2={"3d illustration series for  websites"}
                pageName2={"smart"}
                caseName2={"Smart"}
                onSelectCase={onSelectCase}/>
            <SmallBlock     
                process={process}
                image1={""}
                imageMin1={""}
                alt1={""}
                classes1={""}
                description1={""}
                pageName1={""}
                caseName1={""}
                image2={"illustration/map.jpg"}
                imageMin2={"illustration/map-min.jpg"}
                alt2={"map"}
                pageName2={"map"}
                caseName2={"Map"}
                classes2={"cases__filter--map"}
                description2={"Creating an animated interactive map for an online exhibition of achievements"}
                onSelectCase={onSelectCase}/>
        </>
    )
  
}

export default IllustrationInset;