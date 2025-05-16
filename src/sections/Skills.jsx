import React from 'react';
import {skills} from '../constants/index.js'


// const card =
//
// const coordinates = test.getBoundingClientRect();


const Skills = () => {


    const testArr = [
        734, 467, 653, 373,  234, 878, 834, 834
    ]

    return (
        <section id='skills'>
            <div className="skillsWrapper w-full flex justify-end mt-10 ">
                <div className="skillsContent w-5/6 flex gap-30" >

                    <div className="timeline relative lg:w-1/12 md:w-1/6 w-1/4 mt-10 flex justify-center  ">
                        {/*<div className="timelineShadow w-full h-full"></div>*/}
                        <div className="timelineGradient  h-full rounded-full ">

                        </div>

                        <div className='absolute h-full flex flex-col justify-around'>

                            {skills.map((skill, index) => (

                                <div key={index}>
                                    <div className='overflow-hidden rounded-full  '>
                                        <img  src={skill.imagePath} alt="img"/>
                                    </div>
                                </div>
                            ))}

                        </div>




                        {/*<div className={` absolute translate-y-[800px]`}>*/}
                        {/*    <div className='overflow-hidden rounded-full z-20 '>*/}
                        {/*        <img className='w-full h-full' src='../../images/skills/nextjs.png' alt="img"/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}



                    </div>

                    <div className="skillsDescription w-full w-2/3 flex  flex-col">

                        {skills.map((skill, index) => (
                            <div key={index} className="skillCardWrapper relative w-full mt-10 flex flex-col justify-center ">

                                <div
                                    className="skillCard relative w-5/6 p-4 text-white flex flex-col gap-6 bg-skills-bg rounded-xl ">


                                <span className="skillCard-header text-4xl">{skill.name}</span>
                                <div className="skillCard-progress w-full flex flex-start items-center gap-2">
                                    <div className="range h-[1.5svh] w-1/2 bg-main rounded-full"></div>
                                    <div>{skill.progress}%</div>

                                </div>
                                <span className="skillCardDescription">{skill.description}</span>
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