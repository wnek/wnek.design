'use client';
import { useRef } from 'react';
import {
  SmoothScrollbar,
  UseCanvas,
  ViewportScrollScene,
} from '@14islands/r3f-scroll-rig';
import {
  MeshDistortMaterial,
  GradientTexture,
  Box,
  CameraControls,
  PerspectiveCamera,
} from '@react-three/drei';

import studio from '@theatre/studio';
import extension from '@theatre/r3f/dist/extension';

if (typeof window !== 'undefined') {
  studio.initialize();
  studio.extend(extension);
}
import { getProject } from '@theatre/core';
import { editable as e, SheetProvider } from '@theatre/r3f';

import styles from './page.module.css';
const demoSheet = getProject('Demo Project').sheet('Demo Sheet');

function Example() {
  const el = useRef();
  return (
    <>
      <div ref={el} className="Placeholder ScrollScene"></div>
      <UseCanvas>
        <SheetProvider sheet={demoSheet}>
          <ViewportScrollScene track={el}>
            {(props) => (
              <>
                <CameraControls makeDefault />
                <PerspectiveCamera
                  fov={14}
                  position={[0, 0, 20]}
                  makeDefault
                  near={1}
                  far={5000}
                  onUpdate={(self) => self.lookAt(0, 0, 0)}
                />
                <e.mesh theatreKey="Cube">
                  <boxGeometry args={[1, 1, 1]} />
                  <meshPhysicalMaterial />
                </e.mesh>
              </>
            )}
          </ViewportScrollScene>
        </SheetProvider>
      </UseCanvas>
    </>
  );
}
export default function Home() {
  return (
    <>
      <SmoothScrollbar>
        {(bind) => (
          <article {...bind}>
            <h1>Test</h1>
            <Example />
          </article>
        )}
      </SmoothScrollbar>
    </>
  );
}
