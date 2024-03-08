"use client";

import React, { useState } from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";

type NavLinks = {
    name: string;
    path: string;
};

const Navlinks: NavLinks[] = [
    { name: "Home", path: "/" },
    { name: "Projetcs", path: "#gallery" },
    { name: "About", path: "#about" },
    { name: "Contact", path: "#contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className={styles.nav}>
                <h1>
                    CORRE<span>aurélien</span>
                </h1>
                <div onClick={toggleMenu} className={styles.hamburgerContainer}>
                    <div
                        style={
                            isOpen
                                ? {
                                      transform: "rotate(135deg)",
                                      position: "absolute",
                                  }
                                : {}
                        }
                        className={styles.line}></div>
                    <div
                        style={{ opacity: isOpen ? "0" : "1" }}
                        className={styles.line}></div>
                    <div
                        style={
                            isOpen
                                ? {
                                      transform: "rotate(-135deg)",
                                      position: "absolute",
                                  }
                                : {}
                        }
                        className={styles.line}></div>
                </div>
                <div
                    style={{ left: isOpen ? "0" : "-100%" }}
                    className={styles.menu}>
                    <ul>
                        {Navlinks.map((link, index) => (
                            <Link
                                onClick={toggleMenu}
                                href={link.path}
                                key={index}>
                                <li>{link.name}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
