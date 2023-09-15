import {useEffect} from 'react';
import { Link } from 'react-router-dom';
import FeedbackHeader from '../feedback/feedback';
import './footer.scss';
const Footer = () => {

    
    /* eslint-disable */
    const data = [
        {link: 'mailto:mail@miracreative.org', name: "Mail"},
        {link: 'https://www.behance.net/miradigitalru', name: "Behance"},
        {link: 'https://t.me/+79101517929', name: "Telegram"},
        {link: 'https://www.linkedin.com/company/miragency', name: "Linked in"},
    ]

    const elements = data.map((item, i) => {
        return (
            <li className="footer__item">
                <a target="_blank" className="link" href={item.link} key={i}>{item.name}</a>
            </li>
        )
    });
    /* eslint-enable */
    

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__form">
                        <FeedbackHeader footer={true}/>
                    </div>
                    <div className="footer__right-box">
                        <ul className="footer__social">
                           {elements}
                            
                        </ul>

                        <Link className="footer__privacy link" to="/privacy-policy/">
                            Privacy policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;