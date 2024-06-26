"use client";
import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { icons } from "@/constants";
import styles from "./carousel.module.scss";
import useDimension from "@/hooks/useDimensions";
import Column from "./Column";

const slides = [
    icons.next,
    icons.figma,
    icons.framer,
    icons.firebase,
    icons.mongodb,
    icons.node,
    icons.react,
    icons.tailwind,
    icons.sass,
];

const TechStackCarousel = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { height } = useDimension();
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [0, height * 0.6]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 1]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * -0.4]);

    return (
        <div ref={targetRef} className={styles.container}>
            <Column images={[slides[0], slides[1], slides[2]]} y={y2} />
            <Column images={[slides[3], slides[4], slides[5]]} y={y3} />
            <Column images={[slides[6], slides[7], slides[8]]} y={y} />
        </div>
    );
};

export default TechStackCarousel;
