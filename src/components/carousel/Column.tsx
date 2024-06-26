import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./carousel.module.scss";

const Column = ({ images, y = 0 }: any) => {
    return (
        <motion.div style={{ y }} className={styles.icons}>
            {images.map((src: any, idx: number) => {
                return (
                    <div key={idx} className={styles.imageContainer}>
                        <Image src={src} alt="Tech icon" fill sizes="1" />
                    </div>
                );
            })}
        </motion.div>
    );
};

export default Column;
