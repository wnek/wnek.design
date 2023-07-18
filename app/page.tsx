'use client';
import { useRef } from 'react';
import {
  SmoothScrollbar,
  UseCanvas,
  ScrollScene,
  useScrollbar,
} from '@14islands/r3f-scroll-rig';

import { StickyScrollScene } from '@14islands/r3f-scroll-rig/powerups';

import { getProject, val } from '@theatre/core';
import { editable as e, SheetProvider, useCurrentSheet } from '@theatre/r3f';

import { useFrame } from '@react-three/fiber';

function TrackTheatreProgress({ scale, scrollState }) {
  const demoSheet = getProject('Demo Project').sheet('Demo Sheet');
  const sequenceLength = val(demoSheet.sequence.pointer.length);

  useFrame(() => {
    demoSheet.sequence.position = scrollState.scroll.progress * sequenceLength;
  });

  return (
    <>
      <SheetProvider sheet={demoSheet}>
        <e.mesh theatreKey="Cube" scale={scale.xy.min() * 0.5}>
          <boxGeometry args={[1, 1, 1]} />
          <meshNormalMaterial />
        </e.mesh>
      </SheetProvider>
    </>
  );
}

function LockedCameraScene({ scroll }) {
  const el = useRef();
  const scrollState = scroll;

  return (
    <>
      <div className="StickyContainer">
        <div ref={el} className="SceneContainer Debug"></div>
      </div>
      <UseCanvas>
        <StickyScrollScene track={el}>
          {({ scale, ...props }) => (
            <>
              <TrackTheatreProgress scale={scale} scrollState={scrollState} />
            </>
          )}
        </StickyScrollScene>
      </UseCanvas>
    </>
  );
}
export default function Home() {
  const scroll = useScrollbar();

  return (
    <>
      <SmoothScrollbar>
        {(bind) => (
          <article {...bind}>
            <h1>Home Test</h1>
            <LockedCameraScene scroll={scroll} />
          </article>
        )}
      </SmoothScrollbar>
    </>
  );
}
