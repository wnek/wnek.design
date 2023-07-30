import { useGLTF, MeshTransmissionMaterial } from '@react-three/drei';
import { editable as e } from '@theatre/r3f';

export default function Hand() {
  const { nodes, materials } = useGLTF(
    '/models/hand-transformed.glb'
  ) as GLTFResult;
  return (
    <group
      dispose={null}
      scale={0.5}
      position={[0, 1, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <e.mesh geometry={nodes.ahnd.geometry} theatreKey="Hand">
        <MeshTransmissionMaterial
          thickness={1}
          transmission={1}
          roughness={0.2}
          ior={1.1}
          attenuationDistance={1}
          anisotropy={1}
          distortion={2}
          distortionScale={0.2}
          attenuationColor={'#ffffff'}
          color={'#ffffff'}
          bg={'#839681'}
          chromaticAberration={0.01}
          clearcoat={0.3}
        />
      </e.mesh>
    </group>
  );
}
