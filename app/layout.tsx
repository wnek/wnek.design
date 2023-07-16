'use client';

import * as THREE from 'three';
import './globals.css';
import { GlobalCanvas } from '@14islands/r3f-scroll-rig';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GlobalCanvas gl={{ preserveDrawingBuffer: true }}>
          <ambientLight />
        </GlobalCanvas>
        {children}
      </body>
    </html>
  );
}
