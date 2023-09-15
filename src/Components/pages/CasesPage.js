import React, {useEffect} from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import { Helmet } from "react-helmet";

import TabButtons from "../tabButtons/TabButtons";
import TabSelector from '../tabSelector/tabSelector';
import SetContent from '../../utils/setContent';
import '../../style/cases.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const CasesPage = ({title, data, onSelectTab, onSelectCase}) => {
    

 

    return (
        <>  
            <Helmet>
              <meta 
                name="description" 
                content="Creative studio MIRA specializes in creating unique visual solutions in the field of corporate and consumer branding." />
              <title>MiraBrand | Cases | {title}</title>s
            </Helmet>
            <section className="cases">
                <div className="container" id="parent">	
                    <TabSelector select={title}/>
                    <TabButtons    
                        down={false} 
                        buttonsData={data} 
                        onSelectTab={onSelectTab} 
                        title={title}/>
                    <div className="cases__content">
                        <SetContent process={title} onSelectCase={onSelectCase}/>
                    </div>
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

export default CasesPage;