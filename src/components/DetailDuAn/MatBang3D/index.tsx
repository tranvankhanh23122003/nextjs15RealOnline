'use client';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import './style.css'
function Model() {
  const { scene } = useGLTF('/models/scene.gltf');
  return <primitive object={scene} scale={1.5} />;
}

export default function MatBang3D() {
  return (
    <div className="wrapper-3d">
      <Canvas
        camera={{ position: [8, 8, 10], fov: 45 }}
        className="canvas-3d"
        gl={{ toneMappingExposure: 0.9 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <Suspense fallback={null}>
          <Model />
          <Environment preset="apartment" background />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
