import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";

const Model = () => {
    const mesh = useRef<Group>(null);
    const { nodes } = useGLTF("/model/chaine.glb");
    const { viewport } = useThree();

    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.x += 0.025;
            mesh.current.rotation.y += 0.005;
        }
    });

    return (
        <group
            ref={mesh}
            scale={[
                viewport.width / 50,
                viewport.width / 50,
                viewport.width / 50,
            ]}>
            <primitive object={nodes.Torus001} />
            <primitive object={nodes.Torus003} />
            <primitive object={nodes.Torus004} />
        </group>
    );
};

export default Model;
