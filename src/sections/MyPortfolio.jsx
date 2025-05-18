import React from 'react';
import {projects, textContent} from '/src/constants/index.js'
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MyPortfolio = ({isEnglish}) => {

   useGSAP(() => {
       gsap.fromTo('.aboutMe-wrapper span',
           {
               opacity: 0,
               y: 30,
           }, {
               opacity: 1,
               y: 0,
               duration: 2,
               stagger: 0.3,
               ease: 'power2.inOut',
               scrollTrigger: {
                   trigger: '.aboutMe-wrapper',
                   start: 'top 80%'
               }
           }
       );

       gsap.utils.toArray('.projectCard').forEach((card, index) => {
           gsap.fromTo(card, {
                   x: (index%2 === 1) ? 800 : -800,
                   },
               {
                   x: 0,
                   duration: 1,
                   stagger: 0.3,
                   ease: 'power2.inOut',
                   scrollTrigger: {
                   trigger: card,
                   start: 'top 60%'
                   }
               }

           )
       })
   })

    return (
        <>
            <section id='work'>
                
                <div className="aboutMe w-full flex justify-center">
                    <div className="aboutMe-wrapper w-1/2 flex flex-col gap-5 m-15 text-center">
                        <span className='text-4xl'>
                            {isEnglish ? textContent.projects.text1.eng : textContent.projects.text1.rus}
                        </span>
                        <span className='text-2xl'>
                            {isEnglish ? textContent.projects.text2.eng : textContent.projects.text2.rus}
                        </span>
                        <span className='text-2xl'>
                            {isEnglish ? textContent.projects.text3.eng : textContent.projects.text3.rus}
                        </span>
                    </div>
                </div>
                
                <div className="myProjects w-full">
                    <div className="myProjectsWrapper  flex w-full flex-wrap ">

                        {projects.map((project, index) => (

                                    <a key={index} href={project.href} className="projectCard lg:w-1/2 w-full mt-10 flex justify-center">
                                        <div className="projectCard-wrapper relative w-2/3 flex flex-col justify-around items-center rounded-xl">
                                            <div className="projectCard-wrapper_backside overflow-hidden flex justify-center  items-center ">

                                                <ul className=" flex flex-col justify-around items-center  text-3xl gap-2">
                                                    <span>Developed using:</span>

                                                    {project.techStack.map((tech, index) => (

                                                        <li key={tech[index]}>{tech}</li>
                                                    ))}
                                                </ul>

                                            </div>

                                            <div className='projectCard-wrapper_frontside flex flex-col justify-center  items-center'>
                                                <img className='w-1/2 ' src={project.image} alt="image"/>
                                                <span className='w-5/6 text-center'>
                                                {isEnglish? project.description.eng : project.description.rus}
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                )
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default MyPortfolio;