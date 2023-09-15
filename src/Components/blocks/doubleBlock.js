import {Link, useLocation} from 'react-router-dom';
import React, {useRef, useLayoutEffect} from 'react'; 
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const DoubleBlock = ({image1, alt1, image2, alt2, clazz="project__container project__container--middle"}) => {

    const container = useRef();
    const {pathname} = useLocation();

    useLayoutEffect(() => {

        let mm = gsap.matchMedia();
 
        mm.add({
        isMobile: "(max-width: 768px)",
        isDesktop: "(min-width: 769px)",
        }, (context) => {
        let {isMobile, isDesktop} = context.conditions;
        
        let ctx = gsap.context(() => {
        if(isDesktop) {
            gsap.to('.project__container--big picture', {
                scale: 1.1,
                scrollTrigger: {
                  refresh: true,
                  trigger: '.project__container--big',
                  start: 'top bottom',
                  end: 'top center',
                  scrub: 2 
                }
            });
            gsap.to('.project__container--middle picture', {
                scale: 1.1,
                scrollTrigger: {
                  refresh: true,
                  trigger: '.project__container--middle',
                  start: 'top bottom',
                  end: 'top center',
                  scrub: 2,
                }
            });    
        } else {
            gsap.utils.toArray(".project__container--big picture").forEach((item) => {
                gsap.to(item, {
                    scale: 1.1,
                    scrollTrigger: {
                      refresh: true,
                      trigger: item,
                      start: 'top bottom',
                      end: 'top center',
                      scrub: 2 
                    }
                });
            });

            gsap.utils.toArray(".project__container--middle picture").forEach((item) => {
                gsap.to(item, {
                    scale: 1.1,
                    scrollTrigger: {
                      refresh: true,
                      trigger: item,
                      start: 'top bottom',
                      end: 'top center',
                      scrub: 2 
                    }
                });
            })
        }
        
          }, container);
          return () => ctx.revert();
        });
      }, [pathname]);

    return (
        <div className="project__wrap" ref={container}>
                        <div className={clazz}>
                            <picture>
                                <img src={require("../../resourses/img/projects/" + image1)} alt={alt1}/>
                            </picture>
                        </div>
                        <div className={clazz}>
                            <picture>
                                <img src={require("../../resourses/img/projects/" + image2)} alt={alt2}/>
                            </picture>
                        </div>
                    </div>
    )
}

export default DoubleBlock;