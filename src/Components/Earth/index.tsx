//MODULES
import { useRef } from "react";
import { TextureLoader } from "three";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

//COMPONENTS
import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.jpg";
import EarthNightMap from "../../assets/textures/8k_earth_nightmap.jpg";

import { useFrame, useLoader, useThree } from "@react-three/fiber";

export const Earth = () => {
    const [colorMap, normalMap, specularMap, cloudsMap, nightMap] = useLoader(TextureLoader, [
        EarthDayMap,
        EarthNormalMap,
        EarthSpecularMap,
        EarthCloudsMap,
        EarthNightMap,
    ]);

    const earthRef = useRef<any>();
    const cloudsRef = useRef<any>();
    const { viewport } = useThree();

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();

        earthRef.current.rotation.y = elapsedTime / 20;
        cloudsRef.current.rotation.y = elapsedTime / 20;
    });

    return (
        <>
            {/* sun */}
            <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={1.5} />

            <mesh ref={cloudsRef} scale={viewport.width / 4.5}>
                <Stars radius={200} depth={50} count={20000} factor={7} saturation={0} fade={true} />
                <sphereGeometry args={[1.005, 100, 100]} />
                <meshPhongMaterial
                    map={cloudsMap}
                    opacity={0.3}
                    depthWrite={false}
                    transparent={true}
                    side={THREE.DoubleSide}
                />
            </mesh>
            <mesh ref={earthRef} scale={viewport.width / 4.5}>
                <sphereGeometry args={[1, 100, 100]} />
                <meshPhongMaterial specularMap={specularMap} />
                <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.4} roughness={0.7} />
                {/* <OrbitControls
                    enablePan={true}
                    enableZoom={true}
                    enableRotate={true}
                    zoomSpeed={0.6}
                    panSpeed={0.5}
                    rotateSpeed={0.4}
                /> */}
            </mesh>
        </>
    );
};
