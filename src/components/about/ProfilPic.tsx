/* eslint-disable react/no-unescaped-entities */
"use client";

import {
    ParallaxProvider,
    ParallaxBanner,
    ParallaxBannerLayer,
} from "react-scroll-parallax";
import React from "react";
import styles from "./about.module.scss";

import profilPic from "../../../public/img/profilPic.png";

const ProfilPic = () => {
    return (
        <ParallaxProvider>
            <div className={styles.joke}>
                <p>
                    I don't really know what to say here, so just know that i
                    like music <span>(a lot)</span>, web design, web
                    development, and coffee{" "}
                    <span>(but you already knew that)</span>.
                </p>
                <ParallaxBanner className={styles.figure}>
                    <ParallaxBannerLayer image={profilPic.src} speed={-20} />
                </ParallaxBanner>
            </div>
        </ParallaxProvider>
    );
};

export default ProfilPic;
