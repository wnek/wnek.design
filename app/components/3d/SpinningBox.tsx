import React, { useRef, useState, useEffect } from 'react';
import { a, config, useSpring } from '@react-spring/three';
import { useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';

const AnimatedRoundedBox = a(RoundedBox);

export default function SpinningBox({ scale, scrollState, inViewport }) {
  const box = useRef();
  const size = scale.xy.min() * 0.5;

  console.log(scale);

  useFrame(() => {
    box.current.rotation.y = scrollState.progress * Math.PI * 2;
  });

  const spring = useSpring({
    scale: inViewport ? size : size * 0.0,
    config: inViewport ? config.wobbly : config.stiff,
    delay: inViewport ? 100 : 0,
  });

  return (
    <AnimatedRoundedBox ref={box} {...spring}>
      <meshNormalMaterial />
    </AnimatedRoundedBox>
  );
}
