import React from 'react';
import {useGSAP} from "@gsap/react";
import gsap from  'gsap';

const Nav = () => {

    useGSAP(() => {
        gsap.fromTo('.navItems li',
            {

                opacity:0,
                x:50,

            },
            {
                opacity:1,
                x:0,
                stagger: 0.2,
                duration:2,
                delay: 2,
                ease: 'power2.inOut'


            }

        )
    })



    return (
        <nav className='absolute top-0 w-full z-20'>
            <div className="navWrapper w-4/6 mx-auto mt-10 ">

                <ul className='flex navItems justify-between'>
                    <li key={'1'} className='navItem'>
                        <a href="#" className='group ' >
                            <span className='main-item_text'>
                                HOME
                            </span>
                            <span className='underline'>
                            </span>
                        </a>
                    </li>
                    <li key={'2'} >
                        <a href="#work" >
                            <span className='main-item_text'>
                                WORK
                            </span>
                            <span className='underline'>
                            </span>
                        </a>
                    </li>
                    <li key={'3'} >
                        <a href="#skills" >
                            <span className='main-item_text'>
                                SKILLS
                            </span>
                            <span className='underline'>
                            </span>
                        </a>
                    </li>
                    <li key={'4'} >
                        <a href="#contacts" >
                            <span className='main-item_text'>
                                CONTACTS
                            </span>
                            <span className='underline'>
                            </span>
                        </a>
                    </li>
                </ul>


            </div>
        </nav>
    );
};

export default Nav;