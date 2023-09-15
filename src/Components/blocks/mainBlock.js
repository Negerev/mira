import React, {useRef, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); 

const MainBlock = ({image, alt}) => {
    const container = useRef();
    const {pathname} = useLocation();

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(".main-project picture", {
              scale: 1.1,
              scrollTrigger: {
                trigger: ".main-project picture",
                start: 'top bottom',
                end: 'top center',
                scrub: 2,
              }
            });
        }, container);
        return () => ctx.revert();
      }, [pathname]);

    return (
        <div className="project__container main-project" ref={container}>
            <picture>
                <img src={require("../../resourses/img/projects/" + image)} alt={alt}/>
            </picture>
        </div>
        
    )
}
export default MainBlock;
