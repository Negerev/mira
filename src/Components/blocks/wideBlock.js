import {Link, useLocation} from 'react-router-dom';
import React, {useRef, useLayoutEffect} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); 
const WideBlock = ({process, image, imageMin, classes, description, alt, pageName, onSelectCase, caseName}) => {
    const container = useRef();
    const {pathname} = useLocation();
    // ScrollTrigger.refresh();
   
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".gsap-container", {
              y: 200,
              opacity: 0,
              scrollTrigger: {
                trigger: ".cases__container",
                start: 'top bottom',
                end: 'top center',
                scrub: 2,
               
              }
            });
        }, container);
        
        return () => ctx.revert();
      }, [pathname, process]);
    return (
        <div className="cases__shell fade-in" ref={container}>
            <div className='gsap-container'>
                <div className="cases__container main-container">
                    <Link to={`/cases/${pageName}`} onClick={() => onSelectCase(pageName, caseName)}>
                        <picture>
                            <source media="(min-width:769px)" srcSet={require("../../resourses/img/cases/" + image)}/>
                            <source media="(max-width:768px)" srcSet={require("../../resourses/img/cases/" + imageMin)}/>
                            <img src={require("../../resourses/img/cases/" + image)} alt={alt}/>
                        </picture>
                        <div className={"cases__filter " + classes}></div>
                    </Link>
                </div>
                <p className="cases__description cases__description--big">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default WideBlock;