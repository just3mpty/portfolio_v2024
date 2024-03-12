"use client";
import { motion } from "framer-motion";
import { ReactNode, useEffect } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Navbar from "@/components/Navigation/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/footer/Footer";
import Cursor from "@/components/cursor/Cursor";
import useDimension from "@/hooks/useDimensions";

const variants = {
    hidden: { opacity: 0, x: 0, y: 100 },
    enter: { opacity: 1, x: 0, y: 0 },
};

export default function Template({ children }: { children: ReactNode }) {
    const { width } = useDimension();
    const lenis = useLenis(({ scroll }) => {});

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <ReactLenis root>
            <motion.main
                className="slide-in"
                variants={variants}
                initial="hidden"
                animate="enter"
                transition={{
                    duration: 1,
                    ease: [0.2, 1, 0.3, 1],
                }}>
                {width > 800 ? (
                    <>
                        <Cursor />
                        <Navbar />
                        {children}
                        <Footer />
                    </>
                ) : (
                    <>
                        <Navbar />
                        {children}
                        <Footer />
                    </>
                )}
            </motion.main>
        </ReactLenis>
    );
}
