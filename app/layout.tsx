'use client';
import { GlobalCanvas } from '@14islands/r3f-scroll-rig';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GlobalCanvas gl={{ preserveDrawingBuffer: true }}></GlobalCanvas>
        {children}
      </body>
    </html>
  );
}
