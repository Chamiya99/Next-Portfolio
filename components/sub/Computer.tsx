"use client"

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import Loader from './Loader'

const Computer = () => {
  // Use correct typing for useGLTF
  const { scene } = useGLTF('/desktop_pc/scene.gltf') as any

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={1} />
      <primitive object={scene} />
    </mesh>
  )
}

const ComputerCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 20, 20], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2.25}
          minPolarAngle={Math.PI / 2.25}
        />
        <Computer />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

// Load the GLTF model with correct typing for TypeScript
export function useGLTFLoader(path: string) {
  return useGLTF(path) as any;
}

export default ComputerCanvas
