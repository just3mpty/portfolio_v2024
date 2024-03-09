"use client";

import React, { useRef } from "react";
import styles from "./gallery.module.scss";
import Projects from "./Projects";
import Image from "next/image";
import useDimension from "@/hooks/useDimensions";
import { motion, useScroll, useTransform } from "framer-motion";

import arrow from "../../../public/icons/giga_arrow.svg";

const Gallery = () => {
    const { width } = useDimension();
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const x = useTransform(scrollYProgress, [0, 1], ["0.1%", "-85%"]);

    return (
        <section ref={targetRef} id={styles.gallery}>
            {width < 800 ? (
                <>
                    <h2>
                        Some of my <span>work</span>
                    </h2>
                    <Projects />
                </>
            ) : (
                <div className={styles.horizontalContainer}>
                    <motion.div style={{ x }}>
                        <div className={styles.textWrapper}>
                            <h2>
                                Some of my <span>work</span>
                            </h2>
                            <figure>
                                <Image
                                    src={arrow}
                                    alt="Arrow icon"
                                    width={100}
                                    height={80}
                                />
                                <figcaption>scroll to discover</figcaption>
                            </figure>
                        </div>
                        <Projects />
                    </motion.div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
