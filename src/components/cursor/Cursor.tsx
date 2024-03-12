import React, { useEffect, useState } from "react";
import styles from "./cursor.module.scss";
import Image from "next/image";

import cursor from "../../../public/icons/cursor.svg";

const Cursor = () => {
    const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: any) => {
            setDotPosition({ x: e.clientX - 15, y: e.clientY - 15 });
        };

        // Création des events
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            <div
                className={styles.outline}
                style={{
                    transform: `translate(${dotPosition.x - 250}px, ${
                        dotPosition.y - 250
                    }px)`,
                }}></div>
        </>
    );
};

export default Cursor;
