/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./contact.module.scss";
import Link from "next/link";

const Contact = () => {
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.heading}>
                <h2>
                    Don't be shy, <br />
                    <span>Say hi !</span>
                </h2>
                <p>
                    I mean, for professionnal purpose <span>(right ?)</span>
                </p>
                <Link href={"mailto:aurelien.corre@outlook.fr"}>
                    send me an email
                </Link>
            </div>
            <div className={styles.joke}>
                <p>Thanks for visiting my portfolio !</p>
                <p>
                    feel free to join me on my networks below (because life's
                    too short not to follow random people on the internet).
                </p>
            </div>
        </section>
    );
};

export default Contact;
