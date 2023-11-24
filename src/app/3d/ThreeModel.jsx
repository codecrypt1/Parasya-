// import React, { useRef } from "react";
// import { useGLTF } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";

// export const Earth = (props) => {
//   const group = useRef();
//   const { nodes, materials } = useGLTF("/finalfinalfinal.glb");

//   useFrame((state, delta) => {
//     group.current.rotation.y += 0.2 * delta;
//     const t = state.clock.getElapsedTime();
//     group.current.rotation.set(
//       Math.cos(t / 4) / 8,
//       Math.sin(t / 3) / 4,
//       0.15 + Math.sin(t / 2) / 8
//     );
//     group.current.position.y = (0.5 + Math.cos(t / 2)) / 7;
//   });
//   return (
//     <group {...props} dispose={null}>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Sphere.geometry}
//         material={materials["Procedural_cany_cane_decoration_material.001"]}
//         rotation={[Math.PI / 2, 0, 0]}
//       />
//     </group>
//   );
// };

// useGLTF.preload("finalfinalfinal.glb");

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const Earth = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/finalfinalfinal.glb");

  useFrame((state, delta) => {
    group.current.rotation.y += 0.2 * delta;
    const t = state.clock.getElapsedTime();
    group.current.rotation.set(
      Math.cos(t / 4) / 8,
      Math.sin(t / 3) / 4,
      0.15 + Math.sin(t / 2) / 8
    );
    group.current.position.y = (0.5 + Math.cos(t / 2)) / 7;
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        fov={90}
        scale={1}
        position={[0, -3, 0]}
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials["Procedural_cany_cane_decoration_material.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
};

useGLTF.preload("/finalfinalfinal.glb");
