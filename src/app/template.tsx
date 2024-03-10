"use client";
import { motion } from "framer-motion";
import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Navbar from "@/components/Navigation/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/footer/Footer";

const variants = {
    hidden: { opacity: 0, x: 0, y: 100 },
    enter: { opacity: 1, x: 0, y: 0 },
};

export default function Template({ children }: { children: ReactNode }) {
    useEffect(() => {
        AOS.init();
        const lenis = new Lenis();

        function raf(time: any) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);
    return (
        <motion.main
            className="slide-in"
            variants={variants}
            initial="hidden"
            animate="enter"
            transition={{
                duration: 1,
                ease: [0.2, 1, 0.3, 1],
            }}>
            <Navbar />
            {children}
            <Footer />
        </motion.main>
    );
}
