//npm install @react-three/fiber @react-three/drei

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Earth } from "./ThreeModel";

export const ThreeCanvas = () => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: 1,
      }}
    >
      <Canvas shadows camera={{ position: [0, 0, 4], fov: 40 }}>
        <color attach="background" args={["#022B3A"]} />
        <ambientLight intensity={0.7} />
        <Earth />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};
