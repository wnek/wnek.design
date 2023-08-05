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

// if (typeof window !== 'undefined') {
//   studio.initialize();
//   studio.extend(extension);
// }

import Script from 'next/script'

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
          style={{ background: '#000', zIndex: -1 }}
        >
          {/* <color attach="background" args={['#000000']} /> */}
        </GlobalCanvas>

        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-4JHSZTFCHR" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-4JHSZTFCHR');
        `}
        </Script>
      </body>
    </html>
  );
}
