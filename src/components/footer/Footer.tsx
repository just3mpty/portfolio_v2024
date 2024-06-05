import React from "react";
import styles from "./footer.module.scss";

import instagram from "../../../public/icons/instagram.svg";
import linkedin from "../../../public/icons/linkedin.svg";
import github from "../../../public/icons/github.svg";
import Link from "next/link";
import Image from "next/image";

const icons = [
    { icon: instagram, path: "https://www.instagram.com/3mpty.dev/" },
    { icon: linkedin, path: "https://www.linkedin.com/in/corre-aurelien/" },
    { icon: github, path: "https://github.com/just3mpty" },
];

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul>
                {icons.map((icon, index) => (
                    <Link href={icon.path} key={index} target="_blank">
                        <li>
                            <Image
                                src={icon.icon}
                                alt="Social network icon"
                                fill
                            />
                        </li>
                    </Link>
                ))}
            </ul>
        </footer>
    );
};

export default Footer;
