'use client' 
import './globals.css'
import { useRef, useState, useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { GlobalCanvas } from '@14islands/r3f-scroll-rig'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <GlobalCanvas>
      <ambientLight />
      </GlobalCanvas>
        {children}</body>
    </html>
  )
}
