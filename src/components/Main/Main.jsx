import React, { useEffect, useRef, useState } from "react";
import { Section, SectionsContainer } from "react-fullpage";
import Home from "../roots/Home/Home";
import About from "../roots/About/About";
import Service from "../roots/Service/Service";
import Contact from "../roots/Contact/Contact";
import { faL } from "@fortawesome/free-solid-svg-icons";

function Main() {
    const options = {
        anchors: ['home', 'about', 'service', 'contact'],
    };
    const [isMobile, setIsMobile] = useState(false);

    // useEffect(() => {
    //     console.log("effect run!")
    //     const handleResize = () => {
    //         // 창 크기가 720px 이하이면 isMobile을 true로 설정
    //         setIsMobile(window.innerWidth <= 800);
    //     };

    //     // 컴포넌트가 마운트될 때 resize 이벤트 핸들러 등록
    //     window.addEventListener('resize', handleResize);

    //     // 컴포넌트가 언마운트될 때 이벤트 핸들러 제거
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);

    useEffect(() => {
        const ismobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (ismobile) {
            setIsMobile(true)
        } else {
            // desktop
            setIsMobile(false);
        }
        console.log(isMobile)
    }, []);

    return (
        <>
            {
                isMobile ? (
                    <>
                        <Home />
                        <About />
                        <Service />
                        <Contact />
                    </>
                ) : (
                    <SectionsContainer {...options}>
                        <Section><Home /></Section>
                        <Section><About /></Section>
                        <Section><Service /></Section>
                        <Section><Contact /></Section>
                    </SectionsContainer>
                )

            }
        </>

    );
}

export default Main;
