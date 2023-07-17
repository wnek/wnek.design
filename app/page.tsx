'use client';
import { useRef } from 'react';
import {
  SmoothScrollbar,
  UseCanvas,
  ScrollScene,
} from '@14islands/r3f-scroll-rig';

import studio from '@theatre/studio';
import extension from '@theatre/r3f/dist/extension';
import { getProject } from '@theatre/core';
import { editable as e, SheetProvider, useCurrentSheet } from '@theatre/r3f';

import { useFrame } from '@react-three/fiber';

if (typeof window !== 'undefined') {
  studio.initialize();
  studio.extend(extension);
}

function LockedCameraScene() {
  const el = useRef();
  const demoSheet = getProject('Demo Project').sheet('Demo Sheet');
  const sheet = useCurrentSheet();
  return (
    <>
      <div ref={el} className="Placeholder ScrollScene"></div>
      <UseCanvas>
        <ScrollScene track={el}>
          {({ scale, ...props }) => (
            <>
              <SheetProvider sheet={demoSheet}>
                <e.mesh theatreKey="Cube" scale={scale.xy.min() * 0.5}>
                  <boxGeometry args={[1, 1, 1]} />
                  <meshNormalMaterial />
                </e.mesh>
              </SheetProvider>
            </>
          )}
        </ScrollScene>
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
            <h1>Home Test</h1>
            <LockedCameraScene />
            <LockedCameraScene />
            <LockedCameraScene />
          </article>
        )}
      </SmoothScrollbar>
    </>
  );
}
