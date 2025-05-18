import React from 'react';
import {useGSAP} from "@gsap/react";
import gsap from  'gsap';
import {textContent} from "../constants/index.js";

const Nav = ({isEnglish}) => {

    useGSAP(() => {

        gsap.fromTo('.nav-items li',
            {
                opacity:0,
                x:50,
            },
            {
                opacity:1,
                x:0,
                stagger: 0.2,
                duration:2,
                delay: 1,
                ease: 'power2.inOut'
            }
        )
    })

    return (
        <nav className={`nav  ${(window.scrollY > 10) ? 'scrolled' : 'not-Scrolled'}`}>
            <div className="navWrapper ">
                <ul className='nav-items'>

                    {textContent.nav.map((item, index) => (

                        <li key={index} >
                            <a href={item.href} className='group '>
                            <span className='main-item_text'>
                                {isEnglish ? item.eng : item.rus}
                            </span>
                                <span className='underline'>
                            </span>
                            </a>
                        </li>

                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Nav;