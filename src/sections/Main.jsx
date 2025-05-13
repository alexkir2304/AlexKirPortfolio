import React from 'react';
import Main3DModel from "../components/models/Main3dModel.jsx";
import ScrollDown from "../components/ScrollDown.jsx";

const Main = () => {
    return (
        <section>
            <div className="mainwrapper w-full h-svh">
                <div className="3dmodel-wrapper w-full h-svh absolute z-1">
                        <Main3DModel/>
                </div>

                <div className='main-text_wrapper w-full h-svh absolute z-10'>
                    <div className="main-text flex flex-col justify-center h-svh  z-10">
                        <div
                            className="main-text_name flex justify-center lg:text-8xl md:text-6xl text-4xl font-thin text-center">
                            ALEKSANDR KIRILLOV
                        </div>
                        <div
                            className="main-text_describe lg:mt-10 mt-4 flex justify-center font-thin tracking-[1.6dvw] text-center">
                            CREATIVE | TECHNOLOGIST | DEVELOPER
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