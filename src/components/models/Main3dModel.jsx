import React, {useEffect, useRef, useState} from 'react';
import {Canvas} from "@react-three/fiber";
import {OrbitControls, useScroll} from "@react-three/drei";
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


        const element = my3dModel.current;

        function handleMousemove (e) {
            const coordsDiffX = (e.clientX - calculatedWidth/2)/10000;
            const coordsDiffY = (e.clientY - calculatedHeight/2)/10000;

                 setXpos(-coordsDiffX)
                 setYpos(coordsDiffY)

        }

        element.addEventListener("mousemove", handleMousemove);

    },[]);


    return (

        <div ref={my3dModel}   className='model w-full h-full'>
            <Canvas  className='model' camera={{position: [0,0,15], fov: 12}} >

                {/*<ambientLight intensity={0.2} color='#1a1a40'/>*/}
                <directionalLight position={[5, 5, 5]} intensity={40} color='pink'/>

                <OrbitControls
                    // enablePan={false}
                    // enableZoom={!isTablet}
                    maxDistance={20}
                    minDistance={5}
                    // maxPolarAngle={Math.PI / 2}
                    // minPolarAngle={Math.PI / 5}
                    autoRotate={true}
                    enableZoom={false}
                />

                <group
                    // scale={1}
                    position={[xpos, ypos, 0]}

                >
                    <Orb/>
                </group>


            </Canvas>
        </div>


    );
};

export default Main3DModel;