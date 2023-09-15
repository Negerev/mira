import {Link, useLocation} from 'react-router-dom';
import React, {useRef, useEffect} from 'react'; 
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const MiddleBlock = ({process, image1, imageMin1, alt1, classes1, description1, pageName1, caseName1, image2, imageMin2, alt2, classes2, description2, pageName2, caseName2, onSelectCase}) => {
    const container = useRef();
    const {pathname} = useLocation();
    useEffect(() => {
        let mm = gsap.matchMedia();
 
        mm.add({
        isMobile: "(max-width: 768px)",
        isDesktop: "(min-width: 769px)",
        }, (context) => {
        let {isMobile, isDesktop} = context.conditions;
        let ctx = gsap.context(() => {
            if(isDesktop) {
                gsap.from('.cases__shell', {
                    y:  200,
                    opacity: 0,
                    stagger: 0.1,
                    scrollTrigger: {
                      refresh: true,
                      trigger: '.cases__shell',
                      start: 'top bottom',
                      end: 'top center',
                      scrub: 2,
                    }
                  });
            } else {
                gsap.utils.toArray(".cases__shell").forEach((item) => {
                    gsap.from(item, {
                        y:  100,
                        opacity: 0,
                        scrollTrigger: {
                          refresh: true,
                          trigger: item,
                          start: 'top bottom',
                          end: 'top center',
                          scrub: 2,
                        }
                      });
                })
            }
        }, container);  
          return () => ctx.revert();
        });
      }, [pathname, process]);
    return (
        <div className="cases__wrap cases__wrap--down" ref={container}>
            <div className="cases__shell cases__shell--middle fade-in">
                <div className="cases__container middle-container center-container">
                    <Link to={`/cases/${pageName1}`} onClick={() => onSelectCase(pageName1, caseName1)}>
                        <picture>
                            <source media="(min-width:769px)" srcSet={require("../../resourses/img/cases/" + image1)}/>
                            <source media="(max-width:768px)" srcSet={require("../../resourses/img/cases/" + imageMin1)}/>
                            <img src={require("../../resourses/img/cases/" + image1)} alt={alt1}/>
                        </picture>
                        <div className={"cases__filter " + classes1}></div>
                    </Link>
                </div>
                <p className="cases__description cases__description--small">
                    {description1}
                </p>
            </div>
            <div className="cases__shell cases__shell--small fade-in">
                <div className="cases__container middle-container light-container">
                    <Link to={`/cases/${pageName2}`} onClick={() => onSelectCase(pageName2, caseName2)}>
                        <picture>
                            <source media="(min-width:769px)" srcSet={require("../../resourses/img/cases/" + image2)}/>
                            <source media="(max-width:768px)" srcSet={require("../../resourses/img/cases/" + imageMin2)}/>
                            <img src={require("../../resourses/img/cases/" + image2)} alt={alt2}/>
                        </picture>
                        <div className={"cases__filter " + classes2}></div>
                    </Link>
                </div>
                <p className="cases__description cases__description--small">
                    {description2}
                </p>
            </div>
            
        </div>
    )
}
export default MiddleBlock;