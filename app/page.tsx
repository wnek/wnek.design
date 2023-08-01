'use client';
// React
import { useRef } from 'react';

import Hero from './components/3d/Hero';
import Manifesto from './components/home/Manifesto';
import SelectedWorks from './components/home/SelectedWorks';
import AboutMe from './components/home/AboutMe';
import Skills from './components/home/Skills';
import Contact from './components/home/Contact';
import Footer from './components/layout/Footer';

import SpinningBox from './components/3d/SpinningBox';

// R3F Scroll Rig
import {
  SmoothScrollbar,
  UseCanvas,
  ScrollScene,
  ViewportScrollScene,
  useScrollbar,
} from '@14islands/r3f-scroll-rig';
import { StickyScrollScene } from '@14islands/r3f-scroll-rig/powerups';

function HeroSection({ scroll }: any) {
  const el = useRef(null);
  const scrollState: any = scroll;

  return (
    <section>
      <div className="StickyContainer">
        <div ref={el} className="SceneContainerContent Debug"></div>
      </div>
      <UseCanvas>
        <StickyScrollScene track={el}>
          {(props) => (
            <>
              <Hero {...props} />
            </>
          )}
        </StickyScrollScene>
      </UseCanvas>
    </section>
  );
}
export default function Home() {
  const scroll = useScrollbar();

  return (
    <>
      <SmoothScrollbar>
        {(bind) => (
          <main {...bind}>
            <HeroSection scroll={scroll} />
            <Manifesto />
            <SelectedWorks />
            <AboutMe />
            <Contact />
            <Footer />
          </main>
        )}
      </SmoothScrollbar>
    </>
  );
}
