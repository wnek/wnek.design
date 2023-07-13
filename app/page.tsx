'use client'
import { SmoothScrollbar } from '@14islands/r3f-scroll-rig'

import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (

<SmoothScrollbar>
{(bind) => (
      // Return a single DOM wrapper and spread all props {...bind}
      <article {...bind}>This content will be smooth scrolled</article>
    )}
</SmoothScrollbar>

  )
}
