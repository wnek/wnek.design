import React, { useRef } from 'react';
import { MeshPhysicalMaterial, MeshBasicMaterial } from 'three';
import { useGLTF } from '@react-three/drei';
import { editable as e } from '@theatre/r3f';

export function Model(props) {
  const { nodes, materials } = useGLTF('/models/model-transformed.glb');
  return (
    <group {...props} dispose={null}>
      <e.mesh
        theatreKey="growth-by-design"
        castShadow
        receiveShadow
        geometry={nodes['growth-by-design'].geometry}
        position={[-0.005, 0.087, -0.002]}
        scale={0.125}
      >
        <meshStandardMaterial color={'#000'} />
      </e.mesh>
      <e.mesh
        theatreKey="paragraph"
        castShadow
        receiveShadow
        geometry={nodes.paragraph.geometry}
        position={[0.254, 0.052, 0.15]}
        scale={0.015}
      >
        <meshStandardMaterial color={'#595954'} />
      </e.mesh>

      <e.mesh
        theatreKey="glass-plate"
        castShadow
        receiveShadow
        geometry={nodes.glass.geometry}
      >
        <meshPhysicalMaterial
          color={'#fff'}
          transparent={true}
          opacity={0.1}
          roughness={0.01}
          metalness={1}
          transmission={0.9}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </e.mesh>

      <e.mesh
        theatreKey="white-plate"
        castShadow
        receiveShadow
        geometry={nodes['white-plate'].geometry}
        position={[0, -0.061, 0]}
      >
        <meshPhysicalMaterial
          color={'#fff'}
          transparent={false}
          opacity={1}
          roughness={1}
          metalness={1}
          transmission={0}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </e.mesh>
      <e.mesh
        theatreKey="metal-plate"
        castShadow
        receiveShadow
        geometry={nodes['metal-plate'].geometry}
        position={[0, -0.07, 0]}
      >
        <meshPhysicalMaterial
          color={'#fff'}
          transparent={false}
          opacity={1}
          roughness={0.2}
          metalness={1}
          transmission={0}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </e.mesh>

      <e.mesh
        theatreKey="black-plate"
        castShadow
        receiveShadow
        geometry={nodes['black-plate'].geometry}
        position={[0, -0.148, 0]}
      >
        <meshPhysicalMaterial
          color={'#000000'}
          transparent={false}
          opacity={1}
          roughness={0.2}
          metalness={1}
          transmission={0.9}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </e.mesh>
    </group>
  );
}

useGLTF.preload('/model-transformed.glb');
