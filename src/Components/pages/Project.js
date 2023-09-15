import { useEffect, useState } from "react";
import { useLocation} from "react-router-dom";
import { Helmet } from "react-helmet";
import BackButton from "../backButton/backButton";
import TabButtons from '../tabButtons/TabButtons';
import SetCase from '../../utils/setCase';
import './../../style/cases.scss';
import './../../style/project.scss';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Project = ({title, data, onSelectTab, page, caseName}) => {
    const { pathname } = useLocation();
    const [pageTitle, setPageTitle] = useState(' ');
    useEffect(() => {
        window.scrollTo(0, 0);
        setPageTitle(caseName)
        
    }, [pathname]);
    
    return (
        <>
            <Helmet>
              <meta 
                name="description" 
                content="Creative studio MIRA specializes in creating unique visual solutions in the field of corporate and consumer branding." />
              <title>{pageTitle} | Project </title>
            </Helmet>
            <section className="project">
            <div className="container">	
                <SetCase pageName={page} caseName={caseName}/>
                <BackButton/>
                <TabButtons 
                    cases={true}
                    down={true} 
                    buttonsData={data}
                    onSelectTab={onSelectTab}/>
            </div>
            </section>
        </>
    )
}

export default Project;