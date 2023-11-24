import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const Earth = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/scene.glb");

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
      <group name="Scene">
        <group name="earth_hologramglb">
          <group
            name="Sketchfab_model"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.306}
          >
            <group name="Root">
              <group name="TERRE1" scale={3.27} />
              <group name="Sphere002" rotation={[0, 0, -3.015]} scale={0.965}>
                <mesh
                  name="Sphere002_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere002_0.geometry}
                  material={materials["Material.006"]}
                />
              </group>
              <group name="Circle643" scale={4.787}>
                <mesh
                  name="Circle643_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle643_0.geometry}
                  material={materials["Material.004"]}
                />
              </group>
              <group name="Circle455" scale={0.176}>
                <mesh
                  name="Circle455_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle455_0.geometry}
                  material={materials["Material.007"]}
                  morphTargetDictionary={
                    nodes.Circle455_0.morphTargetDictionary
                  }
                  morphTargetInfluences={
                    nodes.Circle455_0.morphTargetInfluences
                  }
                />
              </group>
              <group name="Circle" scale={6.128}>
                <mesh
                  name="Circle_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle_0.geometry}
                  material={materials["Material.010"]}
                />
                <group name="Icosphere002" position={[1, 0, 0]} scale={0.063}>
                  <mesh
                    name="Icosphere002_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere002_0.geometry}
                    material={materials["Material.008"]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("scene.glb");
