import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import { useLocation } from 'react-router-dom';
import * as Yup from "yup";
import ring from "./../../resourses/img/icons/black-ring.svg";
import "./headerFeedback.scss";
import "./footerFeedback.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const phoneMask = () => {
  let phoneInputs = document.querySelectorAll("input[name='tel']");
  let getInputNumbersValue = function (input) {
    return input.value.replace(/\D/g, '');
  }

  let onPhonePaste = function (e) {
    let input = e.target,
      inputNumbersValue = getInputNumbersValue(input);
    let pasted = e.clipboardData || window.сlipboardData;
    if (pasted) {
      let pastedText = pasted.getData('Text');
      if (/\D/g.test(pastedText)) {
        input.value = inputNumbersValue;
        return;
      }
    }
  }

  let onPhoneInput = function (e) {
    let input = e.target,
        inputNumbersValue = getInputNumbersValue(input),
        selectionStart = input.selectionStart,
        formattedInputValue = "";

    if (!inputNumbersValue) {
        return input.value = "";
    }

    if (input.value.length !== selectionStart) {
        if (e.data && /\D/g.test(e.data)) {
            input.value = inputNumbersValue;
        }
        return;
    }

  if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
    if (inputNumbersValue[0] === "9") inputNumbersValue = "7" + inputNumbersValue;
    let firstSymbols = (inputNumbersValue[0] === "8") ? "8" : "+7";
    formattedInputValue = input.value = firstSymbols + " ";
    if (inputNumbersValue.length > 1) {
      formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
    }
    if (inputNumbersValue.length >= 5) {
      formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
    }
    if (inputNumbersValue.length >= 8) {
      formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
    }
    if (inputNumbersValue.length >= 10) {
      formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
    }
  } else {
    formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
  }
  input.value = formattedInputValue;
}
  let onPhoneKeyDown = function (e) {
    let inputValue = e.target.value.replace(/\D/g, '');
    if (e.keyCode === 8 && inputValue.length === 1) {
        e.target.value = "";
    }
  }
  for(let phoneInput of phoneInputs) {
    phoneInput.addEventListener('keydown', onPhoneKeyDown);
    phoneInput.addEventListener('input', onPhoneInput, false);
    phoneInput.addEventListener('paste', onPhonePaste, false);
  }
  
}
const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  window.addEventListener("DOMContentLoaded", () => {
    phoneMask();
  });
  return (
    <>
      <label className="feedback-header__label">
        <input {...field} {...props} className="feedback-header__input" />
        {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
      </label>
    </>
  );
  
};
const MyTextInputFooter = ({ label, ...props }) => {
  window.addEventListener("DOMContentLoaded", () => {
    phoneMask();
  });
  const [field, meta] = useField(props);
  return (
    <>
      <label className="feedback-header__label">
        <input {...field} {...props} className="feedback__input"  />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </label>
    </>
  );
};


const FeedbackHeader = ({ onGetForm, footer }) => {
  const {pathname} = useLocation();
  const app = useRef();
  useEffect(() => {
    let ctx = gsap.context((self) => {
      const inputs = self.selector('.feedback__input');
      inputs.forEach((input) => {
        gsap.from(input, {
          width: 200,
          scrollTrigger: {
            trigger: input,
            start: 'center bottom',
            end: '250 bottom',
            scrub: true,
          }
        });
      })
      
    }, app);
    return () => ctx.revert();
  }, [pathname])
  let form = document.querySelector('form');
  const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
    const HeaderFeed = () => {
      const [nameVal, setName] = useState('');
      const [email, setEmail] = useState('');
      const [tel, setTel] = useState('');
      const [text, setText]  = useState('');
      const [clazz, setClazz] = useState('feedback__responce feedback__responce--header');
      const onCloseResponce = () => {
        setClazz('feedback__responce feedback__responce--header');
      }
      const onSubmit = async function (event) {
      event.preventDefault();
      let formData = new FormData();
      formData.append("name", nameVal);
      formData.append("email", email);
      formData.append("tel", tel);
      formData.append("text", text);
      
      // fetch("/mailer/mail.php", {
      //   method: "POST",
      //   body: formData
      // }).then(response => {
      //   response.json().then(data => {
      //     console.log("Successful" + data);
      //   });
      // });
    
      let response = await fetch('/mailer/mail.php', {
          method: 'POST',
          body: formData
        });

      if (response.ok) {
        setName('');
        setEmail('')
        setTel('')
        setText('')
        setClazz('feedback__responce feedback__responce--header active')
          
      } else {
          console.log("error: " + response.status);
      }
    }
      return (
        <Form className='feedback-header'>
           <div className={clazz}>
            <button className="feedback__close" type="button" onClick={onCloseResponce}>
            <svg xmlns="http://www.w3.org/2000/svg" width="63" height="63" viewBox="0 0 63 63" fill="none">
            <circle cx="31.5" cy="31.5" r="31.5" fill="#E94235"/>
            <path d="M43.3345 21.707L19.9999 45.0416" stroke="white" stroke-width="3" stroke-linecap="round"/>
            <path d="M44.042 44.3345L20.7075 20.9999" stroke="white" stroke-width="3" stroke-linecap="round"/>
            </svg>
            </button>
            <div className="feedback__wrapper feedback__wrapper--header">
              <div className="feedback__logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="186" height="187" viewBox="0 0 186 187" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M93 0C93 51.6386 51.3625 93.5 0 93.5C51.3625 93.5 93 135.361 93 187C93 135.361 134.638 93.5 186 93.5C134.638 93.5 93 51.6386 93 0Z" fill="white"/>
                </svg>
              </div>
              <p>Thank you for contacting us we’ll get back to you as soon as possible</p>
              <div className="feedback__logo feedback__logo--small">
                <svg xmlns="http://www.w3.org/2000/svg" width="62" height="63" viewBox="0 0 62 63" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M31 0C31 17.397 17.1208 31.5 0 31.5C17.1208 31.5 31 45.603 31 63C31 45.603 44.8792 31.5 62 31.5C44.8792 31.5 31 17.397 31 0Z" fill="white"/>
                </svg>
              </div>
            </div>
            
          </div>
        <button className="feedback-header__ring" type="button" onClick={onGetForm}>
          <img src={ring} />
        </button>
        <h2 className="feedback-header__title">Creating creativity for business purposes</h2>
        <MyTextInput id="name" name="name" type="text" placeholder="name" autoComplete="off" 
        value={nameVal}
        onInput={(e) => setName(e.target.value)}/>
        <MyTextInput id="mail" name="email" type="email" placeholder="main@mail.com" autoComplete="off" 
        value={email}
        onInput={(e) => setEmail(e.target.value)}/>
        <MyTextInput  id="tel" name="tel" type="tel" placeholder="+91------" autoComplete="off" 
        value={tel}
        onInput={(e) => {setTel(e.target.value);  phoneMask();}}/>
        <Field id="text" name="text" placeholder="message" as="textarea" className="feedback-header__textarea" />
        <ErrorMessage component="div" className="error" name="text" value={text}
        onInput={(e) => setText(e.target.value)}/>
        <div className="feedback-header__box">
          <p className="feedback-header__text">
            By clicking on the "get offer" button, you confirm that you have fully read the current Information Policy on this site, fully agree with its provisions and have given all the consents specified in the above-mentioned Information Policy
          </p>
          <button onClick={onSubmit} className="feedback-header__btn button button--red">Get offer</button>
        </div>
      </Form>
      )
    }

    const FooterForm = () => {
      const [nameVal, setName] = useState('');
      const [email, setEmail] = useState('');
      const [tel, setTel] = useState('');
      const [clazz, setClazz] = useState('feedback__responce');
    const onCloseResponce = () => {
      setClazz('feedback__responce');
    }
    const onSubmit = async function (event) {
      event.preventDefault();
      let formData = new FormData();
      formData.append("name", nameVal);
      formData.append("email", email);
      formData.append("tel", tel);
      // fetch("/mailer/mail.php", {
      //   method: "POST",
      //   body: formData
      // }).then(response => {
      //   response.json().then(data => {
      //     console.log("Successful" + data);
      //   });
      // });
    
      let response = await fetch('/mailer/mail.php', {
          method: 'POST',
          body: formData
        });

      if (response.ok) {
          setName('');
          setEmail('')
          setTel('')
          setClazz('feedback__responce active')
      } else {
          console.log("error: " + response.status);
      }
    }
      return ( 
        <Form className="feedback" >
          <div className={clazz}>
            <button className="feedback__close" type="button" onClick={onCloseResponce}>
            <svg xmlns="http://www.w3.org/2000/svg" width="63" height="63" viewBox="0 0 63 63" fill="none">
            <circle cx="31.5" cy="31.5" r="31.5" fill="#E94235"/>
            <path d="M43.3345 21.707L19.9999 45.0416" stroke="white" stroke-width="3" stroke-linecap="round"/>
            <path d="M44.042 44.3345L20.7075 20.9999" stroke="white" stroke-width="3" stroke-linecap="round"/>
            </svg>
            </button>
            <div className="feedback__wrapper">
              <div className="feedback__logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="186" height="187" viewBox="0 0 186 187" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M93 0C93 51.6386 51.3625 93.5 0 93.5C51.3625 93.5 93 135.361 93 187C93 135.361 134.638 93.5 186 93.5C134.638 93.5 93 51.6386 93 0Z" fill="white"/>
                </svg>
              </div>
              <p>Thank you for contacting us we’ll get back to you as soon as possible</p>
              <div className="feedback__logo feedback__logo--small">
                <svg xmlns="http://www.w3.org/2000/svg" width="62" height="63" viewBox="0 0 62 63" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M31 0C31 17.397 17.1208 31.5 0 31.5C17.1208 31.5 31 45.603 31 63C31 45.603 44.8792 31.5 62 31.5C44.8792 31.5 31 17.397 31 0Z" fill="white"/>
                </svg>
              </div>
            </div>
            
          </div>
          <h2 className="feedback__title">Get a commercial offer</h2>
          <div ref={app}>
            <MyTextInputFooter
                id="name"
                name="name"
                type="text"
                placeholder="name"
                autoComplete="off"
                value={nameVal}
                onInput={(e) => setName(e.target.value)}
            />
            <MyTextInputFooter
                id="mail"
                name="email"
                type="email"
                placeholder="main@mail.com"
                autoComplete="off"
                value={email}
                onInput={(e) => setEmail(e.target.value)}
            />
            <MyTextInputFooter
                // onChange={() => phoneMask()}
                id="tel-footer"
                name="tel"
                type="tel"
                placeholder="+91------"
                autoComplete="off"
                value={tel}
                onInput={(e) => {setTel(e.target.value);  phoneMask();}}
            />
          </div>
          
      <div className="feedback__box">
          <button onClick={onSubmit} className="feedback__btn button button--red" type="submit">Get offer</button>
          <p className="feedback__text">By clicking on the "get offer" button, you confirm that you have fully read the current Information Policy on this site, fully agree with its provisions and have given all the consents specified in the above-mentioned Information Policy</p>
      </div>
      </Form>
      )
    }

  return (

    <Formik
      initialValues={{
        name: "",
        email: "",
        tel: "",
        text: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().min(2, "Minimum 2 characters to fill").required("Obligatory field!"),
        email: Yup.string().email("Wrong email address").required("Obligatory field!"),
        tel: Yup.string().required("Obligatory field!"),

        text: Yup.string().min(10, "Minimum 10 characters to fill"),
      })}
      onSubmit={() => console.log(FormData(form))}
    >
      {footer ? <FooterForm/> : <HeaderFeed/>}
    </Formik>
  );
};

export default FeedbackHeader;