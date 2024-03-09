import React from "react";
import styles from "./gallery.module.scss";
import Projects from "./Projects";

const Gallery = () => {
    return (
        <section id={styles.gallery}>
            <h2>
                Some of my <span>work</span>
            </h2>
            <Projects />
        </section>
    );
};

export default Gallery;
