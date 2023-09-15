import AllInset from "../Components/insets/allInset/AllInset";
import IllustrationInset from "../Components/insets/illustrationInset/IllustrationInset";
import BrandingInset from "../Components/insets/brandingInset/BrandingInset";
import PresentationsInset from "../Components/insets/presentationsInset/PresentationsInset";
import EnviromentInset from "../Components/insets/enviromentInset/EnviromentInset";
import DigitalInset from "../Components/insets/digitalInset/DigitalInset";
// import {Link, useLocation} from 'react-router-dom';
// import {useLayoutEffect} from 'react'; 
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

const SetContent = ({process, onSelectCase}) => {

    
    
    switch (process) {
        case 'all':
            return (
                <AllInset onSelectCase={onSelectCase} process={process}/>
            );
        case 'digital':
            return (
                <DigitalInset onSelectCase={onSelectCase} process={process}/>
            );
        case 'branding':
            return (
                <BrandingInset onSelectCase={onSelectCase} process={process}/>
            );
        case 'illustration':
            return (
                <IllustrationInset onSelectCase={onSelectCase} process={process}/>
            );
        case 'presentation':
            return (
                <PresentationsInset onSelectCase={onSelectCase} process={process}/>
            );
        case 'enviroment':
            return (
                <EnviromentInset onSelectCase={onSelectCase} process={process}/>
            );
        default:
            throw new Error('Unexpected process state');
    }
}

export default SetContent;