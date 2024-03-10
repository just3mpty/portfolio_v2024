import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

const Model = () => {
    const mesh = useRef<Mesh>(null);
    const { nodes } = useGLTF("/model/chaine_3.glb");

    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.x += 0.015;
            mesh.current.rotation.y += 0.005;
        }
    });

    return (
        <group scale={1.2} position={[0, 0, -4]}>
            <primitive object={nodes.chaine} ref={mesh}>
                <MeshTransmissionMaterial metalness={1} color={0xededed} />
            </primitive>
        </group>
    );
};

export default Model;
