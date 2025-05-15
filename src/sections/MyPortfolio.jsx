import React from 'react';
import {projects} from '/src/constants/index.js'


const MyPortfolio = () => {
    return (
        <>
            {/*text about me*/}
            <section id='work'>
                
                <div className="aboutMe w-full">
                    <div className="aboutMe-wrapper w-1/2 flex flex-col gap-5 m-15">
                        <span className='text-4xl'>
                            Hi, i am Alex, a developer based in Moscow city.
                        </span>
                        <span className='text-2xl'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ea fugit hic nemo, nobis vel.
                        </span>
                        <span className='text-2xl'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem corporis dolore obcaecati quia quos voluptatem?
                        </span>
                    </div>
                </div>
                
                <div className="myProjects w-full">
                    <div className="myProjectsWrapper  flex w-full flex-wrap ">

                        {
                            projects.map((project) => (

                                    <a href={project.href} className="projectCard lg:w-1/2 w-full mt-10 flex justify-center">
                                        <div className="projectCard-wrapper relative w-2/3 flex flex-col justify-around items-center rounded-xl">
                                            <div className="projectCard-wrapper_bg overflow-hidden flex justify-center  items-center ">

                                                <div
                                                    className=" flex flex-col justify-around items-center mb-20 text-3xl gap-2">
                                                    {project.techStack.map((tech) => (
                                                        <span>{tech}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <img className='w-1/2 ' src={project.image} alt="image"/>
                                            <span className='w-5/6 text-center'>
                                                {project.description}
                                            </span>
                                        </div>
                                    </a>

                                )
                            )

                        }


                        {/*<a href='#' className="projectCard lg:w-1/2 w-full mt-10 flex justify-center">*/}
                        {/*    <div*/}
                        {/*        className="projectCard-wrapper relative w-2/3 flex flex-col justify-around items-center rounded-xl">*/}
                        {/*        <div*/}
                        {/*            className="projectCard-wrapper_bg overflow-hidden flex justify-center  items-center ">*/}

                        {/*            <div className=" flex flex-col justify-around items-center mb-20 text-3xl gap-2">*/}
                        {/*                <span>GSAP</span>*/}
                        {/*                <span>Next.js</span>*/}
                        {/*                <span>THREE.js</span>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <img className='w-1/2 ' src="../../public/images/img_1.png" alt="image"/>*/}
                        {/*        <span className='w-5/6 text-center'>*/}
                        {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, asperiores eius facere iusto nemo sapiente.*/}
                        {/*        </span>*/}
                        {/*    </div>*/}
                        {/*</a>*/}

                    </div>

                </div>


            </section>

        </>


    );
};

export default MyPortfolio;