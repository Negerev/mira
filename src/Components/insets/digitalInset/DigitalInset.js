import React, {useEffect} from 'react';
import WideBlock from "../../blocks/wideBlock";
import SmallBlock from "../../blocks/smallBlock";
import MiddleBlock from "../../blocks/middleBlock";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const DigitalInset = ({onSelectCase, process}) => {
    useEffect(() => {
        ScrollTrigger.refresh();
    }, [])
    return (
        
        <> 
            <WideBlock  
                process={process}
                image={"digital/factory.jpg"}
                imageMin={"digital/factory-min.jpg"}
                alt={"factory"}
                classes={"cases__filter--factory"}
                description={"Website development for a company that develops software for factories and large enterprises"}
                pageName={"rightstep-web"}
                caseName={"Right step"}
                onSelectCase={onSelectCase}/>
            <SmallBlock 
                process={process}
                image1={"digital/event-producer.jpg"}
                imageMin1={"digital/event-producer-min.jpg"}
                alt1={"event-producer"}
                classes1={"cases__filter--black"}
                description1={"Website development for an event producer"}
                pageName1={"shapoval"}
                caseName1={"Shapoval"}
                image2={"digital/vrspace.jpg"}
                imageMin2={"digital/vrspace-min.jpg"}
                alt2={"vrspace"}
                classes2={"cases__filter--vrspace"}
                description2={"Website for the viar spaces developer company"}
                pageName2={"vr-space"}
                caseName2={"Vr-space"}
                onSelectCase={onSelectCase}
                />
            <MiddleBlock 
                process={process}
                image1={"digital/dronico.jpg"}
                imageMin1={"digital/dronico-min.jpg"}
                alt1={"dronico"}
                classes1={"cases__filter--dronico"}
                description1={"Dronico company website"}
                pageName1={"dronico"}
                caseName1={"Dronico"}
                image2={"digital/legend.jpg"}
                imageMin2={"digital/legend-min.jpg"}
                alt2={"legend"}
                classes2={"cases__filter--black"}
                description2={"Website of the event company Legend"}
                pageName2={"legend"}
                caseName2={"Legend"}
                onSelectCase={onSelectCase}/>
            <SmallBlock 
                process={process}
                image1={"digital/tenet.jpg"}
                imageMin1={"digital/tenet-min.jpg"}
                alt1={"tenet"}
                classes1={"cases__filter--tenet"}
                description1={"Landing page for the Tenet blockchain project"}
                pageName1={"tenet"}
                caseName1={"Tenet"}
                image2={"digital/google-event.jpg"}
                imageMin2={"digital/google-event-min.jpg"}
                alt2={"google-event"}
                classes2={"cases__filter--google-event"}
                description2={"Website for an internal corporate event of Google"}
                pageName2={"google"}
                caseName2={"Google"}
                onSelectCase={onSelectCase}
                />
            <MiddleBlock 
                process={process}
                image1={"digital/google.jpg"}
                imageMin1={"digital/google-min.jpg"}
                alt1={"google"}
                classes1={"cases__filter--black"}
                description1={"Website for an internal corporate event of Google"}
                pageName1={"google-games"}
                caseName1={"Google think games"}
                image2={"digital/pergamon.jpg"}
                imageMin2={"digital/pergamon-min.jpg"}
                alt2={"pergamon"}
                classes2={"cases__filter--pergamon"}
                description2={"Website of the non-commercial Historical Foundation Pergamon"}
                pageName2={"pergamon"}
                caseName2={"Pergamon"}
                onSelectCase={onSelectCase}/>
            <SmallBlock 
                process={process}
                image1={"digital/step-network.jpg"}
                imageMin1={"digital/step-network-min.jpg"}
                alt1={"step-network"}
                classes1={"cases__filter--step-network"}
                description1={"The website of the blockchain project of the Step Network company"}
                pageName1={"step-launchpad"}
                caseName1={"Step launchpad"}
                image2={"digital/alus.jpg"}
                imageMin2={"digital/alus-min.jpg"}
                alt2={"alus"}
                classes2={"cases__filter--alus"}
                description2={"Development of the website of the company Alus"}
                pageName2={"alus"}
                caseName2={"Alus"}
                onSelectCase={onSelectCase}
                />
            <MiddleBlock 
                process={process}
                image1={"digital/blockchein.jpg"}
                imageMin1={"digital/blockchein-min.jpg"}
                alt1={"blockchein"}
                classes1={"cases__filter--blockchein"}
                description1={"The website of the blockchain project"}
                pageName1={"step-network"}
                caseName1={"Step network"}
                image2={"digital/skillbox.jpg"}
                imageMin2={"digital/skillbox-min.jpg"}
                alt2={"skillbox"}
                classes2={"cases__filter--skillbox"}
                description2={"Development of interfaces for digital games"}
                pageName2={"skillbox"}
                caseName2={"Skillbox"}
                onSelectCase={onSelectCase}/>
        </>
        
    )
}

export default DigitalInset;