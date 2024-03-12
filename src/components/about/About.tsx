/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./about.module.scss";
import ProfilPic from "./ProfilPic";

const About = () => {
    return (
        <>
            <section id="about" className={styles.about}>
                <div className={styles.bio}>
                    <p>Hi !</p>
                    <p>
                        I'm <span>Aurélien</span>, a twenty-seven years old{" "}
                        <span>front-end</span> <span>developer</span> based in{" "}
                        <span>Brest</span>, France.
                    </p>
                </div>

                <ProfilPic />
            </section>
        </>
    );
};

export default About;
