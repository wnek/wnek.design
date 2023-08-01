// React
import { useRef } from 'react';

// R3F and R3F/Drei
import { useFrame, useThree } from '@react-three/fiber';
import {
  useGLTF,
  AccumulativeShadows,
  ContactShadows,
  CameraControls,
  Environment,
  RandomizedLight,
  Plane,
  MeshTransmissionMaterial,
  Text,
  // PerspectiveCamera,
  OrbitControls,
  Center,
} from '@react-three/drei';

// Theatre.js
import { getProject, val } from '@theatre/core';
import { editable as e, SheetProvider, PerspectiveCamera } from '@theatre/r3f';
import DemoProject from 'public/DemoProject.theatre-project-state.json';
import { MeshBasicMaterial } from 'three';
import { Model } from './Model';

// Types
type GLTFResult = GLTF & {
  nodes: {
    ahnd: THREE.Mesh;
  };
  materials: {};
};

export default function Hero(props) {
  const demoSheet = getProject('DemoProject', { state: DemoProject }).sheet(
    'DemoSheet'
  );
  const sequenceLength: number = val(demoSheet.sequence.pointer.length);

  console.log(props);
  useFrame(() => {
    demoSheet.sequence.position = props.scrollState.progress * sequenceLength;
  });

  return (
    <>
      <SheetProvider sheet={demoSheet}>
        <PerspectiveCamera
          theatreKey="Camera"
          lookAt={[0, 0, 0]}
          fov={14}
          position={[0, 20, 0]}
          makeDefault
          rotation={[0, 0, 0]}
          up={[0, 0, -1]}
        />

        <Model
          args={[2, 1]}
          scale={5}
          rotation={[0, 0, 0]}
          position={[0, 0, 0]}
        />

        <Environment
          files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/dancing_hall_1k.hdr"
          background={false}
          blur={2}
        />

        <RandomizedLight
          amount={10}
          radius={4}
          ambient={1}
          intensity={1}
          position={[0, 2, 0]}
          bias={0.001}
        />
        <color args={[0x088]} attach="background" />
      </SheetProvider>
    </>
  );
}
