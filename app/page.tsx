'use client'
import { useRef } from 'react'
import { SmoothScrollbar, UseCanvas, ViewportScrollScene } from '@14islands/r3f-scroll-rig'
import { MeshDistortMaterial, GradientTexture, Box, CameraControls, PerspectiveCamera } from '@react-three/drei'

import styles from './page.module.css'


function Example(){
  const el = useRef();
return(
  <>
  <div ref={el} className="Placeholder ScrollScene"></div>
  <UseCanvas>
  
  <ViewportScrollScene track={el}>
  {(props) => (
    <>
    <CameraControls makeDefault/>
    <PerspectiveCamera fov={70} position={[0, 0, 2000]} makeDefault near={1} far={5000} onUpdate={(self) => self.lookAt(0, 0, 0)} />
      <Box args={[1, 1, 2000]} {...props}/>
      </>
  )}
       
     
   </ViewportScrollScene>
 </UseCanvas>
 </>
)  

}
export default function Home() {
  
  return (   
    <>
    <SmoothScrollbar>
        {(bind) => (
          <article {...bind}>
            <h1>Test</h1>
            <Example />
          </article>
        )}
      </SmoothScrollbar>

    </>


  )
}
