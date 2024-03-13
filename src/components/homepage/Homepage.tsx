"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/homepage.module.scss";

import star from "/public/img/star.svg";
import profilPicture from "/public/img/profilPic.png";
import useDimension from "@/hooks/useDimensions";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const Scene = dynamic(() => import("@/components/Canvas/Scene"), {
    ssr: false,
});

const parallaxStyle: React.CSSProperties = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    mixBlendMode: "difference",
};

const Homepage = () => {
    const { width } = useDimension();

    return (
        <div className={styles.container}>
            {width > 800 ? (
                <ParallaxProvider>
                    <Parallax style={parallaxStyle} speed={15}>
                        <h1>
                            CORRE<span>Aurélien</span>
                        </h1>
                        <p>
                            <span>frontend developer</span> that spends{" "}
                            <span>more</span> (oops) <span>less</span> time
                            drinking coffee than coding stuff.
                        </p>
                    </Parallax>
                </ParallaxProvider>
            ) : (
                <>
                    <h1>
                        CORRE<span>Aurélien</span>
                    </h1>
                    <p>
                        <span>frontend developer</span> that spends{" "}
                        <span>more</span> (oops) <span>less</span> time drinking
                        coffee than coding stuff.
                    </p>
                </>
            )}
            <Link className={styles.availableLink} href={"#contact"}>
                <p>Available for work</p>
                <Image src={star} alt="Star icon" width={20} height={20} />
            </Link>
            <figure>
                <Image src={profilPicture} alt="Current profil picture" fill />
            </figure>
            <div className={styles.sceneContainer}>
                <Scene />
            </div>
        </div>
    );
};

export default Homepage;
