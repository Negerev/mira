import React, {useEffect} from "react";
import WideBlock from "../../blocks/wideBlock";
import SmallBlock from "../../blocks/smallBlock";
import MiddleBlock from "../../blocks/middleBlock";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const BrandingInset = ({onSelectCase, process}) => {
    useEffect(() => {
        ScrollTrigger.refresh();
    }, [])
   
    return (
        <>
            <WideBlock  
                process={process}
                image={"branding/wana-sari.jpg"}
                imageMin={"branding/wana-sari-min.jpg"}
                alt={"wana-sari"}
                classes={"cases__filter--dark-green"}
                description={"Logo and corporate identity development for a home boutique hotel in Bali"}
                pageName={"wana-sari"}
                caseName={"Wana Sari"}
                onSelectCase={onSelectCase}
                />
            <SmallBlock 
                process={process}
                image1={"branding/hydra.jpg"}
                imageMin1={"branding/hydra-min.jpg"}
                alt1={"hydra"}
                classes1={"cases__filter--sky-blue"}
                description1={"Rebranding of the Hydra company with a change in the logo, style and presentation design"}
                pageName1={"hydra"}
                caseName1={"Hydra"}
                image2={"branding/scalar.jpg"}
                imageMin2={"branding/scalar-min.jpg"}
                alt2={"scalar"}
                classes2={"cases__filter--scalar-brand"}
                description2={"Development of a logo, corporate identity, brand book, smm, site for Scalar company"}
                pageName2={"scalar-brand"}
                caseName2={"Scalar"}
                onSelectCase={onSelectCase}/>
            <MiddleBlock 
                process={process}
                image1={"branding/nabatu.jpg"}
                imageMin1={"branding/nabatu-min.jpg"}
                alt1={"nabatu"}
                classes1={"cases__filter--beige"}
                description1={"Development of a logo and corporate identity for a city coffee shop “Nabatu”"}
                pageName1={"nabatu"}
                caseName1={"Nabatu"}
                image2={"branding/urban.jpg"}
                imageMin2={"branding/urban-min.jpg"}
                alt2={"urban"}
                classes2={"cases__filter--green"}
                description2={"Logo and corporate identity for an event company specializing in sports events"}
                pageName2={"urban-farm"}
                caseName2={"Urban Farm"}
                onSelectCase={onSelectCase}/>
            <SmallBlock 
                process={process}
                image1={"branding/marevna.jpg"}
                imageMin1={"branding/marevna-min.jpg"}
                alt1={"marevna"}
                classes1={"cases__filter--black"}
                description1={"Branding of the Marevna company"}
                pageName1={"marevna"}
                caseName1={"Marevna"}
                image2={"branding/cloth.jpg"}
                imageMin2={"branding/cloth-min.jpg"}
                alt2={"cloth"}
                classes2={"cases__filter--blue"}
                description2={"Development of a logo, corporate identity, packaging and interior for an urban clothing brand K/CHT/Z"}
                pageName2={"k-cht-z"}
                caseName2={"K Cht Z"}
                onSelectCase={onSelectCase}/>
            <MiddleBlock 
                process={process}
                image1={"branding/Irus.jpg"}
                imageMin1={"branding/Irus-min.jpg"}
                alt1={"Irus"}
                classes1={"cases__filter--dark-blue"}
                description1={"Logo and visual style for the real estate developer Irus"}
                pageName1={"irus"}
                caseName1={"Irus"}
                image2={"branding/n13.jpg"}
                imageMin2={"branding/n13-min.jpg"}
                alt2={"n13"}
                classes2={"cases__filter--light-gray"}
                description2={"Logo and packaging for streetwear brand No. 13"}
                pageName2={"n-13"}
                caseName2={"№ 13"}
                onSelectCase={onSelectCase}/>
            <SmallBlock 
                process={process}
                image1={"branding/style.jpg"}
                imageMin1={"branding/style-min.jpg"}
                alt1={"style"}
                classes1={"cases__filter--purple"}
                description1={"Logo and corporate identity for an event company specializing in sports events"}
                pageName1={"style-project"}
                caseName1={"Style"}
                image2={"branding/dream.jpg"}
                imageMin2={"branding/dream-min.jpg"}
                alt2={"dream"}
                classes2={"cases__filter--orange"}
                description2={"Logo, corporate identity, presentation materials and interiors for the residential complex 'Dream'"}
                pageName2={"dream"}
                caseName2={"Dream"}
                onSelectCase={onSelectCase}/>
             <MiddleBlock 
                process={process}
                image1={"branding/seafood.jpg"}
                imageMin1={"branding/seafood-min.jpg"}
                alt1={"seafood"}
                classes1={"cases__filter--blue"}
                description1={"Seafood catering company for the preparation and delivery of ready meals for events"}
                pageName1={"sea-food"}
                caseName1={"Sea Food"}
                image2={"branding/circle.jpg"}
                imageMin2={"branding/circle-min.jpg"}
                alt2={"circle"}
                classes2={"cases__filter--gray2"}
                description2={"Development of a logo and presentation materials for the company Circle gen"}
                pageName2={"circle"}
                caseName2={"Circle"}
                onSelectCase={onSelectCase}/>
        </>
    )
}

export default BrandingInset;