import React from "react";
import { useEffect} from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import VideoBlock from "../blocks/videoBlock";
import Slider from "../slider/Slider";
import WideBlock from "../blocks/wideBlock";
import SmallBlock from "../blocks/smallBlock";
import MiddleBlock from "../blocks/middleBlock";
import TabSelector from "../tabSelector/tabSelector";
import TabButtons from "../tabButtons/TabButtons";
import "./../../style/main.scss";
import "./../../style/project.scss";
import "./../../style/cases.scss";

const MainPage = ({onSelectCase, title, data, onSelectTab, onChangePathname}) => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    document.querySelector('body').style.backgroundColor = '#fff'
    // onChangePathname();
  }, [pathname])
    return (
       
        <> 
         <Helmet>
              <meta 
                name="description" 
                content="Creative studio MIRA specializes in creating unique visual solutions in the field of corporate and consumer branding." />
              <title>MiraBrand | The best design</title>
            </Helmet>
          <section className="services">
            <div className="container">
              <VideoBlock video={'showreel.mp4'} main={true}/>
              <h2 className="services__title">services</h2>
              <Slider />
              <h2 className="services__title">cases</h2>
              <WideBlock 
                image={"illustration/sber.jpg"}
                imageMin={"illustration/sber-min.jpg"}
                alt={"sber"}
                classes={"cases__filter--salad"}
                description={"Development of architectural stylistics, modeling and visualization of an interactive map for an online exhibition"}
                pageName={'sber'}
                caseName={"Sberbank"}
                onSelectCase={onSelectCase}/>
              <SmallBlock
                image1={"digital/vrspace-min.jpg"}
                imageMin1={"digital/vrspace-min.jpg"}
                alt1={"vrspace"}
                classes1={"cases__filter--vrspace"}
                description1={"Website for the viar spaces developer company"}
                pageName1={"vr-space"}
                caseName1={"Vr-space"}
                image2={"branding/wana-sari-mid.jpg"}
                imageMin2={"branding/wana-sari-min.jpg"}
                alt2={"wana-sari"}
                classes2={"cases__filter--dark-green"}
                description2={"Logo and corporate identity development for a home boutique hotel in Bali"}
                pageName2={"wana-sari"}
                caseName2={"Wana Sari"}
                onSelectCase={onSelectCase}/>
              <MiddleBlock
                image1={"digital/factory-mid.jpg"}
                imageMin1={"digital/factory-min.jpg"}
                alt1={"factory"}
                classes1={"cases__filter--factory"}
                description1={"Website development for a company that develops software for factories and large enterprises"}
                pageName1={"rightstep"}
                caseName1={"RightStep"}
                image2={"illustration/3d.jpg"}
                imageMin2={"illustration/3d-min.jpg"}
                alt2={"illustration/3d"}
                classes2={"cases__filter--three"}
                description2={"3d illustration series for websites"}
                pageName2={"3d-illustration"}
                caseName2={"3D Illustrations"}
                onSelectCase={onSelectCase}/>
              <SmallBlock
                image1={"branding/nabatu-min.jpg"}
                imageMin1={"branding/nabatu-min.jpg"}
                alt1={"nabatu"}
                classes1={"cases__filter--beige"}
                description1={"Development of a logo and corporate identity for a city coffee shop “Nabatu”"}
                pageName1={"nabatu"}
                caseName1={"Nabatu"}
                image2={"enviroment/dream-midle.jpg"}
                imageMin2={"enviroment/dream-min.jpg"}
                alt2={"dream"}
                classes2={"cases__filter--dream"}
                description2={"Development of the concept and visualization of exterior solutions for the residential complex “Dream”"}
                pageName2={'dream-enviroment'}
                caseName2={"Dream Enviroment"}
                onSelectCase={onSelectCase}/>
              <MiddleBlock
                image1={"branding/dream-mid.jpg"}
                imageMin1={"branding/dream-min.jpg"}
                alt1={"dream"}
                classes1={"cases__filter--orange"}
                description1={"Logo, corporate identity, presentation materials and interiors for the residential complex 'Dream'"}
                pageName1={"dream"}
                caseName1={"Dream"}
                image2={"presentations/dimash-min.jpg"}
                imageMin2={"presentations/dimash-min.jpg"}
                alt2={"dimash"}
                classes2={"cases__filter--dimash"}
                description2={"Sponsored presentation of the international concert tour dedicated"}
                pageName2={"dimash"}
                caseName2={"Dimash"}
                onSelectCase={onSelectCase}/>
              <SmallBlock
                image1={"branding/Irus-min.jpg"}
                imageMin1={"branding/Irus-min.jpg"}
                alt1={"irus"}
                classes1={"cases__filter--dark-blue"}
                description1={"Logo and visual style for the real estate developer Irus"}
                pageName1={"irus"}
                caseName1={"Irus"}
                image2={"illustration/paveletsky.jpg"}
                imageMin2={"illustration/paveletsky-min.jpg"}
                alt2={"paveletsky"}
                classes2={"cases__filter--black"}
                description2={"Modeling and floor-by-floor rendering of spaces and interiors of the event site"}
                pageName2={"paveletsky"}
                caseName2={"Paveletsky"}
                onSelectCase={onSelectCase}/>
                <MiddleBlock
                image1={"illustration/structure.jpg"}
                imageMin1={"illustration/structure-min.jpg"}
                alt1={"structure"}
                classes1={"cases__filter--dark-orange"}
                description1={"Creating a series of 3D illustrations for the presentation of the company Structure"}
                pageName1={"structura"}
                caseName1={"Structura"}
                image2={"digital/step-network.jpg"}
                imageMin2={"digital/step-network-min.jpg"}
                alt2={"step-network"}
                classes2={"cases__filter--step-network"}
                description2={"The website of the blockchain project of the Step Network company"}
                pageName2={"step-launchpad"}
                caseName2={"Step launchpad"}
                onSelectCase={onSelectCase}/>
                <TabSelector select={title}/>
                <TabButtons 
                  down={true} 
                  buttonsData={data}
                  onSelectTab={onSelectTab}/>
            </div>
          </section>
        </>
       
    )
}

export default MainPage;