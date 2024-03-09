import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./gallery.module.scss";

import data from "../../../public/data.json";
import arrow from "../../../public/icons/arrow.svg";

const Projects = () => {
    return (
        <div className={styles.container}>
            {data.map((project) => (
                <Link href={`${project._id}`} key={project._id}>
                    <Image
                        src={project.cover}
                        alt={`${project.title}'s preview`}
                        fill
                    />
                    <h3>{project.title}</h3>
                    <div className={styles.text}>
                        <p>Learn more</p>
                        <Image
                            src={arrow}
                            alt="Arrow icon"
                            width={30}
                            height={12}
                        />
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Projects;
