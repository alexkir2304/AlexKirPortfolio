import React from 'react';
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {Orb} from "./Fractured_orb.jsx";

const Main3DModel = () => {
    return (
        <Canvas camera={{position: [0,0,15], fov: 12}}>


            <ambientLight intensity={0.2} color='#1a1a40'/>
            <directionalLight position={[5, 5, 5]} intensity={4} color='pink'/>

            <OrbitControls
                // enablePan={false}
                // enableZoom={!isTablet}
                maxDistance={20}
                minDistance={5}
                // maxPolarAngle={Math.PI / 2}
                // minPolarAngle={Math.PI / 5}
                autoRotate={true}

                // dampingFactor={0.03}
            />

            <Orb/>
        </Canvas>
    );
};

export default Main3DModel;