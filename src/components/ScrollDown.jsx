import React from 'react';

const ScrollDown = () => {
    return (
        <div className='absolute bottom-5 w-full z-20 m-auto'>
            <div className="scrolldown w-full flex flex-col justify-center">
                <div className="scrolldown-text text-center">
                    {/*MY PROJECTS*/}
                </div>
                <div className="scrollDown-animation w-1/12 m-auto">
                    <div className='relative'>
                        <svg className='downAnimation absolute bottom-[8.5svh] ' xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 500 100" scale={0.1}>
                            <path
                                d="m0 0 240 100M500 .6 240 100"
                                style={{
                                    fill: "#90dff3",
                                    stroke: "#90dff3",
                                }}
                            />
                        </svg>
                        <svg className='downAnimation absolute bottom-[5.5svh] mt-3' xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 500 100" scale={0.1}>
                            <path
                                d="m0 0 240 100M500 .6 240 100"
                                style={{
                                    fill: "#90dff3",
                                    stroke: "#90dff3",
                                }}
                            />
                        </svg>
                        <svg className='downAnimation absolute bottom-[2.5svh] mt-3' xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 500 100" scale={0.1}>
                            <path
                                d="m0 0 240 100M500 .6 240 100"
                                style={{
                                    fill: "#90dff3",
                                    stroke: "#90dff3",
                                }}
                            />
                        </svg>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default ScrollDown;