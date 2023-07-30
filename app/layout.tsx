'use client';
import { GlobalCanvas } from '@14islands/r3f-scroll-rig';
import '../styles/main.css';
import studio from '@theatre/studio';
import extension from '@theatre/r3f/dist/extension';

import localFont from 'next/font/local';

const Switzer = localFont({
  src: './fonts/Switzer-Variable.woff2',
  variable: '--font-switzer',
});

import Nav from './components/layout/Nav';

if (typeof window !== 'undefined') {
  studio.initialize();
  studio.extend(extension);
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Switzer.className}>
        <Nav />
        <GlobalCanvas
          gl={{ preserveDrawingBuffer: true }}
          scaleMultiplier={0.01}
          shadows
          style={{ background: '#f0f0f0', zIndex: -1 }}
        >
          {/* <color attach="background" args={['#000000']} /> */}
        </GlobalCanvas>

        {children}
      </body>
    </html>
  );
}
