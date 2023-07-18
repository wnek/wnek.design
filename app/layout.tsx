'use client';
import { GlobalCanvas } from '@14islands/r3f-scroll-rig';
import './globals.css';
import studio from '@theatre/studio';
import extension from '@theatre/r3f/dist/extension';

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
      <body>
        <GlobalCanvas gl={{ preserveDrawingBuffer: true }}></GlobalCanvas>
        {children}
      </body>
    </html>
  );
}
