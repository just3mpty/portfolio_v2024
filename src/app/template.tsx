"use client";
import { motion } from "framer-motion";
import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Navbar from "@/components/Navigation/Navbar";

const variants = {
    hidden: { opacity: 0, x: 0, y: 100 },
    enter: { opacity: 1, x: 0, y: 0 },
};

export default function Template({ children }: { children: ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: any) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);
    return (
        <motion.main
            variants={variants}
            initial="hidden"
            animate="enter"
            transition={{
                type: "linear",
            }}>
            <Navbar />
            {children}
        </motion.main>
    );
}
