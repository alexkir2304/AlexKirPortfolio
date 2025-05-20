import React, {useEffect, useRef, useState} from 'react';
import Main3DModel from "../components/models/Main3dModel.jsx";
import ScrollDown from "../components/ScrollDown.jsx";
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';
import {textContent} from "../constants/index.js";

const Main = ({isEnglish,  onClick}) => {

    useGSAP(() => {

        gsap.fromTo('.main-text',
            {
                opacity: 0,
                y:50,
            },
            {
                opacity: 1,
                y:0,
                duration: 2,
                ease: 'power2.inOut',
            }
        );

        gsap.fromTo('.mainWrapper div',
            {
                opacity: 0,
            }, {
                opacity: 1,
                duration: 2,
                ease: 'power2.inOut',
            }
        )
    });

    const dotWrapperRef = useRef(null);

    const [height, setHeight] = useState(null)

    useEffect(() => {
        const card = dotWrapperRef.current;

        const coords = card.getBoundingClientRect().height

        setHeight(coords);



    }, []);

    return (
        <section>
            <div className="mainWrapper relative">

                <button onClick={onClick} className='fixed  top-1 lg:w-[7%] md:w-[13%] w-1/6 right-7 z-50 cursor-pointer'>
                    <div className='flex justify-around  w-full gap-1'>
                        <span>EN</span>
                        <div ref={dotWrapperRef} className='dotWrapper relative rounded-full w-[12vw] border-2 border-main flex  duration-200 ease-in-out'>
                            <div style={{width: height}} className={`h-full absolute bg-main text-red-100 rounded-full ${isEnglish ? 'left-0' : 'right-0'}  duration-200 ease-in-out`}></div>
                        </div>
                        <span>RU</span>
                    </div>
                </button>

                <div className="modelWrapper relative z-30">
                        <Main3DModel/>
                </div>

                <div  onClick={(e) => e.stopPropagation()} className='main-textWrapper '>
                    <div className="main-text ">
                        <div
                            className="main-text_name ">
                            {isEnglish ? textContent.main.name.eng : textContent.main.name.rus}
                        </div>
                        <div
                            className="main-text_describe ">
                            {isEnglish ? textContent.main.description.eng : textContent.main.description.rus}
                        </div>
                    </div>
                </div>

                <div className="scrollDownAnimation">
                    <ScrollDown/>
                </div>

            </div>
        </section>
    );
};

export default Main;