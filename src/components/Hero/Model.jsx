import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export const Model = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  const mesh = useRef();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.005;
    }
  });

  return <primitive ref={mesh} object={scene} scale={3} />;
};
