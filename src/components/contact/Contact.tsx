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
                    Pas encore bilingue mais j'y travail <span>(promis)</span>
                </p>
                <Link href={"mailto:aurelien.corre@outlook.fr"}>
                    Envoie moi un message
                </Link>
            </div>
            <div className={styles.joke}>
                <p>Merci d'avoir visité mon portfolio !</p>
                <p>
                    Hésite pas à me suivre sur mes réseaux (y'a des trucs
                    sympa).
                </p>
            </div>
        </section>
    );
};

export default Contact;
