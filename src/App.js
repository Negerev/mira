
import {Suspense, useState, lazy, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import { gsap } from "gsap";
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import Spinner from './Components/spinner/Spinner';

const MainPage = lazy(() => import('./Components/pages/MainPage'));
const  CasesPage = lazy(() => import('./Components/pages/CasesPage'));
const  ServicesPage = lazy(() => import('./Components/pages/ServicesPage'));
const  Project = lazy(() => import('./Components/pages/Project'));
const PrivacyPolicy = lazy(() => import('./Components/pages/privacy'));
const ErrorPage = lazy(() => import('./Components/pages/404'));

// import { MainPage, CasesPage, ServicesPage } from "./Components/pages";



function App() {
    
	const buttonsData = [
        {name: 'all', isActive: false, id: 1},
        {name: 'digital', isActive: false, id: 2},
        {name: 'branding', isActive: true, id: 3},
        {name: 'illustration', isActive: false, id: 4},
        {name: 'presentation', isActive: false, id: 5},
        {name: 'enviroment', isActive: false, id: 6}
    ];
   
    const [title, setTitle] = useState('branding');
    const [data, setData] = useState(buttonsData);
    const [page, setPage] = useState('nabatu');
    const [caseName, setCaseName] = useState(' ');

    useEffect(() => {
        let pazz = document.location.pathname.substring(7);
        setPage(pazz)
        setCaseName(pazz);
        
    }, []);

    const preloader = gsap.timeline({
        defaults: {
          duration: 1,
        //   ease: "power4.out",
        },
        // delay: 0.5,
        onReverseComplete: () => {
            preloader.play();
        }
      })
    
      preloader
      .to(".transition-block:nth-child(1)", {borderBottomRightRadius: 500}, "<")
      .to(".transition-block:nth-child(2)", {borderBottomLeftRadius: 500}, "<")
      .to(".transition-block:nth-child(3)", {borderTopRightRadius: 500}, "<")
      .to(".transition-block:nth-child(4)", {borderTopLeftRadius: 500}, "<")
      .to(".transition-wrapper", {scale: 3, autoAlpha: 0}, "<")


 
   
    const onSelectTab = (e) => {
        setTitle(e.target.innerText);
        document.querySelectorAll('.cases__select').forEach(item => {
            item.classList.toggle('cases__select--open')
        })
        document.querySelectorAll('.cases__wrapper').forEach(item => {
            item.classList.toggle('cases__wrapper--close')
        })
        setData(data.map((item, i, arr) => {
            item.isActive = false;
            return item;
        }))
        const id = e.currentTarget.id;
        const index = data.findIndex(elem => (elem.id == id));
        const old = data[index];
        const newItem = {...old, isActive: true}
        const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)]
        setData(newArr);
        window.scrollTo(0, 0);
    }
    const onSelectCase = (pageName, caseName) => {
       setPage(pageName)
       setCaseName(caseName)
    }

    const location = useLocation();
    return (
            
			<div className="app">
				<Header/>
					<main>
						<Suspense fallback={<Spinner/>}>
							<Routes location={location} key={location.pathname}>
								<Route path="/" element={<MainPage onSelectCase={onSelectCase} title={title} data={data} onSelectTab={onSelectTab} />}/>
								<Route  path="/cases/" element={<CasesPage title={title} data={data} onSelectTab={onSelectTab} onSelectCase={onSelectCase}/>}/>

								<Route path="/services/" element={<ServicesPage />}/>

								<Route  element={<Project title={title} data={data} onSelectTab={onSelectTab} page={page} caseName={caseName}/>} path={`cases/:pageName`}/>
                                <Route element={<PrivacyPolicy/>} path={`/privacy-policy/`}/>
                                <Route element={<ErrorPage/>} path={`*`}/>
							</Routes>
						</Suspense>
					</main>
				<Footer/>
			</div>
    );
}

export default App;
