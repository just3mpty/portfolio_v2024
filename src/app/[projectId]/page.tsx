import React from "react";
import data from "../../../public/data.json";
import styles from "./selectedProject.module.scss";
import Image from "next/image";
import Link from "next/link";

import externalLink from "../../../public/icons/link.svg";
import arrow from "../../../public/icons/arrow.svg";

const page = ({ params }: { params: { projectId: string } }) => {
    const { projectId } = params;
    const selectedProject = data.find(
        (project) => project._id.toString() === projectId
    );

    return (
        <section className={styles.container}>
            <h1>{selectedProject?.title}</h1>
            <div className={styles.headingContent}>
                <video
                    src={selectedProject?.video}
                    autoPlay
                    muted
                    loop
                    width={200}
                />
                <div className={styles.infos}>
                    <h3>Description</h3>
                    <p>{selectedProject?.description}</p>
                    <h4>Tech stack</h4>
                    <div className={styles.techStack}>
                        {selectedProject?.techStack.map((tech, index) => (
                            <Image
                                src={tech}
                                key={index}
                                alt="Tech icon"
                                width={60}
                                height={60}
                            />
                        ))}
                    </div>
                    <Link
                        href={`${selectedProject?.linkToWebiste}`}
                        target="_blank">
                        <p>See live</p>
                        <Image
                            src={externalLink}
                            alt="External link icon"
                            width={16}
                            height={16}
                        />
                    </Link>
                </div>
            </div>
            <div className={styles.screenshots}>
                {selectedProject?.images.map((image, index) => (
                    <figure key={index}>
                        <Image
                            src={image}
                            alt={`${selectedProject.title}'s screenshots`}
                            width={2000}
                            height={2000}
                        />
                    </figure>
                ))}
            </div>
            <div className={styles.navigation}>
                <Link href={"/"} target="#gallery">
                    <Image
                        src={arrow}
                        alt="Arrow icon"
                        width={50}
                        height={25}
                    />
                    <p>Back to homepage</p>
                </Link>
                {selectedProject && selectedProject._id < data.length && (
                    <Link href={`/${selectedProject._id + 1}`}>
                        <Image
                            src={arrow}
                            alt="Arrow icon"
                            width={50}
                            height={25}
                        />
                        <p>Next project</p>
                    </Link>
                )}
            </div>
        </section>
    );
};

export default page;
