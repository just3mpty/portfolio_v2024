import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

const Model = () => {
    const mesh = useRef<Mesh>(null);
    const { nodes } = useGLTF("/model/chaine_2.glb");

    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.x += 0.015;
            mesh.current.rotation.y += 0.005;
        }
    });

    return (
        <group position={[0, 0, -4]}>
            <primitive object={nodes.chaine} ref={mesh}>
                <MeshTransmissionMaterial
                    chromaticAberration={0.5}
                    backside
                    roughness={0.25}
                    anisotropicBlur={0.2}
                />
            </primitive>
        </group>
    );
};

export default Model;
