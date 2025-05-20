import React, {useEffect, useRef, useState} from 'react';
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {Orb} from "./Fractured_orb.jsx";

const Main3DModel = () => {

    const my3dModel = useRef(null);

    const [xpos, setXpos] = useState(0);
    const [ypos, setYpos] = useState(0);

    useEffect(() => {

        const card = my3dModel.current;

        const calculatedHeight = card.getBoundingClientRect().height;
        console.log(calculatedHeight + 'calculatedHeight');

        const card2 = my3dModel.current;
        const calculatedWidth = card2.getBoundingClientRect().width;


        const  handleMousemove = (e) => {
            const coordsDiffX = (e.clientX - calculatedWidth/2)/500;
            const coordsDiffY = (e.clientY - calculatedHeight/2)/300;

                 setXpos(coordsDiffX)
                 setYpos(coordsDiffY)
        }

        const element = my3dModel.current;
        element.addEventListener("mousemove", handleMousemove);

    },[]);


    return (

        <div ref={my3dModel}
             style={{
                    transform: `translateY(${-ypos}%) translateX(${-xpos}%)`,
             }}
             className='model absolute w-full h-full'>
            <Canvas  className='model' camera={{position: [0,0,15], fov: 12}} >

                {/*<ambientLight intensity={0.2} color='#1a1a40'/>*/}
                <directionalLight position={[5, 5, 5]} intensity={40} color='pink'/>

                <OrbitControls
                    autoRotate={true}
                    enableZoom={false}
                />

                    <Orb/>

            </Canvas>
        </div>


    );
};

export default Main3DModel;