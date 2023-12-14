import { FC, useEffect, useState, useRef, useCallback } from "react";
import { Helmet } from "react-helmet";
// import {  useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

import { useSelector } from "react-redux";
import { logReg } from "../../api/userAPI";

import LoginPage from "../../components/modal/LoginPage";
import RegPage from "../../components/modal/RegPage";
import "./loginreg.scss";

declare global {
    interface Window {
        qwerty: any;
    }
}

const LoginReg: FC = () => {

    const [flag, setFlag] = useState<boolean>(false);

    const elementRef = useRef<any>(null)

    window.qwerty = (data: any): void => {
        console.log(101, data);
        logReg(JSON.parse(data))
            .then((data: any) => {
                window.location.replace("/");
            })
            .catch((error: any) => {
                if (error.response && error.response.data) {
                    alert(
                        `${error.response.data.message}${error.response.status}`
                    );
                } else {
                    console.log("dev", error);
                    alert("Ошибка 111 - Обратитесь к администратору!");
                }
            });
    };

    useEffect(() => {
        const element = elementRef?.current;
    // console.log(element)
        if (!element) return;
    
        const observer = new ResizeObserver((entries) => {
          // 👉 Do something when the element is resized
          entries.forEach(entry => {
            if(entry.contentRect.height === 0){
                setFlag(true)
            }else{
                setFlag(false)
            } 
            console.log(entry.contentRect.height)
          });
        });
    
        observer.observe(element);
        return () => {
          // Cleanup the observer by unobserving all elements
          observer.disconnect();
        };
      }, [])

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <script
                    src="https://code.jquery.com/jquery-3.7.1.min.js"
                    integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
                    crossOrigin="anonymous"
                ></script>
                <script src="//ulogin.ru/js/ulogin.js"></script>
                <script src="/files/javascript/main.js"></script>
            </Helmet>

                <div className="wrapper-login-form">

                    <div className="login-form">
                        <Tabs
                            defaultActiveKey="login"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="login" title="Вход">
                                <LoginPage />
                            </Tab>
                            <Tab eventKey="reg" title="Регистрация">
                                    <RegPage role={"USER"} />
                            </Tab>
                            <Tab eventKey="company" title="Регистрация компаний" >
                                    <RegPage role={"COMPANY"} />
                        </Tab>
                        </Tabs>
                                <div 
                                    ref={elementRef}
                                    className="social-icons"
                                    id="uLogin30465678"
                                    data-ulogin="display=panel;fields=first_name,email;optional=phone,last_name,photo,bdate;lang=ru;providers=vkontakte,yandex,odnoklassniki,google,mailru,youtube;redirect_uri=http%3A%2F%2Fwww.davse.ru%2Flogin-registration;callback=preview"
                                ></div>
                                {flag && (
                                    <p className="note-reg">
                                        Для входа или регистрации через социальные сети - отключите
                                        блокировщик рекламы в браузере (привер: Adblock
                                        Plus)!
                                    </p>
                                )}

                    </div>
                </div>
        </>
    );
};

export default LoginReg;