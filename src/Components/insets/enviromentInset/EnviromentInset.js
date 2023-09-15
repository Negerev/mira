import React, {useEffect} from 'react';
import WideBlock from "../../blocks/wideBlock";
import SmallBlock from "../../blocks/smallBlock";
import MiddleBlock from "../../blocks/middleBlock";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const EnviromentInset = ({onSelectCase, process}) => { 
    useEffect(() => {
        ScrollTrigger.refresh();
    }, [])
    return (
        <>
            <WideBlock   
                process={process}
                image={"enviroment/dream.jpg"}
                imageMin={"enviroment/dream-min.jpg"}
                alt={"dream"}
                classes={"cases__filter--dream"}
                description={"Development of the concept and visualization of exterior solutions for the residential complex “Dream”"}
                pageName={"dream-enviroment"}
                caseName={"Dream Enviroment"}
                onSelectCase={onSelectCase}/>
            <SmallBlock 
                process={process}
                image1={"enviroment/saldens.jpg"}
                imageMin1={"enviroment/saldens-min.jpg"}
                alt1={"saldens"}
                classes1={"cases__filter--saldens"}
                description1={"Design and planning solutions for Saldens confectionery"}
                pageName1={"saldens"}
                caseName1={"Saldens"}
                image2={"enviroment/cafeteria.jpg"}
                imageMin2={"enviroment/cafeteria-min.jpg"}
                alt2={"cafeteria"}
                classes2={"cases__filter--cafeteria"}
                description2={"Design and planning solutions for the city cafeteria"}
                pageName2={"cafeteria"}
                caseName2={"Cafeteria"}
                onSelectCase={onSelectCase}
                />
            <MiddleBlock 
                process={process}
                image1={"enviroment/interrior.jpg"}
                imageMin1={"enviroment/interrior-min.jpg"}
                alt1={"interrior"}
                classes1={"cases__filter--interrior"}
                description1={"Concept development and visualization of interior solutions for the residential complex Dream"}
                pageName1={"interrior"}
                caseName1={"Dream Interrior"}
                image2={"enviroment/urban.jpg"}
                imageMin2={"enviroment/urban-min.jpg"}
                alt2={"urban"}
                classes2={"cases__filter--urban"}
                description2={"Design concept of urban coworking space"}
                pageName2={'urban'}
                caseName2={"Urban"}
                onSelectCase={onSelectCase}/>
            <SmallBlock 
                process={process}
                image1={"enviroment/exeed.jpg"}
                imageMin1={"enviroment/exeed-min.jpg"}
                alt1={"exeed"}
                classes1={"cases__filter--exeed"}
                description1={"Design and visualization of the car stand of Exeed brand cars"}
                pageName1={'exeed'}
                caseName1={"Exeed"}
                image2={"enviroment/porsche.jpg"}
                imageMin2={"enviroment/porsche-min.jpg"}
                alt2={"porsche"}
                classes2={"cases__filter--porsche"}
                description2={"Design and visualization of a family event dedicated to the 70th anniversary of the Porsche company"}
                pageName2={'porsche'}
                caseName2={"Porsche"}
                onSelectCase={onSelectCase}/>
            <MiddleBlock 
                process={process}
                image1={"enviroment/toyota.jpg"}
                imageMin1={"enviroment/toyota-min.jpg"}
                alt1={"toyota"}
                classes1={"cases__filter--toyota2"}
                description1={"Design and visualization of the Toyota event space concept"}
                pageName1={"toyota"}
                caseName1={"Toyota"}
                image2={"enviroment/kiosk.jpg"}
                imageMin2={"enviroment/kiosk-min.jpg"}
                alt2={"kiosk"}
                classes2={"cases__filter--black"}
                description2={"Interior design of a cafe with Israeli street fast food"}
                pageName2={"kiosk"}
                caseName2={"Kiosk"}
                onSelectCase={onSelectCase}/>
            <SmallBlock 
                process={process}
                image1={""}
                imageMin1={""}
                alt1={""}
                classes1={""}
                description1={""}
                image2={"enviroment/soul.jpg"}
                imageMin2={"enviroment/soul-min.jpg"}
                alt2={"soul"}
                classes2={"cases__filter--soul"}
                description2={"Design and visualization of the design concept of the platform for the presentation of the Porsche Taycan"}
                pageName2={"soul"}
                caseName2={"Soul"}
                onSelectCase={onSelectCase}/>
             
        </>
    )
  
}

export default EnviromentInset;