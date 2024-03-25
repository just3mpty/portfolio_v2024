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
                    Actuellement sur le parcours Intégrateur Web chez
                    OpenClassrooms, j'aime <span>(beaucoup)</span> la musique,
                    le web design, le développement web, et le café{" "}
                    <span>(mais ça tu le savais déjà)</span>.
                </p>
                <ParallaxBanner className={styles.figure}>
                    <ParallaxBannerLayer image={profilPic.src} speed={-20} />
                </ParallaxBanner>
            </div>
        </ParallaxProvider>
    );
};

export default ProfilPic;
