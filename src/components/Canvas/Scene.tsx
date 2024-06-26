"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment, OrbitControls } from "@react-three/drei";

const Scene = () => {
    return (
        <Canvas>
            <directionalLight intensity={3} position={[0, 3, 2]} />
            <Environment preset="city" />
            <Model />
        </Canvas>
    );
};

export default Scene;
