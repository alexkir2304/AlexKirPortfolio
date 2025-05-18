import React from 'react';
import {skills, textContent} from '../constants/index.js'
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import CountUp from "react-countup";

gsap.registerPlugin(ScrollTrigger);

const Skills = ({isEnglish}) => {

    useGSAP(() => {
        gsap.fromTo('.skillsHeader span',
            {
                opacity: 0,
                y: 30,
            }, {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.3,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: '.skillsWrapper',
                    start: 'top 80%'
                }
            }
        );

            ['.skillCardWrapper', '.skillsIcon' ].forEach((item) => {
                gsap.utils.toArray(item).forEach((card) => {
                    gsap.fromTo(card,
                        {
                        opacity: 0,
                            y: 50,
                        } ,
                        {
                            opacity: 1,
                            y: 0,
                            duration: 1,
                            stagger: 0.3,
                            ease: 'power2.inOut',
                            scrollTrigger: {
                                trigger: card,
                                start: 'top 80%'
                            }
                        }
                    )
                })
            })

        gsap.utils.toArray('.range').forEach((card, index) => {
            gsap.fromTo(card,
                {
                    width: 0,
                } ,
                {
                    width: skills[index].progress + '%',
                    duration: 2,
                    ease: 'power2.inOut',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%'
                    }
                }
            )
        })

        gsap.to('.timelineShadow',
            {
                transformOrigin: 'bottom bottom',
                scrollTrigger: {
                    trigger: '.timelineShadow',
                    start: 'top 70%',
                    end: "70% 50%",
                    onUpdate: (self) => {
                        // Scale the timeline height as the user scrolls
                        // from 1 to 0 as the user scrolls up the screen
                        gsap.to(".timelineShadow", {
                            scaleY: 1 - self.progress,
                        });
                    },
                },
            }
        )

    })

    return (
        <section id='skills'>
            <div className="skillsWrapper w-full flex flex-col justify-end items-center mt-20 ">

                <div className="skillsHeader w-11/12 flex flex-col gap-4 text-center ">
                    <span className='text-4xl'>
                            {isEnglish ? textContent.skills.text1.eng : textContent.skills.text1.rus}
                        </span>
                    <span className='text-2xl'>
                            {isEnglish ? textContent.skills.text2.eng : textContent.skills.text2.rus}
                        </span>
                    <span className='text-2xl'>
                            {isEnglish ? textContent.skills.text3.eng : textContent.skills.text3.rus}
                        </span>
                </div>

                <div className="skillsContent lg:w-4/6 w-5/6 flex justify-around gap-30 mt-10 ">

                    <div className="timeline relative lg:w-1/12 md:w-1/6 w-1/4 mt-10 flex justify-center items-center ">
                        <div className="timelineShadow absolute z-30 h-full  bg-black w-full"></div>
                        <div className="timelineGradient  h-full rounded-full ">
                        </div>

                        <div className='absolute h-[95%] flex flex-col justify-between '>

                        {skills.map((skill, index) => (
                                <div key={index} className='skillsIcon'>
                                    <div className='overflow-hidden rounded-full  '>
                                        <img  src={skill.imagePath} alt="img"/>
                                    </div>
                                </div>
                        ))}

                        </div>
                    </div>

                    <div className="skillsDescription w-full w-2/3 flex  flex-col">

                        {skills.map((skill, index) => (
                            <div key={index} className="skillCardWrapper relative w-full mt-10 flex flex-col justify-center ">

                                <div
                                    className="skillCard relative w-full p-4 text-white flex flex-col gap-6 bg-skills-bg rounded-xl ">

                                <span className="skillCard-header text-4xl">{skill.name}</span>

                                <div className="skillCard-progress w-full flex flex-start items-center gap-2">
                                    <div style={{width: `${skill.progress}%`}} className={`range h-[1.5svh]  bg-main rounded-full`}></div>
                                        <CountUp
                                            end={skill.progress}
                                            duration={3}
                                            suffix={'%'}
                                        />
                                </div>

                                <span className="skillCardDescription">{isEnglish? skill.description.eng : skill.description.rus}</span>
                            </div>
                        </div>
                        ))}

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;