/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./about.module.scss";
import ProfilPic from "./ProfilPic";

const About = () => {
    return (
        <>
            <section id="about" className={styles.about}>
                <div className={styles.bio}>
                    <p>Salut !</p>
                    <p>
                        Moi c'est <span>Aurélien</span>, j'ai vingt-sept ans,{" "}
                        <span>développeur</span> <span>front-end</span> basé à{" "}
                        <span>Brest</span>, France.
                    </p>
                </div>

                <ProfilPic />
            </section>
        </>
    );
};

export default About;
