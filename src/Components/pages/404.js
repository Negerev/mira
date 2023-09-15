import { useEffect } from "react";
import { useLocation} from "react-router-dom";
import "./../../style/404.scss";
import img404 from "../../resourses/img/icons/404.svg"

const ErrorPage = () => {

  const { pathname } = useLocation();
  console.log(pathname);
  
  useEffect(() => {
    document.querySelector('body').classList.add('page-404');
    
  }, [pathname])


  return (
    <div className="page-404__inner">
      <img src={img404} alt="" />
      
      <div className="page-404__title">Ups. Page not found</div>
      <div className="page-404__text">We are sorry, but the page you tried to go to does not exist. Please go back to the main page and try again</div>
    </div>
  );
};

export default ErrorPage;