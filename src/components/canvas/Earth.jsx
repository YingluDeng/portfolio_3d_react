import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./tokyo_house/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.9} groundColor='black' />
      {/* red light */}
      <spotLight
        position={[250, 100, 50]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
        color={0xecad9e}
      />
      <pointLight intensity={1} />

      {/* green light  */}
      <spotLight
        position={[-160, -100, -600]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
        color={0xd6d587}
        // 0xd6d587
      />
      <pointLight intensity={1} />

      <primitive 
        object={earth.scene} 
        scale={0.009} 
        position-y={0} 
        rotation-y={0} 
        // object={earth.scene}
        // scale={isMobile ? 0.2 : 0.3}  //调模型大小
        // position={isMobile ? [0, -3, -2.2] : [0, -3, 0.5]}  //position
        // rotation={[0.06, 1.55, -0.05]}
      />
    </mesh>

    
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;