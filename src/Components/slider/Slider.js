import {Link} from 'react-router-dom';
import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import { siblings } from "@glidejs/glide/src/utils/dom";

const Slider = () => {
    useEffect(() => {
      const CustomActiveClass = function (Glide, Components, Events) {
        let Component = {
          mount() {
            this.changeActiveSlide();
          },
  
          changeActiveSlide() {
            let slide = Components.Html.slides[Glide.index];
            slide.classList.remove("is-next", "is-prev");
            slide.classList.add("is-active");
  
            siblings(slide).forEach((sibling) => {
              sibling.classList.remove("is-active", "is-next", "is-prev");
            });
  
            if (slide.nextElementSibling) {
              slide.nextElementSibling.classList.add("is-next");
            }
  
            if (slide.previousElementSibling) {
              slide.previousElementSibling.classList.add("is-prev");
            }
          },
        };
  
        Events.on("run", () => {
          Component.changeActiveSlide();
        });
  
        return Component;
      };
  
      const imgBox = document.querySelector(".services__img-box"),
        links = document.querySelectorAll(".services__item dt");
  
      links.forEach((item) => {
        item.addEventListener("mouseover", () => {
          imgBox.id = item.getAttribute("data-id");
        });
      });
  
      if (window.innerWidth < 576) {
        const glide = new Glide(".services__slider", {
          type: "carousel",
          startAt: 0,
          perView: 1,
        }).mount({
          CustomActiveClass: CustomActiveClass,
        });
  
  
  
        const prev = document.querySelector(".services__prev"),
          next = document.querySelector(".services__next");
  
        prev.addEventListener("click", () => glide.go("<"));
        next.addEventListener("click", () => glide.go(">"));
  
        glide.on("run", function () {
          let activeItem = document.querySelector(".services__item.is-active dt");
          imgBox.id = activeItem.getAttribute("data-id");
        });
      }
    });
    return (
      <>
            <div className="services__inner">
              <div className="services__btns" data-glide-el="controls">
                <button className="services__prev" data-glide-dir="<">
                  <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.241545 11.9076C6.44971 11.9076 11.4824 16.9403 11.4824 23.1484" stroke="white" strokeWidth="3" />
                    <path d="M0.241539 11.9074C6.44971 11.9074 11.4824 6.87467 11.4824 0.666504" stroke="white" strokeWidth="3" />
                    <path d="M1.86396 11.8965L27.543 11.8965" stroke="white" strokeWidth="3" />
                  </svg>
                </button>
                <button className="services__next" data-glide-dir=">">
                  <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.7585 12.0924C21.5503 12.0924 16.5176 7.05973 16.5176 0.851562" stroke="white" strokeWidth="3" />
                    <path d="M27.7585 12.0926C21.5503 12.0926 16.5176 17.1253 16.5176 23.3335" stroke="white" strokeWidth="3" />
                    <path d="M26.136 12.1035L0.457031 12.1035" stroke="white" strokeWidth="3" />
                  </svg>
                </button>
              </div>
              <div className="services__img-box" id="branding">
                <div className="services__img id1"></div>
                <div className="services__img id2"></div>
                <div className="services__img id3"></div>
                <div className="services__img id4"></div>
                <div className="services__img id5"></div>
                <div className="services__img id6"></div>
                <div className="services__img id7"></div>
                <div className="services__img id8"></div>
                <div className="services__img id9"></div>
                <div className="services__img id10"></div>
                <div className="services__img id11"></div>
                <div className="services__img id12"></div>
                <div className="services__img id13"></div>
                <div className="services__img id14"></div>
                <div className="services__img id15"></div>
                <div className="services__img id16"></div>
              </div>
              <div className="services__slider">
                <div className="services__track glide__track" data-glide-el="track">
                  <dl className="services__content glide__slides">
                    <div className="services__item glide__slide">
                      <dt data-id="branding">Branding</dt>
                      <dd>We create strong branding for products and companies</dd>
                    </div>
                    <div className="services__item glide__slide">
                      <dt data-id="digital">Digital</dt>
                      <dd>Full range of services to create and run the site</dd>
                    </div>
                    <div className="services__item glide__slide">
                      <dt data-id="animation">Animations</dt>
                      <dd>A proven way to breathe life into a digital product</dd>
                    </div>
                    <div className="services__item glide__slide">
                      <dt data-id="illustrations">Illustrations</dt>
                      <dd>We research the product, the market, the audience. Create a new positioning</dd>
                    </div>
                    <div className="services__item glide__slide">
                      <dt data-id="creative">Creative</dt>
                      <dd>Let us show what cannot be expressed in words </dd>
                    </div>
                    <div className="services__item glide__slide">
                      <dt data-id="design">Environment design</dt>
                      <dd>Development of system solutions for commercial interiors, public and office spaces, taking into account aesthetic and ergonomic functions.</dd>
                    </div>
                  </dl>
                </div>
  
                <div className="services__dots glide__bullets" data-glide-el="controls[nav]">
                  <button className="glide__bullet" data-glide-dir="=0"></button>
                  <button className="glide__bullet" data-glide-dir="=1"></button>
                  <button className="glide__bullet" data-glide-dir="=2"></button>
                  <button className="glide__bullet" data-glide-dir="=3"></button>
                  <button className="glide__bullet" data-glide-dir="=4"></button>
                  <button className="glide__bullet" data-glide-dir="=5"></button>
                </div>
                
              </div>
            </div>
      </>
    );
  };
  
  export default Slider;