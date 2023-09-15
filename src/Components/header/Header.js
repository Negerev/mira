import {useLayoutEffect, useState, useRef, useMemo} from 'react';
import { NavLink, useLocation} from 'react-router-dom';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mail from '../../resourses/img/icons/mail.svg'
import './header.scss';
import FeedbackHeader from '../feedback/feedback';

gsap.registerPlugin(ScrollTrigger);
function useGsapContext(scope) {
    const ctx = useMemo(() => gsap.context(() => {}, scope), [scope]);
    return ctx;
}
const Header = () => {
    const menu = useRef();
    const ctx = useGsapContext(menu);
    const {pathname} = useLocation();
    
    useLayoutEffect(() => {
        // ScrollTrigger.refresh();
        ctx.add(() => {
            gsap.from(".head-anim", {
              y: -100,
              opacity: 0,
              stagger: 0.2
            });
          });
        return () => ctx.revert()
    }, [pathname]) 

    // const [clazz, setClazz] = useState(false);

    const onGetForm = () => {
        // setClazz(!clazz);
        let feedback = document.querySelector('.feedback-header')

        if (feedback.classList.contains('feedback-header__active')) {
            feedback.classList.remove('feedback-header__active')
           
            gsap.to(feedback, {
                x: '100%',
                duration: 0.6,
                ease: 'power1',
                autoAlpha: 0
            })
        } else {
            feedback.classList.add('feedback-header__active')
            gsap.to(feedback, {
                x: 0,
                duration: 0.6,
                ease: 'power1',
                autoAlpha: 1
            })
        }
    }


    const preloader = gsap.timeline({
        defaults: {
          duration: 1,
          ease: "linear",
        },
        // delay: 0.5,
        onReverseComplete: () => {
            // preloader.play();
        }
      })
    
      preloader
      .to(".transition-block:nth-child(1)", {borderBottomRightRadius: 500})
      .to(".transition-block:nth-child(2)", {borderBottomLeftRadius: 500}, "<")
      .to(".transition-block:nth-child(3)", {borderTopRightRadius: 500}, "<")
      .to(".transition-block:nth-child(4)", {borderTopLeftRadius: 500}, "<")
      .to(".transition-wrapper", {scale: 3, autoAlpha: 0}, "<")


    return (
        <>
            <header className="header">
                <div className="container">
                    <nav className="menu" ref={menu}>
                        <div className="head-anim menu__logo">
                            <NavLink to="/">
                                <svg width="168" height="31" viewBox="0 0 168 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M41.5736 0.0454102V30.1982H35.3514V13.8673L28.0691 30.1526H13.5506L6.2683 13.8217V30.1526H0V0.0454102H6.2683L20.2798 30.1982L35.3514 0.0454102H41.5736Z" fill="black"/>
                                    <path d="M56.7371 0.0454102V30.1982H50.4688V0.0454102H56.7371Z" fill="black"/>
                                    <path d="M123.523 17.7904L128.915 30.1982H121.725L116.84 19.0677C115.826 19.1133 115.088 19.1589 114.581 19.1589H71.7632V30.2438H65.3105V0.0454102H114.535C118.776 0.0454102 122.324 0.729664 125.182 2.09817C128.04 3.46668 129.469 6.11246 129.469 10.0355C129.561 13.7305 127.533 16.3307 123.523 17.7904ZM114.581 13.0462C116.563 13.0462 118.13 12.955 119.19 12.7269C120.25 12.4988 121.034 12.1795 121.449 11.6777C121.864 11.2216 122.094 10.5829 122.094 9.76182C122.094 8.94071 121.864 8.30208 121.449 7.84591C121.034 7.38974 120.25 7.0248 119.19 6.79672C118.13 6.56863 116.563 6.4774 114.581 6.4774H71.7632V13.0462H114.581Z" fill="black"/>
                                    <path d="M160.949 30.1528L158.506 24.5875H144.172L141.729 30.1528H134.631L147.721 0H154.818L168 30.1528H160.949ZM146.937 18.2012L155.694 18.1555L151.316 8.11982L146.937 18.2012Z" fill="black"/>
                                </svg>
                            </NavLink>
                        </div>
                        <ul className=" menu__wrapper head-anim">
                                <li className="menu__item ">
                                    <NavLink 
                                            to="/cases/"
                                            className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        
                                        }>cases</NavLink>
                                </li>
                                <li className="menu__item head-anim">
                                    <NavLink to="/services/"
                                         className={({ isActive, isPending }) =>
                                         isPending ? "pending" : isActive ? "active" : ""
                                       }>services</NavLink>

                                </li>
                           
                        </ul>
                        <div className='head-anim'>
                            <button onClick={onGetForm} className="button button--header desctop head-anim">let`s work</button>
                            <button onClick={onGetForm} className="button button--header mobile head-anim"><img src={mail}/></button>
                        </div>
                    </nav>
                </div>
            </header>

            <div id="cursor"></div>
            <div id="aura"></div>

            {/* <div className="transition-wrapper">
                <div className="transition-block"></div>
                <div className="transition-block"></div>
                <div className="transition-block"></div>
                <div className="transition-block"></div>
            </div> */}
          
            
            <FeedbackHeader onGetForm={onGetForm} footer={false}/>
        </>
        
    )
}

export default Header;