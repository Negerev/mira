import React, {useEffect} from 'react';
import WideBlock from "../../blocks/wideBlock";
import SmallBlock from "../../blocks/smallBlock";
import MiddleBlock from "../../blocks/middleBlock";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const PresentationsInset = ({onSelectCase, process}) => {
    useEffect(() => {
        ScrollTrigger.refresh();
    }, [])
    return (
        <>
            <WideBlock  
                process={process}
                image={"presentations/dimash.jpg"}
                imageMin={"presentations/dimash-min.jpg"}
                alt={"dimash"}
                classes={"cases__filter--dimash"}
                description={"Sponsored presentation of the international concert tour dedicated to the new music album"}
                pageName={"dimash"}
                caseName={"Dimash"}
                onSelectCase={onSelectCase}/>
            <SmallBlock 
                process={process}
                image1={"presentations/azot.jpg"}
                imageMin1={"presentations/azot.jpg"}
                alt1={"azot"}
                classes1={"cases__filter--cors"}
                description1={"Development of a multilingual corporate report for the international company Shchekinoazot"}
                pageName1={"shchekinoazot"}
                caseName1={"Shchekinoazot"}
                image2={"presentations/structure.jpg"}
                imageMin2={"presentations/structure-min.jpg"}
                alt2={"structure"}
                classes2={"cases__filter--structure"}
                description2={"A series of presentations of various activities of the event company “Structure”"}
                pageName2={"structura-prez"}
                caseName2={"Structura Prezentation"}
                onSelectCase={onSelectCase}/>
            <MiddleBlock 
                process={process}
                image1={"presentations/elephant.jpg"}
                imageMin1={"presentations/elephant-min.jpg"}
                alt1={"elephant"}
                classes1={"cases__filter--elephant"}
                description1={"Development of the presentation of an international circus show"}
                pageName1={"elephant"}
                caseName1={"Elephant"}
                image2={"presentations/zvezda.jpg"}
                imageMin2={"presentations/zvezda-min.jpg"}
                alt2={"zvezda"}
                classes2={"cases__filter--zvezda"}
                description2={"Presentation of event sites for tenants"}
                pageName2={"zvezda"}
                caseName2={"Zvezda"}
                onSelectCase={onSelectCase}/>
            <SmallBlock 
                process={process}
                image1={"presentations/fest.jpg"}
                imageMin1={"presentations/fest-min.jpg"}
                alt1={"fest"}
                classes1={"cases__filter--fest"}
                description1={"Sponsored presentation of the music festival"}
                pageName1={"fest"}
                caseName1={"Fest"}
                image2={"presentations/promomed.jpg"}
                imageMin2={"presentations/promomed-min.jpg"}
                alt2={"promomed"}
                classes2={"cases__filter--promomed"}
                description2={"Development of a universal corporate template for the pharmaceutical company “Promomed”"}
                pageName2={"promomed"}
                caseName2={"Promomed"}
                onSelectCase={onSelectCase}/>
            <MiddleBlock 
                process={process}
                image1={"presentations/beyond.jpg"}
                imageMin1={"presentations/beyond-min.jpg"}
                alt1={"beyond"}
                classes1={"cases__filter--beyond"}
                description1={"Presentation of a marketing company about services and competencies"}
                pageName1={"beyond"}
                caseName1={"Beyond"}
                image2={"presentations/ozon.jpg"}
                imageMin2={"presentations/ozon-min.jpg"}
                alt2={"ozon"}
                classes2={"cases__filter--ozon"}
                description2={"A series of training presentations for employees and partners"}
                pageName2={"ozon"}
                caseName2={"Ozon"}
                onSelectCase={onSelectCase}/>
            <SmallBlock 
                process={process}
                image1={"presentations/toyota.jpg"}
                imageMin1={"presentations/toyota-min.jpg"}
                alt1={"toyota"}
                classes1={"cases__filter--toyota"}
                description1={"Development of rules for the presentation of a new Toyota car"}
                pageName1={'toyota-prez'}
                caseName1={'Toyota Prezentation'}
                image2={"presentations/lamps.jpg"}
                imageMin2={"presentations/lamps-min.jpg"}
                alt2={"lamps"}
                classes2={"cases__filter--lamps"}
                description2={"Design of presentation of air show programs for Saudi Arabia"}
                pageName2={'dronico-presentation'}
                caseName2={'Dronico'}
                onSelectCase={onSelectCase}/>
            <MiddleBlock 
                process={process}
                image1={"presentations/spirit.jpg"}
                imageMin1={"presentations/spirit-min.jpg"}
                alt1={"spirit"}
                classes1={"cases__filter--spirit"}
                description1={"Corporate presentation within the event program of Bakardi company"}
                pageName1={'spirit'}
                caseName1={'Spirit'}
                image2={"presentations/zen.jpg"}
                imageMin2={"presentations/zen-min.jpg"}
                alt2={"zen"}
                classes2={"cases__filter--zen"}
                description2={"Presentation for the speaker as part of the presentation of the Yandex company product"}
                pageName2={'zen'}
                caseName2={'Zen'}
                onSelectCase={onSelectCase}/>
        </> 
    )
  
}

export default PresentationsInset;