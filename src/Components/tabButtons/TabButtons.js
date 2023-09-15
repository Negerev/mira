import { Link, useLocation } from 'react-router-dom';
import './tabbattons.scss';
import {useEffect, useRef, useMemo} from 'react';
import {gsap} from 'gsap';

const TabButtons = ({cases, down, buttonsData, onSelectTab, title}) => {
    const buttonWrapper = useRef();
    useEffect(() => {
        let ctx = gsap.context(() => {
                    gsap.from('.cases__li', {
                    opacity: 1,
                    stagger: 0.1,
                    duration: 2
                });
            
          }, buttonWrapper);
          return () => ctx.revert();
      }, []);
      
    let clazz;

    if ( down && cases) {
        clazz = "cases__wrapper cases__wrapper--close duble-parent cases__wrapper--down hidden"
    } else if (down) {
        clazz = "cases__wrapper cases__wrapper--close duble-parent cases__wrapper--down"
    } else {
        clazz = "cases__wrapper cases__wrapper--close parent";
        
    }
    const titleClass = down ? "none" : "title";
   
    const buttons = buttonsData.map(({name, isActive, id}) => {
        let classes;
        if (down) {
            classes = isActive ? "cases__li duble button button--down button--red hidden" : "cases__li duble button button--down";
        } else {
            classes = isActive ? "cases__li tab button button--red hidden" : "cases__li tab button";
            
        }
       
        return (
            <Link to={'/cases/'} onClick={(e) => onSelectTab(e)} 
                    id={id} 
                    className={classes} 
                    key={id}>
                {name}
            </Link>
        )
        
    });
    
    return (
        <>
            <h1 className={titleClass}>{title}</h1>
            <nav className={clazz} ref={buttonWrapper}>
                {buttons}
            </nav>
        </>
        
    )
}

export default TabButtons;