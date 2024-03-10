/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./about.module.scss";
import Image from "next/image";
import ProfilPic from "./ProfilPic";

const About = () => {
    return (
        <>
            <section id="about" className={styles.about}>
                <div data-aos="fade-up" className={styles.bio}>
                    <p>Hi !</p>
                    <p>
                        I'm <span>Aurélien</span>, a twenty-seven years old{" "}
                        <span>front-end</span> <span>developer</span> based in{" "}
                        <span>Brest</span>, France.
                    </p>
                </div>
                {/* <div className={styles.joke}>
                    <p>
                        I don't really know what to say here, so just know that
                        i like music <span>(a lot)</span>, web design, web
                        development, and coffee{" "}
                        <span>(but you already knew that)</span>.
                    </p>
                    <figure>
                        <Image
                            src={profilPic}
                            alt="Current profil picture"
                            fill
                        />
                    </figure>
                </div> */}
                <ProfilPic />
            </section>
        </>
    );
};

export default About;
